import '@ml/app/globals.css';
import type { Metadata } from 'next';
import type React from 'react';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import Header from '@ml/components/header';

export const metadata: Metadata = {
  title: 'Mathew Lewallen Portfolio',
  description: 'Personal website of Mathew Lewallen.',
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Header />
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
