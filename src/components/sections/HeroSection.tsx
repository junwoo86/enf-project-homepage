import React from 'react';
import { Container } from '../layout';

interface HeroSectionProps {
  subtitle?: string;
  title: string;
  logoSrc?: string;
  className?: string;
  variant?: 'default' | 'large' | 'centered';
}

const HeroSection: React.FC<HeroSectionProps> = ({
  subtitle,
  title,
  logoSrc,
  className = '',
  variant = 'default',
}) => {
  const variants = {
    default: 'py-20 md:py-32',
    large: 'py-32 md:py-48',
    centered: 'py-20 md:py-32 text-center',
  };

  return (
    <section className={`${variants[variant]} ${className}`}>
      <Container>
        <div className={variant === 'centered' ? 'flex flex-col items-center' : ''}>
          {subtitle && (
            <p className="text-lg md:text-xl font-medium text-gray-500 mb-4">
              {subtitle}
            </p>
          )}
          {logoSrc ? (
            <img
              src={logoSrc}
              alt={title}
              className="h-24 md:h-32 lg:h-40 w-auto object-contain object-left"
            />
          ) : (
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black">
              {title}
            </h1>
          )}
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
