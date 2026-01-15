import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const categories = {
    solar: {
        title: 'Solar Solutions',
        description: 'Complete range of solar products and installation services',
        image: '/photo display.jpg',
        products: [
            {
                name: 'Solar PCU PWM Series - Elegant Series',
                description: 'True CV PWM with LCD Display and Advanced DSP Technology',
                image: '/inverterimg1.png',
                specs: [
                    'Range Available: 1kVA - 5kVA',
                    'LCD Display',
                    'Advanced DSP Technology',
                    'AI Charge Sharing',
                    '5 Stage Battery Charging'
                ]
            },
            {
                name: 'Solar PCU MPPT Series - Flare',
                description: 'True MPPT with Configurable User Settings',
                image: '/Hybrid inverter.png',
                specs: [
                    'Range Available: 1kVA - 150kVA',
                    'Configurable User Settings',
                    'Advanced DSP Technology',
                    'AI Charge Sharing',
                    'Remote Monitoring IoT'
                ]
            },
            {
                name: 'Solar Panels - Mono Half Cut',
                description: 'High-efficiency solar panels with advanced technology',
                image: '/Solarpannels.png',
                specs: [
                    'Range Available: 445Wp to 590Wp',
                    'Upto 21.2% Efficiency',
                    'Round Ribbon for Better Efficiency',
                    'Minimizes Micro Cracks',
                    'M10 Mono PERC Cells'
                ]
            }
        ]
    },
    'ht-line': {
        title: 'HT Line Components',
        description: 'High-quality transmission line equipment and accessories',
        image: 'https://images.unsplash.com/photo-1522163723043-478ef79a5bb4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        products: [
            {
                name: 'Transmission Line Hardware',
                description: 'Complete range of transmission line hardware',
                image: '/download.jpg',
                specs: [
                    'Tension Sets',
                    'Suspension Sets',
                    'Vibration Dampers',
                    'Spacer Dampers',
                    'Corona Rings'
                ]
            },
            {
                name: 'Transmission Line Hardware',
                description: 'Complete range of transmission line hardware',
                image: '/download.jpg',
                specs: [
                    'Tension Sets',
                    'Suspension Sets',
                    'Vibration Dampers',
                    'Spacer Dampers',
                    'Corona Rings'
                ]
            },
            {
                name: 'Transmission Line Hardware',
                description: 'Complete range of transmission line hardware',
                image: '/download.jpg',
                specs: [
                    'Tension Sets',
                    'Suspension Sets',
                    'Vibration Dampers',
                    'Spacer Dampers',
                    'Corona Rings'
                ]
            },
            {
                name: 'Transmission Line Hardware',
                description: 'Complete range of transmission line hardware',
                image: '/download.jpg',
                specs: [
                    'Tension Sets',
                    'Suspension Sets',
                    'Vibration Dampers',
                    'Spacer Dampers',
                    'Corona Rings'
                ]
            }

        ]
    }

};

export function generateStaticParams() {
    return Object.keys(categories).map((category) => ({
        category,
    }));
}

export default async function ProductPage({ params }: { params: Promise<{ category: string }> }) {
    const { category } = await params;
    const categoryData = categories[category as keyof typeof categories];

    if (!categoryData) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white dark:bg-industrial-void-black text-black dark:text-white transition-colors duration-500">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Category not found</h1>
                    <Link href="/#products">
                        <Button className="bg-black dark:bg-white text-white dark:text-black hover:bg-industrial-blue dark:hover:bg-industrial-blue hover:text-white">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Products
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen py-24 bg-white dark:bg-industrial-void-black text-black dark:text-white transition-colors duration-500 relative">
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] dark:opacity-5 mix-blend-overlay pointer-events-none" />
            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                <div className="mb-8">
                    <Link href="/#products">
                        <Button variant="ghost" className="text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Products
                        </Button>
                    </Link>
                </div>

                <div className="relative h-[300px] mb-12 rounded-lg overflow-hidden border border-black/5 dark:border-white/5">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={categoryData.image}
                        alt={categoryData.title}
                        className="w-full h-full object-cover grayscale opacity-80 dark:opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-black via-white/50 dark:via-black/50 to-transparent flex items-center justify-center">
                        <div className="text-center text-black dark:text-white">
                            <h1 className="text-4xl md:text-6xl font-heading font-black mb-4 uppercase tracking-tighter">{categoryData.title}</h1>
                            <p className="text-lg max-w-2xl mx-auto font-light text-gray-600 dark:text-gray-400">{categoryData.description}</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categoryData.products.map((product, index) => (
                        <div
                            key={index}
                            className="bg-black/[0.03] dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-[24px] overflow-hidden hover:border-industrial-blue/50 transition-all duration-300 group"
                        >
                            <div className="h-[250px] overflow-hidden">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            </div>
                            <div className="p-8">
                                <h3 className="text-xl font-bold mb-4 text-black dark:text-white group-hover:text-industrial-blue transition-colors uppercase tracking-tight">{product.name}</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-6 font-light leading-relaxed">{product.description}</p>
                                <ul className="space-y-3">
                                    {product.specs.map((spec, specIndex) => (
                                        <li key={specIndex} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                            <span className="w-1.5 h-1.5 bg-industrial-blue rounded-full mr-3 flex-shrink-0" />
                                            {spec}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}