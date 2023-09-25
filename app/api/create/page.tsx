import CreateAppointment from "@/components/appointments/CreateAppointment";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Create() {
	return (
		<>
			<Link href="/api/manage">
				<Button>Back</Button>
			</Link>
			<CreateAppointment />
		</>
	)
}