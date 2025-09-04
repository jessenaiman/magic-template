import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/components/theme-provider";
import { siteConfig } from "@/lib/site";
import { metadataKeywords } from "../metadata";
import Footer from "@/components/footer";
import "@/app/globals.css";
import { cookies } from "next/headers"
import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies()
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true"
  
  // Get the current path to conditionally render sidebar
  // Since this is a server component, we'll need to handle this differently
  // We'll use a client-side wrapper or conditionally render in the app-sidebar

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
          {/* SidebarProvider now sets defaultOpen to false on home, true elsewhere */}
          {/* SidebarProvider now sets defaultOpen to false on home, true elsewhere */}
          <SidebarProvider defaultOpen={defaultOpen}>
            <AppSidebar />
            <SidebarInset>
              <main className="flex-1 p-4">
                {children}
              </main>
            </SidebarInset>
          </SidebarProvider>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
