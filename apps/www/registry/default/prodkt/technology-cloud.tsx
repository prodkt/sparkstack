import * as React from "react"

const LogoCloud = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className="relative z-[6] flex w-auto flex-row items-center justify-center max-w-full outline outline-1 backdrop-blur -outline-offset-0 outline-gray-3"
      {...props}
    >
      <div className="z-[2] absolute -left-1 -top-1 bottom-auto mb-auto mt-0 size-2 rounded-none bg-[var(--gray-3)] bg-clip-content" />
      <div className="z-[2] absolute -right-1 -top-1 bottom-auto mb-auto mt-0 size-2 rounded-none bg-[var(--gray-3)] bg-clip-content" />
      <div className="z-[2] absolute -bottom-1 -left-1 top-auto my-0 size-2 rounded-none bg-[var(--gray-3)] bg-clip-content" />
      <div className="z-[2] absolute -bottom-1 -right-1 top-auto my-0 size-2 rounded-none bg-[var(--gray-3)] bg-clip-content" />
      <div className="relative  flex w-auto flex-row items-center justify-center -space-x-px overflow-hidden">
        {children}
      </div>
    </div>
  )
})

const CloudLogo = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className="mx-auto flex h-24 w-auto min-w-28 items-center justify-center border-gray-3 border-l border-r first:border-l-0 last:border-r-0 p-4 hover:min-w-40 text-xs transition-all duration-700"
      {...props}
    >
      {children}
    </div>
  )
})

LogoCloud.displayName = "LogoCloud"
CloudLogo.displayName = "CloudLogo"
export { LogoCloud, CloudLogo }
