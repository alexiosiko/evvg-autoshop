import AppointmentHistory from "@/components/appointments/AppointmentHistory";
import { AppointmentType } from "@/contants/types/AppointmentTypes";
import { getAppointmentHistory } from "@/lib/actions/appointment.actions";
import Image from "next/image";
import Key from "@/assets/icons/key.png"
import { currentUser } from "@clerk/nextjs";

export default async function Page() {
	const user = await currentUser();
	if (!user)
		return;
	const isAdmin = user.id == process.env.ADMIN_USER_ID;
	const appointments: AppointmentType[] = await getAppointmentHistory(user.id, isAdmin);
	
	return (
		<div>
			<h1 className='text-4xl text-primary font-bold mb-8 text-center mt-8'>History</h1>
			{appointments && appointments.map((appointment: AppointmentType, index: number) => 
				<AppointmentHistory  key={index} appointmentSTRING={JSON.stringify(appointment)} />
			)}
		</div>
	)
}