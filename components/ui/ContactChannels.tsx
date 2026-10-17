"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Check, Copy, Mail } from "lucide-react";
import WhatsAppIcon from "@/components/brand/WhatsAppIcon";
import { CONTACT_EMAIL, WHATSAPP_DISPLAY, mailtoUrl, whatsappUrl } from "@/config/contact";

const ease = [0.16, 1, 0.3, 1] as const;

export default function ContactChannels() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <motion.a
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease }}
        className="card group relative flex flex-col gap-6 overflow-hidden p-6 hover:border-[#25D366]/50 md:p-8"
      >
        <div className="flex items-center justify-between">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#25D366]/15 text-[#25D366] transition-transform duration-500 group-hover:scale-110">
            <WhatsAppIcon className="h-6 w-6" />
          </span>
          <ArrowUpRight className="h-5 w-5 text-neutral-500 transition-all duration-300 group-hover:rotate-45 group-hover:text-[#25D366]" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-white">WhatsApp</h2>
          <p className="mt-1 text-sm text-neutral-400">La forma más rápida. Escribime y te respondo a la brevedad.</p>
          <p className="mt-4 font-display text-2xl tracking-wide text-white">{WHATSAPP_DISPLAY}</p>
        </div>
      </motion.a>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.25, ease }}
        className="card group relative flex flex-col gap-6 overflow-hidden p-6 md:p-8"
      >
        <div className="flex items-center justify-between">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#48bfda]/15 text-[#48bfda] transition-transform duration-500 group-hover:scale-110">
            <Mail className="h-6 w-6" />
          </span>
          <button
            type="button"
            onClick={copyEmail}
            className="flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1 text-xs text-neutral-300 transition-colors hover:border-[#48bfda]/60 hover:text-white"
          >
            {copied ? <Check className="h-3.5 w-3.5 text-[#48bfda]" /> : <Copy className="h-3.5 w-3.5" />}
            {copied ? "¡Copiado!" : "Copiar"}
          </button>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-white">Mail</h2>
          <p className="mt-1 text-sm text-neutral-400">Ideal para contarme tu proyecto con detalle o enviar archivos.</p>
          <a
            href={mailtoUrl()}
            className="mt-4 inline-block break-all font-display text-2xl tracking-wide text-white transition-colors hover:text-[#48bfda]"
          >
            {CONTACT_EMAIL}
          </a>
        </div>
      </motion.div>
    </div>
  );
}
