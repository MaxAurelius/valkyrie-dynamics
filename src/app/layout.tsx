import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Valkyrie Dynamics | Miniature Radar Systems for Drones',
  description: 'See the Unseen. All-weather miniature radar systems for autonomous drone operations.',
  keywords: ['radar', 'drone', 'FPV', 'defense', 'Ukraine', 'military', 'autonomous', 'ai', 'USA', 'EU'],
  authors: [{ name: 'Valkyrie Dynamics' }],
  
  openGraph: {
    title: 'Valkyrie Dynamics',
    description: 'See the Unseen. Miniature radar systems for drones.',
    url: 'https://valkyriedynamics.ai',
    siteName: 'Valkyrie Dynamics',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Valkyrie Dynamics',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico', // or '/favicon.ico'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Valkyrie Dynamics',
    description: 'See the Unseen. Miniature radar systems for drones.',
    images: ['/images/og-image.png'],
  },
  
  // REMOVED icons config - Next.js auto-detects from app folder
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}