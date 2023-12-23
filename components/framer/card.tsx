import { motion, useAnimate } from "framer-motion";

export default function Card({ index, child, }: { index: number, child: React.ReactNode }) {
	let initialProps = index % 2 == 0 ? 
	{ x: -200, opacity: 0 }
	: { x: 200, opacity: 0 };
	const [scope, animate] = useAnimate();
	return (
		<motion.div 
			key={index} 
			className="flex-1 p-4 mb-24 flex"
			ref={scope}
			initial={initialProps}
			onViewportEnter={() => animate(scope.current, { x: 0, opacity: 100 }, { delay: 0.3 })}
			>
			{child}
		</motion.div>
	)
} 