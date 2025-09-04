import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/components/theme-provider";
import { siteConfig } from "@/lib/site";
import { metadataKeywords } from "@/metadata";
import Footer from "@/components/footer";
import "@/app/globals.css";
import { cookies } from "next/headers"
import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import PageTransition from "@/components/page-transition";
import { Suspense } from "react";
import { LoadingIndicator } from "@/components/loading-indicator";


export const viewport: Viewport = {
  themeColor: "black",
};
// ... existing code ...
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: metadataKeywords,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies()
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true"
  
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider defaultOpen={defaultOpen}>
            <AppSidebar />
            <SidebarInset>
              <main className="flex-1 p-4">
                <Suspense fallback={<LoadingIndicator className="h-[calc(100vh-4rem)]" />}>
                  <PageTransition>
                    {children}
                  </PageTransition>
                </Suspense>
              </main>
            </SidebarInset>
          </SidebarProvider>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
