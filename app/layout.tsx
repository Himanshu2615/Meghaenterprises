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
        default: 'Megha Enterprises | Premier Electrical, Solar & Industrial Fabrication Solutions',
        template: '%s | Megha Enterprises - Electrical & Solar Solutions'
    },
    description: 'Megha Enterprises is an ISO 9001:2015 certified manufacturer, electrical contractor, and solar EPC company in Chhatrapati Sambhajinagar (Aurangabad), Maharashtra. Specialist in High Voltage Isolators (11kV-132kV), HT/LT Line Erection, Air Break Switches, and Industrial Structural Fabrication.',
    keywords: [
        'Megha',
        'Electrical',
        'Enterprises',
        'Megha Enterprises',
        'Megha Electricals',
        'Megha Enterprises Electrical',
        'Megha Engineering',
        'Megha Solar',
        'Electrical Contractors',
        'Electrical Manufacturer Aurangabad',
        'HT LT Line Erection',
        'High Voltage Isolators 11kV 33kV 132kV',
        'Air Break Switches',
        'Solar Plant Installation',
        'Solar EPC India',
        'Structural Fabrication Aurangabad',
        'MIDC Waluj Electrical Manufacturers',
        'Electrical Equipment Supplier Maharashtra',
        'Power Substation Materials',
        'Sheet Metal Fabrication'
    ],
    authors: [{ name: 'Megha Enterprises', url: 'https://www.meghaenterprises.in' }],
    creator: 'Megha Enterprises',
    publisher: 'Megha Enterprises',
    alternates: {
        canonical: 'https://www.meghaenterprises.in',
    },
    category: 'Electrical & Industrial Engineering',
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
        title: 'Megha Enterprises | Electrical, Solar & Industrial Fabrication Excellence',
        description: 'ISO 9001:2015 Certified manufacturer of HT/LT high voltage electrical components, air break switches, and solar power plants in Aurangabad, Maharashtra.',
        url: 'https://www.meghaenterprises.in',
        siteName: 'Megha Enterprises',
        locale: 'en_IN',
        type: 'website',
        images: [
            {
                url: '/megha_logo.png',
                width: 800,
                height: 600,
                alt: 'Megha Enterprises Electrical & Solar Solutions Logo',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Megha Enterprises | Electrical & Solar Solutions',
        description: 'Reliable HT/LT high voltage components, Solar EPC Projects, and precision industrial fabrication from Chhatrapati Sambhajinagar (Aurangabad).',
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
        google: 'google-site-verification-code',
    },
};

import { PremiumUX } from '@/components/premium-ux';
import { ScrollProgress } from '@/components/scroll-progress';
import { PagePreloader } from '@/components/page-preloader';
import { GoogleAnalytics } from '@/components/google-analytics';
import Script from 'next/script';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const jsonLdData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": ["ElectricalContractor", "LocalBusiness", "Organization", "Manufacturer"],
                "@id": "https://www.meghaenterprises.in/#organization",
                "name": "Megha Enterprises",
                "legalName": "Megha Enterprises",
                "alternateName": [
                    "Megha Electricals",
                    "Megha Enterprises Electrical",
                    "Megha Engineering",
                    "Megha Solar",
                    "Megha Enterprises Aurangabad"
                ],
                "url": "https://www.meghaenterprises.in",
                "logo": "https://www.meghaenterprises.in/megha_logo.png",
                "image": "https://www.meghaenterprises.in/megha_logo.png",
                "description": "Premier ISO 9001:2015 certified manufacturer of High Voltage Isolators (11kV-132kV), Solar Plant Installations, and Industrial Structural Fabrication in Chhatrapati Sambhajinagar (Aurangabad), Maharashtra.",
                "telephone": "+919325147803",
                "email": "info@meghaenterprises.in",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Plot C-26, MIDC Waluj",
                    "addressLocality": "Chhatrapati Sambhajinagar (Aurangabad)",
                    "addressRegion": "Maharashtra",
                    "postalCode": "431136",
                    "addressCountry": "IN"
                },
                "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "19.8340",
                    "longitude": "75.2530"
                },
                "areaServed": [
                    "India",
                    "Maharashtra",
                    "Chhatrapati Sambhajinagar",
                    "Aurangabad",
                    "Pune",
                    "Mumbai",
                    "Nagpur",
                    "Nashik"
                ],
                "priceRange": "$$",
                "openingHoursSpecification": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    "opens": "09:00",
                    "closes": "18:00"
                },
                "knowsAbout": [
                    "Electrical Isolators 11kV to 132kV",
                    "Air Break Switches",
                    "HT LT Line Erection",
                    "Solar EPC Plant Installation",
                    "Industrial Structural Fabrication",
                    "Substation Equipment Manufacturing"
                ],
                "sameAs": [
                    "https://www.facebook.com/p/Megha-Engineering-Aurangabad-100047026466226",
                    "https://www.instagram.com/meghaenterprisesc26/",
                    "https://www.linkedin.com/company/megha-enterprises"
                ]
            },
            {
                "@type": "WebSite",
                "@id": "https://www.meghaenterprises.in/#website",
                "url": "https://www.meghaenterprises.in",
                "name": "Megha Enterprises | Electrical, Solar & Industrial Fabrication",
                "alternateName": "Megha Electricals",
                "publisher": {
                    "@id": "https://www.meghaenterprises.in/#organization"
                }
            }
        ]
    };

    return (
        <html lang="en" className="scroll-smooth" suppressHydrationWarning>
            <head>
                <link rel="icon" href="/megha_logo.png" />
                <link rel="canonical" href="https://www.meghaenterprises.in" />
                <meta name="geo.region" content="IN-MH" />
                <meta name="geo.placename" content="Chhatrapati Sambhajinagar, Aurangabad" />
                <meta name="geo.position" content="19.8340;75.2530" />
                <meta name="ICBM" content="19.8340, 75.2530" />
            </head>
            <body className={`${openSans.variable} ${roboto.variable} font-sans min-h-screen flex flex-col relative transition-colors duration-300 bg-white text-slate-900 overflow-x-hidden`}>
                <Script
                    id="global-schema-org"
                    type="application/ld+json"
                    strategy="beforeInteractive"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
                />
                <GoogleAnalytics GA_MEASUREMENT_ID="G-8ESDRSPCJF" />
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
