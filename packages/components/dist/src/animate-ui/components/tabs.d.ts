import * as React from 'react';
import { type Transition, type HTMLMotionProps } from 'motion/react';
type TabsContextType<T extends string> = {
    activeValue: T;
    handleValueChange: (value: T) => void;
    registerTrigger: (value: T, node: HTMLElement | null) => void;
};
declare function useTabs<T extends string = string>(): TabsContextType<T>;
type BaseTabsProps = React.ComponentProps<'div'> & {
    children: React.ReactNode;
};
type UnControlledTabsProps<T extends string = string> = BaseTabsProps & {
    defaultValue?: T;
    value?: never;
    onValueChange?: never;
};
type ControlledTabsProps<T extends string = string> = BaseTabsProps & {
    value: T;
    onValueChange?: (value: T) => void;
    defaultValue?: never;
};
type TabsProps<T extends string = string> = UnControlledTabsProps<T> | ControlledTabsProps<T>;
declare function Tabs<T extends string = string>({ defaultValue, value, onValueChange, children, className, ...props }: TabsProps<T>): import("react/jsx-runtime").JSX.Element;
type TabsListProps = React.ComponentProps<'div'> & {
    children: React.ReactNode;
    activeClassName?: string;
    transition?: Transition;
};
declare function TabsList({ children, className, activeClassName, transition, ...props }: TabsListProps): import("react/jsx-runtime").JSX.Element;
type TabsTriggerProps = HTMLMotionProps<'button'> & {
    value: string;
    children: React.ReactNode;
};
declare function TabsTrigger({ ref, value, children, className, ...props }: TabsTriggerProps): import("react/jsx-runtime").JSX.Element;
type TabsContentsProps = React.ComponentProps<'div'> & {
    children: React.ReactNode;
    transition?: Transition;
};
declare function TabsContents({ children, className, transition, ...props }: TabsContentsProps): import("react/jsx-runtime").JSX.Element;
type TabsContentProps = HTMLMotionProps<'div'> & {
    value: string;
    children: React.ReactNode;
};
declare function TabsContent({ children, value, className, ...props }: TabsContentProps): import("react/jsx-runtime").JSX.Element;
export { Tabs, TabsList, TabsTrigger, TabsContents, TabsContent, useTabs, type TabsContextType, type TabsProps, type TabsListProps, type TabsTriggerProps, type TabsContentsProps, type TabsContentProps, };
//# sourceMappingURL=tabs.d.ts.map