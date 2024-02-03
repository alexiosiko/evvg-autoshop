import Image from "next/image";
import { motion, useAnimate } from "framer-motion";

export default function Service({ service, index }: {
	service: any,
	index: number,
}) {
	const [scope, animate] = useAnimate();
	const delay = index / 10 + 0.3;
	return (
		<motion.div
			key={index}
			className="bg-[var(--background-other)] shadow-xl m-auto rounded-md p-4 h-[320px] w-[250px] flex-col flex items-center gap-4"
			ref={scope}
			initial={{ y: 150, opacity: 0 }}
			onViewportEnter={() => animate(scope.current, { y: 0, opacity: 100}, { delay: delay })}
			>
			<Image src={service.img} width={50} height={50} alt="service-icon" />
			<h1 className="text-2xl text-center">{service.header}</h1>
			<p className="text-center text-[15px] text-[var(--text-other)]">{service.description}</p>
		</motion.div>
	)
}