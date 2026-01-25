interface SectionTitleProps {
	children: React.ReactNode;
	as?: "h2" | "h3" | "span";
	className?: string;
}

export function SectionTitle({
	children,
	as: Tag = "h2",
	className = "",
}: SectionTitleProps) {
	return (
		<Tag
			className={`text-[10px] uppercase tracking-[0.3em] text-warm-grey ${className}`}
		>
			{children}
		</Tag>
	);
}
