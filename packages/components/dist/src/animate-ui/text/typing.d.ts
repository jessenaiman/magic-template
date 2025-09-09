import * as React from 'react';
import { type UseInViewOptions } from 'motion/react';
type TypingTextProps = Omit<React.ComponentProps<'span'>, 'children'> & {
    duration?: number;
    delay?: number;
    inView?: boolean;
    inViewMargin?: UseInViewOptions['margin'];
    inViewOnce?: boolean;
    cursor?: boolean;
    loop?: boolean;
    holdDelay?: number;
    text: string | string[];
    cursorClassName?: string;
    animateOnChange?: boolean;
};
declare function TypingText({ ref, duration, delay, inView, inViewMargin, inViewOnce, cursor, loop, holdDelay, text, cursorClassName, animateOnChange, ...props }: TypingTextProps): import("react/jsx-runtime").JSX.Element;
export { TypingText, type TypingTextProps };
//# sourceMappingURL=typing.d.ts.map