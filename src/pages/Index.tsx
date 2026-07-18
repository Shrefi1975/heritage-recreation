import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import HeroSection from '@/components/home/HeroSection';
import AboutPreview from '@/components/home/AboutPreview';
import HomeCategories from '@/components/home/HomeCategories';
import WhyUsSection from '@/components/home/WhyUsSection';
import ContactSection from '@/components/home/ContactSection';
import HomeMarquee from '@/components/home/HomeMarquee';
import PartnershipsPreview from '@/components/home/PartnershipsPreview';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutPreview />
        <HomeMarquee />
        <HomeCategories />
        <PartnershipsPreview />
        <WhyUsSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
