export interface LumaEvent {
  name: string
  date: string
  time: string
  imageUrl: string
  url: string
}

interface LumaApiEvent {
  event: {
    name: string
    start_at: string
    end_at: string
    cover_url: string
    url: string
    timezone: string
  }
}

interface LumaApiResponse {
  data: {
    featured_items: LumaApiEvent[]
  }
}

function formatDate(isoString: string, timezone: string): string {
  const date = new Date(isoString)
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: timezone,
  })
}

function formatTime(startIso: string, endIso: string, timezone: string): string {
  const start = new Date(startIso)
  const end = new Date(endIso)

  const startTime = start.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: timezone,
  })

  const endTime = end.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: timezone,
  })

  const tzAbbr = start
    .toLocaleTimeString("en-US", {
      timeZoneName: "short",
      timeZone: timezone,
    })
    .split(" ")
    .pop()

  return `${startTime} - ${endTime} ${tzAbbr}`
}

/**
 * Fetches upcoming events directly from the Luma API.
 * This runs server-side in the Server Component — no need for an intermediary API route.
 */
export async function fetchLumaEvents(): Promise<LumaEvent[]> {
  try {
    const response = await fetch("https://api.lu.ma/url?url=sunstoneinnovation", {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        Accept: "application/json",
      },
      cache: "no-store", // Always fetch fresh data
    })

    if (!response.ok) {
      console.error("[Luma] Failed to fetch Luma API, status:", response.status)
      return getFallbackEvents()
    }

    const json: LumaApiResponse = await response.json()
    const featuredItems = json?.data?.featured_items

    if (!featuredItems || featuredItems.length === 0) {
      console.log("[Luma] No featured events returned from API, using fallback")
      return getFallbackEvents()
    }

    // Filter to only truly upcoming events (start_at > now)
    const now = new Date()
    const upcomingItems = featuredItems.filter(
      (item) => new Date(item.event.start_at) > now
    )

    if (upcomingItems.length === 0) {
      console.log("[Luma] No upcoming events after date filter, using fallback")
      return getFallbackEvents()
    }

    // Sort by start date (earliest first)
    upcomingItems.sort(
      (a, b) => new Date(a.event.start_at).getTime() - new Date(b.event.start_at).getTime()
    )

    const events: LumaEvent[] = upcomingItems.slice(0, 3).map((item) => {
      const { event } = item
      const timezone = event.timezone || "America/Los_Angeles"

      return {
        name: event.name,
        date: formatDate(event.start_at, timezone),
        time: formatTime(event.start_at, event.end_at, timezone),
        imageUrl: event.cover_url || "",
        url: `https://lu.ma/${event.url}`,
      }
    })

    console.log(`[Luma] Successfully fetched ${events.length} upcoming events`)
    return events
  } catch (error) {
    console.error("[Luma] Error fetching events:", error)
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
