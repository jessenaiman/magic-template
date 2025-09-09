import type { GlobalOptions as ConfettiGlobalOptions, Options as ConfettiOptions } from "canvas-confetti";
import type { ReactNode } from "react";
import React from "react";
import { ButtonProps } from "@/packages/ui/src/ui/button";
type Api = {
    fire: (options?: ConfettiOptions) => void;
};
type Props = React.ComponentPropsWithRef<"canvas"> & {
    options?: ConfettiOptions;
    globalOptions?: ConfettiGlobalOptions;
    manualstart?: boolean;
    children?: ReactNode;
};
export type ConfettiRef = Api | null;
export declare const Confetti: React.ForwardRefExoticComponent<Omit<Props, "ref"> & React.RefAttributes<ConfettiRef>>;
interface ConfettiButtonProps extends ButtonProps {
    options?: ConfettiOptions & ConfettiGlobalOptions & {
        canvas?: HTMLCanvasElement;
    };
    children?: React.ReactNode;
}
export declare const ConfettiButton: {
    ({ options, children, ...props }: ConfettiButtonProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export {};
//# sourceMappingURL=confetti.d.ts.map