"use client";

import { ProjectCard } from "@/components/ProjectCard";
import { ScrollReveal } from "@/components/ScrollReveal";
import type { Project } from "@/data/projects";

interface ProjectListProps {
	projects: Project[];
}

export function ProjectList({ projects }: ProjectListProps) {
	return (
		<div className="flex flex-col gap-16 md:gap-24">
			{projects.map((project, index) => (
				<ScrollReveal key={project.id} delay={index * 0.15}>
					<ProjectCard project={project} index={index} />
				</ScrollReveal>
			))}
		</div>
	);
}
