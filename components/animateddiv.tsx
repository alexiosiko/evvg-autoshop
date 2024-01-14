import React from "react"
import { motion, useAnimate } from "framer-motion"; 

export default function AnimatedDiv({ child, index }: {
	child: React.ReactNode;
	index: number;
}) {
	const [scope, animate] = useAnimate();
	let initial = index == 0 ? { x: -50, opacity: 0 } : { x: 50, opacity: 0 };
	return (
		<motion.div
		className="w-[50%]"
			ref={scope}
			initial={initial}
			onViewportEnter={() => animate(scope.current, { x: 0, opacity: 100 }, { delay: 0.5 })}
		>
			{child}
		</motion.div>
	)
}