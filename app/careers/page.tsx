import type { Metadata } from 'next';
import { CareersView } from '@/components/careers-view';

export const metadata: Metadata = {
    title: 'Careers & Job Openings | Megha Enterprises Electrical & Solar Engineering',
    description: 'Join the engineering and manufacturing team at Megha Enterprises in Chhatrapati Sambhajinagar (Aurangabad). Explore careers in structural engineering, CNC operations, sales, and supply chain management.',
    keywords: ['Megha Enterprises Careers', 'Electrical Engineering Jobs Aurangabad', 'Megha Electricals Recruitment', 'Engineering Openings Maharashtra'],
    alternates: {
        canonical: 'https://www.meghaenterprises.in/careers',
    },
};

export default function CareerPage() {
    return <CareersView />;
}
