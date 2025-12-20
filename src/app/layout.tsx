import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Valkyrie Dynamics | Miniature Radar Systems for Drones',
  description:
    'See the Unseen. All-weather miniature radar systems for autonomous drone operations.',

  keywords: [
    'radar',
    'drone',
    'FPV',
    'defense',
    'autonomous',
    'AI',
    'military',
  ],

  authors: [{ name: 'Valkyrie Dynamics' }],

  metadataBase: new URL('https://valkyriedynamics.ai'),

  openGraph: {
    title: 'Valkyrie Dynamics',
    description:
      'See the Unseen. Miniature radar systems for autonomous drone operations.',
    url: 'https://valkyriedynamics.ai',
    siteName: 'Valkyrie Dynamics',
    images: [
      {
        url: '/images/og-image.png', // IMPORTANT: use a REAL OG image
        width: 1200,
        height: 630,
        alt: 'Valkyrie Dynamics',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Valkyrie Dynamics',
    description:
      'See the Unseen. Miniature radar systems for autonomous drone operations.',
    images: ['/images/og-image.png'],
  },
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
