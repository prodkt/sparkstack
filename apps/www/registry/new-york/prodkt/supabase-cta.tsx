import type { SVGProps } from "react"

import {
  AstroLogomark,
  BunLogomark,
  ReactLogomark,
  StorybookLogomark,
  SupabaseLogomark,
  TurborepoLogomark,
  VercelLogomark,
} from "@/registry/logos"

export default function SupabaseBlock() {
  return (
    <div className="w-full min-w-[400px] p-3 md:w-1/2 md:max-w-[400px]">
      <div className="h-full overflow-hidden rounded-3xl bg-gradient-to-b from-success-1 via-[var(--success-1)] to-success-7 p-8 shadow-[inset_0_0_20px_var(--success-a3)] ring-1 ring-inset ring-success-a3">
        <div className="bottom-0 top-auto z-[1] mb-10 mt-auto flex size-auto flex-col gap-0 p-2">
          <h3 className="gradientMask-to-t-10 max-w-xs text-balance bg-gradient-to-t from-gray-12 via-gray-12 to-gray-1 bg-clip-text pb-2 text-3xl font-semibold leading-10 tracking-tighter text-transparent">
            Astro SSR Turborepo
          </h3>
          <p className="bg-gradient-to-b from-[var(--success-a4)] to-[var(--success-a11)] bg-clip-text pl-1 font-mono text-[.625rem] uppercase tracking-[0.275rem] text-transparent">
            Powered by Supabase
          </p>
        </div>
        <div className="relative">
          <GithubCat className="pointer-events-none absolute inset-0 z-[1] m-auto w-80 -translate-y-12  select-none blur" />
          <GithubCat className="pointer-events-none absolute inset-0 z-[1] m-auto w-80 -translate-y-12  select-none blur" />
          <GithubCat className="pointer-events-none inset-0 z-[1] m-auto w-80  -translate-y-12 select-none" />
          <GlowOrb className="gradientMask-to-t pointer-events-none absolute -left-1/4 -top-1/4 z-0 m-auto scale-[2] select-none opacity-25 mix-blend-color-dodge brightness-100 contrast-50 dark:opacity-100 dark:brightness-100" />
          <TurborepoLogomark className="pointer-events-none absolute right-0 top-1/3 my-auto h-12 w-auto select-none blur-sm" />
          <SupabaseLogomark className="pointer-events-none absolute left-4 top-1/3 z-[2] my-auto h-20 w-auto -rotate-12 select-none mix-blend-hard-light blur" />
          <SupabaseLogomark className="pointer-events-none absolute left-4 top-1/3 z-[2] my-auto h-20  w-auto -rotate-12 select-none" />
          <VercelLogomark className="pointer-events-none absolute bottom-12 left-8 m-0 h-8 w-auto scale-x-150 scale-y-50 select-none blur-[2px]" />
          <StorybookLogomark className="pointer-events-none absolute right-[calc(50%-30%)] top-1 m-0 h-4 w-auto rotate-6 scale-x-125 scale-y-75 select-none blur-[1px]" />
          <BunLogomark className="pointer-events-none absolute bottom-20 right-12 z-[-1] mx-auto h-8 w-auto scale-y-50 select-none blur-[2px]" />
          <AstroLogomark className="pointer-events-none absolute right-28 top-[65%] z-[2] mx-auto h-20 w-auto rotate-45 skew-x-[-45deg] skew-y-[-45deg] scale-y-50 select-none opacity-50 mix-blend-hard-light blur-md" />
          <AstroLogomark className="pointer-events-none absolute right-28 top-[65%] z-[2] mx-auto h-20 w-auto rotate-45 skew-x-[-45deg] skew-y-[-45deg] scale-y-50 select-none opacity-50 mix-blend-hard-light blur-md" />
          <AstroLogomark className="pointer-events-none absolute right-28 top-[70%] z-[2] mx-auto h-20 w-auto rotate-45 scale-y-150 select-none opacity-50 mix-blend-hard-light blur-md" />
          <AstroLogomark
            className="pointer-events-none absolute right-28 top-[65%] z-[2] mx-auto h-20 w-auto rotate-45 skew-x-[-45deg]
 skew-y-[-45deg] scale-y-50 select-none opacity-50 blur-md"
          />
          <ReactLogomark className="pointer-events-none absolute left-0 top-0 m-0 h-12 w-auto select-none blur-sm" />
        </div>
        <div className="z-[1] mb-0 mt-8 flex grow flex-col items-stretch justify-stretch gap-4 p-2">
          <h3 className="h-full max-w-[75%] text-balance bg-gradient-to-t from-gray-12 via-gray-12 to-ghost-aa7 bg-clip-text pb-1 text-xl font-semibold leading-6 tracking-tighter text-transparent">
            Low barrier, high tech stack great for new and experienced
            developers.
          </h3>
        </div>
        <div className="bottom-0 top-auto z-[3] mb-0 mt-auto flex size-auto w-full flex-row gap-4 self-stretch p-2">
          <a
            href="https://github.com/prodkt/app"
            target="_blank"
            className="text-nowrap rounded-md bg-success-4 p-1.5 px-2.5 text-xs font-semibold tracking-tight text-success-11 no-underline shadow-[inset_0_0_6px_var(--success-4)] ring-1 ring-success-a2 transition-colors duration-100 ease-in hover:bg-success-5 hover:text-gray-12 hover:ring-success-a2"
            rel="noreferrer"
          >
            View Project on GitHub
          </a>
        </div>
      </div>
    </div>
  )
}

export const GithubCat = (props: SVGProps<SVGSVGElement>) => (
  <svg
    height="253"
    width="253"
    fill="none"
    {...props}
    viewBox="0 0 253 253"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Github</title>
    <defs>
      <radialGradient
        id="Gradient"
        cx="0.5"
        cy="0.5"
        r="0.5"
        fx="0.25"
        fy="0.25"
      >
        <stop offset="50%" stopColor="var(--success-9)" />
        <stop offset="100%" stopColor="var(--ghost-a1)" />
      </radialGradient>
    </defs>
    <path
      strokeWidth={1.5}
      d="M57.7383 190.628C62.6851 197.868 77.6982 213.323 98.1769 217.218M99.7145 251.917C86.8159 249.792 1.08331 221.888 1.08331 127.661C1.08331 39.5021 76.3571 1.08337 126.51 1.08337C176.662 1.08337 251.917 39.5021 251.917 127.661C251.917 221.888 166.184 249.792 153.285 251.917C153.285 251.917 150.664 209.057 152.194 201.711C153.723 194.367 148.513 182.546 148.513 182.546C160.691 177.99 179.229 171.458 185.447 153.934C190.272 140.336 193.307 120.59 179.812 102.03C179.812 102.03 183.336 72.0453 176.662 70.8838C169.988 69.7223 150.327 82.7537 150.327 82.7537C144.6 81.1303 131.821 78.0235 126.523 78.5832C121.222 78.0235 108.4 81.1303 102.673 82.7537C102.673 82.7537 83.0116 69.7223 76.3378 70.8838C69.664 72.0453 73.1875 102.03 73.1875 102.03C59.6925 120.59 62.7276 140.336 67.5529 153.934C73.7717 171.458 92.3094 177.99 104.487 182.546C104.487 182.546 99.2775 194.367 100.806 201.711C102.336 209.057 99.7145 251.917 99.7145 251.917Z"
      stroke="url(#Gradient)"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const GlowOrb = (props: SVGProps<SVGSVGElement>) => (
  <svg
    height="534"
    width="615"
    viewBox="0 0 615 534"
    {...props}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#prodktAbout-filter0_f_4439_9232)">
      <path
        d="M509.724 234.23C509.724 341.399 419.347 428.276 307.862 428.276C196.377 428.276 106 341.399 106 234.23C106 170.438 113.12 191.813 194.23 161.544C228.804 148.64 284.057 151.218 327.037 102.605C348.608 78.2061 407.621 61.3911 442.436 79.8154C481.096 100.274 509.724 177.842 509.724 234.23Z"
        fill="var(--gray-a12)"
      />
    </g>
    <g opacity="0.7" filter="url(#prodktAbout-filter1_f_4439_9232)">
      <path
        d="M509.723 234.23C509.723 341.399 419.347 428.277 307.862 428.277C196.377 428.277 106 341.399 106 234.23C106 170.439 137.188 171.165 218.298 140.894C252.874 127.99 267.661 97.338 312.784 97.338C365.612 97.338 407.621 61.3916 442.435 79.8159C481.095 100.274 509.723 177.842 509.723 234.23Z"
        fill="var(--gray-a12)"
      />
    </g>
    <g filter="url(#prodktAbout-filter2_f_4439_9232)">
      <path
        d="M509.723 234.23C509.723 341.399 419.347 428.276 307.862 428.276C196.377 428.276 106 341.399 106 234.23C106 170.438 105.383 169.443 186.493 139.173C221.068 126.27 281.053 105.617 326.178 105.617C379.004 105.617 408.697 106.552 443.511 124.976C482.171 145.435 509.723 177.842 509.723 234.23Z"
        fill="url(#prodktAbout-paint0_linear_4439_9232)"
      />
    </g>
    <g filter="url(#prodktAbout-filter3_f_4439_9232)">
      <path
        d="M437.786 301.582C437.786 378.545 372.882 440.937 292.817 440.937C212.754 440.937 147.85 378.545 147.85 301.582C147.85 224.617 212.754 162.225 292.817 162.225C336.805 162.225 395.062 166.167 421.648 195.9C443.455 220.287 437.786 266.9 437.786 301.582Z"
        fill="var(--gray-1"
      />
    </g>
    <defs>
      <filter
        height="388.112"
        id="prodktAbout-filter0_f_4439_9232"
        width="435.558"
        x="90.0829"
        y="56.0824"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood result="BackgroundImageFix" floodOpacity="0" />
        <feBlend result="shape" in="SourceGraphic" in2="BackgroundImageFix" />
        <feGaussianBlur
          result="effect1_foregroundBlur_4439_9232"
          stdDeviation="7.95881"
        />
      </filter>
      <filter
        height="481.056"
        id="prodktAbout-filter1_f_4439_9232"
        width="531.064"
        x="42.3295"
        y="10.891"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood result="BackgroundImageFix" floodOpacity="0" />
        <feBlend result="shape" in="SourceGraphic" in2="BackgroundImageFix" />
        <feGaussianBlur
          result="effect1_foregroundBlur_4439_9232"
          stdDeviation="31.8352"
        />
      </filter>
      <filter
        height="532.772"
        id="prodktAbout-filter2_f_4439_9232"
        width="613.836"
        x="0.943436"
        y="0.560623"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood result="BackgroundImageFix" floodOpacity="0" />
        <feBlend result="shape" in="SourceGraphic" in2="BackgroundImageFix" />
        <feGaussianBlur
          result="effect1_foregroundBlur_4439_9232"
          stdDeviation="52.5283"
        />
      </filter>
      <filter
        height="437.889"
        id="prodktAbout-filter3_f_4439_9232"
        width="449.777"
        x="68.2611"
        y="82.6361"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood result="BackgroundImageFix" floodOpacity="0" />
        <feBlend result="shape" in="SourceGraphic" in2="BackgroundImageFix" />
        <feGaussianBlur
          result="effect1_foregroundBlur_4439_9232"
          stdDeviation="39.7943"
        />
      </filter>
      <linearGradient
        id="prodktAbout-paint0_linear_4439_9232"
        gradientUnits="userSpaceOnUse"
        x1="307.809"
        x2="311.699"
        y1="74.5613"
        y2="212.326"
      >
        <stop stopColor="var(--gray-a1)" />
        <stop offset="0.24" stopColor="var(--gray-a1)" />
        <stop offset="0.734" stopColor="var(--gray-a4)" />
        <stop offset="1" stopColor="var(--gray-a2)" />
      </linearGradient>
    </defs>
  </svg>
)
