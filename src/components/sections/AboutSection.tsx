import React from 'react';
import { Container } from '../layout';
import { Divider } from '../ui';

interface AboutSectionProps {
  headline: string;
  subheadline: string;
  description: string[];
  descriptionEn?: string[];
  className?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  headline,
  subheadline,
  description,
  descriptionEn,
  className = '',
}) => {
  return (
    <section className={`py-16 md:py-24 ${className}`}>
      <Container>
        <div className="max-w-4xl">
          {/* Headline */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
              {headline}
            </h2>
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
              {subheadline}
            </p>
          </div>

          {/* Korean Description */}
          <div className="space-y-6 text-gray-700 leading-relaxed mb-16">
            {description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* English Description */}
          {descriptionEn && descriptionEn.length > 0 && (
            <>
              <Divider className="my-12" />
              <div className="space-y-6 text-gray-600 leading-relaxed">
                {descriptionEn.map((paragraph, index) => (
                  <p key={index} className="text-sm md:text-base">
                    {paragraph}
                  </p>
                ))}
              </div>
            </>
          )}

          <Divider className="mt-16" />
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
