import { cn } from "@/lib/utils"

export function HeroHeading({ className }: { className?: string }) {
  return (
    <div>
      <h1 className={cn("font-extrabold scroll-m-20 text-5xl sm:text-6xl tracking-tighter md:text-7xl sm:max-w-xl xs:text-balance sm:text-balance z-[1] pr-1 pb-1.5 pt-0 sparkstack-hero-h1 text-transparent bg-clip-text", className)}>More than a
      dribbble viz.</h1>
    </div>
  )
}

export function HeroSubheading({ className }: { className?: string }) {
  return (
    <h2 className={cn("scroll-m-20 text-xl font-bold tracking-tight md:text-3xl px-1 pb-1.5 pt-0 sparkstack-hero-h2 text-transparent bg-clip-text", className)}>
        Hello, Im Bryan Funk.
    </h2>
  )
}

export function HeroDescription({ className }: { className?: string }) {
  return (
    <code className="text-md flex flex-col max-w-xl font-mono">
      <pre className="flex flex-col font-mono">
        <span className="line">
          <span className="text-gray-9">{'{'}</span>
        </span>
        <span className="line pl-2">
          <span className="italic font-light sparkstack-hero-h3 text-transparent bg-clip-text">moreThan</span>
          <span className="text-gray-9 font-light"> === </span>
          <span className="font-light sparkstack-hero-h3 text-transparent bg-clip-text">true</span>
          <span className="line">
            <span className="text-gray-a8 italic"> ? </span>
            <span className="text-gray-a8">(</span>
          </span>
        </span>
        <span className="line pl-4">
          <span className="line">
            <span className="text-gray-a8 font-light">{'<'}</span>
            <span className="text-foreground font-medium">{'ProductDesigner '}</span>
          </span>
          <span className="italic font-light sparkstack-hero-h3 text-transparent bg-clip-text">since</span>
          <span className="text-gray-9 font-light">=</span>
          <span className="text-gray-a8 font-light">{'\'2020\''}</span>
          <span className="font-light sparkstack-hero-h3 text-transparent bg-clip-text">{' />'}</span>
        </span>
        <span className="line pl-4">
          <span className="line">
            <span className="text-gray-a8 font-light">{'<'}</span>
            <span className="text-foreground font-medium">{'FrontendDev '}</span>
          </span>
          <span className="italic font-light sparkstack-hero-h3 text-transparent bg-clip-text">since</span>
          <span className="text-gray-9 font-light">=</span>
          <span className="text-gray-a8 font-light">{'\'2017\''}</span>
          <span className="font-light sparkstack-hero-h3 text-transparent bg-clip-text">{' />'}</span>
        </span>
        <span className="line pl-4">
          <span className="line">
            <span className="text-gray-a8 font-light">{'<'}</span>
            <span className="text-foreground font-medium">{'Designer '}</span>
          </span>
          <span className="italic font-light sparkstack-hero-h3 text-transparent bg-clip-text">since</span>
          <span className="text-gray-9 font-light">=</span>
          <span className="text-gray-a8 font-light">{'\'2010\''}</span>
          <span className="font-light sparkstack-hero-h3 text-transparent bg-clip-text">{' />'}</span>
        </span>
        <span className="line pl-2">
          <span className="text-gray-a8">) : </span>
          <span className="sparkstack-hero-h3 text-transparent bg-clip-text">undefined</span>
        </span>
        <span className="line">
          <span className="text-gray-9">{'}'}</span>
        </span>
      </pre>
    </code>

  )
}


export function HeroH3({ className }: { className?: string }) {
  return (
    <h3 className={cn("scroll-m-20 text-lg xs:leading-1 xs:text-2xl font-bold tracking-tight text-balance lg:text-4xl pr-1 pb-1.5 pt-0 sparkstack-hero-h3 text-transparent bg-clip-text", className)}>
        I design and build software.
    </h3>
  )
}
