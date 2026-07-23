import { MetadataRoute } from 'next';
import { products } from '@/lib/products';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.meghaenterprises.in';

    const staticRoutes = [
        '',
        '/about',
        '/products',
        '/services',
        '/clients',
        '/gallery',
        '/blog',
        '/video',
        '/enquiry',
        '/contact',
        '/careers',
        '/projects',
        '/products/category/solar',
        '/products/category/ht-line',
    ];

    const staticEntries = staticRoutes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? ('daily' as const) : ('weekly' as const),
        priority: route === '' ? 1.0 : route === '/products' || route === '/services' ? 0.9 : 0.8,
    }));

    const productEntries = products.map((product) => ({
        url: `${baseUrl}/products/details/${product.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    return [...staticEntries, ...productEntries];
}

