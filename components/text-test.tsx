import { ScrollArea } from "@radix-ui/react-scroll-area";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import React, { useEffect, useState } from "react";


export default function TextAnim({ children, className }: {
	children: string,
	className?: string,
}) {
  const baseText = children;
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.slice(0, latest)
  );

  return (
	<motion.span
	className={`${className}`}
		onViewportEnter={() => animate(count, baseText.length, { type: "tween", duration: 2, ease: "easeInOut", })}
		>
			{displayText}
		</motion.span>
	
  );
}
