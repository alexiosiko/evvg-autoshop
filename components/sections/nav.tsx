import Link from "next/link";

export default function Nav() {
	const navButtonClass = "";
	return (
		<section className="flex justify-center sticky top-0 z-20 outline-1 outline bg-[var(--background)] p-2 gap-8">
			<Link  className={navButtonClass} href="#home">Home</Link>
			<Link className={navButtonClass} href="#services">Services</Link>
			<Link className={navButtonClass} href="#contact">Contact</Link>
		</section>
	)
}