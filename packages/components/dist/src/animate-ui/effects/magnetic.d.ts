import * as React from 'react';
import { HTMLMotionProps, type SpringOptions } from 'motion/react';
type MagneticProps = {
    children: React.ReactElement;
    strength?: number;
    range?: number;
    springOptions?: SpringOptions;
    onlyOnHover?: boolean;
    disableOnTouch?: boolean;
} & HTMLMotionProps<'div'>;
declare function Magnetic({ ref, children, strength, range, springOptions, onlyOnHover, disableOnTouch, style, onMouseEnter, onMouseLeave, onMouseMove, ...props }: MagneticProps): import("react/jsx-runtime").JSX.Element;
export { Magnetic, type MagneticProps };
//# sourceMappingURL=magnetic.d.ts.map