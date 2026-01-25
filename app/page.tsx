"use client";

import Link from "next/link";
import { GridLines } from "@/components/GridLines";
import { Header } from "@/components/Header";
import { ProfileImage } from "@/components/ProfileImage";
import { ScrollReveal } from "@/components/ScrollReveal";
import { TechStackIcon } from "@/components/TechStackIcon";
import { siteConfig, techStack } from "@/data/site";
export default function Home() {
	return (
		<>
			<GridLines />
			<Header />
			<main className="min-h-screen flex flex-col justify-center px-8 md:px-16 py-20 md:py-24 overflow-hidden">
				<div className="max-w-300 mx-auto w-full space-y-16 md:space-y-20">
					{/* Hero / Personal Intro */}
					<section className="flex flex-col lg:flex-row lg:items-center lg:gap-16 gap-8">
						{/* Text Content */}
						<div className="space-y-6 lg:flex-1">
							<ScrollReveal delay={0}>
								<div className="flex items-center gap-4">
									<div className="h-px w-8 md:w-12 bg-charcoal/30" />
									<span className="text-[10px] uppercase tracking-[0.3em] text-warm-grey">
										Shopify Developer
									</span>
								</div>
							</ScrollReveal>
							<ScrollReveal delay={0.1}>
								<h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-charcoal">
									专注 Shopify
									<br />
									<span className="italic text-gold">主题与应用开发</span>
								</h1>
							</ScrollReveal>
							<ScrollReveal delay={0.2}>
								<p className="text-base md:text-lg text-warm-grey max-w-lg leading-relaxed">
									{siteConfig.description}
								</p>
							</ScrollReveal>
							<ScrollReveal delay={0.3}>
								<button
									type="button"
									className="relative inline-flex items-center justify-center overflow-hidden rounded-none font-inter font-medium text-xs uppercase tracking-[0.2em] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1A1A1A] disabled:pointer-events-none disabled:opacity-50 group bg-[#1A1A1A] text-white shadow-[0_4px_16px_rgba(0,0,0,0.15)] transition-shadow duration-500 hover:text-white hover:shadow-[0_8px_24px_rgba(0,0,0,0.25)] h-10 px-6 md:h-12 md:px-8"
								>
									<Link
										href="/projects"
										className="relative z-10 flex items-center gap-2 text-gold lg:text-white lg:hover:text-gold transition-colors duration-500"
									>
										查看案例
									</Link>
								</button>
							</ScrollReveal>
						</div>

						{/* Profile Image */}
						<ScrollReveal direction="right" delay={0.2} className="w-full lg:w-auto lg:-mr-12.5 -z-10 p-4 md:p-6">
							<ProfileImage
								src={siteConfig.profileImage}
								alt={siteConfig.profileImageAlt}
							/>
						</ScrollReveal>
					</section>

					{/* Tech Stack */}
					<ScrollReveal>
						<section className="space-y-6">
							<h2 className="text-[10px] uppercase tracking-[0.3em] text-warm-grey">
								技术栈
							</h2>
							<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:flex lg:flex-wrap gap-3 md:gap-4">
								{techStack.map((tech) => (
									<div
										key={tech.name}
										className="group flex items-center gap-3 p-3 md:p-4 border border-charcoal/10 rounded-lg bg-white/30 backdrop-blur-sm transition-all duration-500 hover:border-gold/30 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)]"
									>
										<TechStackIcon name={tech.name} />
										<span className="text-sm text-charcoal/70 group-hover:text-charcoal transition-colors duration-300">
											{tech.name}
										</span>
									</div>
								))}
							</div>
						</section>
					</ScrollReveal>

					{/* Contact */}
					<ScrollReveal>
						<section className="space-y-6">
							<h2 className="text-[10px] uppercase tracking-[0.3em] text-warm-grey">
								联系方式
							</h2>
							<div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">
								{/* Contact Cards */}
								<div className="flex flex-col md:flex-row gap-6">
									{/* WeChat */}
									<div className="inline-flex items-center gap-6 md:gap-8 p-6 md:p-8 border border-charcoal/10 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.06)] bg-white/50 backdrop-blur-sm">
										<div className="w-32 h-32 md:w-36 md:h-36 bg-charcoal flex items-center justify-center rounded-md">
											{/* WeChat QR Code placeholder */}
											<span className="text-alabaster text-xs">微信二维码</span>
										</div>
										<div className="space-y-2">
											<p className="text-charcoal font-medium">微信</p>
											<p className="text-warm-grey text-sm">
												{siteConfig.wechat}
											</p>
										</div>
									</div>
									{/* QQ */}
									<div className="inline-flex items-center gap-6 md:gap-8 p-6 md:p-8 border border-charcoal/10 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.06)] bg-white/50 backdrop-blur-sm">
										<div className="w-32 h-32 md:w-36 md:h-36 bg-charcoal flex items-center justify-center rounded-md">
											{/* QQ QR Code placeholder */}
											<span className="text-alabaster text-xs">QQ二维码</span>
										</div>
										<div className="space-y-2">
											<p className="text-charcoal font-medium">QQ</p>
											<p className="text-warm-grey text-sm">{siteConfig.qq}</p>
										</div>
									</div>
								</div>
								{/* CTA Text */}
								<div className="lg:pl-4 lg:border-l lg:border-charcoal/10 lg:ml-auto text-center">
									<p className="font-serif lg:border-0 border-b text-sm md:text-2xl text-charcoal/80 leading-relaxed">
										扫码添加
										<br />
										<span className="text-gold">聊聊你的项目</span>
									</p>
								</div>
							</div>
						</section>
					</ScrollReveal>
				</div>
			</main>
		</>
	);
}
