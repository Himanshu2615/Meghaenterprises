import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.meghaenterprises.in'; // Assuming this is the domain, will use a placeholder if unsure, or localhost for dev. I'll use a likely production URL or placeholder. Given the email info@meghenterpises.in, I'll use https://www.meghenterpises.in

    const routes = [
        '',
        '/about',
        '/products',
        '/products/isolators',
        '/services',
        '/clients',
        '/gallery',
        '/blog',
        '/video',
        '/enquiry',
        '/contact',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    return routes;
}
