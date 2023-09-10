import { FormDataProps } from "@/contants/types/AppointmentTypes";
import { Textarea } from "../ui/textarea";
import AppointmentCollapsible from "./Collapsible";
import { BrakesSteeringAndSuspensionServices, IDontKnowPleaseInspect, OilChangeAndFluidServices, TireAndWheelServices } from "@/contants/ServicesData";

export default function AppointmentServices({ formData, setFormData }: FormDataProps) {
	return (
		<form>
			<p className='text-4xl font-bold mb-8 mt-8'>Services</p>
			<AppointmentCollapsible formData={formData} setFormData={setFormData} ServiceData={TireAndWheelServices} />
			<AppointmentCollapsible formData={formData} setFormData={setFormData} ServiceData={OilChangeAndFluidServices} />
			<AppointmentCollapsible formData={formData} setFormData={setFormData} ServiceData={BrakesSteeringAndSuspensionServices} />
			<AppointmentCollapsible formData={formData} setFormData={setFormData} ServiceData={IDontKnowPleaseInspect} />
			<h1 className="mt-8 font-md">Details?</h1>
			<Textarea />
		</form>
	)
}