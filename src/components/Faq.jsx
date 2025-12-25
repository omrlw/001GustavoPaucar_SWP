import React, { useState } from 'react';
import { ChevronRight, MapPin, CheckCircle2, MessageCircle } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';
import { FAQ_CONTENT, FAQS } from '../data/content';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-20 overflow-hidden bg-light section-glow border-y border-slate-200/50">

      <div className="container mx-auto px-6 sm:px-8 lg:px-10 max-w-6xl ">
        <div className="scroll-reveal">
          <SectionTitle
            title={FAQ_CONTENT.title}
            subtitle={FAQ_CONTENT.subtitle}
            align="center"
          />
        </div>

        <div className="grid lg:grid-cols-[1.2fr_0.9fr] gap-12 items-start relative">

          {/* COLUMNA IZQUIERDA: ACORDEÓN MEJORADO */}
          <div className="lg:pt-10 pt-4 space-y-4 relative z-10 lg:h-[70vh] lg:overflow-y-auto lg:pr-2 lg:overscroll-contain [overflow-anchor:none] scroll-reveal">
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`group border rounded-2xl overflow-hidden transition-all duration-300 hover-lift ${isOpen
                    ? 'bg-white border-slate-200 shadow-lg shadow-blue-500/5'
                    : 'bg-white border-slate-200 hover:primary'

                    }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    type="button"
                    className="w-full flex justify-between items-center p-5 text-left cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                  >
                    <span className={`font-semibold text-lg pr-4 transition-colors ${isOpen ? 'text-primary' : 'text-primary-hover group-hover:text-primary'
                      }`}>
                      {faq.question}
                    </span>
                    <span className={`flex-shrink-0 ml-2 p-1 rounded-full transition-all duration-300 ${isOpen ? 'bg-accent text-white rotate-180' : 'bg-slate-100 text-secondary group-hover:bg-blue-50'
                      }`}>
                      <ChevronRight size={20} className="transform rotate-90" />
                    </span>
                  </button>

                  {/* Animación Smooth con Grid Rows */}
                  <div
                    id={`faq-panel-${index}`}
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                  >
                    <div className="overflow-hidden">
                      <div className="p-5 pt-0 text-dark/70 leading-relaxed border-t border-transparent">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* COLUMNA DERECHA: DISEÑO PARA IMAGEN TRANSPARENTE (STICKY) */}
          <div className="hidden lg:block relative h-full">
            {/* 'sticky top-24' hace que la imagen te siga al hacer scroll */}
            <div className="sticky top-24 flex justify-center items-end">

              {/* 1. Fondo Decorativo Abstracto (Blob) */}
              <div className="absolute top-10 w-[90%] h-[85%] bg-gradient-to-br from-blue-100 via-indigo-50 to-white rounded-[40px] rotate-3 -z-10 border border-blue-50"></div>
              <div className="absolute top-8 w-[90%] h-[85%] bg-blue-200/20 rounded-[40px] -rotate-2 -z-20 blur-sm"></div>

              {/* 2. Imagen Transparente */}
              <img
                className="w-auto h-auto max-h-[550px] object-contain drop-shadow-2xl relative z-0 mx-auto transform transition-transform duration-700 hover:scale-[1.02]"
                src="/images/asset1.png"
                alt="Dr. Gustavo Paucar preguntas frecuentes"
                loading="lazy"
                decoding="async"
                width={466}
                height={700}
              />

              {/* 3. Tarjetas Flotantes "Glassmorphism" */}

              {/* Tarjeta: Ubicación */}
              <div className="absolute top-24 -right-4 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-white/50 animate-bounce-slow z-10 max-w-[180px]">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-100 rounded-full text-blue-600">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-800">Ubicación</p>
                    <p className="text-xs text-slate-500">Consultorio en Arequipa</p>
                  </div>
                </div>
              </div>

              {/* Tarjeta: Contacto */}
              <div className="absolute bottom-16 -left-8 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 z-20">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-full text-green-600">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800">¿Dudas?</p>
                    <p className="text-xs text-slate-500">Contáctanos al WhatsApp</p>
                  </div>
                </div>
              </div>

              {/* Tarjeta: Especialista */}
              <div className="absolute bottom-6 right-8 bg-slate-800 text-white px-4 py-2 rounded-full shadow-lg z-20 flex items-center gap-2">
                <CheckCircle2 size={14} className="text-green-400" />
                <span className="text-xs font-medium">Atención Especializada</span>
              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default Faq;
