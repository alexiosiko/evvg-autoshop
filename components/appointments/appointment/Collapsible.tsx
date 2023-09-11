import { Checkbox } from "@/components/ui/checkbox";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import Image from "next/image";
import { useState } from "react";

import Plus from "@/assets/icons/plus.png";
import Minus from "@/assets/icons/minus.png";
import { CheckedState } from "@radix-ui/react-checkbox";
import { myFormType } from "@/contants/types/AppointmentTypes";

type Service = {
	header: string;
	description: string;
 };
 
 type AppointmentCollapsibleProps = {
	ServiceData: {
		title: string;
		services: Service[];
	},
	setFormData: (newFormData: myFormType) => void,
	formData: myFormType,
 };
export default function AppointmentCollapsible({ ServiceData, setFormData, formData } : AppointmentCollapsibleProps ) {
	function handleOnCheckedChange(bool: CheckedState, str: string) {
		let updatedServices: string[] = formData.services;
		if (bool == false) 
			updatedServices = updatedServices.filter((service) => service !== str);
		else 
			updatedServices.push(str);
		
		setFormData({
			...formData,
			services: updatedServices
		})
	}
	const calculateIfChecked = (service: string): boolean => formData.services.includes(service);

	const [isOpen, setIsOpen] = useState<boolean>(false);
	return (
		<Collapsible className="shadow-sm shadow-foreground/20 p-2 mb-4 rounded-2xl">
			<CollapsibleTrigger className="mb-2 pt-2 h-8 w-full" onClick={() => setIsOpen(!isOpen)}>
				<div className="flex justify-between">
					{ServiceData.title}
					{isOpen 
						? <Image src={Minus} alt="minus" width={20} height={20}/>
						: <Image src={Plus} alt="plus" width={20} height={20}/>}
				</div>
			</CollapsibleTrigger>	
			{ServiceData.services.map((service: Service, index: number) => 
				<CollapsibleContent key={index} className="space-y-2 rounded-md mb-4 shadow-sm shadow-foreground/20 pl-2 py-3 text-sm">
					<div className="flex flex-row ">
						<Checkbox 
							checked={calculateIfChecked(service.header)} 
							onCheckedChange={(bool) => handleOnCheckedChange(bool, service.header)} 
							name={service.header} 
							className="m-1" />
						<p className="ml-2">{service.header}</p>
					</div>
					<p className="text-xs ml-8">{service.description}</p>

				</CollapsibleContent>
			)}
		</Collapsible>
	)
}