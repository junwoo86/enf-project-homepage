import React, { useState } from 'react';
import { Layout, Container } from '../components/layout';
import { CategoryFilter, PortfolioGrid } from '../components/sections';
import siteData from '../data/siteStructure.json';

// Portfolio data
const samplePortfolioItems: {
  id: string;
  title: string;
  category: string;
  tags: string[];
  imageUrl: string;
  path: string;
}[] = [
  {
    id: 'zipiderm',
    title: 'ZIPIDERM',
    category: 'healthcare',
    tags: ['Brand Development', 'Package Design', 'Marketing Strategy'],
    imageUrl: '/portfolio/ZIPIDERM_title.png',
    path: '/work/zipiderm',
  },
  {
    id: 'plodica',
    title: 'Plodica',
    category: 'cosmetics',
    tags: ['Brand Development', 'Package Design', 'Content Directing'],
    imageUrl: '/portfolio/Plodica_title.png',
    path: '/work/plodica',
  },
  {
    id: 'biocellheal',
    title: 'BIOCELLHEAL',
    category: 'cosmetics',
    tags: ['Brand Development', 'Brand Identity', 'Package Design'],
    imageUrl: '/portfolio/BIOCELLHEAL_title.png',
    path: '/work/biocellheal',
  },
  {
    id: 'jinny-h',
    title: 'JINNY H',
    category: 'cosmetics',
    tags: ['Brand Development', 'Brand Identity', 'Package Design'],
    imageUrl: '/portfolio/JINNY H_title.png',
    path: '/work/jinny-h',
  },
];

const WorkPage: React.FC = () => {
  const pageData = siteData.pages.work;
  const heroSection = pageData.sections.find((s) => s.type === 'hero');
  const categorySection = pageData.sections.find((s) => s.type === 'categoryFilter');

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [portfolioItems] = useState(samplePortfolioItems);

  // Filter items by category
  const filteredItems = selectedCategory === 'all'
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <Layout>
      {/* Hero Section */}
      {heroSection && (
        <section className="py-16 md:py-24 bg-white">
          <Container>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">
              {heroSection.content.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
              {heroSection.content.description}
            </p>
          </Container>
        </section>
      )}

      {/* Category Filter & Portfolio */}
      <section className="pb-16">
        <Container>
          {/* Category Filter */}
          {categorySection && categorySection.content.categories && (
            <CategoryFilter
              categories={categorySection.content.categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          )}

          {/* Portfolio Grid */}
          {filteredItems.length > 0 ? (
            <PortfolioGrid items={filteredItems} columns={2} className="mt-12" />
          ) : (
            <div className="mt-12 py-20 text-center text-gray-500">
              <p className="text-lg">포트폴리오가 준비 중입니다.</p>
              <p className="mt-2">곧 새로운 프로젝트를 공개할 예정입니다.</p>
            </div>
          )}
        </Container>
      </section>
    </Layout>
  );
};

export default WorkPage;
