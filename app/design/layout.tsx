import { PreviewSurface } from '@/components/preview-controls/preview-surface';
import { DesignPageProvider } from '@/components/design-page-context';
import { DesignPageHero } from '@/components/design-page-hero';

export default function DesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PreviewSurface>
      <DesignPageProvider>
        {/* The Hero is now part of the layout, creating a consistent structure */}
        <DesignPageHero />
        
        {/* The page content will be rendered here */}
        <main>{children}</main>
      </DesignPageProvider>
    </PreviewSurface>
  );
}