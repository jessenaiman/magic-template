export default function ButtonsPage() {
  return (
    <div className="space-y-8">
      <div className="max-w-2xl">
        <p className="text-muted-foreground text-sm leading-relaxed">
          Discover a comprehensive collection of button components and
          interactions. From subtle hover effects to complex animations, each
          implementation demonstrates modern interaction patterns and
          accessibility best practices. Select a technology stack above to
          explore specific implementations.
        </p>
        <div className="mt-4 flex gap-2">
          <div className="rounded-lg border bg-card p-3 text-sm text-card-foreground shadow-sm">
            <div className="font-medium">Key Features</div>
            <ul className="mt-1.5 list-inside list-disc text-muted-foreground">
              <li>Interactive states</li>
              <li>Custom animations</li>
              <li>Accessible patterns</li>
              <li>Responsive design</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
