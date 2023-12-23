import Image, { StaticImageData } from "next/image";
import { animate, motion, useAnimate } from 'framer-motion';

type ServiceType = {
	service: {
		title: string;
		description: string;
		img: StaticImageData;
	},
	index: number
} 
export default function Service({service, index}: ServiceType) {
	const [scope, animate] = useAnimate();
	return (
		<motion.div className="text-center p-6 pb-8 rounded-md shadow-md bg-card" key={index}
			ref={scope}	
			initial={{ y: 200, opacity: 0 }}
			onViewportEnter={() => animate(scope.current, { y: 0, opacity: 100}, { delay: index / 7})}
			>
			<Image className="m-auto"  width={25} height={25} src={service.img} alt="any" />
			<h2 className="text-xl pb-4 text-card-foreground font-extrabold ">{service.title}</h2>
			<p className="description text-secondary-foreground text-xs max-w-md m-auto max-h-16 h-full">
				{service.description}
			</p>
		</motion.div>
	)
}