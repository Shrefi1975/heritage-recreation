import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, ShoppingCart, Fuel, Wifi, Landmark, Sun, Building, Leaf, Stethoscope, GraduationCap, Dumbbell, Hotel, HardHat, Monitor, Wheat } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import SectorModal from '@/components/SectorModal';
import PageHeader from '@/components/PageHeader';
import sectorsHeaderImg from '@/assets/headers/sectors-header.jpg';

const Sectors: React.FC = () => {
  const { t, language } = useLanguage();
  const [selectedSector, setSelectedSector] = useState<any>(null);

  const sectors = [
    {
      id: 'oilGas', icon: Fuel,
      image: 'https://www.globizsupplies.com/assets/oil-gas-DzS8RzUL.webp',
      title: language === 'ar' ? 'توريدات حقول النفط' : 'Oil Field Supplies',
      description: language === 'ar' ? 'حلول متكاملة للمعدات والمواد المتخصصة في قطاع النفط والغاز وفقاً لأعلى معايير السلامة' : 'Integrated solutions for specialized equipment in oil and gas',
      data: t.sectors.oilGas, color: 'from-amber-600 to-yellow-500',
    },
    {
      id: 'education', icon: GraduationCap,
      image: 'https://www.globizsupplies.com/assets/education-FdI_XiqQ.webp',
      title: language === 'ar' ? 'توريدات قطاع التعليم' : 'Education Sector Supplies',
      description: language === 'ar' ? 'توريد المناهج التعليمية والمعدات والمعامل لتطوير البنية التحتية التعليمية' : 'Supplying educational curricula, equipment and labs',
      data: t.sectors.education, color: 'from-indigo-500 to-blue-600',
    },
    {
      id: 'healthcare', icon: Stethoscope,
      image: 'https://www.globizsupplies.com/assets/healthcare-C2opsxVP.webp',
      title: language === 'ar' ? 'توريدات القطاع الطبي' : 'Medical Sector Supplies',
      description: language === 'ar' ? 'توريد الأدوية والمعدات الطبية والمستلزمات الصحية المعتمدة عالمياً' : 'Supplying medicines, medical equipment and health supplies',
      data: t.sectors.healthcare, color: 'from-pink-500 to-rose-600',
    },
    {
      id: 'constructionSupplies', icon: HardHat,
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
      title: language === 'ar' ? 'توريدات مشاريع البناء' : 'Construction Project Supplies',
      description: language === 'ar' ? 'توريد مواد البناء والمعدات والأدوات المتخصصة لشركات المقاولات والبناء' : 'Supplying construction materials, equipment and tools',
      data: t.sectors.constructionSupplies, color: 'from-gray-600 to-slate-700',
    },
    {
      id: 'fmcg', icon: ShoppingCart,
      image: 'https://www.globizsupplies.com/assets/fmcg-turP8h1A.webp',
      title: language === 'ar' ? 'سلع استهلاكية (FMCG)، تجارة وتوزيع' : 'Consumer Goods (FMCG), Trade & Distribution',
      description: language === 'ar' ? 'توريد فعال وسريع لضمان توفر المنتجات الاستهلاكية في الأسواق بشكل مستمر' : 'Fast and effective supply to ensure consumer products availability',
      data: t.sectors.fmcg, color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 'humanitarian', icon: Heart,
      image: 'https://www.globizsupplies.com/assets/humanitarian-DTN-z60P.webp',
      title: language === 'ar' ? 'توريدات المنظمات الإنسانية' : 'Humanitarian Organization Supplies',
      description: language === 'ar' ? 'شريككم الاستراتيجي في توفير الغذاء والمستلزمات الطبية والمعدات الإغاثية للمنظمات الدولية' : 'Your strategic partner in providing food, medical supplies and relief equipment',
      data: t.sectors.humanitarian, color: 'from-red-500 to-rose-600',
    },
    {
      id: 'solar', icon: Sun,
      image: 'https://www.globizsupplies.com/assets/solar-CIvFE8OP.webp',
      title: language === 'ar' ? 'الطاقة الشمسية' : 'Solar Energy',
      description: language === 'ar' ? 'حلول متقدمة ومعدات للطاقة المتجددة للحفاظ على البيئة وتوفير الطاقة' : 'Advanced solutions and equipment for renewable energy',
      data: t.sectors.solar, color: 'from-orange-500 to-yellow-500',
    },
    {
      id: 'agriculture', icon: Leaf,
      image: 'https://www.globizsupplies.com/assets/agriculture-al-xTo01.webp',
      title: language === 'ar' ? 'تصدير المنتجات الزراعية' : 'Agricultural Products Export',
      description: language === 'ar' ? 'توريد مواد زراعية وأسمدة عالية الجودة لدعم القطاع الزراعي وزيادة الإنتاجية' : 'Supply of agricultural materials and high-quality fertilizers',
      data: t.sectors.agriculture, color: 'from-green-500 to-emerald-600',
    },
    {
      id: 'telecom', icon: Wifi,
      image: 'https://www.globizsupplies.com/assets/telecom-BF70LM5y.webp',
      title: language === 'ar' ? 'توريدات الاتصالات' : 'Telecom Supplies',
      description: language === 'ar' ? 'توريد أحدث أجهزة ومعدات الاتصالات لبناء بنية تحتية رقمية متطورة' : 'Supply of latest telecom devices and equipment',
      data: t.sectors.telecom, color: 'from-purple-500 to-violet-600',
    },
    {
      id: 'banking', icon: Landmark,
      image: 'https://www.globizsupplies.com/assets/banking-C1eh0D3H.webp',
      title: language === 'ar' ? 'البنوك والمؤسسات المالية' : 'Banks & Financial Institutions',
      description: language === 'ar' ? 'حلول تقنية متقدمة للقطاع المصرفي والمالي تشمل البرمجيات والمعدات وأنظمة الأمان' : 'Advanced tech solutions for banking and financial sector',
      data: t.sectors.banking, color: 'from-emerald-500 to-teal-600',
    },
    {
      id: 'government', icon: Building,
      image: 'https://www.globizsupplies.com/assets/government-sector-supplies-2048x1024-s7OhY7p3.webp',
      title: language === 'ar' ? 'توريدات القطاع الحكومي' : 'Government Sector Supplies',
      description: language === 'ar' ? 'خدمات توريد مخصصة لجميع الجهات الحكومية مع الالتزام بأعلى معايير الجودة' : 'Custom supply services for all government agencies',
      data: t.sectors.government, color: 'from-slate-600 to-gray-700',
    },
    {
      id: 'sports', icon: Dumbbell,
      image: 'https://www.globizsupplies.com/assets/sports-D4m-BP9E.webp',
      title: language === 'ar' ? 'المرافق الرياضية' : 'Sports Facilities',
      description: language === 'ar' ? 'توريد معدات وملابس ومستلزمات رياضية متنوعة للمرافق الرياضية والأندية' : 'Supply of sports equipment and supplies',
      data: t.sectors.sports, color: 'from-cyan-500 to-blue-500',
    },
    {
      id: 'hotels', icon: Hotel,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
      title: language === 'ar' ? 'توريدات الفنادق والسياحة' : 'Hotels & Tourism Supplies',
      description: language === 'ar' ? 'توريد المفروشات والمعدات والمستلزمات الفندقية عالية الجودة لقطاع الضيافة والسياحة' : 'Supply of high-quality hotel furnishings and equipment',
      data: t.sectors.hotels, color: 'from-amber-500 to-orange-600',
    },
    {
      id: 'itSolutions', icon: Monitor,
      image: 'https://www.globizsupplies.com/assets/it-solutions-CxyuJQuz.webp',
      title: language === 'ar' ? 'حلول تكنولوجيا المعلومات' : 'IT Solutions',
      description: language === 'ar' ? 'توريد أنظمة وحلول تقنية متكاملة للشركات والمؤسسات' : 'Supply of integrated technical systems and solutions',
      data: t.sectors.itSolutions, color: 'from-blue-600 to-cyan-500',
    },
    {
      id: 'agriculturalExports', icon: Wheat,
      image: 'https://www.globizsupplies.com/assets/agricultural-exports-CmNdjZ3R.webp',
      title: language === 'ar' ? 'صادرات المنتجات الزراعية' : 'Agricultural Product Exports',
      description: language === 'ar' ? 'تصدير المنتجات الزراعية الأفريقية عالية الجودة إلى الأسواق العالمية' : 'Exporting high-quality African agricultural products to global markets',
      data: t.sectors.agriculturalExports, color: 'from-green-600 to-lime-500',
    },
  ];

  const stats = [
    { value: '13+', label: language === 'ar' ? 'قطاع متخصص' : 'Specialized Sectors' },
    { value: '20+', label: language === 'ar' ? 'شريك عالمي' : 'Global Partners' },
    { value: '24/7', label: language === 'ar' ? 'دعم العملاء' : 'Customer Support' },
  ];

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

  const pageTitle = language === 'ar' ? 'توريدات متخصصة في أكثر من 13 قطاعاً حيوياً' : 'Specialized Supplies in Over 13 Vital Sectors';
  const pageSubtitle = language === 'ar' ? 'نوفر حلولاً احترافية ومتكاملة تلبي احتياجات مختلف القطاعات، مع التزام بمعايير الجودة العالمية والخدمة الموثوقة.' : 'We provide professional and integrated solutions for various sectors, with commitment to global quality standards and reliable service.';

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <PageHeader title={pageTitle} subtitle={pageSubtitle} image={sectorsHeaderImg} />

        {/* GBS Description */}
        <section className="py-12 bg-card">
          <div className="section-container">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                {language === 'ar' ? 'شريك التصدير الموثوق' : 'Your Trusted Export Partner'}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {language === 'ar'
                  ? 'Global Business Supplies (GBS) شركة متخصصة في التصدير والشراء من المصادر الدولية، وتربط الشركات بالمصنّعين والموردين الموثوقين حول العالم. نوفر حلول توريد احترافية، ودعم توزيع منظم، وتمثيلاً تجارياً ميدانياً يضمن موثوقية الإمداد والأسعار التنافسية والأداء التجاري المستدام. إذا كانت شركتك تبحث عن شريك توريد عالمي موثوق، فإن GBS تقدم الكفاءة والشفافية ونتائج قابلة للقياس.'
                  : 'Global Business Supplies (GBS) is a company specialized in supplies and sourcing from international sources, connecting businesses with trusted manufacturers and suppliers worldwide.'}
              </p>

              <div className="flex justify-center gap-8 flex-wrap">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-3xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Sectors heading */}
        <section className="pt-12 pb-4 bg-muted">
          <div className="section-container text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
              {language === 'ar' ? 'قطاعاتنا المتخصصة' : 'Our Specialized Sectors'}
            </h2>
            <p className="text-lg text-muted-foreground">
              {language === 'ar' ? 'نوفر حلولاً متكاملة واحترافية عبر أكثر من 15 قطاعاً حيوياً ومتنوعاً' : 'We provide integrated and professional solutions across over 15 vital and diverse sectors'}
            </p>
          </div>
        </section>

        {/* Sectors Grid */}
        <section className="py-8 pb-16 bg-muted">
          <div className="section-container">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sectors.map((sector, index) => (
                <motion.div key={sector.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}
                  onClick={() => handleSectorClick(sector)}
                  className="bg-card rounded-2xl overflow-hidden shadow-lg card-hover cursor-pointer group">
                  <div className="relative h-48 overflow-hidden">
                    <img src={sector.image} alt={sector.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    <div className={`absolute top-4 end-4 p-3 rounded-xl bg-gradient-to-br ${sector.color} shadow-lg`}>
                      <sector.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="absolute bottom-4 start-4 end-4">
                      <h3 className="font-bold text-lg text-white drop-shadow-lg">{sector.title}</h3>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground line-clamp-2">{sector.description}</p>
                  </div>
                  <div className={`h-1 bg-gradient-to-r ${sector.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="section-container text-center">
            <h2 className="text-3xl font-bold mb-4">
              {language === 'ar' ? 'شريك التصدير الموثوق' : 'Your Trusted Export Partner'}
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
              {language === 'ar'
                ? 'Global Business Supplies (GBS) شركة متخصصة في التصدير والشراء من المصادر الدولية، وتربط الشركات بالمصنّعين والموردين الموثوقين حول العالم. نوفر حلول توريد احترافية، ودعم توزيع منظم، وتمثيلاً تجارياً ميدانياً يضمن موثوقية الإمداد والأسعار التنافسية والأداء التجاري المستدام.'
                : 'Global Business Supplies (GBS) is a company specialized in supplies and sourcing from international sources, connecting businesses with trusted manufacturers and suppliers worldwide.'}
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a href="/#contact" className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-xl font-semibold transition-colors">
                {language === 'ar' ? 'اتصل بنا' : 'Contact Us'}
              </a>
              <a href="/trade-supply" className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-xl font-semibold transition-colors border border-white/30">
                {language === 'ar' ? 'الخدمات' : 'Services'}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <SectorModal isOpen={!!selectedSector} onClose={() => setSelectedSector(null)} sector={selectedSector} />
    </div>
  );
};

export default Sectors;
