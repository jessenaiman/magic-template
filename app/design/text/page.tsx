export default function TextPage() {
  return (
    <div className="space-y-8">
      <div className="max-w-2xl">
        <p className="text-muted-foreground text-sm leading-relaxed">
          Discover a comprehensive collection of text styling and animation patterns. 
          From basic typography to advanced text effects, each implementation demonstrates 
          modern design principles and accessibility best practices. Select a technology 
          stack above to explore specific implementations.
        </p>
        <div className="mt-4 flex gap-2">
          <div className="rounded-lg border bg-card p-3 text-sm text-card-foreground shadow-sm">
            <div className="font-medium">Key Features</div>
            <ul className="mt-1.5 list-inside list-disc text-muted-foreground">
              <li>Responsive typography</li>
              <li>Text animations and effects</li>
              <li>Accessibility-first design</li>
              <li>Cross-browser compatibility</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
