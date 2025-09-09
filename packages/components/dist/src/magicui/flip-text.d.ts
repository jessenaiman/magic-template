import { Variants, MotionProps } from "motion/react";
import { ElementType } from "react";
import React from "react";
interface FlipTextProps extends MotionProps {
    /** The duration of the animation */
    duration?: number;
    /** The delay between each character */
    delayMultiple?: number;
    /** The variants of the animation */
    framerProps?: Variants;
    /** The class name of the component */
    className?: string;
    /** The element type of the component */
    as?: ElementType;
    /** The children of the component */
    children: React.ReactNode;
    /** The variants of the animation */
    variants?: Variants;
}
export declare function FlipText({ children, duration, delayMultiple, className, as: Component, variants, ...props }: FlipTextProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=flip-text.d.ts.map