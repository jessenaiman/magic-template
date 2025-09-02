import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ToyBrick } from "lucide-react";

export default function MagicUIPageTransitionsPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">Magic UI Page Transitions</h2>
        <p className="text-muted-foreground">
          Animated and interactive page transition components from Magic UI for enhanced user experiences.
        </p>
      </div>

      <Card className="flex flex-col items-center justify-center p-8 text-center min-h-[400px]">
        <CardHeader>
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
            <ToyBrick className="h-8 w-8" />
          </div>
          <CardTitle>Coming Soon</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            This section is under construction. Check back soon for page transition examples using Magic UI.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}