import * as React from 'react';
import { type UseInViewOptions, type Transition } from 'motion/react';
type RollingTextProps = Omit<React.ComponentProps<'span'>, 'children'> & {
    transition?: Transition;
    inView?: boolean;
    inViewMargin?: UseInViewOptions['margin'];
    inViewOnce?: boolean;
    text: string;
};
declare function RollingText({ ref, transition, inView, inViewMargin, inViewOnce, text, ...props }: RollingTextProps): import("react/jsx-runtime").JSX.Element;
export { RollingText, type RollingTextProps };
//# sourceMappingURL=rolling.d.ts.map