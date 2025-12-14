import React from 'react';
import {
  MapPin,
  MessageCircleMore,
  HeartHandshake,
  Star,
  Clock,
  BadgeCheck,
  Users,
} from 'lucide-react';
import heroImg512 from '../assets/galeneImage2-512.webp';
import heroImg768 from '../assets/galeneImage2-768.webp';
import heroImg1024 from '../assets/galeneImage2-1024.webp';
import Button from './ui/Button';
import { HERO_CONTENT } from '../data/content';
import doctoraliaLogo from '../assets/docplanner.png';

const Hero = () => (
  <header id="inicio" className="relative pt-32 pb-16 sm:pt-36 lg:pt-40 lg:pb-32 overflow-hidden">
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {/* Background blur glow - full hero */}
      <div className="absolute inset-0 bg-secondary/10 blur-3xl" />

      <div className="hero-aurora" />
      <div className="hero-aurora hero-aurora-2" />
      <div className="hero-aurora hero-aurora-3" />

      {/* Decorative glowing rings - full hero background */}
      <div className="hero-ring hero-ring-1" />
      <div className="hero-ring hero-ring-2" />
      <div className="hero-ring hero-ring-3" />

      {/* Floating particles */}
      <div className="hero-particle hero-particle-1" />
      <div className="hero-particle hero-particle-2" />
      <div className="hero-particle hero-particle-3" />
      <div className="hero-particle hero-particle-4" />
      <div className="hero-particle hero-particle-5" />
    </div>

    {/* Section */}
    <div className="container mx-auto px-6 sm:px-8 lg:px-10 max-w-7xl">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16 xl:gap-20 relative z-10">

        {/* 1 */}
        <div className="w-full lg:w-[44%] xl:w-[42%] space-y-7 lg:space-y-8 animate-in slide-in-from-left duration-700 max-w-xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-semibold tracking-wider uppercase font-body">
            <HeartHandshake size={14} />
            {HERO_CONTENT.badge}
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight text-dark leading-[1.1] drop-shadow-[0_4px_16px_rgba(6,65,104,0.08)]">
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
              className="w-full sm:w-auto justify-center"
            >
              <MapPin />
              {HERO_CONTENT.primaryCta.label}
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
              <MessageCircleMore />
              {HERO_CONTENT.secondaryCta.label}
            </Button>
          </div>

          <a
            href="https://www.doctoralia.pe/gustavo-paucar-chavez/psiquiatra/arequipa#profile-info"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 mt-3 w-fit px-5 py-2.5 rounded-full bg-white/90 border border-slate-200 text-dark shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
          >
            <img
              src={doctoraliaLogo}
              alt="Doctoralia"
              className="w-5 h-5"
              width={20}
              height={20}
              decoding="async"
            />
            <div className="flex items-center gap-2 text-sm font-medium flex-wrap">
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
          <div className="relative z-10 rounded-2xl overflow-hidden xl:-mr-16 w-full max-w-xl lg:max-w-none mx-auto hero-image-container aspect-square">
            <img
              src={heroImg768}
              srcSet={`${heroImg512} 512w, ${heroImg768} 768w, ${heroImg1024} 1024w`}
              sizes="(min-width: 1280px) 664px, (min-width: 1024px) 560px, (min-width: 640px) 512px, 100vw"
              alt="Instalaciones y equipo de Galene Salud Mental"
              className="absolute inset-0 w-full h-full object-cover p-2"
              width={768}
              height={768}
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </div>

          {/* Trust badge widget */}
          <div
            className="hidden lg:block absolute -top-2 -right-2 xl:-right-8 bg-white/98 p-4 rounded-2xl shadow-xl border border-slate-100/80 z-20 animate-float-slow"
            style={{ animationDelay: '-2s' }}
          >
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-gradient-to-br from-accent to-secondary rounded-full text-white shadow-lg shadow-accent/25">
                <BadgeCheck size={18} aria-hidden />
              </div>
              <div>
                <p className="text-xs font-bold text-accent uppercase tracking-wider">Verificado</p>
                <p className="text-sm font-bold text-slate-800">Médico Colegiado</p>
              </div>
            </div>
          </div>

          {/* Patients counter widget - mid left */}
          <div className="hidden lg:block absolute top-1/3 -left-1 bg-white/98 p-3 rounded-xl shadow-xl border border-slate-100/80 z-20 animate-pulse-gentle">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-[10px] font-bold ring-2 ring-white">+</div>
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center text-white text-[10px] font-bold ring-2 ring-white">
                  <Users size={10} />
                </div>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-800">100+</p>
                <p className="text-xs font-semibold text-slate-800">Pacientes atendidos</p>
              </div>
            </div>
          </div>
          {/* Primera Consulta */}
          <div className="absolute bottom-6 left-4 sm:left-8 bg-white/98 p-4 rounded-2xl shadow-xl border border-slate-100 z-20 max-w-[220px] animate-float-slow">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-primary rounded-full text-white shadow-lg shadow-primary/25">
                <Clock size={18} aria-hidden />
              </div>
              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-wider">
                  {HERO_CONTENT.floatingCard.title}
                </p>
                <p className="text-sm font-bold text-slate-800">
                  {HERO_CONTENT.floatingCard.note}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Hero;
