"use server"

import { ObjectId } from "mongodb";
import { connectToMongoDB } from "../mongoDB";

export async function handleApprove(objectId: ObjectId): Promise<string> {
	const objectIdNew = new ObjectId(objectId);
	try {

	const db = await connectToMongoDB();
	if (!db) {
		console.error("Failed to connect to MongoDB.");
		return "Failed to connect to MongoDB.";
	}
	
	// Get collections
	const pendingAppointments = db.collection('pending-appointments');
	const appointments = db.collection('appointments');

	// Find document
	const foundDocument = await pendingAppointments.findOne({ _id: objectIdNew });

	if (!foundDocument) {
		console.log("Could not find document with ObjectId: " + objectIdNew);
		return "Could not find document with ObjectId: " + objectIdNew;
	}

	// Insert document to appointments
	await appointments.insertOne(foundDocument);

	// Remove document from pendingAppointments
	await pendingAppointments.deleteOne(foundDocument);

	console.log("worked");
	return "success";
	} catch (error) {
		return "Failed backend";
	}
}
export async function handleDecline(objectId: ObjectId): Promise<string> {
	const objectIdNew = new ObjectId(objectId);
	try {

	const db = await connectToMongoDB();
	if (!db) {
		console.error("Failed to connect to MongoDB.");
		return "Failed to connect to MongoDB.";
	}
	
	// Get collections
	const pendingAppointments = db.collection('pending-appointments');

	// Find document
	const foundDocument = await pendingAppointments.findOne({ _id: objectIdNew });

	if (!foundDocument) {
		console.log("Could not find document with ObjectId: " + objectIdNew);
		return "Could not find document with ObjectId: " + objectIdNew;
	}

	// Remove document from pendingAppointments
	await pendingAppointments.deleteOne(foundDocument);

	console.log("Successfully declined appointment");
	return "Successfully declined appointment";
	} catch (error) {
		return "Failed backend";
	}
}