"use client"

import { Mail, Globe, ArrowUp } from "lucide-react"

const links = [
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Team", href: "#team" },
  { label: "Perks", href: "#resources" },
  { label: "Apply", href: "#apply" },
]

export function Footer() {
  return (
    <footer className="relative border-t border-border px-6 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
          <div>
            <div className="flex items-center gap-2.5">
              <img
                src="/images/sunstone-logo.png"
                alt="Sunstone Venture & Innovation Center"
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Empowering the next generation of founders through Innovation, Community, and Entrepreneurship.
            </p>
          </div>

          <a
            href="#"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-all duration-300 hover:border-primary/20 hover:bg-accent"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-8 border-t border-border pt-8 sm:flex-row sm:items-center">
          <div className="flex flex-wrap items-center gap-5">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-2 text-sm sm:flex-row sm:items-center sm:gap-5">
            <a
              href="mailto:community@sunstoneinvestment.com"
              className="flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="h-3.5 w-3.5" />
              community@sunstoneinvestment.com
            </a>
            <a
              href="https://sunstoneinvestment.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Globe className="h-3.5 w-3.5" />
              sunstoneinvestment.com
            </a>
          </div>
        </div>

        <p className="mt-8 text-xs text-muted-foreground/50">
          {"2026 Sunstone Venture & Innovation Center. All rights reserved."}
        </p>
      </div>
    </footer>
  )
}
