import { cn } from "@/lib/utils"
import ResumeDownload from "@/registry/default/prodkt/resume-download"

export default function Download01({ className }: { className?: string }) {
  return (
    <div className={cn("p-0 flex items-center justify-center", className)}>
      <ResumeDownload />
    </div>
  )
}
