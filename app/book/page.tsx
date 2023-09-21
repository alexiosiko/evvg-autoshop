import Appointment from "@/components/forms/Appointment";
import { getAppointments } from "@/lib/actions/appointment.actions";
import { currentUser } from "@clerk/nextjs";

export default async function Page() {
	const user = await currentUser();
	if (!user)
		return;

	const activeAppointments = await getAppointments("active", user.id, true);
	const activeAppointmentdates: Date[] = activeAppointments.map(appointment => appointment.date);
	return (
		<>
			<h1 className='text-4xl text-center text-primary font-bold mb-8 mt-8'>Book an Appointment</h1>
			<Appointment id={user?.id} activeAppointmentdates={activeAppointmentdates} />
		</>
	)
}