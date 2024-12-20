import type * as React from "react"
import type { LucideProps } from "lucide-react"

export function CarouselTab({
  children,
  icon: Icon,
  className,
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  icon?: React.ForwardRefExoticComponent<Omit<LucideProps, "ref">>
}) {
  return (
    <div className={className}>
      <div className="bg-gradient-to-br xl:pb-5  from-[var(--ghost-a12)] via-[var(--ghost-a11)] to-[var(--ghost-a1)] xl:p-px xl:rounded-[calc(var(--radius-lg)+0px)] w-full self-stretch text-sm leading-loose group prodkt-carousel-tab transition-[colors,background,shadow] duration-[colors,background,shadow_3s] ease-in-out">
        <div className="relative flex flex-row items-center gap-0 bg-gradient-to-tl from-[var(--ghost-a12)] via-[var(--ghost-a9)] to-[var(--ghost-a12)] xl:p-px xl:rounded-xl transition-colors overflow-hidden xl:pe-1.5 after:absolute  after:bg-[var(--tabActive)] after:blur-xl after:translate-y-full after:size-full after:rounded-xl">
          <div className="absolute inset-0 size-full m-auto transition-colors bg-transparent border-[var(--ghost-aa8)] opacity-100 rounded-xl blur-sm xl:border justify-items-stretch place-content-stretch place-items-stretch" />
          <div className="group-hover:bg-[var(--ghost-aa11)] right-auto left-4 absolute bg-[var(--ghost-aa1)] blur-lg m-auto rounded-lg size-6 transition-all duration-300 will-change-auto " />

          <div className="heroCarouselTab--selected--iconBox flex justify-start items-center bg-gradient-to-r from-[var(--gray-a2)] via-[var(--gray-a8)] via-40% to-[transparent] xl:rounded-s-[calc(var(--radius-lg)+20px)] w-full xl:w-auto h-12 xl:h-8 xl:pe-12 xl:ps-3 gradientMask-to-r-10 rounded-s-xl">
            {Icon && <Icon size={24} className="m-auto" />}
          </div>
          <div className="inline-flex place-content-stretch items-center justify-stretch truncate my-auto  self-stretch justify-self-stretch pt-1 -ms-10 tracking-[0.06rem] leading-none uppercase text-[0.65rem]">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
