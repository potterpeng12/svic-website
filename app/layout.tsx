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
    <html lang="en" className={`no-js bg-background ${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <head>
        {/* Remove the no-js flag as early as possible so reveal animations
            run when JS is available, but content stays visible when it isn't. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.remove('no-js')`,
          }}
        />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>{children}</body>
    </html>
  )
}
