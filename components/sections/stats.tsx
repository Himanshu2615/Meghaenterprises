'use client';

import React from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
    { label: "Established Year", value: 2011, suffix: "" },
    { label: "Supply Connections", value: 3000, suffix: "+" },
    { label: "Dealing Products", value: 500, suffix: "+" },
    { label: "Nationwide Trust", value: 100, suffix: "%" },
];

function Counter({ value, suffix }: { value: number, suffix: string }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
    const display = useTransform(spring, (current) => Math.round(current));

    useEffect(() => {
        if (isInView) {
            spring.set(value);
        }
    }, [isInView, value, spring]);

    return (
        <span ref={ref} className="tabular-nums">
            <motion.span>{display}</motion.span>{suffix}
        </span>
    );
}

const certifications = [
    { name: "ISO 9001:2015", src: "/iso-logo.png" },
    { name: "CPRI Approved", src: "/cpri-logo.png" },
    { name: "NABL Accredited", src: "/nabl-logo.png" },
    { name: "NSIC Certified", src: "/nsic-logo.png" },
];

export function StatsSection() {
    return (
        <section className="bg-slate-50 py-24 border-b border-gray-200 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                <div>
                    <div className="inline-block px-4 py-1.5 bg-blue-100 text-[#0056b3] text-xs font-black uppercase tracking-widest mb-4 rounded-full">
                        Our Legacy
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight">
                        Why Choose <span className="text-[#0056b3]">Us?</span>
                    </h2>
                    <p className="text-slate-500 mt-6 text-lg leading-relaxed border-l-4 border-blue-500 pl-6">
                        Delivering reliable high voltage solutions since 2011 with a track record of safety and performance.
                        We prioritize engineering precision and long-term reliability in every project.
                    </p>
                </div>
                <div className="relative h-[300px] rounded-3xl overflow-hidden shadow-2xl group border-4 border-white">
                    <img
                        src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
                        alt="Company Statistics"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* 2. Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-white p-8 border border-gray-200 shadow-sm text-center group hover:shadow-lg transition-shadow border-t-4 border-t-transparent hover:border-t-[#0056b3]">
                            <div className="text-4xl md:text-5xl font-bold text-[#212529] mb-2 group-hover:text-[#0056b3] transition-colors">
                                <Counter value={stat.value} suffix={stat.suffix} />
                            </div>
                            <div className="text-sm font-bold text-gray-500 uppercase tracking-wider">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* 3. Certifications Strip */}
                <div className="bg-white p-8 border border-gray-200 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-xl font-bold text-[#0056b3]">Certifications & Approvals</h3>
                        <p className="text-sm text-gray-500">Meeting global standards for quality and safety.</p>
                    </div>

                    {/* Placeholder for Logos - using text blocks for now if images missing */}
                    <div className="flex gap-6 flex-wrap justify-center">
                        {certifications.map((cert, idx) => (
                            <div key={idx} className="flex flex-col items-center gap-2 group">
                                <div className="h-16 w-24 bg-gray-100 border border-gray-200 flex items-center justify-center text-xs text-gray-400 font-bold p-2 text-center group-hover:border-[#0056b3] transition-colors">
                                    [LOGO] <br /> {cert.name}
                                </div>
                                <span className="text-[10px] font-bold text-gray-500 uppercase">{cert.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
