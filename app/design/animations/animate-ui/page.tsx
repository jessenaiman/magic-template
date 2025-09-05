
"use client";
import { PreviewTile } from "@/components/preview-tile";
import { Copy } from "lucide-react";
import { useState } from "react";

// Copy Button
const CopyButton = ({ text = "Hello World", children, className = "", ...props }) => {
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
const FlipButton = ({ children, className = "", ...props }) => (
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
const GitHubStarsButton = ({ repo = "owner/repo", stars = 1234, className = "", ...props }) => (
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
const IconButton = ({ icon: Icon = Copy, className = "", ...props }) => {
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
