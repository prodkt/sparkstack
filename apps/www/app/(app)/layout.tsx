import "@/styles/sparkstack_globals.css"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

interface AppLayoutProps {
  children: React.ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div data-wrapper="" className="border-border/40 dark:border-border">
      <div className="border-border/40 mx-auto w-full dark:border-border min-[1800px]:max-w-screen-2xl min-[1800px]:border-x">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </div>
    </div>
  )
}
