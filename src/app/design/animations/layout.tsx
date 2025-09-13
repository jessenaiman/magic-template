// Animation Demos Layout
'use client';
import Link from 'next/link';

const nav = [
  { href: '/design/animations/animate-ui', label: 'Animate-UI' },
  { href: '/design/animations/animatecss', label: 'Animate.css' },
  { href: '/design/animations/magicui', label: 'MagicUI' },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
