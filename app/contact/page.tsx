import type { Metadata } from 'next';
import { ContactSection } from '@/components/sections/contact';
import { PageBanner } from '@/components/page-banner';
import { MapPin } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Contact Us | Megha Enterprises - Electrical & Solar Manufacturer',
    description: 'Contact Megha Enterprises (Megha Electricals) in MIDC Waluj, Chhatrapati Sambhajinagar (Aurangabad). Phone: +91 93251 47803, Email: info@meghaenterprises.in. Get free quotes for electrical switchgear and solar EPC.',
    keywords: ['Contact Megha Enterprises', 'Megha Electricals Address', 'MIDC Waluj Electrical Manufacturer', 'Aurangabad Electrical Contact', 'Megha Engineering Phone Number'],
    alternates: {
        canonical: 'https://www.meghaenterprises.in/contact',
    },
};

export default function ContactPage() {
    return (
        <main className="flex flex-col min-h-screen pt-24 bg-white dark:bg-industrial-void-black text-black dark:text-white transition-colors duration-500">
            <PageBanner
                title="Contact Us"
                description="Get in touch with our expert team for inquiries, quotations, or technical support."
                backgroundImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074&auto=format&fit=crop"
                icon={<MapPin size={32} />}
            />

            <ContactSection />

            {/* Support Grid */}
            <section className="py-24 bg-white border-t border-gray-200">
                <div className="mx-auto max-w-[1920px] px-6 md:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="p-8 border border-gray-200 hover:border-[#0056b3] hover:shadow-lg transition-all group bg-gray-50 text-center">
                            <h4 className="font-bold text-[#0056b3] uppercase tracking-wider text-sm mb-4">Sales Department</h4>
                            <p className="font-bold text-gray-800 text-lg">info@meghaenterprises.in</p>
                            <p className="text-sm text-gray-500 mt-2">For new orders & quotations</p>
                        </div>
                        <div className="p-8 border border-gray-200 hover:border-[#0056b3] hover:shadow-lg transition-all group bg-gray-50 text-center">
                            <h4 className="font-bold text-[#0056b3] uppercase tracking-wider text-sm mb-4">Technical Support</h4>
                            <p className="font-bold text-gray-800 text-lg">info@meghaenterprises.in</p>
                            <p className="text-sm text-gray-500 mt-2">For specifications & drawings</p>
                        </div>
                        <div className="p-8 border border-gray-200 hover:border-[#0056b3] hover:shadow-lg transition-all group bg-gray-50 text-center">
                            <h4 className="font-bold text-[#0056b3] uppercase tracking-wider text-sm mb-4">Customer Care</h4>
                            <p className="font-bold text-gray-800 text-lg">+91 93251 47803/05/07</p>
                            <p className="text-sm text-gray-500 mt-2">Mon-Sat, 9:00 AM - 6:00 PM</p>
                        </div>
                        <div className="p-8 border border-gray-200 hover:border-[#0056b3] hover:shadow-lg transition-all group bg-gray-50 text-center">
                            <h4 className="font-bold text-[#0056b3] uppercase tracking-wider text-sm mb-4">Head Office</h4>
                            <p className="font-bold text-gray-800 text-lg">+91 93251 47803/05/07</p>
                            <p className="text-sm text-gray-500 mt-2">Administrative Inquiries</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
