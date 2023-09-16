import AppointmentHistory from "@/components/appointments/AppointmentHistory";
import { appointmentType } from "@/contants/types/AppointmentTypes";
import { getAppointmentHistory } from "@/lib/actions/appointment.actions";

export default async function Page() {
	const appointments: appointmentType[] = await getAppointmentHistory();
	
	return (
		<div>
			<h1 className='text-4xl text-primary font-bold mb-8 text-center mt-8'>History</h1>
			{appointments && appointments.map((appointment: appointmentType, index: number) => 
				<AppointmentHistory key={index} appointmentSTRING={JSON.stringify(appointment)} />
			)}
		</div>
	)
}