import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// 1. Unified Metadata
export const metadata: Metadata = {
  title: "EXPRESSWASH40 - Premium Car & Bike Wash",
  description: "Premium doorstep car and bike washing service in Rajahmundry. We Wash. You Relax. Membership plans starting from ₹199.",
  keywords: ["car wash", "bike wash", "premium service", "Rajahmundry", "membership", "doorstep service"],
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Express Wash 40",
  },
};

// 2. Separate Viewport & Theme Color (Next.js 14 Standard)
export const viewport: Viewport = {
  themeColor: "#D4AF37",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
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
