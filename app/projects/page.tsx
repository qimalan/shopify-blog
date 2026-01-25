import { GridLines } from "@/components/GridLines";
import { Header } from "@/components/Header";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
	return (
		<>
			<GridLines />
			<Header />

			<main className="pt-32 md:pt-40 pb-20 md:pb-32 px-8 md:px-16">
				<div className="max-w-400 mx-auto">
					<div className="flex flex-col gap-16 md:gap-24">
						{projects.map((project, index) => (
							<ProjectCard key={project.id} project={project} index={index} />
						))}
					</div>
				</div>
			</main>
		</>
	);
}
