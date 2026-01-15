'use client';

import { ProjectsSection } from '@/components/sections/projects';
import { motion } from 'framer-motion';

export default function ProjectsPage() {
    return (
        <main className="flex flex-col min-h-screen pt-24 bg-white dark:bg-industrial-void-black text-black dark:text-white transition-colors duration-500">
            {/* Page Header */}
            <section className="bg-white dark:bg-industrial-void-black py-32 relative overflow-hidden border-b border-black/5 dark:border-white/5 transition-colors duration-500">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-industrial-blue/50 to-transparent opacity-50" />
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] dark:opacity-5 mix-blend-overlay" />

                <div className="mx-auto max-w-[1920px] px-6 md:px-12 relative z-10 text-center">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-industrial-blue font-mono tracking-[0.3em] uppercase text-xs mb-8 inline-block"
                    >
                        {'// Global Portfolio'}
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-9xl font-heading font-black text-black dark:text-white uppercase tracking-tighter leading-none mb-8"
                    >
                        Project <span className="text-gray-300 dark:text-gray-700">Dossier.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="mt-6 text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light leading-relaxed border-l-2 border-industrial-blue/30 pl-6 text-left md:text-center md:border-l-0 md:pl-0"
                    >
                        A comprehensive display of our industrial engineering milestones and fabrication excellence.
                    </motion.p>
                </div>
            </section>

            <ProjectsSection />

            {/* Future Projects Brief */}
            <section className="py-32 bg-white dark:bg-industrial-void-black border-t border-black/5 dark:border-white/5 relative overflow-hidden transition-colors duration-500">
                <div className="mx-auto max-w-[1920px] px-6 md:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
                        <div className="space-y-8">
                            <p className="text-industrial-blue font-mono tracking-[0.3em] uppercase text-xs">
                                {'// R&D Pipeline'}
                            </p>
                            <h2 className="text-4xl md:text-6xl font-heading font-black text-black dark:text-white uppercase tracking-tighter leading-none">
                                Future <br />Infrastructure
                            </h2>
                            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-light">
                                We are currently expanding our reach into sustainable energy infrastructure and
                                high-capacity HT line solutions. Our upcoming projects focus on integrating
                                smart grid technologies with traditional engineering.
                            </p>
                        </div>
                        <div className="bg-black/5 dark:bg-white/5 p-12 md:p-16 border border-black/5 dark:border-white/5 relative group hover:bg-black/[0.02] dark:hover:bg-white/10 transition-colors duration-500 overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-industrial-blue/20 blur-[50px] -mr-16 -mt-16 pointer-events-none group-hover:bg-industrial-blue/30 transition-colors" />
                            <h3 className="text-2xl font-bold mb-6 text-black dark:text-white font-heading uppercase tracking-tight">Next Generation Fabrication</h3>
                            <p className="text-gray-400 font-mono text-xs leading-relaxed uppercase tracking-widest mb-8">
                                Status: Commissioning Phase
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 font-light leading-relaxed">
                                Our new facility in WALUJ MIDC is being equipped with advanced robotic
                                welding and CNC plasma cutting systems to handle the next decade&apos;s
                                most complex industrial demands.
                            </p>
                            <div className="mt-8 pt-8 border-t border-black/10 dark:border-white/10 flex justify-between items-center">
                                <span className="text-industrial-blue font-mono text-xs">EST. COMPLETION Q4 2026</span>
                                <div className="w-2 h-2 bg-industrial-blue rounded-full animate-pulse" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
