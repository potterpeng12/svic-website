"use client"

import React from "react"

import { useEffect, useState, useCallback, useRef } from "react"
import { ArrowUpRight, ArrowDown } from "lucide-react"

const rotatingWords = ["Innovation.", "Community.", "Entrepreneurship.", "Your Future."]

export function Hero() {
  const [wordIndex, setWordIndex] = useState(0)
  const [animState, setAnimState] = useState<"in" | "out">("in")
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [loaded, setLoaded] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimState("out")
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % rotatingWords.length)
        setAnimState("in")
      }, 400)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!sectionRef.current) return
    const rect = sectionRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setMousePos({ x: x * 30, y: y * 30 })
  }, [])

  return (
    <section
      ref={sectionRef}
      className="grain relative flex min-h-[100dvh] items-center justify-center overflow-hidden px-6 pt-28 pb-12"
      onMouseMove={handleMouseMove}
    >
      {/* Animated blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="animate-blob absolute top-[15%] right-[10%] h-[400px] w-[400px] bg-primary/[0.06] blur-3xl"
          style={{ transform: `translate(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px)` }}
        />
        <div
          className="animate-blob-delay absolute bottom-[15%] left-[5%] h-[500px] w-[500px] bg-[hsl(var(--warm))]/[0.06] blur-3xl"
          style={{ transform: `translate(${mousePos.x * -0.3}px, ${mousePos.y * -0.3}px)` }}
        />
        <div
          className="animate-blob-delay-2 absolute top-[40%] left-[40%] h-[300px] w-[300px] bg-primary/[0.03] blur-3xl"
        />
      </div>

      {/* Fun sticker badges floating around */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        <div
          className="sticker animate-float-slow absolute top-[18%] left-[6%] rounded-2xl border-2 border-primary/20 bg-background px-4 py-2 text-sm font-bold text-primary shadow-xl"
          style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.8s 0.5s" }}
        >
          Pre-Seed & Seed
        </div>
        <div
          className="sticker animate-float-medium absolute top-[22%] right-[8%] rounded-2xl border-2 border-[hsl(var(--warm))]/30 bg-secondary px-4 py-2 text-sm font-bold text-secondary-foreground shadow-xl"
          style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.8s 0.8s" }}
        >
          120+ Companies
        </div>
        <div
          className="sticker animate-float-slow absolute bottom-[22%] right-[12%] rounded-2xl border-2 border-primary/20 bg-accent px-4 py-2 text-sm font-bold text-accent-foreground shadow-xl"
          style={{ animationDelay: "1s", opacity: loaded ? 1 : 0, transition: "opacity 0.8s 1.1s" }}
        >
          Physical AI / MedTech
        </div>
        <div
          className="sticker animate-float-medium absolute bottom-[28%] left-[8%] rounded-2xl border-2 border-[hsl(var(--warm))]/30 bg-secondary px-4 py-2 text-sm font-bold text-secondary-foreground shadow-xl"
          style={{ animationDelay: "2s", opacity: loaded ? 1 : 0, transition: "opacity 0.8s 1.4s" }}
        >
          $50M+ Deployed
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        {/* Mega headline */}
        <h1
          className="font-display font-bold leading-[0.9] tracking-[-0.04em] text-foreground"
          style={{
            fontSize: "clamp(3.2rem, 10vw, 8.5rem)",
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(40px)",
            transition: "all 1s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          <span className="block">We back</span>
          <span className="block text-shimmer">bold founders</span>
        </h1>

        {/* Rotating word with line */}
        <div
          className="mt-8 flex items-center justify-center gap-4"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.3s",
          }}
        >
          <div className="h-[2px] w-10 rounded-full bg-foreground/10 sm:w-16" />
          <div className="relative h-10 overflow-hidden sm:h-12">
            <p
              className={`font-display text-xl font-semibold text-primary sm:text-2xl ${
                animState === "in" ? "animate-word-in" : "animate-word-out"
              }`}
            >
              {rotatingWords[wordIndex]}
            </p>
          </div>
          <div className="h-[2px] w-10 rounded-full bg-foreground/10 sm:w-16" />
        </div>

        {/* Subtitle */}
        <p
          className="mx-auto mt-8 max-w-md text-lg leading-relaxed text-muted-foreground"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.5s",
          }}
        >
          Sunstone Venture & Innovation Center empowers founders with capital,
          ecosystem connections, and a community built on resilience.
        </p>

        {/* CTAs */}
        <div
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.7s",
          }}
        >
          <a
            href="#apply"
            className="group inline-flex items-center gap-2.5 rounded-full bg-foreground px-8 py-4 text-base font-semibold text-background transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-foreground/10"
          >
            Apply for Capital
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-full border-2 border-foreground/10 bg-transparent px-8 py-4 text-base font-semibold text-foreground transition-all duration-300 hover:border-foreground/20 hover:bg-foreground/[0.02]"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 1s 1.2s",
        }}
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground/60">
          Scroll
        </span>
        <a href="#about" aria-label="Scroll down">
          <ArrowDown className="h-4 w-4 animate-bounce text-muted-foreground/40" />
        </a>
      </div>
    </section>
  )
}
