import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Palette, Zap, Sparkles, Settings, Wind } from "lucide-react";
import Link from "next/link";

export default function ButtonsPage() {
  return (
    <div className="container mx-auto max-w-7xl space-y-8 p-4">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Buttons Overview</h1>
        <p className="text-muted-foreground">
          The Buttons section provides a comprehensive collection of button components, from basic HTML/CSS to advanced animated and customizable buttons. Explore different approaches and styles to suit any interface need.
        </p>
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Button Categories</h2>
        <p className="text-muted-foreground">
          Explore different approaches to button implementation, from basic HTML/CSS to advanced animated components.
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Button cards start */}
          <Link href="/design/buttons/overview">
            <Card className="cursor-pointer hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-blue-600" />
                  <CardTitle className="text-lg">Overview</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Overview of all button types and quick navigation.
                </p>
                <Button size="sm" variant="outline">Explore</Button>
              </CardContent>
            </Card>
          </Link>
          <Link href="/design/buttons/html-css">
            <Card className="cursor-pointer hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-blue-600" />
                  <CardTitle className="text-lg">HTML/CSS</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Classic button styles using pure HTML and CSS.
                </p>
                <button className="px-3 py-1.5 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 transition-colors">
                  Example
                </button>
              </CardContent>
            </Card>
          </Link>
          <Link href="/design/buttons/tailwind">
            <Card className="cursor-pointer hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <Palette className="h-5 w-5 text-cyan-600" />
                  <CardTitle className="text-lg">Tailwind</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Utility-first buttons with Tailwind CSS classes.
                </p>
                <button className="px-3 py-1.5 bg-cyan-600 text-white rounded text-sm hover:bg-cyan-700 transition-colors shadow-sm">
                  Example
                </button>
              </CardContent>
            </Card>
          </Link>
          <Link href="/design/buttons/shadcn">
            <Card className="cursor-pointer hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-green-600" />
                  <CardTitle className="text-lg">Shadcn/ui</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Pre-built components with consistent design.
                </p>
                <Button size="sm">Example</Button>
              </CardContent>
            </Card>
          </Link>
          <Link href="/design/buttons/magic">
            <Card className="cursor-pointer hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-pink-600" />
                  <CardTitle className="text-lg">Magic</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Animated and magical button effects.
                </p>
                <Button size="sm" variant="secondary">Example</Button>
              </CardContent>
            </Card>
          </Link>
          <Link href="/design/buttons/animate-css">
            <Card className="cursor-pointer hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <Wind className="h-5 w-5 text-purple-600" />
                  <CardTitle className="text-lg">Animate CSS</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  CSS-based animated buttons.
                </p>
                <Button size="sm" variant="ghost">Example</Button>
              </CardContent>
            </Card>
          </Link>
          <Link href="/design/buttons/customize">
            <Card className="cursor-pointer hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <Settings className="h-5 w-5 text-orange-600" />
                  <CardTitle className="text-lg">Customize</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Interactive button customization playground.
                </p>
                <Button size="sm" variant="outline">Try it</Button>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
}
