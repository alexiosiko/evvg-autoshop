import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import Nav from '@/components/sections/nav'

const inter = Roboto({
	subsets: ['latin'],
	weight: '700'
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
		<body className={inter.className}>
			<Nav />
			{children}
		</body>
    </html>
  )
}
