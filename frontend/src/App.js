import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TimelineSection from './components/TimelineSection';
import CMSPage from './components/CMSPage';

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <TimelineSection />
      <CMSPage/>
    </div>
  );
}

export default App;
