import { SVGProps } from "react"

const LinkedinLogo = (props: SVGProps<SVGSVGElement>) => (
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
        d="M10.633 9C9.73 9 9 9.706 9 10.576v18.849c0 .87.731 1.575 1.633 1.575h18.823c.902 0 1.632-.706 1.632-1.576V10.576c0-.87-.73-1.576-1.632-1.576H10.633Zm5.08 8.507v9.904h-3.306v-9.904h3.306Zm.217-3.063c0 .95-.717 1.71-1.87 1.71h-.021c-1.11 0-1.827-.76-1.827-1.71 0-.973.74-1.712 1.87-1.712 1.131 0 1.827.74 1.848 1.712Zm4.917 12.967h-3.305s.043-8.975 0-9.904h3.305v1.402c.44-.675 1.226-1.634 2.98-1.634 2.174 0 3.804 1.415 3.804 4.457v5.68h-3.305v-5.299c0-1.331-.478-2.24-1.674-2.24-.913 0-1.457.613-1.696 1.205-.087.21-.109.507-.109.803v5.53Z"
        clipRule="evenodd"
      />
    </g>
    <path
      stroke="currentcolor"
      strokeLinecap="round"
      strokeLinejoin="bevel"
      strokeOpacity={0.16}
      strokeWidth={0.25}
      d="M10.633 9C9.73 9 9 9.706 9 10.576v18.849c0 .87.731 1.575 1.633 1.575h18.823c.902 0 1.632-.706 1.632-1.576V10.576c0-.87-.73-1.576-1.632-1.576H10.633Zm5.08 8.507v9.904h-3.306v-9.904h3.306Zm.217-3.063c0 .95-.717 1.71-1.87 1.71h-.021c-1.11 0-1.827-.76-1.827-1.71 0-.973.74-1.712 1.87-1.712 1.131 0 1.827.74 1.848 1.712Zm4.917 12.967h-3.305s.043-8.975 0-9.904h3.305v1.402c.44-.675 1.226-1.634 2.98-1.634 2.174 0 3.804 1.415 3.804 4.457v5.68h-3.305v-5.299c0-1.331-.478-2.24-1.674-2.24-.913 0-1.457.613-1.696 1.205-.087.21-.109.507-.109.803v5.53Z"
      clipRule="evenodd"
    />
    <defs>
      <filter
        id="a"
        width={27.338}
        height={27.95}
        x={3.875}
        y={8.875}
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
        <feBlend in2="shape" result="effect1_innerShadow_3726_5818" />
      </filter>
    </defs>
  </svg>
)
export default LinkedinLogo
