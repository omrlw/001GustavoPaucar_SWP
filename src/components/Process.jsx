import React from 'react';
import { Activity, CalendarCheck, ClipboardList, ArrowRight } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';
import { PROCESS_CONTENT } from '../data/content';

const iconMap = {
  activity: <Activity size={32} aria-hidden />,
  calendar: <CalendarCheck size={32} aria-hidden />,
  clipboard: <ClipboardList size={32} aria-hidden />,
};

const Process = () => (
  <section className="py-20 bg-light border-y border-slate-200">
    <div className="container mx-auto px-6">
      <SectionTitle title={PROCESS_CONTENT.title} subtitle={PROCESS_CONTENT.subtitle} />

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {PROCESS_CONTENT.steps.map((step, idx) => (
          <div
            key={step.title}
            className="bg-white p-8 rounded-xl text-center shadow-sm relative group hover:shadow-md transition-shadow"
          >
            <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              {iconMap[step.icon]}
            </div>
            <h3 className="font-heading text-xl font-bold text-dark mb-3">{step.title}</h3>
            <p className="text-dark/70 text-sm">{step.description}</p>
            {idx < PROCESS_CONTENT.steps.length - 1 && (
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-slate-300">
                <ArrowRight size={24} aria-hidden />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Process;
