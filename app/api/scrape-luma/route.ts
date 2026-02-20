import { NextResponse } from "next/server"

interface LumaEvent {
  name: string
  date: string
  time: string
  imageUrl: string
  url: string
}

export async function GET() {
  try {
    const response = await fetch("https://luma.com/sunstonestageconnects", {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      },
    })

    if (!response.ok) {
      return NextResponse.json({ error: "Failed to fetch Luma page" }, { status: 500 })
    }

    const html = await response.text()

    const events: LumaEvent[] = []

    // Extract direct event URLs (format: https://luma.com/XXXXXXXX)
    const eventUrlMatches = html.matchAll(/https:\/\/luma\.com\/([a-z0-9]{8})(?=["'\s<>])/gi)
    const eventUrls = Array.from(new Set(Array.from(eventUrlMatches).map((match) => match[0])))
      // Filter out the calendar page itself
      .filter((url) => !url.includes("sunstonestageconnects"))
      .slice(0, 3) // Limit to 3 events

    console.log(`[API Luma Scraper] Found ${eventUrls.length} event URLs`)

    // Extract event images
    const imageMatches = html.matchAll(
      /<img[^>]*src="(https:\/\/images\.lumacdn\.com\/event-covers\/[^"]+)"[^>]*>/g
    )
    const imageUrls = Array.from(imageMatches).map((match) => match[1])

    console.log(`[API Luma Scraper] Found ${imageUrls.length} images`)

    // Extract event titles
    const titleMatches = html.matchAll(
      /<h[1-6][^>]*>([^<]*(?:Sunstone Stage Connects|MedTech)[^<]*)<\/h[1-6]>/gi
    )
    const titles = Array.from(titleMatches).map((match) => match[1].trim())

    // Extract dates
    const dateMatches = html.matchAll(/([A-Z][a-z]+\s+\d{1,2},\s+\d{4})/g)
    const dates = Array.from(dateMatches).map((match) => match[1])

    // Extract times
    const timeMatches = html.matchAll(/(\d{1,2}:\d{2}\s+[AP]M\s*-\s*\d{1,2}:\d{2}\s+[AP]M)/g)
    const times = Array.from(timeMatches).map((match) => match[1])

    // If we have event URLs but no images (client-side rendered content),
    // use the known event data with scraped URLs
    if (eventUrls.length > 0 && imageUrls.length === 0) {
      const fallbackData = [
        {
          name: "Sunstone Stage Connects - MedTech",
          date: "February 20, 2026",
          time: "2:00 PM - 4:00 PM PT",
          imageUrl: "https://images.lumacdn.com/event-covers/j9/fdeb3199-e392-4ce6-abc3-184ee4704982.jpg",
        },
        {
          name: "Sunstone Stage Connects",
          date: "February 27, 2026",
          time: "2:00 PM - 4:00 PM PT",
          imageUrl: "https://images.lumacdn.com/event-covers/oe/9c6531fe-82e1-4b15-abca-15d808a392fd.png",
        },
        {
          name: "Sunstone Stage Connects",
          date: "March 6, 2026",
          time: "2:00 PM - 4:00 PM PT",
          imageUrl: "https://images.lumacdn.com/event-covers/oe/9c6531fe-82e1-4b15-abca-15d808a392fd.png",
        },
      ]

      for (let i = 0; i < Math.min(eventUrls.length, fallbackData.length); i++) {
        events.push({
          ...fallbackData[i],
          url: eventUrls[i],
        })
      }

      console.log(`[API Luma Scraper] Using fallback data with scraped URLs: ${events.length} events`)
      return NextResponse.json(events)
    }

    // Combine the data if we have both
    const maxEvents = Math.min(3, eventUrls.length, imageUrls.length)

    for (let i = 0; i < maxEvents; i++) {
      events.push({
        name: titles[i] || "Sunstone Stage Connects",
        date: dates[i] || "TBA",
        time: times[i] || "TBA",
        imageUrl: imageUrls[i] || "",
        url: eventUrls[i] || "https://luma.com/sunstonestageconnects",
      })
    }

    console.log(`[API Luma Scraper] Successfully extracted ${events.length} events`)

    return NextResponse.json(events)
  } catch (error) {
    console.error("Error in Luma scraper API:", error)
    return NextResponse.json({ error: "Failed to scrape Luma events" }, { status: 500 })
  }
}

// Configure edge runtime for better performance
export const runtime = "edge"
export const revalidate = 3600 // Cache for 1 hour
