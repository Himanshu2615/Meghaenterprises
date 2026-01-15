'use client';

import { ServicesSection } from '@/components/sections/services';
import { PageBanner } from '@/components/page-banner';
import { Settings } from 'lucide-react';

export default function ServicesPage() {
    return (
        <main className="flex flex-col min-h-screen pt-24 bg-white dark:bg-industrial-void-black text-black dark:text-white transition-colors duration-500">
            <PageBanner
                title="Our Services"
                description="Comprehensive Engineering, Production, and Construction (EPC) solutions for the power sector."
                backgroundImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
                icon={<Settings size={32} />}
            />

            <ServicesSection />

            {/* Service Promise */}
            <section className="py-32 bg-white dark:bg-black border-t border-black/5 dark:border-white/5 transition-colors duration-500">
                <div className="mx-auto max-w-[1920px] px-6 md:px-12 text-center">
                    <p className="text-industrial-blue font-mono tracking-[0.3em] uppercase text-xs mb-8">
                        {'// Quality Assurance'}
                    </p>
                    <h2 className="text-4xl md:text-6xl font-heading font-black text-black dark:text-white uppercase tracking-tighter mb-8 leading-none">
                        Integrated <span className="text-gray-300 dark:text-gray-700">Supply Chain.</span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
                        From raw material procurement to high-precision fabrication and final dispatch,
                        our services are vertically integrated to ensure maximum efficiency and total quality control.
                    </p>
                </div>
            </section>
        </main>
    );
}
