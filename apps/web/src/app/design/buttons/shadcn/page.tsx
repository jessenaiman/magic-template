'use client';

import * as React from 'react';
import { PreviewTile } from '@/src/components/preview/preview-tile';
import { Button } from '@/packages/components/ui/button';
import { useDesignPage } from '@/src/components/design-page-context';
import { Download, Heart, Share, Trash2 } from 'lucide-react';

function PageConfigurator() {
  const { setTitle, setDescription } = useDesignPage();

  React.useEffect(() => {
    setTitle('Shadcn/ui Buttons');
    setDescription(
      'Pre-built button components from Shadcn/ui with consistent design and accessibility.',
    );
  }, [setTitle, setDescription]);

  return null;
}

export default function ShadcnButtonsPage() {
  return (
    <>
      <PageConfigurator />
      <PreviewTile
        title="Default Button"
        componentName="shadcn-default-button"
        code={`import { Button } from "@/components/ui/button"

export default function MyComponent() {
  return <Button>Default Button</Button>
}`}
      >
        <Button>Default Button</Button>
      </PreviewTile>

      <PreviewTile
        title="Secondary Button"
        componentName="shadcn-secondary-button"
        code={`<Button variant="secondary">Secondary Button</Button>`}
      >
        <Button variant="secondary">Secondary Button</Button>
      </PreviewTile>

      <PreviewTile
        title="Destructive Button"
        componentName="shadcn-destructive-button"
        code={`<Button variant="destructive">Delete Item</Button>`}
      >
        <Button variant="destructive">Delete Item</Button>
      </PreviewTile>

      <PreviewTile
        title="Outline Button"
        componentName="shadcn-outline-button"
        code={`<Button variant="outline">Outline Button</Button>`}
      >
        <Button variant="outline">Outline Button</Button>
      </PreviewTile>

      <PreviewTile
        title="Ghost Button"
        componentName="shadcn-ghost-button"
        code={`<Button variant="ghost">Ghost Button</Button>`}
      >
        <Button variant="ghost">Ghost Button</Button>
      </PreviewTile>

      <PreviewTile
        title="Link Button"
        componentName="shadcn-link-button"
        code={`<Button variant="link">Link Button</Button>`}
      >
        <Button variant="link">Link Button</Button>
      </PreviewTile>

      <PreviewTile
        title="Button Sizes"
        componentName="shadcn-button-sizes"
        code={`<Button size="sm">Small Button</Button>
<Button size="default">Default Button</Button>
<Button size="lg">Large Button</Button>`}
      >
        <div className="flex flex-col items-start gap-2">
          <Button size="sm">Small Button</Button>
          <Button size="default">Default Button</Button>
          <Button size="lg">Large Button</Button>
        </div>
      </PreviewTile>

      <PreviewTile
        title="Button with Icon"
        componentName="shadcn-button-with-icon"
        code={`import { Download } from "lucide-react"

<Button>
  <Download className="h-4 w-4 mr-2" />
  Download
</Button>`}
      >
        <Button>
          <Download className="mr-2 h-4 w-4" />
          Download
        </Button>
      </PreviewTile>

      <PreviewTile
        title="Icon Only Button"
        componentName="shadcn-icon-only-button"
        code={`<Button size="icon">
  <Heart className="h-4 w-4" />
</Button>`}
      >
        <Button size="icon">
          <Heart className="h-4 w-4" />
        </Button>
      </PreviewTile>

      <PreviewTile
        title="Button States"
        componentName="shadcn-button-states"
        code={`<Button disabled>Disabled Button</Button>
<Button variant="destructive">
  <Trash2 className="h-4 w-4 mr-2" />
  Delete
</Button>
<Button variant="outline">
  <Share className="h-4 w-4 mr-2" />
  Share
</Button>`}
      >
        <div className="flex flex-col items-start gap-2">
          <Button disabled>Disabled Button</Button>
          <Button variant="destructive">
            <Trash2 className="mr-2 h-4 w-4" />
            Delete
          </Button>
          <Button variant="outline">
            <Share className="mr-2 h-4 w-4" />
            Share
          </Button>
        </div>
      </PreviewTile>

      <PreviewTile
        title="Loading Button"
        componentName="shadcn-loading-button"
        code={`<Button disabled>
  <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
  Loading...
</Button>`}
      >
        <Button disabled>
          <svg
            className="-ml-1 mr-2 h-4 w-4 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Loading...
        </Button>
      </PreviewTile>

      <PreviewTile
        title="Custom Styled"
        componentName="shadcn-custom-styled-button"
        code={`<Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0">
  Custom Gradient
</Button>`}
      >
        <Button className="border-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600">
          Custom Gradient
        </Button>
      </PreviewTile>
    </>
  );
}
