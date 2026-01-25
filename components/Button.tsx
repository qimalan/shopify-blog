import Link from "next/link";

interface ButtonProps {
	children: React.ReactNode;
	href?: string;
	variant?: "primary" | "secondary" | "ghost";
	className?: string;
	external?: boolean;
	onClick?: () => void;
}

export function Button({
	children,
	href,
	variant = "primary",
	className = "",
	external = false,
	onClick,
}: ButtonProps) {
	const baseStyles =
		"relative h-12 px-8 text-xs uppercase tracking-[0.2em] font-medium overflow-hidden transition-all duration-500";

	const variants = {
		primary: `bg-charcoal text-white shadow-[0_4px_16px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.25)]`,
		secondary: `bg-transparent border border-charcoal text-charcoal hover:bg-charcoal hover:text-white`,
		ghost: `bg-transparent text-charcoal hover:text-gold`,
	};

	const content = (
		<>
			{variant === "primary" && (
				<span className="absolute inset-0 bg-gold -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]" />
			)}
			<span className="relative z-10">{children}</span>
		</>
	);

	const combinedClassName = `group ${baseStyles} ${variants[variant]} ${className}`;

	if (href) {
		if (external) {
			return (
				<a
					href={href}
					target="_blank"
					rel="noopener noreferrer"
					className={combinedClassName}
				>
					{content}
				</a>
			);
		}
		return (
			<Link href={href} className={combinedClassName}>
				{content}
			</Link>
		);
	}

	return (
		<button onClick={onClick} className={combinedClassName} type="button">
			{content}
		</button>
	);
}
