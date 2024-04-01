import Image from "next/image";
import { motion, useAnimate } from "framer-motion";
import { IconType } from "react-icons";
import React from "react";
import Description from "./description";

export default function Service({ service, index }: {
	service: {
		img: IconType;
		header: string;
		description: string;
	},
	index: number,
}) {
	const [scope, animate] = useAnimate();
	const delay = index / 10 + 0.3;
	return (
		<motion.div
			key={index}
			className="bg-[var(--background-other)] max-sm:mb-8 shadow-xl m-auto rounded-md p-6 h-[380px] w-[300px] flex-col flex items-center gap-4"
			ref={scope}
			initial={{ y: 150, opacity: 0 }}
			onViewportEnter={() => animate(scope.current, { y: 0, opacity: 100}, { delay: delay })}
			>
			{React.createElement(service.img, { height: 500, width: 500, size: '55px'})}
			<h1 className="text-2xl text-center">{service.header}</h1>
			<Description className="text-lg text-center">{service.description}</Description>
		</motion.div>
	)
}