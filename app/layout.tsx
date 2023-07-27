"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const queryClient = new QueryClient()
  return (
    <html lang="en">
    <Head><title>E-Commerce</title></Head>
      <body className={inter.className}>
      <QueryClientProvider client={queryClient} >
        {children}
      </QueryClientProvider>
      </body>
    </html>
    
  )
}
