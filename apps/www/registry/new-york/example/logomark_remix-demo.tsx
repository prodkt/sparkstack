import {
  RemixLogomarkDashed,
  RemixLogomarkSolid,
} from "@/registry/new-york/prodkt/logomark_remix"

export default function LogomarkRemixDemo() {
  return (
    <div className="flex flex-row gap-4">
      <RemixLogomarkDashed />
      <RemixLogomarkSolid />
    </div>
  )
}
