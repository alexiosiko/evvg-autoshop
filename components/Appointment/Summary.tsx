import { myFormType } from "@/contants/types/AppointmentTypes";
import { Button } from "../ui/button";
import { useState } from "react";

interface AppointmentSummaryProps {
	formData: myFormType;
	handleSubmit: () => void; 
	handleClear: () => void; 
}
 
 export default function AppointmentSummary({ formData, handleSubmit, handleClear } : AppointmentSummaryProps) {
	return (
		<div className="shadow-md rounded-xl shadow-gray-700 w-1/3 p-4">
			<h1 className="text-4xl font-bold mb-8 mt-8">Summary</h1>
			<hr className="mt-2 mb-2" />
			<section style={{ minHeight: 100}}>
				<h1 className="font-bold mt-6 mb-2">Info</h1>
				<p className="text-xs mr-2">{formData.firstname}</p>
				<p className="text-xs mr-2">{formData.lastname}</p>
				<p className="text-xs mr-2">{formData.email}</p>
				<p className="text-xs mr-2">{formData.phone}</p>
			</section>
			<hr className="mt-2 mb-2" />
			<section style={{ minHeight: 100}}>
				<h1 className="font-bold mt-6 mb-2">Car</h1>
				<p className="text-xs mr-2">{formData.vehicletype}</p>
				<p className="text-xs mr-2">{formData.year}</p>
				<p className="text-xs mr-2">{formData.brand}</p>
				<p className="text-xs mr-2">{formData.model}</p>
			</section>
			<hr className="mt-2 mb-2" />
			<section style={{ minHeight: 100}}>
				<h1 className="font-bold mt-6 mb-2">Services</h1>
					<div className="mt-2">
					{formData.services.map((service: string, index: number) => 
						<p key={index} className="text-xs mr-2">{service}</p>
					)}
					</div>
			</section>
			<hr className="mt-2 mb-2" />
			<section style={{ minHeight: 100}}>
				<h1 className="font-bold mt-6 mb-2">Date</h1>
				<p className="text-xs mr-2">{formData.date && formData.date.toString()}</p>
			</section>
			<hr className="mt-2 mb-2" />
			<div className="flex gap-4">
				<Button onClick={handleSubmit} >Submit Appointment Request</Button>
				<Button onClick={handleClear} variant={'destructive'} className="w-4/12" >Clear</Button>
			</div>
		</div>
	)
}
