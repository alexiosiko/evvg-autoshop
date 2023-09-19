"use client"

import { Calendar } from "@/components/ui/calendar";
import AppointmentTime from "./Time";
import { useEffect, useState } from "react";
import React from "react";
import { UseFormReturn } from "react-hook-form";

 type AppointmentDateType = {
	date: Date | undefined,
	setDate: (date: Date | undefined) => void,
	activeAppointmentdates: Date[],
 }
export default function AppointmentDate({ date, setDate, activeAppointmentdates}: AppointmentDateType) {
	// Use a state variable to ensure CLIENT ONLY RENDER
	const [shouldRender, setShouldRender] = useState(false);
	useEffect(() => {
	  setShouldRender(true);
	}, []);

	function dateToHours(): string {
		if (!date) return "";
		if (date.getHours() == 0) return "";
		return date.getHours().toString() + ":00";
	}
 
	// Render the component conditionally based on shouldRender
	return shouldRender ? (
	  <div className="text-center  outline-1 outline outline-foreground rounded-3xl p-8">
		
		 <div className="justify-center flex">
			<Calendar 
				mode="single" 
				selected={date} 
				onSelect={setDate}
				initialFocus />
		 </div>
		 {date && <AppointmentTime date={date} setDate={setDate} activeAppointmentdates={activeAppointmentdates} />}
		 {date?.toDateString()}
			<br />
		{dateToHours()}
	  </div>
	) : null;
}
