import React from 'react';
import { BRAND_INFO, WHATSAPP_TOOLTIP } from '../data/content';
import WhatsApp from '../assets/icons_whatsapp.svg';

const FloatingWhatsApp = () => (
  <a
    href={BRAND_INFO.whatsappLink}
    target="_blank"
    rel="noreferrer"
    className="fixed bottom-4 right-4 sm:bottom-10 sm:right-10 z-50 bg-[#25D366] text-white p-3 sm:p-4 rounded-full shadow-2xl hover:scale-110 hover:shadow-green-500/30 transition-all duration-300 flex items-center justify-center group focus:outline-none focus:ring-4 focus:ring-[#25D366]/50 animate-pulse-green"
    aria-label="Contactar por WhatsApp"
  >
    <img
      src={WhatsApp}
      alt=""
      aria-hidden
      className="w-10 h-10"
      width={40}
      height={40}
      decoding="async"
    />
    <span className="absolute right-full mr-4 bg-white text-slate-800 px-3 py-1 rounded-lg text-sm font-medium shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
      {WHATSAPP_TOOLTIP}
    </span>
  </a>
);

export default FloatingWhatsApp;
