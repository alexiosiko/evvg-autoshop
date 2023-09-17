import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Checkbox } from "../ui/checkbox"

type ServiceCategoryType = {
	servicesArray: {
		title: string,
		services: Array<{
			header: string,
			description: string
		}>
	},
	form: any
}

export default function ServiceCategory({ servicesArray , form} : ServiceCategoryType ) {
	return (
		<FormItem>
			<Collapsible className="outline-1 outline outline-foreground rounded-lg mt-2 mb-2 p-6">
				<CollapsibleTrigger>
					{servicesArray.title}
				</CollapsibleTrigger>
				<CollapsibleContent>
				<FormItem className="mt-4">
					{servicesArray.services.map((item) => (
						<div key={item.header} className="p-2">
							<FormField
								key={item.header}
								control={form.control}
								name="services"
								render={({ field }) => {
								return (
									<FormItem
										key={item.header}
										className="flex flex-row items-start space-x-3 space-y-0">
										<FormControl>
										<Checkbox
											checked={field?.value?.includes(item.header)}
											onCheckedChange={(checked: boolean) => {
												return checked
												? field.onChange([...field.value, item.header])
												: field.onChange(field.value?.filter((value: string) => value !== item.header))
											}}
										/>
										</FormControl>
											<FormLabel>
											{item.description}
										</FormLabel>
									</FormItem>
								)
								}}
							/>
						</div>
					))}
					<FormMessage />
				</FormItem>
				</CollapsibleContent>
			</Collapsible>
		</FormItem>
	)
}