import { cn } from "@/lib/utils"
import { ProdktLayout } from "@/registry/default/prodkt/layouts/web-app-01"

export default function WebApp01({ className }: { className?: string }) {
  return (
    <ProdktLayout>
      <div
        className={cn("p-0 flex items-center justify-center", className)}
      ></div>
    </ProdktLayout>
  )
}
