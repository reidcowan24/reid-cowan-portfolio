import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Reid Cowan — Taking Stayd to the moon',
  description:
    'For consideration: Director of GTM, Homeowner Acquisition — Stayd Collective. One builder. One engine. Eight brands launching simultaneously.',
  openGraph: {
    title: 'Reid Cowan — Taking Stayd to the moon',
    description:
      'One builder. One engine. Eight brands launching simultaneously.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@500,700,800,900&f[]=general-sans@400,500,600,700&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          type="image/svg+xml"
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect x='2' y='2' width='28' height='28' rx='8' fill='%2300E89A'/%3E%3Ccircle cx='16' cy='16' r='6' fill='%2308090D'/%3E%3C/svg%3E"
        />
        <link
          rel="apple-touch-icon"
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect x='2' y='2' width='28' height='28' rx='8' fill='%2300E89A'/%3E%3Ccircle cx='16' cy='16' r='6' fill='%2308090D'/%3E%3C/svg%3E"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
