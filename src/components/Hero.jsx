import React from 'react';
import { CalendarSearch, MessageCircleMore, HeartHandshake, Brain, ChevronRight, Star } from 'lucide-react';
import heroImg from '../assets/galeneImage2.webp';
import Button from './ui/Button';
import { HERO_CONTENT } from '../data/content';

const Hero = () => (
  <header id="inicio" className="relative pt-32 pb-16 sm:pt-36 lg:pt-40 lg:pb-32 bg-light overflow-hidden">
    <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/10 -z-10 rounded-l-full opacity-70" />
    <div className="absolute bottom-10 left-10 w-64 h-64 bg-accent/15 rounded-full blur-3xl -z-10" />

    <div className="container mx-auto px-6 sm:px-8 lg:px-10 max-w-7xl">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16 xl:gap-20">
        <div className="w-full lg:w-[44%] xl:w-[42%] space-y-7 lg:space-y-8 animate-in slide-in-from-left duration-700 max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-semibold tracking-wider uppercase font-body">
            <HeartHandshake size={12} className="fill-current" aria-hidden />
            {HERO_CONTENT.badge}
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-dark leading-[1.1]">
            {HERO_CONTENT.titlePrefix}
            <br />
            <span className="text-primary italic">{HERO_CONTENT.highlight}</span>{' '}
            {HERO_CONTENT.titleSuffix}
          </h1>
          <p className="font-body text-base sm:text-lg text-dark/70 leading-relaxed max-w-lg border-l-4 border-[var(--accent)] pl-5 sm:pl-6">
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
        </div>

        <div className="w-full lg:w-[56%] xl:w-[58%] relative animate-in zoom-in duration-700 delay-200">
          <div className="absolute inset-0 -right-10 -z-10 rounded-[32px] bg-secondary/10 blur-3xl" />
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-[0_30px_60px_-35px_rgba(15,23,42,0.55)] bg-white/40 backdrop-blur-sm xl:-mr-16 max-w-xl lg:max-w-none mx-auto">
            <img
              src={heroImg}
              alt="Instalaciones y equipo de Galene Salud Mental"
              className="w-full h-auto rounded-2xl object-cover aspect-square"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Hero;
