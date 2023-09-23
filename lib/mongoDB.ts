import { MongoClient } from 'mongodb';

const url: string | undefined = process.env.MONGODB_URL;

if (!url)
	throw new Error("Please add MONGODB_URL to .env.local");

let client = new MongoClient(url);
let DB = new MongoClient(url).connect().then(client => client.db("evvg-auto"))
export default DB;