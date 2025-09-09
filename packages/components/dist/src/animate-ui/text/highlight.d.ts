import { type HTMLMotionProps, type Transition, type UseInViewOptions } from 'motion/react';
type HighlightTextProps = HTMLMotionProps<'span'> & {
    text: string;
    inView?: boolean;
    inViewMargin?: UseInViewOptions['margin'];
    inViewOnce?: boolean;
    transition?: Transition;
};
declare function HighlightText({ ref, text, className, inView, inViewMargin, transition, ...props }: HighlightTextProps): import("react/jsx-runtime").JSX.Element;
export { HighlightText, type HighlightTextProps };
//# sourceMappingURL=highlight.d.ts.map