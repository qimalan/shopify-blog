import { GridLines } from "@/components/GridLines";
import { Header } from "@/components/Header";
import Particles from "@/components/Particles";
import { TechStackIcon } from "@/components/TechStackIcon";
import { siteConfig, techStack } from "@/data/site";
export default function Home() {
	return (
		<>
			<div
				style={{
					width: "100%",
					height: "1000px",
					position: "absolute",
					zIndex: -1,
				}}
			>
				<Particles
					particleColors={["#d4af37"]}
					particleCount={800}
					particleSpread={10}
					particleBaseSize={70}
					moveParticlesOnHover={false}
					alphaParticles={false}
					disableRotation
					pixelRatio={1}
				/>
			</div>
			<GridLines />
			<Header />
			<main className="min-h-screen flex flex-col justify-center px-8 md:px-16 py-20 md:py-24 overflow-hidden">
				<div className="max-w-300 mx-auto w-full space-y-16 md:space-y-20">
					{/* Hero / Personal Intro */}
					<section className="space-y-6">
						<div className="flex items-center gap-4">
							<div className="h-px w-8 md:w-12 bg-charcoal/30" />
							<span className="text-[10px] uppercase tracking-[0.3em] text-warm-grey">
								Shopify Developer
							</span>
						</div>
						<h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-charcoal">
							专注 Shopify
							<br />
							<span className="italic text-gold">主题与应用开发</span>
						</h1>
						<p className="text-base md:text-lg text-warm-grey max-w-lg leading-relaxed">
							{siteConfig.description}
						</p>
					</section>

					{/* Tech Stack */}
					<section className="space-y-6">
						<h2 className="text-[10px] uppercase tracking-[0.3em] text-warm-grey">
							技术栈
						</h2>
						<div className="flex flex-wrap gap-6 md:gap-8">
							{techStack.map((tech) => (
								<div
									key={tech.name}
									className="group flex items-center gap-3 transition-all duration-500"
								>
									<TechStackIcon name={tech.name} />
									<span className="text-sm text-charcoal/70 group-hover:text-charcoal transition-colors duration-300">
										{tech.name}
									</span>
								</div>
							))}
						</div>
					</section>

					{/* Contact */}
					<section className="space-y-6">
						<h2 className="text-[10px] uppercase tracking-[0.3em] text-warm-grey">
							联系方式
						</h2>
						<div className="flex items-center gap-8">
							<div className="w-28 h-28 md:w-32 md:h-32 bg-charcoal flex items-center justify-center">
								{/* WeChat QR Code placeholder */}
								<span className="text-alabaster text-xs">微信二维码</span>
							</div>
							<div className="space-y-2">
								<p className="text-charcoal font-medium">微信</p>
								<p className="text-warm-grey text-sm">{siteConfig.wechat}</p>
								<p className="text-warm-grey/60 text-xs mt-4">
									扫码添加，聊聊你的项目
								</p>
							</div>
						</div>
					</section>
				</div>
			</main>
		</>
	);
}
