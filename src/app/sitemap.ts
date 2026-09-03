import { MetadataRoute } from 'next';
import { articles } from '@/data/articlesList';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://brand1me.com';

  const staticPages = [
    '',
    '/about',
    '/tamweel-shakhsi',
    '/tamweel-aqari',
    '/tahseel-doyoon',
    '/sadad-tathorrat',
    '/khadamat-simah',
    '/contact',
    '/blog',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const blogPages = articles.map((article) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const cities = ['riyadh', 'jeddah', 'dammam', 'makkah', 'medina', 'khobar', 'tabuk', 'abha', 'taif', 'buraidah', 'jubail', 'najran'];
  
  const cityPages = cities.map((city) => ({
    url: `${baseUrl}/tamweel-${city}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...blogPages, ...cityPages];
}
