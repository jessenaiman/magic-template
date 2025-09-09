import * as React from 'react';
import { type Transition } from 'motion/react';
type GradientTextProps = React.ComponentProps<'span'> & {
    text: string;
    gradient?: string;
    neon?: boolean;
    transition?: Transition;
};
declare function GradientText({ text, className, gradient, neon, transition, ...props }: GradientTextProps): import("react/jsx-runtime").JSX.Element;
export { GradientText, type GradientTextProps };
//# sourceMappingURL=gradient.d.ts.map