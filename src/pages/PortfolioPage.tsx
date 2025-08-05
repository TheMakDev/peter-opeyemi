import React from 'react';
import Navigation from '@/components/Navigation';
import Portfolio from '@/components/Portfolio';
import Footer from '@/components/Footer';

const PortfolioPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioPage;