import { compileMDX } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";

const components = {
	h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
		<h1 className="font-serif text-3xl md:text-4xl mt-12 mb-6" {...props} />
	),
	h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
		<h2 className="font-serif text-2xl md:text-3xl mt-10 mb-4" {...props} />
	),
	h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
		<h3 className="font-serif text-xl md:text-2xl mt-8 mb-3" {...props} />
	),
	p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
		<p
			className="text-base md:text-lg leading-relaxed mb-6 text-charcoal/80"
			{...props}
		/>
	),
	a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
		<a
			className="text-gold hover:text-charcoal transition-colors duration-500 underline underline-offset-4"
			{...props}
		/>
	),
	ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
		<ul
			className="list-disc list-inside mb-6 space-y-2 text-charcoal/80"
			{...props}
		/>
	),
	ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
		<ol
			className="list-decimal list-inside mb-6 space-y-2 text-charcoal/80"
			{...props}
		/>
	),
	li: (props: React.HTMLAttributes<HTMLLIElement>) => (
		<li className="text-base md:text-lg leading-relaxed" {...props} />
	),
	blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
		<blockquote
			className="border-l-2 border-gold pl-6 my-8 font-serif text-xl italic text-charcoal/70"
			{...props}
		/>
	),
	code: (props: React.HTMLAttributes<HTMLElement>) => (
		<code className="bg-taupe/50 px-1.5 py-0.5 text-sm font-mono" {...props} />
	),
	pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
		<pre
			className="bg-charcoal text-alabaster p-6 overflow-x-auto my-8 text-sm leading-relaxed"
			{...props}
		/>
	),
	img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
		<span className="block my-8">
			<img className="w-full shadow-[0_4px_24px_rgba(0,0,0,0.08)]" {...props} />
		</span>
	),
};

export async function MDXContent({ source }: { source: string }) {
	const { content } = await compileMDX({
		source,
		components,
		options: {
			parseFrontmatter: true,
			mdxOptions: {
				rehypePlugins: [
					[
						rehypePrettyCode,
						{
							theme: "github-dark",
							keepBackground: true,
						},
					],
				],
			},
		},
	});

	return <div className="prose-luxury">{content}</div>;
}
