import PendingAppointment from "@/components/appointments/PendingAppointment";
import { AppointmentType } from "@/contants/types/AppointmentTypes";
import { getPendingAppointments } from "@/lib/actions/appointment.actions";
import { currentUser } from "@clerk/nextjs";
import Image from "next/image";
import Key from "@/assets/icons/key.png"

export default async function Page() {
	const user = await currentUser();
	if (!user)
		return;

	const isAdmin = user.id == process.env.ADMIN_USER_ID;
	const pendingAppointments: AppointmentType[] = await getPendingAppointments(user?.id, isAdmin);
	return (
		<div>
			{isAdmin && <Image src={Key} alt="admin" width={50} height={50} />}
			<p className='text-4xl text-center text-primary font-bold mb-8 mt-8'>Pending Appointments</p>
			{pendingAppointments.map((appointment: AppointmentType, index: number) => (
				<PendingAppointment key={index} appointmentSTRING={JSON.stringify(appointment)} isAdmin={isAdmin} />
			))}
			{pendingAppointments.length == 0 && 
			<h1>There are no appointments requested</h1>}
		</div>
	)
}