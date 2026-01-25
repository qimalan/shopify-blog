import { BlogList } from "@/components/BlogList";
import { GridLines } from "@/components/GridLines";
import { Header } from "@/components/Header";
import { getAllPosts } from "@/lib/blog";

export default function BlogPage() {
	const posts = getAllPosts();

	return (
		<>
			<GridLines />
			<Header />

			<main className="pt-32 md:pt-40 pb-20 md:pb-32 px-8 md:px-16">
				<div className="max-w-400 mx-auto">
					<BlogList posts={posts} />
				</div>
			</main>
		</>
	);
}
