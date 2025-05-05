
import { Instagram,BookText, CodeSquare, HomeIcon, Linkedin,  PhoneCallIcon, Pencil, Computer, Book, Rocket, Speech, CarFront, AreaChart, StoreIcon, ScrollIcon } from "lucide-react";

export const socialNetworks = [
    // {
    //     id: 2,
    //     logo: <Linkedin size={30} strokeWidth={1} />,
    //     src: "https://www.linkedin.com/in/boris-waisten/",
    // },
    {
        id: 3,
        logo: <Instagram size={30} strokeWidth={1} />,
        src: "https://www.instagram.com/waistenprogramacion/",
    },
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Inicio",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "Sobre Nosotros",
        icon: <Pencil size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Servicios",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Trabajos",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/works",
    },
    {
        id: 5,
        title: "Contacto",
        icon: <PhoneCallIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/contact",
    }
];





export const serviceData = [
  {
    icon: <Computer />,
    title: "Páginas Web/Móvil",
    description: "Diseño y desarrollo de sitios web y apps móviles con tecnologías modernas como React y Next.js.",
    image: "/webApicola.png",
  },
  {
    icon: <StoreIcon />,
    title: "Páginas Ecommerce",
    description: "Creamos tiendas en línea optimizadas para ventas con integración de pagos y diseño atractivo.",
    image: "/webEco.png",
  },
  {
    icon: <AreaChart />,
    title: "Sistemas de Gestión",
    description: "Automatizamos y mejoramos procesos empresariales con software a medida.",
    image: "/webGestion.png",
  },
  {
    icon: <ScrollIcon />,
    title: "Invitaciones de Eventos",
    description: "Diseño y desarrollo de invitaciones digitales interactivas para bodas y eventos especiales.",
    image: "/webBoda.png",
  },
];

export const dataPortfolio = [
    {
        id:1,
        title:"Plataforma de Streaming",
        image:"/webTriduo.png",
        urlGithub:"https://github.com/LucasWaisten/triduo-op-ar",
        urlDemo:"https://hemosvistosugloria.op.org.ar",
    },
    {
        id: 5,
        title: "Demo App Ecommerce",
        image: "/webEco.png",
        urlGithub: "https://github.com/BorisWaisten/Ecommerce-app",
        urlDemo: "https://ecommerce-app-bw.vercel.app/",
    },
    {
        id: 3,
        title: "Pagina Web Apicola",
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
        id: 4,
        title: "Sitio gestion de ventas",
        image: "/webGestion.png",
        urlGithub: "#!",
        urlDemo: "https://gestiondeventadonatella.vercel.app/",
    }
];

