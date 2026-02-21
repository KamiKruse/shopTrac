import '../assets/styles/globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'

import {
  NEXT_PUBLIC_APP_DESCRIPTION,
  NEXT_PUBLIC_APP_NAME,
  NEXT_PUBLIC_SERVER_URL,
} from '@/lib/constants'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    template: `%s | ShopTrac`,
    default: `${NEXT_PUBLIC_APP_NAME}`,
  },
  description: `${NEXT_PUBLIC_APP_DESCRIPTION}`,
  metadataBase: new URL(NEXT_PUBLIC_SERVER_URL),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider
        attribute='class'
        defaultTheme='system'
        enableSystem
        disableTransitionOnChange
        >{children}</ThemeProvider>
      </body>
    </html>
  )
}
