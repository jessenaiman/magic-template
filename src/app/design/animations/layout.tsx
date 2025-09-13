// Animation Demos Layout
'use client';
import Link from 'next/link';

const nav = [
  { href: '/design/animations/animate-ui', label: 'Animate-UI' },
  { href: '/design/animations/animatecss', label: 'Animate.css' },
  { href: '/design/animations/magicui', label: 'MagicUI' },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav className="mb-8 flex gap-4 border-b pb-4">
        {nav.map(item => (
          <Link
            key={item.href}
            href={item.href}
            className="px-4 py-2 rounded hover:bg-primary/10 transition-colors text-primary font-medium"
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <div>{children}</div>
    </>
  );
}
