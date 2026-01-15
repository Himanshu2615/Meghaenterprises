'use client';

import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

import { Suspense } from 'react';

function AnalyticsTracker({ GA_MEASUREMENT_ID }: { GA_MEASUREMENT_ID: string }) {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        if (!GA_MEASUREMENT_ID || !pathname) return;

        const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');

        // @ts-ignore
        if (window.gtag) {
            // @ts-ignore
            window.gtag('config', GA_MEASUREMENT_ID, {
                page_path: url,
            });
        }
    }, [pathname, searchParams, GA_MEASUREMENT_ID]);

    return null;
}

export function GoogleAnalytics({ GA_MEASUREMENT_ID }: { GA_MEASUREMENT_ID: string }) {
    if (!GA_MEASUREMENT_ID) return null;

    return (
        <>
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            />
            <Script
                id="google-analytics"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${GA_MEASUREMENT_ID}', {
                    page_path: window.location.pathname,
                });
            `,
                }}
            />
            <Suspense fallback={null}>
                <AnalyticsTracker GA_MEASUREMENT_ID={GA_MEASUREMENT_ID} />
            </Suspense>
        </>
    );
}
