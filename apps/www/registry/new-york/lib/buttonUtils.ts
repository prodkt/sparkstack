import { cva, type VariantProps } from "class-variance-authority"

import {
  buttonVariantsConfig,
  nexsaleButtonVariantsConfig,
  type ButtonVariantProps,
  type NexsaleButtonVariantProps,
} from "./button-variants"

export const buttonVariants = cva(
  buttonVariantsConfig.base,
  buttonVariantsConfig
)
export const nexsaleButtonVariants = cva(
  nexsaleButtonVariantsConfig.base,
  nexsaleButtonVariantsConfig
)

type BaseButtonProps = {
  asChild?: boolean
  disableRipple?: boolean
  className?: string
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className">

type DefaultButtonProps = BaseButtonProps &
  ButtonVariantProps & {
    nexsale?: false
  }

type NexsaleButtonProps = BaseButtonProps &
  NexsaleButtonVariantProps & {
    nexsale: true
  }

export type ButtonProps = DefaultButtonProps | NexsaleButtonProps

export type {
  ButtonVariantProps,
  NexsaleButtonVariantProps,
} from "./button-variants"

export { buttonVariantsConfig, nexsaleButtonVariantsConfig }
