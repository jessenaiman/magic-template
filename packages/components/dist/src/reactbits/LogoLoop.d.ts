import React from 'react';
export type LogoItem = {
    node: React.ReactNode;
    href?: string;
    title?: string;
    ariaLabel?: string;
} | {
    src: string;
    alt?: string;
    href?: string;
    title?: string;
    srcSet?: string;
    sizes?: string;
    width?: number;
    height?: number;
};
export interface LogoLoopProps {
    logos: LogoItem[];
    speed?: number;
    direction?: 'left' | 'right';
    width?: number | string;
    logoHeight?: number;
    gap?: number;
    pauseOnHover?: boolean;
    fadeOut?: boolean;
    fadeOutColor?: string;
    scaleOnHover?: boolean;
    ariaLabel?: string;
    className?: string;
    style?: React.CSSProperties;
}
export declare const LogoLoop: React.NamedExoticComponent<LogoLoopProps>;
export default LogoLoop;
//# sourceMappingURL=LogoLoop.d.ts.map