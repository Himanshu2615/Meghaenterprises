'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function ControlSection() {
    return (
        <section className="relative h-screen w-full bg-white dark:bg-industrial-void-black overflow-hidden flex items-center justify-center transition-colors duration-500">
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] dark:opacity-5 mix-blend-overlay pointer-events-none" />

            {/* Central Visual */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="relative z-10 w-full h-full flex items-center justify-center"
            >
                {/* Hand with Cube Video */}
                <div className="relative w-full h-[80vh] flex items-center justify-center">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-contain"
                    >
                        <source src="/hand-cube.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                {/* Left Text */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 1.2 }}
                    className="absolute left-[5%] md:left-[10%] top-1/2 -translate-y-1/2 z-20"
                >
                    <h2 className="font-[family-name:var(--font-instrument)] italic text-5xl md:text-8xl text-black/90 dark:text-white/90 tracking-[-0.05em] leading-none drop-shadow-2xl">
                        Total control.
                    </h2>
                </motion.div>

                {/* Right Text */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8, duration: 1.2 }}
                    className="absolute right-[5%] md:right-[10%] top-1/2 -translate-y-1/2 z-20"
                >
                    <h2 className="font-[family-name:var(--font-instrument)] italic text-5xl md:text-8xl text-black/90 dark:text-white/90 tracking-[-0.05em] leading-none drop-shadow-2xl">
                        At your fingertips.
                    </h2>
                </motion.div>
            </motion.div>

            {/* Subtle Overlay Glow */}
            <div className="absolute inset-0 bg-blue-500/5 mix-blend-color z-0 pointer-events-none" />
        </section>
    );
}
