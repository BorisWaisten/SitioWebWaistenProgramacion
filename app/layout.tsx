import type { Metadata as NextMetadata } from "next";
import { Urbanist } from "next/font/google";

import "./globals.css";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Navbar from "@/components/navbar";

const urbanist = Urbanist({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={urbanist.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
