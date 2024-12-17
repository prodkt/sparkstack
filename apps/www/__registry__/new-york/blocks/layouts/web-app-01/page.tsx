import WebApp01 from "./components"
import "../../../../../styles/sparkstack_globals.css"

export default function Page() {
  return (
    <div
      data-theme="dark"
      style={{ colorScheme: "dark" }}
      className="dark dark-theme text-foreground absolute bg-background inset-0 m-0 p-0 flex size-full items-center justify-center"
    >
      <WebApp01 className="bg-background size-full" />
    </div>
  )
}
