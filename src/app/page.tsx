import AboutSection from '@/app/components/AboutSection';
import AchievementsSection from '@/app/components/AchievementsSection';
import Footer from '@/app/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import Navbar from '@/app/components/Navbar';
import React from 'react';

const Home: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />

      <div className="container mx-auto mt-24 px-12 py-4">
        <HeroSection />

        <AchievementsSection />

        <AboutSection />
      </div>

      <Footer />
    </main>
  );
};

export default Home;
