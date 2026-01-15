'use client';

import { AboutSection } from '@/components/sections/about';
import { CertificationsSection } from '@/components/sections/certifications';
import { PageBanner } from '@/components/page-banner';
import { Info } from 'lucide-react';

export default function AboutPage() {
    return (
        <main className="flex flex-col min-h-screen pt-24 bg-white text-gray-900">
            <PageBanner
                title="Our Story"
                description="Innovation, quality, and commitment to the electrical industry since 2011."
                backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
                icon={<Info size={32} />}
            />

            <AboutSection />

            {/* Corporate Profile & Values */}
            <section className="py-24 bg-white border-t border-gray-100 relative overflow-hidden">
                <div className="max-w-[1920px] mx-auto px-6 md:px-12">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-32 items-center">
                        <div>
                            <p className="text-[#0056b3] font-mono tracking-[0.3em] uppercase text-xs mb-8 flex items-center gap-3">
                                <span className="w-8 h-[1px] bg-[#0056b3]"></span>
                                Corporate Vision
                            </p>
                            <h2 className="text-4xl md:text-6xl font-heading font-black text-gray-900 tracking-tighter leading-none mb-8">
                                About <br /> Megha <span className="text-gray-400">Engineering.</span>
                            </h2>
                            <p className="text-xl md:text-2xl font-light text-gray-600 leading-relaxed border-l-2 border-[#0056b3] pl-8">
                                Founded with a vision to revolutionize the electrical industry, Megha Engineering has grown to become a leading manufacturer and supplier of electrical components across India.
                            </p>
                        </div>
                        <div className="relative h-[400px] w-full border border-gray-100 bg-gray-50 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10" />
                            {/* Placeholder pattern/image */}
                            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] mix-blend-multiply" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-[200px] font-black text-gray-200 select-none tracking-tighter leading-none">EST.04</span>
                            </div>
                        </div>
                    </div>

                    {/* Core Pillars Removed */}
                </div>
            </section>
            <CertificationsSection />
        </main>
    );
}
