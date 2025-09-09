import { ElementType } from 'react';
interface TextTypeProps {
    className?: string;
    showCursor?: boolean;
    hideCursorWhileTyping?: boolean;
    cursorCharacter?: string | React.ReactNode;
    cursorBlinkDuration?: number;
    cursorClassName?: string;
    text: string | string[];
    as?: ElementType;
    typingSpeed?: number;
    initialDelay?: number;
    pauseDuration?: number;
    deletingSpeed?: number;
    loop?: boolean;
    textColors?: string[];
    variableSpeed?: {
        min: number;
        max: number;
    };
    onSentenceComplete?: (sentence: string, index: number) => void;
    startOnVisible?: boolean;
    reverseMode?: boolean;
}
declare const TextType: ({ text, as: Component, typingSpeed, initialDelay, pauseDuration, deletingSpeed, loop, className, showCursor, hideCursorWhileTyping, cursorCharacter, cursorClassName, cursorBlinkDuration, textColors, variableSpeed, onSentenceComplete, startOnVisible, reverseMode, ...props }: TextTypeProps & React.HTMLAttributes<HTMLElement>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
export default TextType;
//# sourceMappingURL=TextType.d.ts.map