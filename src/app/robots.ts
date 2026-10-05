import type { MetadataRoute } from 'next';
export default function robots(): MetadataRoute.Robots { return { rules: { userAgent: '*', allow: '/' }, sitemap: 'https://regsures.vercel.app/sitemap.xml', host: 'https://regsures.vercel.app/' }; }
