import React from 'react';
import {
  BRAND_INFO,
  DOCTOR_DATA,
  FOOTER_CONTENT,
  FOOTER_LABELS,
  NAV_LINKS,
} from '../../data/content';

const Footer = () => (
  <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800 font-body text-sm ">
    <div className="container mx-auto px-6 ">
      <div className="grid md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-2">
          <h2 className="font-heading text-3xl font-semibold text-white mb-4 tracking-wide">
            {BRAND_INFO.name}
          </h2>
          <p className="max-w-xs text-slate-500 mb-6">{FOOTER_CONTENT.mission}</p>
          <div className="flex gap-4">
            {[
              { href: BRAND_INFO.whatsappLink, label: 'Contactar por WhatsApp' },
              { href: `tel:${BRAND_INFO.phone.replace(/\s/g, '')}`, label: 'Llamar al consultorio' },
              { href: BRAND_INFO.mapLink, label: 'Ver ubicación en Google Maps' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-accent hover:text-white transition-colors cursor-pointer flex items-center justify-center"
                aria-label={link.label}
              >
                <span className="sr-only">{link.label}</span>
                <div className="w-4 h-4 bg-current rounded-full opacity-50" aria-hidden />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">
            {FOOTER_LABELS.links}
          </h3>
          <ul className="space-y-2">
            {NAV_LINKS.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="hover:text-accent transition-colors"
                  aria-label={`Ir a ${item.label} desde el pie de página`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">
            {FOOTER_LABELS.legal}
          </h3>
          <ul className="space-y-2">
            {FOOTER_CONTENT.legal.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="hover:text-accent transition-colors"
                  aria-label={item.label}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <span className="text-slate-500">{DOCTOR_DATA.cmp}</span>
            </li>
            <li>
              <span className="text-slate-500">{DOCTOR_DATA.rne}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="pt-8 border-t border-slate-800 text-center flex flex-col md:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} {DOCTOR_DATA.name}. Todos los derechos reservados.</p>
        <p className="text-slate-600">Diseñado con dedicación en Arequipa.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
