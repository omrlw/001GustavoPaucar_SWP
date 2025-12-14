import React from 'react';
import { ArrowRight, Clock, MapPin, Phone } from 'lucide-react';
import { BRAND_INFO, LOCATION_CONTENT, LOCATION_LABELS } from '../data/content';

const Location = () => (
  <section id="ubicacion" className="py-20 bg-primary relative overflow-hidden text-white cv-auto">
    <div
      className="absolute inset-0 opacity-10 pointer-events-none"
      style={{
        backgroundImage: 'radial-gradient(circle at 20% 20%, white 1px, transparent 1px)',
        backgroundSize: '30px 30px',
      }}
    />
    <div className="container mx-auto px-6 relative z-10">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
        <div className="lg:w-1/2 flex flex-col justify-center">
          <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-8">
            {LOCATION_CONTENT.title}
          </h2>

          <div className="space-y-8 font-body">
            <div className="flex gap-4 group">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                <MapPin size={20} aria-hidden />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{LOCATION_LABELS.addressLabel}</h3>
                <p className="text-blue-50 leading-relaxed max-w-sm">
                  {BRAND_INFO.address}
                  <br />
                  <span className="text-sm opacity-80 mt-1 block">{LOCATION_CONTENT.directionsNote}</span>
                </p>
              </div>
            </div>

            <div className="flex gap-4 group">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                <Phone size={20} aria-hidden />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{LOCATION_LABELS.contactLabel}</h3>
                <p className="text-white text-2xl font-light tracking-wide">{BRAND_INFO.phone}</p>
                <p className="text-blue-100 text-sm mt-1">{LOCATION_LABELS.contactNote}</p>
              </div>
            </div>

            <div className="flex gap-4 group">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                <Clock size={20} aria-hidden />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{LOCATION_LABELS.scheduleLabel}</h3>
                <p className="text-blue-50">{BRAND_INFO.schedule}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2">
          <div className="w-full h-[360px] lg:h-full bg-white/10 rounded-3xl overflow-hidden shadow-2xl relative group">
            <iframe
              title="Mapa del consultorio en Arequipa"
              src={`https://www.google.com/maps?q=${encodeURIComponent(BRAND_INFO.address)}&output=embed`}
              loading="lazy"
              className="absolute inset-0 w-full h-full"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="relative z-10 bg-white p-6 rounded-xl shadow-xl text-center transform group-hover:scale-105 transition-transform duration-300">
              <p className="font-bold text-slate-800 text-lg mb-2">{LOCATION_CONTENT.mapCta}</p>
              <a
                href={BRAND_INFO.mapLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                aria-label={LOCATION_CONTENT.mapCta}
              >
                {LOCATION_CONTENT.mapLinkLabel} <ArrowRight size={16} aria-hidden />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Location;
