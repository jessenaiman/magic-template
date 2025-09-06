import { PreviewSurface } from "@/components/preview-surface";
import { PreviewTile } from "@/components/preview-tile";

export default function MagicUIResponsiveDesignPage() {
  return (
    <div className="space-y-8">
      <div className="max-w-2xl">
        <p className="text-muted-foreground text-sm leading-relaxed">
          Explore responsive design patterns using Magic UI components. These examples demonstrate
          how to create fluid, adaptive layouts that work across all device sizes.
        </p>
        <div className="mt-4 flex gap-2">
          <div className="rounded-lg border bg-card p-3 text-sm text-card-foreground shadow-sm">
            <div className="font-medium">Key Features</div>
            <ul className="mt-1.5 list-inside list-disc text-muted-foreground">
              <li>Mobile-first approach</li>
              <li>Fluid typography</li>
              <li>Adaptive layouts</li>
              <li>Responsive components</li>
            </ul>
          </div>
        </div>
      </div>

      <PreviewSurface>
        <PreviewTile
          title="Responsive Card Grid"
          description="A grid of cards that adapts to different screen sizes"
          componentName="ResponsiveCardGrid"
          code={`<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
  {[1, 2, 3].map((item) => (
    <div key={item} className="bg-white dark:bg-slate-800 rounded-lg shadow p-4">
      <h3 className="text-lg font-medium mb-2">Card {item}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        This card will adapt to different screen sizes.
      </p>
    </div>
  ))}
</div>`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white dark:bg-slate-800 rounded-lg shadow p-4">
                <h3 className="text-lg font-medium mb-2">Card {item}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  This card will adapt to different screen sizes.
                </p>
              </div>
            ))}
          </div>
        </PreviewTile>

        <PreviewTile
          title="Responsive Navigation"
          description="Navigation menu that adapts to mobile and desktop views"
          componentName="ResponsiveNavigation"
          code={`<nav className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow">
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
    <div className="flex items-center justify-between">
      <span className="text-xl font-bold">Logo</span>
      <button className="sm:hidden">☰</button>
    </div>
    <div className="hidden sm:flex space-x-4 mt-4 sm:mt-0">
      <a href="#" className="text-blue-600 dark:text-blue-400">Home</a>
      <a href="#" className="text-gray-600 dark:text-gray-400">About</a>
      <a href="#" className="text-gray-600 dark:text-gray-400">Services</a>
      <a href="#" className="text-gray-600 dark:text-gray-400">Contact</a>
    </div>
  </div>
</nav>`}
        >
          <nav className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold">Logo</span>
                <button className="sm:hidden">☰</button>
              </div>
              <div className="hidden sm:flex space-x-4 mt-4 sm:mt-0">
                <a href="#" className="text-blue-600 dark:text-blue-400">Home</a>
                <a href="#" className="text-gray-600 dark:text-gray-400">About</a>
                <a href="#" className="text-gray-600 dark:text-gray-400">Services</a>
                <a href="#" className="text-gray-600 dark:text-gray-400">Contact</a>
              </div>
            </div>
          </nav>
        </PreviewTile>
      </PreviewSurface>
    </div>
  );
}
