import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formateDate(date: Date): string {
	date = new Date(date);
	return date.toDateString() + " " + formatTime(date.toTimeString());
}
export function formatTime(time: string): string {
	let hours = parseInt(time.substring(0, 2));
	let minutes = time.substring(3, 5);
	const amOrPM = hours < 12 ? "AM" : "PM";
	if (hours > 12)
		hours -= 12;
	return `${hours}:${minutes} ${amOrPM}`;
}

export function getHighlightDate(time: string, date: Date | null): string {
	if (!date)
		return "";
	if (formatTime(date.toTimeString()) == time)
		return "bg-primary text-primary-foreground";
	return "";
}