'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface PageBannerProps {
    title: string;
    description?: string;
    backgroundImage?: string;
    breadcrumb?: { name: string; href: string }[];
    icon?: React.ReactNode;
}

export function PageBanner({ title, description, backgroundImage, breadcrumb, icon }: PageBannerProps) {
    const defaultBg = "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop";

    return (
        <div className="relative h-[250px] md:h-[300px] w-full overflow-hidden flex items-center">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url(${backgroundImage || defaultBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                    {icon && <div className="text-white bg-[#0056b3] p-3 rounded-xl shadow-lg border border-white/20">{icon}</div>}
                    <div>
                        <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
                            {title}
                        </h1>
                        {description && (
                            <p className="text-blue-100/80 mt-2 max-w-lg font-medium">
                                {description}
                            </p>
                        )}
                    </div>
                </div>

                {/* Breadcrumb style matching user screenshot */}
                <div className="bg-[#2ecc71] text-white px-6 py-3 rounded-md flex items-center gap-2 text-sm font-bold shadow-lg self-start md:self-auto translate-y-8 md:translate-y-12">
                    <span className="opacity-80">You are here:</span>
                    <Link href="/" className="hover:underline">Home</Link>
                    <ChevronRight size={14} />
                    <span className="text-white">{title}</span>
                </div>
            </div>
        </div>
    );
}
