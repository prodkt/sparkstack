import { LoginForm } from "@/registry/default/block/login-01/components/login-form"

// import { LoginFormWrapper } from "@/registry/default/block/login-01/components/login-form-wrapper"

export const description = "A simple login form."
export const iframeHeight = "870px"
export const containerClassName = "w-full h-full"

export default function LoginPage() {
  return <LoginForm />
}
