import * as React from 'react';
import { type Transition, type UseInViewOptions } from 'motion/react';
type WritingTextProps = Omit<React.ComponentProps<'span'>, 'children'> & {
    transition?: Transition;
    inView?: boolean;
    inViewMargin?: UseInViewOptions['margin'];
    inViewOnce?: boolean;
    spacing?: number | string;
    text: string;
};
declare function WritingText({ ref, inView, inViewMargin, inViewOnce, spacing, text, transition, ...props }: WritingTextProps): import("react/jsx-runtime").JSX.Element;
export { WritingText, type WritingTextProps };
//# sourceMappingURL=writing.d.ts.map