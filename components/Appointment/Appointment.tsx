"use client"

import { useState } from "react";
import { requestAppointment } from "@/lib/actions/appointment.actions";
import { requestAppointmentValidation } from "@/lib/validations/appointment.validation";
import { myFormType } from "@/contants/types/AppointmentTypes";
import Info from "@/components/appointment/Info";
import Services from "@/components/appointment/Services";
import Nav from "@/components/appointment/Nav";
import Summary from "@/components/appointment/Summary";
import Calendar from "@/components/appointment/Calendar";
import Car from "@/components/appointment/Car";


export default function Appointment({}) {
	const [navPage, setNavPage] = useState<string>('info');
	const [formData, setFormData] = useState<myFormType>({
		firstname: "",
		lastname: "",
		email: "",
		phone: "",
		services: [],
		notes: "",
		year: "",
		brand: "",
		model: "",		
		date: null,
		dateCreated: null,
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
		setFormData({firstname: "",lastname: "",email: "",phone: "",services: [], notes: "", year: "", brand: "",model: "", date: null, dateCreated: null, time: "", id: "",
		})
	};
	return (
		<section className="rounded-3xl p-12 outline outline-foreground/50 outline-1" style={{ minHeight: 800}} >
			<Nav setNavPage={setNavPage} />
			<div className="flex">
				<div className="flex-1 mr-12">
					{navPage == 'info' && <Info setFormData={setFormData} formData={formData} />}
					{navPage == 'services' && <Services setFormData={setFormData} formData={formData} />}
					{navPage == 'car' && <Car setFormData={setFormData} formData={formData} />}
					{navPage == 'date' && <Calendar setFormData={setFormData} formData={formData} />}
				</div>
				<Summary formData={formData} handleSubmit={handleSubmit} handleClear={handleClear} />
			</div>
		</section>
	)
}