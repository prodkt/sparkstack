import * as React from "react"
import { SVGProps } from "react"

const Logomark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={222}
    height={162}
    viewBox="0 0 222 162"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M149.676 11.813A40.332 40.332 0 0 1 178.195 0h23.625L52.309 149.511a40.333 40.333 0 0 1-28.518 11.813H.165L149.676 11.813Z"
      fill="url(#sparkstack-logomark-a)"
    />
    <path
      d="M169.842 82.392a40.33 40.33 0 0 1 28.518-11.813h23.625l-78.931 78.932a40.335 40.335 0 0 1-28.519 11.813H90.91l78.932-78.932Z"
      fill="url(#sparkstack-logomark-b)"
    />
    <defs>
      <radialGradient
        id="sparkstack-logomark-a"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="rotate(138.013 100.91 38.723) scale(203.474 254.342)"
      >
        <stop offset={0.1} stopColor="var(--gray-10)" />
        <stop offset={0.5} stopColor="var(--gray-12)" />
      </radialGradient>
      <radialGradient
        id="sparkstack-logomark-b"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(-85.1993 76.56582 -95.23137 -105.96954 221.985 70.58)"
      >
        <stop offset={0.2} stopColor="var(--gray-10)" />
        <stop offset={0.6} stopColor="var(--gray-12)" />
      </radialGradient>
    </defs>
  </svg>
)

export default Logomark
