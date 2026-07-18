import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimationFrame, useMotionValue, useTransform } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Home,
  Info,
  Package,
  Wrench,
  HardHat,
  Handshake,
  Layers,
  Star,
  BookOpen,
  Phone,
  Truck,
  Cpu,
  Sun,
  Stethoscope,
} from 'lucide-react';

const HomeMarquee: React.FC = () => {
  const { language } = useLanguage();
  const [paused, setPaused] = useState(false);

  const labels = {
    ar: {
      home: 'الرئيسية', about: 'من نحن', generalTrade: 'التجارة العامة',
      services: 'الخدمات', construction: 'البناء والمقاولات', partnerships: 'شراكاتنا',
      sectors: 'القطاعات', whyUs: 'لماذا نحن', blog: 'المدونة', contact: 'تواصل معنا',
      supplies: 'التوريدات', it: 'تكنولوجيا المعلومات', solar: 'الطاقة الشمسية', medical: 'الطبية',
    },
    en: {
      home: 'Home', about: 'About', generalTrade: 'General Trade',
      services: 'Services', construction: 'Construction', partnerships: 'Partnerships',
      sectors: 'Sectors', whyUs: 'Why Us', blog: 'Blog', contact: 'Contact',
      supplies: 'Supplies', it: 'IT', solar: 'Solar', medical: 'Medical',
    },
    fr: {
      home: 'Accueil', about: 'À propos', generalTrade: 'Commerce Général',
      services: 'Services', construction: 'Construction', partnerships: 'Partenariats',
      sectors: 'Secteurs', whyUs: 'Pourquoi nous', blog: 'Blog', contact: 'Contact',
      supplies: 'Approvisionnements', it: 'IT', solar: 'Solaire', medical: 'Médical',
    },
    zh: {
      home: '首页', about: '关于我们', generalTrade: '综合贸易',
      services: '服务', construction: '建筑与承包', partnerships: '合作伙伴',
      sectors: '行业', whyUs: '为何选择我们', blog: '博客', contact: '联系我们',
      supplies: '供应', it: '信息技术', solar: '太阳能', medical: '医疗',
    },
  } as const;
  const L = labels[(language as keyof typeof labels)] || labels.en;

  const items = [
    { icon: Home, label: L.home, to: '/', color: 'from-primary to-[hsl(218,55%,32%)]' },
    { icon: Info, label: L.about, to: '/about', color: 'from-[hsl(218,55%,32%)] to-primary' },
    { icon: Package, label: L.generalTrade, to: '/general-trade', color: 'from-accent to-orange-500' },
    { icon: Truck, label: L.supplies, to: '/supplies', color: 'from-amber-500 to-orange-600' },
    { icon: Wrench, label: L.services, to: '/services', color: 'from-primary to-accent' },
    { icon: HardHat, label: L.construction, to: '/construction', color: 'from-slate-600 to-primary' },
    { icon: Cpu, label: L.it, to: '/it', color: 'from-primary to-cyan-600' },
    { icon: Sun, label: L.solar, to: '/solar', color: 'from-orange-400 to-accent' },
    { icon: Stethoscope, label: L.medical, to: '/medical', color: 'from-primary to-teal-600' },
    { icon: Layers, label: L.sectors, to: '/sectors', color: 'from-[hsl(218,55%,32%)] to-accent' },
    { icon: Handshake, label: L.partnerships, to: '/partnerships', color: 'from-accent to-primary' },
    { icon: Star, label: L.whyUs, to: '/why-us', color: 'from-accent to-amber-500' },
    { icon: BookOpen, label: L.blog, to: '/blog', color: 'from-primary to-[hsl(218,55%,45%)]' },
    { icon: Phone, label: L.contact, to: '/contact', color: 'from-accent to-orange-600' },
  ];

  const doubledItems = [...items, ...items];

  // Manual frame-based marquee to allow hover pause (pixels-per-second)
  const x = useMotionValue(0);
  const speed = 55; // px/s
  const isRTL = language === 'ar';

  useAnimationFrame((_, delta) => {
    if (paused) return;
    const dx = (speed * delta) / 1000;
    let next = x.get() + (isRTL ? dx : -dx);
    // Reset when scrolled past half (because we doubled)
    // We'll rely on percentage-like reset using a large-ish threshold
    if (!isRTL && next < -10000) next += 10000;
    if (isRTL && next > 10000) next -= 10000;
    x.set(next);
  });

  const translate = useTransform(x, (v) => `translateX(${v}px)`);

  return (
    <section className="py-8 bg-gradient-to-b from-muted/30 via-muted/50 to-muted/30 overflow-hidden border-y border-border/40">
      <div
        className="relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-4 py-2 w-max"
          style={{ transform: translate }}
        >
          {doubledItems.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              className="group flex-shrink-0 flex items-center gap-3 ps-2 pe-5 py-2 bg-card rounded-full shadow-sm hover:shadow-lg border border-border/60 hover:border-accent/50 hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className={`p-2 rounded-full bg-gradient-to-br ${item.color} shadow-inner shadow-black/10 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className="h-4 w-4 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-sm font-semibold text-foreground whitespace-nowrap group-hover:text-primary transition-colors">
                {item.label}
              </span>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HomeMarquee;
