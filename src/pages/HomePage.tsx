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
      {/* Logo Marquee - Below Navigation */}
      <div className="w-full h-11 md:h-14 bg-white overflow-hidden border-b border-gray-100">
        <div className="animate-marquee flex items-center h-full whitespace-nowrap">
          {/* Repeat images for seamless loop */}
          {[...Array(20)].map((_, i) => (
            <img
              key={i}
              src="/logo_move.png"
              alt=""
              className="h-6 md:h-8 w-auto mx-4 md:mx-8 object-contain"
            />
          ))}
        </div>
      </div>

      {/* Hero Section with Background Image */}
      {heroSection && (
        <>
          {/* Desktop Layout - Side by Side */}
          <section className="hidden md:block relative min-h-[70vh]">
            {/* Background Image - Right Side */}
            <div className="absolute top-0 right-0 w-3/5 h-full">
              <img
                src="/background.png"
                alt="ENFPROJECT Studio"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content - Left Side */}
            <div className="relative z-10 max-w-7xl mx-auto px-12 py-32">
              <div className="w-2/5">
                <p className="text-xl font-medium text-gray-500 mb-4">
                  {heroSection.content.subtitle}
                </p>
                <img
                  src="/logo.png"
                  alt={heroSection.content.title}
                  className="h-32 lg:h-40 w-auto object-contain object-left"
                />
              </div>
            </div>
          </section>

          {/* Mobile Layout - Stacked */}
          <section className="md:hidden">
            {/* Content - Top */}
            <div className="px-6 pt-20 pb-8">
              <p className="text-base font-medium text-gray-500 mb-3">
                {heroSection.content.subtitle}
              </p>
              <img
                src="/logo.png"
                alt={heroSection.content.title}
                className="h-16 w-auto object-contain object-left"
              />
            </div>

            {/* Background Image - Below Logo, Full Width */}
            <div className="w-full aspect-[4/3]">
              <img
                src="/background.png"
                alt="ENFPROJECT Studio"
                className="w-full h-full object-cover"
              />
            </div>
          </section>
        </>
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
