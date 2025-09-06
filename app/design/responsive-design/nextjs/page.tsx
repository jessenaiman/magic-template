import { PreviewSurface } from "@/components/preview/preview-surface";
import { PreviewTile } from "@/components/preview/preview-tile";

export default function NextJSResponsiveDesignPage() {
  return (
    <div className="space-y-8">
      <div className="max-w-2xl">
        <p className="text-muted-foreground text-sm leading-relaxed">
          Explore responsive design patterns using Next.js features. These examples demonstrate
          how to create responsive layouts and components that leverage Next.js capabilities.
        </p>
        <div className="mt-4 flex gap-2">
          <div className="rounded-lg border bg-card p-3 text-sm text-card-foreground shadow-sm">
            <div className="font-medium">Key Features</div>
            <ul className="mt-1.5 list-inside list-disc text-muted-foreground">
              <li>Server and client components</li>
              <li>Responsive image optimization</li>
              <li>Adaptive layouts</li>
              <li>Dynamic routing</li>
            </ul>
          </div>
        </div>
      </div>

      <PreviewSurface>
        <PreviewTile
          title="Responsive Image"
          description="Next.js Image component with responsive sizing"
          componentName="ResponsiveImage"
          code={`import Image from 'next/image'

<div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] rounded-lg overflow-hidden">
  <Image
    src="/placeholder.jpg"
    alt="Responsive image example"
    fill
    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
    className="object-cover"
  />
</div>`}
        >
          <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] rounded-lg overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
            <div className="text-white font-medium">
              Next.js Image Component (Placeholder)
            </div>
          </div>
        </PreviewTile>

        <PreviewTile
          title="Responsive Layout with Server Components"
          description="Server component that adapts to different screen sizes"
          componentName="ResponsiveServerComponent"
          code={`// Server Component
export default function ResponsiveLayout() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow">
        <h3 className="text-lg font-medium">Server Component</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          This component is rendered on the server.
        </p>
      </div>
      <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow">
        <h3 className="text-lg font-medium">Responsive Design</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          The layout adapts to different screen sizes.
        </p>
      </div>
      <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow">
        <h3 className="text-lg font-medium">Next.js Features</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Leveraging Next.js capabilities for better UX.
        </p>
      </div>
    </div>
  )
}`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow">
              <h3 className="text-lg font-medium">Server Component</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                This component is rendered on the server.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow">
              <h3 className="text-lg font-medium">Responsive Design</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                The layout adapts to different screen sizes.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow">
              <h3 className="text-lg font-medium">Next.js Features</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Leveraging Next.js capabilities for better UX.
              </p>
            </div>
          </div>
        </PreviewTile>
      </PreviewSurface>
    </div>
  );
}
