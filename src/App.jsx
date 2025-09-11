import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import FeaturedDestinations from './components/FeaturedDestination';
import ContactSection from './components/ContactSection';

function App() {
  return (
     <div className="min-h-screen bg-white font-sans">
          <Navbar />
          <HeroSection />
          <FeaturedDestinations />
          <ContactSection />
          <Footer />
        </div>
  );
}

export default App;