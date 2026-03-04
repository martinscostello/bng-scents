"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const storySteps = [
    {
        title: "The Essence of Luxury",
        text: "Every fragrance begins with a vision of absolute elegance and refined sophistication.",
        image: "/story-essence.jpg",
    },
    {
        title: "Masterful Ingredients",
        text: "We source the rarest botanicals and oils from across the globe to create our signature blends.",
        image: "/story-ingredients.jpg",
    },
    {
        title: "Timed Perfection",
        text: "Months of maturation ensure each note harmonizes perfectly, delivering a scent that evolves beautifully.",
        image: "/story-perfection.jpg",
    },
    {
        title: "Signature Confidence",
        text: "A BnG fragrance isn't just a scent; it's an invisible aura that defines your presence.",
        image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1000&auto=format&fit=crop",
    },
];

export function ScrollStory() {
    const containerRef = useRef<HTMLDivElement>(null);
    const revealsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            revealsRef.current.forEach((el, i) => {
                if (!el) return;

                gsap.from(el, {
                    scrollTrigger: {
                        trigger: el,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play reverse play reverse",
                    },
                    opacity: 0,
                    y: 100,
                    duration: 1,
                    ease: "power2.out",
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-24 bg-[#1c1c1c] text-white overflow-hidden">
            <div className="max-w-4xl mx-auto px-6 space-y-32">
                <div className="text-center space-y-6 mb-40">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-rose-gold uppercase tracking-[0.5em] text-xs font-bold"
                    >
                        Behind the Scent
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-6xl font-serif font-bold"
                    >
                        The Art of Fragrance
                    </motion.h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="h-[1px] bg-rose-gold/30 w-40 mx-auto origin-center"
                    />
                </div>

                {storySteps.map((step, index) => (
                    <div
                        key={index}
                        ref={(el) => { if (el) revealsRef.current[index] = el; }}
                        className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-12 md:gap-24`}
                    >
                        <div className="flex-1 space-y-6">
                            <span className="text-rose-gold font-serif italic text-2xl">0{index + 1}.</span>
                            <h3 className="text-3xl font-serif font-bold leading-tight">{step.title}</h3>
                            <p className="text-white/60 text-lg leading-relaxed font-sans">
                                {step.text}
                            </p>
                        </div>
                        <div className="flex-1 relative aspect-[4/5] w-full max-w-sm rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl skew-y-3 md:skew-y-0 hover:skew-y-0 transition-transform duration-700">
                            <img
                                src={step.image}
                                alt={step.title}
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1c] via-transparent to-transparent opacity-60" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
