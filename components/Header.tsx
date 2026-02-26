"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
	{ href: "/projects", label: "项目" },
	{ href: "/blog", label: "博客" },
];

const mobileNavLinks = [
	{ href: "/", label: "主页" },
	{ href: "/projects", label: "项目" },
	{ href: "/blog", label: "博客" },
];

export function Header() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<header className="fixed top-0 left-0 right-0 z-50 bg-alabaster/80 backdrop-blur-md border-b border-charcoal/10">
				<div className="max-w-400 mx-auto px-8 md:px-16">
					<div className="flex items-center justify-between h-16 md:h-20">
						<Link
							href="/"
							className="font-serif flex gap-1.5 items-center text-xl md:text-2xl tracking-tight text-charcoal transition-colors duration-500 hover:text-gold"
						>
							<Image src="/shopify-blog/logo2.webp" alt="Logo" width={40} height={40} />
							Sean.dev
						</Link>

						{/* Desktop Nav */}
						<nav className="hidden md:flex items-center gap-12 ml-auto">
							{navLinks.map((link) => (
								<Link
									key={link.href}
									href={link.href}
									className="text-xs uppercase tracking-[0.2em] text-charcoal transition-colors duration-500 hover:text-gold"
								>
									{link.label}
								</Link>
							))}
						</nav>

						{/* Mobile Menu Button */}
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="md:hidden p-2 -mr-2 text-charcoal"
							aria-label={isOpen ? "关闭菜单" : "打开菜单"}
							type="button"
						>
							{isOpen ? (
								<X size={24} strokeWidth={1} />
							) : (
								<Menu size={24} strokeWidth={1} />
							)}
						</button>
					</div>
				</div>
			</header>

			{/* Mobile Menu Overlay */}
			<div
				className={`fixed inset-0 z-40 bg-alabaster md:hidden transition-opacity duration-500 ${
					isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
				}`}
			>
				{/* Decorative grid lines */}
				<div className="absolute inset-0 overflow-hidden pointer-events-none">
					<div className="absolute top-0 bottom-0 left-[15%] w-px bg-charcoal/5" />
					<div className="absolute top-0 bottom-0 right-[15%] w-px bg-charcoal/5" />
					<div className="absolute left-0 right-0 top-[30%] h-px bg-charcoal/5" />
					<div className="absolute left-0 right-0 bottom-[30%] h-px bg-charcoal/5" />
				</div>

				<div className="flex flex-col justify-center h-full px-12">
					{/* Navigation Links */}
					<nav className="space-y-8">
						{mobileNavLinks.map((link, index) => (
							<div
								key={link.href}
								className={`transform transition-all duration-700 ${
									isOpen
										? "translate-y-0 opacity-100"
										: "translate-y-8 opacity-0"
								}`}
								style={{ transitionDelay: isOpen ? `${index * 100}ms` : "0ms" }}
							>
								<Link
									href={link.href}
									onClick={() => setIsOpen(false)}
									className="group flex items-baseline gap-6"
								>
									<span className="text-sm text-gold font-light tracking-wider">
										{String(index + 1).padStart(2, "0")}
									</span>
									<span className="font-serif text-4xl text-charcoal transition-colors duration-500 group-hover:text-gold">
										{link.label}
									</span>
								</Link>
								<div className="mt-4 ml-12 h-px w-24 bg-charcoal/10" />
							</div>
						))}
					</nav>

					{/* Tagline */}
					<div
						className={`mt-16 transform transition-all duration-700 ${
							isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
						}`}
						style={{ transitionDelay: isOpen ? "400ms" : "0ms" }}
					>
						<p className="text-xs uppercase tracking-[0.3em] text-warm-grey">
							Crafting Digital Experiences
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
