"use client"

import Plus from "@/assets/icons/plus.png";
import Image from 'next/image';
import { Button } from "../ui/button";
import { AppointmentType } from "@/contants/types/AppointmentTypes";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { handleComplete } from "@/lib/actions/manage.appointment.actions";
import { AlertContinue } from "../alerts/Continue";
import { useState } from "react";

export default function Appointment({ appointmentSTRING }: { appointmentSTRING: string}  ) {
	if (!appointmentSTRING) return;

	const [alertInfo, setAlertInfo] = useState<{
		title: string;
		description: string;
		active: boolean,
	}>({ title: "", description: "", active: false });

	let appointment: AppointmentType = JSON.parse(appointmentSTRING);
	appointment.date = new Date(appointment.date); // This resets the date type?
	
	async function handleOnDecline() {
		setAlertInfo(await handleComplete(appointment._id, false));
		console.log("handleondecline");
	}
	async function handleOnComplete() {
		setAlertInfo(await handleComplete(appointment._id, false));
		window.location.reload();

	}

	return (
		<div className="grid grid-cols-8 gap-4 mb-4 shadow-sm shadow-foreground/50 p-4 items-center text-center rounded-3xl">
			<AlertContinue alertInfo={alertInfo} setAlertInfo={setAlertInfo}/>
			<h1>{appointment.username}</h1>
			<div className='w-28'>{appointment.date.toDateString()} {appointment.date.getHours()}:00</div>
			<DropdownMenu>
				<DropdownMenuTrigger className='flex gap-4 justify-center'>
					<h1>Services</h1>
					<Image src={Plus} alt="minus" width={20} height={20}/>
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					{appointment.services.map((service: string, index: number) =>
						<DropdownMenuItem key={index} className='justify-center'>
							{service}
						</DropdownMenuItem>)}
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
					{/* <DropdownMenuItem className='justify-center'><a href={`tel:${removePhoneFormat(appointment.phone)}`}>{appointment.phone}</a></DropdownMenuItem> */}
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
			<Button variant={'gradient'} onClick={handleOnComplete}>Completed</Button>
			<Button variant={'destructive'} onClick={handleOnDecline}>Cancel</Button>
    	</div>
	)
}