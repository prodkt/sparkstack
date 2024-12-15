"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Check,
  ChevronRight,
  Clipboard,
  File,
  Folder,
  Fullscreen,
  Monitor,
  Smartphone,
  Tablet,
  Terminal,
} from "lucide-react"
import { ImperativePanelHandle } from "react-resizable-panels"
import { z } from "zod"

import { trackEvent } from "@/lib/events"
import { FileTree, createFileTreeForRegistryItemFiles } from "@/lib/registry"
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard"
import { Button } from "@/registry/default/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/default/ui/collapsible"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/registry/default/ui/resizable"
import { Separator } from "@/registry/default/ui/separator"
import {
  Sidebar,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarProvider,
} from "@/registry/default/ui/sidebar"
import { Tabs, TabsList, TabsTrigger } from "@/registry/default/ui/tabs"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/default/ui/toggle-group"
import { Style } from "@/registry/registry-styles"
import { registryItemFileSchema, registryItemSchema } from "@/registry/schema"

type BlockViewerContext = {
  item: z.infer<typeof registryItemSchema>
  view: "code" | "preview"
  setView: (view: "code" | "preview") => void
  style?: Style["name"]
  setStyle: (style: Style["name"]) => void
  activeFile: string | null
  setActiveFile: (file: string) => void
  resizablePanelRef: React.RefObject<ImperativePanelHandle> | null
  tree: ReturnType<typeof createFileTreeForRegistryItemFiles> | null
  highlightedFiles:
    | (z.infer<typeof registryItemFileSchema> & {
        highlightedContent: string
      })[]
    | null
}

const BlockViewerContext = React.createContext<BlockViewerContext | null>(null)

function useBlockViewer() {
  const context = React.useContext(BlockViewerContext)
  if (!context) {
    throw new Error("useBlockViewer must be used within a BlockViewerProvider.")
  }
  return context
}

function BlockViewerProvider({
  item,
  tree,
  highlightedFiles,
  children,
}: Pick<BlockViewerContext, "item" | "tree" | "highlightedFiles"> & {
  children: React.ReactNode
}) {
  const [view, setView] = React.useState<BlockViewerContext["view"]>("preview")
  const [style, setStyle] =
    React.useState<BlockViewerContext["style"]>("default")
  const [activeFile, setActiveFile] = React.useState<
    BlockViewerContext["activeFile"]
  >(highlightedFiles?.[0].target ?? null)
  const resizablePanelRef = React.useRef<ImperativePanelHandle>(null)

  return (
    <BlockViewerContext.Provider
      value={{
        item,
        view,
        setView,
        style,
        setStyle,
        resizablePanelRef,
        activeFile,
        setActiveFile,
        tree,
        highlightedFiles,
      }}
    >
      <div
        id={item.name}
        data-view={view}
        className="group/block-view-wrapper flex min-w-0 flex-col items-stretch gap-4"
        style={
          {
            "--height": item.meta?.iframeHeight ?? "930px",
          } as React.CSSProperties
        }
      >
        {children}
      </div>
    </BlockViewerContext.Provider>
  )
}

function BlockViewerToolbar() {
  const { setView, item, resizablePanelRef, style } = useBlockViewer()
  const { copyToClipboard, isCopied } = useCopyToClipboard()

  return (
    <div className="flex w-full items-center gap-2 md:pr-[14px]">
      <Tabs
        defaultValue="preview"
        onValueChange={(value) => setView(value as "preview" | "code")}
        className="hidden lg:flex"
      >
        <TabsList className="h-7 items-center justify-center rounded-md p-px pb-[2px]">
          <TabsTrigger
            value="preview"
            className="h-full rounded-sm px-2 text-xs"
          >
            <span className="">Preview</span>
          </TabsTrigger>
          <TabsTrigger value="code" className="h-full rounded-sm px-2 text-xs">
            <span className="">Code</span>
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <Separator orientation="vertical" className="mx-2 hidden h-4 lg:flex" />
      <a
        href={`#${item.name}`}
        className="text-sm font-medium underline-offset-2 hover:underline"
      >
        {item.description}
      </a>
      <div className="ml-auto hidden items-center gap-2 md:flex">
        <div className="hidden h-7 items-center gap-1.5 rounded-md border p-[2px] shadow-none lg:flex">
          <ToggleGroup
            type="single"
            defaultValue="100"
            onValueChange={(value) => {
              if (resizablePanelRef?.current) {
                resizablePanelRef.current.resize(parseInt(value))
              }
            }}
          >
            <ToggleGroupItem
              value="100"
              className="w-[28px] h-[22px] min-w-0 rounded-[calc(var(--radius-xs)_+_1px)] p-0 my-auto"
              title="Desktop"
            >
              <Monitor className="size-3.5" />
            </ToggleGroupItem>
            <ToggleGroupItem
              value="60"
              className="w-[28px] h-[22px] min-w-0 rounded-[calc(var(--radius-xs)_+_1px)] p-0 my-auto"
              title="Tablet"
            >
              <Tablet className="size-3.5" />
            </ToggleGroupItem>
            <ToggleGroupItem
              value="30"
              className="w-[28px] h-[22px] min-w-0 rounded-[calc(var(--radius-xs)_+_1px)] p-0 my-auto"
              title="Mobile"
            >
              <Smartphone className="size-3.5" />
            </ToggleGroupItem>
            <Separator orientation="vertical" className="h-4" />
            <Button
              size="icon"
              variant="ghost"
              className="h-[22px] w-[32px] rounded-sm p-0"
              asChild
              title="Open in New Tab"
            >
              <Link href={`/view/styles/${style}/${item.name}`} target="_blank">
                <span className="sr-only">Open in New Tab</span>
                <Fullscreen className="size-3" />
              </Link>
            </Button>
          </ToggleGroup>
        </div>
        <Separator orientation="vertical" className="mx-1 hidden h-4 md:flex" />
        <div className="flex h-7 items-center gap-1 rounded-md border p-[2px]">
          <Button
            variant="ghost"
            className="hidden h-[22px] w-auto gap-1 rounded-sm px-2 md:flex lg:w-auto"
            size="sm"
            onClick={() => {
              copyToClipboard(`npx sparkstack@latest add ${item.name}`)
            }}
          >
            {isCopied ? <Check /> : <Terminal />}
            <span className="hidden lg:inline">
              npx sparkstack add {item.name}
            </span>
          </Button>
        </div>
      </div>
    </div>
  )
}

function BlockViewerView() {
  const { item, style, resizablePanelRef } = useBlockViewer()

  return (
    <div className="group-data-[view=code]/block-view-wrapper:hidden md:h-[--height]">
      <div className="grid w-full gap-4">
        <ResizablePanelGroup direction="horizontal" className="relative z-10">
          <ResizablePanel
            ref={resizablePanelRef}
            className="bg-gray-2 ring-gray-4 relative aspect-[4/2.5] rounded-2xl border shadow-[inset_0_0_2px_2px_var(--gray-3)] ring-1 md:aspect-auto"
            defaultSize={100}
            minSize={30}
          >
            <Image
              src={`/r/styles/${style}/${item.name}-light.png`}
              alt={item.name}
              data-block={item.name}
              width={1440}
              height={900}
              className="object-cover md:hidden dark:hidden md:dark:hidden"
            />
            <Image
              src={`/r/styles/${style}/${item.name}-dark.png`}
              alt={item.name}
              data-block={item.name}
              width={1440}
              height={900}
              className="hidden object-cover md:hidden dark:block md:dark:hidden"
            />
            <iframe
              src={`/view/styles/${style}/${item.name}`}
              height={item.meta?.iframeHeight ?? 930}
              className="bg-background relative z-20 hidden w-full md:block"
            />
          </ResizablePanel>
          <ResizableHandle className="after:bg-border relative hidden w-3 bg-transparent p-0 after:absolute after:right-0 after:top-1/2 after:h-8 after:w-[6px] after:-translate-x-px after:-translate-y-1/2 after:rounded-full after:transition-all after:hover:h-10 md:block" />
          <ResizablePanel defaultSize={0} minSize={0} />
        </ResizablePanelGroup>
      </div>
    </div>
  )
}

function BlockViewerCode() {
  const { activeFile, highlightedFiles } = useBlockViewer()

  const file = React.useMemo(() => {
    return highlightedFiles?.find((file) => file.target === activeFile)
  }, [highlightedFiles, activeFile])

  if (!file) {
    return null
  }

  return (
    <div className="bg-gray-4 text-foreground mr-[14px] flex h-[--height] overflow-hidden rounded-2xl shadow-[inset_0_0_2px_2px_var(--gray-3)] group-data-[view=preview]/block-view-wrapper:hidden">
      <div className="w-[280px]">
        <BlockViewerFileTree />
      </div>
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="bg-gray-2 flex h-12 items-center gap-2 rounded-tr-2xl border-r border-t px-4 text-sm font-medium">
          <File className="size-4" />
          {file.target}
          <div className="ml-auto flex items-center gap-2">
            <BlockCopyCodeButton />
          </div>
        </div>
        <div
          key={file?.path}
          data-rehype-pretty-code-fragment
          dangerouslySetInnerHTML={{ __html: file?.highlightedContent ?? "" }}
          className="after:bg-gray-a1 relative flex-1 overflow-hidden after:absolute after:inset-y-0 after:left-0 after:w-10 [&_.line:before]:sticky [&_.line:before]:left-2 [&_.line:before]:z-10 [&_.line:before]:-translate-y-px [&_.line:before]:pr-1 [&_pre]:h-[--height] [&_pre]:overflow-auto [&_pre]:!bg-transparent [&_pre]:pb-20 [&_pre]:pt-4 [&_pre]:font-mono [&_pre]:text-sm [&_pre]:leading-relaxed"
        />
      </div>
    </div>
  )
}

export function BlockViewerFileTree() {
  const { tree } = useBlockViewer()

  if (!tree) {
    return null
  }

  return (
    <SidebarProvider className="flex !min-h-full flex-col">
      <Sidebar
        collapsible="none"
        className="bg-background text-foreground w-full flex-1 rounded-tl-xl border"
      >
        <SidebarGroupLabel className="text-foreground h-12 rounded-none border-b px-4 text-sm">
          Files
        </SidebarGroupLabel>
        <SidebarGroup className="p-0">
          <SidebarGroupContent>
            <SidebarMenu className="gap-0.5">
              {tree.map((file, index) => (
                <Tree key={index} item={file} index={1} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </Sidebar>
    </SidebarProvider>
  )
}

function Tree({ item, index }: { item: FileTree; index: number }) {
  const { activeFile, setActiveFile } = useBlockViewer()

  if (!item.children) {
    return (
      <SidebarMenuItem>
        <SidebarMenuButton
          isActive={item.path === activeFile}
          onClick={() => item.path && setActiveFile(item.path)}
          className="hover:bg-gray-a3 hover:text-foreground focus:bg-gray-3 focus:text-foreground focus-visible:bg-gray-3 focus-visible:text-foreground active:bg-gray-3 active:text-foreground data-[active=true]:bg-gray-3 data-[active=true]:text-foreground whitespace-nowrap rounded-none pl-[--index]"
          data-index={index}
          style={
            {
              "--index": `${index * (index === 2 ? 1.2 : 1.3)}rem`,
            } as React.CSSProperties
          }
        >
          <ChevronRight className="invisible" />
          <File className="size-4" />
          {item.name}
        </SidebarMenuButton>
      </SidebarMenuItem>
    )
  }

  return (
    <SidebarMenuItem>
      <Collapsible
        className="group/collapsible [&[data-state=open]>button>svg:first-child]:rotate-90"
        defaultOpen
      >
        <CollapsibleTrigger asChild>
          <SidebarMenuButton
            className="hover:bg-gray-3 hover:text-foreground focus-visible:bg-gray-3 focus-visible:text-foreground active:bg-gray-3 active:text-foreground data-[active=true]:bg-gray-3 data-[active=true]:text-foreground data-[state=open]:hover:bg-gray-3 data-[state=open]:hover:text-foreground whitespace-nowrap rounded-none pl-[--index]"
            style={
              {
                "--index": `${index * (index === 1 ? 1 : 1.2)}rem`,
              } as React.CSSProperties
            }
          >
            <ChevronRight className="size-4 transition-transform" />
            <Folder className="size-4" />
            {item.name}
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub className="m-0 w-full border-none p-0">
            {item.children.map((subItem, key) => (
              <Tree key={key} item={subItem} index={index + 1} />
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </Collapsible>
    </SidebarMenuItem>
  )
}

function BlockCopyCodeButton() {
  const { activeFile, item } = useBlockViewer()
  const { copyToClipboard, isCopied } = useCopyToClipboard()

  const file = React.useMemo(() => {
    return item.files?.find((file) => file.target === activeFile)
  }, [activeFile, item.files])

  const content = file?.content

  if (!content) {
    return null
  }

  return (
    <Button
      onClick={() => {
        copyToClipboard(content)
        trackEvent({
          name: "copy_block_code",
          properties: {
            name: item.name,
            file: file.path,
          },
        })
      }}
      className="size-7 shrink-0 rounded-lg p-0 [&>svg]:size-3"
      variant="ghost"
    >
      {isCopied ? <Check /> : <Clipboard />}
    </Button>
  )
}

function BlockViewer({
  item,
  tree,
  highlightedFiles,
  ...props
}: Pick<BlockViewerContext, "item" | "tree" | "highlightedFiles">) {
  return (
    <BlockViewerProvider
      item={item}
      tree={tree}
      highlightedFiles={highlightedFiles}
      {...props}
    >
      <BlockViewerToolbar />
      <BlockViewerView />
      <BlockViewerCode />
    </BlockViewerProvider>
  )
}

export { BlockViewer }
