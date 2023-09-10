"use server"

import { myFormType } from "@/contants/types/AppointmentTypes";


export async function requestAppointmentValidation( formData: myFormType ): Promise<string> {
	if (formData == null) return "Please fill out data";
	if (formData.firstname == "") return "Firstname is required";
	if (formData.lastname == "") return "Lastname is required";
	if (formData.email == "") return "Email is required";
	if (formData.phone == "") return "Phone is required";
	if (formData.brand == "") return "Brand is required";
	if (formData.services.length == 0) return "Atleast one service must be selected";
	if (formData.date == null) return "Date is required";
	if (formData.date.getHours() == 0) return "Time of day is required";
	return "success";
}