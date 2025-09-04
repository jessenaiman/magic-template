import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PreviewTile } from "@/components/design/preview-tile";
import { createCodeExamples, generateButtonClasses } from "@/lib/code-examples";

export default function HtmlCssButtonsPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">HTML/CSS Buttons</h1>
        <p className="text-muted-foreground">
          Classic button implementations using pure HTML and CSS with modern styling techniques.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Basic Button */}
        <PreviewTile
          title="Basic Button"
          description="Simple button with hover effects"
          componentName="basic-button"
          codeExamples={createCodeExamples(
            [`<button class="btn-primary">
  Click Me
</button>`, "html", "HTML"],
            [`.btn-primary {
  padding: 0.5rem 1rem;
  background-color: #2563eb;
  color: white;
  border-radius: 0.375rem;
  font-weight: 500;
  transition: background-color 0.2s;
}

.btn-primary:hover {
  background-color: #1d4ed8;
}`, "css", "CSS"]
          )}
        >
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium">
            Click Me
          </button>
        </PreviewTile>

        {/* Gradient Button */}
        <PreviewTile
          title="Gradient Button"
          description="Eye-catching gradient with hover animation"
          componentName="gradient-button"
          codeExamples={createCodeExamples(
            [`<button class="btn-gradient">
  Gradient Magic
</button>`, "html", "HTML"],
            [`.btn-gradient {
  padding: 0.75rem 1.5rem;
  background: linear-gradient(to right, #8b5cf6, #ec4899);
  color: white;
  border-radius: 0.5rem;
  font-weight: 600;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
}

.btn-gradient:hover {
  background: linear-gradient(to right, #7c3aed, #db2777);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}`, "css", "CSS"]
          )}
        >
          <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Gradient Magic
          </button>
        </PreviewTile>

        {/* Animated Border Button */}
        <PreviewTile
          title="Animated Border"
          description="Border color animation with background fill"
          componentName="animated-border-button"
          codeExamples={createCodeExamples(
            [`<button class="btn-animated">
  <span>Hover Effect</span>
  <div class="btn-overlay"></div>
</button>`, "html", "HTML"],
            [`.btn-animated {
  position: relative;
  padding: 0.75rem 1.5rem;
  background: white;
  color: #1f2937;
  border: 2px solid #d1d5db;
  border-radius: 0.5rem;
  font-weight: 500;
  overflow: hidden;
  transition: all 0.3s;
}

.btn-animated:hover {
  border-color: #3b82f6;
}

.btn-overlay {
  position: absolute;
  inset: 0;
  background: #3b82f6;
  transform: scaleX(0);
  transition: transform 0.3s;
}

.btn-animated:hover .btn-overlay {
  transform: scaleX(1);
}

.btn-animated span {
  position: relative;
  z-index: 10;
}`, "css", "CSS"]
          )}
        >
          <button className="relative px-6 py-3 bg-white text-gray-800 border-2 border-gray-300 rounded-lg hover:border-blue-500 transition-all duration-300 font-medium overflow-hidden group">
            <span className="relative z-10">Hover Effect</span>
            <div className="absolute inset-0 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
        </PreviewTile>

        {/* Pulse Button */}
        <PreviewTile
          title="Pulse Animation"
          description="Continuous pulse effect for attention"
          componentName="pulse-button"
          codeExamples={createCodeExamples(
            [`<button class="btn-pulse">
  <span>Pulse Button</span>
  <div class="pulse-ring"></div>
</button>`, "html", "HTML"],
            [`.btn-pulse {
  position: relative;
  padding: 0.75rem 1.5rem;
  background: #16a34a;
  color: white;
  border-radius: 0.5rem;
  font-weight: 600;
  overflow: hidden;
  transition: background-color 0.2s;
}

.btn-pulse:hover {
  background: #15803d;
}

.pulse-ring {
  position: absolute;
  inset: 0;
  background: #4ade80;
  border-radius: 0.5rem;
  animation: pulse 2s infinite;
  opacity: 0.2;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.2;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.1;
  }
}`, "css", "CSS"]
          )}
        >
          <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 font-semibold relative overflow-hidden">
            <span className="relative z-10">Pulse Button</span>
            <div className="absolute inset-0 bg-green-400 rounded-lg animate-ping opacity-20"></div>
          </button>
        </PreviewTile>

        {/* Glass Morphism Button */}
        <PreviewTile
          title="Glass Effect"
          description="Modern glass morphism design"
          componentName="glass-button"
          codeExamples={createCodeExamples(
            [`<button class="btn-glass">
  Glass Button
</button>`, "html", "HTML"],
            [`.btn-glass {
  padding: 0.75rem 1.5rem;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 0.5rem;
  font-weight: 600;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
}

.btn-glass:hover {
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}`, "css", "CSS"]
          )}
        >
          <button className="px-6 py-3 bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-lg hover:bg-white/30 transition-all duration-300 font-semibold shadow-lg">
            Glass Button
          </button>
        </PreviewTile>

        {/* 3D Button */}
        <PreviewTile
          title="3D Effect"
          description="Physical depth with shadow layer"
          componentName="3d-button"
          codeExamples={createCodeExamples(
            [`<button class="btn-3d">
  <span>3D Button</span>
  <div class="btn-shadow"></div>
</button>`, "html", "HTML"],
            [`.btn-3d {
  position: relative;
  padding: 0.75rem 1.5rem;
  background: #dc2626;
  color: white;
  border-radius: 0.5rem;
  font-weight: 600;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.2s;
}

.btn-3d:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

.btn-shadow {
  position: absolute;
  inset: 0;
  background: #b91c1c;
  border-radius: 0.5rem;
  transform: translateY(4px);
  z-index: -1;
}

.btn-3d span {
  position: relative;
  z-index: 10;
}`, "css", "CSS"]
          )}
        >
          <button className="px-6 py-3 bg-red-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 relative">
            <span className="relative z-10">3D Button</span>
            <div className="absolute inset-0 bg-red-700 rounded-lg transform translate-y-1"></div>
          </button>
        </PreviewTile>
      </div>

      {/* Best Practices Section */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>CSS Button Best Practices</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-medium mb-2">Modern CSS Techniques</h4>
            <ul className="text-muted-foreground text-sm space-y-1">
              <li>• Use <code className="bg-background px-2 py-1 rounded">transition</code> for smooth hover effects</li>
              <li>• Leverage <code className="bg-background px-2 py-1 rounded">transform</code> for performance-optimized animations</li>
              <li>• Apply <code className="bg-background px-2 py-1 rounded">backdrop-filter</code> for glass morphism effects</li>
              <li>• Use <code className="bg-background px-2 py-1 rounded">box-shadow</code> for depth and elevation</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Accessibility Considerations</h4>
            <ul className="text-muted-foreground text-sm space-y-1">
              <li>• Ensure sufficient color contrast ratios (4.5:1 minimum)</li>
              <li>• Provide clear focus indicators for keyboard navigation</li>
              <li>• Use semantic HTML button elements</li>
              <li>• Test with screen readers and keyboard-only navigation</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}