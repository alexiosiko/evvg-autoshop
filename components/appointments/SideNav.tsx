"use client"

import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useState } from "react";

export default function SideNav() {
	const [activeButton, setActiveButton] = useState<string>('active');
	return (
		<div className="flex-col w-24 flex gap-4 mt-28">
			<div className="justify-center flex">
				<UserButton />
			</div>
			<Link href="/appointments/active" onClick={() => setActiveButton('active')} className={`bg-primary text-secondary-foreground text-center p-1 rounded-xl ${activeButton == 'active' && 'bg-secondary text-white'}`}>Active</Link>
			<Link href="/appointments/pending" onClick={() => setActiveButton('pending')} className={`bg-primary text-secondary-foreground text-center p-1 rounded-xl ${activeButton == 'pending' && 'bg-secondary text-white'}`}>Pending</Link>
			<Link href="/appointments/history" onClick={() => setActiveButton('history')} className={`bg-primary text-secondary-foreground text-center p-1 rounded-xl ${activeButton == 'history' && 'bg-secondary text-white'}`}>History</Link>
		</div>
		)
}