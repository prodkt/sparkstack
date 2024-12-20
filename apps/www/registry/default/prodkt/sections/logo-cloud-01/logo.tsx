import { cn } from "@/lib/utils"

export function LogoBox({
  className,
  children,
  ...rest
}: Readonly<{
  className?: string
  children?: React.ReactNode
}>) {
  return (
    <div className={cn("relative", className)} {...rest}>
      <div className="p-px bg-gradient-to-br from-[var(--ghost-a4)] to-[var(--ghost-aa5)] overflow-hidden relative isolate aspect-square">
        <div className="bg-[var(--gray-2)] aspect-square size-20 p-4 rounded-[15px] flex items-center justify-center">
          {children}
        </div>
      </div>
      <div className="size-4 absolute bg-white rounded-full top-0 left-0 z-[-1] blur-xl" />
      <svg
        width={0}
        height={0}
        className="absolute inset-0 object-cover size-full"
        viewBox="0 0 1 1"
      >
        <clipPath id="squircleClip" clipPathUnits="objectBoundingBox">
          <path d="M 0,0.5 C 0,0 0,0 0.5,0 S 1,0 1,0.5 1,1 0.5,1 0,1 0,0.5" />
        </clipPath>
      </svg>
    </div>
  )
}
