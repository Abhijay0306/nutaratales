import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Nutara Tales Sustainability Blog",
    default: "Nutara Tales Sustainability Blog",
  },
  description: "A blog dedicated to sustainable living, eco-friendly cooking, and zero-waste kitchen habits.",
  metadataBase: new URL("https://nutaratales.vercel.app"),
  openGraph: {
    title: "Nutara Tales Sustainability Blog",
    description: "A blog dedicated to sustainable living, eco-friendly cooking, and zero-waste kitchen habits.",
    type: "website",
    siteName: "Nutara Tales",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased min-h-screen flex flex-col items-stretch bg-background text-text selection:bg-light selection:text-dark">
        <Navbar />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
