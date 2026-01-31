import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export async function generateStaticParams() {
    const posts = await getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="bg-white min-h-screen pb-32">
            <header className="border-b border-black py-20 md:py-32">
                <div className="container mx-auto px-4 text-center">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 font-bold text-xs uppercase tracking-widest text-zinc-400 hover:text-black transition-colors mb-12"
                    >
                        <ChevronLeft size={16} />
                        Back to Insights
                    </Link>
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <time className="font-bold text-xs uppercase tracking-widest text-zinc-500">{post.date}</time>
                        <span className="w-12 h-1 bg-brand"></span>
                        <span className="font-bold text-xs uppercase tracking-widest text-zinc-500">{post.author}</span>
                    </div>
                    <h1 className="font-archivo text-5xl md:text-8xl tracking-tight uppercase leading-[0.9] max-w-5xl mx-auto">
                        {post.title}
                    </h1>
                </div>
            </header>

            <div className="container mx-auto px-4 py-20">
                <div className="max-w-3xl prose prose-zinc prose-xl mx-auto">
                    <MDXRemote source={post.content} />
                </div>
            </div>
        </article>
    );
}
