"use client"

import React, { useState, useEffect, useCallback } from "react"
import { useReveal } from "@/hooks/use-reveal"
import { getEventImages } from "@/lib/events-utils"
import Image from "next/image"

const allEventImages = getEventImages()
const INITIAL_DELAY = 500 // Wait 8 seconds before first rotation
const ROTATION_INTERVAL = 30000 // Time between starting new rotations (30 seconds - 2X slower)
const IMAGE_SWAP_INTERVAL = 2400 // Time between each individual image swap (2.4 seconds - 2X slower)
const FADE_OUT_DURATION = 3000 // Old image fades out over 3 seconds
const FADE_IN_DURATION = 3000 // New image fades in over 3 seconds

// Layout configurations - each defines a unique bento pattern
type LayoutConfig = {
  imageIndices: number[]
  layout: string[]
}

// Decorative tile color variations for visual balance
const decorativeTiles = [
  { gradient: "from-primary/15 via-primary/20 to-primary/15" },
  { gradient: "from-primary/10 via-primary/25 to-primary/10" },
  { gradient: "from-primary/20 via-primary/15 to-primary/20" },
  { gradient: "from-primary/12 via-primary/22 to-primary/18" },
]

// Define multiple beautiful layout patterns with decorative tiles
const layoutPatterns: string[][] = [
  // Layout 1: Featured large + varied small (9 images + 2 decorative)
  [
    "col-span-2 row-span-2", // 0: Large featured - IMAGE
    "col-span-1 row-span-1", // 1: Small - IMAGE
    "col-span-1 row-span-1", // 2: Small - IMAGE
    "col-span-1 row-span-2", // 3: Tall - IMAGE
    "col-span-1 row-span-1", // 4: Small - IMAGE
    "col-span-2 row-span-1", // 5: Wide - IMAGE
    "col-span-1 row-span-1", // 6: Small - DECORATIVE
    "col-span-1 row-span-1", // 7: Small - IMAGE
    "col-span-1 row-span-2", // 8: Tall - IMAGE
    "col-span-2 row-span-1", // 9: Wide - IMAGE
    "col-span-1 row-span-1", // 10: Small - DECORATIVE
    "col-span-1 row-span-1", // 11: Small - IMAGE
  ],
  // Layout 2: Centered large with symmetry (9 images + 1 decorative)
  [
    "col-span-1 row-span-1", // 0: Small - IMAGE
    "col-span-2 row-span-2", // 1: Large featured - IMAGE
    "col-span-1 row-span-1", // 2: Small - IMAGE
    "col-span-1 row-span-2", // 3: Tall - IMAGE
    "col-span-1 row-span-1", // 4: Small - DECORATIVE
    "col-span-1 row-span-1", // 5: Small - IMAGE
    "col-span-1 row-span-2", // 6: Tall - IMAGE
    "col-span-2 row-span-1", // 7: Wide - IMAGE
    "col-span-1 row-span-1", // 8: Small - IMAGE
    "col-span-1 row-span-1", // 9: Small - IMAGE
    "col-span-2 row-span-1", // 10: Wide - IMAGE
  ],
  // Layout 3: Multiple focal points (9 images + 1 decorative)
  [
    "col-span-1 row-span-2", // 0: Tall - IMAGE
    "col-span-1 row-span-1", // 1: Small - IMAGE
    "col-span-2 row-span-2", // 2: Large - IMAGE
    "col-span-1 row-span-1", // 3: Small - DECORATIVE
    "col-span-2 row-span-1", // 4: Wide - IMAGE
    "col-span-1 row-span-1", // 5: Small - IMAGE
    "col-span-1 row-span-1", // 6: Small - IMAGE
    "col-span-1 row-span-2", // 7: Tall - IMAGE
    "col-span-2 row-span-1", // 8: Wide - IMAGE
    "col-span-1 row-span-1", // 9: Small - IMAGE
    "col-span-1 row-span-1", // 10: Small - IMAGE
  ],
  // Layout 4: Dynamic asymmetric (10 images + 2 decorative)
  [
    "col-span-2 row-span-1", // 0: Wide - IMAGE
    "col-span-1 row-span-2", // 1: Tall - IMAGE
    "col-span-1 row-span-1", // 2: Small - IMAGE
    "col-span-1 row-span-1", // 3: Small - DECORATIVE
    "col-span-2 row-span-2", // 4: Large - IMAGE
    "col-span-1 row-span-1", // 5: Small - IMAGE
    "col-span-1 row-span-1", // 6: Small - IMAGE
    "col-span-1 row-span-2", // 7: Tall - IMAGE
    "col-span-1 row-span-1", // 8: Small - DECORATIVE
    "col-span-2 row-span-1", // 9: Wide - IMAGE
    "col-span-1 row-span-1", // 10: Small - IMAGE
    "col-span-1 row-span-1", // 11: Small - IMAGE
  ],
]

// Decorative tile positions for each layout (which slot indices are decorative)
const decorativeSlots: number[][] = [
  [6, 10],    // Layout 1
  [4],        // Layout 2
  [3],        // Layout 3
  [3, 8],     // Layout 4
]

export function Events() {
  const containerRef = useReveal()
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [currentLayoutIndex, setCurrentLayoutIndex] = useState(0)
  const [currentLayout, setCurrentLayout] = useState<LayoutConfig>(() => {
    // Initial layout with first N images
    const pattern = layoutPatterns[0]
    return {
      imageIndices: Array.from({ length: pattern.length }, (_, i) => i),
      layout: pattern
    }
  })
  const [nextLayout, setNextLayout] = useState<LayoutConfig | null>(null)
  const [fadingInSlots, setFadingInSlots] = useState<Set<number>>(new Set())
  const [showingNextSlots, setShowingNextSlots] = useState<Set<number>>(new Set())
  const [usedImageIndices, setUsedImageIndices] = useState<Set<number>>(
    new Set(Array.from({ length: layoutPatterns[0].length }, (_, i) => i))
  )

  // Generate next layout with new images - ensure each slot gets a different image
  const generateNextLayout = useCallback(() => {
    const nextPatternIndex = (currentLayoutIndex + 1) % layoutPatterns.length
    const pattern = layoutPatterns[nextPatternIndex]
    const newImageIndices: number[] = []

    // For each slot, pick a different image than what's currently there
    for (let slotIndex = 0; slotIndex < pattern.length; slotIndex++) {
      const currentImageInSlot = currentLayout.imageIndices[slotIndex]

      // Get all images except the current one in this slot and already picked ones
      const available = allEventImages
        .map((_, idx) => idx)
        .filter(idx =>
          idx !== currentImageInSlot && // Different from current
          !newImageIndices.includes(idx) // Not already used in new layout
        )

      if (available.length > 0) {
        // Pick random from available
        const randomIdx = Math.floor(Math.random() * available.length)
        newImageIndices.push(available[randomIdx])
      } else {
        // Fallback: pick any image different from current (even if duplicate in layout)
        const fallback = allEventImages
          .map((_, idx) => idx)
          .filter(idx => idx !== currentImageInSlot)

        const randomIdx = Math.floor(Math.random() * fallback.length)
        newImageIndices.push(fallback[randomIdx])
      }
    }

    return {
      imageIndices: newImageIndices,
      layout: pattern,
      patternIndex: nextPatternIndex
    }
  }, [currentLayoutIndex, currentLayout.imageIndices])

  // Rotate to new layout - gradually swap images one by one
  const rotateLayout = useCallback(() => {
    const next = generateNextLayout()

    // Set the complete next layout
    setNextLayout({
      imageIndices: next.imageIndices,
      layout: next.layout
    })

    // Shuffle slot indices to create random transition order
    const slotOrder = Array.from({ length: currentLayout.imageIndices.length }, (_, i) => i)
      .sort(() => Math.random() - 0.5)

    // Gradually transition each slot
    slotOrder.forEach((slotIndex, sequenceIndex) => {
      setTimeout(() => {
        // Step 1: Mount the next image layer (invisible at opacity-0)
        setShowingNextSlots(prev => new Set(prev).add(slotIndex))

        // Step 2: Wait a frame for DOM to render, then start fading in new image
        // Old image stays visible underneath (no fade out) to prevent white flash

        // Step 3: Start fading in new image immediately (full 3s fade in, overlapping with fade out)
        setTimeout(() => {
          setFadingInSlots(prev => new Set(prev).add(slotIndex))
        }, 100)

        // Step 4: After transition complete, commit the swap
        setTimeout(() => {
          setCurrentLayout(prev => {
            const updated = { ...prev }
            updated.imageIndices = [...prev.imageIndices]
            updated.layout = [...prev.layout]
            updated.imageIndices[slotIndex] = next.imageIndices[slotIndex]
            updated.layout[slotIndex] = next.layout[slotIndex]
            return updated
          })
        }, FADE_IN_DURATION + 50)

        // Step 5: After new image fully faded in, clean up fading state but keep showing
        setTimeout(() => {
          setFadingInSlots(prev => {
            const updated = new Set(prev)
            updated.delete(slotIndex)
            return updated
          })
          // Don't remove from showingNextSlots yet - keep it visible
        }, FADE_IN_DURATION + 100)

        // Step 6: Only clean up after we're sure the current layout has been updated
        setTimeout(() => {
          setShowingNextSlots(prev => {
            const updated = new Set(prev)
            updated.delete(slotIndex)
            return updated
          })
        }, FADE_IN_DURATION + 500)
      }, sequenceIndex * IMAGE_SWAP_INTERVAL)
    })

    // Clean up after all transitions complete
    setTimeout(() => {
      setNextLayout(null)
      setCurrentLayoutIndex(next.patternIndex)
      setUsedImageIndices(prev => {
        const newSet = new Set(prev)
        next.imageIndices.forEach(idx => newSet.add(idx))
        return newSet
      })
    }, slotOrder.length * IMAGE_SWAP_INTERVAL + FADE_OUT_DURATION + FADE_IN_DURATION)
  }, [generateNextLayout, currentLayout.imageIndices.length])

  // Auto-rotate layouts with initial delay
  useEffect(() => {
    // Wait for initial images to load before starting rotation
    const initialTimeout = setTimeout(() => {
      rotateLayout()
    }, INITIAL_DELAY)

    // Set up regular interval
    const interval = setInterval(() => {
      rotateLayout()
    }, ROTATION_INTERVAL)

    return () => {
      clearTimeout(initialTimeout)
      clearInterval(interval)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) // Empty deps - only run once on mount

  return (
    <section id="events" className="relative overflow-hidden py-28 lg:py-36" ref={containerRef}>
      <div className="pointer-events-none absolute inset-0 bg-background" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="reveal mb-16 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-primary">Events</p>
            <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Building <span className="italic text-primary">together.</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            From pitch competitions to networking events, we bring the startup community together.
          </p>
        </div>

        {/* Bento Grid with Proper Crossfade */}
        <div className="reveal reveal-delay-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[240px]">
          {currentLayout.imageIndices.map((imageIndex, slotIndex) => {
            const layoutClass = currentLayout.layout[slotIndex]
            // const isFadingOut = fadingOutSlots.has(slotIndex) // Removed
            const isFadingIn = fadingInSlots.has(slotIndex)
            const isDecorative = decorativeSlots[currentLayoutIndex]?.includes(slotIndex)
            const decorTile = isDecorative ? decorativeTiles[slotIndex % decorativeTiles.length] : null

            // Get next content if available
            const nextImageIndex = nextLayout?.imageIndices[slotIndex]
            const nextIsDecorative = nextLayout ? decorativeSlots[(currentLayoutIndex + 1) % layoutPatterns.length]?.includes(slotIndex) : false
            const nextDecorTile = nextIsDecorative ? decorativeTiles[slotIndex % decorativeTiles.length] : null

            const isTransitioning = showingNextSlots.has(slotIndex)
            const nextLayoutClass = nextLayout?.layout[slotIndex]

            // Helper function to extract grid spans safely
            const getGridColumn = (className?: string) => {
              if (!className) return 'span 1'
              return className.includes('col-span-2') ? 'span 2' : 'span 1'
            }
            const getGridRow = (className?: string) => {
              if (!className) return 'span 1'
              return className.includes('row-span-2') ? 'span 2' : 'span 1'
            }

            return (
              <div
                key={`slot-${slotIndex}`}
                className={`relative`}
                style={{
                  gridColumn: isTransitioning && nextLayoutClass ? getGridColumn(nextLayoutClass) : getGridColumn(layoutClass),
                  gridRow: isTransitioning && nextLayoutClass ? getGridRow(nextLayoutClass) : getGridRow(layoutClass),
                  transition: 'all 3s ease-in-out'
                }}
              >
                {/* Layer 1: Current content - fades out when transitioning */}
                <div
                  className={`absolute inset-0 overflow-hidden rounded-2xl border ${isDecorative ? 'border-primary/30' : 'border-border'
                    } z-10`}
                  style={{
                    opacity: isTransitioning ? 0 : 1,
                    transition: 'opacity 3s ease-in-out'
                  }}
                  onClick={() => !isDecorative && setSelectedImage(allEventImages[imageIndex])}
                >
                  {isDecorative ? (
                    <div className={`absolute inset-0 bg-gradient-to-br ${decorTile?.gradient}`} />
                  ) : imageIndex !== undefined && !isNaN(imageIndex) && allEventImages[imageIndex] ? (
                    <Image
                      src={allEventImages[imageIndex]}
                      alt={`Event ${imageIndex + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  ) : (
                    <div className={`absolute inset-0 bg-gradient-to-br from-primary/12 via-primary/18 to-primary/12`} />
                  )}
                </div>

                {/* Layer 2: Next content - only render when this specific slot is transitioning */}
                {showingNextSlots.has(slotIndex) && nextLayout && (
                  <div
                    className={`absolute inset-0 overflow-hidden rounded-2xl border ${nextIsDecorative ? 'border-primary/30' : 'border-border'
                      } z-30 ${isFadingIn ? 'pointer-events-auto' : 'pointer-events-none'}`}
                    style={{
                      opacity: isFadingIn ? 1 : 0,
                      transition: 'opacity 3s ease-in-out'
                    }}
                    onClick={() => !nextIsDecorative && nextImageIndex !== undefined && !isNaN(nextImageIndex) && setSelectedImage(allEventImages[nextImageIndex])}
                  >
                    {nextIsDecorative ? (
                      <div className={`absolute inset-0 bg-gradient-to-br ${nextDecorTile?.gradient}`} />
                    ) : nextImageIndex !== undefined && !isNaN(nextImageIndex) && allEventImages[nextImageIndex] ? (
                      <Image
                        src={allEventImages[nextImageIndex]}
                        alt={`Event ${nextImageIndex + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      />
                    ) : (
                      <div className={`absolute inset-0 bg-gradient-to-br from-primary/12 via-primary/18 to-primary/12`} />
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/80 hover:text-white text-4xl font-light leading-none transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            ×
          </button>
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full">
            <Image
              src={selectedImage}
              alt="Event detail"
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>
        </div>
      )}
    </section>
  )
}
