// registry/default/lib/button-variants-base.ts
export const buttonVariantsConfig = {
  base: "relative inline-flex place-content-center place-items-center content-center items-center justify-center gap-2 overflow-hidden whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_a]:inline-flex [&_a]:items-center [&_a]:justify-center [&_a]:gap-x-2 [&_a]:py-0 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground hover:bg-primary-hover",
      destructive:
        "bg-destructive text-destructive-foreground hover:bg-destructive-hover",
      outline:
        "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      secondary:
        "hover:bg-secondary-hover bg-secondary text-secondary-foreground",
      ghost: "hover:bg-accent hover:text-accent-foreground",
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
