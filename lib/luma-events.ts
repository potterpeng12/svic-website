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
      next: { revalidate: 3600 }, // Cache for 1 hour
    })

    if (!response.ok) {
      console.error("Failed to fetch Luma events from API")
      return getFallbackEvents()
    }

    const events = await response.json()

    if (!events || events.length === 0) {
      console.log("[Luma Scraper] No events returned from API, using fallback")
      return getFallbackEvents()
    }

    console.log(`[Luma Scraper] Successfully fetched ${events.length} events from API`)
    return events.slice(0, 3) // Limit to 3 events
  } catch (error) {
    console.error("Error fetching Luma events:", error)
    return getFallbackEvents()
  }
}

// Fallback events based on the last known Luma page content
function getFallbackEvents(): LumaEvent[] {
  return [
    {
      name: "Sunstone Stage Connects - MedTech",
      date: "February 20, 2026",
      time: "2:00 PM - 4:00 PM PT",
      imageUrl: "https://images.lumacdn.com/event-covers/j9/fdeb3199-e392-4ce6-abc3-184ee4704982.jpg",
      url: "https://luma.com/04lsdpj2",
    },
    {
      name: "Sunstone Stage Connects",
      date: "February 27, 2026",
      time: "2:00 PM - 4:00 PM PT",
      imageUrl: "https://images.lumacdn.com/event-covers/oe/9c6531fe-82e1-4b15-abca-15d808a392fd.png",
      url: "https://luma.com/tp5aa2yr",
    },
    {
      name: "Sunstone Stage Connects",
      date: "March 6, 2026",
      time: "2:00 PM - 4:00 PM PT",
      imageUrl: "https://images.lumacdn.com/event-covers/oe/9c6531fe-82e1-4b15-abca-15d808a392fd.png",
      url: "https://luma.com/0qdt37ny",
    },
  ]
}
