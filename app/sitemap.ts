import { MetadataRoute } from "next";
import { BASE_URL } from "@/lib/constants";
import { GEAR_ITEMS } from "@/lib/gear";

export default function sitemap(): MetadataRoute.Sitemap {
    const products = GEAR_ITEMS.map((product) => ({
        url: `${BASE_URL}/gear/${product.id}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.8,
    }));

    const routes = ["", "/blog"].map((route) => ({
        url: `${BASE_URL}${route}`,
        lastModified: new Date(),
        changeFrequency: "daily" as const,
        priority: 1.0,
    }));

    return [...routes, ...products];
}
