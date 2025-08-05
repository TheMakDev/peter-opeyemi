import React from 'react';
import Navigation from '@/components/Navigation';
import Achievements from '@/components/Achievements';
import Footer from '@/components/Footer';

const AchievementsPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <Achievements />
      </main>
      <Footer />
    </div>
  );
};

export default AchievementsPage;