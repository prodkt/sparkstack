import { SVGProps } from "react"

const DiscordLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={34}
    height={40}
    fill="none"
    {...props}
  >
    <g filter="url(#a)">
      <path
        fill="url(#b)"
        fillOpacity={0.15}
        d="M16.81 8.007c5.483-.197 9.193 3.596 9.382 9.343v.002c.22 6.368-3.873 14.142-12.23 14.625-2.538.145-5.065-.398-6.729-1.349a.49.49 0 0 1-.185-.631l.734-1.546a.444.444 0 0 1 .628-.204 9.013 9.013 0 0 0 1.63.72.452.452 0 0 0 .58-.33c1.162-4.573 2.452-9.448 3.742-13.942a.461.461 0 0 1 .411-.339l1.71-.099c.316-.018.553.299.46.617a337.454 337.454 0 0 0-3.785 14.071c-.075.303.145.596.443.596.213 0 .425-.005.63-.016 5.843-.338 9.48-6.572 9.279-12.021-.161-4.68-2.922-7.104-6.68-6.946-2.025.09-4.13.935-5.673 2.226a.444.444 0 0 1-.672-.111l-.86-1.41a.494.494 0 0 1 .11-.641c2.027-1.608 4.72-2.507 7.075-2.615Z"
      />
      <path
        fill="currentcolor"
        fillOpacity={0.2}
        d="M16.81 8.007c5.483-.197 9.193 3.596 9.382 9.343v.002c.22 6.368-3.873 14.142-12.23 14.625-2.538.145-5.065-.398-6.729-1.349a.49.49 0 0 1-.185-.631l.734-1.546a.444.444 0 0 1 .628-.204 9.013 9.013 0 0 0 1.63.72.452.452 0 0 0 .58-.33c1.162-4.573 2.452-9.448 3.742-13.942a.461.461 0 0 1 .411-.339l1.71-.099c.316-.018.553.299.46.617a337.454 337.454 0 0 0-3.785 14.071c-.075.303.145.596.443.596.213 0 .425-.005.63-.016 5.843-.338 9.48-6.572 9.279-12.021-.161-4.68-2.922-7.104-6.68-6.946-2.025.09-4.13.935-5.673 2.226a.444.444 0 0 1-.672-.111l-.86-1.41a.494.494 0 0 1 .11-.641c2.027-1.608 4.72-2.507 7.075-2.615Z"
      />
    </g>
    <path
      stroke="url(#c)"
      strokeOpacity={0.28}
      strokeWidth={0.5}
      d="m9.838 11.132.86 1.41c.067.11.202.132.299.05 1.583-1.324 3.74-2.192 5.823-2.284 1.937-.081 3.638.503 4.875 1.731 1.236 1.226 1.982 3.069 2.065 5.456.102 2.78-.773 5.754-2.419 8.08-1.648 2.33-4.082 4.025-7.097 4.2-.21.011-.427.016-.643.016-.473 0-.796-.457-.686-.906a337.554 337.554 0 0 1 3.788-14.081l.24.07m-7.105-3.742.202 17.836a.452.452 0 0 0 .58-.33l.243.06c1.16-4.571 2.45-9.443 3.739-13.934a.211.211 0 0 1 .186-.158l1.709-.099c.126-.007.255.127.206.297l.24.07m-7.105-3.742a.244.244 0 0 1 .053-.314l-.156-.196.156.196c1.981-1.572 4.623-2.455 6.93-2.56l-6.983 2.874Zm7.104 3.742a337.454 337.454 0 0 0-3.784 14.071l3.324-14.688c.317-.018.554.299.46.617Z"
    />
    <defs>
      <linearGradient
        id="b"
        x1={16.6}
        x2={16.6}
        y1={8}
        y2={32}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.535} stopColor="currentcolor" stopOpacity={0} />
        <stop offset={1} stopColor="currentcolor" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={16.6}
        x2={16.6}
        y1={8}
        y2={32}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="currentcolor" />
        <stop offset={0.475} stopColor="currentcolor" stopOpacity={0} />
      </linearGradient>
      <filter
        id="a"
        width={19.2}
        height={28}
        x={7}
        y={8}
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
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 0.154167 0 0 0 0 0.154167 0 0 0 0 0.154167 0 0 0 1 0" />
        <feBlend in2="shape" result="effect1_innerShadow_3726_5858" />
      </filter>
    </defs>
  </svg>
)
export default DiscordLogo
