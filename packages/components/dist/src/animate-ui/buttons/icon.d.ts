import * as React from 'react';
import { type HTMLMotionProps, type Transition } from 'motion/react';
declare const sizes: {
    default: string;
    sm: string;
    md: string;
    lg: string;
};
type IconButtonProps = Omit<HTMLMotionProps<'button'>, 'color'> & {
    icon: React.ElementType;
    active?: boolean;
    className?: string;
    animate?: boolean;
    size?: keyof typeof sizes;
    color?: [number, number, number];
    transition?: Transition;
};
declare function IconButton({ icon: Icon, className, active, animate, size, color, transition, ...props }: IconButtonProps): import("react/jsx-runtime").JSX.Element;
export { IconButton, sizes, type IconButtonProps };
//# sourceMappingURL=icon.d.ts.map