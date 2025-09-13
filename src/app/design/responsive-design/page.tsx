export default function ResponsiveDesignPage() {
  return (
    <div className="space-y-8">
      <div className="max-w-2xl">
        <p className="text-muted-foreground text-sm leading-relaxed">
          Explore responsive design patterns and techniques for building
          adaptive web interfaces. From fluid grids to flexible components, each
          implementation demonstrates modern approaches to creating layouts that
          work seamlessly across all devices. Select a technology stack above to
          explore specific implementations.
        </p>
        <div className="mt-4 flex gap-2">
          <div className="rounded-lg border bg-card p-3 text-sm text-card-foreground shadow-sm">
            <div className="font-medium">Key Features</div>
            <ul className="mt-1.5 list-inside list-disc text-muted-foreground">
              <li>Fluid layouts</li>
              <li>Mobile-first design</li>
              <li>Adaptive components</li>
              <li>Breakpoint systems</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
