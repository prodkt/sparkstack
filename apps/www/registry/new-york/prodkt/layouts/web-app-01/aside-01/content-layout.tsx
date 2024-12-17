import { Navbar } from "@/registry/new-york/prodkt/layouts/web-app-01/aside-01/navbar"

interface ContentLayoutProps {
  title: string
  children: React.ReactNode
}

export function ContentLayout({
  title,
  children,
}: Readonly<ContentLayoutProps>) {
  return (
    <div>
      <Navbar title={title} />
      <div className="container px-4 pt-8 pb-8 sm:px-8">{children}</div>
    </div>
  )
}
