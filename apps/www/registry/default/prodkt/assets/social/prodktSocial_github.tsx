import { SVGProps } from "react"

const GithubLogo = (props: SVGProps<SVGSVGElement>) => (
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
        d="M20.053 9a11.041 11.041 0 0 0-3.491 21.52c.556.102.752-.244.752-.535v-1.878c-3.084.671-3.734-1.484-3.734-1.484a2.955 2.955 0 0 0-1.227-1.62c-.996-.678.081-.678.081-.678a2.326 2.326 0 0 1 1.688 1.139 2.359 2.359 0 0 0 3.213.922 2.346 2.346 0 0 1 .677-1.478c-2.453-.278-5.029-1.227-5.029-5.422a4.27 4.27 0 0 1 1.132-2.962 4.026 4.026 0 0 1 .109-2.922s.928-.298 3.036 1.132c1.81-.497 3.72-.497 5.531 0 2.108-1.43 3.03-1.132 3.03-1.132.406.916.455 1.951.135 2.901a4.27 4.27 0 0 1 1.132 2.962c0 4.243-2.582 5.172-5.043 5.423a2.61 2.61 0 0 1 .753 2.033v3.03c0 .36.196.637.759.529A11.041 11.041 0 0 0 20.053 9Z"
      />
    </g>
    <path
      stroke="currentcolor"
      strokeLinecap="round"
      strokeLinejoin="bevel"
      strokeOpacity={0.16}
      strokeWidth={0.25}
      d="M20.053 9a11.041 11.041 0 0 0-3.491 21.52c.556.102.752-.244.752-.535v-1.878c-3.084.671-3.734-1.484-3.734-1.484a2.955 2.955 0 0 0-1.227-1.62c-.996-.678.081-.678.081-.678a2.326 2.326 0 0 1 1.688 1.139 2.359 2.359 0 0 0 3.213.922 2.346 2.346 0 0 1 .677-1.478c-2.453-.278-5.029-1.227-5.029-5.422a4.27 4.27 0 0 1 1.132-2.962 4.026 4.026 0 0 1 .109-2.922s.928-.298 3.036 1.132c1.81-.497 3.72-.497 5.531 0 2.108-1.43 3.03-1.132 3.03-1.132.406.916.455 1.951.135 2.901a4.27 4.27 0 0 1 1.132 2.962c0 4.243-2.582 5.172-5.043 5.423a2.61 2.61 0 0 1 .753 2.033v3.03c0 .36.196.637.759.529A11.041 11.041 0 0 0 20.053 9Z"
    />
    <defs>
      <filter
        id="a"
        width={27.25}
        height={27.489}
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
        <feBlend in2="shape" result="effect1_innerShadow_3726_5806" />
      </filter>
    </defs>
  </svg>
)
export default GithubLogo
