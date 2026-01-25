import type { Metadata } from "next";
import { DM_Serif_Display, Outfit } from "next/font/google";
import { Footer } from "@/components/Footer";
import "./globals.css";
import Particles from "@/components/Particles";

const outfit = Outfit({
	subsets: ["latin"],
	variable: "--font-outfit",
	display: "swap",
});

const dmSerif = DM_Serif_Display({
	subsets: ["latin"],
	weight: "400",
	variable: "--font-dm-serif",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Shopify Developer | Theme & App Development",
	description: "Professional Shopify theme and app development services",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="zh-CN" className={`${outfit.variable} ${dmSerif.variable}`}>
			<head>
				<link
					rel="stylesheet"
					href="https://cdn.jsdelivr.net/npm/lxgw-neoxihei-webfont@1.1.0/style.css"
				/>
			</head>
			<body className="antialiased">
				<div
					style={{
						width: "100%",
						height: "100vh",
						position: "absolute",
						top: 80,
						zIndex: -1,
					}}
				>
					<Particles
						particleColors={["#d4af37"]}
						particleCount={900}
						particleSpread={10}
						particleBaseSize={60}
						moveParticlesOnHover={false}
						alphaParticles={false}
						disableRotation
						speed={0.2}
						pixelRatio={1}
					/>
				</div>
				{children}
				<Footer />
			</body>
		</html>
	);
}
