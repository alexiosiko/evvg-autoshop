import { AppointmentFormType } from '@/contants/types/AppointmentTypes';
import { List } from 'lucide-react';
import * as z from 'zod';

export const UserValidation = z.object({
	username: z.string()
	.refine(value => value != '', {
		message: "Please enter your name"
	}),
	services: z.array(z.string())
	.min(1, {
		message: "Must select atleast ONE service"
	}),
	email: z.string()
	.refine(value => value != '', {
		message: "Email is required"
	}),
	phone: z.string()
	.refine(value => value != '', {
		message: "Phone number is required"
	}),
	year: z.string()
	.refine(value => value != '', {
		message: "Year is required"
	}),
	brand: z.string()
	.refine(value => value != '', {
		message: "Brand is required"
	}),
	model: z.string()
	.refine(value => value != '', {
		message: "Model is required"
	}),
	notes: z.string(),
})


export function validateDate(date: Date | undefined): boolean {
	if (!date) return false;
	if (date.getHours() == 0) return false
	return true;
}
export function ValidateForm(
	data: AppointmentFormType,
	setInfoAlert: ((info: any ) => void) | undefined
): boolean {
	let invalidFields = <Array<string>> [];
	if (data.username == "") invalidFields.push("Username");
	if (data.email == "") invalidFields.push("Email");
	if (data.phone == "") invalidFields.push("Phone");
	if (data.brand == "") invalidFields.push("Brand");
	if (data.year == "") invalidFields.push("Year");
	if (data.model == "") invalidFields.push("Model");
	
	if (invalidFields.length > 0) {
		const invalidFieldsString = invalidFields.join(', ');
		setInfoAlert?.({ title: "Invalid information!", description: `Please enter fields for ${invalidFieldsString}`})
		return false;
	}

	if (data.services.length == 0) {
		setInfoAlert?.({ title: "Invalid information!", description: "Please select atleast ONE service from the services options" })
		return false;
	}

	if (data.id == undefined) {
		setInfoAlert?.({ title: "Invalid user!", description: "Please login to another account or re-sign in" })
		return false;
	}
	return true;
}
 