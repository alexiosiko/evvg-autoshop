import Nav from "@/components/Nav";
import SideNav from "@/components/appointments/SideNav";
import { ClerkProvider, RedirectToSignIn, SignedOut } from "@clerk/nextjs";

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className="max-w-5xl m-auto">
			<div>{children}</div>
		</div>
  )
}
