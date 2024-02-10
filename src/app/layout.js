import './globals.css'
import localFont from 'next/font/local';

import { Roboto } from 'next/font/google';
import { Noto_Sans_TC } from 'next/font/google';
import { cx } from '../utils'

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
  description: 'Sharing tips and stories behind my chinese learning journey!',
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
      }>{children}</body>
    </html>
  )
}
