import { AppointmentSchemaType } from "@/app/book/page";
import AppointmentsList from "@/components/appointments/AppointmentsList";
import CreateAppointment from "@/components/appointments/CreateAppointment";
import { Button } from "@/components/ui/button";
import { getAppointments } from "@/lib/actions/backend";
import Link from "next/link";


export default async function Page() {
	const appointments: AppointmentSchemaType[] = await getAppointments();
	return (
		<div>
			{appointments.length == 0 ? 
				<h1 className="text-primary text-center text-3xl font-bold">
					No appointments
				</h1> 
					:
				<AppointmentsList appointmentSTRING={JSON.stringify(appointments)} />
			}
			<Link href='/admin/create' className="flex justify-center mt-8">
				<Button>Create</Button>
			</Link>
		</div>
	)
}