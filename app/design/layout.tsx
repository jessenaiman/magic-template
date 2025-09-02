import { cookies } from "next/headers"
import { SidebarProvider, SidebarInset } from "@/components/animate-ui/radix/sidebar"
import { DesignSidebar } from "@/components/design/design-sidebar"

export default async function DesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies()
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true"

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <DesignSidebar />
      <SidebarInset>
        <main className="flex-1 p-4 sm:p-6">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
