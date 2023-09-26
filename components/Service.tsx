import Image from "next/image";

type ServiceType = {
	service: {
		img: string,
		title: string,
		description: string,
	},
	index: number
} 
export default function Service({service, index}: ServiceType) {
	return (
		<div className="text-center p-2 pb-8 rounded-md shadow-md bg-card" key={index}>
			<Image  width={25} height={25} src={service.img} alt="any" />
			<h2 className="text-xl pb-4 text-card-foreground font-extrabold ">{service.title}</h2>
			<p className="description text-secondary-foreground text-xs max-w-md m-auto max-h-16 h-full">
				{service.description}
			</p>
		</div>
	)
}