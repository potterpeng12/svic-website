"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { animate, motion, type AnimationPlaybackControls } from "framer-motion"
import { ImageIcon } from "lucide-react"
import type { CohortBrand } from "@/data/cohort-1"

type Phase = "gather" | "title" | "disperse" | "landed"

type Target = { x: number; y: number; width: number; height: number }

const GATHER_STEP = 0.14
const TITLE_AT_MS = 2900
const DISPERSE_AT_MS = 4500
const LANDED_AT_MS = 5750
const DONE_AT_MS = 6150

const FLIGHT_SECONDS = 1.0
const FLIGHT_STAGGER = 0.02
const GRID_TOP_OFFSET = 112

const EASE = [0.22, 1, 0.36, 1] as const

const tones = [
  "bg-white/[0.08] border-white/15",
  "bg-primary/25 border-primary/30",
  "bg-[hsl(var(--warm)/0.2)] border-[hsl(var(--warm)/0.3)]",
]

/* Deterministic, rounded values so server and client markup always match. */
function tileLayout(i: number) {
  const rotate = Math.round(Math.sin(i * 2.7) * 16)
  const ox = Math.round(Math.cos(i * 1.9) * 40) / 10
  const oy = Math.round(Math.sin(i * 2.3) * 40) / 10
  return { rotate, ox, oy }
}

/*
 * Measures where each card will sit once the page has scrolled down to the grid,
 * expressed as an offset from the viewport center (where the tiles are anchored).
 */
function measureTargets(brands: CohortBrand[]) {
  const section = document.getElementById("cohort")
  const scrollY = window.scrollY
  const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight)
  const sectionTop = section ? section.getBoundingClientRect().top + scrollY : 0
  const scrollTarget = Math.min(maxScroll, Math.max(0, sectionTop - GRID_TOP_OFFSET))

  const targets: Record<string, Target> = {}
  for (const brand of brands) {
    const photo = document.querySelector<HTMLElement>(`[data-cohort-image="${brand.id}"]`)
    if (!photo) continue
    const rect = photo.getBoundingClientRect()
    targets[brand.id] = {
      x: Math.round(rect.left + rect.width / 2 - window.innerWidth / 2),
      y: Math.round(rect.top + scrollY - scrollTarget + rect.height / 2 - window.innerHeight / 2),
      width: Math.round(rect.width),
      height: Math.round(rect.height),
    }
  }
  return { targets, scrollTarget }
}

export function CohortIntro({
  brands,
  onRevealGrid,
  onDone,
}: {
  brands: CohortBrand[]
  onRevealGrid: () => void
  onDone: () => void
}) {
  const [phase, setPhase] = useState<Phase>("gather")
  const [targets, setTargets] = useState<Record<string, Target>>({})
  const finished = useRef(false)
  const scrollControls = useRef<AnimationPlaybackControls | null>(null)

  const finish = useCallback(() => {
    if (finished.current) return
    finished.current = true
    onRevealGrid()
    onDone()
  }, [onRevealGrid, onDone])

  useEffect(() => {
    const root = document.documentElement
    const previousBehavior = root.style.scrollBehavior
    const previousGutter = root.style.scrollbarGutter

    const startFlight = () => {
      const { targets: measured, scrollTarget } = measureTargets(brands)
      setTargets(measured)
      setPhase("disperse")
      root.style.scrollBehavior = "auto"
      scrollControls.current = animate(window.scrollY, scrollTarget, {
        duration: FLIGHT_SECONDS + 0.3,
        ease: EASE,
        onUpdate: (value) => window.scrollTo(0, value),
      })
    }

    const timers = [
      window.setTimeout(() => setPhase("title"), TITLE_AT_MS),
      window.setTimeout(startFlight, DISPERSE_AT_MS),
      window.setTimeout(() => {
        setPhase("landed")
        onRevealGrid()
      }, LANDED_AT_MS),
      window.setTimeout(finish, DONE_AT_MS),
    ]

    return () => {
      timers.forEach(window.clearTimeout)
      scrollControls.current?.stop()
      root.style.scrollBehavior = previousBehavior
      root.style.scrollbarGutter = previousGutter
    }
  }, [brands, finish, onRevealGrid])

  useEffect(() => {
    const root = document.documentElement
    const previousOverflow = document.body.style.overflow
    root.style.scrollbarGutter = "stable"
    document.body.style.overflow = "hidden"
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") finish()
    }
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", onKey)
    }
  }, [finish])

  const flying = phase === "disperse" || phase === "landed"
  const showTitle = phase === "title"

  return (
    <div
      className="cohort-intro fixed inset-0 z-[60] overflow-hidden"
      role="dialog"
      aria-label="Cohort 1 introduction"
    >
      <motion.div
        className="absolute inset-0 bg-[#0a0a1a]"
        initial={{ opacity: 1 }}
        animate={{ opacity: flying ? 0 : 1 }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(271_81%_56%/0.18),transparent_60%)]" />
      </motion.div>

      {!flying && (
        <button
          type="button"
          onClick={finish}
          className="absolute right-5 top-5 z-20 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/80 backdrop-blur-sm transition-colors hover:bg-white/20 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 sm:right-8 sm:top-8"
        >
          Skip intro
        </button>
      )}

      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        {brands.map((brand, i) => {
          const { rotate, ox, oy } = tileLayout(i)
          const target = targets[brand.id]
          const flightTarget = flying && target

          return (
            <motion.div
              key={brand.id}
              className="absolute left-1/2 top-1/2 h-0 w-0"
              initial={{ opacity: 0, scale: 0.55, x: `${ox}vw`, y: `${oy + 8}vh`, rotate: rotate - 14 }}
              animate={
                flightTarget
                  ? { opacity: phase === "landed" ? 0 : 1, scale: 1, x: target.x, y: target.y, rotate: 0 }
                  : { opacity: 1, scale: 1, x: `${ox}vw`, y: `${oy}vh`, rotate }
              }
              transition={
                phase === "landed"
                  ? { duration: 0.3, ease: "easeOut" }
                  : flightTarget
                    ? { duration: FLIGHT_SECONDS, delay: i * FLIGHT_STAGGER, ease: EASE }
                    : { duration: 0.7, delay: 0.2 + i * GATHER_STEP, ease: EASE }
              }
              style={{ zIndex: i }}
            >
              <motion.div
                className={`absolute left-0 top-0 flex h-44 w-36 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-2 rounded-2xl border p-3 text-center shadow-2xl shadow-black/40 sm:h-56 sm:w-48 ${tones[i % tones.length]}`}
                animate={flightTarget ? { width: target.width, height: target.height } : undefined}
                transition={{ duration: FLIGHT_SECONDS, delay: i * FLIGHT_STAGGER, ease: EASE }}
              >
                {brand.image ? (
                  <img
                    src={brand.image || "/placeholder.svg"}
                    alt=""
                    className={`h-full w-full rounded-xl ${brand.imageFit === "cover" ? "object-cover" : "object-contain"}`}
                  />
                ) : (
                  <>
                    <ImageIcon className="h-6 w-6 text-white/40" />
                    <span className="font-display text-[11px] font-semibold uppercase leading-tight tracking-wider text-white/60 text-balance sm:text-xs">
                      {brand.name.split(/[|–]/)[0].trim()}
                    </span>
                  </>
                )}
              </motion.div>
            </motion.div>
          )
        })}
      </div>

      <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
        <motion.div
          className="mx-6 flex flex-col items-center rounded-3xl bg-[#0a0a1a]/55 px-6 py-8 text-center backdrop-blur-md sm:px-12 sm:py-10"
          initial={{ opacity: 0, y: 16, scale: 0.96 }}
          animate={{
            opacity: showTitle ? 1 : 0,
            y: showTitle ? 0 : 16,
            scale: showTitle ? 1 : 0.96,
          }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/70 sm:text-xs">
            Sunstone Innovation · DTC Brand Lab
          </p>
          <h1 className="mt-4 font-display text-5xl font-bold tracking-tight text-white sm:text-7xl lg:text-8xl">
            {"Meet "}
            <span className="text-shimmer">Cohort 1</span>
          </h1>
        </motion.div>
      </div>
    </div>
  )
}
