import * as React from 'react';
import { type HTMLMotionProps, type UseInViewOptions, type Transition } from 'motion/react';
type MotionEffectProps = HTMLMotionProps<'div'> & {
    children: React.ReactNode;
    className?: string;
    transition?: Transition;
    delay?: number;
    inView?: boolean;
    inViewMargin?: UseInViewOptions['margin'];
    inViewOnce?: boolean;
    blur?: string | boolean;
    slide?: {
        direction?: 'up' | 'down' | 'left' | 'right';
        offset?: number;
    } | boolean;
    fade?: {
        initialOpacity?: number;
        opacity?: number;
    } | boolean;
    zoom?: {
        initialScale?: number;
        scale?: number;
    } | boolean;
};
declare function MotionEffect({ ref, children, className, transition, delay, inView, inViewMargin, inViewOnce, blur, slide, fade, zoom, ...props }: MotionEffectProps): import("react/jsx-runtime").JSX.Element;
export { MotionEffect, type MotionEffectProps };
//# sourceMappingURL=motion-effect.d.ts.map