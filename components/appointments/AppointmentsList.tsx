"use client"

import { useState } from "react";
import { AppointmentSchemaType } from "@/app/book/page";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import Alert, { alertInfoType } from '../ui/alert-custom';
import CreateAppointment from './CreateAppointment'
import Appointment from './Appointment';

export default function AppointmentsList({ appointmentSTRING }: {
	appointmentSTRING: string
}  ) {
	const [alertInfo, setAlertInfo] = useState<alertInfoType | null>(null)
	if (!appointmentSTRING) return (
		<div>{"Error getting data ... :("}</div>
	);
	let appointment: AppointmentSchemaType[] = JSON.parse(appointmentSTRING);

	return (
		<>
			<Alert info={alertInfo} />
			<Table>
				<TableCaption>List of all appointments</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead>Name</TableHead>
						<TableHead>Appointment</TableHead>
						<TableHead>Contact</TableHead>
						<TableHead>Car</TableHead>
						<TableHead>Date Created</TableHead>
						<TableHead>Notes</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{appointment.map((appointment, index: number) => 
						<Appointment key={index} appointment={appointment} setAlertInfo={setAlertInfo} />
					)}
				</TableBody>
			</Table>
		</>
	)
}