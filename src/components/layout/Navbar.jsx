import React from 'react';
import { Phone, Menu, X } from 'lucide-react';
import logoGalene from '../../assets/LogoGaleneOscuro.svg';
import { BRAND_INFO, NAV_LINKS, UI_TEXT } from '../../data/content';

const Navbar = ({ scrolled, isMenuOpen, onToggleMenu, onCloseMenu }) => (
  <nav
    className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'bg-primary shadow-lg py-2 top-0' : 'bg-primary py-6 top-0'
      }`}
  >
    <div className="container mx-auto px-6 flex justify-between items-center text-white">
      <div className="flex items-center gap-3">
        <img
          src={logoGalene}
          alt="Logotipo de Galene"
          className="h-12 w-auto object-contain"
          width={216}
          height={48}
          decoding="async"
        />
        <span className="sr-only">{`${BRAND_INFO.name} - ${BRAND_INFO.tagline}`}</span>
      </div>

      <div className="hidden md:flex items-center gap-8 font-body text-sl font-medium">
        {NAV_LINKS.map((item) => (
          <a
            key={item.label}
            href={item.href.startsWith('#') ? `/${item.href}` : item.href}
            className="text-white hover:text-accent transition-colors"
            aria-label={`Ir a la sección ${item.label}`}
          >
            {item.label}
          </a>
        ))}
        <a
          href={`tel:${BRAND_INFO.phone.replace(/\s/g, '')}`}
          className="px-5 py-2 bg-accent text-white rounded-full hover:bg-accent/90 transition-all shadow-md flex items-center gap-2 text-xs uppercase tracking-wide focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent focus:ring-offset-primary/40"
          aria-label="Llamar para agendar cita"
        >
          <Phone size={14} aria-hidden />
          {UI_TEXT.navCta}
        </a>
      </div>

      <button
        onClick={onToggleMenu}
        className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary focus:ring-offset-primary/40"
        aria-label={isMenuOpen ? 'Cerrar menú móvil' : 'Abrir menú móvil'}
        aria-expanded={isMenuOpen}
      >
        {isMenuOpen ? <X size={28} aria-hidden /> : <Menu size={28} aria-hidden />}
      </button>
    </div>

    {isMenuOpen && (
      <div className="absolute top-full left-0 w-full bg-primary text-white shadow-xl border-t border-primary/20 md:hidden flex flex-col p-6 gap-4 font-body animate-in slide-in-from-top-5">
        {NAV_LINKS.map((item) => (
          <a
            key={item.label}
            href={item.href.startsWith('#') ? `/${item.href}` : item.href}
            onClick={onCloseMenu}
            className="text-lg text-white py-2 border-b border-white/10"
            aria-label={`Ir a la sección ${item.label}`}
          >
            {item.label}
          </a>
        ))}
      </div>
    )}
  </nav>
);

export default Navbar;
