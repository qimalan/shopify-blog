import Image from "next/image";

interface ContactCardProps {
	type: "wechat" | "qq";
	id: string;
	qrPlaceholder: string;
}

export function ContactCard({ type, id, qrPlaceholder }: ContactCardProps) {
	const label = type === "wechat" ? "微信" : "QQ";

	return (
		<div className="inline-flex items-center gap-6 md:gap-8 p-6 md:p-8 border border-charcoal/10 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.06)] bg-white/50 backdrop-blur-sm">
			<div className="w-30 h-30 md:w-34 md:h-34 flex items-center justify-center rounded-md">
				<Image src={qrPlaceholder} alt={`${label} QR Code`} width={130} height={130} className="object-contain" />
			</div>
			<div className="space-y-2">
				<p className="text-charcoal font-medium">{label}</p>
				<p className="text-warm-grey text-sm">{id}</p>
			</div>
		</div>
	);
}
