import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Portfolio de proyectos desarrollados por Waisten Programación: sitios web, tiendas online, invitaciones digitales y sistemas de gestión para clientes reales.",
  alternates: {
    canonical: "/works",
  },
};

export default function WorksLayout({ children }: { children: React.ReactNode }) {
  return children;
}
