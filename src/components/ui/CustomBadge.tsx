import * as React from "react"
import { Badge as BaseBadge, BadgeProps } from "./badge"
import { cn } from "@/lib/utils"

interface CustomBadgeProps extends Omit<BadgeProps, 'children'> {
  children: React.ReactNode
}

export function CustomBadge({ variant, children, className, ...props }: CustomBadgeProps) {
  return (
    <div className={cn(className)}>
      <BaseBadge variant={variant} {...props}>
        {children}
      </BaseBadge>
    </div>
  )
}
