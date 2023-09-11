import Link from "next/link";

export default function SideNav() {
	return (
		<div className="flex-col w-24 flex gap-4 mt-28">
			<Link href="/appointments/active" className="bg-primary text-secondary text-center p-1 rounded-xl ">Active</Link>
			<Link href="/appointments/pending" className="bg-primary text-secondary text-center p-1 rounded-xl ">Pending</Link>
			<Link href="/appointments/history" className="bg-primary text-secondary text-center p-1 rounded-xl ">History</Link>
		</div>
		)
}