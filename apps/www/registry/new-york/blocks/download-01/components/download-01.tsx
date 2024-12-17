import { cn } from "@/lib/utils"
import ResumeDownload from "@/registry/new-york/prodkt/resume-download"

export default function Download01({ className }: { className?: string }) {
  return (
    <div className={cn("h-auto w-full px-1 py-4 md:py-16 lg:py-28", className)}>
      <ResumeDownload />
    </div>
  )
}
