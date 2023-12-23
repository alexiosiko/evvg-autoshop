import React from "react";
import { motion } from 'framer-motion';
import Card from "./card";

export default function LeftRight({ children, className }: {
	children: React.ReactNode,
	className?: string

}) {
	return (
		<div className={`${className} md:flex justify-around gap-12`}>

			{React.Children.map(children, (child, index) =>
				<Card child={child} index={index} key={index} />
			)}
		</div>
	)
}