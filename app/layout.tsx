import './globals.css';
import type { Metadata } from 'next';
import { Open_Sans, Roboto } from 'next/font/google';
import { SmoothScroll } from '@/components/SmoothScroll';
import { Providers } from './providers';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Chatbot } from '@/components/chatbot';
import { Toaster } from '@/components/ui/toaster';

const openSans = Open_Sans({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-open-sans',
});

const roboto = Roboto({
    weight: ['400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-roboto',
});

export const metadata: Metadata = {
    metadataBase: new URL('https://www.meghaenterprises.in'),
    title: {
        default: 'Megha Enterprises | High Voltage Electrical Components Manufacturer',
        template: '%s | Megha Enterprises'
    },
    description: 'Leading manufacturer of High Voltage Isolators (11kV-132kV), Air Break Switches, Drop Out Fuses, and Transmission Line Materials in Aurangabad, India. ISO 9001:2015 Certified.',
    keywords: ['High Voltage Isolators', 'Air Break Switches', 'Drop Out Fuses', 'Transmission Line Materials', 'Electrical Components Manufacturer', 'Aurangabad Engineering', 'Megha Enterprises', 'HT Line Materials', 'DO Fuse', 'Isolators 11kV 33kV'],
    authors: [{ name: 'Megha Enterprises' }],
    creator: 'Megha Enterprises',
    publisher: 'Megha Enterprises',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    icons: {
        icon: '/megha_logo.png',
        shortcut: '/megha_logo.png',
        apple: '/megha_logo.png',
    },
    openGraph: {
        title: 'Megha Enterprises | Engineering Power for Tomorrow',
        description: 'ISO 9001:2015 Certified manufacturer of premium high voltage electrical components. Serving state boards and private contractors since 2004.',
        url: 'https://www.meghaenterprises.in',
        siteName: 'Megha Enterprises',
        locale: 'en_IN',
        type: 'website',
        images: [
            {
                url: '/megha_logo.png',
                width: 800,
                height: 600,
                alt: 'Megha Enterprises Logo',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Megha Enterprises | High Voltage Solutions',
        description: 'Reliable HT/LT line components and precision engineering from Aurangabad, Maharashtra.',
        images: ['/megha_logo.png'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'google-site-verification-code', // Placeholder, user can update
    },
};

import { PremiumUX } from '@/components/premium-ux';
import { ScrollProgress } from '@/components/scroll-progress';
import { PagePreloader } from '@/components/page-preloader';
import { GoogleAnalytics } from '@/components/google-analytics';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="scroll-smooth" suppressHydrationWarning>
            <head>
                {/* Fallback favicon to ensure mobile browser tabs use logo */}
                <link rel="icon" href="/megha_logo.png" />
            </head>
            <body className={`${openSans.variable} ${roboto.variable} font-sans min-h-screen flex flex-col relative transition-colors duration-300 bg-white text-slate-900 overflow-x-hidden`}>
                <GoogleAnalytics GA_MEASUREMENT_ID="G-F88N80W7EY" />
                <PagePreloader />
                <ScrollProgress />
                <Providers>
                    <SmoothScroll>
                        <Header />
                        <PremiumUX />
                        <main className="flex-1 overflow-x-hidden">{children}</main>
                        <Footer />
                        <Chatbot />
                        <Toaster />
                    </SmoothScroll>
                </Providers>
            </body>
        </html>
    );
}
