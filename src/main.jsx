import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Header from './component/header.jsx';
import HeroSection from './component/heroSection.jsx';
import BusinessGrowth from './component/businessGrowth.jsx';
import SecurityProtection from './component/securityProtection.jsx';
import PerformanceSection from './component/PerformanceSection.jsx';
import Footer from './component/Footer.jsx';
import Testimonials from './component/Testimonials.jsx';
import WhyChoose from './component/WhyChoose.jsx';
import AppSignup from './component/AppSignup.jsx';
import GrowthSection from './component/GrowthSection.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Header />
    <HeroSection />
    <BusinessGrowth />
    <SecurityProtection />
    <PerformanceSection />
    <Testimonials />
    <WhyChoose />
    <AppSignup />
    <GrowthSection />
    <Footer />

  </StrictMode>,
)
