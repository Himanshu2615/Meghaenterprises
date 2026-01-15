'use client';

import { useState, useRef } from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
emailjs.init("zEYY2BaLIfy78eo82");

export function ContactSection() {
    const formRef = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { toast } = useToast();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;
        setIsSubmitting(true);

        try {
            await emailjs.sendForm(
                'service_cv5fuj5',
                'template_ix7dt2o',
                formRef.current,
                'zEYY2BaLIfy78eo82'
            );
            toast({
                title: "Inquiry Received",
                description: "Our procurement team will analyze your request and contact you within 24 hours.",
            });
            formRef.current.reset();
        } catch (error) {
            toast({
                title: "Message Failed",
                description: "There was a problem sending your message. Please try email us directly at info@meghaenterprises.in",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.7563530879616!2d75.239585!3d19.8359105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb9b0b5c2e26bb%3A0xa3c753039e4c299!2sMEGHA%20ENGINEERING!5e0!3m2!1sen!2sin!4v1234567890";
    const googleMapsUrl = "https://www.google.com/maps/place/MEGHA+ENGINEERING/@19.8360356,75.241011,18.49z/data=!4m6!3m5!1s0x3bdb9b0b5c2e26bb:0xa3c753039e4c299!8m2!3d19.8359105!4d75.2417738!16s%2Fg%2F11n37ql94d";

    return (
        <section id="contact" className="py-24 bg-white border-t border-gray-200 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                <div className="relative h-[300px] rounded-3xl overflow-hidden shadow-2xl group border-4 border-slate-100 lg:order-1 order-2">
                    <img
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                        alt="Contact Us"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
                </div>
                <div className="lg:order-2 order-1">
                    <div className="inline-block px-4 py-1.5 bg-blue-100 text-[#0056b3] text-xs font-black uppercase tracking-widest mb-4 rounded-full">
                        Where We Are
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight">
                        Contact <span className="text-[#0056b3]">Us</span>
                    </h2>
                    <p className="text-slate-500 mt-6 text-lg leading-relaxed border-l-4 border-blue-500 pl-6">
                        Get a quote for your project or inquire about our product specifications.
                        Our team is ready to assist you with technical details and order processing.
                    </p>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-6 md:px-12">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-gray-50 border border-gray-200">

                    {/* Contact Info Side */}
                    <div className="lg:col-span-5 p-12 bg-[#0056b3] text-white">
                        <h3 className="text-2xl font-bold mb-8 uppercase">Get In Touch</h3>
                        <div className="space-y-8">
                            <ContactItem icon={<Phone />} label="Phone" value="+91 93251 47803/05/07" />
                            <ContactItem icon={<Mail />} label="Email" value="info@meghaenterprises.in" />
                            <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity">
                                <ContactItem icon={<MapPin />} label="Factory Location" value="Plot C-26, MIDC Waluj, Chhatrapati Sambhajinagar, MH" />
                            </a>
                        </div>

                        <div className="mt-12 h-64 w-full rounded-3xl overflow-hidden border-4 border-white/20 shadow-lg">
                            <iframe
                                src={mapUrl}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                title="Megha Engineering Location"
                                className="opacity-90 hover:opacity-100 transition-opacity"
                            />
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="lg:col-span-7 p-12">
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase text-gray-500">Name</label>
                                    <Input name="user_name" placeholder="Full Name" className="bg-white border-gray-300 rounded-none h-12 focus:border-[#0056b3] focus:ring-[#0056b3]" required />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase text-gray-500">Email</label>
                                    <Input name="user_email" type="email" placeholder="Email Address" className="bg-white border-gray-300 rounded-none h-12 focus:border-[#0056b3] focus:ring-[#0056b3]" required />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase text-gray-500">Requirement</label>
                                <select name="type" className="w-full h-12 border border-gray-300 bg-white px-3 text-sm focus:border-[#0056b3] outline-none">
                                    <option>Industrial Fabrication</option>
                                    <option>Line Materials</option>
                                    <option>Switchgear & Panels</option>
                                    <option>Other / General Inquiry</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase text-gray-500">Message</label>
                                <Textarea name="message" placeholder="Please provide details about your requirement..." className="bg-white border-gray-300 rounded-none min-h-[150px] focus:border-[#0056b3] focus:ring-[#0056b3]" required />
                            </div>

                            <Button
                                type="submit"
                                className="w-full md:w-auto bg-[#0056b3] hover:bg-blue-700 text-white font-bold uppercase tracking-wider h-14 px-8 rounded-none transition-all flex items-center justify-center gap-2"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                                <ArrowRight size={18} />
                            </Button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}

function ContactItem({ icon, label, value }: { icon: any, label: string, value: string }) {
    return (
        <div className="flex items-start gap-4">
            <div className="mt-1 text-yellow-400">
                {icon}
            </div>
            <div>
                <p className="text-sm font-bold uppercase text-blue-100 mb-1 tracking-wide">{label}</p>
                <p className="text-xl md:text-2xl font-black leading-tight text-white">{value}</p>
            </div>
        </div>
    );
}