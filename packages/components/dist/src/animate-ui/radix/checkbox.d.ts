import * as React from 'react';
import { Checkbox as CheckboxPrimitive } from 'radix-ui';
import { type HTMLMotionProps } from 'motion/react';
type CheckboxProps = React.ComponentProps<typeof CheckboxPrimitive.Root> & HTMLMotionProps<'button'>;
declare function Checkbox({ className, onCheckedChange, ...props }: CheckboxProps): import("react/jsx-runtime").JSX.Element;
export { Checkbox, type CheckboxProps };
//# sourceMappingURL=checkbox.d.ts.map