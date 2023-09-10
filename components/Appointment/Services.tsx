import { FormDataProps } from "@/contants/types/AppointmentTypes";
import { Textarea } from "../pending-appointments/ui/textarea";
import AppointmentCollapsible from "@/components/appointment/Collapsible";
import { BrakesSteeringAndSuspensionServices, IDontKnowPleaseInspect, OilChangeAndFluidServices, TireAndWheelServices } from "@/contants/ServicesData";

export default function AppointmentServices({ formData, setFormData }: FormDataProps) {
	function handleOnNotesChange(e: any) {
		setFormData({
			...formData,
			notes: e.target.value
		})
	}
	return (
		<form>
			<p className='text-4xl font-bold mb-8 mt-8'>Services</p>
			<AppointmentCollapsible formData={formData} setFormData={setFormData} ServiceData={TireAndWheelServices} />
			<AppointmentCollapsible formData={formData} setFormData={setFormData} ServiceData={OilChangeAndFluidServices} />
			<AppointmentCollapsible formData={formData} setFormData={setFormData} ServiceData={BrakesSteeringAndSuspensionServices} />
			<AppointmentCollapsible formData={formData} setFormData={setFormData} ServiceData={IDontKnowPleaseInspect} />
			<h1 className="mt-8 mb-4 ml-2 font-md">Any notes to leave the mechanic?</h1>
			<Textarea onChange={handleOnNotesChange} />
		</form>
	)
}