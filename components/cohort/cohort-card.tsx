"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, ArrowUpRight, ImageIcon, Linkedin } from "lucide-react"
import { hasFounderInfo, type CohortBrand } from "@/data/cohort-1"

const EASE = [0.22, 1, 0.36, 1] as const

const faceBase =
  "[grid-area:1/1] flex flex-col overflow-hidden rounded-2xl border border-border bg-card [backface-visibility:hidden]"

function initials(name: string) {
  const parts = name.trim().split(/\s+/)
  return ((parts[0]?.[0] ?? "") + (parts.length > 1 ? parts[parts.length - 1][0] : "")).toUpperCase()
}

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-card"

export function CohortCard({
  brand,
  show,
  reduceMotion,
}: {
  brand: CohortBrand
  show: boolean
  reduceMotion: boolean
}) {
  const [flipped, setFlipped] = useState(false)
  const founder = hasFounderInfo(brand.founder) ? brand.founder : null
  const roleLabel = founder?.title && !/founder/i.test(founder.title) ? "Leader" : "Founder"
  const frontButton = useRef<HTMLButtonElement>(null)
  const backButton = useRef<HTMLButtonElement>(null)
  const mounted = useRef(false)

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true
      return
    }
    ;(flipped ? backButton : frontButton).current?.focus({ preventScroll: true })
  }, [flipped])

  return (
    <motion.li
      data-cohort-card={brand.id}
      className="relative h-full focus-within:z-30 [@media(hover:hover)]:hover:z-30"
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: show ? 1 : 0 }}
      transition={{ duration: reduceMotion ? 0 : 0.3, ease: EASE }}
    >
      <article
        className="h-full rounded-2xl transition-[transform,box-shadow] duration-300 ease-out motion-reduce:transition-none [@media(hover:hover)]:hover:-translate-y-1.5 [@media(hover:hover)]:hover:scale-[1.04] [@media(hover:hover)]:hover:shadow-2xl [@media(hover:hover)]:hover:shadow-foreground/10 shadow-sm shadow-foreground/[0.03]"
        style={{ perspective: "1400px" }}
        onKeyDown={(e) => {
          if (e.key === "Escape" && flipped) setFlipped(false)
        }}
        aria-label={brand.name}
      >
        <div
          className="grid h-full transition-transform duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
          style={{
            transformStyle: "preserve-3d",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* ───── FRONT ───── */}
          <div className={`group/card ${faceBase}`} inert={flipped} aria-hidden={flipped}>
            <div
              data-cohort-image={brand.id}
              className="relative aspect-[4/3] w-full overflow-hidden bg-muted"
            >
              {brand.image ? (
                <img
                  src={brand.image || "/placeholder.svg"}
                  alt={`${brand.name} ${brand.imageFit === "cover" ? "product" : "logo"}`}
                  loading="lazy"
                  style={brand.imagePosition ? { objectPosition: brand.imagePosition } : undefined}
                  className={`h-full w-full transition-transform duration-300 ease-out motion-reduce:transition-none group-hover/card:scale-105 ${
                    brand.imageFit === "cover" ? "object-cover" : "object-contain p-8"
                  }`}
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-accent via-muted to-secondary text-muted-foreground transition-transform duration-300 ease-out motion-reduce:transition-none group-hover/card:scale-105">
                  <ImageIcon className="h-8 w-8 opacity-50" />
                  <span className="text-xs font-medium uppercase tracking-widest">
                    Brand Image Coming Soon
                  </span>
                </div>
              )}
            </div>

            <div className="flex flex-1 flex-col p-6">
              <div className="group/name">
                <h3 className="font-display text-xl font-bold leading-snug text-foreground text-balance transition-transform duration-300 group-hover/card:translate-x-0.5">
                  {brand.website ? (
                    <a
                      href={brand.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-start gap-1.5 rounded-md transition-colors hover:text-primary ${focusRing}`}
                    >
                      <span>{brand.name}</span>
                      <ArrowUpRight className="mt-1.5 h-4 w-4 flex-shrink-0 opacity-50 transition-all duration-300 group-hover/name:-translate-y-0.5 group-hover/name:translate-x-0.5 group-hover/name:opacity-100" />
                      <span className="sr-only">(opens website in a new tab)</span>
                    </a>
                  ) : (
                    <span>{brand.name}</span>
                  )}
                </h3>
                <span
                  className={`mt-1 block h-5 text-xs font-medium text-primary opacity-0 transition-opacity duration-300 group-hover/name:opacity-100 group-focus-within/name:opacity-100 [@media(hover:none)]:opacity-100 ${
                    brand.website ? "" : "text-muted-foreground"
                  }`}
                  aria-hidden={brand.website ? true : undefined}
                >
                  {brand.website ? "View website" : "Website coming soon"}
                </span>
              </div>

              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{brand.blurb}</p>

              {founder && (
                <div className="mt-auto pt-6">
                  <button
                    ref={frontButton}
                    type="button"
                    onClick={() => setFlipped(true)}
                    aria-label={`Meet the ${roleLabel.toLowerCase()} of ${brand.name}`}
                    className={`group/btn inline-flex items-center gap-2 rounded-full border border-primary/20 bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition-colors hover:bg-primary hover:text-primary-foreground ${focusRing}`}
                  >
                    Meet the {roleLabel}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* ───── BACK (only rendered when founder info exists) ───── */}
          {founder && (
            <div
              className={faceBase}
              style={{ transform: "rotateY(180deg)" }}
              inert={!flipped}
              aria-hidden={!flipped}
            >
              <div className="relative aspect-[4/3] w-full flex-shrink-0 overflow-hidden bg-muted">
                {founder.image ? (
                  <img
                    src={founder.image || "/placeholder.svg"}
                    alt={`Portrait of ${founder.name}`}
                    loading="lazy"
                    style={{ objectPosition: founder.imagePosition ?? "50% 30%" }}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent via-muted to-secondary">
                    <div
                      className="flex h-24 w-24 items-center justify-center rounded-full bg-card/70 font-display text-3xl font-bold text-muted-foreground ring-1 ring-border"
                      aria-hidden="true"
                    >
                      {initials(founder.name)}
                    </div>
                    <span className="sr-only">Photo coming soon</span>
                  </div>
                )}
              </div>
              <div className="flex flex-1 flex-col items-center p-6 text-center">
                <h3 className="font-display text-xl font-bold leading-snug text-foreground text-balance">
                  {founder.linkedin ? (
                    <a
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`rounded-md transition-colors hover:text-primary ${focusRing}`}
                    >
                      {founder.name}
                      <span className="sr-only">(LinkedIn, opens in a new tab)</span>
                    </a>
                  ) : (
                    founder.name
                  )}
                </h3>
                {founder.title && (
                  <p className="mt-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
                    {founder.title}
                  </p>
                )}
                <p className="mt-1 text-sm text-muted-foreground text-balance">{brand.name}</p>
                {founder.linkedin && (
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group/li mt-4 inline-flex items-center gap-2 rounded-full text-sm font-medium text-foreground transition-colors hover:text-primary ${focusRing}`}
                  >
                    <Linkedin className="h-4 w-4 transition-transform duration-300 group-hover/li:-translate-y-0.5" />
                    View LinkedIn
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                )}
                <div className="mt-auto pt-6">
                  <button
                    ref={backButton}
                    type="button"
                    onClick={() => setFlipped(false)}
                    className={`group/btn inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-primary/30 hover:bg-accent ${focusRing}`}
                  >
                    <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover/btn:-translate-x-0.5" />
                    Back to Brand
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </article>
    </motion.li>
  )
}
