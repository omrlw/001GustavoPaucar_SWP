import React from 'react';
import { CONDITIONS_CONTENT } from '../data/content';

const TreatedConditions = () => (
  <section className="py-16 sm:py-20 bg-primary text-white relative">
    <div
      className="absolute inset-0 opacity-10 pointer-events-none"
      style={{
        backgroundImage: 'radial-gradient(circle at 20% 20%, white 1px, transparent 1px)',
        backgroundSize: '30px 30px',
      }}
    />
    <div className="container mx-auto px-6 sm:px-8 lg:px-10">

      <div className="text-center mb-8 sm:mb-12 scroll-reveal">
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-4">
          {CONDITIONS_CONTENT.title}
        </h2>
        <p className="text-blue-100 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          {CONDITIONS_CONTENT.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {CONDITIONS_CONTENT.items.map((condition, index) => (
          <div
            key={condition}
            className={`bg-white/10 backdrop-blur-sm border border-white/10 px-4 py-3 sm:p-4 rounded-xl hover:bg-white/20 transition-colors flex items-start gap-3 scroll-reveal stagger-${(index % 6) + 1}`}
          >
            <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0 flex items-center" />
            <span className="font-medium text-sm sm:text-base leading-snug">{condition}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TreatedConditions;
