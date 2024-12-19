import { SVGProps } from "react"

const InstagramLogo = (props: SVGProps<SVGSVGElement>) => (
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
        d="M25 10H15a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V15a5 5 0 0 0-5-5Zm-1 9.37a4 4 0 1 1-7.913 1.174A4 4 0 0 1 24 19.37ZM25.5 15a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"
        clipRule="evenodd"
      />
    </g>
    <path
      stroke="currentcolor"
      strokeLinecap="round"
      strokeLinejoin="bevel"
      strokeOpacity={0.16}
      strokeWidth={0.25}
      d="M25 10H15a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V15a5 5 0 0 0-5-5Zm-1 9.37a4 4 0 1 1-7.913 1.174A4 4 0 0 1 24 19.37ZM25.5 15a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"
      clipRule="evenodd"
    />
    <defs>
      <filter
        id="a"
        width={25.25}
        height={25.95}
        x={4.875}
        y={9.875}
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
        <feBlend in2="shape" result="effect1_innerShadow_3726_5742" />
      </filter>
    </defs>
  </svg>
)
export default InstagramLogo
