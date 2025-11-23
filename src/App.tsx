import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HomePage, AboutPage, WorkPage, WorkDetailPage, ContactPage } from './pages';
import { ScrollToTop } from './components/layout';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/Work" element={<WorkPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Portfolio Detail Route */}
        <Route path="/work/:id" element={<WorkDetailPage />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
