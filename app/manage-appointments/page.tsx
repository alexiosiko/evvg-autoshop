import Nav from "@/components/Nav";
import PendingAppointment from "@/components/pending-appointments/PendingAppointment";
import { getPendingAppointments } from "@/lib/actions/appointment.actions";
import { ClerkProvider } from "@clerk/nextjs";
import { ObjectId } from "mongodb";

export type pendingAppointmentType = {
	_id: ObjectId,
	firstname: string,
	lastname: string,
	email: string,
	phone: string,
	services: string[],
	vehicletype: string,
	notes: string,
	year: string,
	brand: string,
	model: string,
	date: Date,
	time: string,
	id: string,
}
export default async function Page() {
	const pendingAppointments: pendingAppointmentType[] = await getPendingAppointments();

	return (
		<ClerkProvider>
			<div>
				<Nav />
			</div>
			<section className="max-w-screen-xl m-auto">
			{pendingAppointments.map((appointment: pendingAppointmentType, index: number) => (
				<PendingAppointment key={index} appointmentSTRING={JSON.stringify(appointment)} />
			))}
			</section>

		</ClerkProvider>
	)
}