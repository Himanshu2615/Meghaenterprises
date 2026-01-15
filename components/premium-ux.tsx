'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

export function PremiumUX() {
    return (
        <>
            <BackToTop />
        </>
    );
}



function BackToTop() {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const toggleVisible = () => setVisible(window.scrollY > 500);
        window.addEventListener('scroll', toggleVisible);
        return () => window.removeEventListener('scroll', toggleVisible);
    }, []);

    return (
        <AnimatePresence>
            {visible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="fixed bottom-10 right-10 h-14 w-14 rounded-full bg-industrial-navy text-white border border-white/10 shadow-2xl z-50 flex items-center justify-center hover:bg-industrial-orange transition-colors"
                >
                    <ChevronUp className="h-6 w-6" />
                </motion.button>
            )}
        </AnimatePresence>
    );
}
