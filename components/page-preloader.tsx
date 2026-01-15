'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function PagePreloader() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Hide preloader after window load
        const handleLoad = () => {
            setTimeout(() => setLoading(false), 2000); // Minimum 2s for better UX
        };

        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
            return () => window.removeEventListener('load', handleLoad);
        }
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    <div className="relative">
                        {/* Rotating Radial Gradient Glow */}
                        <motion.div
                            className="absolute inset-[-40px] bg-[#0056b3]/10 blur-[60px] rounded-full"
                            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        />

                        {/* Rotating Outer Progress Ring */}
                        <motion.div
                            className="absolute inset-[-15px] border-t-4 border-l-4 border-[#0056b3] rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />

                        {/* Inner Rotating Gear-like Ring (for extra industrial feel) */}
                        <motion.div
                            className="absolute inset-[-8px] border-b-2 border-r-2 border-slate-200 rounded-full"
                            animate={{ rotate: -360 }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        />

                        {/* Central Logo with Breathing Effect */}
                        <motion.div
                            className="relative bg-white p-6 rounded-full shadow-2xl border-2 border-slate-50"
                            animate={{ scale: [0.95, 1.05, 0.95] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <img
                                src="/megha_logo.png"
                                alt="Megha Enterprises"
                                className="w-16 h-16 md:w-20 md:h-20 object-contain"
                            />
                        </motion.div>

                        {/* Loading Text with Tracking Animation */}
                        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                            <motion.div
                                className="whitespace-nowrap text-xs font-black uppercase tracking-[0.4em] text-[#0056b3]"
                                animate={{ opacity: [0.3, 1, 0.3] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                Initializing
                            </motion.div>
                            <div className="w-12 h-1 bg-slate-100 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-[#0056b3]"
                                    initial={{ width: "0%" }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 2, ease: "easeInOut" }}
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
