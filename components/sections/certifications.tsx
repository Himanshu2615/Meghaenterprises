'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Award, CheckCircle2, FileCheck } from 'lucide-react';

const CERTIFICATIONS = [
    {
        title: "ISO 9001:2015",
        subtitle: "Quality Management System Certification",
        validity: "2025",
        icon: ShieldCheck,
        id: "ISO-9001"
    },
    {
        title: "Government Authorized",
        subtitle: "Licensed Electrical Contractor",
        validity: "2024",
        icon: Award,
        id: "GOVT-AUTH"
    },
    {
        title: "BIS Certification",
        subtitle: "Bureau of Indian Standards Compliance",
        validity: "2024",
        icon: CheckCircle2,
        id: "BIS-STD"
    },
    {
        title: "MNRE Approved",
        subtitle: "Ministry of New and Renewable Energy Recognition",
        validity: "2024",
        icon: FileCheck,
        id: "MNRE-APP"
    }
];

export function CertificationsSection() {
    return (
        <section className="py-24 bg-gray-50 border-t border-gray-200 relative overflow-hidden">
            <div className="mx-auto max-w-[1920px] px-6 md:px-12 relative z-10">

                <div className="mb-16 text-center">
                    <p className="text-[#0056b3] font-mono tracking-[0.3em] uppercase text-xs mb-4 font-bold">
                        {'// Compliance & Standards'}
                    </p>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tight leading-none mb-6">
                        Authorized <span className="text-gray-400">& Certified.</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        We maintain the highest standards of quality safety and compliance, verified by national authorities.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {CERTIFICATIONS.map((cert, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white border border-gray-200 hover:border-[#0056b3] hover:shadow-lg p-8 group transition-all duration-300 relative overflow-hidden flex flex-col justify-between min-h-[260px]"
                        >
                            {/* Hover Effect */}
                            <div className="absolute inset-x-0 top-0 h-1 bg-[#0056b3] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                            {/* Icon & ID */}
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-3 bg-blue-50 text-[#0056b3] rounded-sm group-hover:bg-[#0056b3] group-hover:text-white transition-colors">
                                    <cert.icon size={28} strokeWidth={2} />
                                </div>
                                <span className="font-mono text-[10px] text-gray-400 group-hover:text-[#0056b3] transition-colors uppercase tracking-widest font-bold">
                                    {cert.id}
                                </span>
                            </div>

                            {/* Content */}
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight group-hover:text-[#0056b3] transition-colors uppercase">
                                    {cert.title}
                                </h3>
                                <p className="text-sm text-gray-500 font-medium mb-8 leading-snug">
                                    {cert.subtitle}
                                </p>
                            </div>

                            {/* Footer Removed */}
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}