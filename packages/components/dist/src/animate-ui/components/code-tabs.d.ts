import { type TabsProps } from '@/packages/ui/src/animate-ui/components/tabs';
type CodeTabsProps = {
    codes: Record<string, string>;
    lang?: string;
    themes?: {
        light: string;
        dark: string;
    };
    copyButton?: boolean;
    onCopy?: (content: string) => void;
} & Omit<TabsProps, 'children'>;
declare function CodeTabs({ codes, lang, themes, className, defaultValue, value, onValueChange, copyButton, onCopy, ...props }: CodeTabsProps): import("react/jsx-runtime").JSX.Element;
export { CodeTabs, type CodeTabsProps };
//# sourceMappingURL=code-tabs.d.ts.map