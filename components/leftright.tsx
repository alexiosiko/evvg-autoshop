import React from "react"
import { motion, useAnimate } from "framer-motion";
import AnimatedDiv from "./animateddiv";

export default function LeftRight({ children, className }: {
	children: React.ReactNode,
	className?: string,
}) {
	const [scope, animate] = useAnimate();
	return (
		<div className={`${className} md:flex w-full`}>
			{React.Children.map(children, (child: React.ReactNode, index: number) => 
				<AnimatedDiv className={className} key={index} child={child} index={index} />
			)}
		</div>
	)
}