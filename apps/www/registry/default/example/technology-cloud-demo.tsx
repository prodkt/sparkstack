import Cisco from "@/registry/default/icons/cisco"
import CocaCola from "@/registry/default/icons/coke"
import Hm from "@/registry/default/icons/hm"
import Hp from "@/registry/default/icons/hp"
import Samsung from "@/registry/default/icons/samsung"
import Toyota from "@/registry/default/icons/toyota"
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
          <Cisco className="h-4 w-auto max-w-14" />
        </CloudLogo>
        <CloudLogo>
          <CocaCola className="h-4 w-auto max-w-14" />
        </CloudLogo>
        <CloudLogo>
          <Hp className="h-4 w-auto max-w-14" />
        </CloudLogo>
        <CloudLogo>
          <Samsung className="h-4 w-auto max-w-14" />
        </CloudLogo>
        <CloudLogo>
          <Toyota className="h-4 w-auto max-w-14" />
        </CloudLogo>
        <CloudLogo>
          <Hm className="h-4 w-auto max-w-14" />
        </CloudLogo>
      </LogoCloud>
    </div>
  )
}
