import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Component/Navbar";
import Footer from "@/Component/Footer";
import WhatsAppFloater from "@/Component/WhatsappFloter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Grovia - Digital Marketing Agency | Franchise Marketing Experts",
  description: "Digital marketing crafted for franchises, multi-location brands, and visionaries. Performance marketing, SEO, web development, and content strategies that drive measurable growth.",
  keywords: "digital marketing agency, franchise marketing, multi-location marketing, performance marketing, SEO services",
  authors: [{ name: "Grovia" }],
  
  // ✅ Sirf ek favicon - sahi path ke saath
  icons: {
    icon: "/favicon.svg",  // public folder se directly
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  
  // ✅ Open Graph
  openGraph: {
    title: "Grovia - Digital Marketing Excellence",
    description: "Data-driven digital marketing strategies for franchises and multi-location brands.",
    url: "https://groviacom.vercel.app",
    siteName: "Grovia",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Grovia Digital Marketing Agency",
      },
    ],
    type: "website",
  },
  
  // ✅ Twitter
  twitter: {
    card: "summary_large_image",
    title: "Grovia - Digital Marketing Agency",
    description: "Digital marketing crafted for franchises, multi-location brands, and visionaries.",
    images: ["/og-image.png"],
  },
  
  // ✅ Manifest (optional)
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        {/* <WhatsAppFloater/> */}
        <Footer/>
      </body>
    </html>
  );
}
