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

	const _isAdmin = user.id == process.env.ADMIN_USER_ID;
	const appointments: AppointmentType[] = await getAppointments('active', user.id, _isAdmin);
	return (
		<div>
			<div className="grid grid-cols-2 items-center justify-start m-auto">
				<h1 className='text-4xl text-primary font-bold mb-8 text-center mt-8'>Active Appointments</h1>
				{_isAdmin && <Image src={Key} alt="admin" width={50} height={50} />}
			</div>
				{appointments && appointments.map((appointment: AppointmentType, index: number) => 
				<Appointment key={index} isAdmin={_isAdmin} appointmentSTRING={JSON.stringify(appointment)} />
			)}
			{appointments.length == 0 && 
			<h1>There are no active appointments</h1>}
		</div>
	)
}