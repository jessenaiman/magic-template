import { PreviewTile } from "@/components/preview/preview-tile";

export default function TailwindBackgroundsPage() {
  return (
    <div className="space-y-8">
      <div className="max-w-2xl">
        <p className="text-muted-foreground text-sm leading-relaxed">
          Explore Tailwind CSS-powered background patterns and effects. These examples demonstrate
          how to create beautiful, responsive backgrounds using Tailwind's utility classes.
        </p>
        <div className="mt-4 flex gap-2">
          <div className="rounded-lg border bg-card p-3 text-sm text-card-foreground shadow-sm">
            <div className="font-medium">Key Features</div>
            <ul className="mt-1.5 list-inside list-disc text-muted-foreground">
              <li>Utility-first approach</li>
              <li>Responsive patterns</li>
              <li>No custom CSS required</li>
              <li>Easy to customize</li>
            </ul>
          </div>
        </div>
      </div>

      <PreviewTile
        title="Gradient Background"
        description="Simple gradient background using Tailwind's gradient utilities"
        componentName="GradientBackground"
        code={`<div className="h-64 w-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg"></div>`}
      >
        <div className="h-64 w-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg"></div>
      </PreviewTile>

      <PreviewTile
        title="Dotted Pattern"
        description="Create a dotted background pattern with Tailwind"
        componentName="DottedPattern"
        code={`<div className="h-64 w-full bg-slate-100 rounded-lg relative overflow-hidden">
  <div className="absolute inset-0" style={{
    backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)',
    backgroundSize: '20px 20px'
  }}></div>
</div>`}
      >
        <div className="h-64 w-full bg-slate-100 rounded-lg relative overflow-hidden">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }}></div>
        </div>
      </PreviewTile>

      <PreviewTile
        title="Striped Background"
        description="Striped background pattern using Tailwind and CSS"
        componentName="StripedBackground"
        code={`<div className="h-64 w-full rounded-lg relative overflow-hidden">
  <div className="absolute inset-0" style={{
    backgroundImage: 'linear-gradient(45deg, #f1f5f9 25%, transparent 25%, transparent 50%, #f1f5f9 50%, #f1f5f9 75%, transparent 75%, transparent)',
    backgroundSize: '20px 20px'
  }}></div>
</div>`}
      >
        <div className="h-64 w-full rounded-lg relative overflow-hidden">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(45deg, #f1f5f9 25%, transparent 25%, transparent 50%, #f1f5f9 50%, #f1f5f9 75%, transparent 75%, transparent)',
            backgroundSize: '20px 20px'
          }}></div>
        </div>
      </PreviewTile>
    </div>
  );
}
