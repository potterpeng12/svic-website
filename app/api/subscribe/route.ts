import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    const response = await fetch(
      "https://markjacoub.app.n8n.cloud/webhook-test/sunstone-innovation-subscribe-newsletter",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${Buffer.from(`user:3dqWk9xhBN16SOHghDhnmAZmkLXIgMxXYNbCQ`).toString("base64")}`,
        },
        body: JSON.stringify({ email }),
      }
    )

    if (!response.ok) {
      return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 })
  }
}
