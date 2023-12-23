import React from "react";
import { motion, useAnimate } from "framer-motion";

export default function Vertical({ children, className }: {
	children: React.ReactNode,
	className?: string,
}) {
	const [scope, animate] = useAnimate();
	return (
		<motion.div
			className={`${className}`}
			ref={scope}
			initial={{ y: -50, opacity: 0 }}
			onViewportEnter={() => animate(scope.current, { y: 0, opacity: 100 }, {  delay: 0.6 })}
			
			>
			{children}
		</motion.div>
	)
}