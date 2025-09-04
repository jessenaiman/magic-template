
export default function EffectsPage() {
  return (
    <div className="space-y-8">
      <div className="max-w-2xl">
        <p className="text-muted-foreground text-sm leading-relaxed">
          Explore a collection of interactive and animated visual effects. 
          From subtle glows to dynamic particles, each implementation demonstrates 
          modern animation techniques with a focus on performance and interactivity. 
          Select a technology stack above to explore specific implementations.
        </p>
        <div className="mt-4 flex gap-2">
          <div className="rounded-lg border bg-card p-3 text-sm text-card-foreground shadow-sm">
            <div className="font-medium">Key Features</div>
            <ul className="mt-1.5 list-inside list-disc text-muted-foreground">
              <li>Interactive animations</li>
              <li>Dynamic particles</li>
              <li>Glowing effects</li>
              <li>Smooth transitions</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
