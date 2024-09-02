import type { Metadata } from 'next'
import { Crimson_Text } from 'next/font/google'
import './globals.css'
import Nav from '@/components/sections/nav'
import { Analytics } from "@vercel/analytics/react"
import Head from 'next/head'

const inter = Crimson_Text({
	subsets: ['latin'],
	weight: '700',
	
})

export const metadata: Metadata = {
  title: 'EVVG Auto',
  description: 'Mechanic automotive shop based in Langley',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth'}} className='bg-[var(--background)] text-[var(--text)]'>
		<Head>
			<script async src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY_HERE&callback=console.debug&libraries=maps,marker&v=beta">
			</script>
		</Head>
		<body className={`${inter.className} `}>
			{/* <Nav /> */}
			{children}
		</body>
		<Analytics />
    </html>
  )
}
