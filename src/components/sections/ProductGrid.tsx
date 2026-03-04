"use client";

import { products } from "@/data/products";
import { ProductCard } from "@/components/ui/ProductCard";
import { motion } from "framer-motion";

export function ProductGrid() {
    const otherBrands = products.filter((p) => p.category === "Other Brands");

    return (
        <section id="products" className="py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto space-y-16">
                <div className="flex flex-col items-center text-center space-y-4">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-rose-gold uppercase tracking-[0.4em] text-xs font-semibold"
                    >
                        Curated Excellence
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-serif font-bold text-foreground"
                    >
                        Featured Collections
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="h-[1px] bg-rose-gold/30"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {otherBrands.map((product, index) => (
                        <div key={product.id} className="relative">
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>

                <div className="flex justify-center pt-8">
                    <button className="group flex items-center space-x-2 text-foreground/60 hover:text-foreground transition-colors uppercase text-xs font-bold tracking-[0.3em] py-4">
                        <span>View All Collections</span>
                        <span className="w-8 h-[1px] bg-rose-gold group-hover:w-16 transition-all duration-500" />
                    </button>
                </div>
            </div>
        </section>
    );
}
