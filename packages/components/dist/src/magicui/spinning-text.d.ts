import { Transition, Variants } from "motion/react";
import { CSSProperties } from "react";
type SpinningTextProps = {
    children: string | string[];
    style?: CSSProperties;
    duration?: number;
    className?: string;
    reverse?: boolean;
    fontSize?: number;
    radius?: number;
    transition?: Transition;
    variants?: {
        container?: Variants;
        item?: Variants;
    };
};
export declare function SpinningText({ children, duration, style, className, reverse, radius, transition, variants, }: SpinningTextProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=spinning-text.d.ts.map