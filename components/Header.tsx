"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
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
							<Image src="/logo2.png" alt="Logo" width={40} height={40} />
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
			{isOpen && (
				<div className="fixed inset-0 z-40 bg-alabaster md:hidden">
					<div className="flex flex-col items-center justify-center h-full gap-8">
						{navLinks.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								onClick={() => setIsOpen(false)}
								className="font-serif text-4xl text-charcoal transition-colors duration-500 hover:text-gold"
							>
								{link.label}
							</Link>
						))}
					</div>
				</div>
			)}
		</>
	);
}
