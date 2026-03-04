export interface Product {
    id: string;
    name: string;
    category: "Other Brands" | "BnG Originals";
    description: string;
    price: string;
    image: string;
}

export const products: Product[] = [
    // BnG Originals
    {
        id: "bng-1",
        name: "Caramel Kiss",
        category: "BnG Originals",
        description: "A sweet, addictive blend of warm caramel, vanilla bean, and a hint of toasted musk.",
        price: "$85.00",
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1000&auto=format&fit=crop",
    },
    {
        id: "bng-2",
        name: "Pink Cravings",
        category: "BnG Originals",
        description: "A feminine and playful fragrance with notes of red berries, peony, and soft marshmallows.",
        price: "$85.00",
        image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1000&auto=format&fit=crop",
    },
    {
        id: "bng-3",
        name: "Blush Aura",
        category: "BnG Originals",
        description: "An elegant, airy scent featuring white roses, jasmine tea, and ethereal amber.",
        price: "$85.00",
        image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1000&auto=format&fit=crop",
    },
    // Other Brands
    {
        id: "ob-1",
        name: "Oud Al Layl Midnight Edition",
        category: "Other Brands",
        description: "A deep, mysterious oud with spicy saffron and dark leather undertones.",
        price: "$120.00",
        image: "https://images.unsplash.com/photo-1594434297573-4556f08235dc?q=80&w=1000&auto=format&fit=crop",
    },
    {
        id: "ob-2",
        name: "D’Nill Luxury Oil Perfume",
        category: "Other Brands",
        description: "Concentrated perfume oil with long-lasting floral and woody accords.",
        price: "$95.00",
        image: "https://images.unsplash.com/photo-1588405748353-0c58a4369e71?q=80&w=1000&auto=format&fit=crop",
    },
    {
        id: "ob-3",
        name: "Kaly Gifts Flora Majesty",
        category: "Other Brands",
        description: "A majestic garden in a bottle, bursting with fresh tuberose and citrus highlights.",
        price: "$110.00",
        image: "https://images.unsplash.com/photo-1563170351-be82bc888bb4?q=80&w=1000&auto=format&fit=crop",
    },
    {
        id: "ob-4",
        name: "Khalis Gold",
        category: "Other Brands",
        description: "A radiant blend of honey, sandalwood, and luminous jasmine.",
        price: "$105.00",
        image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1000&auto=format&fit=crop",
    },
];
