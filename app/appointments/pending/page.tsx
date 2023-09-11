import PendingAppointment from "@/components/appointments/pending-appointments/PendingAppointment";
import { appointmentType } from "@/contants/types/AppointmentTypes";
import { getPendingAppointments } from "@/lib/actions/appointment.actions";


export default async function Page() {
	const pendingAppointments: appointmentType[] = await getPendingAppointments();

	return (
		<div>
			<p className='text-4xl text-center text-primary font-bold mb-8 mt-8'>Pending Appointments</p>

			{pendingAppointments.map((appointment: appointmentType, index: number) => (
				<PendingAppointment key={index} appointmentSTRING={JSON.stringify(appointment)} />
			))}
			{pendingAppointments.length == 0 && 
			<h1>There are no appointments requested</h1>}
		</div>
	)
}