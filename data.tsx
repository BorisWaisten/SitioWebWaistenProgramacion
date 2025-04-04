import { image } from "framer-motion/client";
import { url } from "inspector";
import { Instagram,BookText, CodeSquare, HomeIcon, Linkedin,  PhoneCallIcon, Pencil, Computer, Book, Rocket, Speech, CarFront, AreaChart, StoreIcon, ScrollIcon } from "lucide-react";

export const socialNetworks = [
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/boris-waisten/",
    },
    {
        id: 3,
        logo: <Instagram size={30} strokeWidth={1} />,
        src: "https://www.instagram.com/devwaisten/",
    },
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    {
        id: 5,
        title: "Contact",
        icon: <PhoneCallIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/contact",
    }
];





export const serviceData = [
  {
    icon: <Computer />,
    title: "Páginas Web/Móvil",
    description: "Diseño y desarrollo de sitios web y apps móviles con tecnologías modernas como React y Next.js.",
    image: "/images/web-dev.jpg",
  },
  {
    icon: <StoreIcon />,
    title: "Páginas Ecommerce",
    description: "Creamos tiendas en línea optimizadas para ventas con integración de pagos y diseño atractivo.",
    image: "/images/ecommerce.jpg",
  },
  {
    icon: <AreaChart />,
    title: "Sistemas de Gestión",
    description: "Automatizamos y mejoramos procesos empresariales con software a medida.",
    image: "/images/gestion.jpg",
  },
  {
    icon: <ScrollIcon />,
    title: "Invitaciones de Eventos",
    description: "Diseño y desarrollo de invitaciones digitales interactivas para bodas y eventos especiales.",
    image: "/images/invitaciones.jpg",
  },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Web Apicola",
        image: "/webApicola.png",
        urlGithub: "https://github.com/BorisWaisten/proyect-apicola",
        urlDemo: "https://argentinehoney.com/",
    },
    {
        id: 2,
        title: "Invitacion de Boda",
        image: "/webBoda.png",
        urlGithub: "https://github.com/BorisWaisten/invitacion-boda",
        urlDemo: "https://martuygino.vercel.app/",
    },
    {
        id: 3,
        title: "Sitio gestion de ventas",
        image: "/webGestion.png",
        urlGithub: "#!",
        urlDemo: "https://gestiondeventadonatella.vercel.app/",
    },
    {
        id: 4,
        title: "Modelo Web Ecommerce ",
        image: "/webEco.png",
        urlGithub: "https://github.com/BorisWaisten/Ecommerce-app",
        urlDemo: "https://ecommerce-app-bw.vercel.app/",
    },
    {
        id:5,
        title:"Sitio Web de Orden de los Dominicos",
        image:"/webTriduo.png",
        urlGithub:"https://github.com/LucasWaisten/triduo-op-ar",
        urlDemo:"https://hemosvistosugloria.op.org.ar",
    }
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/profile1.png",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile4.png",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile5.png",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile6.png",
    },
];