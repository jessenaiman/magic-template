import { MotionProps } from "motion/react";
import React from "react";
interface ShinyButtonProps extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps>, MotionProps {
    children: React.ReactNode;
    className?: string;
}
export declare const ShinyButton: React.ForwardRefExoticComponent<ShinyButtonProps & React.RefAttributes<HTMLButtonElement>>;
export {};
//# sourceMappingURL=shiny-button.d.ts.map