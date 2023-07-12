import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Chat } from './components/Chat'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bookbuddy',
  description: 'Your bookstore for fantasy & mystery novels',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Chat/>
        {children}
      </body>
    </html>
  )
}
