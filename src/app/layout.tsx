import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { UserContextProvider } from '@/context/User'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Excelence',
  description: 'Farrago',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body>
        <UserContextProvider>
          {children}
        </UserContextProvider>
      </body>
    </html>
  )
}
