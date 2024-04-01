import Accent from "../accent";
import { motion } from "framer-motion";
import evvgBackground from "@/images/evvg-background.png"; // Import the image
import Description from "../description";

export default function Intro() {
  return (
    <div className="w-full h-screen bg-cover bg-center relative" style={{ backgroundImage: `url(${evvgBackground})` }}>
      <div className="absolute inset-0 flex flex-col justify-center">
        <div className="max-w-5xl m-auto text-center">
          <motion.div
            className="md:text-[80px] max-md:text-[60px] text-white font-bold"
            style={{ lineHeight: 1.1 }}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 100 }}
          >
            Your <Accent>Trusted </Accent> Auto Repair Service Provider
          </motion.div>
          <br />
          <Description>
            <motion.div
			className="text-slate-200"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 100 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Welcome to EVVG Auto Services, a family-owned mechanic business with over 30 years of dedicated service. Our commitment to quality and customer satisfaction has made us a reliable choice for all your automotive needs. Join the EVVG family and experience excellence in auto repair.
            </motion.div>
          </Description>
        </div>
      </div>
    </div>
  );
}
