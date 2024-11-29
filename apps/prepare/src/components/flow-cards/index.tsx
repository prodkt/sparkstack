import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/default/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/default/ui/card"
import { Input } from "@/registry/default/ui/input"
import { Label } from "@/registry/default/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select"

const FlowModalMenu = {
  "base": {
    "title": "Base",
    "description": "Base primitive components",
  },
  "headers": {
    "title": "Headers",
    "description": "Header components",
  },
  "posts": {
    "title": "Posts",
    "description": "Post components",
  },
  "articles": {
    "title": "Articles",
    "description": "Article components",
  },
  "catalogs": {
    "title": "Catalogs",
    "description": "Catalog components",
  },
  "testimonials": {
    "title": "Testimonials",
    "description": "Testimonial components",
  },
  "call-to-action": {
    "title": "Call to action",
    "description": "Call to action components",
  },
  "footer": {
    "title": "Footer",
    "description": "Footer components",
  },
  "landing-page": {
    "title": "Landing page",
    "description": "Landing page components",
  },
  "product-grid": {
    "title": "Product grid",
    "description": "Product grid components",
  },
  "product-page": {
    "title": "Product page",
    "description": "Product page components",
  },
  "shop-page": {
    "title": "Shop page",
    "description": "Shop page components",
  },
  "checkout-page": {
    "title": "Checkout page",
    "description": "Checkout page components",
  },
  "cart-page": {
    "title": "Cart page",
    "description": "Cart page components",
  },
  "account-page": {
    "title": "Account page",
    "description": "Account page components",
  },
  "404-page": {
    "title": "404 page",
    "description": "404 page components",
  },
  "500-page": {
    "title": "500 page",
    "description": "500 page components",
  },
  "blog-page": {
    "title": "Blog page",
    "description": "Blog page components",
  },
  "blog-post-page": {
    "title": "Blog post page",
    "description": "Blog post page components",
  },
  "contact-page": {
    "title": "Contact page",
    "description": "Contact page components",
  },
  "faq-page": {
    "title": "FAQ page",
    "description": "FAQ page components",
  },
  "pricing-page": {
    "title": "Pricing page",
    "description": "Pricing page components",
  },
  "search-page": {
    "title": "Search page",
    "description": "Search page components",
  },
  "checkout-success-page": {
    "title": "Checkout success page",
    "description": "Checkout success page components",
  },
  "checkout-cancel-page": {
    "title": "Checkout cancel page",
    "description": "Checkout cancel page components",
  },
  "checkout-error-page": {
    "title": "Checkout error page",
    "description": "Checkout error page components",
  },
  "checkout-payment-page": {
    "title": "Checkout payment page",
    "description": "Checkout payment page components",
  },
  "checkout-review-page": {
    "title": "Checkout review page",
    "description": "Checkout review page components",
  },
  "checkout-shipping-page": {
    "title": "Checkout shipping page",
    "description": "Checkout shipping page components",
  },
  "checkout-thank-you-page": {
    "title": "Checkout thank you page",
    "description": "Checkout thank you page components",
  },
}

export function FlowCard() {
  return (
    <Card className="w-[350px] relative bg-card-layer-1 rounded-3xl p-0.5">
        <div className="h-12 w-12 ml-0 mx-0 bg-gradient-to-r from-card-layer-1 rounded-tl-3xl to-transparent absolute left-0 inset-y-0 z-[2] pointer-events-none select-none" />
        <div className="h-12 w-12 ml-0 mx-0 bg-gradient-to-l from-card-layer-1 rounded-tr-3xl to-transparent absolute right-0 inset-y-0 z-[2] pointer-events-none select-none" />
      <CardHeader className="landing-wide-mask relative flex flex-row flex-nowrap items-start place-content-start rounded-t-3xl place-items-start place-self-stretch justify-start !space-y-0 gap-x-0.5 !px-1 pb-1 pt-0 w-full overflow-x-auto mb-1">
        {
          Object.entries(FlowModalMenu).map(([key, value]) => (
            <Button key={key} variant="ghost" size="sm" className="mx-0 inset-y-auto !mt-1 !mb-auto rounded-full">{value.title}</Button>
          ))
        }
      </CardHeader>
      <CardContent className="bg-background rounded-3xl border p-1.5">
        <div className="grid grid-cols-3 space-1 gap-1">
          <FlowCardBrowser>
            <FullContainer />
          </FlowCardBrowser>
          <FlowCardBrowser>
            <TwoColumns />
          </FlowCardBrowser>
          <FlowCardBrowser>
            <ThreeColumns />
          </FlowCardBrowser>
          <FlowCardBrowser>
            <TwoRows />
          </FlowCardBrowser>
          <FlowCardBrowser>
            <ThreeRows />
          </FlowCardBrowser>
          <FlowCardBrowser>
            <FourColumns />
          </FlowCardBrowser>
          <FlowCardBrowser>
            <FourRows />
          </FlowCardBrowser>
          <FlowCardBrowser>
            <TwoRowsTwoColumns />
          </FlowCardBrowser>
        </div>
      </CardContent>
      <CardFooter className="hidden justify-between">
      </CardFooter>
    </Card>
  )
}


export function FlowCardBrowser({ children, className, ...props }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={cn('col-span-1 border border-gray-a3 bg-card-layer-1 rounded-2xl')}>
      <div className="flex flex-col">
        <div className="flex flex-row items-center justify-start pt-1.5 pb-0.5 ps-3 gap-1">
          <div className="shadow-[0_1px_0_0px_var(--border),inset_0_1px_0_0_var(--ghost-a6)] bg-background rounded-full size-1" />
          <div className="shadow-[0_1px_0_0px_var(--border),inset_0_1px_0_0_var(--ghost-a6)] bg-background rounded-full size-1" />
          <div className="shadow-[0_1px_0_0px_var(--border),inset_0_1px_0_0_var(--ghost-a6)] bg-background rounded-full size-1" />
        </div>
        <div className={cn('flex flex-row items-center justify-start p-1 gap-1', className)} {...props}>
          {children}
        </div>
      </div>
    </div>
  )
}

export const FullContainer = ({ className, ...props }: { className?: string }) => {
  return (
    <div className={cn('w-full flex flex-row items-center justify-start gap-1', className)} {...props}>
      <div className={cn('w-full p-2 bg-gradient-to-b from-card to-card-selected rounded-lg min-h-16 shadow-[0_1px_0_0px_var(--gray-a3),inset_0_1px_0_0_var(--ghost-a6),inset_1px_0_0_0_var(--ghost-a3),inset_-1px_0_0_0_var(--ghost-a3)]')} />
    </div>
  )
}
export const TwoColumns = ({ className, ...props }: { className?: string }) => {
  return (
    <div className={cn('w-full flex flex-row items-center justify-start gap-1', className)} {...props}>
      <div className={cn('w-full p-2 bg-gradient-to-b from-card to-card-selected rounded-l-lg rounded-r rounded-bl-lg min-h-16 shadow-[0_1px_0_0px_var(--gray-a3),inset_0_1px_0_0_var(--ghost-a6),inset_1px_0_0_0_var(--ghost-a3),inset_-1px_0_0_0_var(--ghost-a3)]')} />
      <div className={cn('w-full p-2 bg-gradient-to-b from-card to-card-selected rounded-r-lg rounded-l rounded-br-lg min-h-16 shadow-[0_1px_0_0px_var(--gray-a3),inset_0_1px_0_0_var(--ghost-a6),inset_1px_0_0_0_var(--ghost-a3),inset_-1px_0_0_0_var(--ghost-a3)]')} />
    </div>
  )
}
export const ThreeColumns = ({ className, ...props }: { className?: string }) => {
  return (
    <div className={cn('w-full flex flex-row items-center justify-start gap-1', className)} {...props}>
      <div className={cn('w-full p-2 bg-gradient-to-b from-card to-card-selected rounded-l-lg rounded-r rounded-bl-lg min-h-16 shadow-[0_1px_0_0px_var(--gray-a3),inset_0_1px_0_0_var(--ghost-a6),inset_1px_0_0_0_var(--ghost-a3),inset_-1px_0_0_0_var(--ghost-a3)]')} />
      <div className={cn('w-full p-2 bg-gradient-to-b from-card to-card-selected rounded min-h-16 shadow-[0_1px_0_0px_var(--gray-a3),inset_0_1px_0_0_var(--ghost-a6),inset_1px_0_0_0_var(--ghost-a3),inset_-1px_0_0_0_var(--ghost-a3)]')} />
      <div className={cn('w-full p-2 bg-gradient-to-b from-card to-card-selected rounded-r-lg rounded-l rounded-br-lg min-h-16 shadow-[0_1px_0_0px_var(--gray-a3),inset_0_1px_0_0_var(--ghost-a6),inset_1px_0_0_0_var(--ghost-a3),inset_-1px_0_0_0_var(--ghost-a3)]')} />
    </div>
  )
}
export const FourColumns = ({ className, ...props }: { className?: string }) => {
  return (
    <div className={cn('w-full h-full flex flex-row items-center justify-start gap-1', className)} {...props}>
      <div className={cn('w-full h-full p-2 bg-gradient-to-b from-card to-card-selected rounded-l-lg rounded-r rounded-bl-lg min-h-16 shadow-[0_1px_0_0px_var(--gray-a3),inset_0_1px_0_0_var(--ghost-a6),inset_1px_0_0_0_var(--ghost-a3),inset_-1px_0_0_0_var(--ghost-a3)]')} />
      <div className={cn('w-full h-full p-2 bg-gradient-to-b from-card to-card-selected rounded min-h-16 shadow-[0_1px_0_0px_var(--gray-a3),inset_0_1px_0_0_var(--ghost-a6),inset_1px_0_0_0_var(--ghost-a3),inset_-1px_0_0_0_var(--ghost-a3)]')} />
      <div className={cn('w-full h-full p-2 bg-gradient-to-b from-card to-card-selected rounded min-h-16 shadow-[0_1px_0_0px_var(--gray-a3),inset_0_1px_0_0_var(--ghost-a6),inset_1px_0_0_0_var(--ghost-a3),inset_-1px_0_0_0_var(--ghost-a3)]')} />
      <div className={cn('w-full h-full p-2 bg-gradient-to-b from-card to-card-selected rounded-r-lg rounded-l rounded-br-lg min-h-16 shadow-[0_1px_0_0px_var(--gray-a3),inset_0_1px_0_0_var(--ghost-a6),inset_1px_0_0_0_var(--ghost-a3),inset_-1px_0_0_0_var(--ghost-a3)]')} />
    </div>
  )
}
export const TwoRows = ({ className, ...props }: { className?: string }) => {
  return (
    <div className={cn('w-full h-full flex flex-col items-center justify-start gap-1', className)} {...props}>
      <div className={cn('w-full h-full p-2 bg-gradient-to-b from-card to-card-selected rounded-t-lg rounded-b min-h-8 shadow-[0_1px_0_0px_var(--gray-a3),inset_0_1px_0_0_var(--ghost-a6),inset_1px_0_0_0_var(--ghost-a3),inset_-1px_0_0_0_var(--ghost-a3)]')} />
      <div className={cn('w-full h-full p-2 bg-gradient-to-b from-card to-card-selected rounded-b-lg rounded-t min-h-8 shadow-[0_1px_0_0px_var(--gray-a3),inset_0_1px_0_0_var(--ghost-a6),inset_1px_0_0_0_var(--ghost-a3),inset_-1px_0_0_0_var(--ghost-a3)]')} />
    </div>
  )
}
export const ThreeRows = ({ className, ...props }: { className?: string }) => {
  return (
    <div className={cn('w-full flex flex-col items-center justify-start gap-1', className)} {...props}>
      <div className={cn('w-full p-2 bg-gradient-to-b from-card to-card-selected rounded-t-lg rounded-b min-h-5 shadow-[0_1px_0_0px_var(--gray-a3),inset_0_1px_0_0_var(--ghost-a6),inset_1px_0_0_0_var(--ghost-a3),inset_-1px_0_0_0_var(--ghost-a3)]')} />
      <div className={cn('w-full p-2 bg-gradient-to-b from-card to-card-selected rounded min-h-5 shadow-[0_1px_0_0px_var(--gray-a3),inset_0_1px_0_0_var(--ghost-a6),inset_1px_0_0_0_var(--ghost-a3),inset_-1px_0_0_0_var(--ghost-a3)]')} />
      <div className={cn('w-full p-2 bg-gradient-to-b from-card to-card-selected rounded-b-lg rounded-t min-h-5 shadow-[0_1px_0_0px_var(--gray-a3),inset_0_1px_0_0_var(--ghost-a6),inset_1px_0_0_0_var(--ghost-a3),inset_-1px_0_0_0_var(--ghost-a3)]')} />
    </div>
  )
}
export const FourRows = ({ className, ...props }: { className?: string }) => {
  return (
    <div className={cn('w-full flex flex-col items-center justify-start gap-1', className)} {...props}>
      <div className={cn('w-full p-2 bg-gradient-to-b from-card to-card-selected rounded-t-lg rounded-b min-h-3 shadow-[0_1px_0_0px_var(--gray-a3),inset_0_1px_0_0_var(--ghost-a6),inset_1px_0_0_0_var(--ghost-a3),inset_-1px_0_0_0_var(--ghost-a3)]')} />
      <div className={cn('w-full p-2 bg-gradient-to-b from-card to-card-selected rounded min-h-3 shadow-[0_1px_0_0px_var(--gray-a3),inset_0_1px_0_0_var(--ghost-a6),inset_1px_0_0_0_var(--ghost-a3),inset_-1px_0_0_0_var(--ghost-a3)]')} />
      <div className={cn('w-full p-2 bg-gradient-to-b from-card to-card-selected rounded min-h-3 shadow-[0_1px_0_0px_var(--gray-a3),inset_0_1px_0_0_var(--ghost-a6),inset_1px_0_0_0_var(--ghost-a3),inset_-1px_0_0_0_var(--ghost-a3)]')} />
      <div className={cn('w-full p-2 bg-gradient-to-b from-card to-card-selected rounded-b-lg rounded-t min-h-3 shadow-[0_1px_0_0px_var(--gray-a3),inset_0_1px_0_0_var(--ghost-a6),inset_1px_0_0_0_var(--ghost-a3),inset_-1px_0_0_0_var(--ghost-a3)]')} />
    </div>
  )
}
export const TwoRowsTwoColumns = ({ className, ...props }: { className?: string }) => {
  return (
    <>
    <div className={cn('w-full flex flex-col items-center justify-start gap-1', className)} {...props}>
      <div className={cn('w-full flex flex-row items-center justify-start gap-1', className)} {...props}>
        <div className={cn('w-full p-2 bg-gradient-to-b from-card to-card-selected rounded-tl-lg rounded-r min-h-9 shadow-[0_1px_0_0px_var(--gray-a3),inset_0_1px_0_0_var(--ghost-a6),inset_1px_0_0_0_var(--ghost-a3),inset_-1px_0_0_0_var(--ghost-a3)]')} />
        <div className={cn('w-full p-2 bg-gradient-to-b from-card to-card-selected rounded-tr-lg rounded-l min-h-9 shadow-[0_1px_0_0px_var(--gray-a3),inset_0_1px_0_0_var(--ghost-a6),inset_1px_0_0_0_var(--ghost-a3),inset_-1px_0_0_0_var(--ghost-a3)]')} />
      </div>
      <div className={cn('w-full flex flex-row items-center justify-start gap-1', className)} {...props}>
        <div className={cn('w-full p-2 bg-gradient-to-b from-card to-card-selected rounded-bl-lg rounded-r min-h-9 shadow-[0_1px_0_0px_var(--gray-a3),inset_0_1px_0_0_var(--ghost-a6),inset_1px_0_0_0_var(--ghost-a3),inset_-1px_0_0_0_var(--ghost-a3)]')} />
        <div className={cn('w-full p-2 bg-gradient-to-b from-card to-card-selected rounded-br-lg rounded-l min-h-9 shadow-[0_1px_0_0px_var(--gray-a3),inset_0_1px_0_0_var(--ghost-a6),inset_1px_0_0_0_var(--ghost-a3),inset_-1px_0_0_0_var(--ghost-a3)]')} />
     </div>
    </div>
    </>
  )
}
