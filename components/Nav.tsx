import Link from "next/link";
import { Button } from '@/components/ui/button';

const navButtonClass = 'text-primary transition hover:bg-foreground hover:text-secondary p-2 rounded-[--radius]';

export default async function Nav() {
	return (
		<div className="flex mb-6 justify-center gap-2 p-2">
			<Link className={navButtonClass} href="/">Home</Link>
			<Link className={navButtonClass} href="/">Services</Link>
			<Link className={navButtonClass} href="/">Contact</Link>
			<Link className={navButtonClass} href="/">Careers</Link>
			<Link href="/book" className='flex-col justify-center flex'>
				<Button variant={'default'}>Book Online</Button>
			</Link>
			<Link href="/admin/login" className='flex-col justify-center flex'>
				<Button variant={'special'}>Admin</Button>
			</Link>
		</div>
	)
}