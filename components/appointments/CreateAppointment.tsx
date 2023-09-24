"use client"

import { AppointmentSchemaType } from "@/app/book/page";
import { TableCell, TableRow } from "../ui/table";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Calendar } from "../ui/calendar";
import { ScrollArea } from "../ui/scroll-area";
import { useEffect, useState } from "react";
import { formatTime, formateDate } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { submitAppointment } from "@/lib/actions/backend";
import { toast } from "../ui/use-toast";

const appointment: AppointmentSchemaType = {
	firstname:		"",
	lastname:			"",
	email:				"",
	phone:				"",
	make:					"",
	model:				"",
	year:					"",
	urgency:			"",
	details:			"",
	vin:					"",
	dateCreated:	new Date(),

	_id: null,
	status: "",
	notes: "",
	date: new Date()
}
export default function CreateAppointment() { 
	const [date, setDate] = useState<Date>(appointment.date ? new Date(appointment.date) : new Date());
	async function handleUpdateAppointment() {
		submitAppointment(appointment).then(res => {
			toast({
				title: res.title,
				description: res.description,
			})
		})
	}

	useEffect(() => {
		console.log(formatTime(date.toTimeString()));
	}, [date])

	
	function getHighlight(time: string): string {
		if (formatTime(date.toTimeString()) == time)
			return "bg-primary text-primary-foreground";
		return "";
	}
	
	function handleOnSetDate(newDate: Date) {
		let mergedDate;
		try {
			if (date == null)
				mergedDate = new Date();
			else
				mergedDate = new Date(date);
			mergedDate.setDate(newDate.getDate());
			setDate(mergedDate);
		} catch (e) {}

	}

	function handleSetTime(hours: number, minutes: number) {
		if (date == undefined) {
			let date = new Date();
			date.setHours(hours);
			date.setMinutes(minutes);
			date.setSeconds(0);	
			setDate(date);
		} else {
			const updatedDate = new Date(date);
			updatedDate.setHours(hours, minutes, 0)
			setDate(updatedDate);
		};
	}

	const buttonClass = `bg-transparent text-primary hover:text-accent p-6`;

	return (
			<TableRow>
				<TableCell>
					<Input placeholder="name"/>
				</TableCell>
				<TableCell>
					<Popover>
						<PopoverTrigger>
							<div className="hover:bg-secondary hover:text-secondary-foreground transition rounded-md p-4">
								{date != null
									? formateDate(date)
									: "Select Date"
								}
							</div>
						</PopoverTrigger>
						<PopoverContent>
							<Calendar 
								mode="single"
								selected={date}
								onSelect={handleOnSetDate}
								className="rounded-md border p-0"
							/>
							<ScrollArea className="h-48 mt-4 p-2">
								<div className="grid grid-cols-4">
									<Button onClick={() => handleSetTime( 9, 0)}  className={`${buttonClass} ${getHighlight('9:00 AM')}` }>9:00 AM </Button>
									<Button onClick={() => handleSetTime( 9, 15)} className={`${buttonClass} ${getHighlight('9:15 AM')}` }>9:15 AM </Button>
									<Button onClick={() => handleSetTime( 9, 30)} className={`${buttonClass} ${getHighlight('9:30 AM')}` }>9:30 AM </Button>
									<Button onClick={() => handleSetTime( 9, 45)} className={`${buttonClass} ${getHighlight('9:45 AM')}` }>9:45 AM </Button>
									<Button onClick={() => handleSetTime(10, 0)} 	className={`${buttonClass} ${getHighlight('10:00 AM')}`}>10:00 AM</Button>
									<Button onClick={() => handleSetTime(10, 15)} className={`${buttonClass} ${getHighlight('10:15 AM')}`}>10:15 AM</Button>
									<Button onClick={() => handleSetTime(10, 30)} className={`${buttonClass} ${getHighlight('10:30 AM')}`}>10:30 AM</Button>
									<Button onClick={() => handleSetTime(10, 45)} className={`${buttonClass} ${getHighlight('10:45 AM')}`}>10:45 AM</Button>
									<Button onClick={() => handleSetTime(11, 0)} 	className={`${buttonClass} ${getHighlight('11:00 AM')}`}>11:00 AM</Button>
									<Button onClick={() => handleSetTime(11, 15)} className={`${buttonClass} ${getHighlight('11:15 AM')}`}>11:15 AM</Button>
									<Button onClick={() => handleSetTime(11, 30)} className={`${buttonClass} ${getHighlight('11:30 AM')}`}>11:30 AM</Button>
									<Button onClick={() => handleSetTime(11, 45)} className={`${buttonClass} ${getHighlight('11:45 AM')}`}>11:45 AM</Button>
									<Button onClick={() => handleSetTime(12, 0)} 	className={`${buttonClass} ${getHighlight('12:00 PM')}`}>12:00 PM</Button>
									<Button onClick={() => handleSetTime(12, 15)} className={`${buttonClass} ${getHighlight('12:15 PM')}`}>12:15 PM</Button>
									<Button onClick={() => handleSetTime(12, 30)} className={`${buttonClass} ${getHighlight('12:30 PM')}`}>12:30 PM</Button>
									<Button onClick={() => handleSetTime(12, 45)} className={`${buttonClass} ${getHighlight('12:45 PM')}`}>12:45 PM</Button>
									<Button onClick={() => handleSetTime(13, 0)} 	className={`${buttonClass} ${getHighlight('1:00 PM')}` }>1:00 PM </Button>
									<Button onClick={() => handleSetTime(13, 15)} className={`${buttonClass} ${getHighlight('1:15 PM')}` }>1:15 PM </Button>
									<Button onClick={() => handleSetTime(13, 30)} className={`${buttonClass} ${getHighlight('1:30 PM')}` }>1:30 PM </Button>
									<Button onClick={() => handleSetTime(13, 45)} className={`${buttonClass} ${getHighlight('1:45 PM')}` }>1:45 PM </Button>
									<Button onClick={() => handleSetTime(14, 0)} 	className={`${buttonClass} ${getHighlight('2:00 PM')}` }>2:00 PM </Button>
									<Button onClick={() => handleSetTime(14, 15)} className={`${buttonClass} ${getHighlight('2:15 PM')}` }>2:15 PM </Button>
									<Button onClick={() => handleSetTime(14, 30)} className={`${buttonClass} ${getHighlight('2:30 PM')}` }>2:30 PM </Button>
									<Button onClick={() => handleSetTime(14, 45)} className={`${buttonClass} ${getHighlight('2:45 PM')}` }>2:45 PM </Button>
									<Button onClick={() => handleSetTime(15, 0)} 	className={`${buttonClass} ${getHighlight('3:00 PM')}` }>3:00 PM </Button>
									<Button onClick={() => handleSetTime(15, 15)} className={`${buttonClass} ${getHighlight('3:15 PM')}` }>3:15 PM </Button>
									<Button onClick={() => handleSetTime(15, 30)} className={`${buttonClass} ${getHighlight('3:30 PM')}` }>3:30 PM </Button>
									<Button onClick={() => handleSetTime(15, 45)} className={`${buttonClass} ${getHighlight('3:45 PM')}` }>3:45 PM </Button>
									<Button onClick={() => handleSetTime(16, 0)} 	className={`${buttonClass} ${getHighlight('4:00 PM')}` }>4:00 PM </Button>
									<Button onClick={() => handleSetTime(16, 15)} className={`${buttonClass} ${getHighlight('4:15 PM')}` }>4:15 PM </Button>
									<Button onClick={() => handleSetTime(16, 30)} className={`${buttonClass} ${getHighlight('4:30 PM')}` }>4:30 PM </Button>
									<Button onClick={() => handleSetTime(16, 45)} className={`${buttonClass} ${getHighlight('4:45 PM')}` }>4:45 PM </Button>
									<Button onClick={() => handleSetTime(17, 0)} 	className={`${buttonClass} ${getHighlight('5:00 PM')}` }>5:00 PM </Button>
									<Button onClick={() => handleSetTime(17, 15)} className={`${buttonClass} ${getHighlight('5:15 PM')}` }>5:15 PM </Button>
									<Button onClick={() => handleSetTime(17, 30)} className={`${buttonClass} ${getHighlight('5:30 PM')}` }>5:30 PM </Button>
									<Button onClick={() => handleSetTime(17, 45)} className={`${buttonClass} ${getHighlight('5:45 PM')}` }>5:45 PM </Button>
									<Button onClick={() => handleSetTime(18, 0)} 	className={`${buttonClass} ${getHighlight('6:00 PM')}` }>6:00 PM </Button>
									<Button onClick={() => handleSetTime(18, 15)} className={`${buttonClass} ${getHighlight('6:15 PM')}` }>6:15 PM </Button>
									<Button onClick={() => handleSetTime(18, 30)} className={`${buttonClass} ${getHighlight('6:30 PM')}` }>6:30 PM </Button>
									<Button onClick={() => handleSetTime(18, 45)} className={`${buttonClass} ${getHighlight('6:45 PM')}` }>6:45 PM </Button>
									<Button onClick={() => handleSetTime(19, 0)} 	className={`${buttonClass} ${getHighlight('7:00 PM')}` }>7:00 PM </Button>
									<Button onClick={() => handleSetTime(19, 15)} className={`${buttonClass} ${getHighlight('7:15 PM')}` }>7:15 PM </Button>
									<Button onClick={() => handleSetTime(19, 30)} className={`${buttonClass} ${getHighlight('7:30 PM')}` }>7:30 PM </Button>
									<Button onClick={() => handleSetTime(19, 45)} className={`${buttonClass} ${getHighlight('7:45 PM')}` }>7:45 PM </Button>
								</div>
							</ScrollArea>
							<Button onClick={handleUpdateAppointment} className="m-auto flex">
								Update
							</Button>
						</PopoverContent>
					</Popover>
				</TableCell>
				<TableCell>
					<Input placeholder="email"/>
					<Input placeholder="phone"/>
				</TableCell>
				<TableCell>
					<Input />
				</TableCell>
			</TableRow>
	)
}