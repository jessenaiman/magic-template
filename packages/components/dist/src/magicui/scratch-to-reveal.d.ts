import React from "react";
interface ScratchToRevealProps {
    children: React.ReactNode;
    width: number;
    height: number;
    minScratchPercentage?: number;
    className?: string;
    onComplete?: () => void;
    gradientColors?: [string, string, string];
}
export declare const ScratchToReveal: React.FC<ScratchToRevealProps>;
export {};
//# sourceMappingURL=scratch-to-reveal.d.ts.map