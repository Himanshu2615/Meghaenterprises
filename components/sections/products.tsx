'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Factory, Zap, Battery, Box, Cpu, Sun, Layers, Share2, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import { supabase } from '@/lib/supabase';

const CATEGORIES = [
    { id: 'fabrication', label: 'Fabrication', icon: Factory },
    { id: 'cable', label: 'Cable & Conductor', icon: Share2 },
    { id: 'pole', label: 'Pole Section', icon: Layers },
    { id: 'dist_box', label: 'Distribution Box', icon: Box },
    { id: 'pcc_panel', label: 'PCC Panel', icon: Cpu },
    { id: 'vcb', label: 'VCB Section', icon: Zap },
    { id: 'solar', label: 'Solar Section', icon: Sun },
    { id: 'safety', label: 'Earthing & Safety', icon: ShieldCheck },
    { id: 'line_material', label: 'Line Material', icon: Battery },
];

const FALLBACK_PRODUCTS = {
    fabrication: [
        { id: 1, title: '2-Pole Structure', image: '/AB Switch main.png', desc: 'Customized 2-pole structures manufactured as per client drawings.' },
        { id: 2, title: 'Decorative Streetlight Poles', image: '/Street light.png', desc: 'In-house designed decorative poles engineered from scratch.' },
    ],
    vcb: [
        { id: 3, title: 'Vacuum Circuit Breaker (VCB)', image: '/VCB img.png', desc: 'High-performance VCBs for reliable indoor/outdoor switching.' },
    ],
    solar: [
        { id: 4, title: 'Domestic Solar Installation', image: '/Solarpannels.png', desc: 'Complete rooftop solar solutions for households under PM-Surya Ghar.' },
        { id: 5, title: 'Galvanized Solar Structures', image: '/Solarpannels.png', desc: 'Heavy-duty mounting structures for industrial solar farms.' },
    ],
    pcc_panel: [
        { id: 6, title: 'PCC Panel', image: '/PCC panels.png', desc: 'Power Control Center panels with advanced automation features.' },
    ],
    dist_box: [
        { id: 7, title: 'Distribution Box', image: '/PCC panels.png', desc: 'Robust distribution boxes for HT/LT line management. Custom designs available.' },
    ],
    safety: [
        { id: 8, title: 'Earthing Equipment', image: '/insulator.png', desc: 'High-quality copper and GI earthing electrodes and related accessories.' },
        { id: 9, title: 'Industrial Safety Kit', image: '/insulator.png', desc: 'Premium electrical safety gear including gloves, helmets, and boots.' },
    ],
    pole: [
        { id: 10, title: 'Decorative Streetlight Pole', image: '/Street light.png', desc: 'In-house produced decorative poles, designed and manufactured from scratch (EPC).' },
    ]
};

export function ProductsSection() {
    const [activeTab, setActiveTab] = useState('fabrication');
    const [dbProducts, setDbProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const { data, error } = await supabase
                    .from('products')
                    .select('*')
                    .eq('category', activeTab);

                if (data && data.length > 0) {
                    setDbProducts(data);
                } else {
                    setDbProducts(FALLBACK_PRODUCTS[activeTab as keyof typeof FALLBACK_PRODUCTS] || []);
                }
            } catch (err) {
                console.error('Error fetching from Supabase:', err);
                setDbProducts(FALLBACK_PRODUCTS[activeTab as keyof typeof FALLBACK_PRODUCTS] || []);
            } finally {
                setLoading(false);
            }
        }
        fetchProducts();
    }, [activeTab]);

    return (
        <section id="products" className="py-24 bg-slate-50 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                <div>
                    <div className="inline-block px-4 py-1.5 bg-blue-100 text-[#0056b3] text-xs font-black uppercase tracking-widest mb-4 rounded-full">
                        Precision Manufactured
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight">
                        Our Product <span className="text-[#0056b3]">Portfolio</span>
                    </h2>
                    <p className="text-slate-500 mt-6 text-lg leading-relaxed border-l-4 border-blue-500 pl-6">
                        Dealing with over 500+ specialized electrical products including safety and earthing equipment.
                        Our inventory spans from high-voltage switchgear to domestic solar solutions.
                    </p>
                </div>
                <div className="relative h-[300px] rounded-3xl overflow-hidden shadow-2xl group border-4 border-white">
                    <img
                        src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop"
                        alt="Industrial Products"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* Category Navigation */}
                <div className="flex overflow-x-auto pb-4 gap-4 no-scrollbar mb-12">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveTab(cat.id)}
                            className={`flex items-center gap-2 px-6 py-4 rounded-2xl font-bold uppercase text-xs tracking-wider whitespace-nowrap transition-all border-2 ${activeTab === cat.id
                                ? 'bg-[#0056b3] border-[#0056b3] text-white shadow-xl shadow-blue-200 scale-105'
                                : 'bg-white border-slate-100 text-slate-500 hover:border-blue-200 hover:text-[#0056b3]'
                                }`}
                        >
                            <cat.icon size={18} />
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
                    {dbProducts.length > 0 ? (
                        dbProducts.map((product) => (
                            <div key={product.id} className="bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500 group">
                                <div className="aspect-[4/3] relative bg-slate-50 p-8 flex items-center justify-center overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="object-contain max-h-full group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase text-[#0056b3]">
                                        Ref: {product.id}
                                    </div>
                                </div>
                                <div className="p-8">
                                    <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-[#0056b3] transition-colors">
                                        {product.title}
                                    </h3>
                                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                                        {product.desc}
                                    </p>
                                    <Link href={`/products/${product.id}`} className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#0056b3] group-hover:gap-4 transition-all">
                                        Technical Details <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full flex flex-col items-center justify-center py-20 text-slate-400">
                            <Layers size={64} className="mb-4 opacity-20" />
                            <p className="font-bold uppercase tracking-widest text-sm">More products being added soon</p>
                            <p className="text-xs mt-2 italic">Connect with us for custom requirements</p>
                        </div>
                    )
                    }
                </div>

                {/* Bottom CTA */}
                <div className="mt-20 bg-[#0056b3] rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl">
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="text-center md:text-left">
                            <h3 className="text-3xl font-black mb-2">Need a Custom Drawing?</h3>
                            <p className="text-blue-100/80">We manufacture structures based on your specific customization drawings.</p>
                        </div>
                        <Link href="/contact">
                            <button className="bg-white text-[#0056b3] px-10 py-5 rounded-2xl font-black uppercase tracking-tighter hover:bg-slate-100 transition-colors shadow-lg">
                                Send Inquiry Now
                            </button>
                        </Link>
                    </div>
                    {/* Abstract background element */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
                </div>

            </div>
        </section>
    );
}