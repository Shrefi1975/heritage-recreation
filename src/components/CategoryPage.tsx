import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useLanguage } from '@/contexts/LanguageContext';
import { SERVICES, pickText, type LocalizedString } from '@/data/services';

interface CategoryPageProps {
  /** Page title */
  title: LocalizedString;
  /** Tagline / subtitle */
  tagline: LocalizedString;
  /** Long intro text */
  intro: LocalizedString;
  /** Hero background image */
  heroImage: string;
  /** Slugs of services included in this category */
  serviceSlugs: string[];
  /** Eyebrow / category badge label */
  badge: LocalizedString;
  /** Optional extra content rendered after the services grid */
  extraContent?: React.ReactNode;
  /** Optional content rendered directly below the hero, before services grid */
  belowHero?: React.ReactNode;
}

const CategoryPage: React.FC<CategoryPageProps> = ({
  title, tagline, intro, heroImage, serviceSlugs, badge, extraContent, belowHero,
}) => {
  const { language, dir } = useLanguage();
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;
  const items = serviceSlugs
    .map((s) => SERVICES.find((x) => x.slug === s))
    .filter(Boolean) as typeof SERVICES;

  const pageTitle = pickText(language, title);

  React.useEffect(() => {
    document.title = `${pageTitle} | Global Business & Supplies`;
    const desc = pickText(language, intro).slice(0, 155);
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', desc);
  }, [language, pageTitle, intro]);

  const labels = {
    explore: pickText(language, {
      ar: 'استكشف الخدمة', en: 'Explore service', zh: '了解服务', fr: 'Découvrir',
    }),
    services: pickText(language, {
      ar: 'المجالات المتاحة', en: 'Available Areas', zh: '可用领域', fr: 'Domaines disponibles',
    }),
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img src={heroImage} alt={pageTitle} className="w-full h-full object-cover" loading="eager" fetchPriority="high" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-[hsl(218,55%,18%)]/95" />
            <div className="absolute inset-0 bg-black/35" />
          </div>
          <div className="section-container relative z-10 py-14 md:py-20">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
              <span className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm border border-accent/40 rounded-full text-accent font-bold text-xs py-1.5 px-3 mb-4">
                <Sparkles className="h-3.5 w-3.5" />
                {pickText(language, badge)}
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-3">{pageTitle}</h1>
              <p className="text-base md:text-lg text-accent font-semibold mb-3">{pickText(language, tagline)}</p>
              <p className="text-sm md:text-base text-white/90 leading-relaxed">{pickText(language, intro)}</p>
            </motion.div>
          </div>
        </section>

        {belowHero}

        {/* Services grid — compact rectangular cards */}
        <section className="py-12 lg:py-14 bg-gradient-to-b from-background to-muted/20">
          <div className="section-container">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
              {labels.services}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {items.map((s) => {
                const Icon = s.icon;
                return (
                  <Link
                    key={s.slug}
                    to={`/services/${s.slug}`}
                    className="group bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-border block"
                  >
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={s.image}
                        alt={pickText(language, s.title)}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
                      <div className={`absolute top-3 end-3 p-2.5 rounded-xl bg-gradient-to-br ${s.gradient} shadow-lg`}>
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="absolute bottom-3 start-3 end-3">
                        <h3 className="font-bold text-base md:text-lg text-white drop-shadow-lg leading-snug">
                          {pickText(language, s.title)}
                        </h3>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                        {pickText(language, s.description)}
                      </p>
                      <div className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-accent">
                        {labels.explore}
                        <ArrowIcon className="h-3.5 w-3.5" />
                      </div>
                    </div>
                    <div className={`h-1 bg-gradient-to-r ${s.gradient}`} />
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {extraContent}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default CategoryPage;
