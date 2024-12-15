import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/default/ui/avatar"

export function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/prodkt.png" alt="@prodkt" />
      <AvatarFallback>BF</AvatarFallback>
    </Avatar>
  )
}
