import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "NourishJakarta - Fighting Hunger Together",
  description:
    "Connecting Jakarta communities with free meals and food assistance through AI-powered distribution and transparent donations.",
  keywords: "Jakarta, food assistance, hunger relief, community kitchen, meal distribution, donations",
  authors: [{ name: "NourishJakarta Team" }],
  openGraph: {
    title: "NourishJakarta - Fighting Hunger Together",
    description: "AI-powered food distribution platform connecting Jakarta communities with free meals",
    url: "https://nourishjakarta.org",
    siteName: "NourishJakarta",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NourishJakarta - Fighting Hunger Together",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NourishJakarta - Fighting Hunger Together",
    description: "AI-powered food distribution platform for Jakarta communities",
    images: ["/og-image.jpg"],
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#10B981",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="NourishJakarta" />
      </head>
      <body className={`${inter.className} antialiased bg-gray-50`}>{children}</body>
    </html>
  )
}
