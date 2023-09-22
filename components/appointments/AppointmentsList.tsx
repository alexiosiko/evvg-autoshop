"use client"

import Plus from "@/assets/icons/plus.png";
import Image, { StaticImageData } from 'next/image';
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { AlertContinue, alertInfoType } from "../alerts/Continue";
import { useRef, useState } from "react";
import { Card, CardTitle } from "../ui/card";
import TrashCan from "@/assets/icons/trash.png";
import Cancelled from "@/assets/icons/cancelled.png";
import Checked from "@/assets/icons/checked.png";
import Waiting from "@/assets/icons/waiting.png";
import FileEdit from "@/assets/icons/file-edit.png";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";
import { Textarea } from "../ui/textarea";
import { handleDelete, changeAppointmentStatus as updateAppointment } from "@/lib/actions/backend";
import { ObjectId } from "mongodb";
import { AppointmentTypeWithId } from "@/app/book/page";

export default function AppointmentsList({ appointmentSTRING }: {
	appointmentSTRING: string
}  ) {
	if (!appointmentSTRING) return (
		<div>{"Error getting data ... :("}</div>
	);

	const notesRef = useRef<any>(null);
	const [alertInfo, setAlertInfo] = useState<alertInfoType>({ title: "", description: "", active: false, reload: false });

	let appointment: AppointmentTypeWithId[] = JSON.parse(appointmentSTRING);
	
	async function handleOnDelete(_id: ObjectId) {
		setAlertInfo(await handleDelete(_id, "appointments"));
	}
	async function handleOnChangeStatus(appointment: AppointmentTypeWithId, status: string) {
		if (appointment.status == status)
			return;
		setAlertInfo(await updateAppointment(appointment , { status: status }));
	}
	async function handleOnUpdateNotes(appointment: AppointmentTypeWithId) {
		setAlertInfo(await updateAppointment(appointment , { notes: notesRef.current.value }, false));
	}

	function statusToImage(status: string): StaticImageData{
		if (status == 'checked') return Checked;
		if (status == 'waiting') return Waiting;
		else return Cancelled;
	}

	return (
		<div>
			<AlertContinue alertInfo={alertInfo} setAlertInfo={setAlertInfo} />
			{appointment.map((appointment: AppointmentTypeWithId, index) => 
				<Collapsible key={index} >
					<Card tabIndex={index} className="grid grid-cols-8 justify-evenly p-4 items-center text-center">
						<CardTitle className="col-span-2">{appointment.firstname} {appointment.lastname}</CardTitle>
						<DropdownMenu>
							<DropdownMenuTrigger className="flex justify-center items-center gap-4">
								<CardTitle>Contact</CardTitle>
								<Image src={Plus} alt="plus" width={25} height={25} />
							</DropdownMenuTrigger>
							<DropdownMenuContent>
								<DropdownMenuItem className="justify-center">{appointment.email}</DropdownMenuItem>
								<DropdownMenuItem className="justify-center">{appointment.phone}</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
						<DropdownMenu>
							<DropdownMenuTrigger className="flex justify-center items-center gap-4">
								<CardTitle>Car</CardTitle>
								<Image src={Plus} alt="plus" width={25} height={25} />
							</DropdownMenuTrigger>
							<DropdownMenuContent>
								<DropdownMenuItem className="justify-center">{appointment.make}</DropdownMenuItem>
								<DropdownMenuItem className="justify-center">{appointment.model}</DropdownMenuItem>
								<DropdownMenuItem className="justify-center">{appointment.year}</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
						<DropdownMenu>
							<DropdownMenuTrigger className="flex justify-center items-center gap-4">
								<CardTitle>Services</CardTitle>
								<Image src={Plus} alt="plus" width={25} height={25} />
							</DropdownMenuTrigger>
							<DropdownMenuContent >
								<DropdownMenuItem className="justify-center">{appointment.urgency}</DropdownMenuItem>
								<DropdownMenuItem className="justify-center">{appointment.details}</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
						<DropdownMenu>
							<DropdownMenuTrigger>
								<div className="hover:bg-accent-foreground transition w-14 p-4 rounded-md justify-center m-auto">
									<Image className="m-auto" src={statusToImage(appointment.status)} width={25} height={25} alt="status-image" />
								</div>
							</DropdownMenuTrigger>
							<DropdownMenuContent>
								<Button variant={'ghost'} onClick={() => handleOnChangeStatus(appointment, "checked")}>
									<Image src={Checked} width={25} height={25} alt="checked" />
								</Button>
								<Button variant={'ghost'} onClick={() => handleOnChangeStatus(appointment, "waiting")}>
									<Image src={Waiting} width={25} height={25} alt="waiting" />
								</Button>
								<Button variant={'ghost'} onClick={() => handleOnChangeStatus(appointment, "cancelled")}>
									<Image src={Cancelled} width={25} height={25} alt="cancelled" />
								</Button>
							</DropdownMenuContent>
						</DropdownMenu>
						<CollapsibleTrigger>
							<div className="hover:bg-accent-foreground transition w-14 p-4 rounded-md justify-center m-auto">
								<Image src={FileEdit} width={25} height={25} alt="edit" />
							</div>
						</CollapsibleTrigger>
						<DropdownMenu>
							<DropdownMenuTrigger>
								<div className="hover:bg-accent-foreground transition w-14 p-4 rounded-md justify-center m-auto">
									<Image src={TrashCan}  width={25} height={25} alt="trashCan" />
								</div>
							</DropdownMenuTrigger>
							<DropdownMenuContent>
								<Button className="flex w-full" variant={'destructive'} onClick={() => handleOnDelete(appointment._id)}>Delete</Button>
							</DropdownMenuContent>
						</DropdownMenu>
					</Card>
				<CollapsibleContent className="flex gap-x-4 p-4 pt-0 items-center ">
					<Textarea
					className="rounded-t-none "
						ref={notesRef}
						defaultValue={appointment.notes}
						placeholder="Your personal notes for this client" />
					<Button onClick={() => handleOnUpdateNotes(appointment)}>Update</Button>
				</CollapsibleContent>
			</Collapsible>
			)}
    	</div>
	)
}