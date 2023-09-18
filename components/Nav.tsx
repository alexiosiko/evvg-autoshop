import Link from "next/link";
import { Button } from '@/components/ui/button';
import { UserButton } from "@clerk/nextjs";

const navButtonClass = 'text-white transition hover:bg-white hover:text-black p-2 m-2 rounded-3xl ';

export default async function Nav() {
	return (
		<div className="flex mb-6 mt-2 gap-6 justify-center">
			<Link className={navButtonClass} href="/">Home</Link>
			<Link className={navButtonClass} href="/">Services</Link>
			<Link className={navButtonClass} href="/">About</Link>
			<Link href="/book" className='flex-col justify-center flex'>
				<Button variant={'default'}>Book an Appointment</Button>
			</Link>
			<Link href="/appointments/active" className='flex-col justify-center flex'>
				<Button variant={'gradient'}>Manage Appointments</Button>
			</Link>
			<div className="flex items-center">
				<UserButton afterSignOutUrl="/" />
			</div>
		</div>
	)
}