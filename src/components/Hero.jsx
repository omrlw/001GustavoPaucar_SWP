import React from 'react';
import { CalendarSearch, MessageCircleMore, HeartHandshake, ChevronRight, Star } from 'lucide-react';
import heroImg from '../assets/galeneImage2.webp';
import Button from './ui/Button';
import { HERO_CONTENT } from '../data/content';
import doctoraliaLogo from '../assets/docplanner.png';

const Hero = () => (
  <header id="inicio" className="relative pt-32 pb-16 sm:pt-36 lg:pt-40 lg:pb-32 bg-light overflow-hidden">
      
      {/* --- FONDO MEJORADO (Coherente con la sección About) --- */}
    <div className="absolute inset-0 pointer-events-none">
      {/* Degradado base suave */}
      <div className="absolute inset-0 bg-gradient-to-b from-teal-50/40 via-white to-slate-50/30" />
      
      {/* Patrón Grid: Aporta estructura técnica/científica */}
      <div className="absolute inset-0 opacity-[0.03]" 
            style={{ 
              backgroundImage: 'radial-gradient(#0d9488 1px, transparent 1px)', 
              backgroundSize: '24px 24px' 
            }} 
      />
      
      {/* Luces Ambientales (Blobs): Aportan calidez */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-teal-100/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
    </div>

    {/* Section */}
    <div className="container mx-auto px-6 sm:px-8 lg:px-10 max-w-7xl">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16 xl:gap-20 relative z-10">
        
        {/* 1 */}
        <div className="w-full lg:w-[44%] xl:w-[42%] space-y-7 lg:space-y-8 animate-in slide-in-from-left duration-700 max-w-xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-semibold tracking-wider uppercase font-body">
            <HeartHandshake size={14}/>
            {HERO_CONTENT.badge}
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-dark leading-[1.1] drop-shadow-[0_4px_16px_rgba(6,65,104,0.08)]">
            {HERO_CONTENT.titlePrefix}
            <br />
            <span className="text-primary italic">{HERO_CONTENT.highlight}</span>{' '}
            {HERO_CONTENT.titleSuffix}
          </h1>
          <p className="font-body text-base sm:text-lg text-dark leading-relaxed max-w-lg border-l-4 border-accent pl-5 sm:pl-6 drop-shadow-[0_2px_12px_rgba(6,65,104,0.06)]">
            {HERO_CONTENT.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 w-full">
            <Button
              as="a"
              href={HERO_CONTENT.primaryCta.href}
              ariaLabel={HERO_CONTENT.primaryCta.ariaLabel}
              className="w-full sm:w-auto justify-center shadow-md shadow-primary/14"
            >
            <CalendarSearch/>
  
              {HERO_CONTENT.primaryCta.label} <ChevronRight size={18} aria-hidden />
            </Button>
            <Button
              as="a"
              href={HERO_CONTENT.secondaryCta.href}
              variant="ghost"
              ariaLabel={HERO_CONTENT.secondaryCta.ariaLabel}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto justify-center"
            >
            <MessageCircleMore/>
              {HERO_CONTENT.secondaryCta.label}
            </Button>
          </div>
          <a
            href="https://www.doctoralia.pe/gustavo-paucar-chavez/psiquiatra/arequipa#profile-info"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 mt-3 w-fit px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 text-dark shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
          >
            <img src={doctoraliaLogo} alt="Doctoralia" className="w-5 h-5" loading="lazy" />
            <div className="flex items-center gap-2 text-sm font-medium">
              <span className="text-dark/60">Ver perfil en</span>
              <span className="text-primary font-semibold">Doctoralia</span>
              <span className="w-px h-5 bg-slate-200" aria-hidden />
              <span className="flex items-center gap-1 text-amber-400" aria-label="5 de 5 estrellas">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} size={14} className="fill-current" />
                ))}
              </span>
            </div>
          </a>
        </div>


        {/* 2 Image */}
        <div className="w-full lg:w-[56%] xl:w-[50%] relative animate-in zoom-in duration-700 delay-200">
          <div className="absolute inset-0 -right-10 -z-10 rounded-[32px] bg-secondary/10 blur-3xl" />
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-[0_30px_60px_-35px_rgba(15,23,42,0.55)] bg-white/40 backdrop-blur-sm xl:-mr-16 max-w-xl lg:max-w-none mx-auto">
            <img
              src={heroImg}
              alt="Instalaciones y equipo de Galene Salud Mental"
              className="w-auto h-auto rounded-2xl object-cover aspect-square"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Hero;
