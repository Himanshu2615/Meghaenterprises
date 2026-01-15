'use client';

import React from "react";
import { Zap, ShieldCheck, Factory, Settings, PenTool, Battery, ArrowRight, Construction } from "lucide-react";
import Link from 'next/link';

const services = [
    {
        title: "Solar EPC",
        icon: Zap,
        desc: "Turnkey solar plant installation from site survey to commissioning."
    },
    {
        title: "Substation Maintenance",
        icon: Settings,
        desc: "Preventive maintenance for 11kV/33kV substations."
    },
    {
        title: "HT/LT Line Erection",
        icon: Construction,
        desc: "Overhead transmission line construction with certified safety standards."
    },
    {
        title: "Panel Manufacturing",
        icon: Factory,
        desc: "Custom APFC, control, and distribution panel fabrication."
    },
    {
        title: "Structural Fabrication",
        icon: PenTool,
        desc: "Heavy duty gantries and galvanised steel structures."
    },
    {
        title: "Energy Audits",
        icon: Battery,
        desc: "Detailed power analysis to optimize industrial consumption."
    }
];

export function ServicesSection() {
    return (
        <section id="services" className="py-24 bg-white overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 px-6 md:px-12">
                <div className="relative h-[300px] rounded-3xl overflow-hidden shadow-2xl group border-4 border-slate-100 lg:order-1 order-2">
                    <img
                        src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070&auto=format&fit=crop"
                        alt="Engineering Services"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0056b3]/60 to-transparent"></div>
                </div>
                <div className="lg:order-2 order-1">
                    <div className="inline-block px-4 py-1.5 bg-blue-100 text-[#0056b3] text-xs font-black uppercase tracking-widest mb-4 rounded-full">
                        What We Do
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight">
                        Our <span className="text-[#0056b3]">Services</span>
                    </h2>
                    <p className="text-slate-500 mt-6 text-lg leading-relaxed border-l-4 border-blue-500 pl-6">
                        Comprehensive solutions across fabrication, substation maintenance, and HT/LT line erection.
                        We deliver end-to-end engineering excellence for the power sector.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12">
                {/* The original content below the header starts here */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white p-8 border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#0056b3] transition-all group">
                            <div className="h-14 w-14 bg-blue-50 text-[#0056b3] flex items-center justify-center mb-6 group-hover:bg-[#0056b3] group-hover:text-white transition-colors">
                                <service.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#0056b3] transition-colors">{service.title}</h3>
                            <p className="text-sm text-gray-600 leading-relaxed mb-6">
                                {service.desc}
                            </p>
                            <Link href="/services" className="inline-flex items-center text-xs font-bold text-gray-400 uppercase tracking-widest group-hover:text-[#0056b3] transition-colors">
                                Read More <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link href="/services" className="inline-block bg-[#0056b3] text-white font-bold uppercase tracking-wider py-4 px-10 hover:bg-blue-700 transition-colors">
                        View All Services
                    </Link>
                </div>

            </div>
        </section>
    );
}