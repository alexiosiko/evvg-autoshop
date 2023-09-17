import Appointment from "@/components/appointments/Appointment";
import { AppointmentType } from "@/contants/types/AppointmentTypes";
import { getAppointments } from "@/lib/actions/appointment.actions";
import { currentUser } from "@clerk/nextjs";
import Image from "next/image";
import Key from "@/assets/icons/key.png"


export default async function Page() {
	const user = await currentUser();
	if (!user)
		return;

	const isAdmin = user.id == process.env.ADMIN_USER_ID;
	const appointments: AppointmentType[] = await getAppointments(user.id, isAdmin);
	return (
		<div>
			{isAdmin && <Image src={Key} alt="admin" width={50} height={50} />}
			<h1 className='text-4xl text-primary font-bold mb-8 text-center mt-8'>Active Appointments</h1>
				{appointments && appointments.map((appointment: AppointmentType, index: number) => 
				<Appointment key={index} appointmentSTRING={JSON.stringify(appointment)} />
			)}
		</div>
	)
}