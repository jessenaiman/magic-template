"use client"

import * as React from "react"
import { useRouter, usePathname } from "next/navigation"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface DesignTabsProps {
  items: Array<{
    label: string
    value: string
  }>
  basePath: string
}

export function DesignTabs({ items, basePath }: DesignTabsProps) {
  const router = useRouter()
  const pathname = usePathname()
  const currentTech = pathname.split("/").pop() || items[0].value

  return (
    <Tabs
      defaultValue={currentTech}
      className="w-full"
      onValueChange={(value) => {
        router.push(`${basePath}/${value}`)
      }}
    >
      <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6">
        {items.map(({ label, value }) => (
          <TabsTrigger
            key={value}
            value={value}
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            {label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  )
}
