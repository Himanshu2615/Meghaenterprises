import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function BlogPage() {
    return (
        <div className="pt-32 min-h-screen bg-white">
            <div className="max-w-[1400px] mx-auto px-6">
                <h1 className="text-4xl font-bold text-[#0056b3] uppercase mb-12">Technical Insights</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {[1, 2, 3].map((post) => (
                        <article key={post} className="flex flex-col group">
                            <div className="h-64 bg-gray-100 mb-6 border-b-4 border-[#0056b3]"></div>
                            <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Technical Analysis</div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#0056b3] transition-colors">
                                Optimizing Substation Efficiency with Polymer Insulators
                            </h2>
                            <p className="text-gray-600 mb-6 line-clamp-3">
                                A deep dive into the comparative advantages of polymer vs porcelain insulators in high-pollution industrial zones.
                            </p>
                            <button className="flex items-center text-sm font-bold uppercase text-[#0056b3] gap-2">
                                Read Article <ArrowRight size={16} />
                            </button>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}
