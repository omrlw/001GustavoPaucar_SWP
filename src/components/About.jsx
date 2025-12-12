import React from 'react';
import { Building2, GraduationCap, Languages, Award, Stethoscope } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';
import doctorPortrait from '../assets/Gustavo_foto.webp';
import { ABOUT_CONTENT, DOCTOR_DATA } from '../data/content';

const About = () => (
  <section id="nosotros" className="py-24 relative overflow-hidden">

    <div className="container mx-auto px-6 relative z-10">
      <SectionTitle title={ABOUT_CONTENT.title} subtitle={ABOUT_CONTENT.subtitle} />

      <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-center mt-12 mx-auto">
        
        {/* COLUMNA IZQUIERDA: Imagen limpia y destacada */}
        <div className="relative order-2 lg:order-1 flex justify-center">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-200">
              <img
                src={doctorPortrait}
                alt={`Dr. ${DOCTOR_DATA.name}`}
                className="w-100 h-auto object-cover aspect-[3/4] hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              {/* Eliminamos la tarjeta superpuesta redundante para dar limpieza */}
            </div>
            
            {/* Badge flotante decorativo (opcional, pero se ve moderno) */}
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 hidden md:flex items-center gap-3 animate-bounce-slow">
                <div className="bg-green-100 p-2 rounded-full text-green-600">
                    <Stethoscope size={24} />
                </div>
                <div>
                    <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Especialidad</p>
                    <p className="text-sm font-bold text-slate-800">{DOCTOR_DATA.specialty}</p>
                </div>
            </div>
        </div>

        {/* COLUMNA DERECHA: Información y Widgets Unificados */}
        <div className="order-1 lg:order-2 space-y-8">
          
          {/* Cabecera: Nombre y Credenciales */}
          <div className="space-y-4">
            <div className="inline-flex flex-wrap gap-2 mb-2">
               <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                Médico Especialista
              </span>
              <div className="flex gap-2">
                 <a
                  href="https://aplicaciones.cmp.org.pe/conoce_a_tu_medico/datos-colegiado-detallado.php?id=cE9nQnlaek0xZngvK1F4aDVwV29zUT09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-mono border border-slate-200 hover:text-light hover:bg-primary transition-colors"
                 >
                  {DOCTOR_DATA.cmp}
                </a>
                  <a
                  href="https://aplicaciones.cmp.org.pe/conoce_a_tu_medico/datos-colegiado-detallado.php?id=cE9nQnlaek0xZngvK1F4aDVwV29zUT09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-mono border border-slate-200 hover:text-light hover:bg-primary transition-colors"
                  >
                  {DOCTOR_DATA.rne}
                </a>
              </div>
            </div>
            
            <h3 className="font-heading text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              {DOCTOR_DATA.name}
            </h3>
            
            <p className="text-lg text-slate-600 leading-relaxed font-body">
              {DOCTOR_DATA.bio}
            </p>
          </div>

          {/* WIDGETS: Grid unificado para Experiencia y Educación */}
          {/* Al ponerlos juntos con el mismo estilo, se ven ordenados */}
          <div className="grid sm:grid-cols-2 gap-4">
            
            {/* Widget 1: Educación */}
            <div className="bg-slate-50 hover:bg-white hover:shadow-lg transition-all p-6 rounded-2xl border border-slate-100 group">
              <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                <GraduationCap size={20} />
              </div>
              <h4 className="font-bold text-slate-00 mb-2">{ABOUT_CONTENT.featureTitle}</h4>
              <ul className="space-y-2">
                {DOCTOR_DATA.education.slice(0, 3).map((hospital) => ( // Limitamos a 3 para mantener altura
                  <li key={hospital} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    <span className="leading-snug">{hospital}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Widget 2: Experiencia (Antes estaba abajo de la foto y pesaba mucho) */}
            <div className="bg-slate-50 hover:bg-white hover:shadow-lg transition-all p-6 rounded-2xl border border-slate-100 group">
              <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-accent mb-4 group-hover:scale-110 transition-transform">
                <Building2 size={20} />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">{ABOUT_CONTENT.experienceTitle}</h4>
              <ul className="space-y-2">
                {DOCTOR_DATA.hospitals.slice(0, 3).map((hospital) => ( // Limitamos a 3 para mantener altura
                  <li key={hospital} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    <span className="leading-snug">{hospital}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Idiomas: Diseño minimalista */}
          <div className="pt-4 border-t border-slate-100">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 block">Idiomas</span>
            <div className="flex gap-2 flex-wrap">
              {DOCTOR_DATA.languages.map((lang) => (
                <span
                  key={lang}
                  className="px-4 py-1.5 bg-white border border-slate-200 text-slate-600 rounded-full text-sm font-medium flex items-center gap-2 hover:border-primary/50 hover:text-primary transition-colors cursor-default"
                >
                  <Languages size={14} className="text-slate-400" />
                  {lang}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
);

export default About;
