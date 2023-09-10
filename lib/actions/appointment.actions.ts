"use server"

import { myFormType } from "@/contants/types/AppointmentTypes";
import { connectToMongoDB } from "../mongoDB";
import { currentUser } from "@clerk/nextjs";
import { pendingAppointmentType } from "@/app/manage-appointments/page";

export async function getAppointments(): Promise<any[]> {
	console.log("getAppointments()");
	
	try {
		const db = await connectToMongoDB();
		if (!db) {
			console.error("Failed to connect to MongoDB.");
			return [];
		}
		
		const appointmentsCollection = db.collection('appointments');
		
		// Use .toArray() to await the MongoDB query result
		const appointmentsArray = await appointmentsCollection.find({}).toArray();
		
		return appointmentsArray; // Return MongoDB objects as JavaScript objects
		} catch (error) {
		console.error("Error in getAppointments:", error);
		return [];
		}
 }
 export async function getPendingAppointments(): Promise<pendingAppointmentType[]> {
	console.log("getAppointments()");
	
	try {
		const db = await connectToMongoDB();
		if (!db) {
			console.error("Failed to connect to MongoDB.");
			return [];
		}
		
		const appointmentsCollection = db.collection('pending-appointments');
		
		// Use .toArray() to await the MongoDB query result
		const appointmentsArray = await appointmentsCollection.find({}).toArray();
		
		// Map MongoDB objects to pendingAppointmentType
		const pendingAppointments: pendingAppointmentType[] = appointmentsArray.map((appointment) => ({
			_id: appointment._id,
			firstname: appointment.firstname,
			lastname: appointment.lastname,
			email: appointment.email,
			phone: appointment.phone,
			services: appointment.services,
			vehicletype: appointment.vehicletype,
			notes: appointment.notes,
			year: appointment.year,
			brand: appointment.brand,
			model: appointment.model,
			date: appointment.date,
			time: appointment.time,
			id: appointment.id,
		 }));

		return pendingAppointments;
		} catch (error) {
			console.error("Error in getAppointments:", error);
			return [];
		}
 }
export async function requestAppointment(body: myFormType): Promise<string> {
	console.log("requestAppointment()");

	// Get user
	const user = await currentUser();

	// Store email
	if (user && user.primaryEmailAddressId) 
		body.email = user.primaryEmailAddressId;

	// Store id
	if (user && user.id)
		body.id = user.id;

	// Store date created
	body.dateCreated = new Date();

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