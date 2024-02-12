import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Your Daily Chinese',
    short_name: 'Your Daily Chinese',
    description: "Dive into the beauty of Chinese language and culture with my 3-year language learning journey. Explore Taiwanese Mandarin, Traditional Chinese characters, bopomofo and tech-integrated SWE coding projects. Join me on a unique blend of language, culture, and technology. Let's embark on this journey together!",
    start_url: '/',
    display: 'standalone',
    background_color: '#121212',
    theme_color: '#121212',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}