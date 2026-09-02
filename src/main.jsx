import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Header from './component/header.jsx';
import HeroSection from './component/heroSection.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Header />
    <HeroSection />
    
  </StrictMode>,
)
