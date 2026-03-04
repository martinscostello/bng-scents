"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag } from "lucide-react";
import { cn } from "@/utils/cn";

const navItems = [
    { name: "Home", href: "/" },
    { name: "Products", href: "#products" },
    { name: "BnG Originals", href: "#bng-originals" },
    { name: "Gift Sets", href: "#gift-sets" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4",
                isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-rose-gold/10 py-3" : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="group flex items-center space-x-3">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center space-x-3"
                    >
                        <div className="relative w-10 h-10">
                            <img
                                src="/logo.png"
                                alt="BnG Scents Logo"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="flex flex-col text-left">
                            <span className="text-xl font-serif font-bold tracking-tight text-foreground transition-colors group-hover:text-rose-gold">
                                BnG Scents
                            </span>
                            <span className="text-[10px] uppercase tracking-[0.3em] text-rose-gold/80 -mt-1">
                                Luxury Fragrance
                            </span>
                        </div>
                    </motion.div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navItems.map((item, index) => (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link
                                href={item.href}
                                className="text-sm uppercase tracking-widest text-foreground/70 hover:text-rose-gold transition-colors font-medium relative group"
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-rose-gold transition-all duration-300 group-hover:w-full" />
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex items-center space-x-4">
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="p-2 text-foreground/80 hover:text-rose-gold transition-colors"
                    >
                        <ShoppingBag size={20} />
                    </motion.button>

                    <button
                        className="md:hidden p-2 text-foreground"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "100vh" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-rose-gold/10 overflow-hidden flex flex-col items-center justify-center space-y-8"
                    >
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-xl uppercase tracking-[0.2em] font-serif text-foreground hover:text-rose-gold transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
