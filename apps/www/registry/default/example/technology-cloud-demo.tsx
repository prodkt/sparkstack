import {
  CiscoLogo,
  CocaColaLogo,
  HmLogo,
  HpLogo,
  SamsungLogo,
  ToyotaLogo,
} from "@/registry/default/icons"
import {
  CloudLogo,
  LogoCloud,
} from "@/registry/default/prodkt/technology-cloud"
import { Button } from "@/registry/default/ui/button"

export default function TechnologyCloudDemo() {
  return (
    <div>
      <LogoCloud>
        <CloudLogo>
          <CiscoLogo className="h-4 w-auto max-w-14" />
        </CloudLogo>
        <CloudLogo>
          <CocaColaLogo className="h-4 w-auto max-w-14" />
        </CloudLogo>
        <CloudLogo>
          <HpLogo className="h-4 w-auto max-w-14" />
        </CloudLogo>
        <CloudLogo>
          <SamsungLogo className="h-4 w-auto max-w-14" />
        </CloudLogo>
        <CloudLogo>
          <ToyotaLogo className="h-4 w-auto max-w-14" />
        </CloudLogo>
        <CloudLogo>
          <HmLogo className="h-4 w-auto max-w-14" />
        </CloudLogo>
      </LogoCloud>
    </div>
  )
}
