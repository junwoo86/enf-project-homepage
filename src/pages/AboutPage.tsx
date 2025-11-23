import React from 'react';
import { Layout } from '../components/layout';
import { AboutSection } from '../components/sections';
import siteData from '../data/siteStructure.json';

const AboutPage: React.FC = () => {
  const pageData = siteData.pages.about;
  const aboutSection = pageData.sections.find((s) => s.type === 'aboutContent');

  return (
    <Layout>
      {/* Hero Image - Full Width Below Navigation */}
      <section className="w-full">
        <div className="w-full h-[40vh] md:h-[50vh]">
          <img
            src="/background.png"
            alt="ENFPROJECT Studio"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* About Content Section */}
      {aboutSection && (
        <AboutSection
          headline={aboutSection.content.headline || ''}
          subheadline={aboutSection.content.subheadline || ''}
          description={aboutSection.content.description || []}
          descriptionEn={aboutSection.content.descriptionEn}
        />
      )}
    </Layout>
  );
};

export default AboutPage;
