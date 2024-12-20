import { SVGProps } from "react"

const YouTubeLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <path
      fill="url(#a)"
      fillRule="evenodd"
      stroke="currentcolor"
      strokeLinejoin="bevel"
      strokeWidth={0.5}
      d="M29.839 13.16c.34.35.582.785.701 1.26.317 1.759.471 3.543.46 5.33a29.008 29.008 0 0 1-.46 5.25 2.78 2.78 0 0 1-1.94 2c-1.72.46-8.6.46-8.6.46s-6.88 0-8.6-.46a2.78 2.78 0 0 1-1.94-1.92A29.001 29.001 0 0 1 9 19.75a29.001 29.001 0 0 1 .46-5.29 2.78 2.78 0 0 1 1.94-2C13.12 12 20 12 20 12s6.88 0 8.6.42c.47.133.898.388 1.239.74ZM23.5 19.75l-5.75 3.27v-6.54l5.75 3.27Z"
      clipRule="evenodd"
    />
    <defs>
      <linearGradient
        id="a"
        x1={31.056}
        x2={16.162}
        y1={27.645}
        y2={6.449}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="currentcolor" stopOpacity={0.15} />
        <stop offset={1} stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
)
export default YouTubeLogo
