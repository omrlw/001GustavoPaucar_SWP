import React from 'react';

const SectionTitle = ({
  title,
  subtitle,
  align = 'center',
  titleClassName = '',
  subtitleClassName = '',
  titleColorClassName = 'text-primary',
  subtitleColorClassName = 'text-slate-600',
}) => (
  <div className={`mb-8 sm:mb-10 lg:mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
    <h2
      className={`font-heading text-4xl lg:text-5xl font-semibold tracking-tight mb-4 ${titleColorClassName} ${titleClassName}`}
    >
      {title}
    </h2>
    {subtitle && (
      <p
        className={`font-body text-base sm:text-lg max-w-2xl mx-auto ${subtitleColorClassName} ${subtitleClassName}`}
      >
        {subtitle}
      </p>
    )}
    <div
      className={`h-1 w-20 bg-accent rounded-full mt-4 ${align === 'center' ? 'mx-auto' : ''}`}
    />
  </div>
);

export default SectionTitle;
