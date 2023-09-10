"use client"

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
 } from "@/components/pending-appointments/ui/dropdown-menu"
 
import React from 'react';
import { Button } from './ui/button';
import Image from 'next/image';
import Plus from "@/assets/icons/plus.png";
import { pendingAppointmentType } from "@/app/manage-appointments/page";
import { handleApprove, handleDecline } from "@/lib/actions/manage.appointment.actions";
import { ObjectId } from "mongodb";

// Chat GPT
function removePhoneFormat(phoneNumber: string): string {
	// Use a regular expression to remove non-numeric characters
	return phoneNumber.replace(/[^0-9]/g, '');
 }
type PendingAppointmentType = {
	appointmentSTRING: string,
}
export default function PendingAppointment ({ appointmentSTRING }: PendingAppointmentType ) {

	function handleOnApprove(objectId: ObjectId) {
		alert(handleApprove(objectId));
	}
	function handleOnDecline(objectId: ObjectId) {
		alert(handleDecline(objectId));
	}
	const appointment: pendingAppointmentType = JSON.parse(appointmentSTRING);
	return (
    <div className="grid grid-cols-7 gap-4 mb-4 shadow-sm shadow-foreground/50 p-4 items-center text-center justify-center align-middle rounded-3xl">
      <h1>{appointment.firstname} {appointment.lastname}</h1>
		{/* <div className='w-28'>{appointment.date.toDateString()} {appointment.date.getHours()}:00</div> */}
		<DropdownMenu>
			<DropdownMenuTrigger className='flex gap-4 justify-center'>
				<h1>Services</h1>
				<Image src={Plus} alt="minus" width={20} height={20}/>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				{appointment.services.map((service: string, index: number) =>
					<DropdownMenuItem key={index} className='justify-center'>{service}</DropdownMenuItem>)}
			</DropdownMenuContent>
		</DropdownMenu>
		<DropdownMenu>
			<DropdownMenuTrigger className='flex gap-4 justify-center'>
				<h1>Car</h1>
				<Image src={Plus} alt="minus" width={20} height={20}/>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				{appointment.brand != "" && <DropdownMenuItem className='justify-center'>{appointment.brand}</DropdownMenuItem>}
				{appointment.model != "" && <DropdownMenuItem className='justify-center'>{appointment.model}</DropdownMenuItem>}
				{appointment.year != "" && <DropdownMenuItem className='justify-center'>{appointment.year}</DropdownMenuItem>}
			</DropdownMenuContent>
		</DropdownMenu>
		<DropdownMenu>
			<DropdownMenuTrigger className='flex gap-4 justify-center'>
				<h1>Contact</h1>
				<Image src={Plus} alt="minus" width={20} height={20}/>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuItem className='justify-center'><a href={`mailto:${appointment.email}`}>Email</a></DropdownMenuItem>
				<DropdownMenuItem className='justify-center'><a href={`tel:${removePhoneFormat(appointment.phone)}`}>{appointment.phone}</a></DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
		<DropdownMenu>
			<DropdownMenuTrigger className='flex gap-4 justify-center'>
				<h1>Notes</h1>
				<Image src={Plus} alt="minus" width={20} height={20}/>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuItem className='justify-center'><p>{appointment.notes}</p></DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
		<Button onClick={() => handleOnApprove(appointment._id)} variant={'gradient'}>Approve</Button>
		<Button onClick={() => handleOnDecline(appointment._id)} variant={'destructive'}>Decline</Button>

    </div>
  );
};

