import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import AyurvedaBanner from '../components/AyurvedaBanner';
import BenefitsSection from '../components/BenefitsSection';
import HowToUse from '../components/HowToUse';
import TestimonialsSection from '../components/TestimonialsSection';
import VideoReelsSection from '../components/VideoReelsSection';
import OrderFooter from '../components/OrderFooter';

const Home = () => {
  return (
    <div className="font-['Poppins',sans-serif] antialiased">
      <main>
        <HeroSection />
        
        <AyurvedaBanner />
        
        <div id="benefits">
          <BenefitsSection />
        </div>
        
        <div id="howto">
          <HowToUse />
        </div>
        
        <div id="testimonials">
          <TestimonialsSection />
        </div>
        
        <div id="videos">
          <VideoReelsSection />
        </div>
      </main>
      
      <OrderFooter />
    </div>
  );
};

export default Home;
