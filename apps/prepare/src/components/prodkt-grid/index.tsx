import Ripple from '@/registry/default/prodkt/effect-ripple'

export default function ProdktGrid() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-base/7 font-semibold text-primary">Deploy faster</h2>
        <p className="mt-2 max-w-lg text-pretty text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Everything you need to deploy your app
        </p>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <div className="flex p-px lg:col-span-4">
            <div className="overflow-hidden rounded-lg bg-backround sparkstack-border max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]">
              <img
                alt=""
                src="https://tailwindui.com/plus/img/component-images/bento-02-releases.png"
                className="h-80 object-cover object-left"
              />
              <div className="p-10">
                <h3 className="text-sm/4 font-semibold text-muted-text">Releases</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-foreground">Push to deploy</p>
                <p className="mt-2 max-w-lg text-sm/6 text-muted-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida justo et nulla efficitur, maximus
                  egestas sem pellentesque.
                </p>
              </div>
            </div>
          </div>
          <div className="flex p-px lg:col-span-2">
            <div className="overflow-hidden rounded-lg bg-backround sparkstack-border lg:rounded-tr-[2rem]">
              <img
                alt=""
                src="https://tailwindui.com/plus/img/component-images/bento-02-integrations.png"
                className="h-80 object-cover"
              />
              <div className="p-10">
                <h3 className="text-sm/4 font-semibold text-primary">Integrations</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-foreground">Connect your favorite tools</p>
                <p className="mt-2 max-w-lg text-sm/6 text-muted-text">
                  Curabitur auctor, ex quis auctor venenatis, eros arcu rhoncus massa.
                </p>
              </div>
            </div>
          </div>
          <div className="flex p-px lg:col-span-2">
            <div className="overflow-hidden relative rounded-lg sparkstack-border lg:rounded-bl-[2rem]">
            <Ripple />
              <div
                className="h-80"
              />
              <div className="p-10">
                <h3 className="text-sm/4 font-semibold text-muted-text">Security</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-foreground">Advanced access control</p>
                <p className="mt-2 max-w-lg text-sm/6 text-muted-text">
                  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.
                </p>
              </div>
            </div>
          </div>
          <div className="flex p-px lg:col-span-4">
            <div className="overflow-hidden rounded-lg bg-backround sparkstack-border max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]">
              <img
                alt=""
                src="https://tailwindui.com/plus/img/component-images/bento-02-performance.png"
                className="h-80 object-cover object-left"
              />
              <div className="p-10">
                <h3 className="text-sm/4 font-semibold text-muted-text">Performance</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-foreground">Lightning-fast builds</p>
                <p className="mt-2 max-w-lg text-sm/6 text-muted-text">
                  Sed congue eros non finibus molestie. Vestibulum euismod augue vel commodo vulputate. Maecenas at
                  augue sed elit dictum vulputate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
