"use client"

import React, { forwardRef, type Ref } from "react"

import type { PRODUCT_SHORTNAMES } from "@/lib/constants"
import { cn } from "@/lib/utils"

import MagnifiedProducts from "./magnify-app-icons"

export type Products = PRODUCT_SHORTNAMES

interface Props {
  currentProduct: Products | string
}

function AppIconsSection(props: Props) {
  return (
    <SectionContainer className="overflow-hidden">
      <div className="flex flex-col text-center gap-4 items-center justify-center">
        <h2 className="heading-gradient text-2xl sm:text-3xl xl:text-4xl">
          Pick your SupaPower(s)
        </h2>
        <p className="mx-auto text-foreground-lighter">
          Supabase products are built to work both in isolation and seamlessly
          together
          <br className="hidden md:block" /> to ensure the most flexible and
          scalable developer experience.
        </p>
      </div>
      <div className="w-full py-12 md:h-[200px] flex items-center justify-center text-center">
        <MagnifiedProducts currentProduct={props.currentProduct} />
      </div>
    </SectionContainer>
  )
}

interface SectionContainerProps {
  children: React.ReactNode
  className?: string
  id?: string
}

const SectionContainer = forwardRef(
  (
    { children, className, id }: SectionContainerProps,
    ref: Ref<HTMLDivElement>
  ) => (
    <div
      ref={ref}
      id={id}
      className={cn(
        "sm:py-18 container relative mx-auto px-6 py-16 md:py-24 lg:px-16 lg:py-24 xl:px-20",
        className
      )}
    >
      {children}
    </div>
  )
)

export default AppIconsSection
