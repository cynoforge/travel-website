import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FeaturedDestination from './components/FeaturedDestination'

function App() {

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <div className="flex-grow  pt-20">
          <FeaturedDestination />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
