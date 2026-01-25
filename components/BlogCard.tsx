import Link from "next/link";
import type { BlogPost } from "@/lib/blog";

interface BlogCardProps {
	post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
	return (
		<Link href={`/blog/${post.slug}`} className="group block">
			{/* Cover Image */}
			<div className="relative aspect-16/10 md:aspect-4/5 overflow-hidden mb-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)] group-hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-shadow duration-700">
				<div className="absolute inset-0 bg-taupe grayscale group-hover:grayscale-0 transition-all duration-1500" />
				{/* Placeholder - replace with actual cover images */}
				<div className="absolute inset-0 flex items-center justify-center text-warm-grey text-sm">
					Cover
				</div>
				<div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.04)] group-hover:scale-105 transition-transform duration-1500" />
			</div>

			{/* Date */}
			<div className="flex items-center gap-3 mb-3">
				<div className="h-px w-6 bg-charcoal/30" />
				<span className="text-[10px] uppercase tracking-[0.2em] text-warm-grey">
					{post.date}
				</span>
			</div>

			{/* Title */}
			<h2 className="font-serif text-xl md:text-2xl text-charcoal group-hover:text-gold transition-colors duration-500 leading-tight">
				{post.title}
			</h2>

			{/* Excerpt */}
			<p className="mt-3 text-sm text-warm-grey leading-relaxed line-clamp-3">
				{post.excerpt}
			</p>
		</Link>
	);
}
