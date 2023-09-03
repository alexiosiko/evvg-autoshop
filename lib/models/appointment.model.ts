import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
	id: { type: String, required: true },
	firstname: { type: String, required: true, unique: true },
	lastname: { type: String, required: true },
})