// registry/default/lib/button-variants-base.ts
export const buttonVariantsConfig = {
  base: "relative inline-flex place-content-center place-items-center content-center items-center justify-center gap-2 overflow-hidden whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_a]:inline-flex [&_a]:items-center [&_a]:justify-center [&_a]:gap-x-2 [&_a]:py-0 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground hover:bg-primary-hover",
      destructive:
        "bg-destructive text-destructive-foreground hover:bg-destructive-hover",
      toolbar:
        "bg-[var(--gray-a3)] after:shadow-[var(--gray-a2)] after:bg-[var(--gray-6)] after:border-[var(--gray-a3)] hover:after:border-[var(--gray-a4)] text-[var(--gray-11)] hover:text-[var(--red-12)] ring-1 ring-inset ring-[var(--gray-a3)]",
      outline:
        "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      secondary:
        "hover:bg-secondary-hover bg-secondary text-secondary-foreground",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      nexsalePrimary: "nexsale-btn primary",
      nexsaleSecondary: "nexsale-btn secondary",
      nexsaleGhost: "nexsale-btn ghost",
      nexsaleAccent: "nexsale-btn accent",
      nexsaleSuccess: "nexsale-btn success",
      nexsaleWarning: "nexsale-btn warning",
      nexsaleInfo: "nexsale-btn info",
      nexsaleDestructive: "nexsale-btn destructive",
      nexsaleOutlined: "nexsale-btn outlined",
      nexsaleOutlinedPrimary: "nexsale-btn outlined primary",
      nexsaleOutlinedSecondary: "nexsale-btn outlined secondary",
      nexsaleOutlinedGhost: "nexsale-btn outlined ghost",
      nexsaleOutlinedAccent: "nexsale-btn outlined accent",
      nexsaleOutlinedSuccess: "nexsale-btn outlined success",
      nexsaleOutlinedWarning: "nexsale-btn outlined warning",
      nexsaleOutlinedInfo: "nexsale-btn outlined info",
      nexsaleOutlinedDestructive: "nexsale-btn outlined destructive",
      outlineFlows:
        "after:shadow-[var(--violet-a4)] bg-transparent after:bg-[var(--violet-a4)] after:border-[var(--violet-a2)] hover:after:border-[var(--violet-a2)] stroke-[var(--violet-a9)] text-[var(--violet-a8)] hover:text-[var(--violet-a11)] fill-[var(--violet-a8)]  ring-1 ring-inset ring-transparent",
      outlineCodeblocks:
        "after:shadow-[var(--green-a4)] bg-transparent after:bg-[var(--green-a4)] after:border-[var(--green-a2)] hover:after:border-[var(--green-a2)] stroke-[var(--green-a9)] text-[var(--green-a8)] hover:text-[var(--green-a11)] fill-[var(--green-a8)]  ring-1 ring-inset ring-transparent",
      outlineRepositories:
        "after:shadow-[var(--orange-a4)] bg-transparent after:bg-[var(--orange-a4)] after:border-[var(--orange-a2)] hover:after:border-[var(--orange-a2)] stroke-[var(--orange-a9)] text-[var(--orange-a8)] hover:text-[var(--orange-a11)] fill-[var(--orange-a8)]  ring-1 ring-inset ring-transparent",
      outlineDocs:
        "after:shadow-[var(--indigo-a4)] bg-transparent after:bg-[var(--indigo-a4)] after:border-[var(--indigo-a2)] hover:after:border-[var(--indigo-a2)] stroke-[var(--indigo-a9)] text-[var(--indigo-a8)] hover:text-[var(--indigo-a11)] fill-[var(--indigo-a8)]  ring-1 ring-inset ring-transparent",
      outlineFigma:
        "after:shadow-[var(--gray-a4)] bg-transparent after:bg-[var(--gray-a4)] after:border-[var(--gray-a2)] hover:after:border-[var(--gray-a2)] stroke-[var(--gray-a9)] text-[var(--gray-a8)] hover:text-[var(--gray-a21)] fill-[var(--gray-a8)]  ring-1 ring-inset ring-transparent",
      outlineShowcase:
        "after:shadow-[var(--red-a4)] bg-transparent after:bg-[var(--red-a4)] after:border-[var(--red-a2)] hover:after:border-[var(--red-a2)] stroke-[var(--red-a9)] text-[var(--red-a8)] hover:text-[var(--red-a11)] fill-[var(--red-a8)]  ring-1 ring-inset ring-transparent",
      outlineProjects:
        "after:shadow-[var(--indigo-a4)] bg-transparent after:bg-[var(--indigo-a4)] after:border-[var(--indigo-a2)] hover:after:border-[var(--indigo-a2)] stroke-[var(--indigo-a9)] text-[var(--indigo-a8)] hover:text-[var(--indigo-a11)] fill-[var(--indigo-a8)]  ring-1 ring-inset ring-transparent",
      outlineTechnology:
        "after:shadow-[var(--mint-a4)] bg-transparent after:bg-[var(--mint-a4)] after:border-[var(--mint-a2)] hover:after:border-[var(--mint-a2)] stroke-[var(--mint-a9)] text-[var(--mint-a8)] hover:text-[var(--mint-a11)] fill-[var(--mint-a8)]  ring-1 ring-inset ring-transparent",
      metal:
        "after:user-select-none before:user-select-none relative z-[1] overflow-hidden rounded-xl border border-accent-2 bg-accent-a2 font-semibold text-background ring ring-inset before:pointer-events-none before:absolute before:inset-auto before:z-[-1] before:size-[calc(100%-2px)] before:rounded-lg before:bg-gradient-to-br before:from-accent-10 before:to-accent-9 before:opacity-90 before:shadow-[0_0_1px_0px_var(--accent-4),inset_0_0_2px_1px_var(--accent-a3)] before:transition-all before:duration-500 before:ease-in-out after:pointer-events-none after:absolute after:inset-auto after:z-[-2] after:size-full after:rounded-lg after:bg-[linear-gradient(108deg,var(--accent-11)_3%,var(--accent-a1)_33%,var(--accent-a1)_45%,var(--accent-11)_76%),linear-gradient(169deg,var(--accent-10)_3%,var(--accent-a1)_33%,var(--accent-a1)_45%,var(--accent-5)_76%)] hover:before:opacity-100",
      dashed:
        "border border-dashed border-border text-foreground hover:bg-gray-a6",
      link: "selected:text-link-selected focus:text-link-focus text-link underline-offset-4 hover:text-link-hover hover:underline active:text-link-active disabled:text-link-disabled",
    },
    size: {
      default: "h-8 rounded-md px-3 py-1.5 focus-visible:rounded-md",
      sm: "h-8 rounded-md px-3 focus-visible:rounded-md",
      lg: "h-10 rounded-md px-8 focus-visible:rounded-md",
      menu: "text-xs min-h-[32px] w-[32px] px-4 py-4 flex flex-col gap-1 items-center justify-center relative flex-nowrap w-auto  rounded-[12px] hover:rounded-[12px] group-hover:rounded-[12px] after:absolute after:opacity-100 after:blur-none after:inset-0 after:border after:rounded-[12px] after:hover:rounded-[12px]  after:group-hover:rounded-[12px] after:scale-0 hover:after:scale-100 after:z-[-1] after:w-full after:h-full after:object-center after:transition-all after:ease-in-out after:duration-300",
      icon: "max-h-8 size-8 rounded-md p-0 focus-visible:rounded-md [&_svg]:size-4",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
} as const

export type ButtonVariantProps = {
  variant?: keyof typeof buttonVariantsConfig.variants.variant
  size?: keyof typeof buttonVariantsConfig.variants.size
  className?: string
}
