import { GridLines } from "@/components/GridLines";
import { Header } from "@/components/Header";
import { ProjectList } from "@/components/ProjectList";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
	return (
		<>
			<GridLines />
			<Header />

			<main className="pt-32 md:pt-40 pb-20 md:pb-32 px-8 md:px-16">
				<div className="max-w-400 mx-auto">
					<ProjectList projects={projects} />
				</div>
			</main>
		</>
	);
}
