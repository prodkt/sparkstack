import WebApp01 from "./components/web-app-01"

export default function Page() {
  return (
    <div className="flex h-[--height] max-h-[--height] w-full items-center justify-center p-6 md:p-10">
      <div className="w-full">
        <WebApp01 />
      </div>
    </div>
  )
}
