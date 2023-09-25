"use client"

import { AppointmentFormType, AppointmentSchemaType } from "@/app/book/page";
import { Table, TableBody, TableCell, TableRow } from "../ui/table";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Calendar } from "../ui/calendar";
import { ScrollArea } from "../ui/scroll-area";
import { useRef, useState } from "react";
import { formateDate, getHighlightDate } from "@/lib/utils";
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
	const firstnameRef = useRef<HTMLInputElement>(null);
	const lastnameRef = useRef<HTMLInputElement>(null);
	const emailRef = useRef<HTMLInputElement>(null);
	const phoneRef = useRef<HTMLInputElement>(null);
	const makeRef = useRef<HTMLInputElement>(null);
	const modelRef = useRef<HTMLInputElement>(null);
	const yearRef = useRef<HTMLInputElement>(null);
	const urgencyRef = useRef<HTMLInputElement>(null);
	const detailsRef = useRef<HTMLInputElement>(null);
	const vinRef = useRef<HTMLInputElement>(null);

	function handleOnSetDate(day: Date | undefined): void {
		if (!day)
			return;
		let mergedDate = new Date(day);

		if (date != null) {
			mergedDate.setHours(date.getHours());
			mergedDate.setMinutes(date.getMinutes());
		}
		setDate(mergedDate);
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

	async function handleOnSubmit() {
		const appointment: AppointmentFormType = {
			firstname: firstnameRef.current ? firstnameRef.current.value : "",
			lastname: lastnameRef.current ? lastnameRef.current.value : "",
			email: emailRef.current ? emailRef.current.value : "",
			phone: phoneRef.current ? phoneRef.current.value : "",
			make: makeRef.current ? makeRef.current.value : "",
			model: modelRef.current ? modelRef.current.value : "",
			year: yearRef.current ? yearRef.current.value : "",
			urgency: urgencyRef.current ? urgencyRef.current.value : "",
			details: detailsRef.current ? detailsRef.current.value : "",
			vin: vinRef.current ? vinRef.current.value : "",
			dateCreated: new Date(),
		}
		submitAppointment(appointment).then(res => 
			toast({
				title: res.title,
				description: res.description,
			})
		)
	}
	

	const buttonClass = `bg-transparent text-primary hover:text-accent p-6`;

	return (
		<Table>
			<TableBody>
				<TableRow>
					<TableCell>
						<Input ref={firstnameRef} className="mb-1" placeholder="firstname"/>
						<Input ref={lastnameRef} placeholder="lastname"/>
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
										<Button onClick={() => handleSetTime( 9, 0)}  className={`${buttonClass} ${getHighlightDate('9:00 AM', date)}` }>9:00 AM </Button>
										<Button onClick={() => handleSetTime( 9, 15)} className={`${buttonClass} ${getHighlightDate('9:15 AM', date)}` }>9:15 AM </Button>
										<Button onClick={() => handleSetTime( 9, 30)} className={`${buttonClass} ${getHighlightDate('9:30 AM', date)}` }>9:30 AM </Button>
										<Button onClick={() => handleSetTime( 9, 45)} className={`${buttonClass} ${getHighlightDate('9:45 AM', date)}` }>9:45 AM </Button>
										<Button onClick={() => handleSetTime(10, 0)} 	className={`${buttonClass} ${getHighlightDate('10:00 AM', date)}`}>10:00 AM</Button>
										<Button onClick={() => handleSetTime(10, 15)} className={`${buttonClass} ${getHighlightDate('10:15 AM', date)}`}>10:15 AM</Button>
										<Button onClick={() => handleSetTime(10, 30)} className={`${buttonClass} ${getHighlightDate('10:30 AM', date)}`}>10:30 AM</Button>
										<Button onClick={() => handleSetTime(10, 45)} className={`${buttonClass} ${getHighlightDate('10:45 AM', date)}`}>10:45 AM</Button>
										<Button onClick={() => handleSetTime(11, 0)} 	className={`${buttonClass} ${getHighlightDate('11:00 AM', date)}`}>11:00 AM</Button>
										<Button onClick={() => handleSetTime(11, 15)} className={`${buttonClass} ${getHighlightDate('11:15 AM', date)}`}>11:15 AM</Button>
										<Button onClick={() => handleSetTime(11, 30)} className={`${buttonClass} ${getHighlightDate('11:30 AM', date)}`}>11:30 AM</Button>
										<Button onClick={() => handleSetTime(11, 45)} className={`${buttonClass} ${getHighlightDate('11:45 AM', date)}`}>11:45 AM</Button>
										<Button onClick={() => handleSetTime(12, 0)} 	className={`${buttonClass} ${getHighlightDate('12:00 PM', date)}`}>12:00 PM</Button>
										<Button onClick={() => handleSetTime(12, 15)} className={`${buttonClass} ${getHighlightDate('12:15 PM', date)}`}>12:15 PM</Button>
										<Button onClick={() => handleSetTime(12, 30)} className={`${buttonClass} ${getHighlightDate('12:30 PM', date)}`}>12:30 PM</Button>
										<Button onClick={() => handleSetTime(12, 45)} className={`${buttonClass} ${getHighlightDate('12:45 PM', date)}`}>12:45 PM</Button>
										<Button onClick={() => handleSetTime(13, 0)} 	className={`${buttonClass} ${getHighlightDate('1:00 PM', date)}` }>1:00 PM </Button>
										<Button onClick={() => handleSetTime(13, 15)} className={`${buttonClass} ${getHighlightDate('1:15 PM', date)}` }>1:15 PM </Button>
										<Button onClick={() => handleSetTime(13, 30)} className={`${buttonClass} ${getHighlightDate('1:30 PM', date)}` }>1:30 PM </Button>
										<Button onClick={() => handleSetTime(13, 45)} className={`${buttonClass} ${getHighlightDate('1:45 PM', date)}` }>1:45 PM </Button>
										<Button onClick={() => handleSetTime(14, 0)} 	className={`${buttonClass} ${getHighlightDate('2:00 PM', date)}` }>2:00 PM </Button>
										<Button onClick={() => handleSetTime(14, 15)} className={`${buttonClass} ${getHighlightDate('2:15 PM', date)}` }>2:15 PM </Button>
										<Button onClick={() => handleSetTime(14, 30)} className={`${buttonClass} ${getHighlightDate('2:30 PM', date)}` }>2:30 PM </Button>
										<Button onClick={() => handleSetTime(14, 45)} className={`${buttonClass} ${getHighlightDate('2:45 PM', date)}` }>2:45 PM </Button>
										<Button onClick={() => handleSetTime(15, 0)} 	className={`${buttonClass} ${getHighlightDate('3:00 PM', date)}` }>3:00 PM </Button>
										<Button onClick={() => handleSetTime(15, 15)} className={`${buttonClass} ${getHighlightDate('3:15 PM', date)}` }>3:15 PM </Button>
										<Button onClick={() => handleSetTime(15, 30)} className={`${buttonClass} ${getHighlightDate('3:30 PM', date)}` }>3:30 PM </Button>
										<Button onClick={() => handleSetTime(15, 45)} className={`${buttonClass} ${getHighlightDate('3:45 PM', date)}` }>3:45 PM </Button>
										<Button onClick={() => handleSetTime(16, 0)} 	className={`${buttonClass} ${getHighlightDate('4:00 PM', date)}` }>4:00 PM </Button>
										<Button onClick={() => handleSetTime(16, 15)} className={`${buttonClass} ${getHighlightDate('4:15 PM', date)}` }>4:15 PM </Button>
										<Button onClick={() => handleSetTime(16, 30)} className={`${buttonClass} ${getHighlightDate('4:30 PM', date)}` }>4:30 PM </Button>
										<Button onClick={() => handleSetTime(16, 45)} className={`${buttonClass} ${getHighlightDate('4:45 PM', date)}` }>4:45 PM </Button>
										<Button onClick={() => handleSetTime(17, 0)} 	className={`${buttonClass} ${getHighlightDate('5:00 PM', date)}` }>5:00 PM </Button>
										<Button onClick={() => handleSetTime(17, 15)} className={`${buttonClass} ${getHighlightDate('5:15 PM', date)}` }>5:15 PM </Button>
										<Button onClick={() => handleSetTime(17, 30)} className={`${buttonClass} ${getHighlightDate('5:30 PM', date)}` }>5:30 PM </Button>
										<Button onClick={() => handleSetTime(17, 45)} className={`${buttonClass} ${getHighlightDate('5:45 PM', date)}` }>5:45 PM </Button>
										<Button onClick={() => handleSetTime(18, 0)} 	className={`${buttonClass} ${getHighlightDate('6:00 PM', date)}` }>6:00 PM </Button>
										<Button onClick={() => handleSetTime(18, 15)} className={`${buttonClass} ${getHighlightDate('6:15 PM', date)}` }>6:15 PM </Button>
										<Button onClick={() => handleSetTime(18, 30)} className={`${buttonClass} ${getHighlightDate('6:30 PM', date)}` }>6:30 PM </Button>
										<Button onClick={() => handleSetTime(18, 45)} className={`${buttonClass} ${getHighlightDate('6:45 PM', date)}` }>6:45 PM </Button>
										<Button onClick={() => handleSetTime(19, 0)} 	className={`${buttonClass} ${getHighlightDate('7:00 PM', date)}` }>7:00 PM </Button>
										<Button onClick={() => handleSetTime(19, 15)} className={`${buttonClass} ${getHighlightDate('7:15 PM', date)}` }>7:15 PM </Button>
										<Button onClick={() => handleSetTime(19, 30)} className={`${buttonClass} ${getHighlightDate('7:30 PM', date)}` }>7:30 PM </Button>
										<Button onClick={() => handleSetTime(19, 45)} className={`${buttonClass} ${getHighlightDate('7:45 PM', date)}` }>7:45 PM </Button>
									</div>
								</ScrollArea>
							</PopoverContent>
						</Popover>
					</TableCell>
					<TableCell>
						<Input ref={emailRef} className="mb-1" placeholder="email"/>
						<Input ref={phoneRef} placeholder="phone"/>
					</TableCell>
					<TableCell>
						<Input ref={makeRef} className="mb-1" placeholder="make" />
						<Input ref={modelRef} className="mb-1" placeholder="model" />
					</TableCell>
					<TableCell>
						<Input ref={yearRef} placeholder="year" />
						<Input ref={vinRef} placeholder="vin" />
					</TableCell>
					<TableCell>
						<Button onClick={handleOnSubmit}>Create</Button>
					</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	)
}