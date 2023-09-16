import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@radix-ui/react-collapsible"
import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Checkbox } from "../ui/checkbox"

type ServiceCategoryType = {
	serviceData: {
		title: string,
		services: Array<{
			header: string,
			description: string
		}>
	},
	form: any
}

export default function ServiceCategory({serviceData, form} : ServiceCategoryType ) {
	return (
		<Collapsible>
			<CollapsibleTrigger>
				grriefisd
			</CollapsibleTrigger>
			<CollapsibleContent>
				<FormField
					key={serviceData.services?.[0].header}
					control={form.control}
					name="items"
					render={({ field }) => {
					return (
						<FormItem
							key={serviceData.services?.[0].header}
							className="flex flex-row items-start space-x-3 space-y-0">
							<FormControl>
							<Checkbox
								checked={field.value.includes(serviceData.services?.[0].header)}
								onCheckedChange={(checked) => {
									return checked
									? field.onChange([...field.value, serviceData.services?.[0].header])
									: field.onChange(
											field.value?.filter(
											(value: any) => value !== serviceData.services?.[0].header
											)
										)
								}}
							/>
							</FormControl>
							<FormLabel className="font-normal">
							{serviceData.services?.[0].description}
							</FormLabel>
						</FormItem>
					)
					}}
				/>
			</CollapsibleContent>
		</Collapsible>
	)
}