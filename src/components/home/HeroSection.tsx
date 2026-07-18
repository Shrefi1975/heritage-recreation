import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Package, Wrench, HardHat, Cpu } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import heroDesktop from '@/assets/hero-desktop-new.png';
import heroMobile from '@/assets/hero-mobile-port.jpg';

const HeroSection: React.FC = () => {
  const { language } = useLanguage();
  const [imageLoaded, setImageLoaded] = useState(false);

  const heroTitle = language === 'ar' ? 'الشركة العالمية للأعمال والتوريدات'
    : language === 'zh' ? '全球商业供应公司'
    : language === 'fr' ? 'Global Business & Supplies'
    : 'Global Business & Supplies';

  const heroSubtitle = language === 'ar' ? 'ندعم الشركات والمؤسسات في تشاد بخدمات التوريد، التشغيل، والبناء، بخبرة محلية وشبكات توريد وشراكات عالمية.'
    : language === 'zh' ? '可靠的供应 — 从全球资源到本地执行'
    : language === 'fr' ? 'Approvisionnements fiables — des sources mondiales à l\'exécution locale'
    : 'Reliable Supplies — From Global Sources to Local Execution';

  const heroDescription = language === 'ar' ? ''
    : language === 'zh' ? '我们通过供应、运营支持和建筑服务，为乍得的公司、组织、机构和项目提供支持。GBS 将全球供应网络、本地专业知识与遍及乍得各地的现场执行相结合。'
    : language === 'fr' ? 'Nous soutenons les entreprises, organisations, institutions et projets au Tchad par des services d\'approvisionnement, un soutien opérationnel et la construction. GBS combine réseaux d\'approvisionnement mondiaux, expertise locale et exécution sur le terrain à travers le Tchad.'
    : 'We support companies, organizations, institutions, and projects across Chad through supply services, operational support, and construction. GBS combines global supply networks with local expertise and field execution throughout Chad.';

  return (
    <section className="relative min-h-[92vh] sm:min-h-[85vh] md:min-h-[90vh] flex items-start justify-center overflow-hidden pt-16 sm:pt-12 md:pt-16">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 bg-primary transition-opacity duration-700 ${imageLoaded ? 'opacity-0' : 'opacity-100'}`} />
        <picture>
          <source media="(min-width: 768px)" srcSet={heroDesktop} />
          <img
            src={heroMobile}
            alt="Global Business & Supplies"
            className={`w-full h-full object-cover object-center transition-opacity duration-700 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setImageLoaded(true)}
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </picture>
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/25 to-black/45" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto text-center px-4 sm:px-6">
        <div className="mt-4 sm:mt-2 py-4 sm:py-6 md:py-8">

          {/* Title - bigger on mobile */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 sm:mb-5 md:mb-6 drop-shadow-lg md:whitespace-nowrap">
            <span className="text-primary-foreground">
              {heroTitle}
            </span>
          </h1>

          {/* Accent divider */}
          <div className="flex justify-center mb-4 sm:mb-5 md:mb-6">
            <div className="h-1 w-16 sm:w-20 rounded-full bg-gradient-to-r from-accent to-orange-400" />
          </div>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-5 md:mb-6 font-semibold text-primary-foreground drop-shadow-md leading-relaxed">
            {heroSubtitle}
          </p>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed text-primary-foreground">
            {heroDescription}
          </p>

          {/* CTA Buttons — 3 categories */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-4 md:gap-5">
            <Button asChild size="lg" className="bg-gradient-to-r from-accent to-orange-500 hover:from-accent/90 hover:to-orange-500/90 text-primary-foreground px-5 sm:px-6 py-3 sm:py-3.5 gap-2 shadow-xl hover:shadow-2xl transition-all duration-300 text-sm sm:text-sm md:text-base font-semibold rounded-xl border-0 h-auto hover:-translate-y-0.5 w-full sm:w-auto">
              <Link to="/general-trade">
                <Package className="h-4 w-4 sm:h-5 sm:w-5" />
                {language === 'ar' ? 'التجارة العامة والاستيراد والتصدير' : language === 'zh' ? '综合贸易、进口与出口' : language === 'fr' ? 'Commerce Général, Import & Export' : 'General Trade, Import & Export'}
              </Link>
            </Button>

            <Button asChild size="lg" className="bg-white/15 backdrop-blur-md hover:bg-white/25 text-primary-foreground px-5 sm:px-6 py-3 sm:py-3.5 gap-2 border border-white/25 hover:border-white/40 shadow-xl transition-all duration-300 text-sm sm:text-sm md:text-base font-semibold rounded-xl h-auto hover:-translate-y-0.5 w-full sm:w-auto">
              <Link to="/services">
                <Wrench className="h-4 w-4 sm:h-5 sm:w-5" />
                {language === 'ar' ? 'الخدمات' : language === 'zh' ? '服务' : language === 'fr' ? 'Services' : 'Services'}
              </Link>
            </Button>

            <Button asChild size="lg" className="bg-primary/40 backdrop-blur-md hover:bg-primary/60 text-primary-foreground px-5 sm:px-6 py-3 sm:py-3.5 gap-2 border border-white/25 hover:border-white/40 shadow-xl transition-all duration-300 text-sm sm:text-sm md:text-base font-semibold rounded-xl h-auto hover:-translate-y-0.5 w-full sm:w-auto">
              <Link to="/construction">
                <HardHat className="h-4 w-4 sm:h-5 sm:w-5" />
                {language === 'ar' ? 'البناء والمقاولات' : language === 'zh' ? '建筑与承包' : language === 'fr' ? 'Construction' : 'Construction'}
              </Link>
            </Button>

            <Button asChild size="lg" className="bg-transparent backdrop-blur-md hover:bg-white/15 text-primary-foreground px-5 sm:px-6 py-3 sm:py-3.5 gap-2 border border-white/25 hover:border-white/40 shadow-xl transition-all duration-300 text-sm sm:text-sm md:text-base font-semibold rounded-xl h-auto hover:-translate-y-0.5 w-full sm:w-auto">
              <Link to="/it">
                <Cpu className="h-4 w-4 sm:h-5 sm:w-5" />
                {language === 'ar' ? 'تكنولوجيا المعلومات' : language === 'zh' ? '信息技术' : language === 'fr' ? "Technologies de l'Information" : 'Information Technology'}
              </Link>
            </Button>
          </div>


        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block border-none" preserveAspectRatio="none">
          <path d="M0 60L48 55C96 50 192 40 288 35C384 30 480 30 576 33.3C672 36.7 768 43.3 864 45C960 46.7 1056 43.3 1152 38.3C1248 33.3 1344 26.7 1392 23.3L1440 20V60H1392C1344 60 1248 60 1152 60C1056 60 960 60 864 60C768 60 672 60 576 60C480 60 384 60 288 60C192 60 96 60 48 60H0Z" className="fill-background" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
