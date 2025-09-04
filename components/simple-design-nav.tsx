"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getDesignNavigation } from "@/app/navigation.config";
import { cn } from "@/lib/utils";

export function SimpleDesignNav() {
  const pathname = usePathname();
  const categories = getDesignNavigation();

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <nav className="space-y-4">
      <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Design</div>
      <ul className="space-y-3">
        {categories.map((cat) => (
          <li key={cat.href}>
            <Link
              href={cat.href}
              className={cn(
                "block rounded-md px-3 py-2 border",
                isActive(cat.href)
                  ? "bg-primary text-primary-foreground border-primary"
                  : "hover:bg-accent hover:text-accent-foreground"
              )}
            >
              <div className="font-medium">{cat.label}</div>
              {cat.description && (
                <div className="text-xs text-muted-foreground">{cat.description}</div>
              )}
            </Link>
            {cat.children && cat.children.length > 0 && (
              <ul className="mt-2 ms-3 space-y-1">
                {cat.children.map((child) => (
                  <li key={child.href}>
                    <Link
                      href={child.href}
                      className={cn(
                        "block rounded-md px-2 py-1 text-sm",
                        isActive(child.href)
                          ? "bg-muted font-medium"
                          : "hover:bg-muted"
                      )}
                    >
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
