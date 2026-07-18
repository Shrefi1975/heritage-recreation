import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
const StatsSection: React.FC = () => {
  const {
    t
  } = useLanguage();
  const stats = [{
    value: '500+',
    label: t.whyUs.stats.clients
  }, {
    value: '1200+',
    label: t.whyUs.stats.projects
  }, {
    value: '15+',
    label: t.whyUs.stats.years
  }, {
    value: '2',
    label: t.whyUs.stats.countries
  }];
  return null;
};
export default StatsSection;