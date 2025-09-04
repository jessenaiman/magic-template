
export default function PageTransitionsPage() {
  return (
    <div className="space-y-8">
      <div className="max-w-2xl">
        <p className="text-muted-foreground text-sm leading-relaxed">
          Discover seamless page and content transitions for modern web applications. 
          From subtle fades to dynamic morphing effects, each implementation 
          showcases smooth animation techniques with a focus on user experience. 
          Select a technology stack above to explore specific implementations.
        </p>
        <div className="mt-4 flex gap-2">
          <div className="rounded-lg border bg-card p-3 text-sm text-card-foreground shadow-sm">
            <div className="font-medium">Key Features</div>
            <ul className="mt-1.5 list-inside list-disc text-muted-foreground">
              <li>Smooth animations</li>
              <li>Page transitions</li>
              <li>Content morphing</li>
              <li>View transitions</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
