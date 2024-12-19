import { Container } from "@/registry/new-york/prodkt/layouts/web-app-01/container"
import { SocialMedia } from "@/registry/new-york/prodkt/layouts/web-app-01/social-media"
import { Logo } from "@/registry/new-york/prodkt/logo"
import { FadeIn } from "@/registry/new-york/prodkt/motion/fade-in"
import { Badge } from "@/registry/new-york/ui/badge"

const navigation = [
  {
    title: (
      <div className="flex flex-col items-start justify-start">
        <p className="text-md"> Work </p>
      </div>
    ),
    order: 1,
    links: [
      {
        title: (
          <div className="flex flex-row items-center justify-start gap-2 no-underline decoration-none">
            Work History & Experience
          </div>
        ),
        href: "/bryan-funk",
        order: 1,
        badge: true,
        badgeText: "New",
      },
      {
        title: "Personal Projects & Initiatives",
        href: "/bryan-funk",
        order: 2,
        badge: false,
        badgeText: "New",
      },
      { title: `Changelog`, href: "/changelog", order: 3 },
      {
        title: (
          <>
            See all <span aria-hidden="true">&rarr;</span>
          </>
        ),
        href: "/work",
        order: 4,
        badge: false,
        badgeText: "New",
      },
    ],
  },
  {
    title: "Bryan Funk",
    order: 2,
    links: [
      {
        title: "About",
        href: "/about",
        badge: false,
        badgeText: "New",
        order: 10,
      },
      {
        title: "Process",
        href: "/process",
        badge: false,
        badgeText: "New",
        order: 20,
      },
      {
        title: "Blog",
        href: "/blog",
        badge: false,
        badgeText: "New",
        order: 30,
      },
      {
        title: "Lets chat",
        href: "/contact",
        badge: false,
        badgeText: "New",
        order: 40,
      },
    ],
  },
]

function Navigation() {
  return (
    <nav>
      <ul className="grid grid-cols-2 gap-8 sm:grid-cols-3">
        {navigation.map((section) => (
          <li className="flex flex-col" key={section.order}>
            <div className="text-[var(--gray-a12)] font-normal text-lg w-auto ">
              {section.title}
            </div>
            <ul className="mt-4 text-[var(--gray-9)] text-sm">
              {section.links.map((link) => (
                <li key={link.order} className="mt-4">
                  <a
                    href={link.href}
                    className="hover:text-[var(--gray-12)] transition -tracking-[0rem] group flex flex-row items-center justify-start gap-1"
                  >
                    <p className="underline underline-offset-[6px]  decoration-[var(--gray-a1)] hover:decoration-[var(--accent-9)]">
                      {link.title}
                    </p>{" "}
                    {link.badge ? (
                      <Badge className="no-underline decoration-none">
                        {link.badgeText}
                      </Badge>
                    ) : null}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export function Footer() {
  return (
    <Container
      className="transition-[width] origin-left ms-0 me-auto px-8 mt-12 sm:mt-16 lg:mt-10"
      as="footer"
    >
      <FadeIn>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <Navigation />
          <div className="flex lg:justify-end">
            {/* <NewsletterForm /> */}
            <div className="relative hidden md:flex">
              {/* <TextRevealCardDemo /> */}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-end justify-between pt-12 mb-8 lg:mb-20 lg:mt-24 gap-x-6 gap-y-4">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-4 ">
            <a href="/" aria-label="Home">
              <Logo className="h-8" />
            </a>
            <SocialMedia />
          </div>
          <p className="text-sm text-foreground">
            © Prodkt & Bryan Funk {new Date().getFullYear()}
          </p>
        </div>
      </FadeIn>
    </Container>
  )
}
