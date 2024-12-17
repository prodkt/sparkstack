import { cn } from "@/lib/utils"
import { ProdktLayout } from "@/registry/default/prodkt/layouts/web-app-01"

export default function WebApp01({ className }: { className?: string }) {
  return (
    <ProdktLayout>
      <div className={cn("p-0 mt-[56px] ml-[56px]", className)}></div>
    </ProdktLayout>
  )
}
