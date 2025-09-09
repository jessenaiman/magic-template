import { HTMLMotionProps } from "motion/react";
import React from "react";
interface AnimatedSubscribeButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
    subscribeStatus?: boolean;
    children: React.ReactNode;
    className?: string;
}
export declare const AnimatedSubscribeButton: React.ForwardRefExoticComponent<AnimatedSubscribeButtonProps & React.RefAttributes<HTMLButtonElement>>;
export {};
//# sourceMappingURL=animated-subscribe-button.d.ts.map