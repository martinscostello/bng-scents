"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ShoppingBag, Eye } from "lucide-react";
import { Product } from "@/data/products";
import { cn } from "@/utils/cn";

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
            }}
            className="relative group cursor-pointer"
        >
            <div
                style={{ transform: "translateZ(50px)" }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 border border-rose-gold/5"
            >
                {/* Image Container */}
                <div className="relative h-[350px] overflow-hidden bg-cream/20">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center space-x-3">
                        <button className="bg-white p-3 rounded-full shadow-lg hover:bg-rose-gold hover:text-white transition-colors">
                            <Eye size={20} />
                        </button>
                        <button className="bg-white p-3 rounded-full shadow-lg hover:bg-rose-gold hover:text-white transition-colors">
                            <ShoppingBag size={20} />
                        </button>
                    </div>

                    {/* Category Tag */}
                    <div className="absolute top-4 left-4">
                        <span className="text-[10px] uppercase tracking-widest bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full font-bold text-foreground/70 border border-rose-gold/10">
                            {product.category}
                        </span>
                    </div>
                </div>

                {/* Product Details */}
                <div className="p-6 space-y-2">
                    <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-rose-gold transition-colors">
                        {product.name}
                    </h3>
                    <p className="text-foreground/50 text-sm line-clamp-1 italic font-sans">
                        {product.description}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-rose-gold/5">
                        <span className="font-serif text-lg font-bold text-rose-gold">{product.price}</span>
                        <button className="text-[10px] uppercase tracking-widest font-bold text-foreground/40 group-hover:text-foreground transition-colors border-b border-transparent group-hover:border-foreground">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
