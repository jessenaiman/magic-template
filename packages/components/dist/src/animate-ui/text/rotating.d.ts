import { type HTMLMotionProps, type Transition } from 'motion/react';
type RotatingTextProps = {
    text: string | string[];
    duration?: number;
    transition?: Transition;
    y?: number;
    containerClassName?: string;
} & HTMLMotionProps<'div'>;
declare function RotatingText({ text, y, duration, transition, containerClassName, ...props }: RotatingTextProps): import("react/jsx-runtime").JSX.Element;
export { RotatingText, type RotatingTextProps };
//# sourceMappingURL=rotating.d.ts.map