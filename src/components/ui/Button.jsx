import React from 'react';

const Button = ({
  children,
  variant = 'primary',
  className = '',
  as,
  href,
  ariaLabel,
  ...props
}) => {
  const Component = as || (href ? 'a' : 'button');
  const variants = {
    primary: 'bg-accent text-white hover:bg-accent/90 shadow-lg shadow-accent/20',
    outline:
      'bg-transparent border border-accent text-accent hover:bg-accent hover:text-white',
    ghost: 'bg-white text-primary hover:bg-gray-50 border border-gray-200',
  };

  const computedAriaLabel = ariaLabel || (typeof children === 'string' ? children : undefined);

  return (
    <Component
      href={href}
      type={Component === 'button' ? 'button' : undefined}
      aria-label={computedAriaLabel}
      className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent focus:ring-offset-light ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Button;
