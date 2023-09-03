import { Button } from "../ui/button";
import { FormDataProps } from "./Appointment";
import AppointmentCollapsible from "./AppointmentCollapsible";
import { BrakesSteeringAndSuspensionServices, IDontKnowPleaseInspect, OilChangeAndFluidServices, TireAndWheelServices } from "@/contants/ServicesData";

export default function AppointmentServices({ formData, setFormData }: FormDataProps) {
	function handleSubmit(e: any) {
		e.preventDefault();
		const newFormData = new FormData(e.target); // Create a FormData object from the form


		const services: string[] = [];

		newFormData.forEach((value, key) => {
			services.push(key);
		})
		
		setFormData({
			...formData,
			services: services, // Update the services array in formData
		})

	}
	return (
		<form onSubmit={handleSubmit}>
			<p className='text-3xl mb-8 mt-8'>Services</p>
			<AppointmentCollapsible ServiceData={TireAndWheelServices} />
			<AppointmentCollapsible ServiceData={OilChangeAndFluidServices} />
			<AppointmentCollapsible ServiceData={BrakesSteeringAndSuspensionServices} />
			<AppointmentCollapsible ServiceData={IDontKnowPleaseInspect} />
			<Button className="mt-4">Update</Button>
		</form>
	)
}