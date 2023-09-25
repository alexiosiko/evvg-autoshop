"use client"

import { formateDate } from "@/lib/utils"
import { DayAndTimePicker } from "../DateAndTimePicker"
import { TableCell, TableRow } from "../ui/table"
import { Textarea } from "../ui/textarea"
import { toast } from "../ui/use-toast"
import Image from "next/image"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { AppointmentSchemaType } from "@/app/book/page"
import DownArrow from "@/assets/icons/downarrow.png"
import { useState } from "react"
import { handleDelete, updateAppointment } from "@/lib/actions/backend"
import { infoType } from "../ui/alert-custom"
import TrashIcon from "@/assets/icons/trash.png"
import SaveIcon from "@/assets/icons/save.png"

export default function Appointment({ appointment, setAlertInfo }: { 
	appointment: AppointmentSchemaType,
	setAlertInfo: (alertInfo: infoType) => void,

}) {
	const [notes, setNotes] = useState<string>(appointment.notes);
	const [date, setDate] = useState<Date | null>(appointment.date ? new Date(appointment.date) : null);
	const [reload, setReload] = useState<boolean>(false);

	function handleOnUpdate() {
		const updateParams = {
			date: date,
			notes: notes,
		}
		updateAppointment(appointment, updateParams).then(res => 
			toast({
				title: res.title,
				description: res.description,
			})
		)
		// Set params for new update to show UI that it's updated
		appointment.notes = notes;
		appointment.date = date;

		// Reload component
		setReload(!reload);
	}
	function junk() {

	}
	function handleOnDelete() {
		setAlertInfo({
			title: `Are you sure you want to DELETE ${appointment.firstname} ${appointment.lastname}`,
			description: "This cannot be undone",
			callbackFunction: () => handleDelete(appointment?._id, 'appointments'),
			back: true,
			destructive: true
		})
	}

	function calculateHighlighted(): string {
		if (notes != appointment.notes)
			return "bg-red-200";
		return ""
	}

	return (
		<TableRow>
			<TableCell>{appointment.firstname} {appointment.lastname}</TableCell>
			<TableCell className='min-wassd-[22ss0px]'>
				<DayAndTimePicker appointment={appointment} date={date} setDate={setDate} />
			</TableCell>
			<TableCell className="w-12">
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
			<TableCell className="w-12">
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
				<Textarea 
					defaultValue={appointment.notes} 
					placeholder="Enter notes" 
					onChange={(e) => setNotes(e.target.value)}
					className={`${calculateHighlighted()}`} />
			</TableCell>
			<TableCell>
				<button onClick={() => handleOnUpdate()}>
					<Image src={SaveIcon} alt="trash-icon" height={25} width={25} />
				</button>
			</TableCell>
			<TableCell>
				<button onClick={() => handleOnDelete()}>
					<Image src={TrashIcon} alt="trash-icon" height={25} width={25} />
				</button>
			</TableCell>
		</TableRow>
	)
}