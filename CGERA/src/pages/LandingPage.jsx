import React from 'react';
import Hero from '../components/Hero';
import NewSection from '../components/NewSection';
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <NewSection />
    </div>
  );
};

export default LandingPage;
