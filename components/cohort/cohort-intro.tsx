"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { ImageIcon } from "lucide-react"
import type { CohortBrand } from "@/data/cohort-1"

type Phase = "gather" | "title" | "disperse"

const GATHER_STEP = 0.14
const TITLE_AT_MS = 2900
const DISPERSE_AT_MS = 4500
const REVEAL_GRID_AT_MS = 4800
const DONE_AT_MS = 6000

const EASE = [0.22, 1, 0.36, 1] as const

const tones = [
  "bg-white/[0.08] border-white/15",
  "bg-primary/25 border-primary/30",
  "bg-[hsl(var(--warm)/0.2)] border-[hsl(var(--warm)/0.3)]",
]

/* Deterministic, rounded values so server and client markup always match. */
function tileLayout(i: number, total: number) {
  const angle = (i / total) * Math.PI * 2 + 0.4
  const rotate = Math.round(Math.sin(i * 2.7) * 16)
  const ox = Math.round(Math.cos(i * 1.9) * 40) / 10
  const oy = Math.round(Math.sin(i * 2.3) * 40) / 10
  return {
    rotate,
    ox,
    oy,
    dx: Math.round(Math.cos(angle) * 70),
    dy: Math.round(Math.sin(angle) * 70),
  }
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
    const timers = [
      window.setTimeout(() => setPhase("title"), TITLE_AT_MS),
      window.setTimeout(() => setPhase("disperse"), DISPERSE_AT_MS),
      window.setTimeout(onRevealGrid, REVEAL_GRID_AT_MS),
      window.setTimeout(finish, DONE_AT_MS),
    ]
    return () => timers.forEach(window.clearTimeout)
  }, [finish, onRevealGrid])

  useEffect(() => {
    const previous = document.body.style.overflow
    document.body.style.overflow = "hidden"
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") finish()
    }
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener("keydown", onKey)
    }
  }, [finish])

  const dispersing = phase === "disperse"
  const showTitle = phase !== "gather"

  return (
    <motion.div
      className="cohort-intro fixed inset-0 z-[60] flex items-center justify-center overflow-hidden bg-[#0a0a1a]"
      role="dialog"
      aria-label="Cohort 1 introduction"
      initial={{ opacity: 1 }}
      animate={{ opacity: dispersing ? 0 : 1 }}
      transition={{ duration: 1.1, delay: dispersing ? 0.5 : 0, ease: "easeInOut" }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(271_81%_56%/0.18),transparent_60%)]" />

      <button
        type="button"
        onClick={finish}
        className="absolute right-5 top-5 z-20 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/80 backdrop-blur-sm transition-colors hover:bg-white/20 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 sm:right-8 sm:top-8"
      >
        Skip intro
      </button>

      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        {brands.map((brand, i) => {
          const { rotate, ox, oy, dx, dy } = tileLayout(i, brands.length)
          return (
            <motion.div
              key={brand.id}
              className={`absolute left-1/2 top-1/2 -ml-[4.5rem] -mt-[5.5rem] flex h-44 w-36 flex-col items-center justify-center gap-2 rounded-2xl border p-3 text-center shadow-2xl shadow-black/40 will-change-transform sm:-ml-24 sm:-mt-28 sm:h-56 sm:w-48 ${tones[i % tones.length]}`}
              initial={{ opacity: 0, scale: 0.55, x: `${ox}vw`, y: `${oy + 8}vh`, rotate: rotate - 14 }}
              animate={
                dispersing
                  ? {
                      opacity: 0,
                      scale: 1.2,
                      x: `${dx}vw`,
                      y: `${dy}vh`,
                      rotate: rotate * 1.8,
                    }
                  : { opacity: 1, scale: 1, x: `${ox}vw`, y: `${oy}vh`, rotate }
              }
              transition={
                dispersing
                  ? { duration: 1.1, delay: i * 0.02, ease: EASE }
                  : { duration: 0.7, delay: 0.2 + i * GATHER_STEP, ease: EASE }
              }
              style={{ zIndex: i }}
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
          )
        })}
      </div>

      <motion.div
        className="relative z-10 mx-6 flex flex-col items-center rounded-3xl bg-[#0a0a1a]/55 px-6 py-8 text-center backdrop-blur-md sm:px-12 sm:py-10"
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
    </motion.div>
  )
}
