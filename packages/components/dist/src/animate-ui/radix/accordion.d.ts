import * as React from 'react';
import { Accordion as AccordionPrimitive } from 'radix-ui';
import { type Transition, type HTMLMotionProps } from 'motion/react';
type AccordionItemContextType = {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
};
declare const useAccordionItem: () => AccordionItemContextType;
type AccordionProps = React.ComponentProps<typeof AccordionPrimitive.Root>;
declare function Accordion(props: AccordionProps): import("react/jsx-runtime").JSX.Element;
type AccordionItemProps = React.ComponentProps<typeof AccordionPrimitive.Item> & {
    children: React.ReactNode;
};
declare function AccordionItem({ className, children, ...props }: AccordionItemProps): import("react/jsx-runtime").JSX.Element;
type AccordionTriggerProps = React.ComponentProps<typeof AccordionPrimitive.Trigger> & {
    transition?: Transition;
    chevron?: boolean;
};
declare function AccordionTrigger({ ref, className, children, transition, chevron, ...props }: AccordionTriggerProps): import("react/jsx-runtime").JSX.Element;
type AccordionContentProps = React.ComponentProps<typeof AccordionPrimitive.Content> & HTMLMotionProps<'div'> & {
    transition?: Transition;
};
declare function AccordionContent({ className, children, transition, ...props }: AccordionContentProps): import("react/jsx-runtime").JSX.Element;
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent, useAccordionItem, type AccordionItemContextType, type AccordionProps, type AccordionItemProps, type AccordionTriggerProps, type AccordionContentProps, };
//# sourceMappingURL=accordion.d.ts.map