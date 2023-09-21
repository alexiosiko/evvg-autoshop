"use client";

import { useForm } from "react-hook-form";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { AlertContinue, alertInfoType } from "@/components/alerts/Continue";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { submitAppointment } from "@/lib/actions/backend";
import { UserValidation } from "@/lib/validations/user";
import { ObjectId } from "mongodb";


export type AppointmentType = {
	firstname: 	string,
	lastname: 	string,
	email: 		string,
	phone: 		string,
	make: 		string,
	model: 		string,
	year: 		string,
	plate: 		string | undefined,
	urgency:  	string,
	details:		string,
	status:		string,
	notes:  		string,
}
export type AppointmentTypeWithId = AppointmentType & {
	_id: ObjectId;
}
export default function Appointment() {
	const [alertInfo, setAlertInfo] = useState<alertInfoType>({ title: "", description: "", active: false, reload: false });
	const [loading, setLoading] = useState<boolean>(false);
	const form = useForm<z.infer<typeof UserValidation>>({
		resolver: zodResolver(UserValidation),
		// THESE DEFAULT VALUES ARE REQUIRED
		defaultValues: {
			firstname: "",
			lastname: "",
			email: "",
			phone: "",
			make: "",
			model: "",
			year: "",
			details: "",
			plate: "",
			notes: "",
		}
	});

	async function onSubmit(formData: any) {
		const data: AppointmentType = {
			firstname:	formData.firstname,
			lastname:	formData.lastname,
			email:		formData.email,
			phone:		formData.phone,
			make:			formData.make,
			model:		formData.model,
			year:			formData.year,
			plate:		formData.plate,
			urgency:		formData.urgency,
			details:		formData.details,
			status:     "waiting",
			notes: 	"",
		} 
		setLoading(true);
			setAlertInfo(await submitAppointment(data));
		setLoading(false);
	}

	return (
		<Form {...form} >
			<form onSubmit={form.handleSubmit(onSubmit)} className="h-[1500px]">
				<AlertContinue alertInfo={alertInfo} setAlertInfo={setAlertInfo}/>
				<Card className="p-4">
					<CardHeader>
						<CardTitle className="mb-4">Book an Appointment!</CardTitle>
						<CardDescription>Please send us your questions, suggestions, ideas, requests or anything else that may be on your mind. Many of the improvements which take place at our shop are due to the input from our customers. We look forward to your comments. Thank you!</CardDescription>
					</CardHeader>
					<CardContent>
						<Card className="p-6">
							<Label className="text-lg">Personal Info</Label> <br />
							<FormLabel className="mb-24">Name</FormLabel>
							<div className="grid grid-cols-2 gap-x-4">
								<FormField
									control={form.control}
									name="firstname"
									render={({ field }) => (
										<FormItem>
											<FormControl>
												<Input placeholder="First name" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="lastname"
									render={({ field }) => (
										<FormItem>
											<FormControl>
												<Input placeholder="Last name" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Email</FormLabel>
										<FormControl>
											<Input placeholder="example@hotmail.com" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="phone"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Phone</FormLabel>
										<FormControl>
											<Input {...field} />
										</FormControl>
										<FormDescription>
											(000) 000-0000
										</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
						</Card>
						<br />
						<Card className="p-6">
							<Label className="text-lg">Vehicle Info</Label>
							<div className="grid grid-cols-3 gap-x-4">
								<FormField
									control={form.control}
									name="make"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Make</FormLabel>
											<FormControl>
												<Input {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="model"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Model</FormLabel>
											<FormControl>
												<Input {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="year"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Year</FormLabel>
											<FormControl>
												<Input {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
							<FormField
								control={form.control}
								name="plate"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Lisence plate (optional)</FormLabel>
										<FormControl>
											<Input {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<br />
						</Card>
						<br />
						<Card className="p-6">
							<Label className="text-lg">Service Info</Label>
							<FormField
								control={form.control}
								name="urgency"
								render={({ field }) => (
									<FormItem className="space-y-3">
									<FormLabel>How urgent do you need service</FormLabel>
									<FormControl>
										<RadioGroup
											onValueChange={field.onChange}
											defaultValue={field.value}
											className="flex flex-col space-y-1"
										>
											<FormItem className="flex mb-0 items-center space-x-3 space-y-0">
												<FormControl>
													<RadioGroupItem value="ASAP" />
												</FormControl>
												<FormLabel className="font-normal">
													Urgent
												</FormLabel>
											</FormItem>
											<FormItem className="flex items-center space-x-3 space-y-0">
												<FormControl>
													<RadioGroupItem value="Soon" />
												</FormControl>
												<FormLabel className="font-normal">
													Soon
												</FormLabel>
											</FormItem>
											<FormItem className="flex items-center space-x-3 space-y-0">
												<FormControl>
													<RadioGroupItem value="No rush" />
												</FormControl>
												<FormLabel className="font-normal">
													No rush
												</FormLabel>
											</FormItem>
										</RadioGroup>
									</FormControl>
									<FormMessage />
									</FormItem>
								)}
							/>
							<br />
							<FormField
								control={form.control}
								name="details"
								render={({ field }) => (
									<FormItem>
										<FormLabel>What service are you looking for?</FormLabel>
										<FormControl>
											<Textarea {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</Card>
					<Button disabled={loading} className="mt-4">Submit</Button>
					</CardContent>
				</Card>
			</form>
		</Form>
	);
}