// Datos de contacto públicos del sitio
export const WHATSAPP_NUMBER = "5493446575620";
export const WHATSAPP_DISPLAY = "+54 9 3446 57-5620";
export const CONTACT_EMAIL = "boriswaisten@gmail.com";

const DEFAULT_WHATSAPP_MESSAGE = "Hola Boris, vi tu web y quiero consultarte por un proyecto.";

export const whatsappUrl = (message = DEFAULT_WHATSAPP_MESSAGE) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const mailtoUrl = (subject = "Consulta desde la web") =>
  `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;
