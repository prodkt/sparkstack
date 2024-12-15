import {
  PlanFoundryLogomark,
  PlanFoundryLogomarkGradient,
} from "@/registry/default/prodkt/logomark_planfoundry"

export default function LogomarkPlanfoundryDemo() {
  return (
    <div className="flex flex-row gap-4">
      <PlanFoundryLogomark />
      <PlanFoundryLogomarkGradient />
    </div>
  )
}
