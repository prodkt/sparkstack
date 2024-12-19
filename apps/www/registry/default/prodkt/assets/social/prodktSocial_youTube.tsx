import { SVGProps } from "react"

const YouTubeLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <g filter="url(#a)">
      <path
        fill="currentcolor"
        fillOpacity={0.44}
        fillRule="evenodd"
        d="M29.839 13.16c.34.35.582.785.701 1.26.317 1.759.471 3.543.46 5.33a29.008 29.008 0 0 1-.46 5.25 2.78 2.78 0 0 1-1.94 2c-1.72.46-8.6.46-8.6.46s-6.88 0-8.6-.46a2.78 2.78 0 0 1-1.94-1.92A29.001 29.001 0 0 1 9 19.75a29.001 29.001 0 0 1 .46-5.29 2.78 2.78 0 0 1 1.94-2C13.12 12 20 12 20 12s6.88 0 8.6.42c.47.133.898.388 1.239.74ZM23.5 19.75l-5.75 3.27v-6.54l5.75 3.27Z"
        clipRule="evenodd"
      />
    </g>
    <path
      stroke="currentcolor"
      strokeLinecap="round"
      strokeLinejoin="bevel"
      strokeOpacity={0.16}
      strokeWidth={0.25}
      d="M29.839 13.16c.34.35.582.785.701 1.26.317 1.759.471 3.543.46 5.33a29.008 29.008 0 0 1-.46 5.25 2.78 2.78 0 0 1-1.94 2c-1.72.46-8.6.46-8.6.46s-6.88 0-8.6-.46a2.78 2.78 0 0 1-1.94-1.92A29.001 29.001 0 0 1 9 19.75a29.001 29.001 0 0 1 .46-5.29 2.78 2.78 0 0 1 1.94-2C13.12 12 20 12 20 12s6.88 0 8.6.42c.47.133.898.388 1.239.74ZM23.5 19.75l-5.75 3.27v-6.54l5.75 3.27Z"
      clipRule="evenodd"
    />
    <defs>
      <filter
        id="a"
        width={27.251}
        height={21.41}
        x={3.875}
        y={11.875}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={-5} dy={6} />
        <feGaussianBlur stdDeviation={2.85} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 0.1625 0 0 0 0 0.1625 0 0 0 0 0.1625 0 0 0 1 0" />
        <feBlend in2="shape" result="effect1_innerShadow_3726_5726" />
      </filter>
    </defs>
  </svg>
)
export default YouTubeLogo
