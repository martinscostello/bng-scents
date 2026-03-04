import Link from "next/link";
import { Instagram, Twitter, MessageCircle, Heart } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-[#1c1c1c] text-white pt-20 pb-10 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-16">
                {/* Brand */}
                <div className="space-y-6">
                    <div className="flex flex-col">
                        <span className="text-2xl font-serif font-bold tracking-tight">BnG Scents</span>
                        <span className="text-[10px] uppercase tracking-[0.3em] text-rose-gold/80 -mt-1 ml-1">
                            Luxury Fragrance
                        </span>
                    </div>
                    <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                        Discover timeless scents crafted for elegance, confidence, and unforgettable presence.
                        Experience the art of luxury perfumery.
                    </p>
                    <div className="flex items-center space-x-5">
                        <Link href="#" className="hover:text-rose-gold transition-colors">
                            <Instagram size={20} />
                        </Link>
                        <Link href="#" className="hover:text-rose-gold transition-colors">
                            <Twitter size={20} />
                        </Link>
                        <Link href="#" className="hover:text-rose-gold transition-colors">
                            <MessageCircle size={20} />
                        </Link>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="font-serif text-lg mb-6 text-rose-gold">Quick Links</h4>
                    <ul className="space-y-4 text-sm text-white/70">
                        <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                        <li><Link href="#products" className="hover:text-white transition-colors">Products</Link></li>
                        <li><Link href="#bng-originals" className="hover:text-white transition-colors">BnG Originals</Link></li>
                        <li><Link href="#gift-sets" className="hover:text-white transition-colors">Gift Sets</Link></li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h4 className="font-serif text-lg mb-6 text-rose-gold">Support</h4>
                    <ul className="space-y-4 text-sm text-white/70">
                        <li><Link href="#about" className="hover:text-white transition-colors">Our Story</Link></li>
                        <li><Link href="#contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h4 className="font-serif text-lg mb-6 text-rose-gold">Stay Elegant</h4>
                    <p className="text-white/60 text-sm mb-6">Join our newsletter to receive exclusive offers and beauty tips.</p>
                    <div className="relative">
                        <input
                            type="email"
                            placeholder="Email address"
                            className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-rose-gold/50 transition-colors"
                        />
                        <button className="absolute right-2 top-1/2 -translate-y-1/2 text-rose-gold hover:text-white transition-colors uppercase text-[10px] font-bold tracking-widest">
                            Join
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto pt-10 flex flex-col md:row items-center justify-between text-[11px] text-white/40 uppercase tracking-widest">
                <p>&copy; {new Date().getFullYear()} BnG Scents. All rights reserved.</p>
                <div className="flex items-center mt-4 md:mt-0">
                    <span>Made with</span>
                    <Heart size={10} className="mx-1 text-rose-gold fill-rose-gold" />
                    <span>for luxury seekers</span>
                </div>
            </div>
        </footer>
    );
}
