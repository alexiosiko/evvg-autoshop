"use client"

import Image, { StaticImageData } from 'next/image';
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { AlertContinue, alertInfoType } from "../alerts/Continue";
import { useRef, useState } from "react";
import Cancelled from "@/assets/icons/cancelled.png";
import Checked from "@/assets/icons/checked.png";
import Waiting from "@/assets/icons/waiting.png";
import FileEdit from "@/assets/icons/file-edit.png";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";
import { Textarea } from "../ui/textarea";
import { handleDelete, changeAppointmentStatus as updateAppointment } from "@/lib/actions/backend";
import { ObjectId } from "mongodb";
import { AppointmentTypeWithId } from "@/app/book/page";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

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
		console.log(status);
		if (appointment.status == status)
			return;
		console.log(await updateAppointment(appointment , { status: status }));
	}
	async function handleOnUpdateNotes(appointment: AppointmentTypeWithId) {
		console.log(await updateAppointment(appointment , { notes: notesRef.current.value }, false));
	}

	function statusToImage(status: string): StaticImageData{
		if (status == 'checked') return Checked;
		if (status == 'waiting') return Waiting;
		else return Cancelled;
	}

	return (
		<>
			<AlertContinue alertInfo={alertInfo} setAlertInfo={setAlertInfo}/>
			<Table>
				<TableCaption>List of all appointments</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead>Name</TableHead>
						<TableHead>Contact</TableHead>
						<TableHead>Car</TableHead>
						<TableHead>Services</TableHead>
						<TableHead>When</TableHead>
						<TableHead>Status</TableHead>
						<TableHead>Notes</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{appointment.map((appointment, index: number) => 
						<TableRow key={index}>
							<TableCell>{appointment.firstname} {appointment.lastname}</TableCell>
							<TableCell>
								<>{appointment.email} </>
								<>{appointment.phone} </>
							</TableCell>
							<TableCell>
								<>{appointment.make} </>
								<>{appointment.model} </>
								<>{appointment.year} </>
							</TableCell>
							<TableCell>
								<DropdownMenu>
									<DropdownMenuTrigger className="items-center gap-4">
										<div className="left-1.5 relative ">Services +</div>
									</DropdownMenuTrigger>
									<DropdownMenuContent >
										<DropdownMenuItem className="justify-center">{appointment.details}</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
							</TableCell>
							<TableCell>
								{appointment.urgency}
							</TableCell>
							<TableCell>
								<Popover>
									<PopoverTrigger>
										{appointment.status}
									</PopoverTrigger>
									<PopoverContent className="grid grid-cols-3 gap-2">
										<Button onClick={() => handleOnChangeStatus(appointment, "Cancelled")}>Cancelled</Button>
										<Button onClick={() => handleOnChangeStatus(appointment, "Waiting")}>Waiting</Button>
										<Button onClick={() => handleOnChangeStatus(appointment, "Finished")}>Finished</Button>
									</PopoverContent>
								</Popover>
							</TableCell>
							<TableCell>
								<Collapsible>
								<CollapsibleTrigger>
									<Image src={FileEdit} width={25} height={25} alt='Click to Edit' />
								</CollapsibleTrigger>
								<CollapsibleContent className="">
									<Textarea
										className="rounded-t-none m-2"
										ref={notesRef}
										defaultValue={appointment.notes}
										placeholder="Your personal notes for this client" />
									<Button className="self-center" onClick={() => handleOnUpdateNotes(appointment)}>Update</Button>
								</CollapsibleContent>
								</Collapsible>
							</TableCell>
							<TableCell>
								<Button onClick={() => handleOnDelete(appointment._id)} variant={'destructive'}>Delete</Button>
							</TableCell>
						</TableRow>
					)}
				</TableBody>
			</Table>
		</>
	)
}