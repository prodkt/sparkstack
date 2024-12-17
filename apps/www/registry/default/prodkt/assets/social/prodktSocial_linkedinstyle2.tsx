import { SVGProps } from "react"

const LinkedinLogo = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.633 9C9.73 9 9 9.706 9 10.576v18.849c0 .87.731 1.575 1.633 1.575h18.823c.902 0 1.632-.706 1.632-1.576V10.576c0-.87-.73-1.576-1.632-1.576H10.633Zm5.08 8.507v9.904h-3.306v-9.904h3.306Zm.217-3.063c0 .95-.717 1.71-1.87 1.71h-.021c-1.11 0-1.827-.76-1.827-1.71 0-.973.74-1.712 1.87-1.712 1.131 0 1.827.74 1.848 1.712Zm4.917 12.967h-3.305s.043-8.975 0-9.904h3.305v1.402c.44-.675 1.226-1.634 2.98-1.634 2.174 0 3.804 1.415 3.804 4.457v5.68h-3.305v-5.299c0-1.331-.478-2.24-1.674-2.24-.913 0-1.457.613-1.696 1.205-.087.21-.109.507-.109.803v5.53Z"
      clipRule="evenodd"
    />
    <defs>
      <linearGradient
        id="a"
        x1={31.144}
        x2={8.616}
        y1={31.264}
        y2={8.646}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="currentcolor" stopOpacity={0.15} />
        <stop offset={1} stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
)
export default LinkedinLogo
