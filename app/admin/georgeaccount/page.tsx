import AppointmentsList from "@/components/appointments/AppointmentsList";
import { AppointmentTypeWithId } from "@/components/forms/Appointment";
import { getAppointments } from "@/lib/actions/backend";

export default async function Page() {
	const appointments: AppointmentTypeWithId[] = await getAppointments();
	return (
		<div>
			{appointments.length == 0 ? 
				<h1 className="text-primary text-center text-3xl font-bold">
					No appointments
				</h1> 
					:
				<AppointmentsList appointmentSTRING={JSON.stringify(appointments)} />
			}
		</div>
	)
}