import React from 'react';
import { Building2, CheckCircle2, GraduationCap, Languages } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';
import doctorPortrait from '../assets/Gustavo_foto.webp';
import { ABOUT_CONTENT, DOCTOR_DATA } from '../data/content';

const About = () => (
  <section id="nosotros" className="py-24 bg-white relative">
    <div className="container mx-auto px-6">
      <SectionTitle title={ABOUT_CONTENT.title} subtitle={ABOUT_CONTENT.subtitle} />

      <div className="grid md:grid-cols-2 lg:grid-cols-[1.15fr_0.85fr] gap-12 max-w-6xl mx-auto items-start">
        <div className="space-y-6">
          <h3 className="font-heading text-3xl font-bold text-dark">{DOCTOR_DATA.name}</h3>
          <p className="text-dark/70 leading-relaxed font-body text-lg">{DOCTOR_DATA.bio}</p>

          <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 mt-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <GraduationCap size={24} aria-hidden />
              </div>
              <h4 className="font-bold text-slate-800">{ABOUT_CONTENT.featureTitle}</h4>
            </div>
            <p className="text-dark/70 pl-11">{DOCTOR_DATA.education}</p>
          </div>

          <div className="flex gap-2 flex-wrap mt-4">
            {DOCTOR_DATA.languages.map((lang) => (
              <span
                key={lang}
                className="px-3 py-1 bg-white border border-slate-200 text-slate-600 rounded-full text-sm font-medium flex items-center gap-2"
              >
                <Languages size={14} className="text-accent" aria-hidden />
                {lang}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white p-2">
            <img
              src={doctorPortrait}
              alt="Retrato profesional del Dr. Gustavo Paucar Chávez"
              className="w-full h-auto rounded-xl object-cover aspect-[4/5]"
              loading="lazy"
            />
            <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur p-4 rounded-lg border border-slate-100 shadow-lg">
              <p className="font-heading text-xl font-bold text-primary">{DOCTOR_DATA.name}</p>
              <p className="text-sm text-slate-500 font-body">{DOCTOR_DATA.specialty}</p>
              <div className="flex gap-3 mt-2 text-xs text-slate-500 font-mono" aria-label="Registro profesional">
                <span>{DOCTOR_DATA.cmp}</span>
                <span aria-hidden>•</span>
                <span>{DOCTOR_DATA.rne}</span>
              </div>
            </div>
          </div>

          <div className="bg-primary text-white p-8 rounded-2xl relative overflow-hidden shadow-xl">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-white/10 rounded-lg text-accent">
                  <Building2 size={24} aria-hidden />
                </div>
                <h3 className="font-heading text-2xl font-bold">{ABOUT_CONTENT.experienceTitle}</h3>
              </div>
              <ul className="space-y-4 font-body text-blue-100">
                {DOCTOR_DATA.hospitals.map((hospital) => (
                  <li key={hospital} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="mt-1 text-accent flex-shrink-0" aria-hidden />
                    <span>{hospital}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-16 -mt-16 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
