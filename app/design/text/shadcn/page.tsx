import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Box } from "lucide-react";

export default function ShadCNTextPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight">ShadCN UI Text Components</h2>
        <p className="text-muted-foreground">
          Text components built with ShadCN UI. These examples demonstrate how to use and customize
          ShadCN's text-related components with proper accessibility and styling.
        </p>
      </div>

      <Card className="flex flex-col items-center justify-center p-12 text-center">
        <CardHeader>
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Box className="h-8 w-8" />
          </div>
          <CardTitle>ShadCN UI Text Examples</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            This section will showcase text components from the ShadCN UI library.
            Check back soon for accessible, customizable text components!
          </p>
        </CardContent>
      </Card>
    </div>
  );
}