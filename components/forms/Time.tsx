"use client"

import Image from "next/image";
import GreenDot from "@/assets/icons/green-dot.png";
import RedDot from "@/assets/icons/red-dot.png";

const availableTimes = [
	{
		day: 1,
		hours: [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
	},
	{
		day: 2,
		hours: [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
	},
	{
		day: 3,
		hours: [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
	},
	{
		day: 4,
		hours: [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
	},
	{
		day: 5,
		hours: [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
	},
	{
		day: 6,
		hours: [10, 11, 12, 13, 14, 15, 16, 17]
	}
]

type dayType = {
	time: string,
	avaliable: boolean,
}

type AppointmentTimeType = {
	date: Date | undefined,
	setDate: (date: Date | undefined) => void,
	activeAppointmentdates: Date[],
 }

export default function AppointmentTime({ date, setDate, activeAppointmentdates }: AppointmentTimeType) {
	const currentDayWorkingHours: number[] | undefined  = availableTimes.find((item) => item.day == date?.getDay())?.hours;
	if (!currentDayWorkingHours)
		return;


	function handleOnTimeClick(hour: number) {
		let newDate = date ? new Date(date.getTime()) : new Date();
		newDate?.setHours(hour);
		setDate(newDate);
	}
	function isSelected(hour: number): boolean {
		return date?.getHours() == hour;
	}

	function hourToDate(hour: number): Date | null {
		if (!date)
			return null;
		let newDate = new Date(date.getTime());
		newDate.setHours(hour);
		return newDate;
	}
	function isDatePast(): boolean {
		const todaysDay = new Date();
		todaysDay.setHours(0);
		todaysDay.setMinutes(0);
		todaysDay.setSeconds(0);
		todaysDay.setMilliseconds(0);

		if (!date) return false;
		const selectedDay = new Date(date.getTime());
		selectedDay.setHours(0);
		selectedDay.setMinutes(0);
		selectedDay.setSeconds(0);
		selectedDay.setMilliseconds(0);

		if (selectedDay < todaysDay)
			return true;
		return false;
	}

	function isAvaliable(hour: number): boolean {
		if (isDatePast())
			return false;
		
			

		const newDate = hourToDate(hour);
		return !activeAppointmentdates.find(_date => newDate?.getTime() == _date.getTime());
	}
	return (
		<section className="grid p-8 rounded-3xl text-center gap-y-12 grid-cols-4 items-center justify-center">
			{currentDayWorkingHours && currentDayWorkingHours.map(hour => (
				<div key={hour}
					onClick={isAvaliable(hour) ? () => handleOnTimeClick(hour) : undefined}
					className={`${isAvaliable(hour) ? 'cursor-pointer hover:bg-foreground hover:text-background' : ''} 
					p-4 rounded-lg 
					${isSelected(hour) ? 'bg-accent-foreground text-background' : ''}
					`}
					><p>{hour}:00</p>
					{
						isAvaliable(hour) ?
							<Image className="m-auto" src={GreenDot} width={7} height={7} alt="dot" />
						:
							<Image className="m-auto" src={RedDot} width={7} height={7} alt="dot" /> 
					}
				</div>
			))}
			
			{/* {fetchedData.map((data: dayType, index) => 
				<div 
					key={index}
					onClick={data.avaliable ? () => handleOnTimeClick(data.time) : undefined}
					className={`${isSelectedChangeStyle(data)} p-4 rounded-lg ${data.avaliable ? 'cursor-pointer' : 'hover:bg-inherit'}  `}>
					<p>{data.time}</p>
					{data.avaliable ? 
						<Image className="m-auto" src={GreenDot} width={7} height={7} alt="dot" /> : <Image className="m-auto" src={RedDot} width={7} height={7} alt="dot" /> 
					}
				</div>
			)} */}
					
			</section>
	)
}