import { SVGProps } from "react"

const XLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <path
      fill="url(#a)"
      stroke="currentcolor"
      strokeLinejoin="bevel"
      strokeWidth={0.5}
      d="M22.096 18.317 30.285 9h-1.94l-7.116 8.088L15.551 9H9l8.59 12.231L9 31h1.94l7.51-8.543L24.448 31H31l-8.904-12.683Zm-2.66 3.021-.871-1.218-6.924-9.688h2.98l5.59 7.821.869 1.219 7.265 10.166h-2.982l-5.927-8.3Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={31.055}
        x2={8.527}
        y1={31.264}
        y2={8.736}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="currentcolor" stopOpacity={0.15} />
        <stop offset={1} stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
)
export default XLogo
