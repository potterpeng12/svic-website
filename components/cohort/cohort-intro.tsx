"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { ImageIcon } from "lucide-react"
import type { CohortBrand } from "@/data/cohort-1"

type Phase = "gather" | "disperse" | "landed"

const GATHER_STEP = 0.1
const DISPERSE_AT_MS = 2200
const LANDED_AT_MS = 3000
const REVEAL_AT_MS = 3450
const DONE_AT_MS = 3850

const EASE = [0.22, 1, 0.36, 1] as const

const tones = [
  "bg-white/[0.08] border-white/15",
  "bg-primary/25 border-primary/30",
  "bg-[hsl(var(--warm)/0.2)] border-[hsl(var(--warm)/0.3)]",
]

function tileLayout() {
  return { rotate: 0, ox: 0, oy: 0 }
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
  const finished = useRef(false)

  const finish = useCallback(() => {
    if (finished.current) return
    finished.current = true
    onRevealGrid()
    onDone()
  }, [onRevealGrid, onDone])

  useEffect(() => {
    const root = document.documentElement
    const previousGutter = root.style.scrollbarGutter

    const startFlight = () => {
      setPhase("disperse")
    }

    const timers = [
      window.setTimeout(startFlight, DISPERSE_AT_MS),
      window.setTimeout(() => setPhase("landed"), LANDED_AT_MS),
      window.setTimeout(onRevealGrid, REVEAL_AT_MS),
      window.setTimeout(finish, DONE_AT_MS),
    ]

    return () => {
      timers.forEach(window.clearTimeout)
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

  return (
    <div
      className="cohort-intro fixed inset-0 z-[60] overflow-hidden"
      role="dialog"
      aria-label="Cohort 1 introduction"
    >
      <motion.div
        className="absolute inset-0 bg-[#0a0a1a]"
        initial={{ opacity: 1 }}
        animate={{ opacity: phase === "landed" ? 0 : 1 }}
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
          const { rotate, ox, oy } = tileLayout()

          return (
            <motion.div
              key={brand.id}
              className="absolute left-1/2 top-1/2 h-0 w-0"
              initial={{ opacity: 0, scale: 0.2, x: `${ox}vw`, y: `${oy}vh`, rotate: 0 }}
              animate={{ opacity: phase === "landed" ? 0 : 1, scale: 1, x: `${ox}vw`, y: `${oy}vh`, rotate }}
              transition={
                phase === "landed"
                  ? { duration: 0.3, ease: "easeOut" }
                  : { duration: 0.55, delay: 0.15 + i * GATHER_STEP, ease: EASE }
              }
              style={{ zIndex: i }}
            >
              <motion.div
                className={`absolute left-0 top-0 flex h-44 w-44 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-2 overflow-hidden text-center sm:h-56 sm:w-56 ${brand.image ? "" : `border p-3 ${tones[i % tones.length]}`}`}

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
              </motion.div>
            </motion.div>
          )
        })}
      </div>

    </div>
  )
}
