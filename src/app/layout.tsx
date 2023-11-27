import './globals.css'

import { Saira } from 'next/font/google'

import Navbar from '@/components/Navbar'

const inter = Saira({ subsets: ['latin'] })

export const metadata = {
  title: 'Petrus - Portfolio',
  description: 'Petrus - Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} flex items-center justify-center`}>
        {children}
        <Navbar />
      </body>
    </html>
  )
}