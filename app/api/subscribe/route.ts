import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const { email } = await request.json()

  if (!email || !email.includes("@")) {
    return NextResponse.json(
      { error: "A valid email address is required." },
      { status: 400 }
    )
  }

  const API_KEY = process.env.MAILCHIMP_API_KEY
  const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID

  if (!API_KEY || !AUDIENCE_ID) {
    return NextResponse.json(
      { error: "Newsletter service is not configured yet." },
      { status: 500 }
    )
  }

  // Extract the data center from the API key (e.g. "us12" from "xxx-us12")
  const dc = API_KEY.split("-").pop()

  const url = `https://${dc}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `apikey ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_address: email,
        status: "subscribed",
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      // Mailchimp returns "Member Exists" if already subscribed
      if (data.title === "Member Exists") {
        return NextResponse.json(
          { error: "You're already subscribed!" },
          { status: 400 }
        )
      }

      return NextResponse.json(
        { error: data.detail || "Something went wrong. Please try again." },
        { status: response.status }
      )
    }

    return NextResponse.json(
      { success: true, message: "Successfully subscribed!" },
      { status: 200 }
    )
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    )
  }
}
