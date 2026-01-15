'use client';

import React from 'react';
import { CheckCircle2, MapPin, Zap } from 'lucide-react';

export function ProjectsList() {
    const projects = [
        { client: "MSEB (MSEDCL)", type: "EPC & Distribution Box Supply", location: "Maharashtra", status: "Completed", is3D: false },
        { client: "HYUNDAI", type: "2-Pole Structure Manufacturing", location: "Pune, MH", status: "Completed", is3D: true },
        { client: "SKODA AUTO", type: "33kV Substation EPC", location: "Aurangabad, MH", status: "Completed", is3D: true },
        { client: "TATA POWER", type: "Solar Grid Integration (Partner)", location: "Pan India", status: "Ongoing", is3D: false },
        { client: "AWADA ENERGY", type: "Substation Line Materials", location: "Gujarat", status: "Completed", is3D: false },
        { client: "CG POWER", type: "High Voltage Isolator Supply", location: "Nasik, MH", status: "Completed", is3D: false },
        { client: "BAJAJ AUTO Ltd", type: "Streetlight Decorative Poles", location: "Aurangabad, MH", status: "Completed", is3D: false },
        { client: "TOYOTA", type: "PCC Panel Installation", location: "Bangalore, KA", status: "Completed", is3D: false },
    ];

    return (
        <section className="py-20 bg-gray-50 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 md:px-8">

                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl font-bold text-[#0056b3] uppercase tracking-tight mb-2">Recent Projects</h2>
                        <div className="h-1 w-20 bg-red-500 mb-4" />
                        <p className="text-gray-600">Celebrating engineering milestones across the nation.</p>
                    </div>
                    <button className="px-6 py-3 bg-white border border-[#0056b3] text-[#0056b3] font-bold uppercase text-sm hover:bg-[#0056b3] hover:text-white transition-colors mt-4 md:mt-0">
                        View All Projects
                    </button>
                </div>

                <div className="bg-white border border-gray-200 overflow-hidden shadow-sm">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-[#0056b3] text-white uppercase text-xs font-bold tracking-wider">
                                <tr>
                                    <th className="px-6 py-4">Client Name</th>
                                    <th className="px-6 py-4">Project Type</th>
                                    <th className="px-6 py-4">Location</th>
                                    <th className="px-6 py-4">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {projects.map((proj, idx) => (
                                    <tr key={idx} className="hover:bg-blue-50/50 transition-colors">
                                        <td className="px-6 py-4 font-bold text-gray-700">
                                            <div className="flex items-center gap-3">
                                                {proj.client}
                                                {proj.is3D && (
                                                    <span className="flex items-center gap-1 px-1.5 py-0.5 bg-blue-600 text-[8px] font-black text-white uppercase rounded animate-pulse cursor-pointer hover:bg-red-600 transition-colors">
                                                        <Zap size={10} /> 3D VIEW
                                                    </span>
                                                )}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-gray-600">
                                            {proj.type}
                                        </td>
                                        <td className="px-6 py-4 text-gray-500 flex items-center gap-2">
                                            <MapPin size={14} className="text-[#0056b3]" /> {proj.location}
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-[10px] uppercase font-bold ${proj.status === 'Completed' ? 'bg-green-100 text-green-700' :
                                                proj.status === 'In Progress' ? 'bg-yellow-100 text-yellow-700' :
                                                    'bg-blue-100 text-blue-700'
                                                }`}>
                                                <CheckCircle2 size={12} /> {proj.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </section>
    );
}
