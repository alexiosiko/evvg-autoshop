"use server"

import { AppointmentType, AppointmentFormType } from "@/contants/types/AppointmentTypes";
import { connectToMongoDB } from "../mongoDB";

export async function getAppointments(collection: string, id: string, isAdmin: boolean = false): Promise<AppointmentType[]> {
	console.log("getAppointments()");
	try {
		const db = await connectToMongoDB();
		if (!db) {
			console.error("Failed to connect to MongoDB.");
			return [];
		}
		
		const appointmentsCollection = db.collection(collection);
		

		let appointmentsArray: any;
		// Use .toArray() to await the MongoDB query result
		if (isAdmin)
			appointmentsArray = await appointmentsCollection.find({}).toArray();
		else
			appointmentsArray = await appointmentsCollection.find({ id: id}).toArray();

		
		return appointmentsArray; // Return MongoDB objects as JavaScript objects
		} catch (error) {
			console.error("Error in getAppointments:", error);
			return [];
		}
}

