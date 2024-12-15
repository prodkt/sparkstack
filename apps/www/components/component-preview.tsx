"use client"

import * as React from "react"
import Image from "next/image"
import { Index } from "@/__registry__"

import { cn } from "@/lib/utils"
import { useConfig } from "@/hooks/use-config"
import { CopyButton } from "@/components/copy-button"
import { Icons } from "@/components/icons"
import { StyleSwitcher } from "@/components/style-switcher"
import { ThemeWrapper } from "@/components/theme-wrapper"
import { V0Button } from "@/components/v0-button"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/default/ui/tabs"
import { styles } from "@/registry/registry-styles"

interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  extractClassname?: boolean
  extractedClassNames?: string
  align?: "center" | "start" | "end"
  description?: string
  hideCode?: boolean
  type?: "block" | "component" | "prodkt" | "example"
}

export function ComponentPreview({
  name,
  type,
  children,
  className,
  extractClassname,
  extractedClassNames,
  align = "center",
  description,
  hideCode = false,
  ...props
}: ComponentPreviewProps) {
  const [config] = useConfig()
  const index = styles.findIndex((style) => style.name === config.style)

  const Codes = React.Children.toArray(children) as React.ReactElement[]
  const Code = Codes[index]

  const Preview = React.useMemo(() => {
    const Component = Index[config.style][name]?.component

    if (!Component) {
      return (
        <p className="text-muted-foreground text-sm">
          Component{" "}
          <code className="bg-muted relative rounded-2xl px-[0.3rem] py-[0.2rem] font-mono text-sm">
            {name}
          </code>{" "}
          not found in registry.
        </p>
      )
    }

    return <Component />
  }, [name, config.style])

  const codeString = React.useMemo(() => {
    if (
      typeof Code?.props["data-rehype-pretty-code-fragment"] !== "undefined"
    ) {
      const [Button] = React.Children.toArray(
        Code.props.children
      ) as React.ReactElement[]
      return Button?.props?.value || Button?.props?.__rawString__ || null
    }
  }, [Code])

  if (type === "block") {
    return (
      <div className="relative aspect-[4/2.5] w-full overflow-hidden rounded-lg border">
        <Image
          src={`/r/styles/${config.style}/${name}-light.png`}
          alt={name}
          width={1440}
          height={900}
          className="bg-background absolute left-0 top-0 z-20 w-[970px] max-w-none sm:w-[1280px] md:hidden dark:hidden md:dark:hidden"
        />
        <Image
          src={`/r/styles/${config.style}/${name}-dark.png`}
          alt={name}
          width={1440}
          height={900}
          className="bg-background absolute left-0 top-0 z-20 hidden w-[970px] max-w-none sm:w-[1280px] md:hidden dark:block md:dark:hidden"
        />
        <div className="bg-background bg-noise absolute inset-0 hidden w-[1600px] md:block">
          <iframe
            src={`/view/styles/${config.style}/${name}`}
            className="size-full"
          />
        </div>
      </div>
    )
  }

  return (
    <div
      className={cn("group relative my-4 flex flex-col space-y-2", className)}
      {...props}
    >
      <Tabs defaultValue="preview" className="relative mr-auto w-full">
        <div className="flex items-center justify-between pb-3">
          {!hideCode && (
            <TabsList variant="chrome">
              <TabsTrigger variant="chrome" value="preview">
                <span className="relative">Preview</span>
              </TabsTrigger>
              <TabsTrigger variant="chrome" value="code">
                <span className="relative">Code</span>
              </TabsTrigger>
            </TabsList>
          )}
        </div>
        <TabsContent
          value="preview"
          className="bg-noise relative overflow-hidden rounded-2xl border"
        >
          <div className="flex items-center justify-between p-4">
            <StyleSwitcher />
            <div className="flex items-center gap-2">
              {description ? <V0Button className="hidden" name={name} /> : null}
              <CopyButton
                value={codeString}
                variant="outline"
                className="text-foreground hover:bg-muted hover:text-foreground size-7 opacity-100 [&_svg]:size-3.5"
              />
            </div>
          </div>
          <ThemeWrapper defaultTheme="slate">
            <div
              className={cn(
                "preview flex min-h-[350px] w-full justify-center p-6 lg:p-8 [&_>div]:relative [&_>div]:max-w-full [&_>div]:w-full [&_>div]:justify-center [&_>div]:items-center",
                {
                  "items-center": align === "center",
                  "items-start": align === "start",
                  "items-end": align === "end",
                }
              )}
            >
              <React.Suspense
                fallback={
                  <div className="text-muted-foreground flex w-full items-center justify-center text-sm">
                    <Icons.spinner className="mr-2 size-4 animate-spin" />
                    Loading...
                  </div>
                }
              >
                {Preview}
              </React.Suspense>
            </div>
          </ThemeWrapper>
        </TabsContent>
        <TabsContent value="code">
          <div className="flex flex-col space-y-4">
            <div className="w-full rounded-md [&_pre]:my-0 [&_pre]:max-h-[350px] [&_pre]:overflow-auto">
              {Code}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
