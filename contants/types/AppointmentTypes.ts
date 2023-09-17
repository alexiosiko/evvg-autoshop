import { ObjectId } from "mongodb"

export type AppointmentFormType = {
	username: string,
	email: string,
	phone: string,
	services: string[],
	notes: string,
	year: string,
	brand: string,
	model: string,
	date: Date | undefined,
	dateCreated: Date | null,
	time: string,
	id: string | undefined
}

export type AppointmentType = {
	_id: ObjectId,
	username: string,
	email: string,
	phone: string,
	services: string[],
	notes: string,
	year: string,
	brand: string,
	model: string,
	date: Date,
	dateCreated: Date,
	time: string,
	id: string
}
export type appointmentHistoryType = {
	_id: ObjectId,
	firstname: string,
	lastname: string,
	email: string,
	phone: string,
	services: string[],
	notes: string,
	year: string,
	brand: string,
	model: string,
	date: Date,
	dateCreated: Date,
	time: string,
	id: string,
	completed: boolean
}