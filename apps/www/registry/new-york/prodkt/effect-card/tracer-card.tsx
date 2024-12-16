import { cn } from "@/lib/utils"
import { Tracer } from "@/registry/default/effects/tracer"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/default/ui/card"

interface TracerCardProps {
  title: string
  description?: string
  className?: string
  children?: React.ReactNode
}

export default function TracerCard({
  title,
  description,
  className,
  children,
}: TracerCardProps) {
  return (
    <Card
      className={cn(
        "bg-gray-a1 relative flex flex-col items-stretch justify-end overflow-hidden",
        className
      )}
    >
      <CardHeader className="mt-auto mb-0">
        <CardTitle className="text-balance bg-gradient-to-b from-primary-a9 to-primary-a12 text-transparent bg-clip-text pe-1 pb-1">
          {title}
        </CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      {children && <CardContent className="flex-1">{children}</CardContent>}
      <Tracer />
    </Card>
  )
}
