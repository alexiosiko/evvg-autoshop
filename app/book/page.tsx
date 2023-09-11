import Appointment from "@/components/appointments/appointment/Appointment";
import Nav from "@/components/Nav";
import { ClerkProvider } from "@clerk/nextjs";

export default async function Page() {
	return (
		<ClerkProvider>
			<Nav />
			<div>
				<div className="max-w-screen-xl m-auto">
					<Appointment />
				</div>
			</div>
		</ClerkProvider>
	)
}