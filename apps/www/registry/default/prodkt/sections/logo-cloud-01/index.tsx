import {
  CiscoLogo,
  CocaColaLogo,
  DominosLogo,
  EminemLogo,
  HellsAngelsLogo2,
  HmLogo,
  HpLogo,
  NexsaleLogo,
  RevolutionVodkaLogo,
  SamsungLogo,
  ShadyLogo,
  ToyotaLogo,
  TruwhipLogo,
} from "@/registry/logos"
import Marquee from "@/registry/new-york/effects/marquee"

import { LogoBox } from "./logo"

export function LogoCloud01() {
  return (
    <div
      id="bryan-worked-with"
      className="relative flex flex-col items-center justify-start w-full h-auto gap-6"
    >
      <h3 className="text-xl">Proud to have worked with some great brands</h3>
      <div className="h-auto gap-4">
        <Marquee pauseOnHover className="[--duration:20s]">
          <LogoBox key="RevolutionVodka">
            <RevolutionVodkaLogo />
          </LogoBox>
          <LogoBox key="CocaCola">
            <CocaColaLogo />
          </LogoBox>
          <LogoBox key="Dominos">
            <DominosLogo />
          </LogoBox>
          <LogoBox key="Truwhip">
            <TruwhipLogo />
          </LogoBox>
          <LogoBox key="Toyota">
            <ToyotaLogo />
          </LogoBox>
          <LogoBox key="Hm">
            <HmLogo className="max-h-4" />
          </LogoBox>
          <LogoBox key="Cisco">
            <CiscoLogo className="max-h-4" />
          </LogoBox>
          <LogoBox key="Shady">
            <ShadyLogo className="max-h-5" />
          </LogoBox>
          <LogoBox key="Samsung">
            <SamsungLogo />
          </LogoBox>
          <LogoBox key="Hp">
            <HpLogo className="max-h-5" />
          </LogoBox>
          <LogoBox key="HellsAngels">
            <HellsAngelsLogo2 />
          </LogoBox>
          <LogoBox key="Nexsale">
            <NexsaleLogo />
          </LogoBox>
          <LogoBox key="Eminem">
            <EminemLogo />
          </LogoBox>
        </Marquee>
      </div>
    </div>
  )
}

LogoCloud01.displayName = "LogoCloud01"
