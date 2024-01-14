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
				initial
			>
				<Header className="text-center">Our Services</Header>
			</motion.div>
			<br />
			<br />
			<div className="flex justify-center gap-8 ">
				{services.map((service, index) => 
					<Service index={index} service={service} />
				)}
			</div>
		</section>
	)
}