import React from 'react';
import { ArrowRight, Clock, MapPin, Phone } from 'lucide-react';
import { BRAND_INFO, LOCATION_CONTENT, LOCATION_LABELS } from '../data/content';

const Location = () => (
  <section id="ubicacion" className="py-16 sm:py-20 bg-primary relative overflow-hidden text-white">
    {/* Fondo decorativo */}
    <div
      className="absolute inset-0 opacity-10 pointer-events-none"
      style={{
        backgroundImage: 'radial-gradient(circle at 20% 20%, white 1px, transparent 1px)',
        backgroundSize: '30px 30px',
      }}
    />
    {/* Círculos decorativos sutiles */}
    <div className="absolute top-10 right-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
    <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl" />

    <div className="container mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
      {/* Header con subtítulo */}
      <div className="text-center mb-10 lg:mb-12">
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-3">
          {LOCATION_CONTENT.title}
        </h2>
        <p className="text-lg text-blue-100 font-light">
          {LOCATION_CONTENT.subtitle}
        </p>
        {/* Línea decorativa */}
        <div className="flex items-center justify-center gap-3 mt-5">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-secondary/50" />
          <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-secondary/50" />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-stretch">
        {/* Tarjetas de información */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          <div className="space-y-5 font-body">
            {/* Tarjeta Dirección */}
            <div className="group bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all duration-300">
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform duration-300">
                  <MapPin size={20} aria-hidden />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold mb-1 text-white">{LOCATION_LABELS.addressLabel}</h3>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    {BRAND_INFO.address}
                  </p>
                  <span className="text-xs text-blue-200/60 mt-1 block">{LOCATION_CONTENT.directionsNote}</span>
                </div>
              </div>
            </div>

            {/* Tarjeta Contacto */}
            <div className="group bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all duration-300">
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform duration-300">
                  <Phone size={20} aria-hidden />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold mb-1 text-white">{LOCATION_LABELS.contactLabel}</h3>
                  <p className="text-white text-xl font-medium tracking-wide">{BRAND_INFO.phone}</p>
                  <p className="text-blue-200/70 text-xs mt-1 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                    {LOCATION_LABELS.contactNote}
                  </p>
                </div>
              </div>
            </div>

            {/* Tarjeta Horario */}
            <div className="group bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all duration-300">
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform duration-300">
                  <Clock size={20} aria-hidden />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold mb-1 text-white">{LOCATION_LABELS.scheduleLabel}</h3>
                  <p className="text-blue-100 text-sm">{BRAND_INFO.schedule}</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-6 text-center lg:text-left">
            <a
              href={BRAND_INFO.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-secondary/20 hover:scale-105 text-sm"
            >
              <span>Escríbenos por WhatsApp</span>
              <ArrowRight size={16} aria-hidden />
            </a>
          </div>
        </div>

        {/* Mapa */}
        <div className="lg:w-1/2">
          <div className="w-full h-[360px] lg:h-full min-h-[360px] bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-xl relative group">
            <iframe
              title="Mapa del consultorio en Arequipa"
              src={"https://maps.google.com/maps?q=M%C3%A9dico%20Psiquiatra%20Dr.%20Gustavo%20Paucar%20Arequipa&t=&z=15&ie=UTF8&iwloc=&output=embed"}
              loading="lazy"
              className="absolute inset-0 w-full h-full"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Overlay con información */}
            <div className="absolute bottom-3 left-3 right-3 z-10">
              <div className="bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-slate-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-slate-800 text-sm">{LOCATION_CONTENT.mapCta}</p>
                    <p className="text-slate-500 text-xs">Obtén indicaciones para llegar</p>
                  </div>
                  <a
                    href={BRAND_INFO.mapLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-primary hover:bg-primary/90 text-white rounded-lg transition-all duration-300 hover:scale-105"
                    aria-label={LOCATION_CONTENT.mapCta}
                  >
                    <ArrowRight size={18} aria-hidden />
                  </a>
                </div>
              </div>
            </div>
            {/* Badge decorativo superior */}
            <div className="absolute top-3 left-3 z-10 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
              <MapPin size={14} className="text-primary" aria-hidden />
              <span className="text-xs font-medium text-slate-700">Arequipa, Perú</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Location;
