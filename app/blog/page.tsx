import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata = {
    title: "Blog",
    description: "Deeper dives into the stuff you need to play better pickleball.",
};

export default async function BlogPage() {
    const posts = await getAllPosts();

    return (
        <div className="bg-white min-h-screen">
            <section className="border-b border-black py-20 md:py-32">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="font-archivo text-5xl md:text-8xl tracking-tight uppercase leading-[0.9]">
                        Pickleball<br />Insights.
                    </h1>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {posts.map((post) => (
                        <article key={post.slug} className="group border-2 border-black p-8 transition-all hover:-translate-y-1 hover:shadow-[12px_12px_0px_rgba(197,233,11,1)]">
                            <div className="flex items-center gap-4 mb-6">
                                <time className="font-bold text-xs uppercase tracking-widest text-zinc-400">{post.date}</time>
                                <span className="w-12 h-1 bg-brand"></span>
                            </div>
                            <h2 className="font-archivo text-3xl uppercase tracking-tighter mb-4 group-hover:text-brand transition-colors">
                                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                            </h2>
                            <p className="text-zinc-600 mb-8 leading-relaxed">
                                {post.excerpt}
                            </p>
                            <Link
                                href={`/blog/${post.slug}`}
                                className="font-archivo text-xs uppercase tracking-widest border-b-2 border-black pb-1 hover:border-brand transition-all"
                            >
                                Read Article
                            </Link>
                        </article>
                    ))}

                    {posts.length === 0 && (
                        <p className="text-zinc-500 font-bold uppercase tracking-widest">No articles found. Working on them...</p>
                    )}
                </div>
            </div>
        </div>
    );
}
