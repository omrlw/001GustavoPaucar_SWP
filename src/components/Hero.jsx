import React from 'react';
import { ChevronRight, Star } from 'lucide-react';
import heroImg from '../assets/Gustavo_foto.webp';
import Button from './ui/Button';
import { BRAND_INFO, DOCTOR_DATA, HERO_CONTENT } from '../data/content';

const Hero = () => (
  <header id="inicio" className="relative pt-40 pb-20 lg:pt-56 lg:pb-32 bg-light overflow-hidden">
    <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/10 -z-10 rounded-l-full opacity-70" />
    <div className="absolute bottom-10 left-10 w-64 h-64 bg-accent/15 rounded-full blur-3xl -z-10" />

    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div className="lg:w-1/2 space-y-8 animate-in slide-in-from-left duration-700">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-semibold tracking-wider uppercase font-body">
            <Star size={12} className="fill-current" aria-hidden />
            {HERO_CONTENT.badge}
          </div>
          <h1 className="font-heading text-5xl lg:text-7xl font-bold text-dark leading-[1.1]">
            {HERO_CONTENT.titlePrefix}
            <br />
            <span className="text-primary italic">{HERO_CONTENT.highlight}</span>{' '}
            {HERO_CONTENT.titleSuffix}
          </h1>
          <p className="font-body text-lg text-dark/70 leading-relaxed max-w-lg border-l-4 border-[var(--accent)] pl-6">
            {HERO_CONTENT.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              as="a"
              href={HERO_CONTENT.primaryCta.href}
              ariaLabel={HERO_CONTENT.primaryCta.ariaLabel}
            >
              {HERO_CONTENT.primaryCta.label} <ChevronRight size={18} aria-hidden />
            </Button>
            <Button
              as="a"
              href={HERO_CONTENT.secondaryCta.href}
              variant="ghost"
              ariaLabel={HERO_CONTENT.secondaryCta.ariaLabel}
              target="_blank"
              rel="noreferrer"
            >
              {HERO_CONTENT.secondaryCta.label}
            </Button>
          </div>
        </div>

        <div className="lg:w-1/2 relative animate-in zoom-in duration-700 delay-200">
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl bg-white p-2">
            <img
              src={heroImg}
              alt="Retrato profesional del Dr. Gustavo Paucar Chávez"
              className="w-full h-auto rounded-xl object-cover aspect-[4/5]"
              loading="lazy"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur p-4 rounded-lg border border-slate-100 shadow-lg">
              <p className="font-heading text-xl font-bold text-primary">{DOCTOR_DATA.name}</p>
              <p className="text-sm text-slate-500 font-body">{DOCTOR_DATA.specialty}</p>
              <div className="flex gap-3 mt-2 text-xs text-slate-500 font-mono" aria-label="Registro profesional">
                <span>{DOCTOR_DATA.cmp}</span>
                <span aria-hidden>•</span>
                <span>{DOCTOR_DATA.rne}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Hero;
