"use client"

import Image, { StaticImageData } from 'next/image';
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { useRef, useState } from "react";
import Cancelled from "@/assets/icons/cancelled.png";
import Checked from "@/assets/icons/checked.png";
import Waiting from "@/assets/icons/waiting.png";
import { handleDelete, updateAppointment as updateAppointment } from "@/lib/actions/backend";
import { AppointmentSchemaType } from "@/app/book/page";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { DayAndTimePicker } from '../DateAndTimePicker';
import { formateDate } from '@/lib/utils';
import { DropdownMenuLabel } from '@radix-ui/react-dropdown-menu';
import { toast } from '../ui/use-toast';
import DownArrow from "@/assets/icons/downarrow.png";
import Alert, { infoType } from '../ui/alert-custom';
import CreateAppointment from './CreateAppointment';

export default function AppointmentsList({ appointmentSTRING }: {
	appointmentSTRING: string
}  ) {
	const [alertInfo, setAlertInfo] = useState<infoType | null>(null)
	if (!appointmentSTRING) return (
		<div>{"Error getting data ... :("}</div>
	);
	const notesRef = useRef<any>(null);
	let appointment: AppointmentSchemaType[] = JSON.parse(appointmentSTRING);

 function handleOnDelete(appointment: AppointmentSchemaType) {
		setAlertInfo({
			title: `Are you sure you want to delete ${appointment.firstname} ${appointment.lastname}`,
			description: "This cannot be undone",
			callbackFunction: handleDelete(appointment?._id, 'appointments'),
		})
	}

	async function handleOnUpdateNotes(appointment: AppointmentSchemaType) {
		updateAppointment(appointment , { notes: notesRef.current.value }, false).then(res =>
			toast({
				title: res.title,
				description: res.description,
			})
		)
	}

	function statusToImage(status: string): StaticImageData{
		if (status == 'checked') return Checked;
		if (status == 'waiting') return Waiting;
		else return Cancelled;
	}

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
						<TableRow key={index}>
							<TableCell>{appointment.firstname} {appointment.lastname}</TableCell>
							<TableCell className='min-wassd-[22ss0px]'>
								<DayAndTimePicker appointment={appointment} />
							</TableCell>
							<TableCell>
								<DropdownMenu>
									<DropdownMenuTrigger>
										<Image src={DownArrow} width={15} height={15} alt='drop-down' />
									</DropdownMenuTrigger>
									<DropdownMenuContent className='text-center gap-1 grid'>
										<a className='hover:bg-primary-foreground p-2 rounded-md' href={`mailto:${appointment.email}`}>{appointment.email}</a>
										<div className='p-2'>{appointment.phone} </div>
									</DropdownMenuContent>
								</DropdownMenu>
							</TableCell>
							<TableCell className=''>
								<DropdownMenu>
									<DropdownMenuTrigger>
										<Image src={DownArrow} width={15} height={15} alt='drop-down' />
									</DropdownMenuTrigger>
									<DropdownMenuContent>
										<DropdownMenuLabel className='text-center'>Car</DropdownMenuLabel>
										<DropdownMenuSeparator />
										<DropdownMenuItem>{appointment.make} </DropdownMenuItem>
										<DropdownMenuItem>{appointment.model} </DropdownMenuItem>
										<DropdownMenuItem>{appointment.year} </DropdownMenuItem>
										<DropdownMenuItem 
											onClick={() => {
												toast({
													title: `Copied ${appointment.vin} to clipboard!`
												})
												navigator.clipboard.writeText(appointment.vin)
											}}
											className='hover:cursor-pointer hover:bg-secondary hover:text-secondary-foreground'
											>
												{appointment.vin} </DropdownMenuItem>
										<DropdownMenuLabel className='text-center mt-2'> How Soon?</DropdownMenuLabel>
										<DropdownMenuSeparator />
										<DropdownMenuItem>{appointment.urgency} </DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
							</TableCell>
							<TableCell>
								{formateDate(appointment.dateCreated)}
							</TableCell>
							<TableCell>
								<Button onClick={() => handleOnDelete(appointment)} variant={'destructive'}>Delete</Button>
							</TableCell>
						</TableRow>
					)}
						<CreateAppointment />
				</TableBody>
			</Table>
		</>
	)
}