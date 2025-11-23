import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import siteData from '../../data/siteStructure.json';

interface NavItem {
  id: string;
  label: string;
  path: string;
  isLogo?: boolean;
}

const Header: React.FC = () => {
  const location = useLocation();
  const navItems: NavItem[] = siteData.navigation.items;

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname === path.toLowerCase();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo & Navigation - Always horizontal */}
          <ul className="flex items-center gap-4 md:gap-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.path}
                  className={`text-sm md:text-base font-medium transition-colors ${
                    item.isLogo
                      ? 'text-lg md:text-xl font-bold text-white'
                      : isActive(item.path)
                      ? 'text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Company Name - Hidden on mobile */}
          <p className="hidden md:block text-base text-gray-400">
            <strong className="text-white">{siteData.companyInfo.name}</strong>
          </p>
        </nav>
      </div>
    </header>
  );
};

export default Header;
