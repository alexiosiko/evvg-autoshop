"use client"

import Image from "next/image";
import GreenDot from "@/assets/icons/green-dot.png";
import RedDot from "@/assets/icons/red-dot.png";

const fetchedData = [
	{
		time: "9:00",
		avaliable: true,
	},
	{
		time: "10:00",
		avaliable: true,
	},
	{
		time: "11:00",
		avaliable: false,
	},
	{
		time: "12:00",
		avaliable: true,
	},
	{
		time: "13:00",
		avaliable: false,
	},
	{
		time: "14:00",
		avaliable: true,
	},
	{
		time: "15:00",
		avaliable: true,
	},
]
type dayType = {
		time: string,
		avaliable: boolean,
}

type AppointmentTimeType = {
	date: Date | undefined,
	setDate: (date: Date | undefined) => void,
 }

export default function AppointmentTime({ date, setDate }: AppointmentTimeType) {
	

	function handleOnTimeClick(time: string) {
		const hour = parseInt(time.substring(0, time.indexOf(':')));
		let newDate = date ? new Date(date.getTime()) : new Date();
		newDate?.setHours(hour);
		setDate(newDate);
		
		if (!date) return;
	}
	function isSelectedChangeStyle(data: dayType): string {
		if (!date) return "";
		const hour = parseInt(data.time.substring(0, data.time.indexOf(":")));
		if (hour == date.getHours())
			return "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground";
		return "hover:bg-gray-200 ";
	}
	return (
		<section className="grid p-8 rounded-3xl text-center gap-y-12 grid-cols-4 items-center justify-center">
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