
import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/pending-appointments/ui/button"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
	return (
		<DayPicker
			showOutsideDays={showOutsideDays}
			className={cn("p-3 m-auto justify-center flex", className)}
			classNames={{
			months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
			month: "space-y-4 ",
			caption: "flex justify-center pt-1 relative items-center mb-12",
			caption_label: "text-[2rem]",
			nav: "space-x-1 flex items-center",
			nav_button: cn(
				buttonVariants({ variant: "outline" }),
				"h-12 w-12 bg-transparent p-0 opacity-50 hover:opacity-100"
			),
			nav_button_previous: "absolute left-1",
			nav_button_next: "absolute right-1",
			table: "w-2 border-collapse space-y-1",
			head_row: "flex",
			head_cell: `text-muted-foreground rounded-md m-2 w-16 text-[1.3rem]`,
			row: "flex w-full mt-2",
			cell: "text-center text-sm p-0 m-2 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
			day: cn(
				buttonVariants({ variant: "ghost" }),
				`h-16 w-16 p-0 font-normal aria-selected:opacity-100 rounded-2xl`
			),
			day_selected:
				"text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
			day_today: "bg-accent text-accent-foreground",
			day_outside: "text-muted-foreground opacity-50",
			day_disabled: "text-muted-foreground opacity-50",
			day_range_middle:
				"aria-selected:bg-accent aria-selected:text-accent-foreground",
			day_hidden: "invisible",
			...classNames,
			}}
			components={{
				IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" />,
				IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" />,
			}}
			{...props}
		/>
	)
}
Calendar.displayName = "Calendar"

export { Calendar }
