"use client"

import Image from "next/image";
import GreenDot from "@/assets/icons/green-dot.png";
import RedDot from "@/assets/icons/red-dot.png";
import { FormDataProps } from "@/contants/types/AppointmentTypes";

const fetchedData = [
	{
		time: "9:00AM",
		avaliable: true,
	},
	{
		time: "10:00AM",
		avaliable: true,
	},
	{
		time: "11:00AM",
		avaliable: false,
	},
	{
		time: "12:00PM",
		avaliable: true,
	},
	{
		time: "1:00PM",
		avaliable: false,
	},
	{
		time: "2:00PM",
		avaliable: true,
	},
	{
		time: "3:00PM",
		avaliable: true,
	},
]
type dayType = {
	time: string,
	avaliable: boolean,
}

export default function AppointmentTime({ formData, setFormData } : FormDataProps ) {
	

	function handleOnTimeClick(time: string) {
		const hour = parseInt(time.substring(0, time.indexOf(':')));

		if (!formData.date) return;

		// Create a copy of formData with the updated date
		const updatedFormData = {
			...formData,
			date: new Date(formData.date), // Create a new Date object to avoid mutation
		};

		// Update the hour
		updatedFormData.date.setHours(hour);

		// Set the state with the updated object
		setFormData(updatedFormData);
	}
	function isSelectedChangeStyle(data: dayType): string {
		if (!formData.date) return "";
		const hour = parseInt(data.time.substring(0, data.time.indexOf(":")));
		if (hour == formData.date.getHours())
			return "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground";
		return "hover:bg-gray-200 ";
	}
	return (
		<section className="grid shadow-md shadow-slate-700 p-8 rounded-3xl text-center gap-y-12 grid-cols-4 items-center justify-center">
			{fetchedData.map((data: dayType, index) => 
				<div 
					key={index}
					onClick={data.avaliable ? () => handleOnTimeClick(data.time) : undefined}
					className={`${isSelectedChangeStyle(data)} p-4 rounded-lg ${data.avaliable ? 'cursor-pointer' : 'hover:bg-inherit'}  `}>
					<p>{data.time}</p>
					{data.avaliable ? 
						<Image className="m-auto" src={GreenDot} width={7} height={7} alt="dot" /> : <Image className="m-auto" src={RedDot} width={7} height={7} alt="dot" /> 
					}
				</div>
			)}
					
			</section>
	)
}