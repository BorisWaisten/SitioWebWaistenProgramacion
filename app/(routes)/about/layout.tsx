import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre mí",
  description:
    "Conocé a Boris Waisten, fundador de Waisten Programación: estudio de desarrollo de software especializado en sitios web, tiendas online, sistemas de gestión, chatbots e integraciones backend con React y Next.js.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
