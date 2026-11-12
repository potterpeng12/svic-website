"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { motion } from "framer-motion"
import { ImageIcon } from "lucide-react"
import type { CohortBrand } from "@/data/cohort-1"

const INTRO_BRAND_IDS = new Set([
  "caddix",
  "clean-saint",
  "dynomighty",
  "giraf-sleeptech",
  "goode-bites",
  "kamuel",
  "linea",
  "nad-and-me",
  "seaker-sun-co",
  "oculora",
  "taply",
  "zabaan",
])

const START_DELAY_MS = 150
const GATHER_STEP_MS = 420
const GATHER_SECONDS = 0.8
const VISIBLE_TICKS = 3
const FADE_OUT_MS = 500

// A 3x2 grid; any three consecutive tiles (all visible together) use different cells.
const SPOTS: Array<[number, number]> = [
  [-31, -21],
  [0, 21],
  [31, -21],
  [-31, 21],
  [0, -21],
  [31, 21],
]

const EASE = "cubic-bezier(0.22, 1, 0.36, 1)"

const tones = [
  "bg-white/[0.08] border-white/15",
  "bg-primary/25 border-primary/30",
  "bg-[hsl(var(--warm)/0.2)] border-[hsl(var(--warm)/0.3)]",
]

export function CohortIntro({
  brands: allBrands,
  onRevealGrid,
  onDone,
}: {
  brands: CohortBrand[]
  onRevealGrid: () => void
  onDone: () => void
}) {
  const brands = useMemo(() => allBrands.filter((brand) => INTRO_BRAND_IDS.has(brand.id)), [allBrands])
  const [tick, setTick] = useState(-1)
  const [fading, setFading] = useState(false)
  const finished = useRef(false)

  const finish = useCallback(() => {
    if (finished.current) return
    finished.current = true
    onRevealGrid()
    onDone()
  }, [onRevealGrid, onDone])

  useEffect(() => {
    const start = window.setTimeout(() => setTick(0), START_DELAY_MS)
    const interval = window.setInterval(() => setTick((t) => (t < 0 ? t : t + 1)), GATHER_STEP_MS)
    return () => {
      window.clearTimeout(start)
      window.clearInterval(interval)
    }
  }, [])

  useEffect(() => {
    // Fade out as the last photo starts to zoom away, so the page appears without a gap.
    const fadeAt = START_DELAY_MS + (brands.length + VISIBLE_TICKS - 1) * GATHER_STEP_MS
    const timers = [
      window.setTimeout(() => {
        setFading(true)
        onRevealGrid()
      }, fadeAt),
      window.setTimeout(finish, fadeAt + FADE_OUT_MS),
    ]
    return () => timers.forEach(window.clearTimeout)
  }, [brands.length, finish, onRevealGrid])

  useEffect(() => {
    const root = document.documentElement
    const previousGutter = root.style.scrollbarGutter
    const previousOverflow = document.body.style.overflow
    root.style.scrollbarGutter = "stable"
    document.body.style.overflow = "hidden"
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") finish()
    }
    window.addEventListener("keydown", onKey)
    return () => {
      root.style.scrollbarGutter = previousGutter
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", onKey)
    }
  }, [finish])

  return (
    <motion.div
      className="cohort-intro fixed inset-0 z-[60] overflow-hidden"
      role="dialog"
      aria-label="Cohort 1 introduction"
      initial={{ opacity: 1 }}
      animate={{ opacity: fading ? 0 : 1 }}
      transition={{ duration: FADE_OUT_MS / 1000, ease: "easeInOut" }}
    >
      <div className="absolute inset-0 bg-[#0a0a1a]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(271_81%_56%/0.18),transparent_60%)]" />
      </div>

      {!fading && (
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
          const [ox, oy] = SPOTS[i % SPOTS.length]
          const popped = tick >= i && tick < i + VISIBLE_TICKS

          return (
            <div
              key={brand.id}
              className="absolute left-1/2 top-1/2 h-0 w-0"
              style={{ transform: `translate(${ox}vw, ${oy}vh)`, zIndex: i }}
            >
              <div
                className="absolute left-0 top-0 h-0 w-0"
                style={{
                  opacity: popped ? 1 : 0,
                  transform: `scale(${popped ? 1 : 0.2})`,
                  transition: `opacity ${GATHER_SECONDS}s ${EASE}, transform ${GATHER_SECONDS}s ${EASE}`,
                }}
              >
                <div
                  className={`absolute left-0 top-0 flex h-[min(30vw,40vh)] w-[min(30vw,40vh)] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-2 overflow-hidden text-center ${brand.image ? "" : `border p-3 ${tones[i % tones.length]}`}`}
                >
                  {brand.image ? (
                    <img
                      src={brand.image || "/placeholder.svg"}
                      alt=""
                      className={`h-full w-full ${brand.imageFit === "cover" ? "object-cover" : "object-contain"}`}
                    />
                  ) : (
                    <>
                      <ImageIcon className="h-6 w-6 text-white/40" />
                      <span className="font-display text-[11px] font-semibold uppercase leading-tight tracking-wider text-white/60 text-balance sm:text-xs">
                        {brand.name.split(/[|–]/)[0].trim()}
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </motion.div>
  )
}
