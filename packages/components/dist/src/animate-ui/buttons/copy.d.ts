import { HTMLMotionProps } from 'motion/react';
import { type VariantProps } from 'class-variance-authority';
declare const buttonVariants: (props?: ({
    variant?: "outline" | "default" | "muted" | "destructive" | "secondary" | "ghost" | null | undefined;
    size?: "default" | "sm" | "md" | "lg" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
type CopyButtonProps = Omit<HTMLMotionProps<'button'>, 'children' | 'onCopy'> & VariantProps<typeof buttonVariants> & {
    content?: string;
    delay?: number;
    onCopy?: (content: string) => void;
    isCopied?: boolean;
    onCopyChange?: (isCopied: boolean) => void;
};
declare function CopyButton({ content, className, size, variant, delay, onClick, onCopy, isCopied, onCopyChange, ...props }: CopyButtonProps): import("react/jsx-runtime").JSX.Element;
export { CopyButton, buttonVariants, type CopyButtonProps };
//# sourceMappingURL=copy.d.ts.map