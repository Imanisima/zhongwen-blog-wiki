import './globals.css'
import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: {
    template: "%s | Your Daily Chinese",
    default: "Your Daily Chinese",
  },
    authors: [{ name: '啊猊 Mani'}],
    metadataBase: new URL('https://www.yourdailychinese.com'),
    description: "Dive into the beauty of Chinese language and culture with my 3-year language learning journey. Explore Taiwanese Mandarin, Traditional Chinese characters, bopomofo and tech-integrated SWE coding projects. Join me on a unique blend of language, culture, and technology. Let's embark on this journey together!",
    alternates: {
      canonical: "/",
      languages: {
        "en-US": "/en-US",
      },
    },
    keywords: 'chinese learning, language learning, Taiwanese Mandarin, Bopomofo, Tech and Language Integration, web development',
    referrer: "origin-when-cross-origin",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" type="image/x-icon" href="../../favicon.ico" />
          <meta name="theme-color" content="#121212"/>
          <meta name="robots" content="index,follow"/>
          
      </head>
      <body 
      className={
        cx(
          aileron.variable,
          notosans.variable,
          roboto.variable,
          "font-roboto bg-light dark:bg-dark h-screen"
        )
      }>
        <Toaster 
        position="bottom-right" 
        gutter={8}
        toastOptions={{ 
          className: 'bg-[#121212]/90 text-white/80 rounded-md opacity-90',
          duration: 3000 
          }} />
        {children}</body>
    </html>
  )
}
