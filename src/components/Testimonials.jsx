import React from 'react';
import { ArrowRight, Quote, Star, User } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';
import { TESTIMONIALS_CONTENT } from '../data/content';

const Testimonials = () => (
  <section id="testimonios" className="py-24 bg-white overflow-hidden">
    <div className="container mx-auto px-6">
      <SectionTitle title={TESTIMONIALS_CONTENT.title} subtitle={TESTIMONIALS_CONTENT.subtitle} />

      <div className="grid md:grid-cols-3 gap-8">
        {TESTIMONIALS_CONTENT.reviews.map((review) => (
          <article key={review.text} className="bg-slate-50 p-8 rounded-2xl relative h-full">
            <Quote size={40} className="text-primary/10 absolute top-6 right-6" aria-hidden />
            <div className="flex gap-1 mb-4" aria-label="Calificación de cinco estrellas">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={16} className="fill-secondary text-secondary" aria-hidden />
              ))}
            </div>
            <p className="text-dark/70 font-body italic mb-6">"{review.text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500">
                <User size={20} aria-hidden />
              </div>
              <div>
                <p className="font-bold text-sm text-dark">{review.author}</p>
                <p className="text-xs text-dark/60">{review.date}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          href={TESTIMONIALS_CONTENT.ctaHref}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          aria-label="Ver todas las opiniones en Doctoralia"
        >
          {TESTIMONIALS_CONTENT.ctaLabel} <ArrowRight size={16} aria-hidden />
        </a>
      </div>
    </div>
  </section>
);

export default Testimonials;
