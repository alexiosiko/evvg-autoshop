import React from "react"
import { motion, useAnimate } from "framer-motion";
import AnimatedDiv from "./animateddiv";

export default function LeftRight({ children, className }: {
	children: React.ReactNode,
	className?: string,
}) {
	const [scope, animate] = useAnimate();
	return (
		<div className={`${className} flex justify-center items-center w-[80%] m-auto gap-24`}>
			{React.Children.map(children, (child: React.ReactNode, index: number) => 
				<AnimatedDiv child={child} index={index} />
			)}
		</div>
	)
}