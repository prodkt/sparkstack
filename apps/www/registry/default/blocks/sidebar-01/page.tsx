<<<<<<< HEAD:apps/www/registry/default/block/sidebar-06/page.tsx
import { SidebarWrapper } from "./components/sidebar-06"

export const iframeHeight = "800px"
export const description = "A sidebar with submenus as dropdowns."

=======
import { AppSidebar } from "@/registry/default/blocks/sidebar-01/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/registry/default/ui/breadcrumb"
import { Separator } from "@/registry/default/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/registry/default/ui/sidebar"

>>>>>>> 2f869a2590e90f79890e6fa00cbfcbf8a241b034:apps/www/registry/default/blocks/sidebar-01/page.tsx
export default function Page() {
  return <SidebarWrapper />
}
