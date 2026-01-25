import { BlogCard } from "@/components/BlogCard";
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
					{posts.length === 0 ? (
						<div className="text-center py-20">
							<p className="text-warm-grey text-lg">暂无文章</p>
						</div>
					) : (
						<div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
							{posts.map((post) => (
								<BlogCard key={post.slug} post={post} />
							))}
						</div>
					)}
				</div>
			</main>
		</>
	);
}
