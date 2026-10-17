import type { Metadata } from "next";
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
import MotionProvider from "@/components/motion-provider";
import WhatsAppButton from "@/components/whatsapp-button";
import { CONTACT_EMAIL, WHATSAPP_NUMBER, whatsappUrl } from "@/config/contact";
import { GoogleTagManagerScript, GoogleTagManagerNoScript } from "@/components/google-tag-manager";

const urbanist = Urbanist({ subsets: ["latin"] });
const anton = Anton({ weight: "400", subsets: ["latin"], variable: "--font-anton" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://waistenprogramacion.com.ar";
const siteName = "Waisten Programación";
const siteDescription =
  "Estudio de desarrollo de software. Creamos sitios web, tiendas online, sistemas de gestión, invitaciones digitales y chatbots a medida con React y Next.js.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Desarrollo de software a medida`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "desarrollo de software",
    "desarrollo web",
    "programación a medida",
    "tiendas online",
    "sistemas de gestión",
    "invitaciones digitales",
    "chatbots",
    "React",
    "Next.js",
    "Argentina",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: siteUrl,
    siteName,
    title: `${siteName} | Desarrollo de software a medida`,
    description: siteDescription,
    images: [{ url: "/logoWaisten.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Desarrollo de software a medida`,
    description: siteDescription,
    images: ["/logoWaisten.png"],
  },
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION } }
    : {}),
};

// Decide antes del primer paint si se reproduce la intro del logo,
// así la página nunca se ve "por debajo" ni parpadea en visitas repetidas.
const introScript = `try{var d=document.documentElement;if(location.pathname==="/"&&!sessionStorage.getItem("wp-intro-seen")&&!matchMedia("(prefers-reduced-motion: reduce)").matches){d.dataset.intro="playing"}else{d.dataset.intro="done"}}catch(e){document.documentElement.dataset.intro="done"}`;

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteName,
  url: siteUrl,
  logo: `${siteUrl}/logoWaisten.png`,
  description: siteDescription,
  sameAs: ["https://www.instagram.com/waistenprogramacion/"],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: `+${WHATSAPP_NUMBER}`,
    email: CONTACT_EMAIL,
    availableLanguage: ["Spanish"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: introScript }} />
        <GoogleTagManagerScript />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className={`${urbanist.className} ${anton.variable}`}>
        <GoogleTagManagerNoScript />
        <MotionProvider>
          <Navbar />
          {children}
          <WhatsAppButton />
        </MotionProvider>
        <footer className="border-t border-white/10 py-10">
          <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
            <p>© {new Date().getFullYear()} Waisten Programación</p>
            <div className="flex gap-6">
              <Link href="/works" className="hover:text-white transition-colors">proyectos</Link>
              <Link href="/contact" className="hover:text-white transition-colors">contacto</Link>
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">whatsapp</a>
              <a href="https://www.instagram.com/waistenprogramacion/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">instagram</a>
            </div>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
