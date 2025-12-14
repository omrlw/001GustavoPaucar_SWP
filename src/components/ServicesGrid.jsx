import React from 'react';
import { Activity, Brain, GraduationCap, HeartPulse, Stethoscope } from 'lucide-react';
import Button from './ui/Button';
import SectionTitle from './ui/SectionTitle';
import { BRAND_INFO, SERVICES_CONTENT, UI_TEXT } from '../data/content';


const iconMap = {
  brain: <Brain size={24} aria-hidden />,
  activity: <Activity size={24} aria-hidden />,
  stethoscope: <Stethoscope size={24} aria-hidden />,
  graduation: <GraduationCap size={24} aria-hidden />,
  heart: <HeartPulse size={24} aria-hidden />,
};

const ServicesGrid = () => (
  <section id="servicios" className="py-16 sm:py-20 lg:py-20 bg-light section-glow">
    <div className="container mx-auto px-6 sm:px-8 lg:px-10">
      <div className="scroll-reveal">
        <SectionTitle title={SERVICES_CONTENT.title} subtitle={SERVICES_CONTENT.subtitle} />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES_CONTENT.services.map((service, index) => (
          <div
            key={service.title}
            className={`bg-white p-8 rounded-xl shadow-sm transition-all duration-300 border border-slate-100 group scroll-reveal hover-lift stagger-${(index % 6) + 1}`}
          >
            <div className="mb-6 p-3 bg-primary/10 w-fit rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              {iconMap[service.icon]}
            </div>
            <h3 className="font-heading text-2xl font-semibold tracking-tight text-dark mb-2">{service.title}</h3>
            <p className="text-sm text-dark/70 mb-4 min-h-[40px]">{service.description}</p>
            <Button
              as="a"
              href={BRAND_INFO.whatsappLink}
              variant="outline"
              className="w-full mt-6"
              ariaLabel={`${UI_TEXT.servicesCtaLabel} ${service.title} por WhatsApp`}
              target="_blank"
              rel="noreferrer"
            >
              {UI_TEXT.servicesCtaLabel}
            </Button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesGrid;
