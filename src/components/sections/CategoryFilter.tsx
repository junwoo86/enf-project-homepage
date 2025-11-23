import React from 'react';

interface Category {
  id: string;
  label: string;
}

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory?: string;
  onCategoryChange?: (categoryId: string) => void;
  className?: string;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory = 'all',
  onCategoryChange,
  className = '',
}) => {
  return (
    <nav className={`py-6 border-b border-gray-200 ${className}`}>
      <ul className="flex flex-wrap gap-6 md:gap-8">
        {categories.map((category) => (
          <li key={category.id}>
            <button
              onClick={() => onCategoryChange?.(category.id)}
              className={`text-sm md:text-base font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'text-black'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              {category.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CategoryFilter;
