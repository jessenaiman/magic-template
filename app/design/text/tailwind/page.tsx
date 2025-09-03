import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wind } from "lucide-react";

export default function TailwindTextPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight">TailwindCSS Text Utilities</h2>
        <p className="text-muted-foreground">
          Text styling and animations using TailwindCSS utility classes. These examples demonstrate
          how to achieve text effects using Tailwind's comprehensive utility system.
        </p>
      </div>

      <Card className="flex flex-col items-center justify-center p-12 text-center">
        <CardHeader>
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Wind className="h-8 w-8" />
          </div>
          <CardTitle>TailwindCSS Text Examples</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            This section will showcase text effects implemented with TailwindCSS utilities.
            Check back soon for utility-first text animations and styling patterns!
          </p>
        </CardContent>
      </Card>
    </div>
  );
}