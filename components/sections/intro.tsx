
import Accent from "../accent";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section className="flex items-center h-[700px]">
		<div className="w-[50%]">
			<motion.div
				className="text-[100px] text-[var(--text-accent)] font-bold"
				style={{ lineHeight: 1.1}}
				initial={{ y: 50, opacity: 0}}
				animate={{ y: 0, opacity: 100 }}
				
				>
				Your <Accent>Trusted </Accent> 
				Auto Repair Service Provider</motion.div>
			<br />
			<motion.div 
				initial={{ y: 50, opacity: 0}}
				animate={{ y: 0, opacity: 100 }}
				transition={{ delay: 0.5, duration: 0.5 }}
				
				className="text-[var(--text-accent)]">
        Welcome to EVVG Auto Services, a family-owned mechanic business with over 30 years of dedicated service. Our commitment to quality and customer satisfaction has made us a reliable choice for all your automotive needs. Join the EVVG family and experience excellence in auto repair.
			</motion.div>
		</div>
    </section>
  );
}
