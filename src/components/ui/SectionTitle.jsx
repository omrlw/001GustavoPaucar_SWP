import React from 'react';

const SectionTitle = ({ title, subtitle, align = 'center' }) => (
  <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
    <h2 className="font-heading text-4xl lg:text-5xl font-semibold text-primary mb-4">{title}</h2>
    {subtitle && (
      <p className="text-slate-600 font-body text-lg max-w-2xl mx-auto">{subtitle}</p>
    )}
    <div
      className={`h-1 w-20 bg-accent rounded-full mt-4 ${align === 'center' ? 'mx-auto' : ''}`}
    />
  </div>
);

export default SectionTitle;
