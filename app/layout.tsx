import React from 'react'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
// eslint-disable-next-line
import {Inter, Space_Grotesk} from 'next/font/google'
import type { Metadata } from 'next'
import ThemeProvider from '@/context/ThemeProvider'

export const metadata : Metadata ={
  title: 'Dev-Overflow',
  description: 'A platform where you can Get help and share knowlege with others, and updated with latest technology (Web Development, Mobile Development, Game Development, etc)',
  icons: '/assets/images/site-logo.png'
}

const inter = Inter({
  subsets: ['latin'],
  weight:[
    '100', '200', '300', '400', '500', '600', '700',
    '800', '900'
  ],
  variable: '--font-inter'
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight:[
    '300', '400', '500', '600', '700'
  ],
  variable: '--font-spaceGrotesk'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider
      appearance={{
        elements:{
          formButtonPrimary: 'primary-gradient',
          footerActionLink: 'primary-text-gradient hover:text-primary-500'
        }
      }}
    >
      <ThemeProvider>
        <html lang="en">
          <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
            {children}
          </body>
        </html>
      </ThemeProvider>
    </ClerkProvider>
  )
}