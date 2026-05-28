import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Space_Mono, Plus_Jakarta_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { CustomCursor } from '@/components/custom-cursor'
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
    <html lang="en" className="dark">
      <body className={`${_plusJakarta.className} antialiased bg-[#000000] text-[#ffffff]`}>
        <CustomCursor />
        <div className="marquee-ribbon-wrapper">
          <div className="marquee-track">
            <span>PRODUCT BUILDER</span>
            <span className="dot">•</span>
            <span>FULL-STACK DEVELOPMENT</span>
            <span className="dot">•</span>
            <span>UI/UX BLUEPRINTS</span>
            <span className="dot">•</span>
            <span>SYSTEM INTEGRITY VALIDATION</span>
            <span className="dot">•</span>
            
            <span>PRODUCT BUILDER</span>
            <span className="dot">•</span>
            <span>FULL-STACK DEVELOPMENT</span>
            <span className="dot">•</span>
            <span>UI/UX BLUEPRINTS</span>
            <span className="dot">•</span>
            <span>SYSTEM INTEGRITY VALIDATION</span>
            <span className="dot">•</span>
          </div>
        </div>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
