import * as React from 'react';
import { type UseInViewOptions } from 'motion/react';
type CodeEditorProps = Omit<React.ComponentProps<'div'>, 'onCopy'> & {
    children: string;
    lang: string;
    themes?: {
        light: string;
        dark: string;
    };
    duration?: number;
    delay?: number;
    header?: boolean;
    dots?: boolean;
    icon?: React.ReactNode;
    cursor?: boolean;
    inView?: boolean;
    inViewMargin?: UseInViewOptions['margin'];
    inViewOnce?: boolean;
    copyButton?: boolean;
    writing?: boolean;
    title?: string;
    onDone?: () => void;
    onCopy?: (content: string) => void;
};
declare function CodeEditor({ children: code, lang, themes, duration, delay, className, header, dots, icon, cursor, inView, inViewMargin, inViewOnce, copyButton, writing, title, onDone, onCopy, ...props }: CodeEditorProps): import("react/jsx-runtime").JSX.Element;
export { CodeEditor, type CodeEditorProps };
//# sourceMappingURL=code-editor.d.ts.map