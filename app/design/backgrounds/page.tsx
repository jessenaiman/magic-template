export default function BackgroundsPage() {
  return (
    <div className="space-y-8">
      <div className="max-w-2xl">
        <p className="text-muted-foreground text-sm leading-relaxed">
          Explore a curated collection of dynamic background patterns and effects. 
          From subtle gradients to interactive meshes, each implementation showcases 
          modern design techniques with a focus on performance and customization. 
          Select a technology stack above to explore specific implementations.
        </p>
        <div className="mt-4 flex gap-2">
          <div className="rounded-lg border bg-card p-3 text-sm text-card-foreground shadow-sm">
            <div className="font-medium">Key Features</div>
            <ul className="mt-1.5 list-inside list-disc text-muted-foreground">
              <li>Responsive patterns</li>
              <li>Interactive animations</li>
              <li>Performance optimized</li>
              <li>Customizable colors and effects</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}