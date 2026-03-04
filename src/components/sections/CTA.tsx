"use client";

import { motion } from "framer-motion";

export function CTA() {
    return (
        <section className="relative py-32 px-6 overflow-hidden">
            {/* Background with parallax effect or shimmer */}
            <div className="absolute inset-0 bg-[#f8f1f1]" />
            <div className="absolute top-0 right-0 w-[50%] h-full bg-primary-pink/10 skew-x-12 translate-x-1/2" />

            <div className="max-w-4xl mx-auto relative z-10 text-center space-y-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <span className="text-rose-gold uppercase tracking-[0.5em] text-xs font-bold">Your Journey Begins</span>
                    <h2 className="text-5xl md:text-7xl font-serif font-bold text-foreground leading-tight">
                        Find Your <br />
                        <span className="italic text-shimmer">Signature Scent</span>
                    </h2>
                    <p className="text-foreground/60 text-lg max-w-xl mx-auto font-sans">
                        Ready to experience the world of BnG Scents? Discover the fragrance that speaks to your soul.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <button className="w-full sm:w-auto bg-foreground text-white px-12 py-5 uppercase tracking-[0.3em] text-xs font-bold hover:bg-rose-gold transition-colors duration-500 shadow-xl shadow-foreground/10">
                        Shop Collection
                    </button>
                    <button className="w-full sm:w-auto bg-transparent text-foreground border border-foreground/10 px-12 py-5 uppercase tracking-[0.3em] text-xs font-bold hover:border-rose-gold transition-colors duration-500">
                        Explore Originals
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
