
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Velmondo',
  description: 'We are currently renewing our platform.',
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
