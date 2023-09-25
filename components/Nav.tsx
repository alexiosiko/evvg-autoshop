import Link from "next/link";
import { Button } from '@/components/ui/button';
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import SignOutButton from "./SignOutButton";
import { useEffect } from "react";

const navButtonClass = 'text-primary transition hover:bg-foreground hover:text-secondary p-2 rounded-[--radius]';

export default async function Nav() {
	const session = await getServerSession(options);
	return (
		<div className="flex mb-6 justify-center gap-2 p-2">
			<Link className={navButtonClass} href="/">Home</Link>
			<Link className={navButtonClass} href="/">Services</Link>
			<Link className={navButtonClass} href="/">Contact</Link>
			<Link className={navButtonClass} href="/">Careers</Link>
			<Link href="/book" className='flex-col justify-center flex'>
				<Button variant={'default'}>Book Online</Button>
			</Link>
			<Link href="/api/manage">
				<Button>Manage</Button>
			</Link>	
			{session?.user && 
				<Link href="/api/auth/signout">
					<SignOutButton />
				</Link>	
			}

		</div>
	)
}