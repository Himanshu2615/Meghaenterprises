import React from 'react';

export default function ClientsPage() {
    return (
        <div className="pt-32 min-h-screen bg-white">
            <div className="max-w-[1400px] mx-auto px-6">
                <h1 className="text-4xl font-bold text-[#0056b3] uppercase mb-12">Our Elite Clientele</h1>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {['MSEDCL', 'Adani Power', 'Tata Projects', 'L&T Construction', 'Siemens', 'ABB', 'Crompton', 'Bajaj Electricals'].map((client, i) => (
                        <div key={i} className="h-32 border border-gray-200 flex items-center justify-center p-4 hover:border-[#0056b3] transition-colors grayscale hover:grayscale-0">
                            <span className="font-bold text-xl text-gray-400">{client}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
