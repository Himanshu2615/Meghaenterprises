'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function SectionPreloader() {
    return (
        <div className="w-full h-[300px] flex items-center justify-center bg-slate-50/50 rounded-3xl border-2 border-dashed border-slate-200">
            <div className="relative">
                {/* Rotating Outer Ring */}
                <motion.div
                    className="absolute inset-[-10px] border-t-2 border-b-2 border-[#0056b3] rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />

                {/* Rotating Logo Container */}
                <motion.div
                    className="relative bg-white p-4 rounded-full shadow-lg"
                    animate={{ rotate: [0, 5, 0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <img
                        src="/megha_logo.png"
                        alt="Loading..."
                        className="w-12 h-12 object-contain"
                    />
                </motion.div>

                {/* Loading Text */}
                <motion.div
                    className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-black uppercase tracking-[0.2em] text-[#0056b3]"
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    Loading Experience
                </motion.div>
            </div>
        </div>
    );
}
