import { products } from '@/lib/products';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, ShieldCheck, Zap, Factory } from 'lucide-react';

// This is required for static site generation with dynamic routes
export function generateStaticParams() {
    return products.map((product) => ({
        id: product.id,
    }));
}

export default async function ProductDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const product = products.find((p) => p.id === id);

    if (!product) {
        return notFound();
    }

    return (
        <main className="min-h-screen pt-32 pb-20 bg-white text-slate-900">
            <div className="mx-auto max-w-[1920px] px-6 lg:px-12">

                {/* Back Link */}
                <div className="mb-12">
                    <Link href="/products" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#0056b3] transition-colors group">
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="font-bold text-sm uppercase tracking-wider">Back to Products</span>
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24">

                    {/* Image Section */}
                    <div className="relative">
                        <div className="aspect-square w-full bg-gray-50 border border-gray-200 relative group transition-colors duration-500 flex items-center justify-center p-12">
                            <div className="relative w-full h-full">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    fill
                                    className="object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-500"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Specs / Highlights */}
                        <div className="grid grid-cols-3 gap-4 mt-6">
                            {[
                                { label: 'Warranty', value: '5 Years', icon: ShieldCheck },
                                { label: 'Grade', value: 'Industrial', icon: Factory },
                                { label: 'Voltage', value: 'High/Low', icon: Zap },
                            ].map((spec, i) => (
                                <div key={i} className="bg-gray-50 border border-gray-200 p-4 text-center hover:border-[#0056b3] transition-colors group">
                                    <spec.icon className="mx-auto mb-2 text-gray-400 group-hover:text-[#0056b3]" size={20} />
                                    <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">{spec.label}</p>
                                    <p className="font-bold text-gray-900">{spec.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Details Section */}
                    <div className="flex flex-col justify-start">
                        <div className="mb-6">
                            <span className="text-[#0056b3] font-bold text-xs uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-sm border border-blue-100">
                                {product.category}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight text-gray-900 uppercase tracking-tight">
                            {product.title}
                        </h1>

                        <div className="prose max-w-none text-gray-600 text-lg leading-relaxed mb-10 border-l-4 border-[#0056b3] pl-6">
                            <p>{product.description}</p>
                        </div>

                        <div className="mb-12">
                            <h3 className="text-gray-900 font-bold uppercase tracking-wider mb-6 flex items-center gap-2 border-b border-gray-200 pb-2">
                                Technical Specifications
                            </h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                                {product.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3 group">
                                        <CheckCircle2 className="text-[#0056b3] mt-0.5 shrink-0" size={20} />
                                        <span className="text-gray-700 font-medium">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                            <Link href="/enquiry" className="flex-1 bg-[#0056b3] text-white font-bold uppercase tracking-widest py-4 px-8 hover:bg-black transition-all duration-300 text-center shadow-lg hover:shadow-xl">
                                Request Quote
                            </Link>
                            <button className="flex-1 bg-white border-2 border-gray-200 text-gray-700 font-bold uppercase tracking-widest py-4 px-8 hover:border-[#0056b3] hover:text-[#0056b3] transition-all duration-300">
                                Download Spec Sheet
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}
