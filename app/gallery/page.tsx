import { PageBanner } from '@/components/page-banner';
import { Camera } from 'lucide-react';

export default function GalleryPage() {
    return (
        <div className="pt-24 min-h-screen bg-white">
            <PageBanner
                title="Project Gallery"
                description="Visual showcase of our electrical installations and custom fabrication projects across India."
                backgroundImage="https://images.unsplash.com/photo-1542281286-9e0a16bb7366?q=80&w=2070&auto=format&fit=crop"
                icon={<Camera size={32} />}
            />
            <div className="max-w-[1400px] mx-auto px-6 py-24">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5",
                        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789",
                        "https://images.unsplash.com/photo-1541888946425-d81bb19480c5",
                        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
                        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e",
                        "https://images.unsplash.com/photo-1497366216548-37526070297c"
                    ].map((img, i) => (
                        <div key={i} className="aspect-square bg-gray-100 relative group overflow-hidden rounded-2xl shadow-lg">
                            <img
                                src={`${img}?q=80&w=800&auto=format&fit=crop`}
                                alt={`Project Showcase ${i + 1}`}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-6 text-center">
                                <span className="text-white font-black uppercase tracking-[0.2em] border-2 border-white px-6 py-3 hover:bg-white hover:text-black transition-all">
                                    Project Details
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
