"use client"

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Key from "@/assets/icons/key.png";

export default function SideNav(isAdmin: boolean) {
	const [activeButton, setActiveButton] = useState<string>('active');
	return (
		<div className="flex-col w-24 flex gap-4 mt-28">
			<div className="justify-center flex">
				<UserButton afterSignOutUrl="/" />
			</div>
			<Link href="/appointments/active" onClick={() => setActiveButton('active')} className={`bg-primary text-secondary-foreground text-center p-1 rounded-md ${activeButton == 'active' && 'bg-secondary text-white'}`}>Active</Link>
			<Link href="/appointments/pending" onClick={() => setActiveButton('pending')} className={`bg-primary text-secondary-foreground text-center p-1 rounded-md ${activeButton == 'pending' && 'bg-secondary text-white'}`}>Pending</Link>
			<Link href="/appointments/history" onClick={() => setActiveButton('history')} className={`bg-primary text-secondary-foreground text-center p-1 rounded-md ${activeButton == 'history' && 'bg-secondary text-white'}`}>History</Link>
		</div>
	)
}