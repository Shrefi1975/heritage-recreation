import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Package, Truck, Wrench, HardHat, Stethoscope, Monitor, Sun, ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const tr = (language: string, ar: string, en: string, zh: string, fr: string) => {
  switch (language) {
    case 'ar': return ar;
    case 'zh': return zh;
    case 'fr': return fr;
    default: return en;
  }
};

const HomeCategories: React.FC = () => {
  const { language, dir } = useLanguage();
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  const categories = [
    {
      to: '/general-trade',
      // Cargo containers / global trade — no human figures
      image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&q=80',
      icon: Package,
      gradient: 'from-amber-500 to-orange-600',
      title: tr(language, 'التجارة العامة', 'General Trade', '综合贸易', 'Commerce Général'),
      desc: tr(language,
        'استيراد وتصدير وتوريد جميع الفئات التجارية للسوق التشادي عبر شبكة موردين عالمية.',
        'Import, export and supply across all commercial categories for the Chadian market.',
        '为乍得市场提供各类商业进出口与供应。',
        "Import, export et approvisionnement pour toutes les catégories commerciales au Tchad."
      ),
    },
    {
      to: '/supplies',
      // Warehouse shelves — no human figures
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&q=80',
      icon: Truck,
      gradient: 'from-blue-500 to-indigo-600',
      title: tr(language, 'التوريدات', 'Supplies', '供应', 'Approvisionnements'),
      desc: tr(language,
        'حلول توريد متكاملة للقطاعات الحيوية بمعايير جودة عالمية وشراكات موثوقة.',
        'Integrated supply solutions for vital sectors with global quality standards.',
        '以全球质量标准为重点行业提供综合供应解决方案。',
        "Solutions d'approvisionnement intégrées pour les secteurs vitaux, aux standards mondiaux."
      ),
    },
    {
      to: '/services',
      // Logistics trucks — no human figures
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200&q=80',
      icon: Wrench,
      gradient: 'from-teal-500 to-cyan-600',
      title: tr(language, 'الخدمات', 'Services', '服务', 'Services'),
      desc: tr(language,
        'تأجير، نقل وشحن، توزيع، توريد كوادر، خدمات موارد بشرية، وتأسيس شركات في تشاد.',
        'Leasing, transport & freight, distribution, manpower, HR services and company formation in Chad.',
        '租赁、运输货运、分销、劳动力、人力资源和乍得公司注册。',
        "Location, transport & fret, distribution, main-d'œuvre, RH et création de sociétés au Tchad."
      ),
    },
    {
      to: '/construction',
      // Construction site — no human figures
      image: new URL('@/assets/services/gen-construction-no-people.jpg', import.meta.url).href,
      icon: HardHat,
      gradient: 'from-slate-600 to-zinc-700',
      title: tr(language, 'البناء والمقاولات', 'Construction & Contracting', '建筑与承包', 'Construction & Contracting'),
      desc: tr(language,
        'تنفيذ مشاريع البناء والبنية التحتية وعقود الصيانة والترميم في مختلف أنحاء تشاد.',
        'Building, infrastructure, maintenance and renovation projects across Chad.',
        '在乍得各地实施建筑、基础设施、维护和翻新项目。',
        "Projets de construction, d'infrastructure, maintenance et rénovation à travers le Tchad."
      ),
    },
    {
      to: '/medical',
      // Medical equipment — no human figures
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=1200&q=80',
      icon: Stethoscope,
      gradient: 'from-red-500 to-rose-600',
      title: tr(language, 'المعدات الطبية والأدوية', 'Medical Equipment & Pharma', '医疗设备与药品', 'Équipements Médicaux & Pharma'),
      desc: tr(language,
        'توريد المعدات الطبية والأجهزة التشخيصية والأدوية المعتمدة من موردين دوليين.',
        'Supply of medical equipment, diagnostic devices and certified pharmaceuticals from international vendors.',
        '为医院和诊所提供医疗设备、诊断仪器和认证药品。',
        "Fourniture d'équipements médicaux, dispositifs de diagnostic et médicaments certifiés."
      ),
    },
    {
      to: '/it',
      // Servers / data center — no human figures
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80',
      icon: Monitor,
      gradient: 'from-indigo-500 to-purple-600',
      title: tr(language, 'تكنولوجيا المعلومات', 'Information Technology', '信息技术', 'Technologies de l\'Information'),
      desc: tr(language,
        'حلول شبكات وخوادم وحوسبة سحابية وأمن سيبراني للشركات والمؤسسات.',
        'Networking, servers, cloud and cybersecurity solutions for enterprises and institutions.',
        '为企业和机构提供网络、服务器、云计算与网络安全解决方案。',
        "Solutions réseaux, serveurs, cloud et cybersécurité pour entreprises et institutions."
      ),
    },
    {
      to: '/solar',
      // Solar panels — no human figures
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80',
      icon: Sun,
      gradient: 'from-orange-500 to-yellow-500',
      title: tr(language, 'الطاقة الشمسية', 'Solar Energy', '太阳能', 'Énergie Solaire'),
      desc: tr(language,
        'أنظمة طاقة شمسية متكاملة: ألواح، بطاريات، محولات، ومحطات للاستخدام السكني والتجاري والصناعي.',
        'Complete solar systems: panels, batteries, inverters and plants for residential, commercial and industrial use.',
        '完整的太阳能系统：面板、电池、逆变器和电站，适用于住宅、商业和工业。',
        "Systèmes solaires complets: panneaux, batteries, onduleurs et centrales pour usage résidentiel, commercial et industriel."
      ),
    },
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-background scroll-mt-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full text-accent font-semibold text-sm py-1 px-3 mb-4">
            <Sparkles className="h-4 w-4" />
            {tr(language, 'قطاعاتنا الرئيسية', 'Our Key Sectors', '核心领域', 'Nos Secteurs Clés')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {tr(language,
              'المجالات التي تقود أعمال GBS في تشاد',
              'The sectors driving GBS across Chad',
              'GBS 在乍得的核心业务领域',
              'Les secteurs qui structurent GBS au Tchad'
            )}
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-popover-foreground">
            {tr(language,
              'نموذج تشغيلي موحد يدمج التجارة، التوريد، الخدمات، البناء، والقطاعات المتخصصة بما يضمن كفاءة التنفيذ واستمرارية العمليات.',
              'A unified operating model integrating trade, supply, services, construction and specialized sectors — for efficient execution and continuous operations.',
              '统一的运营模式，整合贸易、供应、服务、建筑与专业领域，确保高效执行与持续运营。',
              "Un modèle opérationnel unifié intégrant commerce, approvisionnement, services, construction et secteurs spécialisés."
            )}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-7">
          {categories.map((c, idx) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.to}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <Link
                  to={c.to}
                  className="group relative block h-[380px] md:h-[420px] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
                >
                  <img
                    src={c.image}
                    alt={c.title}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${c.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-500 mix-blend-overlay`} />

                  <div className="relative h-full flex flex-col justify-end p-6 md:p-7 text-white">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${c.gradient} flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-3 drop-shadow-lg">
                      {c.title}
                    </h3>
                    <p className="text-sm text-white/90 leading-relaxed mb-4 line-clamp-3 drop-shadow">
                      {c.desc}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent group-hover:gap-3 transition-all">
                      {tr(language, 'اكتشف المزيد', 'Discover more', '了解更多', 'En savoir plus')}
                      <ArrowIcon className="h-4 w-4" />
                    </span>
                  </div>

                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${c.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-start`} />
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-10"
        >
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link to="/contact">
              {tr(language, 'تواصل معنا للمزيد', 'Contact us for more', '联系我们了解更多', 'Contactez-nous')}
              <ArrowIcon className="h-5 w-5 ms-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeCategories;
