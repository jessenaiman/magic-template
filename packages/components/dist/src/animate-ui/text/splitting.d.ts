import * as React from 'react';
import { type HTMLMotionProps, type UseInViewOptions } from 'motion/react';
type DefaultSplittingTextProps = {
    motionVariants?: {
        initial?: Record<string, any>;
        animate?: Record<string, any>;
        transition?: Record<string, any>;
        stagger?: number;
    };
    inView?: boolean;
    inViewMargin?: UseInViewOptions['margin'];
    inViewOnce?: boolean;
    delay?: number;
} & HTMLMotionProps<'div'>;
type CharsOrWordsSplittingTextProps = DefaultSplittingTextProps & {
    type?: 'chars' | 'words';
    text: string;
};
type LinesSplittingTextProps = DefaultSplittingTextProps & {
    type: 'lines';
    text: string[];
};
type SplittingTextProps = CharsOrWordsSplittingTextProps | LinesSplittingTextProps;
export declare const SplittingText: React.FC<SplittingTextProps>;
export {};
//# sourceMappingURL=splitting.d.ts.map