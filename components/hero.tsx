"use client"

import React from "react"

import { useEffect, useState, useRef } from "react"
import { ArrowUpRight, ArrowDown, Play, Pause } from "lucide-react"

const rotatingWords = ["Innovation.", "Community.", "Entrepreneurship.", "Your Future."]

export function Hero() {
  const [wordIndex, setWordIndex] = useState(0)
  const [animState, setAnimState] = useState<"in" | "out">("in")
  const [loaded, setLoaded] = useState(false)
  const [isPlaying, setIsPlaying] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

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

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <section className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden bg-black">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
          style={{
            opacity: loaded ? 1 : 0,
            transition: "opacity 1.5s ease-in-out",
          }}
        >
          <source src="/images/video.mp4" type="video/mp4" />
        </video>

        {/* Gradient overlays for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
      </div>

      {/* Video Controls */}
      <button
        onClick={toggleVideo}
        className="absolute top-24 right-6 z-20 rounded-full border-2 border-white/20 bg-black/30 p-3 text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-black/50"
        aria-label={isPlaying ? "Pause video" : "Play video"}
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.8s 1s",
        }}
      >
        {isPlaying ? (
          <Pause className="h-5 w-5" />
        ) : (
          <Play className="h-5 w-5" />
        )}
      </button>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        {/* Main Headline */}
        <h1
          className="font-display font-bold leading-[0.95] tracking-[-0.04em] text-white"
          style={{
            fontSize: "clamp(3rem, 9vw, 7.5rem)",
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(40px)",
            transition: "all 1.2s cubic-bezier(0.22, 1, 0.36, 1) 0.2s",
            textShadow: "0 4px 24px rgba(0,0,0,0.4)",
          }}
        >
          <span className="block">We back</span>
          <style dangerouslySetInnerHTML={{
            __html: `
            @keyframes fluid-flow {
              0% { background-position: 0% 50%; }
              100% { background-position: -200% 50%; }
            }
          `}} />
          <span
            className="block pb-2 bg-clip-text text-transparent font-black"
            style={{
              backgroundImage: "linear-gradient(to right, #FFB01F 0%, #A855F7 33%, #FF2E93 66%, #FFB01F 100%)",
              backgroundSize: "200% auto",
              animation: "fluid-flow 3s linear infinite",
              filter: "drop-shadow(0 0 40px rgba(255,255,255,0.7)) drop-shadow(0 0 80px rgba(168, 85, 247, 0.5))"
            }}
          >
            innovative founders
          </span>
        </h1>

        {/* Rotating word with elegant lines */}
        <div
          className="mt-10 flex items-center justify-center gap-4"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transition: "all 1s cubic-bezier(0.22, 1, 0.36, 1) 0.5s",
          }}
        >
          <div className="h-[1px] w-12 rounded-full bg-white/30 sm:w-20" />
          <div className="relative h-10 overflow-hidden sm:h-12">
            <p
              className={`font-display text-xl font-semibold text-white/90 sm:text-2xl ${animState === "in" ? "animate-word-in" : "animate-word-out"
                }`}
              style={{ textShadow: "0 2px 12px rgba(0,0,0,0.3)" }}
            >
              {rotatingWords[wordIndex]}
            </p>
          </div>
          <div className="h-[1px] w-12 rounded-full bg-white/30 sm:w-20" />
        </div>

        {/* Subtitle */}
        <p
          className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transition: "all 1s cubic-bezier(0.22, 1, 0.36, 1) 0.7s",
            textShadow: "0 2px 12px rgba(0,0,0,0.4)",
          }}
        >
          Sunstone Venture & Innovation Center empowers founders with capital,
          ecosystem connections, and a community built on resilience.
        </p>

        {/* CTAs */}
        <div
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transition: "all 1s cubic-bezier(0.22, 1, 0.36, 1) 0.9s",
          }}
        >
          <a
            href="#apply"
            className="group inline-flex items-center gap-2.5 rounded-full bg-white px-9 py-4 text-base font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20"
          >
            Get Access
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/10 px-9 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/50 hover:bg-white/20"
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
          transition: "opacity 1s 1.4s",
        }}
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
          Scroll
        </span>
        <a href="#about" aria-label="Scroll down">
          <ArrowDown className="h-4 w-4 animate-bounce text-white/50" />
        </a>
      </div>
    </section >
  )
}
