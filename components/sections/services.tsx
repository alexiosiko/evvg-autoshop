import { services } from "@/data/services";
import Title from "../title";
import Image from "next/image";
import Service from "../service";
import { motion, useAnimate } from "framer-motion";

export default function Services() {
	const [scope, animate] = useAnimate();
	return (
		<section>
			<motion.div
				ref={scope}
				initial={{ y: 50, opacity: 0}}
				onViewportEnter={() => animate(scope.current, { y: 0, opacity: 100 }, { delay: 0.3})}
			>
				<Title className="text-center">Our Services</Title>
			</motion.div>
			<br />
			<br />
			<br />
			<br />
			<div className="sm:flex justify-center gap-8 ">
				{services.map((service, index) => 
					<Service key={index} index={index} service={service} />
				)}
			</div>
		</section>
	)
}