import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Space_Mono, Plus_Jakarta_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _spaceMono = Space_Mono({ weight: ["400", "700"], subsets: ["latin"] });
const _plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Ivan Jerad Manamperi - Product Builder',
  description: 'Computer Science student building products from concept to deployment. Planning, designing, developing, and refining solutions.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${_plusJakarta.className} antialiased bg-white text-gray-900`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
