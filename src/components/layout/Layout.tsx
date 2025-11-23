import React from 'react';
import Header from './Header';
import Footer from './Footer';
import KakaoFloatButton from './KakaoFloatButton';

interface LayoutProps {
  children: React.ReactNode;
  showFooter?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, showFooter = true }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">{children}</main>
      {showFooter && <Footer />}
      <KakaoFloatButton />
    </div>
  );
};

export default Layout;
