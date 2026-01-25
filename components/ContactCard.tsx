interface ContactCardProps {
	type: "wechat" | "qq";
	id: string;
	qrPlaceholder: string;
}

export function ContactCard({ type, id, qrPlaceholder }: ContactCardProps) {
	const label = type === "wechat" ? "微信" : "QQ";

	return (
		<div className="inline-flex items-center gap-6 md:gap-8 p-6 md:p-8 border border-charcoal/10 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.06)] bg-white/50 backdrop-blur-sm">
			<div className="w-32 h-32 md:w-36 md:h-36 bg-charcoal flex items-center justify-center rounded-md">
				<span className="text-alabaster text-xs">{qrPlaceholder}</span>
			</div>
			<div className="space-y-2">
				<p className="text-charcoal font-medium">{label}</p>
				<p className="text-warm-grey text-sm">{id}</p>
			</div>
		</div>
	);
}
