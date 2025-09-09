import * as React from 'react';
import { type SpringOptions, type UseInViewOptions } from 'motion/react';
type CountingNumberProps = React.ComponentProps<'span'> & {
    number: number;
    fromNumber?: number;
    padStart?: boolean;
    inView?: boolean;
    inViewMargin?: UseInViewOptions['margin'];
    inViewOnce?: boolean;
    decimalSeparator?: string;
    transition?: SpringOptions;
    decimalPlaces?: number;
};
declare function CountingNumber({ ref, number, fromNumber, padStart, inView, inViewMargin, inViewOnce, decimalSeparator, transition, decimalPlaces, className, ...props }: CountingNumberProps): import("react/jsx-runtime").JSX.Element;
export { CountingNumber, type CountingNumberProps };
//# sourceMappingURL=counting-number.d.ts.map