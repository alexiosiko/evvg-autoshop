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
import { handleApprove as handleApproveOrDecline } from "@/lib/actions/manage.appointment.actions";
import { Button } from "@/components/ui/button";
import { AppointmentType } from "@/contants/types/AppointmentTypes";


type PendingAppointmentType = {
	appointmentSTRING: string,
	isAdmin: boolean,
}
export default function PendingAppointment ({ appointmentSTRING, isAdmin }: PendingAppointmentType ) {

	async function handleOnApproveOrDecline(approved: boolean) {
		alert(await handleApproveOrDecline(appointment._id, approved));
		window.location.reload();
	}
	async function handleOnCancel() {
		window.location.reload();
	}
	const appointment: AppointmentType = JSON.parse(appointmentSTRING);
	appointment.date = new Date(appointment.date); // This resets the date type?

	return (
    <div className={`${isAdmin ? 'grid-cols-9' : 'grid-cols-7'} grid p-4 mb-4 shadow-sm shadow-foreground/50 items-center text-center justify-center align-middle rounded-3xl `}>
      <h1>{appointment.username}</h1>
		<div>{appointment.date.toDateString()} {appointment.date.getHours()}:00</div>
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
				<DropdownMenuItem className='justify-center'><a href={`mailto:${appointment.email}`}>{appointment.email}</a></DropdownMenuItem>
				<DropdownMenuItem className='justify-center'><a href={''}>{appointment.phone}</a></DropdownMenuItem>
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
		{isAdmin ?
			<>
		<div>{appointment.dateCreated.toString()}</div>

				<Button onClick={() => handleOnApproveOrDecline(true)} variant={'gradient'} className="m-2">
					Approve
				</Button>
				<Button onClick={() => handleOnApproveOrDecline(false)} variant={'destructive'} className="m-2">
					Decline
				</Button> 
			</>
			: // Is NOT admin
			<>
				<Button onClick={() => handleOnCancel()} variant={'destructive'} className="m-2">
					Cancel
				</Button>
			</>
		}
		
    </div>
  );
};

