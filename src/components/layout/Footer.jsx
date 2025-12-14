import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, MapPin } from 'lucide-react';
import {
  BRAND_INFO,
  DOCTOR_DATA,
  FOOTER_CONTENT,
  FOOTER_LABELS,
  NAV_LINKS,
} from '../../data/content';
import logoGalene from '../../assets/LogoGaleneOscuro.svg';
import docplannerLogo from '../../assets/docplanner.webp';

const Footer = () => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Facebook': return <Facebook size={18} />;
      case 'Instagram': return <Instagram size={18} />;
      case 'Linkedin': return <Linkedin size={18} />;
      case 'Maps': return <MapPin size={18} />;
      case 'Doctoralia':
        return (
          <img
            src={docplannerLogo}
            alt="Doctoralia"
            className="w-4 h-4 object-contain brightness-0 invert opacity-60 group-hover:opacity-100"
          />
        );
      default: return null;
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800 font-body text-sm ">
      <div className="container mx-auto px-6 ">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <img
                src={logoGalene}
                alt={BRAND_INFO.name}
                className="h-10 w-auto opacity-90 hover:opacity-100 transition-opacity brightness-0 invert"
              />
            </Link>
            <p className="max-w-xs text-slate-500 mb-6">{FOOTER_CONTENT.mission}</p>
            <div className="flex gap-4">
              {FOOTER_CONTENT.social.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-slate-800 hover:bg-accent hover:text-white transition-colors cursor-pointer flex items-center justify-center text-slate-400"
                  aria-label={social.label}
                >
                  {getIcon(social.icon)}
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
                    href={item.href.startsWith('#') ? `/${item.href}` : item.href}
                    className="hover:text-accent transition-colors"
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
                  <Link
                    to={item.href}
                    className="hover:text-accent transition-colors"
                  >
                    {item.label}
                  </Link>
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
};

export default Footer;
