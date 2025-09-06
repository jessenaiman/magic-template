import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/components/theme-provider";
import { siteConfig } from "@/lib/site";
import { metadataKeywords } from "../metadata";
import Footer from "@/components/footer";
import "@/app/globals.css";
import { TopNavbar } from '@/components/top-navbar';
import { TooltipProvider } from '@/components/ui/tooltip';
import { FlickeringGrid } from "@/components/magicui/flickering-grid";

export const viewport: Viewport = {
  themeColor: "black",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
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
          <TooltipProvider>
            {/* FlickeringGrid background for all pages */}
            <div className="absolute top-0 left-0 z-0 w-full h-[500px] [mask-image:linear-gradient(to_top,transparent_25%,black_95%)] pointer-events-none">
              <FlickeringGrid
                className="absolute top-0 left-0 size-full"
                squareSize={4}
                gridGap={6}
                color="#6B7280"
                maxOpacity={0.5}
                flickerChance={0.1}
              />
            </div>
            <TopNavbar />
            <div className="relative z-10">
              {children}
              <Footer />
            </div>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
