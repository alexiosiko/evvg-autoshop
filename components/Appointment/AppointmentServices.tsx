import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@radix-ui/react-collapsible";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "../ui/button";
import AppointmentCollapsible from "./AppointmentCollapsible";
import { BrakesSteeringAndSuspensionServices, IDontKnowPleaseInspect, OilChangeAndFluidServices, TireAndWheelServices } from "@/contants/ServicesData";

export default function AppointmentServices() {
	function handleSubmit(e: any) {
		e.preventDefault();
		const formData = new FormData(e.target); // Create a FormData object from the form
		console.log(formData);
    // Initialize formDataObject as an empty object
    const formDataObject: { [key: string]: string | File } = {};
    
    formData.forEach((value, key) => {
      // Check the type of the value
      if (typeof value === 'string') {
        formDataObject[key] = value;
      } else if (value instanceof File) {
        // Handle File type (e.g., omit it or handle it differently)
      }
    });

    console.log(formDataObject);
	}
	return (
		<form onSubmit={handleSubmit}>
			<p className='text-3xl  -ml-2 mb-8'>Services</p>
			<AppointmentCollapsible ServiceData={TireAndWheelServices} />
			<AppointmentCollapsible ServiceData={OilChangeAndFluidServices} />
			<AppointmentCollapsible ServiceData={BrakesSteeringAndSuspensionServices} />
			<AppointmentCollapsible ServiceData={IDontKnowPleaseInspect} />
			<Button className="mt-4">Submit</Button>
		</form>
	)
}