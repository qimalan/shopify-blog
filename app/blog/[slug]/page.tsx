import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GridLines } from "@/components/GridLines";
import { Header } from "@/components/Header";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { MDXContent } from "@/lib/mdx";

interface BlogPostPageProps {
	params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
	const posts = getAllPosts();
	return posts.map((post) => ({
		slug: post.slug,
	}));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
	const { slug } = await params;
	const post = getPostBySlug(slug);

	if (!post) {
		notFound();
	}

	return (
		<>
			<GridLines />
			<Header />

			<main className="pt-32 md:pt-40 pb-20 md:pb-32 px-8 md:px-16">
				<div className="max-w-400 mx-auto">
					{/* Back Link */}
					<Link
						href="/blog"
						className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-warm-grey hover:text-gold transition-colors duration-500 mb-12"
					>
						<ArrowLeft size={14} strokeWidth={1} />
						返回博客
					</Link>

					{/* Header */}
					<header className="mb-12 md:mb-16">
						<div className="flex items-center gap-3 mb-6">
							<div className="h-px w-8 bg-charcoal/30" />
							<span className="text-[10px] uppercase tracking-[0.3em] text-warm-grey">
								{post.date}
							</span>
						</div>
						<h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[0.95] tracking-tight text-charcoal">
							{post.title}
						</h1>
					</header>

					{/* Cover Image */}
					{post.cover && (
						<div className="relative aspect-video overflow-hidden mb-12 md:mb-16 shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
							<div className="absolute inset-0 bg-taupe" />
							<div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)]" />
						</div>
					)}

					{/* Content */}
					<article className="max-w-2xl mx-auto">
						<MDXContent source={post.content} />
					</article>
				</div>
			</main>
		</>
	);
}
