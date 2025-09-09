import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@repo/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@repo/components/ui/sheet"
import { Menu, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"
import { NAVIGATION_CONFIG } from "@/lib/navigation"
import { isNavItemActive, renderIcon, type NavItem } from "@/lib/navigation-utils"

interface MobileNavigationProps {
  mobileMenuOpen: boolean
  setMobileMenuOpen: (open: boolean) => void
  onNavigate: (href: string) => void
}

export function MobileNavigation({
  mobileMenuOpen,
  setMobileMenuOpen,
  onNavigate
}: MobileNavigationProps) {
  const pathname = usePathname()

  return (
    <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
          <Menu className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-80">
        <div className="flex flex-col space-y-4 mt-4">
          <nav className="flex flex-col space-y-2">
            {NAVIGATION_CONFIG.mainNav.map((item: NavItem) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    isNavItemActive(item, pathname)
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-accent hover:text-accent-foreground"
                  )}
                  onClick={() => {
                    onNavigate(item.href)
                    setMobileMenuOpen(false)
                  }}
                >
                  {renderIcon(item.icon)}
                  <span>{item.label}</span>
                  {item.external && <ExternalLink className="h-3 w-3 ml-1" />}
                </Link>

                {/* Mobile children */}
                {item.children && item.children.length > 0 && isNavItemActive(item, pathname) && (
                  <div className="ml-6 mt-2 space-y-1">
                    {item.children.map((child: NavItem) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={cn(
                          "block px-3 py-2 text-sm rounded-sm transition-colors",
                          isNavItemActive(child, pathname)
                            ? "bg-accent text-accent-foreground font-medium"
                            : "hover:bg-accent hover:text-accent-foreground"
                        )}
                        onClick={() => {
                          onNavigate(child.href)
                          setMobileMenuOpen(false)
                        }}
                      >
                        {child.label}
                        {child.external && <ExternalLink className="h-3 w-3 ml-1 inline" />}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  )
}
