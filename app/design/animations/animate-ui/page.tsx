"use client";
import { PreviewTile } from "@/components/preview-tile";
import { Copy } from "lucide-react";
import { useState } from "react";

// Copy Button
// Types for props
type CopyButtonProps = {
  text?: string;
  children?: React.ReactNode;
  className?: string;
  [key: string]: unknown;
};
const CopyButton = ({ text = "Hello World", children, className = "", ...props }: CopyButtonProps) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={handleCopy}
      className={`relative overflow-hidden rounded-lg bg-primary px-4 py-2 text-primary-foreground transition-all duration-300 hover:bg-primary/90 ${className}`}
      {...props}
    >
      <span className={`flex items-center gap-2 transition-transform duration-300 ${copied ? 'scale-95' : 'scale-100'}`}>
        <Copy className="h-4 w-4" />
        {copied ? 'Copied!' : (children || 'Copy')}
      </span>
      {copied && (
        <div className="absolute inset-0 bg-green-500/20 animate-pulse rounded-lg" />
      )}
    </button>
  );
};

// Flip Button
// Types for props
type FlipButtonProps = {
  children?: React.ReactNode;
  className?: string;
  [key: string]: unknown;
};
const FlipButton = ({ children, className = "", ...props }: FlipButtonProps) => (
  <button
    className={`group relative overflow-hidden rounded-lg bg-primary px-6 py-3 text-primary-foreground transition-all duration-500 hover:bg-primary/90 ${className}`}
    {...props}
  >
    <span className="relative block transition-transform duration-500 group-hover:scale-y-[-1]">
      {children}
    </span>
  </button>
);

// GitHub Stars Button
// Types for props
type GitHubStarsButtonProps = {
  repo?: string;
  stars?: number;
  className?: string;
  [key: string]: unknown;
};
const GitHubStarsButton = ({ stars = 1234, className = "", ...props }: GitHubStarsButtonProps) => (
  <button
    className={`flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-300 hover:bg-gray-50 hover:border-gray-400 ${className}`}
    {...props}
  >
    <span>⭐</span>
    <span>Star</span>
    <div className="flex items-center gap-1 rounded bg-gray-100 px-2 py-1 text-xs">
      <span>★</span>
      {stars.toLocaleString()}
    </div>
  </button>
);

// Icon Button
// Types for props
type IconButtonProps = {
  icon?: React.ElementType;
  className?: string;
  [key: string]: unknown;
};
const IconButton = ({ icon: Icon = Copy, className = "", ...props }: IconButtonProps) => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 600);
  };
  return (
    <button
      onClick={handleClick}
      className={`relative rounded-full bg-primary p-3 text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:scale-110 ${className}`}
      {...props}
    >
      <Icon className={`h-5 w-5 transition-transform duration-300 ${clicked ? 'scale-110' : 'scale-100'}`} />
      {clicked && (
        <div className="absolute inset-0 animate-ping rounded-full bg-primary/50" />
      )}
    </button>
  );
};

// Ripple Button
// Types for props and ripple state
type Ripple = { x: number; y: number; id: number };
type RippleButtonProps = {
  children?: React.ReactNode;
  className?: string;
  [key: string]: unknown;
};
const RippleButton = ({ children, className = "", ...props }: RippleButtonProps) => {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const createRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newRipple = { x, y, id: Date.now() };
    setRipples(prev => [...prev, newRipple]);
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== newRipple.id));
    }, 600);
  };
  return (
    <button
      onClick={createRipple}
      className={`relative overflow-hidden rounded-lg border-2 border-primary bg-background px-6 py-3 text-primary transition-all duration-300 hover:bg-primary/5 ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {ripples.map(ripple => (
        <span
          key={ripple.id}
          className="absolute animate-ping rounded-full bg-primary/20"
          style={{
            left: ripple.x - 10,
            top: ripple.y - 10,
            width: 20,
            height: 20,
          }}
        />
      ))}
    </button>
  );
};

export default function Page() {
  return (
    <div className="space-y-8">
      <PreviewTile
        title="Copy Button"
        description="Copy to clipboard with feedback"
        componentName="copy-button"
        code=""
      >
        {() => <CopyButton text="Hello from Animate UI!">Copy Text</CopyButton>}
      </PreviewTile>
      <PreviewTile
        title="Flip Button"
        description="3D flip animation on hover"
        componentName="flip-button"
        code=""
      >
        {() => <FlipButton>Flip Me</FlipButton>}
      </PreviewTile>
      <PreviewTile
        title="GitHub Stars Button"
        description="GitHub-style star button"
        componentName="github-stars-button"
        code=""
      >
        {() => <GitHubStarsButton repo="animate-ui/components" stars={2847} />}
      </PreviewTile>
      <PreviewTile
        title="Icon Button"
        description="Animated icon with ripple effect"
        componentName="icon-button"
        code=""
      >
        {() => <IconButton icon={Copy} />}
      </PreviewTile>
      <PreviewTile
        title="Ripple Button"
        description="Click ripple animation"
        componentName="ripple-button"
        code=""
      >
        {() => <RippleButton>Click for Ripple</RippleButton>}
      </PreviewTile>
    </div>
  );
}