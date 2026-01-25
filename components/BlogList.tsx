"use client";

import { BlogCard } from "@/components/BlogCard";
import { ScrollReveal } from "@/components/ScrollReveal";
import type { BlogPost } from "@/lib/blog";

interface BlogListProps {
	posts: BlogPost[];
}

export function BlogList({ posts }: BlogListProps) {
	if (posts.length === 0) {
		return (
			<div className="text-center py-20">
				<p className="text-warm-grey text-lg">暂无文章</p>
			</div>
		);
	}

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
			{posts.map((post, index) => (
				<ScrollReveal key={post.slug} delay={index * 0.1}>
					<BlogCard post={post} />
				</ScrollReveal>
			))}
		</div>
	);
}
