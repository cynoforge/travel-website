import "./App.css";
import "./Contact.css";
import ContactInfo from "./Contact.jsx";
import { CompanyContact } from "./Contact.jsx";
import { ContactHeroSection } from "./Contact.jsx";
import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FeaturedDestination from './components/FeaturedDestination'


export default function App() {
  return (
    <>
      <ContactHeroSection />
      <div className="card contactcard">
        <ContactInfo />
      </div>
      <hr />
      <div className="card">
        <CompanyContact />
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <div className="flex-grow  pt-20">
          <FeaturedDestination />
        </div>
        <Footer />
      </div>
    </>
  );
}
