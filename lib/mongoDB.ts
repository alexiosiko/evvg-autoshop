import { MongoClient } from 'mongodb';

const url: string | undefined = process.env.MONGODB_URL;
const dbName = "evvg-auto";

export async function connectToMongoDB() {
	if (!url)
		return;

	try {
		// Create a new MongoClient
		const client = new MongoClient(url);

		// Connect to the MongoDB server
		await client.connect();
		
		console.log("Connected to DB");

		// Return the database instance
		return client.db(dbName);

	} catch (error) {
		console.error('Error connecting to MongoDB:', error);
		throw error;
	}
}
