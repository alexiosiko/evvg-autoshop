import { Calendar } from "@/components/ui/calendar";
import { FormDataProps } from "./Appointment";
import { useState } from "react";
import AppointmentTime from "./AppointmentTime";
import { Button } from "../ui/button";

export default function AppointmentDate({ formData, setFormData }: FormDataProps) {
  	const [date, setDate] = useState<Date | undefined>();

	function handleOnUpdate() {
		if (!date) 
			throw new Error("Failed to parse date as string");
		setFormData({
			...formData,
			date: date,
		});
	}

	return (
		<div>
			<p className='text-3xl mb-8 mt-8'>Date</p>
			<Calendar
			className="outline outline-1 rounded-2xl mb-4 outline-gray-200 p-4 pt-12"
			mode="single"
			selected={date}
			onSelect={setDate}
			/>
			{/* Times */}
			{date && <AppointmentTime />}
			
			<Button onClick={handleOnUpdate} className="mt-2">Update</Button>
		</div>
	);
}
