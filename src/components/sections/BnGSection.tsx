"use client";

import { products } from "@/data/products";
import { ProductCard } from "@/components/ui/ProductCard";
import { motion } from "framer-motion";
import Image from "next/image";

export function BnGSection() {
    const originals = products.filter((p) => p.category === "BnG Originals");

    return (
        <section id="bng-originals" className="py-24 px-6 bg-cream/40 overflow-hidden">
            <div className="max-w-7xl mx-auto space-y-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1000&auto=format&fit=crop"
                            alt="BnG Originals Concept"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1c]/60 to-transparent" />
                        <div className="absolute bottom-10 left-10 text-white space-y-2">
                            <span className="text-rose-gold uppercase tracking-[0.3em] text-xs font-bold">The Signature</span>
                            <h3 className="text-4xl font-serif">BnG Originals</h3>
                        </div>
                    </motion.div>

                    <div className="space-y-10">
                        <div className="space-y-6">
                            <motion.span
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="text-rose-gold uppercase tracking-[0.5em] text-xs font-bold"
                            >
                                Our Legacy
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-5xl font-serif font-bold text-foreground leading-tight"
                            >
                                Scents Crafted for <br />
                                <span className="italic text-shimmer">Unforgettable Presence</span>
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-foreground/70 text-lg leading-relaxed max-w-lg"
                            >
                                Experience the exclusive BnG collection. Each bottle tells a story of elegance,
                                blending exotic notes with timeless sophistication to create a scent that is uniquely yours.
                            </motion.p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {originals.slice(0, 3).map((product, index) => (
                                <motion.div
                                    key={product.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                    className="space-y-4 text-center group"
                                >
                                    <div className="relative aspect-[4/5] rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-serif text-lg font-bold text-foreground">{product.name}</h4>
                                        <span className="text-rose-gold text-sm font-semibold italic">{product.price}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                        >
                            <button className="bg-transparent text-foreground border border-foreground/20 px-12 py-5 uppercase tracking-[0.2em] text-[10px] font-bold hover:bg-foreground hover:text-white transition-all duration-500 group flex items-center space-x-3">
                                <span>View Full Collection</span>
                                <span className="w-8 h-[1px] bg-rose-gold group-hover:w-12 transition-all duration-500" />
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
