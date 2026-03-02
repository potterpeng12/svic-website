import { NextRequest, NextResponse } from "next/server"

const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY
const MAILCHIMP_AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID
const MAILCHIMP_DC = MAILCHIMP_API_KEY?.split("-")[1] || "us12"

export async function POST(request: NextRequest) {
  console.log("[v0] Subscribe API called")
  
  try {
    const { email } = await request.json()
    console.log("[v0] Email received:", email)

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Please provide a valid email address" },
        { status: 400 }
      )
    }

    console.log("[v0] Mailchimp API Key exists:", !!MAILCHIMP_API_KEY)
    console.log("[v0] Mailchimp Audience ID exists:", !!MAILCHIMP_AUDIENCE_ID)
    console.log("[v0] Mailchimp DC:", MAILCHIMP_DC)

    if (!MAILCHIMP_API_KEY || !MAILCHIMP_AUDIENCE_ID) {
      console.error("[v0] Mailchimp credentials not configured")
      return NextResponse.json(
        { error: "Subscription service is not configured" },
        { status: 500 }
      )
    }

    const url = `https://${MAILCHIMP_DC}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members`
    console.log("[v0] Fetching Mailchimp URL:", url)
    
    const response = await fetch(url,
      {
        method: "POST",
        headers: {
          Authorization: `apikey ${MAILCHIMP_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email_address: email,
          status: "subscribed",
        }),
      }
    )

    const data = await response.json()

    if (!response.ok) {
      // Handle already subscribed case
      if (data.title === "Member Exists") {
        return NextResponse.json(
          { message: "You're already subscribed!" },
          { status: 200 }
        )
      }
      
      console.error("Mailchimp error:", data)
      return NextResponse.json(
        { error: data.detail || "Failed to subscribe" },
        { status: response.status }
      )
    }

    return NextResponse.json(
      { message: "Successfully subscribed!" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Subscription error:", error)
    return NextResponse.json(
      { error: "An error occurred. Please try again." },
      { status: 500 }
    )
  }
}
