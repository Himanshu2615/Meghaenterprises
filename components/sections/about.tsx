'use client';

import React from "react";
import Link from "next/link";
import { ArrowRight, Factory, Zap, ShieldCheck, Globe, Users } from "lucide-react";
import Image from "next/image";

export function AboutSection() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Image Side - Left on desktop */}
                    <div className="relative lg:-ml-12 lg:-mt-12 lg:order-1 order-1">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-slate-50">
                            <Image
                                src="/megha-building.jpg"
                                alt="Megha Engineering & Enterprises Headquarters"
                                width={800}
                                height={600}
                                className="object-cover hover:scale-105 transition-transform duration-700 w-full"
                            />
                        </div>
                        {/* Overlay Stats Card */}
                        <div className="absolute -bottom-6 -right-6 bg-[#0056b3] p-6 rounded-2xl shadow-xl text-white hidden md:block max-w-[240px]">
                            <div className="text-3xl font-black mb-1">3000+</div>
                            <div className="text-[10px] font-bold uppercase tracking-wider opacity-80 decoration-yellow-400 decoration-2 underline-offset-4 underline">Contractors Supplied</div>
                            <p className="text-[11px] mt-2 text-blue-100/80 leading-tight italic">"Trusted nationwide since 2011."</p>
                        </div>
                    </div>

                    {/* Content Side - Right on desktop */}
                    <div className="space-y-8 lg:order-2 order-2">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-[#0056b3] text-xs font-black uppercase tracking-[0.2em] mb-6 border border-blue-100 rounded-full">
                                <Zap size={14} className="fill-[#0056b3]" /> Trusted Since 2011
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                                Megha Engineering & <br />
                                <span className="text-[#0056b3]">Enterprises</span>
                            </h2>
                        </div>

                        <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                            <p className="font-medium text-slate-900">
                                Involved in a wide variety of electrical work, reaching across every corner of India.
                            </p>
                            <p>
                                Right from domestic solar installations to large-scale manufacturing of <strong>Fabrication components, AB Switches, and Distribution Boxes</strong>. We specialize in 2-pole structure manufacturing with precision customization based on engineering drawings.
                            </p>
                            <p>
                                As a proud <strong>Solar Partner of TATA POWER</strong>, we contribute significantly to India's green energy mission. Our team handles complete <strong>EPC (Engineering, Production, Construction)</strong> projects, including in-house design and manufacturing of decorative streetlight poles from scratch.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6 pt-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-blue-50 rounded-lg text-[#0056b3]">
                                    <Globe size={24} />
                                </div>
                                <span className="font-bold text-slate-800 text-sm uppercase tracking-tighter">India-Wide Operations</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-blue-50 rounded-lg text-[#0056b3]">
                                    <ShieldCheck size={24} />
                                </div>
                                <span className="font-bold text-slate-800 text-sm uppercase tracking-tighter">500+ Dealing Products</span>
                            </div>
                        </div>

                        {/* Strategic Approach / Conclusion */}
                        <div className="pt-8 border-t border-slate-100">
                            <h4 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-tighter">Our Strategic Approach</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <p className="text-sm font-black text-[#0056b3] uppercase tracking-widest">Mission</p>
                                    <p className="text-sm text-slate-600">To power India's growth by providing innovative, custom-engineered electrical solutions that set industry benchmarks for reliability and sustainability.</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-sm font-black text-[#0056b3] uppercase tracking-widest">Vision</p>
                                    <p className="text-sm text-slate-600">To be the most trusted 360° electrical infrastructure partner, from domestic solar installations to massive industrial fabrication projects.</p>
                                </div>
                            </div>
                        </div>

                        {/* Client Logos Section - Using standard <img> to avoid Next Optimization nulls */}
                        <div className="pt-8 border-t border-slate-100">
                            <p className="text-[10px] font-black uppercase tracking-widest text-[#0056b3] mb-6">Our Valued Clients & Partners</p>
                            <div className="grid grid-cols-4 sm:grid-cols-4 gap-x-8 gap-y-6 opacity-80 transition-all duration-500 items-center">
                                <div className="flex flex-col items-center gap-1 group text-center">
                                    <div className="h-10 w-full flex items-center justify-center font-black text-[#0056b3] text-xs grayscale group-hover:grayscale-0 transition-all">TATA POWER</div>
                                    <span className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter opacity-0 group-hover:opacity-100">PARTNER</span>
                                </div>
                                <div className="flex flex-col items-center gap-1 group">
                                    <div className="h-10 w-full relative grayscale group-hover:grayscale-0 transition-all">
                                        <img src="/mseb-logo.png" alt="MSEB" className="h-8 w-full object-contain" />
                                    </div>
                                    <span className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter opacity-0 group-hover:opacity-100">MSEB</span>
                                </div>
                                <div className="flex flex-col items-center gap-1 group">
                                    <div className="h-10 w-full relative grayscale group-hover:grayscale-0 transition-all">
                                        <img src="/avaada-logo.png" alt="AWADA ENERGY" className="h-8 w-full object-contain" />
                                    </div>
                                    <span className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter opacity-0 group-hover:opacity-100">AWADA</span>
                                </div>
                                <div className="flex flex-col items-center gap-1 group">
                                    <div className="h-10 w-full relative grayscale group-hover:grayscale-0 transition-all">
                                        <img src="/bajaj-logo.png" alt="BAJAJ" className="h-8 w-full object-contain" />
                                    </div>
                                    <span className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter opacity-0 group-hover:opacity-100">BAJAJ</span>
                                </div>
                                <div className="flex flex-col items-center gap-1 group">
                                    <div className="h-10 w-full relative grayscale group-hover:grayscale-0 transition-all">
                                        <img src="/toyota-logo.png" alt="TOYOTA" className="h-8 w-full object-contain" />
                                    </div>
                                    <span className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter opacity-0 group-hover:opacity-100">TOYOTA</span>
                                </div>
                                <div className="flex flex-col items-center gap-1 group">
                                    <div className="h-10 w-full relative grayscale group-hover:grayscale-0 transition-all">
                                        <img src="/hyundai-logo.png" alt="HYUNDAI" className="h-8 w-full object-contain" />
                                    </div>
                                    <span className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter opacity-0 group-hover:opacity-100">HYUNDAI</span>
                                </div>
                                <div className="flex flex-col items-center gap-1 group text-center">
                                    <div className="h-10 w-full flex items-center justify-center font-extrabold text-[#0056b3] text-xs grayscale group-hover:grayscale-0 transition-all">CG POWER</div>
                                    <span className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter opacity-0 group-hover:opacity-100">CLIENT</span>
                                </div>
                                <div className="flex flex-col items-center gap-1 group text-center">
                                    <div className="h-10 w-full flex items-center justify-center font-extrabold text-[#0056b3] text-xs grayscale group-hover:grayscale-0 transition-all">SKODA</div>
                                    <span className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter opacity-0 group-hover:opacity-100">SKODA</span>
                                </div>
                            </div>
                            <p className="text-[10px] text-slate-400 mt-8 italic text-center">Supplied materials for key projects including electrical fabrication and solar grid integration.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}