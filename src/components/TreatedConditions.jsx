import React from 'react';
import { CONDITIONS_CONTENT } from '../data/content';

const TreatedConditions = () => (
  <section className="py-20 bg-primary text-white relative">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="font-heading text-4xl font-bold mb-4">{CONDITIONS_CONTENT.title}</h2>
        <p className="text-blue-100 max-w-2xl mx-auto">{CONDITIONS_CONTENT.subtitle}</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {CONDITIONS_CONTENT.items.map((condition) => (
          <div
            key={condition}
            className="bg-white/10 backdrop-blur-sm border border-white/10 p-4 rounded-lg hover:bg-white/20 transition-colors flex items-center gap-3"
          >
            <div className="w-2 h-2 rounded-full bg-secondary" />
            <span className="font-medium text-sm md:text-base">{condition}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TreatedConditions;
