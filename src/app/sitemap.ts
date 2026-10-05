import type { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap { const base = 'https://regsures.vercel.app'; return ['', '/plans', '/why-regsure', '/whatsapp', '/join-waitlist', '/privacy', '/terms'].map((path) => ({ url: `${base}${path}`, lastModified: new Date(), changeFrequency: path === '' ? 'weekly' : 'monthly', priority: path === '' ? 1 : 0.7 })); }
