import Appointment from "@/components/forms/Appointment";
import { currentUser } from "@clerk/nextjs";

export default async function Page() {
	const user = await currentUser();
	return (
		<Appointment id={user?.id} />
	)
}