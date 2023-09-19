import Appointment from "@/components/forms/Appointment";
import { getAppointments } from "@/lib/actions/appointment.actions";
import { currentUser } from "@clerk/nextjs";

export default async function Page() {
	const user = await currentUser();
	const activeAppointments = await getAppointments("", true);
	const activeAppointmentdates: Date[] = activeAppointments.map(appointment => appointment.date);
	return (
		<>
			<h1>Book an Appointment</h1>
			<Appointment id={user?.id} activeAppointmentdates={activeAppointmentdates} />
		</>
	)
}