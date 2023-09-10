import backgroundImage from '@/assets/photos/evvg-background.png'
import { Button } from '@/components/ui/button';
import Link from "next/link";

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

const navButtonClass = 'text-white transition hover:bg-white hover:text-black p-2 m-2 rounded-lg';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
		<div className="flex gap-6 justify-center">
			<Link className={navButtonClass} href="/">Home</Link>
			<Link className={navButtonClass} href="/">Services</Link>
			<Link className={navButtonClass} href="/">About</Link>
			<Link href="/book-appointment" className=' flex-col justify-center flex'>
				<Button variant={'default'}>Book an Appointment</Button>
			</Link>
		</div>
		<div style={{
			backgroundImage: `url(${backgroundImage.src})`,
			backgroundSize: 'contain',
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center',
			height: '700px' }}>
		</div>
      <div className='max-w-screen-lg m-auto text-white'>{children}</div>
    </>
  )
}
