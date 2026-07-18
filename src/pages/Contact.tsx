import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ContactSection from '@/components/home/ContactSection';
import { useLanguage } from '@/contexts/LanguageContext';
import { pickText } from '@/data/services';

const Contact: React.FC = () => {
  const { language } = useLanguage();
  const title = pickText(language, {
    ar: 'اتصل بنا', en: 'Contact Us', zh: '联系我们', fr: 'Nous Contacter',
  });

  React.useEffect(() => {
    document.title = `${title} | Global Business & Supplies`;
  }, [title]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-8 lg:pt-12">
        <div className="section-container mb-4">
          <h1 className="text-3xl md:text-4xl font-bold text-primary">{title}</h1>
        </div>
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;
