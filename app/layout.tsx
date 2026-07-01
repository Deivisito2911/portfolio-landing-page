import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Deivith Zanella | Desarrollador Web & QA Tester',
  description: 'Portafolio profesional de Deivith Zanella - Desarrollador Web Frontend, Analista QA y Profesor de Robótica. Especializado en Next.js, React y testing.',
  keywords: ['Desarrollador Web', 'Frontend', 'QA Testing', 'Next.js', 'React', 'Robótica'],
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Deivith Zanella | Desarrollador Web & QA Tester',
    description: 'Portafolio profesional de Deivith Zanella - Desarrollador Web Frontend, Analista QA y Profesor de Robótica.',
    url: 'https://deivith-zanella.vercel.app',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0f0f1e',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
