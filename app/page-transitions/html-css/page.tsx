import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code } from "lucide-react";

export default function HtmlCssPageTransitionsPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">HTML/CSS Page Transitions</h2>
        <p className="text-muted-foreground">
          Classic page transition effects using pure HTML and CSS with modern techniques.
        </p>
      </div>

      <Card className="flex flex-col items-center justify-center p-8 text-center min-h-[400px]">
        <CardHeader>
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Code className="h-8 w-8" />
          </div>
          <CardTitle>Coming Soon</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            This section is under construction. Check back soon for page transition examples using HTML and CSS.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}