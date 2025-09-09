import { type HTMLMotionProps } from 'motion/react';
import { type VariantProps } from 'class-variance-authority';
declare const buttonVariants: (props?: ({
    variant?: "outline" | "default" | "secondary" | null | undefined;
    size?: "default" | "icon" | "sm" | "lg" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
type LiquidButtonProps = HTMLMotionProps<'button'> & VariantProps<typeof buttonVariants>;
declare function LiquidButton({ className, variant, size, ...props }: LiquidButtonProps): import("react/jsx-runtime").JSX.Element;
export { LiquidButton, type LiquidButtonProps };
//# sourceMappingURL=liquid.d.ts.map