import * as React from 'react';
import { type HTMLMotionProps, type Transition } from 'motion/react';
import { type SlidingNumberProps } from '@/packages/ui/src/animate-ui/text/sliding-number';
import { Button } from '@/packages/ui/src/ui/button';
type CounterProps = HTMLMotionProps<'div'> & {
    number: number;
    setNumber: (number: number) => void;
    slidingNumberProps?: Omit<SlidingNumberProps, 'number'>;
    buttonProps?: Omit<React.ComponentProps<typeof Button>, 'onClick'>;
    transition?: Transition;
};
declare function Counter({ number, setNumber, className, slidingNumberProps, buttonProps, transition, ...props }: CounterProps): import("react/jsx-runtime").JSX.Element;
export { Counter, type CounterProps };
//# sourceMappingURL=counter.d.ts.map