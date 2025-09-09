import React, { HTMLAttributes } from "react";
interface WarpBackgroundProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    perspective?: number;
    beamsPerSide?: number;
    beamSize?: number;
    beamDelayMax?: number;
    beamDelayMin?: number;
    beamDuration?: number;
    gridColor?: string;
}
export declare const WarpBackground: React.FC<WarpBackgroundProps>;
export {};
//# sourceMappingURL=warp-background.d.ts.map