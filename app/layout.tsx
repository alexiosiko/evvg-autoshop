import { Metadata } from 'next/types'
import './globals.css'
import { Mooli as text } from 'next/font/google'
import Nav from '@/components/Nav'
import { Toaster } from '@/components/ui/toaster'

const inter = text({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'EVVG AUTO',
  description: 'Automotive mechanic shop located in Langley',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
		<html id='home' lang="en" style={{ scrollBehavior: 'smooth'}}>
			<title>EVVG Auto</title>
			<body className={`${inter.className}`}>
				<Nav />
				<main className='m-auto '>
					{children}
				</main>
				<Toaster />
			</body>
		</html>
  )
}
