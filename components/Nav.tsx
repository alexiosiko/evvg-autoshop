import Link from "next/link";
import { Button } from '@/components/pending-appointments/ui/button';
import { currentUser } from "@clerk/nextjs";

const navButtonClass = 'text-white transition hover:bg-white hover:text-black p-2 m-2 rounded-3xl ';

export default async function Nav() {
	const userIsAdmin = await isAdmin();
	async function isAdmin(): Promise<boolean> {
		return true;
	}
	return (
		<div className="flex mb-6 mt-2 gap-6 justify-center">
			<Link className={navButtonClass} href="/">Home</Link>
			<Link className={navButtonClass} href="/">Services</Link>
			<Link className={navButtonClass} href="/">About</Link>
			<Link href="/book-appointment" className='flex-col justify-center flex'>
				<Button variant={'default'}>Book an Appointment</Button>
			</Link>
			{userIsAdmin && 
			<Link href="/manage-appointments" className='flex-col justify-center flex'>
				<Button variant={'gradient'}>Manage Appointments</Button>
			</Link>}
		</div>
	)
}