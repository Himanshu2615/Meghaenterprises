'use client';

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, Facebook, Linkedin, Twitter, Menu, X, Search, MessageCircle } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const NAV_ITEMS = [
    { name: 'Home', href: '/' },
    { name: 'Our Story', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Blog', href: '/blog' },
    { name: 'Video', href: '/video' },
    { name: 'Enquiry', href: '/enquiry' },
    { name: 'Contact', href: '/contact' },
];

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            {/* === TOP BAR (Contact Info) === */}
            <div className="bg-[#0056b3] text-white py-2 px-4 md:px-12 text-xs md:text-sm font-semibold flex flex-col md:flex-row justify-between items-center z-[100] relative border-b border-blue-800">
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                        <Phone size={14} className="text-blue-200" />
                        <span>+91 93251 47803/05/07</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Mail size={14} className="text-blue-200" />
                        <span>info@meghaenterprises.in</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <MessageCircle size={14} className="text-blue-200" />
                        <a href="https://wa.me/919325147803" target="_blank" className="text-white hover:text-blue-100 transition-colors">WhatsApp Chat</a>
                    </div>
                </div>
                <div className="flex items-center gap-4 mt-2 md:mt-0">
                    <div className="flex gap-3">
                        <Link href="#" className="hover:text-blue-200 transaction-colors"><Facebook size={14} /></Link>
                        <Link href="#" className="hover:text-blue-200 transaction-colors"><Linkedin size={14} /></Link>
                        <Link href="#" className="hover:text-blue-200 transaction-colors"><Twitter size={14} /></Link>
                    </div>
                </div>
            </div>

            {/* === MAIN NAVIGATION (Sticky) === */}
            <header className="sticky top-0 w-full z-[99] bg-white border-b-4 border-gray-200 shadow-lg">
                <div className="max-w-[1920px] mx-auto px-4 md:px-12 h-20 md:h-24 flex items-center justify-between">

                    {/* LOGO */}
                    <Link href="/" className="flex-shrink-0 flex items-center gap-3">
                        <div className="relative h-12 w-12 md:h-16 md:w-16">
                            <Image
                                src="/megha_logo.png"
                                alt="Megha Enterprises"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        <div className="flex flex-col justify-center leading-none">
                            <span className="text-xl md:text-2xl font-black text-[#0056b3] uppercase tracking-tighter">
                                Megha
                            </span>
                            <span className="text-[10px] md:text-sm font-bold text-gray-800 uppercase tracking-[0.2em] ml-0.5">
                                Enterprises
                            </span>
                        </div>
                    </Link>

                    {/* DESKTOP MENU (Dense Industrial Guide) */}
                    <nav className="hidden xl:flex items-center gap-1">
                        {NAV_ITEMS.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="px-3 py-2 text-[13px] font-bold text-gray-700 uppercase hover:text-[#0056b3] hover:bg-gray-50 transition-all border-b-2 border-transparent hover:border-[#0056b3]"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* MOBILE TOGGLE / SEARCH */}
                    <div className="flex items-center gap-4 xl:hidden">
                        <button className="text-gray-600 hover:text-[#0056b3]">
                            <Search size={24} />
                        </button>
                        <button
                            className="p-2 border border-gray-300 rounded bg-gray-50 text-[#0056b3]"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                    {/* DESKTOP SEARCH ICON (If needed distinct from mobile) */}
                    <div className="hidden xl:flex items-center gap-4 pl-4 border-l border-gray-200">
                        <button className="text-gray-500 hover:text-[#0056b3] transition-colors">
                            <Search size={20} />
                        </button>
                    </div>
                </div>
            </header>

            {/* === MOBILE MENU DRAWER === */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-[98] bg-black/50 xl:hidden" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="absolute top-[145px] left-0 w-full bg-white shadow-xl border-b-4 border-[#0056b3] flex flex-col" onClick={e => e.stopPropagation()}>
                        {NAV_ITEMS.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="px-6 py-3 border-b border-gray-100 text-sm font-bold text-gray-700 uppercase hover:bg-gray-50 hover:text-[#0056b3]"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}
