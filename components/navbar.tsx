"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Menu, X, ArrowUpRight } from "lucide-react"

interface NavLink {
  label: string
  href: string
  children?: { label: string; href: string }[]
}

const navLinks: NavLink[] = [
  { label: "About", href: "/#about" },
  { label: "Portfolio", href: "/#portfolio" },
  {
    label: "Program",
    href: "/#program",
    children: [{ label: "Brand Lab", href: "/programs/dtc-brand-lab" }],
  },
  { label: "Perks", href: "/#perks" },
  { label: "Events", href: "/#events" },
  { label: "Team", href: "/#team" },
]

export function Navbar({ darkHero = false }: { darkHero?: boolean }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const pathname = usePathname()

  // True when we should render in "dark hero" mode (unscrolled + darkHero prop)
  const isOverDark = darkHero && !scrolled

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = ["about", "portfolio", "program", "perks", "events", "team"]
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top < 200) {
          setActiveSection(id)
          break
        }
      }
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-700 ${scrolled
          ? "w-[min(95vw,800px)] rounded-full border border-border/50 bg-background/80 px-3 py-2 shadow-lg shadow-foreground/[0.03] backdrop-blur-2xl"
          : "w-[min(95vw,1200px)] rounded-2xl bg-transparent px-6 py-4"
          }`}
      >
        <div className="flex items-center justify-between">
          <a href="/" className="group flex items-center gap-2">
            <img
              src={isOverDark ? "/images/logo_in_dark.png" : "/images/sunstone-logo.png"}
              alt="Sunstone Venture & Innovation Center"
              className={`w-auto object-contain transition-all duration-500 group-hover:scale-105 ${scrolled ? "h-10" : "h-12"}`}
            />
          </a>

          {/* Desktop pill nav */}
          <div className="hidden items-center gap-0.5 md:flex ml-6">
            {navLinks.map((link) => {
              const childActive = link.children?.some((c) => pathname === c.href)
              const isActive =
                pathname === link.href ||
                (link.href.includes("#") && activeSection === link.href.split("#")[1]) ||
                childActive
              const linkClass = `relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${isActive
                ? "bg-foreground text-background"
                : isOverDark
                  ? "text-white/70 hover:text-white hover:bg-white/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-foreground/[0.04]"
                }`

              if (link.children) {
                return (
                  <div key={link.href} className="group relative">
                    <a href={link.href} className={linkClass}>
                      {link.label}
                    </a>
                    <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                      <div className="min-w-[170px] rounded-2xl border border-border/50 bg-background/95 p-1.5 shadow-lg shadow-foreground/[0.06] backdrop-blur-2xl">
                        {link.children.map((child) => (
                          <a
                            key={child.href}
                            href={child.href}
                            className={`block whitespace-nowrap rounded-xl px-3.5 py-2 text-sm font-medium transition-colors duration-200 ${pathname === child.href
                              ? "bg-foreground text-background"
                              : "text-muted-foreground hover:bg-foreground/[0.04] hover:text-foreground"
                              }`}
                          >
                            {child.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              }

              return (
                <a key={link.href} href={link.href} className={linkClass}>
                  {link.label}
                </a>
              )
            })}
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/apply"
              className={`hidden items-center gap-1 rounded-full px-3.5 py-1.5 text-sm font-semibold whitespace-nowrap flex-shrink-0 transition-all duration-300 hover:scale-[1.02] md:inline-flex ${isOverDark
                ? "border border-white/20 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
                : "bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/20"
                }`}
            >
              Get Access
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`relative z-50 flex h-9 w-9 items-center justify-center rounded-full transition-colors md:hidden ${isOverDark
                ? "text-white hover:bg-white/10"
                : "text-foreground hover:bg-foreground/5"
                }`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Full-screen mobile overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-background transition-all duration-500 md:hidden ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
      >
        <div className="flex flex-col items-center gap-2">
          {[
            ...navLinks.flatMap((link) =>
              link.children
                ? [{ label: link.label, href: link.href, child: false }, ...link.children.map((c) => ({ ...c, child: true }))]
                : [{ label: link.label, href: link.href, child: false }],
            ),
            { label: "Get Access", href: "/apply", child: false },
          ].map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`rounded-2xl px-6 font-display font-bold text-foreground transition-all duration-500 hover:bg-accent hover:text-primary ${link.child ? "py-2 text-2xl text-muted-foreground" : "py-3 text-4xl"
                }`}
              style={{
                transitionDelay: mobileOpen ? `${i * 60}ms` : "0ms",
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? "translateY(0) scale(1)" : "translateY(30px) scale(0.95)",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile decorative elements */}
        <div className="pointer-events-none absolute bottom-16 left-1/2 -translate-x-1/2">
          <p className="text-xs text-muted-foreground" style={{ opacity: mobileOpen ? 1 : 0, transition: "opacity 0.5s 0.4s" }}>
            community@sunstoneinvestment.com
          </p>
        </div>
      </div>
    </>
  )
}
