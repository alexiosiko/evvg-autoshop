"use client"

import { useState } from "react";
import { requestAppointment } from "@/lib/actions/appointment.actions";
import { requestAppointmentValidation } from "@/lib/validations/appointment.validation";
import { myFormType } from "@/contants/types/AppointmentTypes";
import Nav from "./Nav";
import Services from "./Services";
import Summary from "./Summary";
import Info from "./Info";
import Car from "./Car";
import Calendar from "./Calendar";


export default function Appointment({}) {
	const [navPage, setNavPage] = useState<string>('date');
	const [formData, setFormData] = useState<myFormType>({
		firstname: "",
		lastname: "",
		email: "",
		phone: "",
		services: [],
		vehicletype: "",
		details: "",
		year: "",
		brand: "",
		model: "",		
		date: null,
		time: "",
		id: "",
	});

	async function handleSubmit() {
		requestAppointmentValidation(formData)
		.then((validationResponse) => {
			if (validationResponse !== "success") {
				alert(validationResponse);
				return;
			}
			requestAppointment(formData)
			.then(res => alert(res));
		})
	}
	function handleClear() {
		setFormData({firstname: "",lastname: "",email: "",phone: "",services: [],vehicletype: "",details: "",year: "",brand: "",model: "",		date:  null,time: "",id: "",
		})
	};
	return (
		<section className="rounded-xl p-12 flex outline-2 outline-white shadow-md shadow-slate-700" style={{ minHeight: 800}} >
			<div className="flex-1 mr-12">
				<Nav setNavPage={setNavPage} />
				{navPage == 'info' && <Info setFormData={setFormData} formData={formData} />}
				{navPage == 'services' && <Services setFormData={setFormData} formData={formData} />}
				{navPage == 'car' && <Car setFormData={setFormData} formData={formData} />}
				{navPage == 'date' && <Calendar setFormData={setFormData} formData={formData} />}
			</div>
			<Summary formData={formData} handleSubmit={handleSubmit} handleClear={handleClear} />
		</section>
	)
}