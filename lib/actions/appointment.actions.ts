"use server"

import { myFormType } from "@/contants/types/AppointmentTypes";
import { connectToMongoDB } from "../mongoDB";

export async function getAppointmentsSerialized(): Promise<string> {
	console.log("getAppointmentsSerialized()")
	const db = await connectToMongoDB();
	if (!db) {
		console.error("Failed to connect to MongoDB.");
		return "";
	}
	const appointmentsCollection = db.collection('appointments');
	let appointmentsObject = appointmentsCollection.find({});
	let appointmentsJsonString =  JSON.stringify(await appointmentsObject.toArray());
	return appointmentsJsonString;
}
export async function requestAppointment(body: myFormType): Promise<string> {
	console.log("requestAppointment()")

	try {
		const db = await connectToMongoDB();
		if (!db) {
			console.error("Failed to connect to MongoDB.");
			return "Failed to connect to database. Please tell IT";
		}
		const pendingAppointments = db.collection('pending-appointments');
		pendingAppointments.insertOne(body);
		
		return "Success";
	} catch (error) {
		console.log(error);
		return "Failed to upload information";
	}
}