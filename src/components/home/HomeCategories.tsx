import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Package, Truck, Wrench, HardHat, Stethoscope, Monitor, Sun, ArrowLeft, ArrowRight, Sparkles, X } from 'lucide-react';
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
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const categories = [
    {
      to: '/general-trade',
      image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1600&q=80',
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
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=1600&q=80',
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
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1600&q=80',
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
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=1600&q=80',
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
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&q=80',
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
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1600&q=80',
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

  const active = openIdx !== null ? categories[openIdx] : null;

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
              'اضغط على أي مجال لاستكشاف تفاصيله.',
              'Click any sector to explore its details.',
              '点击任意领域以了解详情。',
              'Cliquez sur un secteur pour découvrir ses détails.'
            )}
          </p>
        </motion.div>

        {/* Compact icon cards grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 md:gap-4">
          {categories.map((c, idx) => {
            const Icon = c.icon;
            return (
              <motion.button
                key={c.to}
                onClick={() => setOpenIdx(idx)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                whileHover={{ y: -4 }}
                className="group relative flex flex-col items-center gap-3 p-4 md:p-5 rounded-2xl bg-card border border-border/60 shadow-sm hover:shadow-xl hover:border-accent/50 transition-all duration-300 text-center"
              >
                <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${c.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <Icon className="h-7 w-7 md:h-8 md:w-8 text-white" strokeWidth={2.2} />
                </div>
                <h3 className="text-sm md:text-[15px] font-semibold text-primary leading-tight line-clamp-2">
                  {c.title}
                </h3>
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 bg-gradient-to-r ${c.gradient} group-hover:w-3/4 transition-all duration-500 rounded-full`} />
              </motion.button>
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

      {/* Category Modal */}
      <AnimatePresence>
        {active && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpenIdx(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 30 }}
              transition={{ type: 'spring', damping: 30, stiffness: 350 }}
              className="relative w-full max-w-2xl bg-card rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
              dir={dir}
            >
              {/* Hero image */}
              <div className="relative h-56 md:h-64 overflow-hidden">
                <img src={active.image} alt={active.title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                <div className={`absolute inset-0 bg-gradient-to-br ${active.gradient} opacity-50 mix-blend-overlay`} />

                <button
                  onClick={() => setOpenIdx(null)}
                  className="absolute top-4 end-4 p-2.5 rounded-full bg-black/40 hover:bg-black/60 text-white transition-all backdrop-blur-sm border border-white/20 hover:scale-110"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>

                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.15, type: 'spring', stiffness: 200 }}
                  className={`absolute bottom-4 start-6 w-16 h-16 rounded-2xl bg-gradient-to-br ${active.gradient} flex items-center justify-center shadow-2xl border-4 border-white/20`}
                >
                  <active.icon className="h-8 w-8 text-white" />
                </motion.div>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6 md:p-7">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">
                  {active.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed text-[15px]">
                  {active.desc}
                </p>
              </div>

              {/* Footer actions */}
              <div className="p-6 pt-2 border-t border-border/50 bg-muted/30 flex flex-col sm:flex-row gap-3">
                <Button asChild className={`flex-1 h-12 text-base font-semibold bg-gradient-to-r ${active.gradient} hover:opacity-95 text-white shadow-lg`}>
                  <Link to={active.to} onClick={() => setOpenIdx(null)}>
                    {tr(language, 'استكشف المزيد', 'Explore more', '了解更多', 'Explorer plus')}
                    <ArrowIcon className="h-4 w-4 ms-2" />
                  </Link>
                </Button>
                <Button variant="outline" onClick={() => setOpenIdx(null)} className="sm:w-32 h-12 border-2">
                  {tr(language, 'إغلاق', 'Close', '关闭', 'Fermer')}
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HomeCategories;

