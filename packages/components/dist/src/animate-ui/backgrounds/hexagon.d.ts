import * as React from 'react';
type HexagonBackgroundProps = React.ComponentProps<'div'> & {
    children?: React.ReactNode;
    hexagonProps?: React.ComponentProps<'div'>;
    hexagonSize?: number;
    hexagonMargin?: number;
};
declare function HexagonBackground({ className, children, hexagonProps, hexagonSize, hexagonMargin, ...props }: HexagonBackgroundProps): import("react/jsx-runtime").JSX.Element;
export { HexagonBackground, type HexagonBackgroundProps };
//# sourceMappingURL=hexagon.d.ts.map