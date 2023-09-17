import Appointment from "@/components/forms/Appointment";
import { currentUser } from "@clerk/nextjs";

export default async function Page() {
	const user = await currentUser();
	return (
		<>
			<h1>Book an Appointment</h1>
			<Appointment id={user?.id} />
		</>
	)
}