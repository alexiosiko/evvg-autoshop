"use server"

import { connectToMongoDB } from "../mongoDB";
import { ObjectId } from "mongodb";
import { alertInfoType, alertInfoType as continueAlertInfoType } from "@/components/alerts/Continue";
import { AppointmentType, AppointmentTypeWithId } from "@/app/book/page";
export async function getAppointments(): Promise<AppointmentTypeWithId[]> {
	try {
		const db = await connectToMongoDB();
		const collection = db?.collection('appointments');
		if (!collection) {
			console.log("empty collection");
			return [];
		}

		const unknown =  await collection?.find({}).toArray() as unknown;
		const appointments = unknown as AppointmentTypeWithId[];
		return appointments;
	} catch (e) {
		console.log(e);
		return [];
	}
}
export async function submitAppointment(
	data: AppointmentType
): Promise<continueAlertInfoType> {
	try {
		const db = await connectToMongoDB();
		
		const collection = db?.collection('appointments');
		const existing = await collection?.findOne(data);
		if (existing) {
			return {
				title: "There is already a request sent with this exact information!",
				description: "Please wait to recieve an email/phone call from a service representative",
				active: true,
				reload: true,
			}
		}
		collection?.insertOne(data);
		return {
			title: "Successfully submitted your request!",
			description: "Please wait to recieve an email/phone call from a service representative",
			active: true,
			reload: true,
		}
	} catch (error) {
		return {
			title: "Oops, something went wrong... ",
			description: "Please try again later",
			active: true,
			reload: false,
		}
	}
}
export async function changeAppointmentStatus(data: AppointmentTypeWithId, params: any, reload: boolean = true): Promise<continueAlertInfoType> {
	data._id = new ObjectId(data._id);
	try {
		const db = await connectToMongoDB();
		const collection = db?.collection("appointments");
		if (!collection) return {
			title: "Oops!",
			description: "Something went wrong accessing collection",
			active: true,
			reload: reload,
		};
		// Define the update operation
		const updateOperation = {
			$set: {...params},
		 };
		 console.log(updateOperation);
		await collection?.updateOne(data, updateOperation);
		return {
			title: "Successfully updated status for " + data.firstname + "!",
			description: "",
			active: true,
			reload: reload,
		}
	} catch (error) {
		return {
			title: "Oops! Something went wrong when trying to update status of this client",
			description: "Call Alexi",
			active: true,
			reload: false,
		}
	}
}
export async function handleDelete(id: ObjectId, collection: string): Promise<alertInfoType> {
	const objectId = new ObjectId(id);
	try {
		const db = await connectToMongoDB();
		const _collection = db?.collection(collection);
		
		_collection?.deleteOne({_id: objectId})
		return {
			title: "Successfully deleted appointment!",
			description: "Page will refresh",
			active: true,
			reload: true
		}

	} catch (e) {
		return {
			title: "Something went wrong!",
			description: "Call Alexi",
			active: true,
			reload: true
		}
	}
}

export async function isAdmin(code: string): Promise<boolean> { 
	return code == process.env.ADMIN_CODE;
}
