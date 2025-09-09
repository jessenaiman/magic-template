import { type HTMLMotionProps, type Transition } from 'motion/react';
type FlipDirection = 'top' | 'bottom' | 'left' | 'right';
type FlipButtonProps = HTMLMotionProps<'button'> & {
    frontText: string;
    backText: string;
    transition?: Transition;
    frontClassName?: string;
    backClassName?: string;
    from?: FlipDirection;
};
declare function FlipButton({ frontText, backText, transition, className, frontClassName, backClassName, from, ...props }: FlipButtonProps): import("react/jsx-runtime").JSX.Element;
export { FlipButton, type FlipButtonProps, type FlipDirection };
//# sourceMappingURL=flip.d.ts.map