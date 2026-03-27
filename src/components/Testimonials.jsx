import React from 'react';
import { Quote, Star } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';
import { TESTIMONIALS_CONTENT } from '../data/content';

const Testimonials = () => {
  const featuredReviews = TESTIMONIALS_CONTENT.reviews.slice(0, 6);

  return (
    <section id="testimonios" className="cv-auto py-16 sm:py-20 lg:py-24 bg-primary overflow-hidden section-glow border-y border-slate-200/50">
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 20%, white 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />


      <div className="container mx-auto px-6 sm:px-8 lg:px-10 ">
        <SectionTitle
          title={TESTIMONIALS_CONTENT.title}
          subtitle={TESTIMONIALS_CONTENT.subtitle}
          titleClassName="text-white"
          subtitleClassName="text-white/80"


        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredReviews.map((review) => (
            <article
              key={`${review.author}-${review.date}`}
              className="relative flex h-full flex-col gap-4 rounded-2xl border border-slate-50 bg-light p-8 shadow-sm"
            >
              <Quote size={26} className="absolute right-4 top-4 text-primary/10" aria-hidden />
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-lg font-semibold text-primary">
                    {review.initial}
                  </div>
                  <div>
                    <p className="font-bold text-sm text-dark">{review.author}</p>
                    <p className="text-xs text-dark/60">{review.badge}</p>
                  </div>
                </div>
                <div className="flex gap-1 text-secondary" aria-label="Calificación de cinco estrellas">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={14} className="fill-current" aria-hidden />
                  ))}
                </div>
              </div>

              <p className="text-sm text-dark/60">{review.date}</p>
              <p className="text-gray-600 italic font-body leading-relaxed">"{review.text}"</p>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://www.doctoralia.pe/gustavo-paucar-chavez/psiquiatra/arequipa#profile-info"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 mt-3 w-fit px-5 py-2.5 rounded-full bg-white/90 border border-slate-200 text-dark shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary/40"
            aria-label="Ver perfil en Doctoralia"
          >
            <img
              src="/images/docplanner.webp"
              alt="Doctoralia"
              className="w-5 h-5"
              width={20}
              height={20}
              loading="lazy"
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
      </div>
    </section>
  );
};

export default Testimonials;
