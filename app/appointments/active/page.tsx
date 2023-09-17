import Appointment from "@/components/appointments/Appointment";
import { AppointmentType } from "@/contants/types/AppointmentTypes";
import { getAppointments } from "@/lib/actions/appointment.actions";

export default async function Page() {
	const appointments: AppointmentType[] = await getAppointments();
	
	return (
		<div>
			<h1 className='text-4xl text-primary font-bold mb-8 text-center mt-8'>Active Appointments</h1>
				{appointments && appointments.map((appointment: AppointmentType, index: number) => 
				<Appointment key={index} appointmentSTRING={JSON.stringify(appointment)} />
			)}
		</div>
	)
}