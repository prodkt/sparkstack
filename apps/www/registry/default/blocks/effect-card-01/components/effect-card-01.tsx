import { cn } from "@/lib/utils"
import TracerCard from "@/registry/default/prodkt/effect-card/tracer-card"

export default function TracerCard01({ className }: { className?: string }) {
  return (
    <div className={cn("p-0 flex items-center justify-center", className)}>
      <TracerCard
        className="w-72 h-80 bg-gradient-to-tr from-ghost-a4 to-gray-a4 ring-offset-1 ring-offset-primary-a3"
        title="Tracer Card"
        description="A vertically stacked set of interactive headings that each reveal a section of content."
      />
    </div>
  )
}
