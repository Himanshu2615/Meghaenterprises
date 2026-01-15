import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
    id: string;
    image: string;
    title: string;
}

export function ProductCard({ id, image, title }: ProductCardProps) {
    return (
        <Link href={`/products/details/${id}`} className="block group transition-colors duration-500">
            <div className="bg-black/[0.03] dark:bg-industrial-steel-dark/20 border border-black/5 dark:border-white/5 rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_40px_rgba(0,102,255,0.1)] transition-all duration-300 relative">

                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-industrial-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />

                <div className="relative h-72 w-full overflow-hidden bg-black/5 dark:bg-white/5 p-4 flex items-center justify-center">
                    <div className="relative w-full h-full transform group-hover:scale-105 transition-transform duration-500 ease-out">
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

                <div className="p-6 relative z-20 bg-white/70 dark:bg-industrial-void-black/80 backdrop-blur-sm border-t border-black/5 dark:border-white/5 transition-colors duration-500">
                    <div className="flex justify-between items-start gap-4 mb-3">
                        <h3 className="text-xl font-bold text-black dark:text-white group-hover:text-industrial-blue transition-colors line-clamp-2">
                            {title}
                        </h3>
                    </div>
                    <div className="flex items-center justify-end">
                        <span className="text-xs text-gray-500 uppercase tracking-wider border border-black/10 dark:border-white/10 px-2 py-1 rounded group-hover:border-industrial-blue/50 transition-colors">Details &rarr;</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
