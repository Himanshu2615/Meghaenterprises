'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Construction } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-[80vh] flex items-center justify-center px-6">
            <div className="max-w-md w-full text-center space-y-8">
                {/* Visual Icon */}
                <motion.div
                    className="relative inline-block"
                    initial={{ rotate: -10, opacity: 0, scale: 0.5 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="bg-blue-50 p-8 rounded-[2.5rem] border-2 border-dashed border-[#0056b3]/20">
                        <Construction size={80} className="text-[#0056b3]" />
                    </div>
                    <motion.div
                        className="absolute -top-4 -right-4 bg-red-500 text-white text-xs font-black px-4 py-2 rounded-full shadow-lg"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        404 ERROR
                    </motion.div>
                </motion.div>

                {/* Text Content */}
                <div className="space-y-4">
                    <h1 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">
                        Page <span className="text-[#0056b3]">Under Maintenance</span> or Missing
                    </h1>
                    <p className="text-slate-500 leading-relaxed font-semibold">
                        We couldn't find the circuit you were looking for. The link might be broken or the page has moved to a new station.
                    </p>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                    <Link href="/" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#0056b3] text-white px-8 py-4 rounded-2xl font-black uppercase tracking-tighter hover:bg-blue-700 transition-all shadow-xl shadow-blue-200">
                        <Home size={18} /> Back to Home
                    </Link>
                    <button
                        onClick={() => window.history.back()}
                        className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white border-2 border-slate-100 text-slate-600 px-8 py-4 rounded-2xl font-black uppercase tracking-tighter hover:bg-slate-50 transition-all"
                    >
                        <ArrowLeft size={18} /> Go Back
                    </button>
                </div>

                {/* Footer Brand */}
                <div className="pt-12 border-t border-slate-100">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400 font-bold">
                        Megha Engineering & Enterprises
                    </p>
                </div>
            </div>
        </div>
    );
}
