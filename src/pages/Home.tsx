import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import StatsSection from '../components/StatsSection';
import ServicesPreview from '../components/ServicesPreview';
import TrackingPreview from '../components/TrackingPreview';
import TestimonialsSection from '../components/TestimonialsSection';

const Home = () => {
  return (
    <div className="home">
      <HeroSection />
      <TrackingPreview />
      <FeaturesSection />
      <StatsSection />
      <ServicesPreview />
      <TestimonialsSection />
    </div>
  );
};

export default Home;