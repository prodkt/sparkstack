import { cn } from "@/lib/utils"

// registry/default/lib/button-variants-base.ts
export const buttonVariantsConfig = {
  base: "relative inline-flex place-content-center place-items-center content-center items-center justify-center gap-2 overflow-hidden whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_a]:inline-flex [&_a]:items-center [&_a]:justify-center [&_a]:gap-x-2 [&_a]:py-0 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground hover:bg-primary-hover",
      primary: "bg-primary text-primary-foreground hover:bg-primary-hover",
      destructive:
        "bg-destructive text-destructive-foreground hover:bg-destructive-hover",
      toolbar:
        "bg-[var(--gray-a3)] after:shadow-[var(--gray-a2)] after:bg-[var(--gray-6)] after:border-[var(--gray-a3)] hover:after:border-[var(--gray-a4)] text-[var(--gray-11)] hover:text-[var(--red-12)] ring-1 ring-inset ring-[var(--gray-a3)]",
      outline:
        "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      secondary:
        "hover:bg-secondary-hover bg-secondary text-secondary-foreground",
      ghost: "hover:bg-accent hover:text-accent-foreground",
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

type NexsaleButtonConfig = {
  base: string
  variants: {
    variant: {
      default: string
      primary: string
      secondary: string
      ghost: string
      accent: string
      success: string
      warning: string
      info: string
      destructive: string
      link: string
    }
    bordered: {
      true: string
    }
    size: {
      default: string
      sm: string
      icon: string
    }
  }
  compoundVariants: Array<{
    // Changed from readonly array to mutable
    variant: keyof NexsaleButtonConfig["variants"]["variant"]
    bordered: boolean
    className: string
  }>
  defaultVariants: {
    variant: keyof NexsaleButtonConfig["variants"]["variant"]
    size: keyof NexsaleButtonConfig["variants"]["size"]
  }
}

// registry/default/lib/button-variants-base.ts
export const nexsaleButtonVariantsConfig: NexsaleButtonConfig = {
  base: cn(
    "select-none cursor-pointer z-[1] focus-within:ring-gray-a10 transition-all duration-300 ease-in-out motion-duration-300 overflow-hidden",
    "relative inline-flex items-center justify-center",
    "border-transparent shadow-md ring-1 ring-gray-a5",
    "hover:shadow-lg hover:before:animate-nexsale-btn",
    "active:shadow-lg active:duration-200",
    "disabled:bg-gray-a5 disabled:opacity-40",
    "after:absolute after:inset-0 after:shadow-[inset_0_0_2px_1px_var(--gray-a4)] hover:after:shadow-[inset_0_0_2px_1px_var(--gray-a5)] after:overflow-hidden",
    "before:opacity-0 hover:before:opacity-100 hover:before:duration-300 before:motion-duration-500",
    "before:absolute before:rounded-none before:inset-0 before:m-auto before:border-y before:blur-[2px] before:w-2 before:h-[calc(100%+3px)] before:origin-center"
  ),
  variants: {
    variant: {
      default:
        "bg-gray-a5 hover:bg-gray-a5 hover:ring-gray-a3 active:bg-gray-a5 active:ring-gray-a3 active:bg-gray-a4 before:border-gray-a12",
      primary:
        "bg-primary-a5 hover:bg-primary-a5 hover:ring-primary-a3 active:bg-primary-a5 active:ring-primary-a3 active:bg-primary-a4 before:border-primary-a12",
      secondary:
        "bg-ghost-aa5 hover:bg-ghost-aa5 hover:ring-ghost-aa3 active:bg-ghost-aa5 active:ring-ghost-aa3 active:bg-ghost-aa4 before:border-ghost-aa12",
      ghost:
        "bg-secondary-a5 hover:bg-secondary-a5 hover:ring-secondary-a3 active:bg-secondary-a5 active:ring-secondary-a3 active:bg-secondary-a4 before:border-secondary-a12",
      accent:
        "bg-accent-a5 hover:bg-accent-a5 hover:ring-accent-a3 active:bg-accent-a5 active:ring-accent-a3 active:bg-accent-a4 before:border-accent-a12",
      destructive:
        "bg-destructive-a5 hover:bg-destructive-a5 hover:ring-destructive-a3 active:bg-destructive-a5 active:ring-destructive-a3 active:bg-destructive-a4 before:border-destructive-a12",
      success:
        "bg-success-a5 hover:bg-success-a5 hover:ring-success-a3 active:bg-success-a5 active:ring-success-a3 active:bg-success-a4 before:border-success-a12",
      warning:
        "bg-warning-a5 hover:bg-warning-a5 hover:ring-warning-a3 active:bg-warning-a5 active:ring-warning-a3 active:bg-warning-a4 before:border-warning-a12",
      info: "bg-info-a5 hover:bg-info-a5 hover:ring-info-a3 active:bg-info-a5 active:ring-info-a3 active:bg-info-a4 before:border-info-a12",
      link: "selected:text-link-selected focus:text-link-focus text-link underline-offset-4 hover:text-link-hover hover:underline active:text-link-active disabled:text-link-disabled",
    },
    bordered: {
      true: "",
    },
    size: {
      default:
        "border-none rounded-lg after:rounded-lg px-3 py-[calc(theme(spacing.2)-2px)] [&_svg]:stroke-[1.5px] [&_svg]:drop-shadow-md gap-x-2 [&_svg]:size-5",
      sm: "rounded-lg after:rounded-lg px-2.5 py-[calc(theme(spacing.2)-4px)] gap-x-2 [&_svg]:stroke-1 [&_svg]:drop-shadow-md [&_svg]:size-4 border-none",
      icon: "rounded-xl after:rounded-xl px-2 [&_svg]:stroke-1 [&_svg]:drop-shadow-md [&_svg]:size-4 border-none",
    },
  },
  compoundVariants: [
    {
      variant: "default",
      bordered: true,
      className:
        "bg-gray-a1 hover:bg-gray-a2 hover:ring-ghost-aa2 active:bg-transparent active:ring-ghost-aa1 active:bg-transparent before:border-ghost-aa1",
    },
    {
      variant: "primary",
      bordered: true,
      className:
        "bg-primary-a1 hover:bg-primary-a2 ring-primary-a5 hover:ring-primary-a6 active:bg-transparent active:ring-primary-a6 active:bg-transparent before:border-primary-a4",
    },
    {
      variant: "secondary",
      bordered: true,
      className:
        "bg-secondary-a1 hover:bg-secondary-a2 ring-secondary-a5 hover:ring-secondary-a6 active:bg-transparent active:ring-secondary-a6 active:bg-transparent before:border-secondary-a4",
    },
    {
      variant: "ghost",
      bordered: true,
      className:
        "bg-ghost-aa1 hover:bg-ghost-aa2 ring-ghost-aa5 hover:ring-ghost-aa6 active:bg-transparent active:ring-ghost-aa6 active:bg-transparent before:border-ghost-aa4",
    },
    {
      variant: "accent",
      bordered: true,
      className:
        "bg-accent-a1 hover:bg-accent-a2 ring-accent-a5 hover:ring-accent-a6 active:bg-transparent active:ring-accent-a6 active:bg-transparent before:border-accent-a4",
    },
    {
      variant: "success",
      bordered: true,
      className:
        "bg-success-a1 hover:bg-success-a2 ring-success-a5 hover:ring-success-a6 active:bg-transparent active:ring-success-a6 active:bg-transparent before:border-success-a4",
    },
    {
      variant: "warning",
      bordered: true,
      className:
        "bg-warning-a1 hover:bg-warning-a2 ring-warning-a5 hover:ring-warning-a6 active:bg-transparent active:ring-warning-a6 active:bg-transparent before:border-warning-a4",
    },
    {
      variant: "info",
      bordered: true,
      className:
        "bg-info-a1 hover:bg-info-a2 ring-info-a5 hover:ring-info-a6 active:bg-transparent active:ring-info-a6 active:bg-transparent before:border-info-a4",
    },
    {
      variant: "destructive",
      bordered: true,
      className:
        "bg-destructive-a1 hover:bg-destructive-a2 ring-destructive-a5 hover:ring-destructive-a6 active:bg-transparent active:ring-destructive-a6 active:bg-transparent before:border-destructive-a4",
    },
  ] as const,
  defaultVariants: {
    variant: "default",
    size: "default",
  },
} as const

export type ButtonVariantProps = {
  variant?: keyof typeof buttonVariantsConfig.variants.variant
  size?: keyof typeof buttonVariantsConfig.variants.size
  bordered?: boolean
  className?: string
}

export type NexsaleButtonVariantProps = {
  variant?: keyof typeof nexsaleButtonVariantsConfig.variants.variant
  size?: keyof typeof nexsaleButtonVariantsConfig.variants.size
  bordered?: boolean
  className?: string
}
