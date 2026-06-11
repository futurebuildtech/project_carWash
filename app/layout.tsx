import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EXPRESSWASH40 - Premium Car & Bike Wash",
  description: "Premium doorstep car and bike washing service in Rajahmundry. We Wash. You Relax. Membership plans starting from ₹199.",
  keywords: "car wash, bike wash, premium service, Rajahmundry, membership, doorstep service",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-gray-300 relative`}>
        <div className="relative z-0">
          {children}
        </div>
      </body>
    </html>
  );
}
