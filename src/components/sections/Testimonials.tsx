"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
    {
        name: "Elena Richardson",
        text: "Absolutely addictive scent. I've never received so many compliments in one evening.",
        role: "Signature Scent Collector",
    },
    {
        name: "Sophia Vance",
        text: "My signature fragrance now. The Blush Aura is exactly what I've been searching for for years.",
        role: "Luxury Aficionado",
    },
    {
        name: "Isabella Thorne",
        text: "Luxury in a bottle. The packaging is just as exquisite as the fragrance itself.",
        role: "Fashion Consultant",
    }
];

export function Testimonials() {
    return (
        <section className="py-24 px-6 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <span className="text-rose-gold uppercase tracking-[0.4em] text-xs font-bold">The Experience</span>
                    <h2 className="text-4xl font-serif font-bold text-foreground">What our Clients Say</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="p-10 rounded-2xl bg-cream/30 border border-rose-gold/10 relative group hover:bg-white hover:shadow-2xl transition-all duration-500"
                        >
                            <Quote className="text-rose-gold/20 absolute top-8 right-8 group-hover:text-rose-gold/40 transition-colors" size={40} />

                            <div className="flex space-x-1 mb-6">
                                {[...Array(5)].map((_, star) => (
                                    <Star key={star} size={14} className="fill-rose-gold text-rose-gold" />
                                ))}
                            </div>

                            <p className="text-foreground/80 text-lg leading-relaxed mb-8 font-serif italic">
                                "{t.text}"
                            </p>

                            <div>
                                <h4 className="font-bold text-foreground uppercase tracking-widest text-xs">{t.name}</h4>
                                <p className="text-rose-gold/60 text-[10px] uppercase tracking-widest mt-1">{t.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
