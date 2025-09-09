import * as React from 'react';
type HoleBackgroundProps = React.ComponentProps<'div'> & {
    strokeColor?: string;
    numberOfLines?: number;
    numberOfDiscs?: number;
    particleRGBColor?: [number, number, number];
};
declare function HoleBackground({ strokeColor, numberOfLines, numberOfDiscs, particleRGBColor, className, children, ...props }: HoleBackgroundProps): import("react/jsx-runtime").JSX.Element;
export { HoleBackground, type HoleBackgroundProps };
//# sourceMappingURL=hole.d.ts.map