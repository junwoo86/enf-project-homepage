import React from 'react';
import { Link } from 'react-router-dom';
import siteData from '../../data/siteStructure.json';

const Footer: React.FC = () => {
  const { footer } = siteData;

  return (
    <footer className="bg-black py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          {/* Company Info */}
          <div className="text-sm text-gray-400 space-y-1">
            <p>
              <span className="font-bold text-white">{footer.companyName}</span>
              {footer.businessNumber && (
                <span className="ml-2">Business License {footer.businessNumber}</span>
              )}
            </p>
            {footer.email && <p><span className="font-semibold">Email.</span> {footer.email}</p>}
          </div>

          {/* Links */}
          <div className="flex items-center gap-4 text-sm">
            {footer.links.map((link, index) => (
              <React.Fragment key={link.label}>
                <Link
                  to={link.url}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
                {index < footer.links.length - 1 && (
                  <span className="text-gray-600">|</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500 mt-8">
          {footer.copyright}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
