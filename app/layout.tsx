import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/components/theme-provider";
import { siteConfig } from "@/lib/site";
import { metadataKeywords } from "../metadata";
import Footer from "@/components/footer";
import "@/app/globals.css";
import { TopNavbar } from '@/components/top-navbar';
import { ConsolidatedNavbar } from '@/components/consolidated-navbar';
import { TooltipProvider } from '@/components/ui/tooltip';
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { PreviewProvider } from "@/components/preview/preview-context";

export const viewport: Viewport = {
  themeColor: "black",
};

export const metadata: Metadata = {
  metadataBase: process.env.NODE_ENV === 'production' ? new URL(siteConfig.url) : undefined,
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: metadataKeywords,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <PreviewProvider>
            <TooltipProvider>
              {/* Background - fixed full viewport behind all content */}
              <div className="fixed inset-0 -z-10">
                <FlickeringGrid
                  className="absolute inset-0"
                  squareSize={4}
                  gridGap={6}
                  color="#6B7280"
                  maxOpacity={0.5}
                  flickerChance={0.1}
                />
                <div className="absolute inset-0 [mask-image:linear-gradient(to_top,transparent_25%,black_95%)] pointer-events-none" />
              </div>

              {/* Shell: full height, vertical stack */}
              <div className="flex min-h-screen flex-col">
                <TopNavbar />
                <ConsolidatedNavbar variant="full" />
                <main className="flex-1 w-full">
                  {children}
                </main>
                <Footer />
              </div>
            </TooltipProvider>
          </PreviewProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
