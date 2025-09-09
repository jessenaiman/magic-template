import * as React from 'react';
import { type Transition } from 'motion/react';
import { type TooltipProps, type TooltipContentProps } from '@/packages/ui/src/animate-ui/components/tooltip';
type AvatarGroupTooltipProps = TooltipContentProps;
declare function AvatarGroupTooltip(props: AvatarGroupTooltipProps): import("react/jsx-runtime").JSX.Element;
type AvatarGroupProps = Omit<React.ComponentProps<'div'>, 'translate'> & {
    children: React.ReactElement[];
    transition?: Transition;
    invertOverlap?: boolean;
    translate?: string | number;
    tooltipProps?: Omit<TooltipProps, 'children'>;
};
declare function AvatarGroup({ ref, children, className, transition, invertOverlap, translate, tooltipProps, ...props }: AvatarGroupProps): import("react/jsx-runtime").JSX.Element;
export { AvatarGroup, AvatarGroupTooltip, type AvatarGroupProps, type AvatarGroupTooltipProps, };
//# sourceMappingURL=avatar-group.d.ts.map