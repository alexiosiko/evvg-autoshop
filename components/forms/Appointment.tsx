"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ValidateForm, validateDate } from "@/lib/validations/appointment";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import ServiceCategory from "./ServiceCategory";
import { BrakesSteeringAndSuspensionServices, IDontKnowPleaseInspect, OilChangeAndFluidServices, TireAndWheelServices } from "@/contants/ServicesData";
import { AppointmentFormType as AppointmentFormType } from "@/contants/types/AppointmentTypes";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import AppointmentDate from "../appointments/Calendar";
import { useState } from "react";
import { AlertContinue } from "../alerts/Continue";
import { requestAppointment } from "@/lib/actions/appointment.actions";


export default function Appointment({ id }: {id : string | undefined}) {
	const [date, setDate] = useState<Date | undefined>(undefined);
	const [alertInfo, setAlertInfo] = useState<{
		title: string;
		description: string;
		active: boolean,
	}>({ title: "", description: "", active: false });

	const form = useForm({
		// resolver: zodResolver(UserValidation),
		// THESE DEFAULT VALUES ARE REQUIRED
		defaultValues: {
			username: "",
			services: [],
			email: "",
			phone: "",
			year: "",
			brand: "",
			model: "",
			notes: "",
			date: undefined,
			dateCreated: new Date(),
		}
	});

	async function onSubmit(formData: any) {
		const data: AppointmentFormType = {
			username: formData.username,
			email: formData.email,
			phone: formData.phone,
			services: formData.services,
			notes: formData.notes,
			year: formData.year,
			brand: formData.brand,
			model: formData.model,
			date: date,
			dateCreated: new Date(),
			time: "empty",
			id: id,
		};
		if (!ValidateForm(data, setAlertInfo)) {
			setAlertInfo((alertInfo) => ({
				...alertInfo,
				active: true
			}));
			return;
		}
		if (!validateDate(date)) {
			console.log("here");
			setAlertInfo(() => ({
				title: "Error setting date",
				description: "Please select date and time and try again",
				active: true,
			}));
			return;
		}
		const response = await requestAppointment(data);
		if (response != 'success')
		{
			console.log("Error to upload");
			return;
		}
		setAlertInfo(() => ({
			title: "Successully requested appointment!",
			description: "Please wait for mechanic to approve your appointment... You can see your appoitments in Manage Appointments. See you soon",
			active: true
		}));
		console.log(data);
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<AlertContinue alertInfo={alertInfo} setAlertInfo={setAlertInfo}/>
				<Tabs defaultValue="information">
					<TabsList className="grid grid-cols-3">
						<TabsTrigger value="information">Information</TabsTrigger>
						<TabsTrigger value="services">Services</TabsTrigger>
						<TabsTrigger value="date">Date</TabsTrigger>
					</TabsList>
					<TabsContent value="information" className="grid grid-cols-2 gap-24 p-4">
						<div className="gap-6 flex flex-col">
							<FormField
								control={form.control}
								name="username"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Name</FormLabel>
										<FormControl>
											<Input placeholder="" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)} />
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Email</FormLabel>
										<FormControl>
											<Input type="email" placeholder="" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)} />
							<FormField
								control={form.control}
								name="phone"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Phone</FormLabel>
										<FormControl>
											<Input type="phone" placeholder="" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)} />
						</div>
						<div className="gap-6 flex flex-col">
							<FormField
								control={form.control}
								name="year"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Year</FormLabel>
										<FormControl>
											<Input placeholder="" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)} />
							<FormField
								control={form.control}
								name="brand"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Brand</FormLabel>
										<FormControl>
											<Input placeholder="" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)} />
							<FormField
								control={form.control}
								name="model"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Model</FormLabel>
										<FormControl>
											<Input placeholder="" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)} />
						</div>
					</TabsContent>
					<TabsContent value="services">
						<FormField
							control={form.control}
							name="services"
							render={() => (
								<>
									<ServiceCategory form={form} servicesArray={TireAndWheelServices} />
									<ServiceCategory form={form} servicesArray={OilChangeAndFluidServices} />
									<ServiceCategory form={form} servicesArray={BrakesSteeringAndSuspensionServices} />
									<ServiceCategory form={form} servicesArray={IDontKnowPleaseInspect} />
								</>
							)} />
						<FormField
							control={form.control}
							name="notes"
							render={({ field }) => (
								<FormItem className="mt-6 mb-6">
									<Label>Notes (optional)</Label>
									<FormControl>
										<Textarea className="mt-2" {...field} />
									</FormControl>
								</FormItem>
							)} />
					</TabsContent>
					<TabsContent value="date">
						<AppointmentDate date={date} setDate={setDate} />
					</TabsContent>
				</Tabs>
				<Button className="m-auto flex" type="submit">Submit</Button>
			</form>
		</Form>
	);
}
