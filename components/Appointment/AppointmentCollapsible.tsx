import { Checkbox } from "@/components/ui/checkbox";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import Image from "next/image";
import { useState } from "react";

import Plus from "@/assets/photos/plus.png";
import Minus from "@/assets/photos/minus.png";

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
	const [isOpen, setIsOpen] = useState<boolean>(false);
	return (
		<Collapsible className="shadow-sm pr-2">
			<CollapsibleTrigger className="mb-2 pt-2 h-8 w-full" onClick={() => setIsOpen(!isOpen)}>
				<div className="flex justify-between">
					{ServiceData.title}
					{isOpen 
						? <Image src={Minus} alt="minus" width={20} height={20}/>
						: <Image src={Plus} alt="plus" width={20} height={20}/>}
				</div>
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