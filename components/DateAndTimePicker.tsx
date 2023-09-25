"use client"

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { AppointmentSchemaType } from "@/app/book/page";
import { formateDate, getHighlightDate } from "@/lib/utils";
import { ActiveModifiers, SelectSingleEventHandler } from "react-day-picker";

export function DayAndTimePicker({ appointment, date, setDate }: {
appointment: AppointmentSchemaType,
date: Date | undefined,
setDate: (date: Date | undefined) => void,
}) {

	function handleOnSetDate(day: Date | undefined): void {
		if (!day)
			return;
		let mergedDate;
		
		if (date == null)
			mergedDate = new Date();
		else
			mergedDate = new Date(date);
		mergedDate.setDate(day.getDate());
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
			setDate(new Date(updatedDate));
		};
	}
	
	function calculateHighlightedDate(): string {
		if (!date)
			return "";
		if (!appointment.date) // If we have a date selected, but store date is NULL, then it's not equal
			return "bg-red-200";
		if (new Date(appointment.date).toString() != date.toString())
			return "bg-red-200";
		return "";
	}

	const buttonClass = `bg-transparent text-primary hover:text-accent p-6`;
	return (
		<Popover>
			<PopoverTrigger>
				<div className={`hover:bg-secondary hover:text-secondary-foreground transition rounded-md p-4 ${calculateHighlightedDate()}`}>
					{date != null
						? formateDate(date)
						: "Select Date"
					}
				</div>
			</PopoverTrigger>
			<PopoverContent>
				<Calendar 
					mode="single"
					selected={date ? date : new Date()}
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
	)
} 