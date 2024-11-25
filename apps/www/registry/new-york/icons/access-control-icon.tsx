import * as React from "react"
import type { SVGProps } from "react"
import clsx from "clsx"

export const AccessControlIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={64}
    height={64}
    viewBox="0 0 64 64"
    fill="none"
    {...props}
    className={clsx(
      props.className,
      "dark:text-refine-blue-alt text-refine-blue"
    )}
  >
    <rect
      width={64}
      height={64}
      fill="url(#access-control-a)"
      fillOpacity={0.4}
      rx={16}
    />
    <rect
      width={63}
      height={63}
      x={0.5}
      y={0.5}
      stroke="url(#access-control-b)"
      strokeOpacity={0.5}
      rx={15.5}
    />
    <path
      fill="currentColor"
      d="M20.75 30.997h1a1 1 0 0 0-.5-.866l-.5.866Zm.228 12.158.924-.382-.924.382Zm1.53 1.852-.708.708.707-.708ZM24.5 47l-.707.707a1 1 0 0 0 1.414 0L24.5 47Zm3.162-3.162-.707-.708.707.708Zm.28-.298.794.608-.794-.608Zm.295-.713-.991-.132.99.132Zm.004-.74-.994.109.994-.109Zm-.2-.602-.86.51.86-.51Zm-.192-.27-.8.6.8-.6ZM26 38.75l-.8-.6a1 1 0 0 0 0 1.2l.8-.6Zm1.05-1.4.8.6-.8-.6Zm1.046-1.651.949.316-.949-.316Zm.154-4.702-.5-.866a1 1 0 0 0-.5.866h1ZM24.5 23.5a1 1 0 1 0 0 2v-2Zm.014 2a1 1 0 1 0 0-2v2Zm20.29-6.304.706-.707-.707.707Zm0 25.607.706.707-.707-.707ZM32 46a1 1 0 1 0 0 2v-2Zm3.008-29.992a1 1 0 1 0-.017 2l.017-2ZM24.5 16a8.5 8.5 0 0 0-8.5 8.5h2a6.5 6.5 0 0 1 6.5-6.5v-2ZM16 24.5a8.497 8.497 0 0 0 4.25 7.362l1-1.731A6.497 6.497 0 0 1 18 24.5h-2Zm3.75 6.497v9.768h2v-9.768h-2Zm0 9.768c0 1.144-.018 1.995.305 2.773l1.847-.765c-.134-.325-.152-.7-.152-2.008h-2Zm.305 2.773c.322.778.936 1.367 1.745 2.177l1.415-1.415c-.925-.925-1.178-1.202-1.313-1.527l-1.848.765Zm1.745 2.177 1.993 1.992 1.414-1.414-1.992-1.993-1.415 1.415Zm3.407 1.992 3.162-3.162-1.414-1.414-3.162 3.162 1.414 1.414Zm3.162-3.162c.128-.128.257-.254.367-.398l-1.588-1.215a2.936 2.936 0 0 1-.193.198l1.414 1.415Zm.367-.398a2.5 2.5 0 0 0 .492-1.188l-1.982-.264a.5.5 0 0 1-.099.237l1.589 1.215Zm.492-1.188c.024-.18.022-.36.022-.54h-2c0 .233-.002.258-.004.276l1.982.264Zm.022-.54c0-.146.001-.292-.015-.44l-1.988.217c.002.014.003.035.003.223h2Zm-.015-.44a2.5 2.5 0 0 0-.334-1.003l-1.72 1.019a.5.5 0 0 1 .066.2l1.988-.216Zm-.334-1.003c-.076-.128-.165-.245-.252-.361l-1.6 1.2c.113.15.124.168.131.18l1.72-1.02Zm-.252-.361L26.8 38.15l-1.6 1.2 1.849 2.465 1.6-1.2ZM26.8 39.35l1.05-1.4-1.6-1.2-1.05 1.4 1.6 1.2Zm1.05-1.4c.556-.741.978-1.284 1.195-1.935l-1.898-.633c-.09.273-.263.523-.897 1.368l1.6 1.2Zm1.195-1.935c.217-.651.205-1.338.205-2.265h-2c0 1.056-.012 1.36-.103 1.633l1.898.632Zm.205-2.265v-2.753h-2v2.753h2Zm-.5-1.888A8.497 8.497 0 0 0 33 24.5h-2a6.497 6.497 0 0 1-3.25 5.631l1 1.731ZM33 24.5a8.5 8.5 0 0 0-8.5-8.5v2a6.5 6.5 0 0 1 6.5 6.5h2Zm-8.5 1h.014v-2H24.5v2Zm19.596-5.596c.882.881 1.379 2.068 1.638 4 .264 1.96.266 4.532.266 8.096h2c0-3.508.002-6.239-.283-8.363-.29-2.153-.891-3.832-2.206-5.148l-1.415 1.415ZM46 32c0 3.563-.002 6.136-.266 8.096-.26 1.932-.756 3.118-1.638 4l1.415 1.414c1.315-1.315 1.916-2.994 2.206-5.148.285-2.124.283-4.855.283-8.362h-2Zm-1.904 12.096c-.881.882-2.068 1.378-4 1.638-1.96.264-4.532.266-8.096.266v2c3.507 0 6.238.002 8.363-.284 2.153-.29 3.832-.89 5.148-2.206l-1.415-1.414Zm-9.104-26.088c2.563.021 4.463.105 5.94.394 1.448.283 2.415.752 3.164 1.502l1.415-1.415c-1.112-1.111-2.487-1.716-4.195-2.05-1.68-.33-3.751-.41-6.308-.431l-.017 2Z"
    />
    <defs>
      <radialGradient
        id="access-control-a"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(45) scale(90.5097)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="currentColor" />
        <stop offset={1} stopColor="currentColor" stopOpacity={0.25} />
      </radialGradient>
      <radialGradient
        id="access-control-b"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(45) scale(90.5097)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="currentColor" />
        <stop offset={0.5} stopColor="currentColor" stopOpacity={0} />
        <stop offset={1} stopColor="currentColor" stopOpacity={0.25} />
      </radialGradient>
    </defs>
  </svg>
)
