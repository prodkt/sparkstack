import { LoginNexsale } from "@/registry/new-york/blocks/login-nexsale/components/login-form"

export default function LoginPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted w-full p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <LoginNexsale />
      </div>
    </div>
  )
}
