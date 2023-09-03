import { Checkbox } from "@/components/ui/checkbox";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { title } from "process";

type Service = {
	header: string;
	description: string;
 };
 
 type AppointmentCollapsibleProps = {
	ServiceData: {
		title: string;
		services: Service[];
	}
 };
export default function AppointmentCollapsible({ ServiceData } : AppointmentCollapsibleProps ) {
	return (
		<Collapsible>
			<CollapsibleTrigger className="mb-2 h-8">
				{ServiceData.title}
			</CollapsibleTrigger>	
			{ServiceData.services.map((service: Service, index: number) => 
				<CollapsibleContent key={index} className="space-y-2 rounded-md border pl-2 py-3 text-sm">
					<div className="flex flex-row ">
						<Checkbox name={service.header} className="m-1" />
						<p className="ml-2">{service.header}</p>
					</div>
					<p className="text-xs ml-8">{service.description}</p>
				</CollapsibleContent>
			)}
		</Collapsible>
	)
}