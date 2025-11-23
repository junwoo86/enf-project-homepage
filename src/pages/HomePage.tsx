import React from 'react';
import { Layout } from '../components/layout';
import { ContactInfoSection } from '../components/sections';
import siteData from '../data/siteStructure.json';

const HomePage: React.FC = () => {
  const pageData = siteData.pages.home;
  const heroSection = pageData.sections.find((s) => s.type === 'hero');
  const contactSection = pageData.sections.find((s) => s.type === 'contactInfo');

  return (
    <Layout>
      {/* Hero Section with Background Image */}
      {heroSection && (
        <section className="relative min-h-[60vh] md:min-h-[70vh]">
          {/* Background Image - Right Side */}
          <div className="absolute top-0 right-0 w-1/2 md:w-3/5 h-full">
            <img
              src="/background.png"
              alt="ENFPROJECT Studio"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content - Left Side */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32">
            <div className="w-1/2 md:w-2/5">
              <p className="text-lg md:text-xl font-medium text-gray-500 mb-4">
                {heroSection.content.subtitle}
              </p>
              <img
                src="/logo.png"
                alt={heroSection.content.title}
                className="h-24 md:h-32 lg:h-40 w-auto object-contain object-left"
              />
            </div>
          </div>
        </section>
      )}

      {/* Contact Info Section */}
      {contactSection && (
        <ContactInfoSection
          email={contactSection.content.email}
          businessNumber={contactSection.content.businessNumber}
        />
      )}
    </Layout>
  );
};

export default HomePage;
