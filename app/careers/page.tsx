'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    Briefcase,
    MapPin,
    Clock,
    ArrowRight,
    ShieldCheck,
    TrendingUp,
    Globe,
    Users
} from "lucide-react";

// --- Types ---
type Job = {
    id: number;
    title: string;
    department: string;
    location: string;
    type: string;
    posted: string;
};

// --- Mock Data (Replace with API) ---
const JOBS: Job[] = [
    { id: 1, title: "Senior Structural Engineer", department: "Engineering", location: "Pune, MH", type: "Full-Time", posted: "2 days ago" },
    { id: 2, title: "Supply Chain Manager", department: "Operations", location: "Delhi, DL", type: "Full-Time", posted: "1 week ago" },
    { id: 3, title: "CNC Machine Operator", department: "Manufacturing", location: "Faridabad, HR", type: "Shift-Based", posted: "3 days ago" },
    { id: 4, title: "International Sales Exec", department: "Trading", location: "Remote / Hybrid", type: "Full-Time", posted: "Just now" },
];

const PERKS = [
    { icon: ShieldCheck, title: "Safety First Culture", desc: "ISO 45001 certified sites with zero-compromise safety protocols." },
    { icon: TrendingUp, title: "Career Velocity", desc: "Structured mentorship programs to move you from Junior to Lead." },
    { icon: Globe, title: "Global Exposure", desc: "Work on projects spanning across the Middle East, Europe, and Asia." },
    { icon: Users, title: "Family Stability", desc: "Comprehensive health insurance for you and your dependents." },
];

export default function CareerPage() {
    const [filter, setFilter] = useState("All");

    return (
        <div className="bg-white dark:bg-industrial-void-black min-h-screen pb-20 font-sans text-black dark:text-white transition-colors duration-500">

            {/* === HERO SECTION === */}
            <section className="relative min-h-[80vh] py-32 flex items-center justify-center overflow-hidden bg-white dark:bg-industrial-void-black border-b border-black/5 dark:border-white/5 transition-colors duration-500">
                {/* Abstract Industrial Background */}
                <div className="absolute inset-0 opacity-[0.05] dark:opacity-20 mix-blend-overlay">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-industrial-void-black via-transparent to-white dark:to-industrial-void-black" />

                <div className="relative z-10 text-center max-w-4xl px-6">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-industrial-blue font-mono tracking-[0.2em] uppercase text-sm md:text-base mb-4 block"
                    >
                        {'// Join Megha Enterprises'}
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-8xl font-heading font-black text-black dark:text-white mb-6 uppercase leading-none tracking-tighter"
                    >
                        ENGINEER YOUR <br /> <span className="text-gray-300 dark:text-gray-600">LEGACY.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed border-l-2 border-industrial-blue/30 pl-6"
                    >
                        We don&apos;t just build structures; we build careers. Join a team responsible for India&apos;s most complex industrial challenges.
                    </motion.p>
                </div>
            </section>

            {/* === STATS BANNER === */}
            <div className="relative z-20 -mt-24 px-6 max-w-[1920px] mx-auto transition-all duration-500">
                <div className="bg-white dark:bg-industrial-void-black rounded-[2rem] border border-black/5 dark:border-white/10 shadow-2xl shadow-black/5 dark:shadow-black/50 p-12 lg:p-16 relative overflow-hidden">
                    {/* Interior Glow */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-industrial-blue/5 blur-[100px] -mr-32 -mt-32 pointer-events-none" />

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center relative z-10">
                        {[
                            { label: "Years of Excellence", val: "20+" },
                            { label: "Projects Delivered", val: "500+" },
                            { label: "Team Strength", val: "120+" },
                            { label: "Global Locations", val: "3" },
                        ].map((stat, i) => (
                            <div key={i} className="space-y-2 group">
                                <div className="text-5xl md:text-6xl font-heading font-black text-black dark:text-white tracking-tighter group-hover:text-industrial-blue transition-colors duration-300">{stat.val}</div>
                                <div className="text-gray-500 text-[10px] font-mono uppercase font-bold tracking-widest leading-loose border-t border-black/5 dark:border-white/5 pt-4 inline-block">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* === WHY JOIN US (BENTO GRID) === */}
            <section className="py-32 max-w-[1920px] mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 border-b border-black/5 dark:border-white/5 pb-12 transition-colors duration-500">
                    <div className="space-y-4">
                        <h2 className="text-xs font-mono font-bold tracking-[0.3em] uppercase text-industrial-blue">Culture Matrix</h2>
                        <h3 className="text-4xl md:text-6xl font-heading font-black text-black dark:text-white uppercase tracking-tighter leading-none">Why the Best <br />Choose Us.</h3>
                        <p className="text-gray-600 dark:text-gray-500 max-w-md font-light">We provide the stability of an established giant with the agility of a modern startup.</p>
                    </div>
                    <button className="hidden md:flex items-center gap-3 text-black dark:text-white font-bold uppercase tracking-widest text-xs border-b border-industrial-blue pb-2 hover:gap-6 transition-all duration-300">
                        View Employee Stories <ArrowRight size={16} className="text-industrial-blue" />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {PERKS.map((perk, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -5 }}
                            className="bg-black/[0.02] dark:bg-white/5 p-8 rounded-none border border-black/5 dark:border-white/5 hover:border-industrial-blue/50 hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-500 group"
                        >
                            <div className="w-12 h-12 bg-white dark:bg-black border border-black/10 dark:border-white/10 rounded-full flex items-center justify-center mb-8 group-hover:border-industrial-blue transition-colors duration-300">
                                <perk.icon size={20} className="text-gray-600 dark:text-gray-400 group-hover:text-industrial-blue transition-colors" />
                            </div>
                            <h3 className="font-bold text-xl mb-4 uppercase tracking-tight text-black dark:text-white">{perk.title}</h3>
                            <p className="text-gray-600 dark:text-gray-500 text-sm leading-relaxed font-light">{perk.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* === OPEN POSITIONS === */}
            <section className="bg-white dark:bg-black py-32 border-t border-black/5 dark:border-white/10 relative overflow-hidden transition-colors duration-500">
                {/* Background Texture */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

                <div className="max-w-[1920px] mx-auto px-6 md:px-12 relative z-10">
                    <div className="text-center mb-16 space-y-4">
                        <span className="text-industrial-blue font-mono font-bold tracking-[0.3em] text-[10px] uppercase">Career Portal</span>
                        <h2 className="text-5xl md:text-7xl font-heading font-black text-black dark:text-white uppercase tracking-tighter">Open Positions</h2>
                    </div>

                    {/* Filters */}
                    <div className="flex flex-wrap justify-center gap-4 mb-24">
                        {["All", "Engineering", "Operations", "Trading", "Manufacturing"].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-8 py-3 rounded-none text-[10px] font-bold uppercase tracking-widest transition-all duration-300 border ${filter === cat
                                    ? "bg-industrial-blue text-white border-industrial-blue"
                                    : "bg-transparent text-gray-500 border-black/10 dark:border-white/10 hover:text-black dark:hover:text-white hover:border-black/30 dark:hover:border-white/30"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Job List */}
                    <div className="space-y-4 max-w-5xl mx-auto">
                        {JOBS.filter(j => filter === "All" || j.department === filter).map((job) => (
                            <motion.a
                                key={job.id}
                                href="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAO__qoxdG1UOFVDWEdIV1owVUhPUjBDVDQ5U0pGNlZWNS4u"
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="group flex flex-col md:flex-row items-center justify-between bg-black/[0.03] dark:bg-white/5 p-8 border border-black/5 dark:border-white/5 hover:border-industrial-blue hover:bg-black/[0.05] dark:hover:bg-white/10 transition-all duration-300 cursor-pointer"
                            >
                                <div className="flex-1 w-full space-y-4">
                                    <div className="flex flex-wrap items-center gap-4">
                                        <h3 className="font-heading font-black text-2xl text-black dark:text-white uppercase tracking-tight">{job.title}</h3>
                                        <span className="bg-industrial-blue/10 text-industrial-blue text-[10px] px-3 py-1 rounded-none font-mono font-bold uppercase tracking-widest border border-industrial-blue/20">
                                            {job.department}
                                        </span>
                                    </div>
                                    <div className="flex flex-wrap items-center gap-8 text-[10px] font-mono font-bold uppercase tracking-widest text-gray-500">
                                        <span className="flex items-center gap-2"><MapPin size={12} className="text-black dark:text-white" /> {job.location}</span>
                                        <span className="flex items-center gap-2"><Briefcase size={12} className="text-black dark:text-white" /> {job.type}</span>
                                        <span className="flex items-center gap-2"><Clock size={12} className="text-black dark:text-white" /> {job.posted}</span>
                                    </div>
                                </div>

                                <div className="mt-8 md:mt-0 w-full md:w-auto flex justify-end">
                                    <span className="group-hover:text-industrial-blue text-black dark:text-white px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 flex items-center gap-2">
                                        Apply Now <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                                    </span>
                                </div>
                            </motion.a>
                        ))}
                    </div>

                    <div className="mt-32 p-12 bg-black/[0.03] dark:bg-white/5 border border-black/10 dark:border-white/10 text-center md:flex justify-between items-center text-black dark:text-white relative overflow-hidden max-w-6xl mx-auto transition-colors duration-500">
                        {/* Background Glow */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-industrial-blue/10 blur-[100px] pointer-events-none" />

                        <div className="text-left mb-8 md:mb-0 relative z-10 p-6">
                            <h4 className="font-heading font-black text-3xl uppercase tracking-tighter mb-2">Don&apos;t see a fit?</h4>
                            <p className="text-gray-600 dark:text-gray-400 font-light max-w-md">We are always looking for exceptional talent to join our command. Send your dossier.</p>
                        </div>
                        <a
                            href="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAO__qoxdG1UOFVDWEdIV1owVUhPUjBDVDQ5U0pGNlZWNS4u"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-black dark:bg-white text-white dark:text-black px-10 py-5 font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-industrial-blue hover:text-white transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.1)] relative z-10 border border-black/20 dark:border-white/20"
                        >
                            INITIATE APPLICATION
                        </a>
                    </div>

                </div>
            </section>
        </div>
    );
}
