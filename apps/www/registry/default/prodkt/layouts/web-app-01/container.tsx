import clsx from "clsx"

type ContainerProps<T extends React.ElementType> = {
  as?: T
  className?: string
  children: React.ReactNode
}

export function Container<T extends React.ElementType = "div">({
  as,
  className,
  children,
}: Omit<React.ComponentPropsWithoutRef<T>, keyof ContainerProps<T>> &
  ContainerProps<T>) {
  let Component = as ?? "div"

  return (
    <Component className={clsx("w-full", className)}>
      <div className="w-full">{children}</div>
    </Component>
  )
}
