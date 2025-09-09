import * as React from 'react';
import { type Transition } from 'motion/react';
type Side = 'top' | 'bottom' | 'left' | 'right';
type Align = 'start' | 'center' | 'end';
type TooltipData = {
    content: React.ReactNode;
    rect: DOMRect;
    side: Side;
    sideOffset: number;
    align: Align;
    alignOffset: number;
    id: string;
    arrow: boolean;
};
type GlobalTooltipContextType = {
    showTooltip: (data: TooltipData) => void;
    hideTooltip: () => void;
    currentTooltip: TooltipData | null;
    transition: Transition;
    globalId: string;
};
declare const useGlobalTooltip: () => GlobalTooltipContextType;
type TooltipProviderProps = {
    children: React.ReactNode;
    openDelay?: number;
    closeDelay?: number;
    transition?: Transition;
};
declare function TooltipProvider({ children, openDelay, closeDelay, transition, }: TooltipProviderProps): import("react/jsx-runtime").JSX.Element;
type TooltipContextType = {
    content: React.ReactNode;
    setContent: React.Dispatch<React.SetStateAction<React.ReactNode>>;
    arrow: boolean;
    setArrow: React.Dispatch<React.SetStateAction<boolean>>;
    side: Side;
    sideOffset: number;
    align: Align;
    alignOffset: number;
    id: string;
};
declare const useTooltip: () => TooltipContextType;
type TooltipProps = {
    children: React.ReactNode;
    side?: Side;
    sideOffset?: number;
    align?: Align;
    alignOffset?: number;
};
declare function Tooltip({ children, side, sideOffset, align, alignOffset, }: TooltipProps): import("react/jsx-runtime").JSX.Element;
type TooltipContentProps = {
    children: React.ReactNode;
    arrow?: boolean;
};
declare function TooltipContent({ children, arrow }: TooltipContentProps): null;
type TooltipTriggerProps = {
    children: React.ReactElement;
};
declare function TooltipTrigger({ children }: TooltipTriggerProps): React.ReactElement<unknown, string | React.JSXElementConstructor<any>>;
export { TooltipProvider, Tooltip, TooltipContent, TooltipTrigger, useGlobalTooltip, useTooltip, type TooltipProviderProps, type TooltipProps, type TooltipContentProps, type TooltipTriggerProps, };
//# sourceMappingURL=tooltip.d.ts.map