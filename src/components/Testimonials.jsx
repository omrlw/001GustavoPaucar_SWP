import React, { useMemo } from 'react';
import { ArrowRight, Quote, Star } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';
import { TESTIMONIALS_CONTENT } from '../data/content';

const Testimonials = () => {
  const marqueeReviews = useMemo(
    () => [...TESTIMONIALS_CONTENT.reviews, ...TESTIMONIALS_CONTENT.reviews],
    []
  );

  return (
    <section id="testimonios" className="py-24 bg-primary overflow-hidden section-glow border-y border-slate-200/50">
      <div
      className="absolute inset-0 opacity-10 pointer-events-none"
      style={{
        backgroundImage: 'radial-gradient(circle at 20% 20%, white 1px, transparent 1px)',
        backgroundSize: '30px 30px',
      }}
    />


      <div className="container mx-auto px-6 ">
         <SectionTitle
          title={TESTIMONIALS_CONTENT.title}
          subtitle={TESTIMONIALS_CONTENT.subtitle}
          titleClassName="text-white"
          subtitleClassName="text-white/80"
        

        />

        <div className="relative mt-10">
          <div className="overflow-hidden">
            <div className="flex gap-8 testimonial-marquee">
              {marqueeReviews.map((review, idx) => (
                <article
                  key={`${review.author}-${review.date}-${idx}`}
                  className="bg-light p-10 rounded-2xl relative shadow-sm border border-slate-50 shrink-0 flex flex-col gap-3 w-[280px] h-[280px] sm:w-[300px] sm:h-[300px] lg:w-[500px] lg:h-[280px]"
                >
                  <Quote size={26} className="text-primary/10 absolute top-4 right-4" aria-hidden />
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
                      <div className="w-12 h-12 rounded-full bg-primary/10 text-primary font-semibold flex items-center justify-center text-lg">
                        {review.initial}
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <p className="font-bold text-sm text-dark">{review.author}</p>
                        <p className="text-xs text-dark/60 hidden sm:block">{review.date}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 sm:hidden">
                      <p className="text-xs text-dark/60">{review.date}</p>
                      <div className="flex gap-1" aria-label="Calificación de cinco estrellas">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} size={14} className="fill-secondary text-secondary" aria-hidden />
                        ))}
                      </div>
                    </div>

                    <div className="hidden sm:flex gap-1" aria-label="Calificación de cinco estrellas">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} size={14} className="fill-secondary text-secondary" aria-hidden />
                      ))}
                    </div>
                  </div>

                  <p className=" py-2 text-gray-600 italic font-body leading-relaxed line-clamp-6 font-">"{review.text}"</p>
                </article>
              ))}
            </div>
          </div>
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
};

export default Testimonials;
