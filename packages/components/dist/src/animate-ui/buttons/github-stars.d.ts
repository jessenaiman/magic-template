import { type HTMLMotionProps, type SpringOptions, type UseInViewOptions } from 'motion/react';
type GitHubStarsButtonProps = HTMLMotionProps<'a'> & {
    username: string;
    repo: string;
    transition?: SpringOptions;
    formatted?: boolean;
    inView?: boolean;
    inViewMargin?: UseInViewOptions['margin'];
    inViewOnce?: boolean;
};
declare function GitHubStarsButton({ ref, username, repo, transition, formatted, inView, inViewOnce, inViewMargin, className, ...props }: GitHubStarsButtonProps): import("react/jsx-runtime").JSX.Element | null;
export { GitHubStarsButton, type GitHubStarsButtonProps };
//# sourceMappingURL=github-stars.d.ts.map