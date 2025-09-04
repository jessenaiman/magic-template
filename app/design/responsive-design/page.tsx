
import { PreviewTile } from "@/components/preview-controls/preview-tile";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { FileText, Globe, GraduationCap } from "lucide-react";

export default function ResponsiveDesignPage() {
  const features = [
    {
      Icon: FileText,
      name: "Save Time",
      description: "Automate your documentation process.",
      href: "/",
      cta: "Learn More",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    },
    {
      Icon: Globe,
      name: "Multilingual",
      description: "Generate documentation in multiple languages.",
      href: "/",
      cta: "Learn More",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    {
      Icon: GraduationCap,
      name: "Context-Aware",
      description: "Documentation that understands your codebase.",
      href: "/",
      cta: "Learn More",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3",
    },
  ];

  return (
    <div className="container mx-auto max-w-7xl space-y-8 p-4">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Responsive Design Overview</h1>
        <p className="text-muted-foreground">
          The Responsive Design section covers flexible layouts and adaptive UI patterns for all screen sizes. Explore grid systems and responsive components to build interfaces that look great everywhere.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6">
        <PreviewTile
          title="Bento Grid"
          description="A modern, flexible grid layout for showcasing features."
          componentName="BentoGrid"
        >
          <BentoGrid className="lg:grid-rows-2">
            {features.map((feature) => (
              <BentoCard key={feature.name} {...feature} />
            ))}
          </BentoGrid>
        </PreviewTile>
      </div>
    </div>
  );
}
