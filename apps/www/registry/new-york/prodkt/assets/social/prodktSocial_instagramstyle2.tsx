import { SVGProps } from "react"

const InstagramLogo = (props: SVGProps<SVGSVGElement>) => (
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
      d="M25 10H15a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V15a5 5 0 0 0-5-5Zm-1 9.37a4 4 0 1 1-7.913 1.174A4 4 0 0 1 24 19.37ZM25.5 15a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"
      clipRule="evenodd"
    />
    <defs>
      <linearGradient
        id="a"
        x1={30.05}
        x2={9.57}
        y1={30.24}
        y2={9.76}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="currentcolor" stopOpacity={0.15} />
        <stop offset={1} stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
)
export default InstagramLogo
