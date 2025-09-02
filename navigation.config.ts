import { Home, BookOpen, LayoutDashboard, PenTool, Palette } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
  icon?: React.ElementType;
  children?: NavItem[];
};

export const mainNavigation: NavItem[] = [
  { label: "Home", href: "/", icon: Home },
  { label: "Blog", href: "/blog", icon: BookOpen, children: [
    { label: "Post", href: "/blog/[slug]" },
  ] },
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Design", href: "/design", icon: PenTool, children: [
    { label: "Backgrounds", href: "/design/backgrounds", children: [
      { label: "Overview", href: "/design/backgrounds" },
      { label: "Animate UI", href: "/design/backgrounds/animate-ui" },
      { label: "HTML CSS", href: "/design/backgrounds/html-css" },
      { label: "MagicUI", href: "/design/backgrounds/magicui" },
      { label: "ReactBits", href: "/design/backgrounds/reactbits" },
      { label: "Tailwind", href: "/design/backgrounds/tailwind" },
      { label: "Customize", href: "/design/backgrounds/customize" },
    ] },
    { label: "Buttons", href: "/design/buttons", children: [
      { label: "Overview", href: "/design/buttons/overview" },
      { label: "Animate CSS", href: "/design/buttons/animate-css" },
      { label: "Customize", href: "/design/buttons/customize" },
      { label: "HTML CSS", href: "/design/buttons/html-css" },
      { label: "Magic", href: "/design/buttons/magic" },
      { label: "Shadcn", href: "/design/buttons/shadcn" },
      { label: "Tailwind", href: "/design/buttons/tailwind" },
    ] },
    { label: "Responsive Design", href: "/design/responsive-design", children: [
      { label: "Overview", href: "/design/responsive-design" },
      { label: "HTML CSS", href: "/design/responsive-design/html-css" },
      { label: "MagicUI", href: "/design/responsive-design/magicui" },
      { label: "Next.js", href: "/design/responsive-design/nextjs" },
      { label: "Customize", href: "/design/responsive-design/customize" },
    ] },

    { label: "Effects", href: "/design/effects", children: [
      { label: "Overview", href: "/design/effects" },
      { label: "HTML CSS", href: "/design/effects/html-css" },
      { label: "MagicUI", href: "/design/effects/magicui" },
      { label: "Tailwind", href: "/design/effects/tailwind" },
      { label: "Customize", href: "/design/effects/customize" },
    ] },
    { label: "Page Transitions", href: "/design/page-transitions", children: [
      { label: "Overview", href: "/design/page-transitions" },
      { label: "HTML CSS", href: "/design/page-transitions/html-css" },
      { label: "MagicUI", href: "/design/page-transitions/magicui" },
      { label: "Next.js", href: "/design/page-transitions/nextjs" },
      { label: "Customize", href: "/design/page-transitions/customize" },
    ] },
    { label: "Text", href: "/design/text", children: [
      { label: "Overview", href: "/design/text" },
      { label: "HTML CSS", href: "/design/text/html-css" },
      { label: "MagicUI", href: "/design/text/magicui" },
      { label: "Tailwind", href: "/design/text/tailwind" },
      { label: "Customize", href: "/design/text/customize" },
    ] },
    { label: "Customize", href: "/design/customize" },
  ] },
  { label: "Styleguides", href: "/styleguides", icon: Palette },
];
