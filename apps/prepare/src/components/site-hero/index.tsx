import { cn } from '@/lib/utils'
import { HeroHeading, HeroSubheading, HeroDescription, HeroH3 } from './heading-texts';
import { ClientShuffle } from '@/registry/default/prodkt/client-shuffle'
export function SiteHero() {


  return (
   <div className={cn('relative flex flex-col items-start justify-start w-full h-screen p-6 xs:p-8 md:p-20 m-0')}>
      <div className="flex flex-col items-start justify-startrelative m-auto w-full h-full max-w-[80dvw] max-h-[70dvh] inset-0 z-[1] gap-24">
        <HeroHeading className="" />
        <div className="flex flex-col gap-4">
          <HeroSubheading className="" />
          <HeroDescription className="" />
        </div>
        <div className="flex flex-col gap-1 mx-auto">
          <HeroH3 className="mx-auto text-center" />
          <ClientShuffle />
        </div>
      </div>

      <img
        src="/images/prodkt/bryanfunk_hero__personal-landing-bg-alpha.avif"
        className="absolute object-cover object-[25%_50%] sm:object-[10%_50%] md:object-center w-full h-[75dvh] sm:h-full z-[0] inset-0 m-0 select-none pointer-events-none"
      />
    </div>
  );
}
