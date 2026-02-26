"use client";

import Link from "next/link";
import { ContactCard } from "@/components/ContactCard";
import { GridLines } from "@/components/GridLines";
import { Header } from "@/components/Header";
import { ProfileImage } from "@/components/ProfileImage";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionTitle } from "@/components/SectionTitle";
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
									<SectionTitle as="span">Shopify Full-Stack Developer</SectionTitle>
								</div>
							</ScrollReveal>
							<ScrollReveal delay={0.1}>
								<h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-charcoal">
									聚焦 TS 全栈 & Shopify
									<br />
									<span className="italic text-gold">生态开发</span>
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
							<SectionTitle>技术栈</SectionTitle>
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
							<SectionTitle>联系方式</SectionTitle>
							<div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">
								{/* Contact Cards */}
								<div className="flex flex-col md:flex-row gap-6">
									<ContactCard
										type="wechat"
										id={siteConfig.wechat}
										qrPlaceholder="/shopify-blog/wechat.jpg"
									/>
									{/* <ContactCard
										type="qq"
										id={siteConfig.qq}
										qrPlaceholder="QQ二维码"
									/> */}
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
