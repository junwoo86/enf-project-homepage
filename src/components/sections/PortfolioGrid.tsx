import React from 'react';
import { Link } from 'react-router-dom';

interface PortfolioItem {
  id: string;
  title: string;
  category?: string;
  tags: string[];
  imageUrl?: string;
  path: string;
}

interface PortfolioGridProps {
  items: PortfolioItem[];
  columns?: 2 | 3 | 4;
  className?: string;
}

// 카테고리별 색상 테마
const categoryThemes: Record<string, { bg: string; text: string; accent: string }> = {
  healthcare: { bg: 'bg-emerald-50', text: 'text-emerald-800', accent: 'bg-emerald-500' },
  cosmetics: { bg: 'bg-purple-50', text: 'text-purple-800', accent: 'bg-purple-500' },
  default: { bg: 'bg-gray-100', text: 'text-gray-800', accent: 'bg-gray-500' },
};

const PortfolioGrid: React.FC<PortfolioGridProps> = ({
  items,
  columns = 2,
  className = '',
}) => {
  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  const getTheme = (category?: string) => {
    return categoryThemes[category || 'default'] || categoryThemes.default;
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-8 ${className}`}>
      {items.map((item) => {
        const theme = getTheme(item.category);
        return (
          <Link
            key={item.id}
            to={item.path}
            className="group block"
          >
            <div className={`aspect-[4/3] ${theme.bg} overflow-hidden mb-4 relative rounded-lg transition-all duration-300 group-hover:shadow-lg`}>
              {/* Thumbnail Image */}
              {item.imageUrl && (
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              )}

              {/* Category Badge */}
              <div className={`absolute top-4 left-4 ${theme.accent} text-white text-xs px-3 py-1 rounded-full uppercase tracking-wide z-10`}>
                {item.category === 'healthcare' ? 'HealthCare' : 'Cosmetics'}
              </div>

              {/* Hover Arrow */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <span className="text-white text-2xl drop-shadow-lg">→</span>
              </div>
            </div>

            <p className="text-base font-medium text-black mb-2">{item.title}</p>
            <p className="text-sm text-gray-500">
              {item.tags.join(' | ')}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default PortfolioGrid;
