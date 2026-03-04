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
        price: "₦125,000",
        image: "/caramel-kiss.jpg",
    },
    {
        id: "bng-2",
        name: "Pink Cravings",
        category: "BnG Originals",
        description: "A feminine and playful fragrance with notes of red berries, peony, and soft marshmallows.",
        price: "₦125,000",
        image: "/pink-cravings.jpg",
    },
    {
        id: "bng-3",
        name: "Blush Aura",
        category: "BnG Originals",
        description: "An elegant, airy scent featuring white roses, jasmine tea, and ethereal amber.",
        price: "₦145,000",
        image: "/blush-aura.jpg",
    },
    // Other Brands
    {
        id: "ob-1",
        name: "Oud Al Layl Midnight Edition",
        category: "Other Brands",
        description: "A deep, mysterious oud with spicy saffron and dark leather undertones.",
        price: "₦185,000",
        image: "/oud-al-layl.jpg",
    },
    {
        id: "ob-2",
        name: "D’Nill Luxury Oil Perfume",
        category: "Other Brands",
        description: "Concentrated perfume oil with long-lasting floral and woody accords.",
        price: "₦95,000",
        image: "/dnill-luxury.jpg",
    },
    {
        id: "ob-3",
        name: "Kaly Gifts Flora Majesty",
        category: "Other Brands",
        description: "A majestic garden in a bottle, bursting with fresh tuberose and citrus highlights.",
        price: "₦110,000",
        image: "/kaly-gifts.jpg",
    },
    {
        id: "ob-4",
        name: "Khalis Gold",
        category: "Other Brands",
        description: "A radiant blend of honey, sandalwood, and luminous jasmine.",
        price: "₦155,000",
        image: "/khalis-gold.jpg",
    },
];
