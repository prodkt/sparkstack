import {
  RemixLogomarkDashed,
  RemixLogomarkSolid,
} from "@/registry/logos/logomark_remix"

export default function LogomarkRemixDemo() {
  return (
    <div className="flex flex-row gap-4">
      <RemixLogomarkDashed />
      <RemixLogomarkSolid />
    </div>
  )
}
