import React from 'react';
import { Container } from '../layout';

interface ContactItem {
  label: string;
  value: string;
  type: 'email' | 'phone' | 'link' | 'text';
  url?: string;
}

interface ContactInfoSectionProps {
  items?: ContactItem[];
  email?: string;
  phone?: string;
  address?: string;
  businessNumber?: string;
  variant?: 'horizontal' | 'vertical' | 'sidebar';
  className?: string;
}

const ContactInfoSection: React.FC<ContactInfoSectionProps> = ({
  items,
  email,
  phone,
  address,
  businessNumber,
  variant = 'horizontal',
  className = '',
}) => {
  const renderValue = (item: ContactItem) => {
    switch (item.type) {
      case 'email':
        return (
          <a
            href={`mailto:${item.value}`}
            className="text-black hover:underline font-bold"
          >
            {item.value}
          </a>
        );
      case 'phone':
        return <span className="font-bold">{item.value}</span>;
      case 'link':
        return (
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:underline font-bold"
          >
            {item.value}
          </a>
        );
      default:
        return <span className="font-bold">{item.value}</span>;
    }
  };

  // Simple format for Home page
  if (email || businessNumber) {
    return (
      <section className={`py-12 ${className}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="space-y-4">
            {email && (
              <p className="font-bold">
                <a href={`mailto:${email}`} className="hover:underline">
                  {email}
                </a>
              </p>
            )}
            {phone && (
              <a href={`tel:${phone}`} className="block font-bold hover:underline">
                Tel. {phone}
              </a>
            )}
            {businessNumber && (
              <p className="text-gray-600">
                Business License {businessNumber}
              </p>
            )}
            {address && (
              <p className="font-bold text-gray-700">{address}</p>
            )}
          </div>
        </div>
      </section>
    );
  }

  // Items format for Contact page
  if (!items) return null;

  if (variant === 'sidebar') {
    return (
      <aside className={`space-y-4 ${className}`}>
        {items.map((item, index) => (
          <div key={index}>
            <p className="text-sm text-gray-600 mb-1">{item.label}</p>
            {renderValue(item)}
          </div>
        ))}
      </aside>
    );
  }

  return (
    <section className={`py-12 ${className}`}>
      <Container>
        <div className={`grid ${variant === 'vertical' ? 'grid-cols-1 gap-6' : 'grid-cols-2 md:grid-cols-4 gap-8'}`}>
          {items.map((item, index) => (
            <div key={index}>
              <p className="font-bold text-black mb-2">{item.label}</p>
              {renderValue(item)}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ContactInfoSection;
