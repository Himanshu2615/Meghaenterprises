import { PageBanner } from '@/components/page-banner';
import { Play } from 'lucide-react';

export default function VideoPage() {
    return (
        <div className="pt-24 min-h-screen bg-white">
            <PageBanner
                title="Video Gallery"
                description="Experience our manufacturing process and quality testing through these corporate videos."
                backgroundImage="https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=2070&auto=format&fit=crop"
                icon={<Play size={32} />}
            />
            <div className="max-w-[1400px] mx-auto px-6 py-24">
                <h1 className="text-4xl font-bold text-[#0056b3] uppercase mb-12">Manufacturing Tour</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="aspect-video bg-black rounded-lg overflow-hidden relative">
                        <div className="absolute inset-0 flex items-center justify-center text-white/50">
                            [Main Factory Tour Video]
                        </div>
                    </div>
                    <div className="aspect-video bg-black rounded-lg overflow-hidden relative">
                        <div className="absolute inset-0 flex items-center justify-center text-white/50">
                            [Product Testing Lab]
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
