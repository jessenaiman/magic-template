import * as React from 'react';
import { AccordionItemProps } from '@/packages/ui/src/animate-ui/radix/accordion';
type FilesProps = React.ComponentProps<'div'> & {
    children: React.ReactNode;
    activeClassName?: string;
    defaultOpen?: string[];
    open?: string[];
    onOpenChange?: (open: string[]) => void;
};
declare function Files({ children, className, activeClassName, defaultOpen, open, onOpenChange, ...props }: FilesProps): import("react/jsx-runtime").JSX.Element;
type FolderProps = Omit<AccordionItemProps, 'value' | 'onValueChange' | 'defaultValue' | 'children'> & {
    children?: React.ReactNode;
    name: string;
    open?: string[];
    onOpenChange?: (open: string[]) => void;
    defaultOpen?: string[];
    sideComponent?: React.ReactNode;
};
declare function Folder({ children, className, name, open, defaultOpen, onOpenChange, sideComponent, ...props }: FolderProps): import("react/jsx-runtime").JSX.Element;
type FileProps = Omit<React.ComponentProps<'div'>, 'children'> & {
    name: string;
    sideComponent?: React.ReactNode;
};
declare function File({ name, className, sideComponent, ...props }: FileProps): import("react/jsx-runtime").JSX.Element;
export { Files, Folder, File, type FilesProps, type FolderProps, type FileProps, };
//# sourceMappingURL=files.d.ts.map