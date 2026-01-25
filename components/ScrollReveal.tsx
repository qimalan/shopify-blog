"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

interface ScrollRevealProps {
	children: ReactNode;
	className?: string;
	delay?: number;
	direction?: "up" | "down" | "left" | "right" | "none";
	duration?: number;
	once?: boolean;
}

const getVariants = (direction: string): Variants => {
	const directions: Record<string, { x?: number; y?: number }> = {
		up: { y: 40 },
		down: { y: -40 },
		left: { x: 40 },
		right: { x: -40 },
		none: {},
	};

	return {
		hidden: {
			opacity: 0,
			...directions[direction],
		},
		visible: {
			opacity: 1,
			x: 0,
			y: 0,
		},
	};
};

export function ScrollReveal({
	children,
	className = "",
	delay = 0,
	direction = "up",
	duration = 0.6,
	once = true,
}: ScrollRevealProps) {
	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{ once, margin: "-100px" }}
			variants={getVariants(direction)}
			transition={{
				duration,
				delay,
				ease: [0.25, 0.46, 0.45, 0.94], // luxury easing
			}}
			className={className}
		>
			{children}
		</motion.div>
	);
}
