import * as React from 'react';
import { cn } from '@/app/lib/utils';

// Common focus management classes
export const focusStyles = {
  default:
    'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-background',
  destructive:
    'focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-background',
  success:
    'focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-background',
  warning:
    'focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-background',
} as const;

// Common button accessibility props
export interface ButtonAccessibilityProps {
  /** Aria label for buttons without text */
  'aria-label'?: string;
  /** True when button represents a toggle/pressed state */
  'aria-pressed'?: boolean;
  /** True when button is in loading/busy state */
  'aria-busy'?: boolean;
  /** ID of additional description element */
  'aria-describedby'?: string;
  /** Keyboard shortcut hint */
  title?: string;
  /** Screen reader only description */
  screenReaderDesc?: string;
  /** Keyboard shortcut text */
  shortcut?: string;
  /** Role override (e.g., 'switch') */
  role?: string;
  /** Tab index */
  tabIndex?: number;
  /** Disabled state for ARIA */
  'aria-disabled'?: boolean;
}

/**
 * Gets standardized button accessibility props based on common patterns
 */
export function getButtonAccessibilityProps(props: {
  isPressed?: boolean;
  isLoading?: boolean;
  isDisabled?: boolean;
  label?: string;
  description?: string;
  shortcut?: string;
  role?: 'button' | 'switch' | 'tab';
}): ButtonAccessibilityProps {
  const {
    isPressed,
    isLoading,
    isDisabled,
    label,
    description,
    shortcut,
    role = 'button',
  } = props;

  const accessibilityProps: ButtonAccessibilityProps = {};

  // ARIA states
  if (role === 'switch' && isPressed !== undefined) {
    accessibilityProps['aria-pressed'] = isPressed;
  } else if (role === 'button' && isPressed !== undefined) {
    accessibilityProps['aria-pressed'] = isPressed;
  }

  if (isLoading) {
    accessibilityProps['aria-busy'] = true;
  }

  if (isDisabled) {
    accessibilityProps['aria-disabled'] = true;
  }

  // Accessible labeling
  if (label) {
    accessibilityProps['aria-label'] = label;
  }

  if (description) {
    accessibilityProps['aria-describedby'] =
      `sr-desc-${Math.random().toString(36).substr(2, 9)}`;
    accessibilityProps.screenReaderDesc = description;
  }

  // Keyboard shortcut hints
  if (shortcut) {
    accessibilityProps.title = label ? `${label} (${shortcut})` : shortcut;
    accessibilityProps.shortcut = shortcut;
  }

  if (role !== 'button') {
    accessibilityProps.role = role;
  }

  return accessibilityProps;
}

/**
 * Screen reader only text component
 * Hides content visually but keeps it available to assistive technologies
 */
export function ScreenReaderOnly({
  children,
  className,
  id,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
} & React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span id={id} className={cn('sr-only', className)} {...props}>
      {children}
    </span>
  );
}

/**
 * Keyboard shortcut display component
 * Shows keyboard shortcuts in a styled badge
 */
export function KeyboardShortcut({
  shortcut,
  className,
  variant = 'default',
}: {
  shortcut: string;
  className?: string;
  variant?: 'default' | 'subtle';
}) {
  return (
    <kbd
      className={cn(
        'inline-block px-2 py-1 text-xs font-mono rounded border',
        variant === 'default'
          ? 'bg-muted text-muted-foreground border-border'
          : 'bg-background text-muted-foreground/70 border-border/50',
        className
      )}
    >
      {shortcut}
    </kbd>
  );
}

/**
 * Accessible button wrapper that handles common accessibility patterns
 */
export interface AccessibleButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'aria-label'> {
  /** Alternative text when button has no visible content */
  label?: string;
  /** True when button represents a toggle/pressed state */
  isPressed?: boolean;
  /** True when button is in loading state */
  isLoading?: boolean;
  /** Additional description for screen readers */
  description?: string;
  /** Keyboard shortcut hint */
  shortcut?: string;
  /** ARIA role override */
  role?: 'button' | 'switch' | 'tab';
  /** Focus style variant */
  focusVariant?: keyof typeof focusStyles;
  /** Show loading spinner */
  showLoadingSpinner?: boolean;
  /** Loading spinner component */
  loadingIcon?: React.ComponentType<{ className?: string }>;
  /** Disabled loading state */
  loadingDisabled?: boolean;
}

export const AccessibleButton = React.forwardRef<
  HTMLButtonElement,
  AccessibleButtonProps
>(
  (
    {
      children,
      label,
      isPressed,
      isLoading,
      description,
      shortcut,
      role = 'button',
      focusVariant = 'default',
      showLoadingSpinner = false,
      loadingIcon: LoadingIcon,
      loadingDisabled = false,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const accessibleProps = getButtonAccessibilityProps({
      isPressed,
      isLoading,
      isDisabled: disabled || (isLoading && loadingDisabled),
      label,
      description,
      shortcut,
      role,
    });

    const isActuallyDisabled =
      (accessibleProps['aria-disabled'] as boolean) ||
      disabled ||
      (isLoading && loadingDisabled);

    return (
      <>
        <button
          ref={ref}
          className={cn(
            'inline-flex items-center justify-center gap-2 px-4 py-2 font-medium rounded-lg',
            'transition-all duration-300',
            focusStyles[focusVariant],
            isActuallyDisabled && 'opacity-50 cursor-not-allowed',
            className
          )}
          disabled={isActuallyDisabled}
          {...accessibleProps}
          {...props}
        >
          {showLoadingSpinner && isLoading && LoadingIcon && (
            <LoadingIcon className="h-4 w-4 animate-spin" />
          )}
          {children}
          {shortcut && <KeyboardShortcut shortcut={shortcut} />}
        </button>

        {/* Screen reader description */}
        {accessibleProps.screenReaderDesc &&
          accessibleProps['aria-describedby'] && (
            <ScreenReaderOnly id={accessibleProps['aria-describedby']}>
              {accessibleProps.screenReaderDesc}
            </ScreenReaderOnly>
          )}
      </>
    );
  }
);

AccessibleButton.displayName = 'AccessibleButton';

/**
 * Accessible toggle button with improved UX patterns
 */
export interface ToggleButtonProps {
  /** Current pressed state */
  pressed: boolean;
  /** Toggle handler */
  onToggle: (pressed: boolean) => void;
  /** Icon for pressed state */
  pressedIcon?: React.ComponentType<{ className?: string }>;
  /** Icon for unpressed state */
  unpressedIcon?: React.ComponentType<{ className?: string }>;
  /** Label for pressed state */
  pressedLabel?: string;
  /** Label for unpressed state */
  unpressedLabel?: string;
  /** Alternative text when button has no visible content */
  label?: string;
  /** True when button is in loading state */
  isLoading?: boolean;
  /** Additional description for screen readers */
  description?: string;
  /** Keyboard shortcut hint */
  shortcut?: string;
  /** ARIA role override */
  role?: 'button' | 'switch' | 'tab';
  /** Focus style variant */
  focusVariant?: keyof typeof focusStyles;
  /** Show loading spinner */
  showLoadingSpinner?: boolean;
  /** Loading spinner component */
  loadingIcon?: React.ComponentType<{ className?: string }>;
  /** Disabled loading state */
  loadingDisabled?: boolean;
  /** CSS class name */
  className?: string;
  /** Button children */
  children?: React.ReactNode;
  /** Disabled state */
  disabled?: boolean;
  /** Button type */
  type?: 'button' | 'submit' | 'reset';
  /** Form association */
  form?: string;
  /** Form validation */
  formAction?: string;
  /** Form encoding */
  formEncType?: 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain';
  /** Form method */
  formMethod?: 'post' | 'get' | 'dialog';
  /** Form no validation */
  formNoValidate?: boolean;
  /** Form target */
  formTarget?: '_self' | '_blank' | '_parent' | '_top';
  /** Button name */
  name?: string;
  /** Button value */
  value?: string;
}

export const ToggleButton = React.forwardRef<
  HTMLButtonElement,
  ToggleButtonProps
>(
  (
    {
      pressed,
      onToggle,
      pressedIcon: PressedIcon,
      unpressedIcon: UnpressedIcon,
      pressedLabel,
      unpressedLabel,
      children,
      label,
      className,
      ...props
    },
    ref
  ) => {
    const currentLabel = label || (pressed ? pressedLabel : unpressedLabel);

    return (
      <AccessibleButton
        ref={ref}
        isPressed={pressed}
        role="switch"
        label={currentLabel}
        onClick={() => onToggle(!pressed)}
        className={cn(
          'transition-colors',
          pressed
            ? 'bg-primary text-primary-foreground shadow-md'
            : 'bg-muted text-muted-foreground hover:bg-muted/80',
          className
        )}
        {...props}
      >
        {PressedIcon && UnpressedIcon ? (
          pressed ? (
            <PressedIcon className="h-4 w-4" />
          ) : (
            <UnpressedIcon className="h-4 w-4" />
          )
        ) : null}
        {children}
      </AccessibleButton>
    );
  }
);

ToggleButton.displayName = 'ToggleButton';

/**
 * Accessible loading button with built-in spinner support
 */
export interface LoadingButtonProps
  extends Omit<AccessibleButtonProps, 'isLoading' | 'aria-busy'> {
  /** Current loading state */
  loading: boolean;
  /** Loading text (defaults to "Loading...") */
  loadingText?: string;
}

export const LoadingButton = React.forwardRef<
  HTMLButtonElement,
  LoadingButtonProps
>(
  (
    {
      loading,
      loadingText = 'Loading...',
      children,
      disabled,
      loadingDisabled = true,
      showLoadingSpinner = true,
      ...props
    },
    ref
  ) => {
    return (
      <AccessibleButton
        ref={ref}
        isLoading={loading}
        disabled={disabled}
        loadingDisabled={loadingDisabled}
        showLoadingSpinner={showLoadingSpinner}
        className={cn(
          'relative',
          loading && 'cursor-wait',
          disabled && 'cursor-not-allowed'
        )}
        {...props}
      >
        {loading ? loadingText : children}
      </AccessibleButton>
    );
  }
);

LoadingButton.displayName = 'LoadingButton';
