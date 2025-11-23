import React, { useState } from 'react';
import { Layout, Container } from '../components/layout';
import { Input, TextArea, Button } from '../components/ui';
import siteData from '../data/siteStructure.json';

const ContactPage: React.FC = () => {
  const pageData = siteData.pages.contact;
  const heroSection = pageData.sections.find((s) => s.type === 'contactHero');
  const detailsSection = pageData.sections.find((s) => s.type === 'contactDetails');
  const formSection = pageData.sections.find((s) => s.type === 'contactForm');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('문의가 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.');
  };

  return (
    <Layout>
      <Container className="py-20 md:py-32">
        {/* Hero Section */}
        {heroSection && (
          <div className="mb-16">
            <h1 className="text-3xl md:text-5xl font-bold text-black mb-6">
              {heroSection.content.title}
            </h1>
            <p className="text-gray-600 max-w-2xl leading-relaxed">
              {heroSection.content.description}
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Details */}
          <div>
            {detailsSection && detailsSection.content.items && (
              <div className="space-y-8">
                {detailsSection.content.items.map((item: any, index: number) => (
                  <div key={index}>
                    <p className="text-sm text-gray-500 mb-2">{item.label}</p>
                    {item.type === 'email' ? (
                      <a
                        href={`mailto:${item.value}`}
                        className="text-xl md:text-2xl font-bold text-black hover:underline"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-xl md:text-2xl font-bold text-black">
                        {item.value}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Contact Form */}
          {formSection && formSection.content.fields && (
            <form onSubmit={handleSubmit} className="space-y-6">
              {formSection.content.fields.map((field: any) => {
                if (field.type === 'textarea') {
                  return (
                    <TextArea
                      key={field.id}
                      id={field.id}
                      label={field.label}
                      placeholder={field.placeholder}
                      required={field.required}
                      rows={6}
                      onChange={handleChange}
                    />
                  );
                }
                return (
                  <Input
                    key={field.id}
                    id={field.id}
                    label={field.label}
                    type={field.type === 'tel' ? 'tel' : field.type}
                    placeholder={field.placeholder}
                    required={field.required}
                    onChange={handleChange}
                  />
                );
              })}
              <Button type="submit" variant="primary" size="lg" className="w-full">
                {formSection.content.submitButton?.label || '문의하기'}
              </Button>
            </form>
          )}
        </div>
      </Container>
    </Layout>
  );
};

export default ContactPage;
