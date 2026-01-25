"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ProfileImageProps {
	src: string;
	alt: string;
}

export function ProfileImage({ src, alt }: ProfileImageProps) {
	return (
		<div className="relative aspect-9/16 lg:h-175 lg:w-auto w-full group">
			{/* Decorative frame - outer */}
			<motion.div
				className="absolute -inset-3 md:-inset-4 border border-gold/20 pointer-events-none"
				initial={{ opacity: 0, scale: 0.95 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
			/>

			{/* Decorative frame - inner offset */}
			<motion.div
				className="absolute -inset-1.5 md:-inset-2 border border-gold/10 pointer-events-none"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
			/>

			{/* Corner decorations */}
			<div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 w-6 h-6 md:w-8 md:h-8 pointer-events-none">
				<motion.div
					className="absolute top-0 left-0 w-full h-px bg-gold"
					initial={{ scaleX: 0 }}
					animate={{ scaleX: 1 }}
					transition={{ duration: 0.6, delay: 0.8 }}
					style={{ transformOrigin: "left" }}
				/>
				<motion.div
					className="absolute top-0 left-0 h-full w-px bg-gold"
					initial={{ scaleY: 0 }}
					animate={{ scaleY: 1 }}
					transition={{ duration: 0.6, delay: 0.8 }}
					style={{ transformOrigin: "top" }}
				/>
			</div>

			<div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 w-6 h-6 md:w-8 md:h-8 pointer-events-none">
				<motion.div
					className="absolute top-0 right-0 w-full h-px bg-gold"
					initial={{ scaleX: 0 }}
					animate={{ scaleX: 1 }}
					transition={{ duration: 0.6, delay: 0.9 }}
					style={{ transformOrigin: "right" }}
				/>
				<motion.div
					className="absolute top-0 right-0 h-full w-px bg-gold"
					initial={{ scaleY: 0 }}
					animate={{ scaleY: 1 }}
					transition={{ duration: 0.6, delay: 0.9 }}
					style={{ transformOrigin: "top" }}
				/>
			</div>

			<div className="absolute -bottom-3 -left-3 md:-bottom-4 md:-left-4 w-6 h-6 md:w-8 md:h-8 pointer-events-none">
				<motion.div
					className="absolute bottom-0 left-0 w-full h-px bg-gold"
					initial={{ scaleX: 0 }}
					animate={{ scaleX: 1 }}
					transition={{ duration: 0.6, delay: 1.0 }}
					style={{ transformOrigin: "left" }}
				/>
				<motion.div
					className="absolute bottom-0 left-0 h-full w-px bg-gold"
					initial={{ scaleY: 0 }}
					animate={{ scaleY: 1 }}
					transition={{ duration: 0.6, delay: 1.0 }}
					style={{ transformOrigin: "bottom" }}
				/>
			</div>

			<div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 w-6 h-6 md:w-8 md:h-8 pointer-events-none">
				<motion.div
					className="absolute bottom-0 right-0 w-full h-px bg-gold"
					initial={{ scaleX: 0 }}
					animate={{ scaleX: 1 }}
					transition={{ duration: 0.6, delay: 1.1 }}
					style={{ transformOrigin: "right" }}
				/>
				<motion.div
					className="absolute bottom-0 right-0 h-full w-px bg-gold"
					initial={{ scaleY: 0 }}
					animate={{ scaleY: 1 }}
					transition={{ duration: 0.6, delay: 1.1 }}
					style={{ transformOrigin: "bottom" }}
				/>
			</div>

			{/* Floating label */}
			<motion.div
				className="absolute -bottom-6 md:-bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap"
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, delay: 1.2 }}
			>
				<span className="text-[10px] uppercase tracking-[0.3em] text-gold/60">
					Est. 2020
				</span>
			</motion.div>

			{/* Main image */}
			<div className="relative h-full w-full overflow-hidden">
				<Image
					src={src}
					alt={alt}
					fill
					priority
					quality={90}
					className="h-full w-full object-cover grayscale transition-all duration-2000 ease-out group-hover:scale-105 group-hover:grayscale-0"
				/>
				{/* Subtle overlay on hover */}
				<div className="absolute inset-0 bg-gold/0 transition-colors duration-1000 group-hover:bg-gold/5" />
			</div>
		</div>
	);
}
