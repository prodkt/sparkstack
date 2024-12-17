import JumpToSection01 from "@/registry/default/blocks/effect-jump-to-section-01/components/index"

export default function Page() {
  return (
    <div
      data-theme="dark"
      style={{ colorScheme: "dark" }}
      className="dark dark-theme text-foreground absolute bg-background inset-0 m-0 p-0 flex h-[--height] w-full items-center justify-center min-h-[880px]"
    >
      <JumpToSection01 />
    </div>
  )
}
