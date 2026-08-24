import React from "react"
import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })

export const metadata: Metadata = {
  title: 'Sunstone Venture & Innovation Center',
  description: 'Empowering the next generation of founders through Innovation, Community, and Entrepreneurship.',
  icons: {
    icon: '/tab.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`bg-background ${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <head>
        {/* When JavaScript is unavailable, reveal animations never fire, so
            force all reveal content visible immediately. */}
        <noscript>
          <style>{`.reveal,.reveal-scale{opacity:1!important;transform:none!important;transition:none!important}`}</style>
        </noscript>
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>{children}</body>
    </html>
  )
}
