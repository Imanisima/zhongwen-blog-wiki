import './globals.css'
import localFont from 'next/font/local';

import { Roboto } from 'next/font/google';
import { Noto_Sans_TC } from 'next/font/google';
import { cx } from '../utils'

import { Toaster } from "react-hot-toast"

const aileron = localFont({
  src: [
    {
      path: '../../public/fonts/Aileron-Regular.otf',
      weight: '400',
    },
    {
      path: '../../public/fonts/Aileron-SemiBold.otf',
      weight: '600',
    },
  ],
  display: 'swap',
  variable: '--font-ai'
})

const notosans = Noto_Sans_TC({ 
  subsets: ['latin'],
  style: 'normal',
  weight: ['300'],
  display: 'swap',
  variable: '--font-noto'
})

const roboto = Roboto({ 
  subsets: ['latin'],
  weight: ['300'],
  display: 'swap',
  variable: '--font-roboto'
})

export const metadata = {
  title: 'Your Daily Chinese',
  description: "Dive into the fusion of Chinese language learning and tech, where you'll find engaging SWE coding projects that materialize when inspiration strikes. Embark on this unique blend of language, culture, and technology, and let's journey together.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body 
      className={
        cx(
          aileron.variable,
          notosans.variable,
          roboto.variable,
          "font-roboto bg-light dark:bg-dark h-screen"
        )
      }>
        <Toaster position="bottom-right" toastOptions={{ duration: 3000 }} />
        {children}</body>
    </html>
  )
}
