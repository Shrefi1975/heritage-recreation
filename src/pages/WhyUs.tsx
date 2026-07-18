import React from 'react';
import { motion } from 'framer-motion';
import { Check, Award, Clock, Shield, DollarSign, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import StatsSection from '@/components/home/StatsSection';
import PageHeader from '@/components/PageHeader';
import whyusHeaderAfricanImg from '@/assets/headers/whyus-header-african.jpg';

const WhyUs: React.FC = () => {
  const { t } = useLanguage();

  const icons = [Award, Shield, Check, Clock, DollarSign, Users];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero */}
        <PageHeader 
          title={t.whyUs.title}
          subtitle={t.whyUs.subtitle}
          image={whyusHeaderAfricanImg}
        />

        {/* Advantages */}
        <section className="py-16 lg:py-24">
          <div className="section-container">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {t.whyUs.advantages.map((advantage, index) => {
                const Icon = icons[index];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card rounded-2xl p-8 card-hover border border-border"
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="font-bold text-xl text-primary mb-3">
                      {advantage.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {advantage.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats */}
        <StatsSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default WhyUs;
