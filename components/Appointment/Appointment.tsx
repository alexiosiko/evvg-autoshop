"use client"

import { useState } from "react";
import AppointmentNav from "./AppointmentNav";
import AppointmentInfo from "./AppointmentInfo";
import AppointmentServices from "./AppointmentServices";
import AppointmentSummary from "./AppointmentSummary";
import AppointmentCar from "./AppointmentCar";
import AppointmentDate from "./AppointmentDate";



export type myFormType = {
	firstname: string,
	lastname: string,
	email: string,
	phone: string,
	services: string[],
	vehicletype: string,
	year: string,
	brand: string,
	model: string,
	date: Date,
	time: string,
}
export type FormDataProps = {
	setFormData: (newFormData: myFormType) => void,
	formData: myFormType,
}
export default function Appointment() {
	const [navPage, setNavPage] = useState<string>('date');
	const [formData, setFormData] = useState<myFormType>({
		firstname: "",
		lastname: "",
		email: "",
		phone: "",
		services: [],
		vehicletype: "",
		year: "",
		brand: "",
		model: "",		
		date: new Date(),
		time: "",
	});
	return (
		<section className="shadow-lg rounded-xl p-12 flex" style={{ minHeight: 800}} >
			<div className="flex-1 mr-12">
				<AppointmentNav setNavPage={setNavPage} />
				{navPage == 'info' && <AppointmentInfo setFormData={setFormData} formData={formData} />}
				{navPage == 'services' && <AppointmentServices setFormData={setFormData} formData={formData} />}
				{navPage == 'car' && <AppointmentCar setFormData={setFormData} formData={formData} />}
				{navPage == 'date' && <AppointmentDate setFormData={setFormData} formData={formData} />}
			</div>
			<AppointmentSummary formData={formData} />
		</section>
	)
}