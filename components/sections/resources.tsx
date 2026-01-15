'use client';

import { motion } from 'framer-motion';
import { BookOpen, Calculator, FileText, HelpCircle, TrendingUp, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const RESOURCES = [
    {
        title: "Technical Guides",
        desc: "Comprehensive installation and maintenance guides for our products",
        icon: BookOpen,
        href: "#"
    },
    {
        title: "Energy Calculator",
        desc: "Calculate potential energy savings and ROI for solar installations",
        icon: Calculator,
        href: "#"
    },
    {
        title: "Product Manuals",
        desc: "Detailed product specifications and user manuals",
        icon: FileText,
        href: "#"
    },
    {
        title: "FAQs",
        desc: "Common questions about our products and services",
        icon: HelpCircle,
        href: "#"
    },
    {
        title: "Expense Tracker",
        desc: "Tracks Expense of the goods sold",
        icon: TrendingUp,
        href: "#"
    }
];

export function ResourcesSection() {
    return (
        <section className="py-32 bg-white dark:bg-industrial-void-black relative overflow-hidden text-left transition-colors duration-500">
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] dark:opacity-5 mix-blend-overlay pointer-events-none" />
            <div className="absolute inset-x-0 top-0 h-px bg-black/5 dark:bg-white/5" />

            <div className="mx-auto max-w-[1920px] px-6 md:px-12 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div>
                        <p className="text-industrial-blue font-mono tracking-[0.3em] uppercase text-xs mb-4">
                            {'// Knowledge Base'}
                        </p>
                        <h2 className="text-4xl md:text-6xl font-heading font-black text-black dark:text-white uppercase tracking-tighter leading-none">
                            Resources <span className="text-gray-300 dark:text-gray-800">& Tools.</span>
                        </h2>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 max-w-md font-light border-l border-black/10 dark:border-white/10 pl-6 h-max">
                        Access our comprehensive collection of guides, calculators, and support materials.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {RESOURCES.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-black/[0.03] dark:bg-white/5 border border-black/5 dark:border-white/5 hover:border-industrial-blue/50 p-8 group transition-all duration-300 relative overflow-hidden flex flex-col min-h-[300px] hover:bg-black/[0.04] dark:hover:bg-white/10"
                        >
                            <div className="mb-8 p-3 bg-black/[0.05] dark:bg-white/5 w-max rounded-lg group-hover:bg-industrial-blue/20 group-hover:text-industrial-blue text-gray-400 transition-colors">
                                <item.icon size={28} strokeWidth={1.5} />
                            </div>

                            <h3 className="text-xl font-bold text-black dark:text-white mb-4 group-hover:text-industrial-blue transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-500 font-light leading-relaxed mb-8 flex-grow">
                                {item.desc}
                            </p>

                            <Link href={item.href} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black dark:text-white group-hover:gap-4 transition-all">
                                Access Resource <ArrowRight size={14} className="text-industrial-blue" />
                            </Link>

                            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-10 transition-opacity">
                                <item.icon size={100} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}