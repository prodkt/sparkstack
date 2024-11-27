import { DesignerMarksButton } from "@/registry/default/prodkt/designer-marks-button"

export default function DesignerMarksButtonDemo() {
  return (
    <div className="flex flex-row items-center space-x-[-3px]">
      <DesignerMarksButton variant="outline">Login</DesignerMarksButton>
      <DesignerMarksButton variant="outline">Signup</DesignerMarksButton>
    </div>
  )
}
