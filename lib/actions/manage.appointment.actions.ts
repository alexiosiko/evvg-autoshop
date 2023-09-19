"use server"

import { Db, ObjectId, Document, WithId } from "mongodb"; // Import 'Document' type
import { connectToMongoDB } from "../mongoDB";
import { AppointmentType } from "@/contants/types/AppointmentTypes";

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
		const pendingAppointments = db.collection<AppointmentDocument>('pending-appointments'); // Specify the type

		const targetCollection = db.collection<AppointmentDocument>('appointments'); // Specify the type

		// Find document
		const foundDocument = await pendingAppointments.findOne({ _id: objectIdNew });

		if (!foundDocument) {
			console.log("Could not find document with ObjectId: " + objectIdNew);
			return "Could not find document with ObjectId: " + objectIdNew;
		}

		if (approved)
			// Insert document to appointments
			await targetCollection.insertOne(foundDocument);

		// Remove document from pendingAppointments
		await pendingAppointments.deleteOne(foundDocument);

		console.log("worked");
		return "success";
	} catch (error) {
		console.error("Failed backend:", error);
		return "Failed backend";
	}
}

export async function addAppointmentToHistory(body: AppointmentDocument, db: Db) {
  if (!db) {
    console.error("Failed to connect to MongoDB.");
    return "Failed to connect to MongoDB.";
  }
  if (!body) {
    console.error("Failed to get body to add to history.");
    return "Failed to get body to add to history.";
  }

  try {
    const history = db.collection('history');
    history.insertOne(body); // Insert the 'body' variable

    return "Successfully added to history";
  } catch (error) {
    return `Could not add ${body.firstname} to history`;
  }
}

export async function handleComplete(objectId: ObjectId, completed: boolean): Promise<{
	title: string,
	description: string,
	active: boolean
}> {
	console.log("handleDecline()");
	const objectIdNew = new ObjectId(objectId);
	try {
		const db = await connectToMongoDB();
		if (!db) {
			return { title: "Could not connect to database", description: "It's not you, it's us. Please let IT know of this error", active: true};
		}

		// Get collections
		const appointments = db.collection<AppointmentDocument>("appointments");

		// Find document
		const foundDocument = await appointments.findOne({ _id: objectIdNew });

		if (!foundDocument) {
			return { title: "Could not find document", description: "It's not you, it's us. Please let IT know of this error", active: true};
		}

		// Remove document from pendingAppointments
		await appointments.deleteOne(foundDocument);

		// Add complete boolean
		foundDocument.completed = completed;

		// Add document to history
		addAppointmentToHistory(foundDocument, db);

		return { title: "Successfully declined appointment!", description: "Appointment details: " + {...foundDocument}, active: true};
	} catch (error) {
		return { title: "Error with MongoDB", description: "It's not you, it's us. Please let IT know of this error", active: true};
	}
}
