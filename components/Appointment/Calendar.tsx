import { Calendar } from "@/components/ui/calendar";
import AppointmentTime from "./Time";
import { useEffect, useState } from "react";
import { FormDataProps } from "@/contants/types/AppointmentTypes";

type AppointmentDateType = {
	formData: FormDataProps['formData'];
	setFormData: FormDataProps['setFormData'];
 };

 
export default function AppointmentDate({ formData, setFormData }: AppointmentDateType) {
	const [date, setDate] = useState<Date | undefined>(new Date())

	useEffect(() => {
		date?.setMinutes(0);
		date?.setSeconds(0);
		
		if (!date) 
			return;
		
		setFormData({
			...formData,
			date: date,
		});
	}, [date])

	return (
		<div>
			<p className='text-4xl font-bold mb-8 mt-8'>Date</p>
				<Calendar
					className="outline outline-1 rounded-2xl mb-4 outline-gray-200 p-4 pt-12"
					mode="single"
					selected={date}
					onSelect={setDate}
				/>
				{/* Times */}
				{formData.date && <AppointmentTime formData={formData} setFormData={setFormData} />}
		</div>
	);
}
