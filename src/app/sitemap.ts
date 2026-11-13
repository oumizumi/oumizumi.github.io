import { MetadataRoute } from 'next';

export const dynamic = 'force-static';
import { posts } from '@/data/blog';

const baseUrl = 'https://oumizumi.github.io';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl,                         lastModified: new Date(), priority: 1.0 },
    { url: `${baseUrl}/about`,              lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/experiences`,        lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/blog`,               lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/people`,             lastModified: new Date(), priority: 0.6 },
    { url: `${baseUrl}/contact`,            lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/quotes`,             lastModified: new Date(), priority: 0.5 },
    { url: `${baseUrl}/now`,                lastModified: new Date(), priority: 0.7 },
  ];

  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}
