"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 1, ease: "easeInOut" } }}
                    className="fixed inset-0 z-[100] bg-[#1c1c1c] flex flex-col items-center justify-center text-white"
                >
                    <div className="relative flex flex-col items-center">
                        {/* Animated Logo */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="flex flex-col items-center"
                        >
                            <span className="text-4xl md:text-6xl font-serif font-bold tracking-tight">BnG Scents</span>
                            <span className="text-xs uppercase tracking-[0.5em] text-rose-gold mt-2">
                                Luxury Fragrance
                            </span>
                        </motion.div>

                        {/* Progress Bar */}
                        <div className="mt-12 w-48 h-[1px] bg-white/10 relative overflow-hidden">
                            <motion.div
                                initial={{ x: "-100%" }}
                                animate={{ x: "100%" }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                className="absolute inset-0 bg-rose-gold"
                            />
                        </div>

                        {/* Decorative Shimmer */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute -inset-20 bg-rose-gold/5 blur-[100px] rounded-full"
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
