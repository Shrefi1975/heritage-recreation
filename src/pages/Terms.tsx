import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Terms: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-primary py-20">
          <div className="section-container text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              {t.terms.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/80"
            >
              {t.terms.lastUpdated}
            </motion.p>
          </div>
        </section>

        <section className="py-16">
          <div className="section-container max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground">
                {language === 'ar' 
                  ? 'مرحباً بكم في موقع الشركة العالمية للأعمال والتوريدات. باستخدامك لهذا الموقع، فإنك توافق على الالتزام بهذه الشروط والأحكام.'
                  : 'Welcome to Global Business and Supplies website. By using this website, you agree to comply with these terms and conditions.'}
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Terms;
