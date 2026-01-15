'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';


const projects = [
    {
        title: "PCC Panels",
        subtitle: "Power Infrastructure",
        desc: "Engineered for 33KV. Built for a lifetime.",
        image: "/pcc panles main.png",
        stats: "33KV Rated"
    },
    {
        title: "Heavy Fabrication",
        subtitle: "Structural Engineering",
        desc: "Precision welding. Massive scale.",
        image: "/VCB img.png",
        stats: "5000+ Tonnes"
    }
];

export function ProjectsSection() {
    return (
        <section className="bg-white dark:bg-industrial-void-black py-40 overflow-hidden relative transition-colors duration-500">
            <div className="max-w-[1920px] mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32 flex flex-col md:flex-row justify-between items-end border-b border-white/10 pb-12"
                >
                    <div>
                        <p className="text-industrial-blue font-mono font-bold tracking-widest uppercase text-xs mb-4">{'// Proven Scale'}</p>
                        <h2 className="text-4xl md:text-8xl font-heading font-black tracking-tighter text-black dark:text-white leading-[0.9] md:leading-[0.9]">
                            ENGINEERED <br />
                            <span className="text-gray-300 dark:text-gray-700">FOR THE WORLD.</span>
                        </h2>
                    </div>
                </motion.div>

                <div className="space-y-40">
                    {projects.map((project, index) => (
                        <ProjectSlide key={index} project={project} index={index} />
                    ))}
                </div>

                {/* 3D Model Visualizer Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-40 pt-40 border-t border-white/10"
                >
                    <div className="flex flex-col lg:flex-row gap-16 items-start">
                        <div className="lg:w-1/3 lg:sticky lg:top-32">
                            <p className="text-industrial-blue font-mono font-bold tracking-widest uppercase text-xs mb-6">{'// Digital Twin v1.2'}</p>
                            <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tighter text-black dark:text-white leading-none mb-8">
                                3D INTERACTIVE <br />
                                <span className="text-gray-300 dark:text-gray-700">SPECIFICATIONS.</span>
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed mb-8 border-l-2 border-industrial-blue/30 pl-6">
                                Live WebGL reconstruction of our industrial core infrastructure.
                                Interact with detailed components of solar-integrated systems and high-voltage substations.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-lg">
                                    <p className="text-[10px] text-gray-400 dark:text-gray-500 uppercase mb-1">Rendering</p>
                                    <p className="text-black dark:text-white font-mono text-sm">Real-time WebGL</p>
                                </div>
                                <div className="p-4 bg-white/5 border border-white/5 rounded-lg">
                                    <p className="text-[10px] text-gray-500 uppercase mb-1">Status</p>
                                    <p className="text-industrial-blue font-mono text-sm flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-industrial-blue rounded-full animate-pulse" />
                                        LIVE_SYNC
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-2/3 w-full space-y-24">
                            {/* Module 01: Solar Distribution */}
                            <div className="relative group">
                                <p className="text-[10px] font-mono text-gray-600 uppercase tracking-widest mb-4">Module_01: Solar_Distribution_Infrastructure</p>
                                <div className="absolute -inset-1 bg-gradient-to-r from-industrial-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-700 rounded-2xl blur-xl" />
                                <div className="relative aspect-[16/10] min-h-[400px] lg:min-h-[600px] rounded-2xl overflow-hidden bg-black border border-white/10 shadow-2xl">
                                    <iframe
                                        title="Mini solarUnderground transformerRing main"
                                        className="w-full h-full"
                                        src="https://sketchfab.com/models/9d8902f1f500498683d9feeeb0875b99/embed"
                                        allow="autoplay; fullscreen; xr-spatial-tracking"
                                        xr-spatial-tracking="true"
                                        execution-while-out-of-viewport="true"
                                        execution-while-not-rendered="true"
                                        web-share="true"
                                    />
                                </div>
                            </div>

                            {/* Module 02: Electrical Substation */}
                            <div className="relative group">
                                <p className="text-[10px] font-mono text-gray-600 uppercase tracking-widest mb-4">Module_02: Electrical_Substation_Infrastructure</p>
                                <div className="absolute -inset-1 bg-gradient-to-r from-industrial-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-700 rounded-2xl blur-xl" />
                                <div className="relative aspect-[16/10] min-h-[400px] lg:min-h-[600px] rounded-2xl overflow-hidden bg-black border border-white/10 shadow-2xl">
                                    <iframe
                                        title="Electrical Substation 3d Model"
                                        className="w-full h-full"
                                        src="https://sketchfab.com/models/1e9432d8baac4e169d93b78039cdcba3/embed"
                                        allow="autoplay; fullscreen; xr-spatial-tracking"
                                        xr-spatial-tracking="true"
                                        execution-while-out-of-viewport="true"
                                        execution-while-not-rendered="true"
                                        web-share="true"
                                    />
                                </div>
                            </div>

                            {/* Module 03: 2-Pole Structure Fabrication */}
                            <div className="relative group">
                                <p className="text-[10px] font-mono text-gray-600 uppercase tracking-widest mb-4">Module_03: 2-Pole_Structure_Transmission_Infrastructure</p>
                                <div className="absolute -inset-1 bg-gradient-to-r from-industrial-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-700 rounded-2xl blur-xl" />
                                <div className="relative aspect-[16/10] min-h-[400px] lg:min-h-[600px] rounded-2xl overflow-hidden bg-black border border-white/10 shadow-2xl">
                                    <iframe
                                        title="Utility Pole 3D Model"
                                        className="w-full h-full"
                                        src="https://sketchfab.com/models/9f5c71d6438a4c889a74659b9a69623d/embed"
                                        allow="autoplay; fullscreen; xr-spatial-tracking"
                                        xr-spatial-tracking="true"
                                        execution-while-out-of-viewport="true"
                                        execution-while-not-rendered="true"
                                        web-share="true"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function ProjectSlide({ project, index }: { project: any, index: number }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
    const textOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);

    return (
        <div ref={ref} className="relative flex flex-col md:flex-row items-center justify-between gap-12 md:gap-32 group border-l border-white/5 pl-4 md:pl-12">
            <motion.div
                style={{ opacity: textOpacity }}
                className={`md:w-5/12 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}
            >
                <div className="flex items-center gap-4 mb-8">
                    <span className="text-industrial-blue font-mono text-sm">0{index + 1}</span>
                    <div className="h-[1px] w-12 bg-industrial-blue/50"></div>
                    <span className="text-gray-500 font-bold tracking-[0.2em] uppercase text-xs">
                        {project.subtitle}
                    </span>
                </div>

                <h3 className="text-4xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] md:leading-[0.85] mb-6 md:mb-8 group-hover:text-industrial-blue transition-colors duration-500">
                    {project.title}
                </h3>
                <p className="text-xl md:text-2xl font-light text-gray-400 leading-relaxed max-w-lg mb-12">
                    {project.desc}
                </p>

                <div className="flex items-center gap-12 border-t border-black/10 dark:border-white/10 pt-8">
                    <div>
                        <p className="text-xs uppercase text-gray-400 dark:text-gray-500 mb-1">Capacity</p>
                        <p className="text-black dark:text-white font-mono text-xl">{project.stats}</p>
                    </div>
                    <button className="h-12 w-12 rounded-full border border-black/20 dark:border-white/20 flex items-center justify-center hover:bg-industrial-blue hover:border-industrial-blue transition-all">
                        <ArrowRight className="text-black dark:text-white group-hover:text-white transition-colors" size={20} />
                    </button>
                </div>
            </motion.div>

            <div className={`md:w-7/12 relative aspect-[16/9] overflow-hidden bg-industrial-steel-dark border border-white/5 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                <motion.div style={{ y }} className="absolute -inset-[20%]">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover opacity-60 dark:opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                    />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-industrial-void-black via-transparent to-transparent opacity-80" />

                {/* Tech Overlay */}
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-4 py-2 border border-white/10">
                    <span className="text-[10px] font-mono text-industrial-blue">IMG_RAW_{index}0{index + 4}</span>
                </div>
            </div>
        </div>
    );
}