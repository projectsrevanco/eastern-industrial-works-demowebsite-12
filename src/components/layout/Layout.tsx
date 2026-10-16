import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollToTop } from '../common/ScrollToTop';

export const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#24292E] font-sans selection:bg-[#E99A26] selection:text-[#172B3A]">
      {/* Keyboard Accessibility: Skip to Main Content Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[999] focus:px-4 focus:py-2.5 focus:bg-[#E99A26] focus:text-[#172B3A] focus:font-heading focus:font-bold focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#172B3A] rounded-xs text-xs uppercase tracking-wider"
      >
        Skip to main content
      </a>
      <ScrollToTop />
      <Navbar />
      <main id="main-content" className="flex-1 focus:outline-none" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
