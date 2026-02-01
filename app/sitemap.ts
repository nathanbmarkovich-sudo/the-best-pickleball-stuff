import { MetadataRoute } from "next";
import { BASE_URL } from "@/lib/constants";
import { getAllPosts } from "@/lib/blog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const posts = await getAllPosts();

    const blogPosts = posts.map((post) => ({
        url: `${BASE_URL}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: "monthly" as const,
        priority: 0.7,
    }));

    const staticRoutes = ["", "/blog"].map((route) => ({
        url: `${BASE_URL}${route}`,
        lastModified: new Date(),
        changeFrequency: "daily" as const,
        priority: 1.0,
    }));

    return [...staticRoutes, ...blogPosts];
}
