import {
  RemixLogomarkDashed,
  RemixLogomarkSolid,
} from "@/registry/default/prodkt/logomark_remix"

export default function LogomarkRemixDemo() {
  return (
    <div className="flex flex-row gap-4">
      <RemixLogomarkDashed />
      <RemixLogomarkSolid />
    </div>
  )
}
