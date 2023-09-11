import { ObjectId } from "mongodb"

export type myFormType = {
	firstname: string,
	lastname: string,
	email: string,
	phone: string,
	services: string[],
	notes: string,
	year: string,
	brand: string,
	model: string,
	date: Date | null,
	dateCreated: Date | null,
	time: string,
	id: string
}
export type FormDataProps = {
	setFormData: (newFormData: myFormType) => void,
	formData: myFormType,
}

export type appointmentType = {
	_id: ObjectId,
	firstname: string,
	lastname: string,
	email: string,
	phone: string,
	services: string[],
	vehicletype: string,
	notes: string,
	year: string,
	brand: string,
	model: string,
	date: Date,
	time: string,
	id: string,
}
