"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { getBreadcrumbItems } from "@/config/navigation"

export function PageBreadcrumb() {
  const pathname = usePathname()
  const breadcrumbItems = getBreadcrumbItems(pathname)

  if (breadcrumbItems.length <= 1) return null

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbItems.map((item: { label: string; href: string }, index: number) => (
          <React.Fragment key={item.href}>
            <BreadcrumbItem>
              {index === breadcrumbItems.length - 1 ? (
                <BreadcrumbPage>{item.label}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink asChild>
                  <Link href={item.href}>{item.label}</Link>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
            {index < breadcrumbItems.length - 1 && <BreadcrumbSeparator />}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
