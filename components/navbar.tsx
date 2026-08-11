"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react"

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Perks", href: "/#perks" },
  { label: "Events", href: "/#events" },
  { label: "Team", href: "/#team" },
]

const programLinks = [
  { label: "DTC Vertical", href: "/apply", description: "Capital and support for consumer founders" },
  { label: "DTC Brand Lab", href: "/programs/dtc-brand-lab", description: "12-week, no-fee incubator · Sept 2026" },
]

export function Navbar({ darkHero = false }: { darkHero?: boolean }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [programsOpen, setProgramsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const pathname = usePathname()
  const programsActive = pathname.startsWith("/programs") || pathname === "/apply"

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

  // Close the Programs dropdown on outside click or Escape
  useEffect(() => {
    if (!programsOpen) return
    const onDocClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest("[data-programs-menu]")) setProgramsOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setProgramsOpen(false)
    }
    document.addEventListener("click", onDocClick)
    document.addEventListener("keydown", onKey)
    return () => {
      document.removeEventListener("click", onDocClick)
      document.removeEventListener("keydown", onKey)
    }
  }, [programsOpen])

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
            {/* Programs dropdown */}
            <div className="relative" data-programs-menu>
              <button
                type="button"
                onClick={() => setProgramsOpen((v) => !v)}
                className={`relative flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${programsActive
                  ? "bg-foreground text-background"
                  : isOverDark
                    ? "text-white/70 hover:text-white hover:bg-white/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-foreground/[0.04]"
                  }`}
                aria-expanded={programsOpen}
                aria-haspopup="true"
              >
                Programs
                <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${programsOpen ? "rotate-180" : ""}`} />
              </button>

              <div
                className={`absolute left-0 top-full pt-2 transition-all duration-200 ${programsOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none"
                  }`}
              >
                <div className="w-72 overflow-hidden rounded-2xl border border-border bg-background/95 p-1.5 shadow-xl shadow-foreground/[0.06] backdrop-blur-2xl">
                  {programLinks.map((program) => (
                    <a
                      key={program.href}
                      href={program.href}
                      className="block rounded-xl px-3.5 py-3 transition-colors duration-200 hover:bg-foreground/[0.04]"
                    >
                      <span className="block text-sm font-semibold text-foreground">{program.label}</span>
                      <span className="mt-0.5 block text-xs text-muted-foreground">{program.description}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href.includes("#") && activeSection === link.href.split("#")[1])
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${isActive
                    ? "bg-foreground text-background"
                    : isOverDark
                      ? "text-white/70 hover:text-white hover:bg-white/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-foreground/[0.04]"
                    }`}
                >
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
          {[...programLinks.map((p) => ({ label: p.label, href: p.href })), ...navLinks, { label: "Get Access", href: "/apply" }].map((link, i) => (
            <a
              key={`${link.label}-${link.href}`}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-2xl px-6 py-3 font-display text-4xl font-bold text-foreground transition-all duration-500 hover:bg-accent hover:text-primary"
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
