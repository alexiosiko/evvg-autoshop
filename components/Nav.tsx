import Link from "next/link";
import { Button } from '@/components/ui/button';
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import SignOutButton from "./SignOutButton";
const navButtonClass = 'text-primary transition hover:bg-foreground hover:text-secondary p-2 rounded-[--radius]';

export default async function Nav() {
	const session = await getServerSession(options);
	return (
		<div className="flex justify-center items-center mb-6 sticky top-0 bg-background outline outline-1">
			<div className="flex justify-center gap-2 p-2">
				<Link className={navButtonClass} href="#home">Home</Link>
				<Link className={navButtonClass} href="#services">Services</Link>
				<Link className={navButtonClass} href="#contact">Contact</Link>
				{/* <Link className={navButtonClass} href="/">Careers</Link> */}
				{/* <Link href="/book" className='flex-col justify-center flex'>
					<Button variant={'default'}>Book Online</Button>
				</Link> */}
				{/* <Link href="/api/manage">
					<Button>Manage</Button>
				</Link>	 */}
			</div>
				{/* {session && 
					<Link className="flex mr-0 absolute right-0" href="/api/auth/signout">
						<SignOutButton />
					</Link>	
				} */}
		</div>
	)
}