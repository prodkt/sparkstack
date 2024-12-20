import { SVGProps } from "react"

const FigmaLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={40}
    fill="none"
    {...props}
  >
    <path
      fill="url(#a)"
      stroke="currentcolor"
      strokeLinejoin="bevel"
      strokeWidth={0.5}
      d="M11.995 31c2.02 0 3.66-1.643 3.66-3.667v-3.666h-3.66a3.665 3.665 0 0 0-3.66 3.666A3.665 3.665 0 0 0 11.994 31Z"
    />
    <path
      fill="url(#b)"
      stroke="currentcolor"
      strokeLinejoin="bevel"
      strokeWidth={0.5}
      d="M8.334 20a3.665 3.665 0 0 1 3.66-3.667h3.661v7.333h-3.66A3.665 3.665 0 0 1 8.335 20Z"
    />
    <path
      fill="url(#c)"
      stroke="currentcolor"
      strokeLinejoin="bevel"
      strokeWidth={0.5}
      d="M8.335 12.667A3.665 3.665 0 0 1 11.995 9h3.66v7.333h-3.66a3.665 3.665 0 0 1-3.66-3.666Z"
    />
    <path
      fill="url(#d)"
      stroke="currentcolor"
      strokeLinejoin="bevel"
      strokeWidth={0.5}
      d="M15.655 9h3.66c2.021 0 3.66 1.643 3.66 3.667a3.665 3.665 0 0 1-3.66 3.666h-3.66V9Z"
    />
    <path
      fill="url(#e)"
      stroke="currentcolor"
      strokeLinejoin="bevel"
      strokeWidth={0.5}
      d="M22.976 20a3.665 3.665 0 0 1-3.66 3.666A3.665 3.665 0 0 1 15.656 20a3.665 3.665 0 0 1 3.66-3.667c2.02 0 3.66 1.643 3.66 3.667Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={15.674}
        x2={8.164}
        y1={31.088}
        y2={23.592}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="currentcolor" stopOpacity={0.15} />
        <stop offset={1} stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="b"
        x1={15.674}
        x2={8.164}
        y1={23.754}
        y2={16.258}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="currentcolor" stopOpacity={0.15} />
        <stop offset={1} stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="c"
        x1={15.674}
        x2={8.165}
        y1={16.421}
        y2={8.925}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="currentcolor" stopOpacity={0.15} />
        <stop offset={1} stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="d"
        x1={22.994}
        x2={15.485}
        y1={16.421}
        y2={8.925}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="currentcolor" stopOpacity={0.15} />
        <stop offset={1} stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="e"
        x1={22.994}
        x2={15.485}
        y1={23.754}
        y2={16.258}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="currentcolor" stopOpacity={0.15} />
        <stop offset={1} stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
)
export default FigmaLogo
