// Animation Demos Main Page
"use client";
import Link from "next/link";

const demos = [
  { href: "/design/animations/animate-ui", label: "Animate-UI" },
  { href: "/design/animations/animatecss", label: "Animate.css" },
  { href: "/design/animations/magicui", label: "MagicUI" },
  { href: "/design/animations/reactbits", label: "ReactBits" },
];

export default function Page() {
  return (
    <div className="max-w-2xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6">Animation Demo Gallery</h1>
      <p className="mb-8 text-muted-foreground">
        Explore animation demos from Animate-UI, Animate.css, MagicUI, and ReactBits. Select a category to view interactive examples.
      </p>
      <ul className="space-y-4">
        {demos.map((demo) => (
          <li key={demo.href}>
            <Link
              href={demo.href}
              className="block px-6 py-4 rounded border hover:bg-primary/10 transition-colors text-lg font-medium"
            >
              {demo.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}