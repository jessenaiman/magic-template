import { VariantProps } from "class-variance-authority";
import React from "react";
interface RainbowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
}
declare const rainbowButtonVariants: (props?: ({
    variant?: "outline" | "default" | null | undefined;
    size?: "default" | "icon" | "sm" | "lg" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
interface RainbowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof rainbowButtonVariants> {
    asChild?: boolean;
}
declare const RainbowButton: React.ForwardRefExoticComponent<RainbowButtonProps & React.RefAttributes<HTMLButtonElement>>;
export { RainbowButton, rainbowButtonVariants, type RainbowButtonProps };
//# sourceMappingURL=rainbow-button.d.ts.map