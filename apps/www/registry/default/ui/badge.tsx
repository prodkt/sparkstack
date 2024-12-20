import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        solid:
          "border-[var(--gray-a2)] group-hover:border-[var(--gray-a4)] bg-[var(--gray-3)] group-hover:bg-[var(--gray-1)] border no-underline hover:no-underline decoration-0 hover:decoration-0 group-hover:no-underline decoration-transparent hover:decoration-transparent",
        ghost:
          "border-[var(--ghost-a2)] hover:border-[var(--ghost-a4)] hover:bg-[var(--ghost-a4)] border no-underline hover:no-underline decoration-0 hover:decoration-0 group-hover:no-underline decoration-transparent hover:decoration-transparent",
        crimson:
          "border-[var(--crimson-a3)] bg-[var(--crimson-a2)] text-[var(--crimson-a8)] shadow hover:bg-[var(--crimson-a2)] no-underline hover:no-underline decoration-0 hover:decoration-0 group-hover:no-underline decoration-transparent hover:decoration-transparent",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
