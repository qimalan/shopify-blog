import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GridLines } from "@/components/GridLines";
import { Header } from "@/components/Header";
import { SectionTitle } from "@/components/SectionTitle";
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
							<SectionTitle as="span">{post.date}</SectionTitle>
						</div>
						<h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[0.95] tracking-tight text-charcoal">
							{post.title}
						</h1>
					</header>

					{/* Cover Image */}
					{post.cover && (
						<Image
							src={post.cover}
							alt={post.title}
							width={1200}
							height={600}
							className="w-full h-auto object-cover"
						/>
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
