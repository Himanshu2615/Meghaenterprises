'use client';

import { motion } from 'framer-motion';
import { Factory, PenTool, ShieldCheck, Wrench, Settings, Search, HardHat, RefreshCw } from 'lucide-react';
import React from 'react';

const processes = [
    {
        id: '01',
        title: 'Engineering Design',
        desc: 'Advanced CAD/CAM modeling and load simulation. We customize infrastructure solutions to meet specific site topography and voltage requirements.',
        icon: PenTool
    },
    {
        id: '02',
        title: 'Precision Manufacturing',
        desc: 'In-house CNC fabrication using high-grade steel and aluminum. Automated tolerance checks ensure structural integrity within ±0.5mm.',
        icon: Factory
    },
    {
        id: '03',
        title: 'Rigorous Testing',
        desc: 'Comprehensive quality assurance including high-voltage injection, thermal stress analysis, and conductivity tests per ISO 9001:2015.',
        icon: Search
    },
    {
        id: '04',
        title: 'Site Installation',
        desc: 'Expert deployment by certified safety teams. Seamless grid integration and on-site assembly for minimal downtime.',
        icon: HardHat
    },
    {
        id: '05',
        title: 'Maintenance & Support',
        desc: 'Lifecycle management including predictive maintenance, rapid-response repairs, and 24/7 technical support for critical infrastructure.',
        icon: RefreshCw
    }
];

export function ManufacturingSection() {
    return (
        <section className="bg-white dark:bg-industrial-void-black py-32 px-6 md:px-12 relative overflow-hidden text-black dark:text-white border-t border-black/5 dark:border-white/5 transition-colors duration-500">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            <div className="max-w-[1920px] mx-auto z-10 relative">

                {/* Header */}
                <div className="mb-32 flex flex-col md:flex-row justify-between items-end border-b border-black/10 dark:border-white/10 pb-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-industrial-blue font-mono tracking-[0.3em] uppercase text-xs mb-6 flex items-center gap-3">
                            <span className="w-8 h-[1px] bg-industrial-blue"></span>
                            QA / QC Protocols
                        </p>
                        <h2 className="text-5xl md:text-8xl font-heading font-black tracking-tighter leading-[0.9] text-black dark:text-white">
                            PRECISION <br />
                            <span className="text-gray-300 dark:text-industrial-steel-light/30">MANUFACTURING.</span>
                        </h2>
                    </motion.div>
                    <p className="text-gray-600 dark:text-gray-400 font-mono text-xs md:text-sm max-w-md mt-6 md:mt-0 leading-relaxed uppercase tracking-wide">
                        {'// Adhering to ISO 9001:2015 Standards.'} <br />
                        {'// Executing complex geometries at industrial scale.'}
                    </p>
                </div>

                {/* Process Timeline */}
                <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-8">
                    {/* Connecting Line (Desktop) - Base Track */}
                    <div className="absolute top-[3rem] left-0 w-full h-[1px] bg-black/10 dark:bg-white/10 hidden lg:block" />

                    {/* Connecting Line (Desktop) - Animated Progress */}
                    <motion.div
                        initial={{ scaleX: 0, originX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 4, ease: "linear" }}
                        className="absolute top-[3rem] left-0 w-full h-[2px] bg-gradient-to-r from-industrial-blue via-[#00D188] to-industrial-blue hidden lg:block shadow-[0_0_15px_rgba(41,151,255,0.8)] z-[5]"
                    />

                    {processes.map((step, i) => (
                        <motion.div
                            key={step.id}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.8 } } // Sync delay with line duration
                            }}
                            className="relative group pt-16"
                        >
                            {/* Node Point */}
                            <motion.div
                                variants={{
                                    hidden: { scale: 0, borderColor: "rgba(0,0,0,0.1)" },
                                    visible: { scale: 1, borderColor: "rgba(41,151,255,1)", transition: { duration: 0.3, delay: i * 0.8 } }
                                }}
                                className="absolute top-9 left-0 lg:left-1/2 lg:-translate-x-1/2 w-6 h-6 bg-white dark:bg-industrial-void-black border rounded-full z-20 flex items-center justify-center shadow-[0_0_15px_rgba(41,151,255,0.4)]"
                            >
                                <motion.div
                                    variants={{
                                        hidden: { scale: 0, backgroundColor: "#333" },
                                        visible: { scale: 1, backgroundColor: "#2997FF", transition: { duration: 0.3, delay: i * 0.8 + 0.1 } }
                                    }}
                                    className="w-2 h-2 rounded-full"
                                />
                            </motion.div>

                            {/* Dotted Line (Mobile) - Animated height */}
                            <motion.div
                                initial={{ height: 0 }}
                                whileInView={{ height: "100%" }}
                                transition={{ duration: 1, delay: i * 0.2 }}
                                className="absolute top-12 left-3 w-[1px] border-l border-dashed border-industrial-blue/50 lg:hidden"
                            />

                            <div className="pl-12 lg:pl-0 lg:text-center relative z-10">
                                {/* Large Number - Animated Reveal */}
                                <motion.span
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.8 } }
                                    }}
                                    className="text-6xl font-black text-industrial-blue absolute -top-4 right-0 lg:left-1/2 lg:-translate-x-1/2 lg:-top-24 select-none font-heading -z-10"
                                >
                                    {step.id}
                                </motion.span>

                                <div className="mb-6 flex justify-start lg:justify-center">
                                    <div className="p-4 bg-black/[0.03] dark:bg-white/5 border border-black/10 dark:border-white/10 group-hover:border-industrial-blue/50 group-hover:bg-industrial-blue/10 transition-all duration-300 rounded-2xl">
                                        <step.icon size={32} className="text-gray-600 dark:text-gray-400 group-hover:text-industrial-blue transition-colors" />
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold uppercase tracking-wide mb-4 text-black dark:text-white group-hover:text-industrial-blue transition-colors">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-500 leading-relaxed group-hover:text-black dark:group-hover:text-gray-400 transition-colors">
                                    {step.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Accreditation Bar */}
                <div className="mt-32 border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/5 rounded-full p-2 flex flex-wrap md:flex-nowrap items-center justify-between gap-4">
                    <div className="px-8 py-4 rounded-full bg-white dark:bg-industrial-void-black border border-black/5 dark:border-white/5 flex items-center gap-4 min-w-fit shadow-sm">
                        <ShieldCheck className="text-industrial-green" />
                        <span className="text-sm font-bold uppercase tracking-widest text-black dark:text-white">Safety First Protocol</span>
                    </div>
                    <div className="hidden md:flex h-px w-full bg-black/10 dark:bg-white/10" />
                    <div className="flex gap-8 px-8 items-center text-gray-500 font-mono text-xs overflow-x-auto">
                        <span className="whitespace-nowrap hover:text-black dark:hover:text-white transition-colors cursor-pointer">ISO 9001:2015</span>
                        <span className="whitespace-nowrap hover:text-black dark:hover:text-white transition-colors cursor-pointer">IS 8623</span>
                        <span className="whitespace-nowrap hover:text-black dark:hover:text-white transition-colors cursor-pointer">IEC 61439</span>
                        <span className="whitespace-nowrap hover:text-black dark:hover:text-white transition-colors cursor-pointer">CPRI Type Tested</span>
                    </div>
                </div>

            </div>
        </section>
    );
}
