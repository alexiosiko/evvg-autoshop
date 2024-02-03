import { services } from "@/data/services";
import Header from "../header";
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
				<Header className="text-center">Our Services</Header>
			</motion.div>
			<br />
			<br />
			<br />
			<br />
			<div className="sm:flex justify-center gap-8 ">
				{services.map((service, index) => 
					<Service index={index} service={service} />
				)}
			</div>
		</section>
	)
}