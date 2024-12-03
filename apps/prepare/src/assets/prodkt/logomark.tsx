import * as React from "react"
import { SVGProps } from "react"

export default function Logomark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
  >
  <path
    d="m20.537 31.5-8.7-15h9.846l8.668 15h-9.814Zm-9.857-16H.866L9.534.5h9.847l-8.7 15ZM9.273 27.112a4.387 4.387 0 1 1-4.387-4.388 4.387 4.387 0 0 1 4.387 4.388Z"
    fill="currentColor"
      stroke="currentColor"
    />
    </svg>
  )
}
