import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Fuel, Heart, ShoppingCart, Wifi, Landmark, Sun, Building, Leaf, Stethoscope, GraduationCap, HardHat, ArrowLeft, ArrowRight, Monitor, Wheat, Dumbbell, Hotel, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import SectorModal from '@/components/SectorModal';

const SectorsSection: React.FC = () => {
  const { t, dir, language } = useLanguage();
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;
  const [selectedSector, setSelectedSector] = useState<any>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const sectionTitle = language === 'ar' ? 'توريدات متخصصة في أكثر من 13 قطاعاً حيوياً'
    : language === 'zh' ? '13多个主题领域的专业供应'
    : language === 'fr' ? 'Approvisionnements spécialisés dans plus de 13 secteurs vitaux'
    : 'Specialized Supplies in Over 13 Vital Sectors';

  const sectionSubtitle = language === 'ar' ? 'نوفر حلولاً احترافية ومتكاملة تلبي احتياجات مختلف القطاعات، مع التزام بمعايير الجودة العالمية والخدمة الموثوقة.'
    : language === 'zh' ? '我们为不同领域提供专业和综合的解决方案。'
    : language === 'fr' ? 'Nous fournissons des solutions professionnelles et intégrées pour différents secteurs.'
    : 'We provide professional and integrated solutions for various sectors, with commitment to global quality standards and reliable service.';

  const sectors = [
    {
      id: 'oilGas',
      icon: Fuel,
      image: 'https://www.globizsupplies.com/assets/oil-gas-DzS8RzUL.webp',
      title: language === 'ar' ? 'توريدات حقول النفط' : 'Oil Field Supplies',
      description: language === 'ar' ? 'حلول متكاملة للمعدات والمواد المتخصصة في قطاع النفط والغاز وفقاً لأعلى معايير السلامة' : 'Integrated solutions for specialized equipment in the oil and gas sector',
      data: t.sectors.oilGas,
      color: 'from-amber-600 to-yellow-500',
    },
    {
      id: 'education',
      icon: GraduationCap,
      image: 'https://www.globizsupplies.com/assets/education-FdI_XiqQ.webp',
      title: language === 'ar' ? 'توريدات قطاع التعليم' : 'Education Sector Supplies',
      description: language === 'ar' ? 'توريد المناهج التعليمية والمعدات والمعامل لتطوير البنية التحتية التعليمية' : 'Supplying educational curricula, equipment and labs',
      data: t.sectors.education,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 'healthcare',
      icon: Stethoscope,
      image: 'https://www.globizsupplies.com/assets/healthcare-C2opsxVP.webp',
      title: language === 'ar' ? 'توريدات القطاع الطبي' : 'Medical Sector Supplies',
      description: language === 'ar' ? 'توريد الأدوية والمعدات الطبية والمستلزمات الصحية المعتمدة عالمياً' : 'Supplying medicines, medical equipment and health supplies',
      data: t.sectors.healthcare,
      color: 'from-red-500 to-rose-600',
    },
    {
      id: 'constructionSupplies',
      icon: HardHat,
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
      title: language === 'ar' ? 'توريدات مشاريع البناء' : 'Construction Project Supplies',
      description: language === 'ar' ? 'توريد مواد البناء والمعدات والأدوات المتخصصة لشركات المقاولات والبناء' : 'Supplying construction materials, equipment and tools',
      data: t.sectors.constructionSupplies,
      color: 'from-green-500 to-emerald-600',
    },
    {
      id: 'fmcg',
      icon: ShoppingCart,
      image: 'https://www.globizsupplies.com/assets/fmcg-turP8h1A.webp',
      title: language === 'ar' ? 'سلع استهلاكية (FMCG)، تجارة وتوزيع' : 'Consumer Goods (FMCG), Trade & Distribution',
      description: language === 'ar' ? 'توريد فعال وسريع لضمان توفر المنتجات الاستهلاكية في الأسواق بشكل مستمر' : 'Fast and effective supply to ensure consumer products availability',
      data: t.sectors.fmcg,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 'humanitarian',
      icon: Heart,
      image: 'https://www.globizsupplies.com/assets/humanitarian-DTN-z60P.webp',
      title: language === 'ar' ? 'توريدات المنظمات الإنسانية' : 'Humanitarian Organization Supplies',
      description: language === 'ar' ? 'شريككم الاستراتيجي في توفير الغذاء والمستلزمات الطبية والمعدات الإغاثية للمنظمات الدولية' : 'Your strategic partner in providing food, medical supplies and relief equipment',
      data: t.sectors.humanitarian,
      color: 'from-red-500 to-rose-600',
    },
    {
      id: 'solar',
      icon: Sun,
      image: 'https://www.globizsupplies.com/assets/solar-CIvFE8OP.webp',
      title: language === 'ar' ? 'الطاقة الشمسية' : 'Solar Energy',
      description: language === 'ar' ? 'حلول متقدمة ومعدات للطاقة المتجددة للحفاظ على البيئة وتوفير الطاقة' : 'Advanced solutions and equipment for renewable energy',
      data: t.sectors.solar,
      color: 'from-orange-500 to-yellow-500',
    },
    {
      id: 'agriculture',
      icon: Leaf,
      image: 'https://www.globizsupplies.com/assets/agriculture-al-xTo01.webp',
      title: language === 'ar' ? 'تصدير المنتجات الزراعية' : 'Agricultural Products Export',
      description: language === 'ar' ? 'توريد مواد زراعية وأسمدة عالية الجودة لدعم القطاع الزراعي وزيادة الإنتاجية' : 'Supply of agricultural materials and high-quality fertilizers',
      data: t.sectors.agriculture,
      color: 'from-green-500 to-emerald-600',
    },
    {
      id: 'telecom',
      icon: Wifi,
      image: 'https://www.globizsupplies.com/assets/telecom-BF70LM5y.webp',
      title: language === 'ar' ? 'توريدات الاتصالات' : 'Telecom Supplies',
      description: language === 'ar' ? 'توريد أحدث أجهزة ومعدات الاتصالات لبناء بنية تحتية رقمية متطورة' : 'Supply of latest telecom devices and equipment',
      data: t.sectors.telecom,
      color: 'from-purple-500 to-violet-600',
    },
    {
      id: 'banking',
      icon: Landmark,
      image: 'https://www.globizsupplies.com/assets/banking-C1eh0D3H.webp',
      title: language === 'ar' ? 'البنوك والمؤسسات المالية' : 'Banks & Financial Institutions',
      description: language === 'ar' ? 'حلول تقنية متقدمة للقطاع المصرفي والمالي تشمل البرمجيات والمعدات وأنظمة الأمان' : 'Advanced tech solutions for the banking and financial sector',
      data: t.sectors.banking,
      color: 'from-emerald-500 to-teal-600',
    },
    {
      id: 'government',
      icon: Building,
      image: 'https://www.globizsupplies.com/assets/government-sector-supplies-2048x1024-s7OhY7p3.webp',
      title: language === 'ar' ? 'توريدات القطاع الحكومي' : 'Government Sector Supplies',
      description: language === 'ar' ? 'خدمات توريد مخصصة لجميع الجهات الحكومية مع الالتزام بأعلى معايير الجودة' : 'Custom supply services for all government agencies',
      data: t.sectors.government,
      color: 'from-slate-600 to-gray-700',
    },
    {
      id: 'sports',
      icon: Dumbbell,
      image: 'https://www.globizsupplies.com/assets/sports-D4m-BP9E.webp',
      title: language === 'ar' ? 'المرافق الرياضية' : 'Sports Facilities',
      description: language === 'ar' ? 'توريد معدات وملابس ومستلزمات رياضية متنوعة للمرافق الرياضية والأندية' : 'Supply of sports equipment and supplies',
      data: t.sectors.sports,
      color: 'from-cyan-500 to-blue-500',
    },
    {
      id: 'hotels',
      icon: Hotel,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
      title: language === 'ar' ? 'توريدات الفنادق والسياحة' : 'Hotels & Tourism Supplies',
      description: language === 'ar' ? 'توريد المفروشات والمعدات والمستلزمات الفندقية عالية الجودة لقطاع الضيافة والسياحة' : 'Supply of high-quality hotel furnishings and equipment',
      data: t.sectors.hotels,
      color: 'from-amber-500 to-orange-600',
    },
    {
      id: 'itSolutions',
      icon: Monitor,
      image: 'https://www.globizsupplies.com/assets/it-solutions-CxyuJQuz.webp',
      title: language === 'ar' ? 'حلول تكنولوجيا المعلومات' : 'IT Solutions',
      description: language === 'ar' ? 'توريد أنظمة وحلول تقنية متكاملة للشركات والمؤسسات' : 'Supply of integrated technical systems and solutions',
      data: t.sectors.itSolutions,
      color: 'from-blue-600 to-cyan-500',
    },
    {
      id: 'agriculturalExports',
      icon: Wheat,
      image: 'https://www.globizsupplies.com/assets/agricultural-exports-CmNdjZ3R.webp',
      title: language === 'ar' ? 'صادرات المنتجات الزراعية' : 'Agricultural Product Exports',
      description: language === 'ar' ? 'تصدير المنتجات الزراعية الأفريقية عالية الجودة إلى الأسواق العالمية' : 'Exporting high-quality African agricultural products to global markets',
      data: t.sectors.agriculturalExports,
      color: 'from-green-600 to-lime-500',
    },
  ];

  // Show first 6 on desktop / first 3 on mobile; users can view all via the CTA
  const visibleSectors = sectors.slice(0, 6);

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const handleSectorClick = (sector: any) => {
    setSelectedSector({
      id: sector.id,
      icon: sector.icon,
      title: sector.title,
      description: sector.description,
      fullDescription: sector.data?.fullDescription || sector.description,
      services: sector.data?.services || [],
      image: sector.image,
      color: sector.color,
    });
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <section className="py-16 bg-muted lg:py-24">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary mb-4 md:text-3xl">
              {sectionTitle}
            </h2>
            <p className="text-lg max-w-3xl mx-auto text-popover-foreground">
              {sectionSubtitle}
            </p>
          </motion.div>

          {/* Mobile: show only 3 in a simple grid. Desktop: 6 in grid with arrows. */}
          <div className="relative">
            <button
              onClick={() => scroll('left')}
              aria-label="scroll left"
              className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-card shadow-lg rounded-full p-2 hover:bg-muted transition-colors hidden xl:block"
            >
              <ChevronLeft className="h-6 w-6 text-primary" />
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="scroll right"
              className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-card shadow-lg rounded-full p-2 hover:bg-muted transition-colors hidden xl:block"
            >
              <ChevronRight className="h-6 w-6 text-primary" />
            </button>

            <div
              ref={scrollRef}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
            >
              {visibleSectors.map((sector, idx) => (
                <motion.div
                  key={sector.id}
                  variants={item}
                  className={idx >= 3 ? 'hidden md:block' : ''}
                >
                  <div
                    onClick={() => handleSectorClick(sector)}
                    className="bg-card rounded-2xl overflow-hidden shadow-lg card-hover cursor-pointer group h-full"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={sector.image}
                        alt={sector.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                      <div className={`absolute top-4 end-4 p-3 rounded-xl bg-gradient-to-br ${sector.color} shadow-lg`}>
                        <sector.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="absolute bottom-4 start-4 end-4">
                        <h3 className="font-bold text-lg text-white drop-shadow-lg">
                          {sector.title}
                        </h3>
                      </div>
                    </div>
                    <div className="p-4 text-primary">
                      <p className="text-sm line-clamp-2 text-popover-foreground">
                        {sector.description}
                      </p>
                    </div>
                    <div className={`h-1 bg-gradient-to-r ${sector.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-10"
          >
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/sectors">
                {language === 'ar' ? 'عرض جميع التوريدات' : t.sectors.viewAll}
                <ArrowIcon className="h-5 w-5 ms-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <SectorModal
        isOpen={!!selectedSector}
        onClose={() => setSelectedSector(null)}
        sector={selectedSector}
      />
    </>
  );
};

export default SectorsSection;
