export interface LumaEvent {
  name: string
  date: string
  time: string
  imageUrl: string
  url: string
}

export async function fetchLumaEvents(): Promise<LumaEvent[]> {
  try {
    // Determine the base URL based on environment
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ||
      (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000")

    const response = await fetch(`${baseUrl}/api/scrape-luma`, {
      cache: 'no-store', // Always fetch fresh data
    })

    if (!response.ok) {
      console.error("Failed to fetch Luma events from API")
      return getFallbackEvents()
    }

    const events = await response.json()

    if (!events || events.length === 0) {
      console.log("[Luma] No events returned from API, using fallback")
      return getFallbackEvents()
    }

    console.log(`[Luma] Successfully fetched ${events.length} events from API`)
    return events.slice(0, 3) // Limit to 3 events
  } catch (error) {
    console.error("Error fetching Luma events:", error)
    return getFallbackEvents()
  }
}

// Fallback events — only future events, filtered at runtime
function getFallbackEvents(): LumaEvent[] {
  const now = new Date()
  const allFallbacks: (LumaEvent & { startAt: string })[] = [
    {
      name: "Sunstone Stage Connects",
      date: "February 27, 2026",
      time: "2:00 PM - 4:00 PM PST",
      imageUrl: "https://images.lumacdn.com/event-covers/oe/9c6531fe-82e1-4b15-abca-15d808a392fd.png",
      url: "https://lu.ma/tp5aa2yr",
      startAt: "2026-02-27T22:00:00.000Z",
    },
    {
      name: "Sunstone Stage Connects",
      date: "March 6, 2026",
      time: "2:00 PM - 4:00 PM PST",
      imageUrl: "https://images.lumacdn.com/event-covers/oe/9c6531fe-82e1-4b15-abca-15d808a392fd.png",
      url: "https://lu.ma/0qdt37ny",
      startAt: "2026-03-06T22:00:00.000Z",
    },
  ]

  return allFallbacks
    .filter((e) => new Date(e.startAt) > now)
    .map(({ startAt, ...event }) => event)
}
