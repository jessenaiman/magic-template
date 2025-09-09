import * as React from 'react';
import { type SpringOptions, type UseInViewOptions } from 'motion/react';
type SlidingNumberProps = React.ComponentProps<'span'> & {
    number: number | string;
    inView?: boolean;
    inViewMargin?: UseInViewOptions['margin'];
    inViewOnce?: boolean;
    padStart?: boolean;
    decimalSeparator?: string;
    decimalPlaces?: number;
    transition?: SpringOptions;
};
declare function SlidingNumber({ ref, number, className, inView, inViewMargin, inViewOnce, padStart, decimalSeparator, decimalPlaces, transition, ...props }: SlidingNumberProps): import("react/jsx-runtime").JSX.Element;
export { SlidingNumber, type SlidingNumberProps };
//# sourceMappingURL=sliding-number.d.ts.map