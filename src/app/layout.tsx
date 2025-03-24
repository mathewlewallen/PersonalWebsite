import './globals.css'
import type { Metadata } from 'next'
import React from 'react'
import { Inter } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Mathew Lewallen Portfolio',
  description: 'Personal website of Mathew Lewallen.',
}

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}