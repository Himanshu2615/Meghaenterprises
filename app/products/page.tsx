'use client';

import { ProductsSection } from '@/components/sections/products';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { products } from '@/lib/products';
import { ProductCard } from '@/components/ProductCard';
import { PageBanner } from '@/components/page-banner';
import { Box } from 'lucide-react';

export default function ProductsPage() {
    return (
        <main className="flex flex-col min-h-screen pt-24 bg-white text-black transition-colors duration-500">
            <PageBanner
                title="Our Products"
                description="High-quality electrical equipment and industrial fabrication solutions."
                backgroundImage="https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=2070&auto=format&fit=crop"
                icon={<Box size={32} />}
            />

            <ProductsSection />

            {/* Product Grid Section */}
            <section className="py-24 bg-white relative border-t border-gray-200">
                <div className="mx-auto max-w-[1920px] px-6 md:px-12 relative z-10">
                    <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <p className="text-[#0056b3] font-bold tracking-[0.2em] uppercase text-sm mb-2">
                                Complete Category List
                            </p>
                            <h2 className="text-4xl md:text-5xl font-heading font-black text-black uppercase tracking-tight">
                                High Voltage Equipment
                            </h2>
                        </div>
                        <p className="text-gray-600 max-w-lg text-base border-l-4 border-[#0056b3] pl-4">
                            Browse our selection of electrical equipment engineered for industrial reliability.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product) => (
                            <ProductCard
                                key={product.id}
                                id={product.id}
                                image={product.image}
                                title={product.title}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA for Custom Requirements */}
            <section className="py-24 bg-[#0056b3] text-white relative overflow-hidden">
                <div className="mx-auto max-w-[1920px] px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight leading-none mb-4">Custom Fabrication Services</h2>
                        <p className="text-xl opacity-90 font-light max-w-xl">
                            We specialize in custom steel and aluminum fabrication for unique project specifications.
                        </p>
                    </div>
                    <Link href="/#contact">
                        <button className="bg-white text-[#0056b3] px-10 py-5 font-bold uppercase tracking-widest text-sm hover:bg-gray-100 transition-all shadow-lg">
                            Request Quote
                        </button>
                    </Link>
                </div>
            </section>
        </main>
    );
}
