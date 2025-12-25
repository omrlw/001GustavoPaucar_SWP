import React from 'react';
import { MessageCircle, Menu, X, ArrowRight, Phone, MapPin, Clock } from 'lucide-react';
import { BRAND_INFO, NAV_LINKS, UI_TEXT } from '../../data/content';

const Navbar = ({ scrolled, isMenuOpen, onToggleMenu, onCloseMenu }) => (
  <nav
    className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'bg-primary/95 backdrop-blur-md shadow-lg py-2 top-0' : 'bg-primary py-4 top-0'
      }`}
  >
    <div className="container mx-auto px-6 flex justify-between items-center text-white">
      <a href="/" className="flex items-center gap-3 group">
        <img
          src="/images/LogoGaleneOscuro.svg"
          alt="Logotipo de Galene"
          className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          width={216}
          height={40}
          decoding="async"
        />
        <span className="sr-only">{`${BRAND_INFO.name} - ${BRAND_INFO.tagline}`}</span>
      </a>

      <div className="hidden md:flex items-center gap-6 font-body text-sm font-medium">
        {NAV_LINKS.map((item) => (
          <a
            key={item.label}
            href={item.href.startsWith('#') ? `/${item.href}` : item.href}
            className="text-white/90 hover:text-white transition-colors relative group py-1"
            aria-label={`Ir a la sección ${item.label}`}
          >
            {item.label}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
          </a>
        ))}
        <a
          href={BRAND_INFO.whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="ml-2 px-5 py-2.5 bg-gradient-to-r from-secondary to-accent text-white rounded-full hover:shadow-lg hover:shadow-secondary/30 transition-all duration-300 flex items-center gap-2 text-sm font-semibold hover:scale-105 hover-shine"
          aria-label="Agendar cita por WhatsApp"
        >
          <MessageCircle size={16} aria-hidden />
          {UI_TEXT.navCta}
          <ArrowRight size={14} className="ml-1 transition-transform group-hover:translate-x-1" aria-hidden />
        </a>
      </div>

      <button
        onClick={onToggleMenu}
        className="md:hidden text-white p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-secondary"
        aria-label={isMenuOpen ? 'Cerrar menú móvil' : 'Abrir menú móvil'}
        aria-expanded={isMenuOpen}
      >
        {isMenuOpen ? <X size={24} aria-hidden /> : <Menu size={24} aria-hidden />}
      </button>
    </div>

    {/* Mobile Menu - Enhanced */}
    {isMenuOpen && (
      <div className="absolute top-full left-0 w-full bg-gradient-to-b from-primary to-primary/95 backdrop-blur-md text-white shadow-2xl md:hidden animate-in slide-in-from-top-2 duration-200">
        <div className="container mx-auto px-6 py-6 flex flex-col gap-1">
          {NAV_LINKS.map((item, index) => (
            <a
              key={item.label}
              href={item.href.startsWith('#') ? `/${item.href}` : item.href}
              onClick={onCloseMenu}
              className="text-lg text-white/90 hover:text-white py-3 px-4 rounded-xl hover:bg-white/10 transition-all duration-200 flex items-center gap-3"
              aria-label={`Ir a la sección ${item.label}`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              {item.label}
            </a>
          ))}

          {/* Separator */}
          <div className="my-3 border-t border-white/10" />

          {/* Contact Info */}
          <div className="px-4 py-2 space-y-3 text-sm text-white/70">
            <div className="flex items-center gap-3">
              <Phone size={14} className="text-secondary" />
              <span>{BRAND_INFO.phone}</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock size={14} className="text-secondary" />
              <span>Lun - Sáb: 9am - 8pm</span>
            </div>
          </div>

          {/* CTA Button */}
          <a
            href={BRAND_INFO.whatsappLink}
            target="_blank"
            rel="noreferrer"
            onClick={onCloseMenu}
            className="mt-4 w-full py-3.5 bg-gradient-to-r from-secondary to-accent text-white rounded-xl font-semibold text-center flex items-center justify-center gap-2 shadow-lg hover:shadow-secondary/30 transition-all"
          >
            <MessageCircle size={18} />
            Agendar por WhatsApp
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    )}
  </nav>
);

export default Navbar;
