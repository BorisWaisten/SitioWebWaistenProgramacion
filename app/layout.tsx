import type { Metadata as NextMetadata } from "next";
import { Urbanist, Anton } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import Link from "next/link";

// @ts-ignore: Allow side-effect CSS import without type declarations
import "./globals.css";
// @ts-ignore: Allow side-effect CSS import without type declarations
import 'swiper/css';
// @ts-ignore: Allow side-effect CSS import without type declarations
import 'swiper/css/pagination';
// @ts-ignore: Allow side-effect CSS import without type declarations
import 'swiper/css/scrollbar';

import Navbar from "@/components/navbar";

const urbanist = Urbanist({ subsets: ["latin"] });
const anton = Anton({ weight: "400", subsets: ["latin"], variable: "--font-anton" });

type Metadata = NextMetadata & {
  image: string;
}

export const metadata: Metadata = {
  title: "Waisten Programación",
  description: "Servicios de programación",
  image: "/favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${urbanist.className} ${anton.variable}`}>
        <Navbar />
        {children}
        <footer className="border-t border-white/10 py-10">
          <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
            <p>© {new Date().getFullYear()} Waisten Programación</p>
            <div className="flex gap-6">
              <Link href="/works" className="hover:text-white transition-colors">proyectos</Link>
              <Link href="/contact" className="hover:text-white transition-colors">contacto</Link>
              <a href="https://www.instagram.com/waistenprogramacion/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">instagram</a>
            </div>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
