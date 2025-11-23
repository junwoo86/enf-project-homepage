import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import siteData from '../../data/siteStructure.json';

interface NavItem {
  id: string;
  label: string;
  path: string;
  isLogo?: boolean;
}

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navItems: NavItem[] = siteData.navigation.items;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname === path.toLowerCase();
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-gray-200 ${
        isScrolled ? 'bg-white shadow-sm' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo & Navigation - Always horizontal */}
          <ul className="flex items-center gap-4 md:gap-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.path}
                  className={`text-xs md:text-sm font-medium transition-colors ${
                    item.isLogo
                      ? 'text-base md:text-lg font-bold'
                      : isActive(item.path)
                      ? 'text-black'
                      : 'text-gray-600 hover:text-black'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Company Name - Hidden on mobile */}
          <p className="hidden md:block text-sm text-gray-600">
            <strong>{siteData.companyInfo.name}</strong>
          </p>
        </nav>
      </div>
    </header>
  );
};

export default Header;
