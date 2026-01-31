import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

export interface Post {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    author: string;
    content: string;
}

export async function getAllPosts(): Promise<Post[]> {
    if (!fs.existsSync(BLOG_DIR)) return [];

    const files = fs.readdirSync(BLOG_DIR);
    const posts = files
        .filter((file) => file.endsWith(".mdx"))
        .map((file) => {
            const filePath = path.join(BLOG_DIR, file);
            const fileContent = fs.readFileSync(filePath, "utf-8");
            const { data, content } = matter(fileContent);

            return {
                slug: file.replace(".mdx", ""),
                title: data.title,
                excerpt: data.excerpt,
                date: data.date,
                author: data.author,
                content: content,
            };
        });

    return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
    const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
    if (!fs.existsSync(filePath)) return null;

    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    return {
        slug,
        title: data.title,
        excerpt: data.excerpt,
        date: data.date,
        author: data.author,
        content,
    };
}
