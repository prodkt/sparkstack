import { cn } from "@/lib/utils"
import { ProdktLayout } from "@/registry/default/prodkt/layouts/web-app-01"

export default function WebApp01({ className }: { className?: string }) {
  return (
    <div className={cn("", className)}>
      <ProdktLayout>
        <div className="w-full">
          <h1>Hello</h1>
        </div>
      </ProdktLayout>
    </div>
  )
}
