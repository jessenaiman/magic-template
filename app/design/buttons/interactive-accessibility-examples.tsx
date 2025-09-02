"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@workspace/ui/components/card";
import { PreviewTile } from "@/components/design/preview-tile";
import { 
  Heart, 
  BookOpen, 
  Volume2, 
  VolumeX, 
  Sun, 
  Moon, 
  ChevronDown,
  Check,
  X,
  AlertCircle,
  Loader2
} from "lucide-react";
import { useState } from "react";

function CodeBlock({ code, language }: { code: string; language: string }) {
  return (
    <div className="relative">
      <pre className="max-h-48 overflow-auto rounded-md border bg-gray-900 p-3 text-sm text-gray-100">
        <code>{code}</code>
      </pre>
    </div>
  );
}

// Toggle Button Implementation
const ToggleButton = ({ 
  initialState = false, 
  onIcon: OnIcon = Sun, 
  offIcon: OffIcon = Moon, 
  onLabel = "On", 
  offLabel = "Off",
  className = "",
  ...props 
}: any) => {
  const [isToggled, setIsToggled] = useState(initialState);

  return (
    <button
      onClick={() => setIsToggled(!isToggled)}
      className={`
        flex items-center gap-3 px-4 py-3 rounded-lg font-medium
        transition-all duration-300 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        ${isToggled 
          ? 'bg-blue-600 text-white shadow-lg' 
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }
        ${className}
      `}
      aria-pressed={isToggled}
      role="switch"
      {...props}
    >
      {isToggled ? <OnIcon className="h-5 w-5" /> : <OffIcon className="h-5 w-5" />}
      <span>{isToggled ? onLabel : offLabel}</span>
    </button>
  );
};

// Loading Button Implementation
const LoadingButton = ({ 
  children, 
  isLoading = false, 
  disabled = false,
  className = "",
  ...props 
}: any) => {
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
      className={`
        relative flex items-center justify-center gap-2 px-6 py-3 
        bg-blue-600 text-white font-medium rounded-lg
        transition-all duration-300
        hover:bg-blue-700 
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-600
        ${className}
      `}
      aria-busy={loading}
      {...props}
    >
      {loading && (
        <Loader2 className="h-4 w-4 animate-spin" />
      )}
      <span className={loading ? 'opacity-70' : ''}>{children}</span>
    </button>
  );
};

// Confirmation Button Implementation  
const ConfirmationButton = ({ 
  children, 
  onConfirm, 
  confirmText = "Are you sure?", 
  confirmLabel = "Yes, confirm",
  cancelLabel = "Cancel",
  className = "",
  variant = "danger",
  ...props 
}: any) => {
  const [showConfirm, setShowConfirm] = useState(false);

  const handleConfirm = () => {
    onConfirm?.();
    setShowConfirm(false);
  };

  const variantStyles = {
    danger: 'bg-red-600 hover:bg-red-700 text-white',
    warning: 'bg-yellow-600 hover:bg-yellow-700 text-white',
    primary: 'bg-blue-600 hover:bg-blue-700 text-white'
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
            onClick={handleConfirm}
            className={`
              flex-1 px-4 py-2 text-sm font-medium rounded
              ${variantStyles[variant]}
              focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2
            `}
          >
            <Check className="h-4 w-4 inline-block mr-1" />
            {confirmLabel}
          </button>
          <button
            onClick={() => setShowConfirm(false)}
            className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            <X className="h-4 w-4 inline-block mr-1" />
            {cancelLabel}
          </button>
        </div>
      </div>
    );
  }

  return (
    <button
      onClick={() => setShowConfirm(true)}
      className={`
        px-6 py-3 font-medium rounded-lg transition-all duration-300
        focus:outline-none focus:ring-2 focus:ring-offset-2
        ${variantStyles[variant]}
        focus:ring-red-500
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

// Favorite Button Implementation
const FavoriteButton = ({ 
  initialFavorited = false,
  onToggle,
  className = "",
  ...props 
}: any) => {
  const [isFavorited, setIsFavorited] = useState(initialFavorited);

  const handleToggle = () => {
    setIsFavorited(!isFavorited);
    onToggle?.(!isFavorited);
  };

  return (
    <button
      onClick={handleToggle}
      className={`
        relative group p-3 rounded-full transition-all duration-300
        focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2
        ${isFavorited 
          ? 'bg-pink-100 text-pink-600' 
          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }
        ${className}
      `}
      aria-label={isFavorited ? "Remove from favorites" : "Add to favorites"}
      aria-pressed={isFavorited}
      {...props}
    >
      <Heart 
        className={`
          h-5 w-5 transition-all duration-300 transform
          ${isFavorited ? 'fill-current scale-110' : 'group-hover:scale-110'}
        `} 
      />
      {isFavorited && (
        <div className="absolute inset-0 rounded-full bg-pink-500 opacity-20 animate-ping" />
      )}
    </button>
  );
};

// Accessible Button with Screen Reader Support
const AccessibleButton = ({ 
  children, 
  description, 
  shortcut,
  className = "",
  ...props 
}: any) => {
  return (
    <button
      className={`
        relative px-6 py-3 bg-green-600 text-white font-medium rounded-lg
        transition-all duration-300 hover:bg-green-700
        focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2
        ${className}
      `}
      aria-describedby={description ? "button-description" : undefined}
      title={shortcut ? `${children} (${shortcut})` : undefined}
      {...props}
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
};

export default function InteractiveAccessibilityButtonsPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Interactive & Accessible Buttons</h1>
        <p className="text-muted-foreground">
          Advanced button implementations focusing on interactivity, user feedback, and accessibility compliance.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Toggle Button */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Toggle Button</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <PreviewTile
              title="Toggle State"
              description="Switch between two states"
              componentName="toggle-button"
            >
              <ToggleButton
                onIcon={Volume2}
                offIcon={VolumeX}
                onLabel="Sound On"
                offLabel="Sound Off"
              />
            </PreviewTile>
            <CodeBlock
              code={`const ToggleButton = ({ 
  initialState = false, 
  onIcon: OnIcon, 
  offIcon: OffIcon, 
  onLabel, 
  offLabel 
}) => {
  const [isToggled, setIsToggled] = useState(initialState);

  return (
    <button
      onClick={() => setIsToggled(!isToggled)}
      className={\`
        flex items-center gap-3 px-4 py-3 rounded-lg font-medium
        transition-all duration-300 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        \${isToggled 
          ? 'bg-blue-600 text-white shadow-lg' 
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }
      \`}
      aria-pressed={isToggled}
      role="switch"
    >
      {isToggled ? <OnIcon className="h-5 w-5" /> : <OffIcon className="h-5 w-5" />}
      <span>{isToggled ? onLabel : offLabel}</span>
    </button>
  );
};`}
              language="tsx"
            />
          </CardContent>
        </Card>

        {/* Loading Button */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Loading Button</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <PreviewTile
              title="Loading State"
              description="Async operation feedback"
              componentName="loading-button"
            >
              <LoadingButton>
                Save Changes
              </LoadingButton>
            </PreviewTile>
            <CodeBlock
              code={`const LoadingButton = ({ children, isLoading = false }) => {
  const [internalLoading, setInternalLoading] = useState(false);
  const loading = isLoading || internalLoading;

  const handleClick = async () => {
    setInternalLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setInternalLoading(false);
  };

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className="relative flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg transition-all duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
      aria-busy={loading}
    >
      {loading && <Loader2 className="h-4 w-4 animate-spin" />}
      <span className={loading ? 'opacity-70' : ''}>{children}</span>
    </button>
  );
};`}
              language="tsx"
            />
          </CardContent>
        </Card>

        {/* Confirmation Button */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Confirmation Button</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <PreviewTile
              title="Confirmation Dialog"
              description="Prevent accidental actions"
              componentName="confirmation-button"
            >
              <ConfirmationButton
                onConfirm={() => console.log('Deleted!')}
                confirmText="This action cannot be undone"
                variant="danger"
              >
                Delete Item
              </ConfirmationButton>
            </PreviewTile>
            <CodeBlock
              code={`const ConfirmationButton = ({ 
  children, 
  onConfirm, 
  confirmText = "Are you sure?", 
  variant = "danger" 
}) => {
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
            <Check className="h-4 w-4 inline-block mr-1" />
            Yes, confirm
          </button>
          <button onClick={() => setShowConfirm(false)} className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded hover:bg-gray-200">
            <X className="h-4 w-4 inline-block mr-1" />
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
              language="tsx"
            />
          </CardContent>
        </Card>

        {/* Favorite Button */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Favorite Button</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <PreviewTile
              title="Favorite Toggle"
              description="Heart animation with feedback"
              componentName="favorite-button"
            >
              <FavoriteButton
                onToggle={(favorited: boolean) => 
                  console.log(`${favorited ? 'Added to' : 'Removed from'} favorites`)
                }
              />
            </PreviewTile>
            <CodeBlock
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
      className={\`
        relative group p-3 rounded-full transition-all duration-300
        focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2
        \${isFavorited 
          ? 'bg-pink-100 text-pink-600' 
          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }
      \`}
      aria-label={isFavorited ? "Remove from favorites" : "Add to favorites"}
      aria-pressed={isFavorited}
    >
      <Heart 
        className={\`
          h-5 w-5 transition-all duration-300 transform
          \${isFavorited ? 'fill-current scale-110' : 'group-hover:scale-110'}
        \`} 
      />
      {isFavorited && (
        <div className="absolute inset-0 rounded-full bg-pink-500 opacity-20 animate-ping" />
      )}
    </button>
  );
};`}
              language="tsx"
            />
          </CardContent>
        </Card>

        {/* Accessible Button */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Accessible Button</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <PreviewTile
              title="Screen Reader Optimized"
              description="Full accessibility support"
              componentName="accessible-button"
            >
              <AccessibleButton
                description="Opens the document reader with enhanced accessibility features"
                shortcut="Ctrl+R"
              >
                <BookOpen className="inline-block w-4 h-4 mr-2" />
                Read Document
              </AccessibleButton>
            </PreviewTile>
            <CodeBlock
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
              language="tsx"
            />
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 p-6 bg-muted rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Accessibility Best Practices</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-2">ARIA Attributes</h4>
            <ul className="text-muted-foreground text-sm space-y-1">
              <li>• Use <code className="bg-background px-2 py-1 rounded">aria-pressed</code> for toggle buttons</li>
              <li>• Use <code className="bg-background px-2 py-1 rounded">aria-busy</code> for loading states</li>
              <li>• Use <code className="bg-background px-2 py-1 rounded">aria-label</code> for buttons without text</li>
              <li>• Use <code className="bg-background px-2 py-1 rounded">aria-describedby</code> for additional context</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Focus Management</h4>
            <ul className="text-muted-foreground text-sm space-y-1">
              <li>• Always provide visible focus indicators</li>
              <li>• Use <code className="bg-background px-2 py-1 rounded">focus:ring-2</code> for keyboard navigation</li>
              <li>• Ensure focus order follows visual layout</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Screen Reader Support</h4>
            <ul className="text-muted-foreground text-sm space-y-1">
              <li>• Use <code className="bg-background px-2 py-1 rounded">sr-only</code> class for screen reader only content</li>
              <li>• Provide meaningful button labels and descriptions</li>
              <li>• Announce state changes clearly</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}