'use client';

import React from "react";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import Image from "next/image";
import Link from 'next/link';

const newsItems = [
    {
        tag: "Expansion",
        title: "New 10,000 sq.ft specialized fabrication unit commissioned in Waluj.",
        date: "Jan 12, 2026",
        image: "/transformer.jpg" // Fallback placeholder
    },
    {
        tag: "Contract",
        title: "Megha Engg secures ₹5Cr order for 33kV Line material supply to MSEDCL.",
        date: "Dec 20, 2025",
        image: "/insulator.png"
    },
    {
        tag: "Product Launch",
        title: "Launch of certified 'Polymeric Insulators' for high pollution zones.",
        date: "Nov 05, 2025",
        image: "/VCB img.png"
    }
];

export function NewsSection() {
    return (
        <section className="py-20 bg-white border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 md:px-8">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                    <div className="relative h-[250px] rounded-3xl overflow-hidden shadow-xl group border-4 border-slate-50 lg:order-1 order-2">
                        <img
                            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop"
                            alt="Latest Updates"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-red-900/40 to-transparent"></div>
                    </div>
                    <div className="lg:order-2 order-1">
                        <div className="inline-block px-4 py-1.5 bg-red-100 text-red-600 text-xs font-black uppercase tracking-widest mb-4 rounded-full">
                            What's New
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight">
                            Latest <span className="text-[#0056b3]">Updates</span>
                        </h2>
                        <p className="text-slate-500 mt-6 text-lg leading-relaxed border-l-4 border-red-500 pl-6">
                            Stay updated with our latest project commissions, new product launches, and expanding manufacturing capabilities across the region.
                        </p>
                    </div>
                </div>

                <div className="flex justify-end mb-8 md:hidden">
                    <Link href="/news" className="flex items-center text-sm font-bold text-gray-500 uppercase hover:text-[#0056b3]">
                        View All News <ArrowRight size={16} className="ml-2" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {newsItems.map((item, i) => (
                        <div key={i} className="flex flex-col group cursor-pointer">
                            <div className="relative h-60 w-full overflow-hidden bg-gray-100 mb-6 border border-gray-200 group-hover:border-[#0056b3] transition-colors">
                                {/* Image Placeholder */}
                                <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold bg-gray-50">
                                    [NEWS IMAGE]
                                </div>
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    onError={(e) => e.currentTarget.style.display = 'none'}
                                />
                                <div className="absolute top-4 left-4 bg-[#0056b3] text-white text-[10px] font-bold uppercase px-3 py-1">
                                    {item.tag}
                                </div>
                            </div>

                            <div className="flex items-center text-xs text-gray-400 font-bold uppercase mb-3 gap-4">
                                <span className="flex items-center gap-1"><Calendar size={12} /> {item.date}</span>
                            </div>

                            <h3 className="text-lg font-bold text-gray-800 leading-snug group-hover:text-[#0056b3] transition-colors mb-4">
                                {item.title}
                            </h3>

                            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest group-hover:text-red-500 transition-colors">
                                Read More »
                            </span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}