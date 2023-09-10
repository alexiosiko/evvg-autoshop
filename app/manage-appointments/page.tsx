import Nav from "@/components/Nav";
import { getPendingAppointments } from "@/lib/actions/appointment.actions";
import { ClerkProvider } from "@clerk/nextjs";
import PendingAppointment from "@/components/manage-appointments/PendingAppointment"
import { ObjectId } from "mongodb";
import PendingAppointmentHeader from "@/components/manage-appointments/PendingAppointmentsHeader";

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
			{pendingAppointments.map((appointment: pendingAppointmentType) => (
				<PendingAppointment key={appointment.id.toString()} appointment={appointment} />
			))}
			</section>

		</ClerkProvider>
	)
}