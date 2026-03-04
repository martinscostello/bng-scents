"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ChevronDown } from "lucide-react";

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const bottleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current || !bottleRef.current) return;

        // Floating animation for the bottle
        gsap.to(bottleRef.current, {
            y: -20,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
        });

        // Particle effect (simplified version)
        const ctx = gsap.context(() => {
            gsap.from(".hero-text", {
                y: 60,
                opacity: 0,
                duration: 1.5,
                stagger: 0.2,
                ease: "power4.out",
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-cream/30"
        >
            {/* Background Decor */}
            <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-primary-pink/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-champagne/20 rounded-full blur-[120px]" />

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                <div className="space-y-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="inline-block"
                    >
                        <span className="text-rose-gold font-medium uppercase tracking-[0.4em] text-xs px-4 py-2 border border-rose-gold/20 rounded-full bg-rose-gold/5">
                            Eau de Parfum Collection
                        </span>
                    </motion.div>

                    <div className="space-y-4">
                        <h1 className="hero-text text-5xl md:text-7xl font-serif font-bold leading-tight text-foreground">
                            Luxury Fragrances <br />
                            <span className="text-shimmer italic">That Define You</span>
                        </h1>
                        <p className="hero-text text-lg text-foreground/70 max-w-lg leading-relaxed font-sans">
                            Discover timeless scents crafted for elegance, confidence, and unforgettable presence.
                            The ultimate signature for the modern woman.
                        </p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="flex flex-wrap gap-6"
                    >
                        <button className="bg-foreground text-white border border-foreground px-10 py-4 uppercase tracking-[0.2em] text-xs font-bold hover:bg-transparent hover:text-foreground transition-all duration-500 shadow-xl shadow-foreground/10 group overflow-hidden relative">
                            <span className="relative z-10">Shop Collection</span>
                            <div className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                        </button>
                        <button className="bg-transparent text-foreground border border-rose-gold/30 px-10 py-4 uppercase tracking-[0.2em] text-xs font-bold hover:bg-rose-gold/5 transition-all duration-500">
                            Explore Originals
                        </button>
                    </motion.div>
                </div>

                <div className="relative flex justify-center items-center">
                    {/* Main Perfume Bottle Visual */}
                    <div
                        ref={bottleRef}
                        className="relative w-[300px] h-[450px] md:w-[400px] md:h-[600px] z-20"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1000&auto=format&fit=crop"
                            alt="Luxury Perfume Bottle"
                            fill
                            className="object-contain drop-shadow-[0_20px_50px_rgba(229,179,164,0.3)] filter brightness-105"
                            priority
                        />
                    </div>

                    {/* Decorative Circles */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 border border-rose-gold/10 rounded-full scale-110 md:scale-125 pointer-events-none"
                    />
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 border-2 border-dashed border-rose-gold/5 rounded-full scale-125 md:scale-150 pointer-events-none"
                    />
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 cursor-pointer"
            >
                <span className="text-[10px] uppercase tracking-[0.3em] text-rose-gold/60 font-medium">Scroll to Discover</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <ChevronDown className="text-rose-gold" size={20} strokeWidth={1} />
                </motion.div>
            </motion.div>
        </section>
    );
}
