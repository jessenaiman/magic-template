import { cn } from '@/src/lib/utils';

interface LoadingIndicatorProps {
  className?: string;
}

export function LoadingIndicator({ className }: LoadingIndicatorProps) {
  return (
    <div className={cn('flex h-full w-full items-center justify-center', className)}>
      <div className="flex space-x-2">
        <div className="h-2 w-2 animate-pulse rounded-full bg-primary [animation-delay:-0.3s]" />
        <div className="h-2 w-2 animate-pulse rounded-full bg-primary [animation-delay:-0.15s]" />
        <div className="h-2 w-2 animate-pulse rounded-full bg-primary" />
      </div>
    </div>
  );
}
