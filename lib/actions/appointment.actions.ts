"use server"

import { AppointmentType, AppointmentFormType } from "@/contants/types/AppointmentTypes";
import { connectToMongoDB } from "../mongoDB";
import { currentUser } from "@clerk/nextjs";

export async function getAppointments(id: string, isAdmin: boolean = false): Promise<AppointmentType[]> {
	console.log("getAppointments()");
	
	try {
		const db = await connectToMongoDB();
		if (!db) {
			console.error("Failed to connect to MongoDB.");
			return [];
		}
		
		const appointmentsCollection = db.collection('appointments');
		

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
export async function getPendingAppointments(id: string, isAdmin: boolean = false): Promise<AppointmentType[]> {
	console.log("getAppointments()");

	try {
		const db = await connectToMongoDB();
		if (!db) {
			console.error("Failed to connect to MongoDB.");
			return [];
		}
		
		const appointmentsCollection = db.collection('pending-appointments');
		

		let appointmentsArray: any;
		// Use .toArray() to await the MongoDB query result
		if (isAdmin)
			appointmentsArray = await appointmentsCollection.find({}).toArray();
		else
			appointmentsArray = await appointmentsCollection.find({ id: id}).toArray();
		
		// Map MongoDB objects to pendingAppointmentType
		const pendingAppointments: AppointmentType[] = appointmentsArray.map((appointment: any) => ({
			_id: appointment._id,
			username: appointment.username,
			email: appointment.email,
			phone: appointment.phone,
			services: appointment.services,
			vehicletype: appointment.vehicletype,
			notes: appointment.notes,
			year: appointment.year,
			brand: appointment.brand,
			model: appointment.model,
			date: appointment.date,
			dateCreated: appointment.dateCreated,
			time: appointment.time,
			id: appointment.id,
		}));

		return pendingAppointments;
		} catch (error) {
			console.error("Error in getAppointments:", error);
			return [];
	}
}
export async function requestAppointment(body: AppointmentFormType): Promise<string> {
	console.log("requestAppointment()");
	try {
		const db = await connectToMongoDB();
		if (!db) {
			console.error("Failed to connect to MongoDB.");
			return "Failed to connect to database. Please tell IT";
		}
		const pendingAppointments = db.collection('pending-appointments');
		pendingAppointments.insertOne(body);
		return "success";
	} catch (error) {
		console.error(error);
		return "Failed to upload information";
	}
}

export async function getAppointmentHistory(id: string, isAdmin: boolean = false): Promise<AppointmentType[]> {
	console.log("getAppointmentHistory()");

	try {
		const db = await connectToMongoDB();
		if (!db) {
			console.error("Failed to connect to MongoDB.");
			return [];
		}
		
		const appointmentsCollection = db.collection('history');

		let appointmentsArray: any;
		// Use .toArray() to await the MongoDB query result
		if (isAdmin)
			appointmentsArray = await appointmentsCollection.find({}).toArray();
		else
			appointmentsArray = await appointmentsCollection.find({ id: id}).toArray();

		return appointmentsArray;
		} catch (error) {
			console.error("Error in getAppointments:", error);
			return [];
		}

}