
import { Instagram,BookText,Server, CodeSquare, HomeIcon, Linkedin,  PhoneCallIcon, Pencil, Computer, Book, Rocket, Speech, CarFront, AreaChart, StoreIcon, ScrollIcon, Bot, Workflow } from "lucide-react";

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
        title: "inicio",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 4,
        title: "trabajos",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/works",
    },
    {
        id: 5,
        title: "contacto",
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
  {
    icon: <Bot />,
    title: "Chatbots",
    description: "Bots para WhatsApp y web que responden consultas, agendan turnos y captan clientes 24/7.",
    image: "",
  },
  {
    icon: <Workflow />,
    title: "Integraciones Backend",
    description: "Conectamos tus sistemas entre sí, por ejemplo tu software de gestión con tu CRM, para que la información fluya sin carga manual.",
    image: "",
  },
];

export const dataPortfolio = [
    {
        id: 13,
        title: "Sitio Web Miraia",
        image: "/webMiraia.webp",
        urlGithub: "",
        urlDemo: "https://miraia.com.ar/",
        category: "Sitios web",
        featured: true,
        description: "Sitio para proveedor de alfombras modulares y piso técnico para arquitectura contract.",
    },
    {
        id: 14,
        title: "Sitio Web Al Galope Yerba Mate",
        image: "/webAlGalope.webp",
        urlGithub: "",
        urlDemo: "https://www.algalopeargentina.com/",
        category: "Sitios web",
        featured: true,
        description: "Sitio bilingüe para marca de yerba mate de Misiones con foco en exportación.",
    },
    {
        id: 12,
        title: "Invitación de 15 · Sarah",
        image: "/web15Sarah.webp",
        urlGithub: "",
        urlDemo: "https://invitaciones.waistenprogramacion.com.ar/15Sarah",
        category: "Invitaciones",
        featured: false,
        description: "Invitación de 15 pensada para celular, con cuenta regresiva y confirmación de asistencia.",
        device: "mobile",
    },
    {
        id: 1,
        title: "Sitio Web Dermatologia Sacco",
        image: "/webDraSacco.png",
        urlGithub: "https://github.com/BorisWaisten/dermatologia-sacco",
        urlDemo: "https://www.dranataliasacco.com/",
        category: "Sitios web",
        featured: true,
        description: "Sitio web profesional para consultorio de dermatología.",
    },
    {
        id: 2,
        title: "Sitio Web The Latin American Islamic Business Center",
        image: "/webLAIBC.webp",
        urlGithub: "https://github.com/BorisWaisten/proyect-apicola",
        urlDemo: "https://latinislamicbusiness.com/",
        category: "Sitios web",
        featured: true,
        description: "Sitio institucional para centro de negocios que impulsa el comercio entre Latinoamérica y los países islámicos.",
    },
    {
            id: 3,
        title: "Pagina Movimiento Vida en Gracia",
        image: "/webMvg.png",
        urlGithub: "https://github.com/LucasWaisten/mvg",
        urlDemo: "https://mvg.com.ar/",
        category: "Sitios web",
        featured: false,
        description: "Sitio web para el Movimiento Vida en Gracia.",
    },
    {
        id: 4,
        title: "Invitacion de Boda",
        image: "/webBoda3.png",
        urlGithub: "https://github.com/BorisWaisten/boda-fran-stefi",
        urlDemo: "https://boda-fran-stefi.vercel.app/",
        category: "Invitaciones",
        featured: false,
        description: "Invitación digital para boda.",
    },
    {
        id: 5,
        title: "Pagina Estudio Diseño Grafico",
        image: "/webEstudioGráfico.png",
        urlGithub: "https://github.com/BorisWaisten/proyect-apicola",
        urlDemo: "https://design.waistenprogramacion.com.ar/",
        category: "Sitios web",
        featured: true,
        description: "Sitio web para estudio de diseño gráfico.",
    },
    {
        id: 6,
        title: "Sitio Web Cámara Argentina de Economías Regionales",
        image: "/webAcrearg.webp",
        urlGithub: "https://github.com/BorisWaisten/proyect-apicola",
        urlDemo: "https://www.acrearg.com/",
        category: "Sitios web",
        featured: false,
        description: "Sitio institucional de la cámara que acompaña a las economías regionales en el proceso exportador.",
    },
    {
        id: 7,
        title: "Invitacion de Boda",
        image: "/webBoda2.png",
        urlGithub: "https://github.com/BorisWaisten/proyect-apicola",
        urlDemo: "https://boda-syd.vercel.app/",
        category: "Invitaciones",
        featured: true,
        description: "Invitación digital para boda.",
    },
    {
        id:8,
        title:"Plataforma de Streaming",
        image:"/webTriduo.png",
        urlGithub:"https://github.com/LucasWaisten/triduo-op-ar",
        urlDemo:"https://hemosvistosugloria.op.org.ar",
        category: "Plataformas",
        featured: true,
        description: "Plataforma de streaming con sistema de donaciones y reproducción de videos.",
    },
    {
        id: 10,
        title: "Sitio Web The Argentine Honey Group",
        image: "/webArgentineHoney.webp",
        urlGithub: "https://github.com/BorisWaisten/proyect-apicola",
        urlDemo: "https://argentinehoney.com/",
        category: "Sitios web",
        featured: false,
        description: "Sitio para grupo de empresas apícolas argentinas que llevan su miel al mundo.",
    },
    {
        id: 11,
        title: "Invitacion de Boda",
        image: "/webBoda.png",
        urlGithub: "https://github.com/BorisWaisten/invitacion-boda",
        urlDemo: "https://martuygino.vercel.app/",
        category: "Invitaciones",
        featured: false,
        description: "Invitación digital para boda.",
    },
];

