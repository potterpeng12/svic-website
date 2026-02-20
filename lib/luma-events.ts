export interface LumaEvent {
  name: string
  date: string
  time: string
  imageUrl: string
  url: string
}

export async function fetchLumaEvents(): Promise<LumaEvent[]> {
  try {
    const response = await fetch("https://luma.com/sunstonestageconnects", {
      next: { revalidate: 3600 }, // Cache for 1 hour
    })

    if (!response.ok) {
      console.error("Failed to fetch Luma events")
      return getFallbackEvents()
    }

    const html = await response.text()

    // Extract event data from the HTML
    const events: LumaEvent[] = []

    // Parse events from the HTML (this is a simplified approach)
    // In production, you might want to use a proper HTML parser like cheerio
    const eventMatches = html.matchAll(
      /<img[^>]*src="(https:\/\/images\.lumacdn\.com\/event-covers\/[^"]+)"[^>]*>/g
    )

    const imageUrls = Array.from(eventMatches).map((match) => match[1])

    console.log(`[Luma Scraper] Found ${imageUrls.length} images`)

    // Extract event names and dates
    // This is a simplified extraction - you may need to adjust based on actual HTML structure
    const titleMatches = html.matchAll(
      /<h[1-6][^>]*>([^<]*(?:Sunstone Stage Connects|MedTech)[^<]*)<\/h[1-6]>/gi
    )

    const titles = Array.from(titleMatches).map((match) => match[1].trim())

    // Extract dates (looking for patterns like "February 20, 2026")
    const dateMatches = html.matchAll(
      /([A-Z][a-z]+\s+\d{1,2},\s+\d{4})/g
    )

    const dates = Array.from(dateMatches).map((match) => match[1])

    // Extract times (looking for patterns like "2:00 PM - 4:00 PM")
    const timeMatches = html.matchAll(
      /(\d{1,2}:\d{2}\s+[AP]M\s*-\s*\d{1,2}:\d{2}\s+[AP]M)/g
    )

    const times = Array.from(timeMatches).map((match) => match[1])

    // Combine the data (limit to 3 events)
    const maxEvents = Math.min(3, imageUrls.length, titles.length || imageUrls.length)

    for (let i = 0; i < maxEvents; i++) {
      events.push({
        name: titles[i] || "Sunstone Stage Connects",
        date: dates[i] || "TBA",
        time: times[i] || "TBA",
        imageUrl: imageUrls[i] || "",
        url: "https://luma.com/sunstonestageconnects",
      })
    }

    console.log(`[Luma Scraper] Extracted ${events.length} events`)

    // If scraping failed (0 events), use fallback
    if (events.length === 0) {
      console.log("[Luma Scraper] No events extracted, using fallback")
      return getFallbackEvents()
    }

    return events
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
      url: "https://luma.com/sunstonestageconnects",
    },
    {
      name: "Sunstone Stage Connects",
      date: "February 27, 2026",
      time: "2:00 PM - 4:00 PM PT",
      imageUrl: "https://images.lumacdn.com/event-covers/oe/9c6531fe-82e1-4b15-abca-15d808a392fd.png",
      url: "https://luma.com/sunstonestageconnects",
    },
    {
      name: "Sunstone Stage Connects",
      date: "March 6, 2026",
      time: "2:00 PM - 4:00 PM PT",
      imageUrl: "https://images.lumacdn.com/event-covers/oe/9c6531fe-82e1-4b15-abca-15d808a392fd.png",
      url: "https://luma.com/sunstonestageconnects",
    },
  ]
}
