import { DesignTabs } from "@/components/design-tabs";
import ReactBitsTextPage from "./reactbits/page";
import HtmlCssTextPage from "./html-css/page";
import TailwindTextPage from "./tailwind/page";
import MagicUITextPage from "./magicui/page";
import ShadCNTextPage from "./shadcn/page";
import CustomizeTextPage from "./customize/page";

export default function TextPage() {
  return (
    <div className="container mx-auto max-w-7xl space-y-8 p-4">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Text Components</h1>
        <p className="text-muted-foreground">
          Explore text styling and animation components across different technology stacks. 
          Each implementation showcases the same concepts using different approaches.
        </p>
      </div>

      <DesignTabs 
        category="text" 
        technologies={['reactbits', 'html-css', 'tailwind', 'magicui', 'shadcn', 'customize']}
      >
        <ReactBitsTextPage />
        <HtmlCssTextPage />
        <TailwindTextPage />
        <MagicUITextPage />
        <ShadCNTextPage />
        <CustomizeTextPage />
      </DesignTabs>
    </div>
  );
}
