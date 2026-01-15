import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Users, Trophy, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const positions = [
    {
        title: "Chief Electrical Engineer",
        type: "Senior Level",
        location: "Pune Factory",
        experience: "8-10 years",
        description: "Lead our HT/LT line component design and manufacturing quality control."
    },
    {
        title: "Production Manager",
        type: "Operations",
        location: "Faridabad Unit",
        experience: "5-7 years",
        description: "Oversee automated production lines for switchgear and electrical panels."
    },
    {
        title: "Global Trade Specialist",
        type: "Business Dev",
        location: "Delhi Corporate",
        experience: "3-5 years",
        description: "Manage global procurement and trading operations for edible oil commodities."
    }
];

export function CareersSection() {
    return (
        <section id="careers" className="py-24 bg-white overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mx-auto max-w-2xl text-center mb-20"
                >
                    <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-industrial-orange mb-4">Human Capital</h2>
                    <h3 className="text-4xl font-black text-industrial-navy uppercase italic mb-6">
                        Join the Industrial Vanguard.
                    </h3>
                    <p className="text-lg text-gray-600">
                        We are looking for precision-driven professionals to scale our fabrication,
                        trading, and manufacturing operations globally.
                    </p>
                </motion.div>

                <div className="grid gap-16 lg:grid-cols-2">
                    {/* Why Megha */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-12"
                    >
                        <h3 className="text-2xl font-black text-industrial-navy uppercase tracking-tight italic">Corporate Culture</h3>
                        <div className="space-y-8">
                            <div className="flex gap-6">
                                <div className="h-12 w-12 rounded-xl bg-industrial-navy/5 flex items-center justify-center flex-shrink-0">
                                    <GraduationCap className="h-6 w-6 text-industrial-orange" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-industrial-navy uppercase mb-2">Technical Mastery</h4>
                                    <p className="text-sm text-gray-500 leading-relaxed">Continuous exposure to high-end CNC fabrication and global trade logistics.</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="h-12 w-12 rounded-xl bg-industrial-navy/5 flex items-center justify-center flex-shrink-0">
                                    <Users className="h-6 w-6 text-industrial-orange" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-industrial-navy uppercase mb-2">Industrial Synergy</h4>
                                    <p className="text-sm text-gray-500 leading-relaxed">Work within a multi-vertical environment alongside veteran engineering leaders.</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="h-12 w-12 rounded-xl bg-industrial-navy/5 flex items-center justify-center flex-shrink-0">
                                    <Trophy className="h-6 w-6 text-industrial-orange" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-industrial-navy uppercase mb-2">Meritocratic Scale</h4>
                                    <p className="text-sm text-gray-500 leading-relaxed">Clear performance-based growth trajectories for every professional tier.</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 rounded-3xl bg-industrial-navy text-white relative overflow-hidden">
                            <div className="relative z-10">
                                <p className="text-sm font-bold uppercase tracking-widest text-industrial-orange mb-4">Talent Pool</p>
                                <p className="text-2xl font-black italic mb-6">Don&apos;t see a fit? Send us your technical CV for future openings.</p>
                                <button className="text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all">
                                    Submit Resume <ArrowRight className="h-4 w-4" />
                                </button>
                            </div>
                            <Briefcase className="absolute -right-8 -bottom-8 h-40 w-40 opacity-5" />
                        </div>
                    </motion.div>

                    {/* Jobs List */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-black text-industrial-navy uppercase tracking-tight italic mb-8">Open Operations</h3>
                        {positions.map((position, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-industrial-orange/20 transition-all"
                            >
                                <div className="flex items-start justify-between mb-6">
                                    <div>
                                        <h4 className="text-xl font-black text-industrial-navy uppercase tracking-tight group-hover:text-industrial-orange transition-colors">{position.title}</h4>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-industrial-grey mt-2">
                                            {position.type} <span className="mx-2 opacity-30">•</span> {position.location}
                                        </p>
                                    </div>
                                    <div className="h-10 w-10 rounded-full bg-industrial-orange/10 flex items-center justify-center">
                                        <Briefcase className="h-4 w-4 text-industrial-orange" />
                                    </div>
                                </div>
                                <p className="text-sm text-gray-500 mb-8 border-l-2 border-gray-100 pl-4">{position.description}</p>
                                <div className="flex items-center justify-between border-t border-gray-50 pt-6">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Exp: {position.experience}</span>
                                    <button className="text-xs font-black uppercase tracking-widest text-industrial-navy flex items-center gap-2 group-hover:text-industrial-orange transition-colors">
                                        Details <ArrowRight className="h-4 w-4" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}