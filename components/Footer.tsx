"use client";

export function Footer() {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	const currentYear = new Date().getFullYear();

	return (
		<footer className="border-t border-charcoal/10 bg-alabaster">
			<div className="max-w-400 mx-auto px-8 md:px-16 py-12 md:py-16">
				<div className="flex flex-col md:flex-row items-center justify-between gap-8">
					{/* Copyright */}
					<div className="flex flex-col items-center md:items-start gap-2">
						<p className="text-xs uppercase tracking-[0.2em] text-warm-grey">
							© {currentYear} Sean.dev
						</p>
						<p className="text-xs text-warm-grey/60">
							Crafting Digital Experiences
						</p>
					</div>

					{/* Back to Top Button */}
					<button
						onClick={scrollToTop}
						className="group flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-charcoal transition-colors duration-500 hover:text-gold"
						type="button"
						aria-label="返回顶部"
					>
						<span>返回顶部</span>
						<span className="flex items-center justify-center w-10 h-10 border border-charcoal/20 rounded-full transition-all duration-500 group-hover:border-gold group-hover:bg-gold/10">
							<svg
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="1.5"
								className="transition-transform duration-500 group-hover:-translate-y-0.5"
							>
								<path d="M12 19V5M5 12l7-7 7 7" />
							</svg>
						</span>
					</button>
				</div>

				{/* Decorative Line */}
				<div className="mt-12 flex justify-center">
					<div className="h-px w-16 bg-gradient-to-r from-transparent via-charcoal/20 to-transparent" />
				</div>
			</div>
		</footer>
	);
}
