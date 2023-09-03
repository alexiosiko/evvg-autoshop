"use client"

import { useState } from "react";
import AppointmentNav from "./AppointmentNav";
import AppointmentInfo from "./AppointmentInfo";
import AppointmentServices from "./AppointmentServices";
import AppointmentSummary from "./AppointmentSummary";

export type myFormData = {
	firstname: string,
	lastname: string,
	email: string,
	phone: string,
	services: {
			header: string,
			description: string,
	} [];
}
export default function Appointment() {
	const [navPage, setNavPage] = useState<string>('services');
	const [formData, setFormData] = useState<myFormData>({
		firstname: "alexi",
		lastname: "ikonomou",
		email: "jemimassyrup@gmail.com",
		phone: "778 251 0290",
		services: [
			{
				header: "Oil Change",
				description: "Inspect, remove and new replacement of engine oil and engine oil filter. A multi-point inspection is included with this service.",
			},
			{
				header: "Coolant/Anti-Freeze",
				description: "Inspect, remove and new replacement of engine coolant/anti-freeze.",
			},
			{
				header: "Transmission",
				description: "Removal and new replacement of transmission fluid (Filter where required).",
			},
			{
				header: "Brake Fluid Exchange",
				description: "Inspect, remove and new replacement of brake fluid.",
			},
			{
				header: "Power Steering Fluid",
				description: "Removal and new replacement of power steering fluid.",
			},
		]
	});
	return (
		<section  className="shadow-lg rounded-xl p-12 flex" >
			<div className="flex-1">
				<AppointmentNav setNavPage={setNavPage} />
				{navPage == 'info' && <AppointmentInfo />}
				{navPage == 'services' && <AppointmentServices />}
			</div>
			<AppointmentSummary formData={formData} />
		</section>
	)
}