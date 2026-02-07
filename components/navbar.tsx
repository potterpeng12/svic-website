"use client"

import { useState, useEffect } from "react"
import { Menu, X, ArrowUpRight } from "lucide-react"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Team", href: "#team" },
  { label: "Perks", href: "#resources" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = ["about", "portfolio", "team", "resources", "apply"]
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
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-700 ${
          scrolled
            ? "w-[min(95vw,680px)] rounded-full border border-border/50 bg-background/80 px-3 py-2 shadow-lg shadow-foreground/[0.03] backdrop-blur-2xl"
            : "w-[min(95vw,1200px)] rounded-2xl bg-transparent px-6 py-4"
        }`}
      >
        <div className="flex items-center justify-between">
          <a href="#" className="group flex items-center gap-2">
            <img
              src="/images/sunstone-logo.png"
              alt="Sunstone Venture & Innovation Center"
              className={`w-auto object-contain transition-all duration-500 group-hover:scale-105 ${scrolled ? "h-10" : "h-12"}`}
            />
          </a>

          {/* Desktop pill nav */}
          <div className="hidden items-center gap-0.5 md:flex">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "")
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-foreground text-background"
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
              href="#apply"
              className="hidden items-center gap-1.5 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:scale-[1.02] md:inline-flex"
            >
              Apply
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="relative z-50 flex h-9 w-9 items-center justify-center rounded-full text-foreground transition-colors hover:bg-foreground/5 md:hidden"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Full-screen mobile overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-background transition-all duration-500 md:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-2">
          {[...navLinks, { label: "Apply", href: "#apply" }].map((link, i) => (
            <a
              key={link.href}
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
