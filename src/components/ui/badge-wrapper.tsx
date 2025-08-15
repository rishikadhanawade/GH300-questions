import * as React from "react"
import { Badge } from "./badge"
import { cn } from "@/lib/utils"
import type { BadgeWrapperProps } from "@/types/ui"

export function BadgeWrapper({ 
  variant = "default", 
  children, 
  className,
  ...props 
}: BadgeWrapperProps) {
  return (
    <Badge variant={variant} className={cn(className)} {...props}>
      {children}
    </Badge>
  )
}
