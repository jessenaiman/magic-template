import { type HTMLMotionProps, type Transition } from 'motion/react';
type ShimmeringTextProps = {
    text: string;
    duration?: number;
    transition?: Transition;
    wave?: boolean;
    color?: string;
    shimmeringColor?: string;
} & Omit<HTMLMotionProps<'span'>, 'children'>;
declare function ShimmeringText({ text, duration, transition, wave, className, color, shimmeringColor, ...props }: ShimmeringTextProps): import("react/jsx-runtime").JSX.Element;
export { ShimmeringText, type ShimmeringTextProps };
//# sourceMappingURL=shimmering.d.ts.map