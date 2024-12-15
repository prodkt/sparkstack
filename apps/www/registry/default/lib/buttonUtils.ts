import { cva, type VariantProps } from "class-variance-authority"

import { buttonVariantsConfig } from "./button-variants"

export const buttonVariants = cva(
  buttonVariantsConfig.base,
  buttonVariantsConfig
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  disableRipple?: boolean
}

export type { ButtonVariantProps } from "./button-variants"
