"use server"

import { ObjectId } from "mongodb";
import { AppointmentFormType, AppointmentSchemaType } from "@/app/book/page";
import DB from "../mongoDB";
export type responseType = {
	title: string,
	description: string
}
export async function getAppointments(): Promise<AppointmentSchemaType[]> {
	try {
		const db = await DB;
		const collection = db?.collection('appointments');
		if (!collection) {
			return [];
		}

		const unknown =  await collection?.find({}).toArray() as unknown;
		const appointments = unknown as AppointmentSchemaType[];
		return appointments;
	} catch (e) {
		return [];
	}
}
export async function submitAppointment(
	data: any
): Promise<responseType> {
	try {
		const db = await DB;

		const collection = db?.collection('appointments');
		const existing = await collection?.findOne(data);
		if (existing) {
			return {
				title: "There is already a request sent with this exact information!",
				description: "Please wait to recieve an email/phone call from a service representative",
			}
		}
		collection?.insertOne(data);
		return {
			title: "Successfully submitted your request!",
			description: "Please wait to recieve an email/phone call from a service representative",
		}
	} catch (error) {
		return {
			title: "Oops, something went wrong... ",
			description: "Please try again later",
		}
	}
}
export async function updateAppointment(data: AppointmentSchemaType, updateParams: any): Promise<responseType> {
	try {
		if (data._id == null)
			throw new Error("WTFF");
		data._id = new ObjectId(data._id);
		const db = await DB;
		const collection = db?.collection("appointments");
		if (!collection) return {
			title: "Oops!",
			description: "Something went wrong accessing collection",
		};
		// Define the update operation
		const updateOperation = {
			$set: {...updateParams},
		};
		
		const result = await collection?.updateOne({_id: data._id}, updateOperation);
		if (result.acknowledged)
			return {
				title: "Successfully updated appointment for " + data.firstname + "!",
				description: "",
			}
		else
			throw Error("Error");
	} catch (error) {
		return {
			title: "Oops! Something went wrong when trying to update status of this client",
			description: "Call Alexi",
		}
	}
}
export async function handleDelete(id: ObjectId | null, collection: string): Promise<responseType> {
	try {
		if (id == null)
			throw new Error("Wtf");
		const objectId = new ObjectId(id);
		const db = await DB;
		const _collection = db?.collection(collection);
		
		_collection?.deleteOne({_id: objectId})
		return {
			title: "Successfully deleted appointment!",
			description: "Page will refresh",
		}

	} catch (e) {
		return {
			title: "Something went wrong!",
			description: "Call Alexi",
		}
	}
}

export async function isAdmin(code: string): Promise<boolean> { 
	return code == process.env.ADMIN_CODE;
}
