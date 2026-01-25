import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
	project: Project;
	index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
	const isEven = index % 2 === 1;

	return (
		<a
			href={project.url}
			target="_blank"
			rel="noopener noreferrer"
			className={`group block border-t border-charcoal/10 pt-8 md:pt-12 ${
				isEven ? "lg:ml-auto lg:mr-0" : "lg:mr-auto lg:ml-0"
			} lg:max-w-[75%]`}
		>
			{/* Image */}
			<div className="relative aspect-4/3 md:aspect-video overflow-hidden mb-6 md:mb-8 shadow-[0_4px_20px_rgba(0,0,0,0.06)] group-hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-shadow duration-700">
				<div className="absolute inset-0 bg-taupe" />
				{/* Placeholder - replace with actual project images */}
				<div className="absolute inset-0 flex items-center justify-center text-warm-grey text-sm grayscale group-hover:grayscale-0 transition-all duration-1500">
					Project Image
				</div>
				<div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.04)]" />
			</div>

			{/* Content */}
			<div className="flex items-start justify-between gap-4">
				<div>
					{/* Tags */}
					<div className="flex gap-3 mb-3">
						{project.tags.map((tag) => (
							<span
								key={tag}
								className="text-[10px] uppercase tracking-[0.2em] text-warm-grey"
							>
								{tag}
							</span>
						))}
					</div>

					{/* Title */}
					<h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-charcoal group-hover:text-gold transition-colors duration-500">
						{project.title}
					</h2>

					{/* Description */}
					<p className="mt-3 text-base text-warm-grey leading-relaxed max-w-lg">
						{project.description}
					</p>
				</div>

				{/* Arrow */}
				<div className="shrink-0 w-10 h-10 border border-charcoal/20 flex items-center justify-center group-hover:border-gold group-hover:bg-gold transition-all duration-500">
					<ArrowUpRight
						size={18}
						strokeWidth={1}
						className="text-charcoal group-hover:text-white transition-colors duration-500"
					/>
				</div>
			</div>
		</a>
	);
}
