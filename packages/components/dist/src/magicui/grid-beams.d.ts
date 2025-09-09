import React, { HTMLAttributes } from "react";
interface GridBeamsProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    gridSize?: number;
    gridColor?: string;
    rayCount?: number;
    rayOpacity?: number;
    raySpeed?: number;
    rayLength?: string;
    gridFadeStart?: number;
    gridFadeEnd?: number;
    backgroundColor?: string;
}
export declare const GridBeams: React.FC<GridBeamsProps>;
export {};
//# sourceMappingURL=grid-beams.d.ts.map