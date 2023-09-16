// import { Checkbox } from "@/components/ui/checkbox";
// import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
// import Image from "next/image";

// import Plus from "@/assets/icons/plus.png";
// import Minus from "@/assets/icons/minus.png";
// import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";

// type Service = {
// 	header: string;
// 	description: string;
//  };
 
//  type AppointmentCollapsibleProps = {
// 	ServiceData: any,
// 	form: any
//  };
// export default function AppointmentCollapsible({ ServiceData, form } : AppointmentCollapsibleProps ) {
// 	return (
		
// 		{items.map((item) => (
// 			<FormField
// 			  key={item.id}
// 			  control={form.control}
// 			  name="items"
// 			  render={({ field }) => {
// 				 return (
// 					<Collapsible className="shadow-sm shadow-foreground/20 p-2 mb-4 rounded-2xl">
// 						<CollapsibleTrigger className="mb-2 pt-2 h-8 w-full">
// 							<div className="flex justify-between">
// 								<Image src={Minus} alt="minus" width={20} height={20}/>
// 							</div>
// 						</CollapsibleTrigger>	
// 						{ServiceData.map((service: Service, index: number) =>
// 						<FormItem
// 						key={item.id}
// 						className="flex flex-row items-start space-x-3 space-y-0"
// 						>
// 						<FormControl>
// 							<Checkbox
// 								checked={field.value.includes(item.id)}
// 								onCheckedChange={(checked) => {
// 								return checked
// 									? field.onChange([...field.value, item.id])
// 									: field.onChange(
// 										field.value?.filter(
// 											(value) => value !== item.id
// 										)
// 										)
// 								}}
// 							/>
// 						</FormControl>
// 						<FormLabel className="font-normal">
// 							{item.label}
// 						</FormLabel>
// 						</FormItem>
// 		</Collapsible>
// 				 )
// 			  }}
// 			/>
// 		 ))}
		

			 
// 				<div className="flex flex-row ">
// 				<FormField
// 				  key={service.header}
// 				  control={form.control}
// 				  name={`services-${index}`} // Use a unique name
// 				  render={({ field }) => {
// 					 return (
// 						<FormItem
// 						  key={service.header}
// 						  className="flex flex-row items-start space-x-3 space-y-0"
// 						>
// 						  <FormControl>
// 							 <Checkbox
// 								checked={field.value?.includes(service.header)}
// 								onCheckedChange={(checked) => {
// 								  return checked
// 									 ? field.onChange([...field.value, service.header])
// 									 : field.onChange(
// 										  field.value?.filter(
// 											 (value: any) => value !== service.header
// 										  )
// 										)
// 								}}
// 							 />
// 						  </FormControl>
// 						  <FormLabel className="font-normal">
// 							 {service.description}
// 						  </FormLabel>
// 						</FormItem>
// 					 )
// 				  }}
// 				/>
// 			 </div>
// 			)}
// 	)
// }