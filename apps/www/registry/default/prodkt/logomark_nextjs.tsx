import * as React from "react"
import { SVGProps } from "react"

export const NextjsLogomark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={256}
    height={256}
    viewBox="0 0 256 256"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <linearGradient
        x1="55.633%"
        y1="56.385%"
        x2="83.228%"
        y2="96.08%"
        id="nextjs-logomark-c"
      >
        <stop stopColor="currentColor" offset="0%" />
        <stop stopColor="currentColor" stopOpacity={0} offset="100%" />
      </linearGradient>
      <linearGradient
        x1="50%"
        y1="0%"
        x2="49.953%"
        y2="73.438%"
        id="nextjs-logomark-d"
      >
        <stop stopColor="currentColor" offset="0%" />
        <stop stopColor="currentColor" stopOpacity={0} offset="100%" />
      </linearGradient>
      <circle id="nextjs-logomark-a" cx={128} cy={128} r={128} />
    </defs>
    <mask id="nextjs-logomark-b" fill="currentColor">
      <use xlinkHref="#nextjs-logomark-a" />
    </mask>
    <g mask="url(#nextjs-logomark-b)">
      <circle cx={128} cy={128} r={128} />
      <path
        d="M212.634 224.028 98.335 76.8H76.8v102.357h17.228V98.68L199.11 234.446a128.433 128.433 0 0 0 13.524-10.418Z"
        fill="url(#nextjs-logomark-c)"
      />
      <path
        fill="url(#nextjs-logomark-d)"
        d="M163.556 76.8h17.067v102.4h-17.067z"
      />
    </g>
  </svg>
)
