import Image from "next/image";
import { motion, useAnimate } from "framer-motion";

export default function Stat({ stat }: { 
	stat: {
		img: any;
		header: string;
		description: string;
	}
}) {
	const [scope, animate] = useAnimate();
	return (
		<motion.div 
			className="w-[250px] m-auto max-sm:pb-8 flex gap-4 justify-center"
			ref={scope}
			initial={{ y: 50, opacity: 0 }}
			onViewportEnter={() => animate(scope.current, { y: 0, opacity: 100 }, { delay: 0.3 })}
			>
			
			<Image className="object-contain -translate-y-4" src={stat.img} alt="icon" width={50} height={50} />
			<div>
				<p className="text-5xl text-[var(--acent)] mb-2">{stat.header}</p>
				<p className="text-[var(--text-acent)]">{stat.description}</p>
			</div>
		</motion.div>
	)
}