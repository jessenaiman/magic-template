import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code } from "lucide-react";

export default function HtmlCssTextPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight">HTML/CSS Text Components</h2>
        <p className="text-muted-foreground">
          Pure HTML and CSS text styling and animations. These examples demonstrate fundamental web technologies
          without JavaScript dependencies.
        </p>
      </div>

      <Card className="flex flex-col items-center justify-center p-12 text-center">
        <CardHeader>
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Code className="h-8 w-8" />
          </div>
          <CardTitle>HTML/CSS Text Examples</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            This section will showcase HTML and CSS equivalents of ReactBits text animations.
            Check back soon for pure CSS implementations of text effects!
          </p>
        </CardContent>
      </Card>
    </div>
  );
}