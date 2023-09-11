"use client"

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
 } from "@/components/ui/dropdown-menu"
 
import React from 'react';
import Image from 'next/image';
import Plus from "@/assets/icons/plus.png";
import { handleApprove, handleDecline } from "@/lib/actions/manage.appointment.actions";
import { ObjectId } from "mongodb";
import { Button } from "@/components/ui/button";
import { appointmentType } from "@/contants/types/AppointmentTypes";


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
	const appointment: appointmentType = JSON.parse(appointmentSTRING);
	appointment.date = new Date(appointment.date); // This resets the date type?

	return (
    <div className="grid grid-cols-8 p-4 mb-4 shadow-sm shadow-foreground/50 items-center text-center justify-center align-middle rounded-3xl">
      <h1>{appointment.firstname} {appointment.lastname}</h1>
		<div className='w-28'>{appointment.date.toDateString()} {appointment.date.getHours()}:00</div>
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
				{/* <DropdownMenuItem className='justify-center'><a href={`tel:${appointment.phone && removePhoneFormat(appointment.phone)}`}>{appointment.phone}</a></DropdownMenuItem> */}
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

