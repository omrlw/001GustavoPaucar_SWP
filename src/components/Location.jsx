import React from 'react';
import { ArrowRight, Clock, MapPin, Phone } from 'lucide-react';
import { BRAND_INFO, LOCATION_CONTENT, LOCATION_LABELS } from '../data/content';

const Location = () => (
  <section id="ubicacion" className="py-0 flex flex-col lg:flex-row min-h-[600px] relative">
    <div className="lg:w-1/2 bg-primary text-white p-12 lg:p-24 flex flex-col justify-center relative overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 20%, white 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
        aria-hidden
      />

      <div className="relative z-10">
        <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-8">{LOCATION_CONTENT.title}</h2>

        <div className="space-y-8 font-body">
          <div className="flex gap-4 group">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
              <MapPin size={20} aria-hidden />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{LOCATION_LABELS.addressLabel}</h3>
              <p className="text-blue-100 leading-relaxed max-w-sm">
                {BRAND_INFO.address}
                <br />
                <span className="text-sm opacity-70 mt-1 block">{LOCATION_CONTENT.directionsNote}</span>
              </p>
            </div>
          </div>

          <div className="flex gap-4 group">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
              <Phone size={20} aria-hidden />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{LOCATION_LABELS.contactLabel}</h3>
              <p className="text-blue-100 text-2xl font-light tracking-wide">{BRAND_INFO.phone}</p>
              <p className="text-blue-200 text-sm mt-1">{LOCATION_LABELS.contactNote}</p>
            </div>
          </div>

          <div className="flex gap-4 group">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
              <Clock size={20} aria-hidden />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{LOCATION_LABELS.scheduleLabel}</h3>
              <p className="text-blue-100">{BRAND_INFO.schedule}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="lg:w-1/2 bg-slate-200 relative h-[400px] lg:h-auto">
      <div className="w-full h-full bg-slate-300 flex items-center justify-center relative overflow-hidden group">
        <img
          src={LOCATION_CONTENT.mapImage}
          alt="Imagen referencial de la ubicación del consultorio en Arequipa"
          className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
          loading="lazy"
        />
        <div className="relative z-10 bg-white p-6 rounded-xl shadow-2xl text-center transform group-hover:scale-105 transition-transform duration-300">
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
  </section>
);

export default Location;
