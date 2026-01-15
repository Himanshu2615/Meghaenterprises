'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { PageBanner } from '@/components/page-banner';
import { FileText } from 'lucide-react';

export default function EnquiryPage() {
    return (
        <div className="pt-24 min-h-screen bg-white">
            <PageBanner
                title="Product Enquiry"
                description="Looking for specific technical ratings or large-scale supplies? Send us your requirements."
                backgroundImage="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=2070&auto=format&fit=crop"
                icon={<FileText size={32} />}
            />
            <div className="max-w-[800px] mx-auto px-6 py-24">

                <form className="space-y-6 border border-gray-200 p-8 md:p-12 shadow-xl bg-white">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase text-gray-500">Company Name</label>
                            <Input className="rounded-none h-12 border-gray-300" placeholder="Your Company" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase text-gray-500">Contact Person</label>
                            <Input className="rounded-none h-12 border-gray-300" placeholder="Full Name" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase text-gray-500">Email Address</label>
                        <Input type="email" className="rounded-none h-12 border-gray-300" placeholder="email@company.com" />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase text-gray-500">Technical Specifications</label>
                        <Textarea className="rounded-none min-h-[150px] border-gray-300" placeholder="Please list products, ratings, and quantities..." />
                    </div>

                    <Button className="w-full h-14 bg-[#0056b3] hover:bg-blue-700 text-white font-bold uppercase tracking-wider text-lg rounded-none">
                        Submit Enquiry
                    </Button>
                </form>
            </div>
        </div>
    );
}
