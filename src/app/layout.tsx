import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BnG Scents | Luxury Fragrances & Signature Scents",
  description: "Discover timeless scents crafted for elegance, confidence, and unforgettable presence. Experience the art of luxury perfumery with BnG Scents.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
