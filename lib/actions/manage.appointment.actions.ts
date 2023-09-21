"use server"

import { ObjectId, Document, WithId } from "mongodb"; // Import 'Document' type
import { connectToMongoDB } from "../mongoDB";
import { AppointmentFormType, AppointmentType } from "@/contants/types/AppointmentTypes";

// Define a type for the MongoDB document you're working with
type AppointmentDocument = WithId<Document & AppointmentType>;

export async function handleApprove(objectId: ObjectId, approved: boolean): Promise<string> {
	const objectIdNew = new ObjectId(objectId);
	try {
		const db = await connectToMongoDB();
		if (!db) {
			console.error("Failed to connect to MongoDB.");
			return "Failed to connect to MongoDB.";
		}

		// Get collections
		const pendingAppointments = db.collection<AppointmentDocument>('pending'); // Specify the type

		const activeCollection = db.collection<AppointmentDocument>('active'); // Specify the type

		// Find document
		const foundDocument = await pendingAppointments.findOne({ _id: objectIdNew });

		if (!foundDocument) {
			console.log("Could not find document with ObjectId: " + objectIdNew);
			return "Could not find document with ObjectId: " + objectIdNew;
		}

		if (approved)
			// Insert document to appointments
			await activeCollection.insertOne(foundDocument);

		// Remove document from pendingAppointments
		await pendingAppointments.deleteOne(foundDocument);

		console.log("worked");
		return "success";
	} catch (error) {
		console.error("Failed backend:", error);
		return "Failed backend";
	}
}

export async function insertAppointment(collection: string, body: AppointmentFormType): Promise<string> {

	console.log("getAppointments()");
	try {
		const db = await connectToMongoDB();
		if (!db) {
			console.error("Failed to connect to MongoDB.");
			return "failed";
		}
		
		const appointmentsCollection = db.collection(collection);

		appointmentsCollection.insertOne(body);

		return "success"
		} catch (error) {
			console.error("Error in getAppointments:", error);
			return "failed";
		}
}

export async function handleComplete(objectId: ObjectId, completed: boolean): Promise<{
	title: string,
	description: string,
	active: boolean,
	reload: boolean
}> {
	console.log("handleDecline()");
	const objectIdNew = new ObjectId(objectId);
	try {
		const db = await connectToMongoDB();
		if (!db) {
			return { title: "Could not connect to database", description: "It's not you, it's us. Please let IT know of this error", active: true, reload: false};
		}

		// Get collections
		const activeAppointments = db.collection<AppointmentDocument>("active");

		// Find document
		const foundDocument = await activeAppointments.findOne({ _id: objectIdNew });

		if (!foundDocument) {
			return { title: "Could not find document", description: "It's not you, it's us. Please let IT know of this error", active: true, reload: false};
		}

		// Remove document from pendingAppointments
		activeAppointments.deleteOne(foundDocument);

		// Add complete boolean
		foundDocument.completed = completed;

		// Add document to history
		const historyCollection = db.collection('history');

		if (completed)
			historyCollection.insertOne(foundDocument);

		return { title: "Successfully declined appointment!", description: "Appointment details: " + {...foundDocument}, active: true, reload: true};
	} catch (error) {
		return { title: "Error with MongoDB", description: "It's not you, it's us. Please let IT know of this error", active: true, reload: false};
	}
}
