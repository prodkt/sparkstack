import React from "react"

/**
 *
 * @param root0
 * @param root0.hideRight
 */
const DesignerMarks = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    hideRight?: boolean
    hideMiddle?: boolean
    hideLeft?: boolean
    children?: React.ReactNode
  }
>(({ hideLeft, hideMiddle, hideRight, children, ...props }, ref) => (
  <>
    <div ref={ref} className="absolute inset-0 m-0 size-full" {...props}>
      <div className="relative z-[0] size-full">
        {hideMiddle ? (
          ""
        ) : (
          <>
            <div className="absolute inset-x-1/2 -top-1/2 z-[-1] mx-auto mb-auto mt-0 hidden h-[200%] w-px max-w-px rounded-none bg-gradient-to-b from-[var(--gray-a1)] via-[var(--gray-a3)] to-[var(--gray-a1)]" />
            <div className="absolute -top-1/2 left-1/3 z-[-1] mx-auto mb-auto mt-0 h-[200%] w-px max-w-px rounded-none bg-gradient-to-b from-[var(--gray-a1)] via-[var(--gray-a3)] to-[var(--gray-a1)]" />
            <div className="absolute -top-1/2 right-1/3 z-[-1] mx-auto mb-auto mt-0 h-[200%] w-px max-w-px rounded-none bg-gradient-to-b from-[var(--gray-a1)] via-[var(--gray-a3)] to-[var(--gray-a1)]" />
          </>
        )}
        {hideLeft ? (
          ""
        ) : (
          <div className="absolute -left-0 -top-1/2 z-[-1] mb-auto mt-0 h-[200%] w-px max-w-px rounded-none bg-gradient-to-b from-[var(--gray-a1)] via-[var(--gray-a3)] to-[var(--gray-a1)]" />
        )}
        {hideRight ? (
          ""
        ) : (
          <div className="absolute -right-0 -top-1/2 z-[-1] mb-auto mt-0 h-[200%] w-px max-w-px rounded-none bg-gradient-to-b from-[var(--gray-a1)] via-[var(--gray-a3)] to-[var(--gray-a1)]" />
        )}
        <div className="absolute -left-0 -top-10 bottom-auto z-[-1] mb-auto mt-0 h-20 w-px max-w-px rounded-none bg-gradient-to-b from-[var(--gray-a1)] via-[var(--gray-a3)] to-[var(--gray-a1)]" />
        <div className="absolute -left-10 -top-0 bottom-auto z-[-1] mb-auto mt-0 h-px max-h-px w-20 rounded-none bg-gradient-to-r from-[var(--gray-a1)] via-[var(--gray-a3)] to-[var(--gray-a1)]" />
        {hideRight ? (
          ""
        ) : (
          <>
            <div className="absolute -right-0 -top-10 bottom-auto z-[-1] mb-auto mt-0 h-20 w-px max-w-px rounded-none bg-gradient-to-b from-[var(--gray-a1)] via-[var(--gray-a3)] to-[var(--gray-a1)]" />
            <div className="absolute -right-10 -top-0 bottom-auto z-[-1] mb-auto mt-0 h-px max-h-px w-20 rounded-none bg-gradient-to-r from-[var(--gray-a1)] via-[var(--gray-a3)] to-[var(--gray-a1)]" />
          </>
        )}
        <div className="absolute -bottom-10 -left-0 top-auto z-[-1] mb-auto mt-0 h-20 w-px max-w-px rounded-none bg-gradient-to-b from-[var(--gray-a1)] via-[var(--gray-a3)] to-[var(--gray-a1)]" />
        <div className="absolute -bottom-0 -left-10 top-auto z-[-1] mb-auto mt-0 h-px max-h-px w-20 rounded-none bg-gradient-to-r from-[var(--gray-a1)] via-[var(--gray-a3)] to-[var(--gray-a1)]" />

        <div className="absolute -bottom-10 -right-0 top-auto z-[-1] mb-auto mt-0 h-20 w-px max-w-px rounded-none bg-gradient-to-b from-[var(--gray-a1)] via-[var(--gray-a3)] to-[var(--gray-a1)]" />
        <div className="absolute -bottom-0 -right-10 top-auto z-[-1] mb-auto mt-0 h-px max-h-px w-20 rounded-none bg-gradient-to-r from-[var(--gray-a1)] via-[var(--gray-a3)] to-[var(--gray-a1)]" />

        <div className="absolute -left-1 -top-1 bottom-auto z-[1] mb-auto mt-0 size-2 rounded-none border border-ghost-a7 bg-ghost-aa7" />
        {hideRight ? (
          ""
        ) : (
          <>
            <div className="absolute -right-1 -top-1 bottom-auto z-[1] mb-auto mt-0 size-2 rounded-none border border-ghost-a7 bg-ghost-aa7" />
            <div className="absolute -bottom-1 -right-1 top-auto z-[1] my-0 size-2 rounded-none border border-ghost-a7 bg-ghost-aa7" />
          </>
        )}
        <div className="absolute -bottom-1 -left-1 top-auto z-[1] my-0 size-2 rounded-none border border-ghost-a7 bg-ghost-aa7" />
      </div>
    </div>
    {children}
  </>
))

DesignerMarks.displayName = "DesignerMarks"

export { DesignerMarks }
