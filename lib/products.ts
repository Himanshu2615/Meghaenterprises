export interface Product {
    id: string;
    image: string;
    title: string;
    description: string;
    category: string;
    features: string[];
}

export const products: Product[] = [
    {
        id: 'transformer-250kva',
        image: '/products/transformer.png',
        title: 'Industrial Transformer 250kVA',
        description: 'High-performance 250kVA distribution transformer designed for heavy industrial applications. Features robust cooling system, minimal loss core technology, and weather-resistant coating for outdoor installation. Certified for 11kV/433V operations.',
        category: 'Distribution',
        features: ['Copper Winding', 'ONAN Cooling', '5-Year Warranty', 'BIS Certified']
    },
    {
        id: 'ht-aluminum-wire',
        image: '/products/wire.png',
        title: 'High Tension Aluminum Conductor',
        description: 'Premium grade ACSR (Aluminum Conductor Steel Reinforced) wire for high tension power transmission lines. Engineered for superior tensile strength and conductivity. Ideal for long-span river crossings and transmission towers.',
        category: 'Transmission',
        features: ['High Conductivity', 'Corrosion Resistant', 'High Tensile Strength', 'IS: 398 Standards']
    },
    {
        id: 'safety-kit-pro',
        image: '/products/safety.png',
        title: 'Pro Industrial Safety Kit',
        description: 'Complete electrical safety gear kit including 33kV insulating gloves, arc-flash protection helmet with visor, and composite toe safety boots. Mandatory for all high-voltage maintenance personnel.',
        category: 'Safety',
        features: ['33kV Protection', 'Arc Flash Rated', 'Ergonomic Fit', 'ISO Certified Hubs']
    },
    {
        id: 'solar-panel-mono',
        image: '/Solarpannels.png',
        title: 'Monocrystalline Solar Panel',
        description: 'High-efficiency monocrystalline solar panel module. delivering 550W output. Anti-reflective coating, robust aluminum frame, and 25-year performance warranty. Suitable for large-scale solar farms and industrial rooftops.',
        category: 'Renewable',
        features: ['21% Efficiency', 'PID Resistant', 'Low Light Performance', 'Half-Cut Cell Tech']
    },
    {
        id: 'street-light-led',
        image: '/Street light.png',
        title: 'Smart LED Street Light',
        description: 'Energy-efficient LED street light with integrated photocell for automatic dusk-to-dawn operation. IP66 waterproof rating and surge protection. Perfect for highways, industrial parks, and municipal roads.',
        category: 'Lighting',
        features: ['100W Output', 'IP66 Rated', 'Surge Protection', '50,000h Lifespan']
    },
    {
        id: 'ab-switch-11kv',
        image: '/AB Switch main.png',
        title: '11kV Air Break Switch',
        description: 'Triple pole manually operated air break switch for isolation of HT lines. Manufactured with high-grade porcelain insulators and galvanized steel structure. Ensures safe maintenance operations.',
        category: 'Distribution',
        features: ['11kV / 400A', 'Hot Dip Galvanized', 'Bird Guard Included', 'Smooth Operation']
    }
];
