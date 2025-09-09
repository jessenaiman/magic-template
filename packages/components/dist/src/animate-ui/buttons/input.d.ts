import * as React from 'react';
import { HTMLMotionProps, Transition } from 'motion/react';
type InputButtonContextType = {
    showInput: boolean;
    setShowInput: React.Dispatch<React.SetStateAction<boolean>>;
    transition: Transition;
    id: string;
};
declare const useInputButton: () => InputButtonContextType;
type InputButtonProviderProps = React.ComponentProps<'div'> & Partial<InputButtonContextType>;
declare function InputButtonProvider({ className, transition, showInput, setShowInput, id, ...props }: InputButtonProviderProps): import("react/jsx-runtime").JSX.Element;
type InputButtonProps = HTMLMotionProps<'div'>;
declare function InputButton({ className, ...props }: InputButtonProps): import("react/jsx-runtime").JSX.Element;
type InputButtonActionProps = HTMLMotionProps<'button'>;
declare function InputButtonAction({ className, ...props }: InputButtonActionProps): import("react/jsx-runtime").JSX.Element;
type InputButtonSubmitProps = HTMLMotionProps<'button'> & {
    icon?: React.ElementType;
};
declare function InputButtonSubmit({ className, children, icon: Icon, ...props }: InputButtonSubmitProps): import("react/jsx-runtime").JSX.Element;
type InputButtonInputProps = React.ComponentProps<'input'>;
declare function InputButtonInput({ className, ...props }: InputButtonInputProps): import("react/jsx-runtime").JSX.Element;
export { InputButton, InputButtonProvider, InputButtonAction, InputButtonSubmit, InputButtonInput, useInputButton, type InputButtonProps, type InputButtonProviderProps, type InputButtonActionProps, type InputButtonSubmitProps, type InputButtonInputProps, };
//# sourceMappingURL=input.d.ts.map