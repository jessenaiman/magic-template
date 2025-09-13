'use client';

import { PreviewTile } from '@/components/preview/preview-tile';
import { PreviewGrid } from '@/components/preview/preview-grid';
import { Heart, BookOpen, Sun, Moon, AlertCircle, Loader2 } from 'lucide-react';
import * as React from 'react';
import { useState } from 'react';

// Toggle Button Implementation
import type { ButtonHTMLAttributes, ReactNode, ElementType } from 'react';

interface ToggleButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  initialState?: boolean;
  onIcon?: ElementType;
  offIcon?: ElementType;
  onLabel?: string;
  offLabel?: string;
  className?: string;
}

const ToggleButton = ({
  initialState = false,
  onIcon: OnIcon = Sun,
  offIcon: OffIcon = Moon,
  onLabel = 'On',
  offLabel = 'Off',
  className = '',
  ...props
}: ToggleButtonProps) => {
  const [isToggled, setIsToggled] = useState(initialState);

  return (
    <button
      type="button"
      onClick={() => setIsToggled(!isToggled)}
      className={[
        'flex items-center gap-3 px-4 py-3 rounded-lg font-medium',
        'transition-all duration-300 ease-in-out',
        'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
        isToggled
          ? 'bg-blue-600 text-white shadow-lg'
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200',
        className,
      ].join(' ')}
      aria-checked={isToggled}
      role="switch"
      {...props}
    >
      {isToggled
        ? React.createElement(OnIcon, { className: 'h-5 w-5' })
        : React.createElement(OffIcon, { className: 'h-5 w-5' })}
      <span>{isToggled ? onLabel : offLabel}</span>
    </button>
  );
};

// Loading Button Implementation
interface LoadingButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  className?: string;
  children: ReactNode;
}

const LoadingButton = ({
  children,
  isLoading = false,
  disabled = false,
  className = '',
  ...props
}: LoadingButtonProps) => {
  const [internalLoading, setInternalLoading] = useState(false);
  const loading = isLoading || internalLoading;

  const handleClick = async () => {
    setInternalLoading(true);
    // Simulate async operation
    await new Promise(resolve => setTimeout(resolve, 2000));
    setInternalLoading(false);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={loading || disabled}
      className={[
        'relative flex items-center justify-center gap-2 px-6 py-3',
        'bg-blue-600 text-white font-medium rounded-lg',
        'transition-all duration-300',
        'hover:bg-blue-700',
        'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-600',
        className,
      ].join(' ')}
      aria-busy={loading}
      {...props}
    >
      {loading && <Loader2 className="h-4 w-4 animate-spin" />}
      <span className={loading ? 'opacity-70' : ''}>{children}</span>
    </button>
  );
};

// Confirmation Button Implementation
interface ConfirmationButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  onConfirm?: () => void;
  confirmText?: string;
  children: ReactNode;
}

function ConfirmationButton({
  children,
  onConfirm,
  confirmText = 'Are you sure?',
  ...props
}: ConfirmationButtonProps) {
  const [showConfirm, setShowConfirm] = useState(false);
  const handleConfirm = () => {
    onConfirm?.();
    setShowConfirm(false);
  };
  if (showConfirm) {
    return (
      <div className="flex flex-col gap-3 p-4 bg-white border border-gray-200 rounded-lg shadow-lg">
        <div className="flex items-center gap-2 text-gray-700">
          <AlertCircle className="h-4 w-4 text-yellow-600" />
          <span className="text-sm">{confirmText}</span>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={handleConfirm}
            className="flex-1 px-4 py-2 text-sm font-medium rounded bg-red-600 hover:bg-red-700 text-white"
          >
            Delete Item
          </button>
          <button
            type="button"
            onClick={() => setShowConfirm(false)}
            className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded hover:bg-gray-200"
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }
  return (
    <button
      type="button"
      onClick={() => setShowConfirm(true)}
      className="px-6 py-3 font-medium rounded-lg transition-all duration-300 bg-red-600 hover:bg-red-700 text-white"
      {...props}
    >
      {children}
    </button>
  );
}

interface FavoriteButtonProps {
  initialFavorited?: boolean;
  onToggle?: (favorited: boolean) => void;
}

function FavoriteButton({
  initialFavorited = false,
  onToggle,
}: FavoriteButtonProps) {
  const [isFavorited, setIsFavorited] = useState(initialFavorited);
  const handleToggle = () => {
    setIsFavorited(!isFavorited);
    onToggle?.(!isFavorited);
  };
  return (
    <button
      onClick={handleToggle}
      className={`relative group p-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 ${isFavorited ? 'bg-pink-100 text-pink-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
      aria-label={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
      aria-pressed={isFavorited}
    >
      <Heart
        className={`h-5 w-5 transition-all duration-300 transform ${isFavorited ? 'fill-current scale-110' : 'group-hover:scale-110'}`}
      />
      {isFavorited && (
        <div className="absolute inset-0 rounded-full bg-pink-500 opacity-20 animate-ping" />
      )}
    </button>
  );
}

interface AccessibleButtonProps {
  children: React.ReactNode;
  description?: string;
  shortcut?: string;
}

function AccessibleButton({
  children,
  description,
  shortcut,
}: AccessibleButtonProps) {
  return (
    <button
      className="relative px-6 py-3 bg-green-600 text-white font-medium rounded-lg transition-all duration-300 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
      aria-describedby={description ? 'button-description' : undefined}
      title={shortcut ? `${children} (${shortcut})` : undefined}
    >
      <BookOpen className="inline-block w-4 h-4 mr-2" />
      {children}
      {shortcut && (
        <span className="ml-2 text-xs opacity-70 bg-green-700 px-2 py-1 rounded">
          {shortcut}
        </span>
      )}
      {description && (
        <div id="button-description" className="sr-only">
          {description}
        </div>
      )}
    </button>
  );
}

export default function InteractiveAccessibilityExamplesPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">
          Interactive & Accessible Buttons
        </h1>
        <p className="text-muted-foreground">
          Modern button implementations with full accessibility support,
          interactive states, and enhanced user experience patterns.
        </p>
      </div>

      <PreviewGrid>
        <PreviewTile
          title="Toggle Button"
          description="Theme switcher with proper ARIA states"
          componentName="toggle-button"
          code={`const ToggleButton = ({
  initialState = false,
  onIcon: OnIcon = Sun,
  offIcon: OffIcon = Moon,
  onLabel = "On",
  offLabel = "Off",
  className = "",
  ...props
}) => {
  const [isToggled, setIsToggled] = useState(initialState);

  return (
    <button
      onClick={() => setIsToggled(!isToggled)}
      className={flex items-center gap-3 px-4 py-3 rounded-lg font-medium
        transition-all duration-300 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        \${isToggled
          ? 'bg-blue-600 text-white shadow-lg'
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }
        \${className}
      }
      aria-checked={isToggled}
      role="switch"
      {...props}
    >
      {isToggled ? <OnIcon className="h-5 w-5" /> : <OffIcon className="h-5 w-5" />}
      <span>{isToggled ? onLabel : offLabel}</span>
    </button>
  );
};`}
        >
          <ToggleButton />
        </PreviewTile>

        <PreviewTile
          title="Loading Button"
          description="Async operations with loading states"
          componentName="loading-button"
          code={`const LoadingButton = ({
  children,
  isLoading = false,
  disabled = false,
  className = "",
  ...props
}) => {
  const [internalLoading, setInternalLoading] = useState(false);
  const loading = isLoading || internalLoading;

  const handleClick = async () => {
    setInternalLoading(true);
    // Simulate async operation
    await new Promise(resolve => setTimeout(resolve, 2000));
    setInternalLoading(false);
  };

  return (
    <button
      onClick={handleClick}
      disabled={loading || disabled}
      className={relative flex items-center justify-center gap-2 px-6 py-3
        bg-blue-600 text-white font-medium rounded-lg
        transition-all duration-300
        hover:bg-blue-700
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-600
        \${className}
      }
      aria-busy={loading}
      {...props}
    >
      {loading && <Loader2 className="h-4 w-4 animate-spin" />}
      <span className={loading ? 'opacity-70' : ''}>{children}</span>
    </button>
  );
};`}
        >
          <LoadingButton isLoading={false}>Click to Load</LoadingButton>
        </PreviewTile>

        <PreviewTile
          title="Confirmation Button"
          description="Dangerous actions with confirmation dialog"
          componentName="confirmation-button"
          code={`function ConfirmationButton({
  children,
  onConfirm,
  confirmText = "Are you sure?",
  variant = "danger"
}) {
  const [showConfirm, setShowConfirm] = useState(false);
  const handleConfirm = () => {
    onConfirm?.();
    setShowConfirm(false);
  };

  if (showConfirm) {
    return (
      <div className="flex flex-col gap-3 p-4 bg-white border border-gray-200 rounded-lg shadow-lg">
        <div className="flex items-center gap-2 text-gray-700">
          <AlertCircle className="h-4 w-4 text-yellow-600" />
          <span className="text-sm">{confirmText}</span>
        </div>
        <div className="flex gap-2">
          <button onClick={handleConfirm} className="flex-1 px-4 py-2 text-sm font-medium rounded bg-red-600 hover:bg-red-700 text-white">
            Delete Item
          </button>
          <button onClick={() => setShowConfirm(false)} className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded hover:bg-gray-200">
            Cancel
          </button>
        </div>
      </div>
    );
  }

  return (
    <button onClick={() => setShowConfirm(true)} className="px-6 py-3 font-medium rounded-lg transition-all duration-300 bg-red-600 hover:bg-red-700 text-white">
      {children}
    </button>
  );
};`}
        >
          <ConfirmationButton>Delete Item</ConfirmationButton>
        </PreviewTile>

        <PreviewTile
          title="Favorite Toggle"
          description="Heart animation with feedback"
          componentName="favorite-button"
          code={`const FavoriteButton = ({
  initialFavorited = false,
  onToggle
}) => {
  const [isFavorited, setIsFavorited] = useState(initialFavorited);

  const handleToggle = () => {
    setIsFavorited(!isFavorited);
    onToggle?.(!isFavorited);
  };

  return (
    <button
      onClick={handleToggle}
      className={relative group p-3 rounded-full transition-all duration-300
        focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2
        \${isFavorited
          ? 'bg-pink-100 text-pink-600'
          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }
      }
      aria-label={isFavorited ? "Remove from favorites" : "Add to favorites"}
      aria-pressed={isFavorited}
    >
      <Heart
        className={h-5 w-5 transition-all duration-300 transform
          \${isFavorited ? 'fill-current scale-110' : 'group-hover:scale-110'}
        }
      />
      {isFavorited && (
        <div className="absolute inset-0 rounded-full bg-pink-500 opacity-20 animate-ping" />
      )}
    </button>
  );
};`}
        >
          <FavoriteButton
            onToggle={(favorited: boolean) =>
              console.log(
                `${favorited ? 'Added to' : 'Removed from'} favorites`
              )
            }
          />
        </PreviewTile>

        <PreviewTile
          title="Screen Reader Optimized"
          description="Full accessibility support"
          componentName="accessible-button"
          code={`const AccessibleButton = ({
  children,
  description,
  shortcut
}) => {
  return (
    <button
      className="relative px-6 py-3 bg-green-600 text-white font-medium rounded-lg transition-all duration-300 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
      aria-describedby={description ? "button-description" : undefined}
      title={shortcut ? \`\${children} (\${shortcut})\` : undefined}
    >
      {children}
      {shortcut && (
        <span className="ml-2 text-xs opacity-70 bg-green-700 px-2 py-1 rounded">
          {shortcut}
        </span>
      )}
      {description && (
        <div id="button-description" className="sr-only">
          {description}
        </div>
      )}
    </button>
  );
};`}
        >
          <AccessibleButton
            description="Opens the document reader with enhanced accessibility features"
            shortcut="Ctrl+R"
          >
            Read Document
          </AccessibleButton>
        </PreviewTile>
      </PreviewGrid>

      <div className="mt-8 p-6 bg-muted rounded-lg">
        <h3 className="text-lg font-semibold mb-4">
          Accessibility Best Practices
        </h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-2">ARIA Attributes</h4>
            <ul className="text-muted-foreground text-sm space-y-1">
              <li>
                • Use{' '}
                <code className="bg-background px-2 py-1 rounded">
                  aria-pressed
                </code>{' '}
                for toggle buttons
              </li>
              <li>
                • Use{' '}
                <code className="bg-background px-2 py-1 rounded">
                  aria-busy
                </code>{' '}
                for loading states
              </li>
              <li>
                • Use{' '}
                <code className="bg-background px-2 py-1 rounded">
                  aria-label
                </code>{' '}
                for buttons without text
              </li>
              <li>
                • Use{' '}
                <code className="bg-background px-2 py-1 rounded">
                  aria-describedby
                </code>{' '}
                for additional context
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Focus Management</h4>
            <ul className="text-muted-foreground text-sm space-y-1">
              <li>• Always provide visible focus indicators</li>
              <li>
                • Use{' '}
                <code className="bg-background px-2 py-1 rounded">
                  focus:ring-2
                </code>{' '}
                for keyboard navigation
              </li>
              <li>• Ensure focus order follows visual layout</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Screen Reader Support</h4>
            <ul className="text-muted-foreground text-sm space-y-1">
              <li>
                • Use{' '}
                <code className="bg-background px-2 py-1 rounded">sr-only</code>{' '}
                class for screen reader only content
              </li>
              <li>• Provide meaningful button labels and descriptions</li>
              <li>• Announce state changes clearly</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
