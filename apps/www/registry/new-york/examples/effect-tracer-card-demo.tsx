import TracerCard from "@/registry/new-york/prodkt/effect-card/tracer-card"

export default function TracerCardDemo() {
  return (
    <div>
      <TracerCard
        className="w-72 h-80 bg-gradient-to-tr from-ghost-a4 to-gray-a4 ring-offset-1 ring-offset-primary-a3"
        title="Tracer Card"
        description="A vertically stacked set of interactive headings that each reveal a section of content."
      />
    </div>
  )
}
