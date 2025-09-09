import * as React from 'react';
import { type HTMLMotionProps, type SpringOptions, type Transition } from 'motion/react';
type StarLayerProps = HTMLMotionProps<'div'> & {
    count: number;
    size: number;
    transition: Transition;
    starColor: string;
};
declare function StarLayer({ count, size, transition, starColor, className, ...props }: StarLayerProps): import("react/jsx-runtime").JSX.Element;
type StarsBackgroundProps = React.ComponentProps<'div'> & {
    factor?: number;
    speed?: number;
    transition?: SpringOptions;
    starColor?: string;
    pointerEvents?: boolean;
};
declare function StarsBackground({ children, className, factor, speed, transition, starColor, pointerEvents, ...props }: StarsBackgroundProps): import("react/jsx-runtime").JSX.Element;
export { StarLayer, StarsBackground, type StarLayerProps, type StarsBackgroundProps, };
//# sourceMappingURL=stars.d.ts.map