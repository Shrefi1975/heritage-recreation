import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Heart, ShoppingCart, Fuel, Wifi, Landmark, Sun, Building, Leaf,
  Stethoscope, GraduationCap, Dumbbell, Hotel, HardHat, Monitor, Wheat, Sparkles,
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import SectorModal from '@/components/SectorModal';

type L = { ar: string; en: string; fr: string; zh: string };
const pick = (lang: string, t: L) => (t as any)[lang] ?? t.en;

const SECTORS: { id: string; icon: any; image: string; color: string; title: L; desc: L }[] = [
  {
    id: 'oilGas', icon: Fuel, color: 'from-amber-600 to-yellow-500',
    image: 'https://www.globizsupplies.com/assets/oil-gas-DzS8RzUL.webp',
    title: { ar: 'توريدات حقول النفط', en: 'Oil Field Supplies', fr: 'Fournitures Pétrolières', zh: '油田供应' },
    desc: { ar: 'حلول متكاملة للمعدات والمواد المتخصصة في قطاع النفط والغاز وفقاً لأعلى معايير السلامة.', en: 'Integrated solutions for specialized equipment in oil and gas, meeting top safety standards.', fr: 'Solutions intégrées pour équipements pétroliers selon les plus hauts standards de sécurité.', zh: '为石油和天然气行业提供符合最高安全标准的专业设备综合解决方案。' },
  },
  {
    id: 'education', icon: GraduationCap, color: 'from-indigo-500 to-blue-600',
    image: 'https://www.globizsupplies.com/assets/education-FdI_XiqQ.webp',
    title: { ar: 'توريدات قطاع التعليم', en: 'Education Sector Supplies', fr: 'Fournitures Éducation', zh: '教育行业供应' },
    desc: { ar: 'توريد المناهج التعليمية والمعدات والمعامل لتطوير البنية التحتية التعليمية.', en: 'Supplying educational curricula, equipment and labs to upgrade learning infrastructure.', fr: 'Fourniture de programmes, équipements et laboratoires pour moderniser l’éducation.', zh: '提供教学课程、设备和实验室以提升教育基础设施。' },
  },
  {
    id: 'healthcare', icon: Stethoscope, color: 'from-pink-500 to-rose-600',
    image: 'https://www.globizsupplies.com/assets/healthcare-C2opsxVP.webp',
    title: { ar: 'توريدات القطاع الطبي', en: 'Medical Sector Supplies', fr: 'Fournitures Médicales', zh: '医疗行业供应' },
    desc: { ar: 'توريد الأدوية والمعدات الطبية والمستلزمات الصحية المعتمدة عالمياً.', en: 'Supplying internationally certified medicines, medical equipment and health supplies.', fr: 'Fourniture de médicaments, équipements médicaux et produits de santé certifiés.', zh: '供应国际认证的药品、医疗设备和健康用品。' },
  },
  {
    id: 'constructionSupplies', icon: HardHat, color: 'from-gray-600 to-slate-700',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
    title: { ar: 'توريدات مشاريع البناء', en: 'Construction Project Supplies', fr: 'Fournitures de Construction', zh: '建筑项目供应' },
    desc: { ar: 'توريد مواد البناء والمعدات والأدوات المتخصصة لشركات المقاولات والبناء.', en: 'Construction materials, equipment and specialized tools for contractors and builders.', fr: 'Matériaux, équipements et outils spécialisés pour entreprises de construction.', zh: '为承包商和建筑商提供建筑材料、设备和专业工具。' },
  },
  {
    id: 'fmcg', icon: ShoppingCart, color: 'from-blue-500 to-cyan-500',
    image: 'https://www.globizsupplies.com/assets/fmcg-turP8h1A.webp',
    title: { ar: 'سلع استهلاكية (FMCG)', en: 'Consumer Goods (FMCG)', fr: 'Biens de Consommation (FMCG)', zh: '快消品 (FMCG)' },
    desc: { ar: 'توريد فعّال وسريع لضمان توفر المنتجات الاستهلاكية في الأسواق بشكل مستمر.', en: 'Fast and effective supply to ensure continuous availability of consumer products.', fr: 'Approvisionnement rapide pour assurer la disponibilité continue des produits.', zh: '高效快速的供应以确保消费品持续可用。' },
  },
  {
    id: 'humanitarian', icon: Heart, color: 'from-red-500 to-rose-600',
    image: 'https://www.globizsupplies.com/assets/humanitarian-DTN-z60P.webp',
    title: { ar: 'توريدات المنظمات الإنسانية', en: 'Humanitarian Organization Supplies', fr: 'Fournitures Humanitaires', zh: '人道主义组织供应' },
    desc: { ar: 'شريككم الاستراتيجي في توفير الغذاء والمستلزمات الطبية والمعدات الإغاثية.', en: 'Your strategic partner for food, medical supplies and relief equipment.', fr: 'Votre partenaire pour alimentation, fournitures médicales et matériel de secours.', zh: '您在食品、医疗用品和救援设备方面的战略合作伙伴。' },
  },
  {
    id: 'solar', icon: Sun, color: 'from-orange-500 to-yellow-500',
    image: 'https://www.globizsupplies.com/assets/solar-CIvFE8OP.webp',
    title: { ar: 'الطاقة الشمسية', en: 'Solar Energy', fr: 'Énergie Solaire', zh: '太阳能' },
    desc: { ar: 'حلول متقدمة ومعدات للطاقة المتجددة للحفاظ على البيئة وتوفير الطاقة.', en: 'Advanced renewable energy solutions and equipment to save energy and protect the environment.', fr: 'Solutions et équipements avancés en énergies renouvelables.', zh: '先进的可再生能源解决方案和设备。' },
  },
  {
    id: 'agriculture', icon: Leaf, color: 'from-green-500 to-emerald-600',
    image: 'https://www.globizsupplies.com/assets/agriculture-al-xTo01.webp',
    title: { ar: 'الزراعة', en: 'Agriculture', fr: 'Agriculture', zh: '农业' },
    desc: { ar: 'توريد مواد زراعية وأسمدة عالية الجودة لدعم القطاع الزراعي وزيادة الإنتاجية.', en: 'High-quality agricultural inputs and fertilizers to boost productivity.', fr: 'Intrants agricoles et engrais de haute qualité pour la productivité.', zh: '高品质的农业投入品和肥料以提高生产力。' },
  },
  {
    id: 'telecom', icon: Wifi, color: 'from-purple-500 to-violet-600',
    image: 'https://www.globizsupplies.com/assets/telecom-BF70LM5y.webp',
    title: { ar: 'توريدات الاتصالات', en: 'Telecom Supplies', fr: 'Fournitures Télécom', zh: '电信供应' },
    desc: { ar: 'توريد أحدث أجهزة ومعدات الاتصالات لبناء بنية تحتية رقمية متطورة.', en: 'Latest telecom devices and equipment for advanced digital infrastructure.', fr: 'Derniers équipements télécoms pour une infrastructure numérique avancée.', zh: '最新的电信设备以构建先进的数字基础设施。' },
  },
  {
    id: 'banking', icon: Landmark, color: 'from-emerald-500 to-teal-600',
    image: 'https://www.globizsupplies.com/assets/banking-C1eh0D3H.webp',
    title: { ar: 'البنوك والمؤسسات المالية', en: 'Banks & Financial Institutions', fr: 'Banques et Finance', zh: '银行与金融机构' },
    desc: { ar: 'حلول تقنية متقدمة للقطاع المصرفي والمالي تشمل البرمجيات والمعدات وأنظمة الأمان.', en: 'Advanced tech solutions for banking including software, equipment and security systems.', fr: 'Solutions technologiques avancées pour le secteur bancaire.', zh: '为银行业提供先进的技术解决方案。' },
  },
  {
    id: 'government', icon: Building, color: 'from-slate-600 to-gray-700',
    image: 'https://www.globizsupplies.com/assets/government-sector-supplies-2048x1024-s7OhY7p3.webp',
    title: { ar: 'توريدات القطاع الحكومي', en: 'Government Sector Supplies', fr: 'Fournitures Gouvernementales', zh: '政府部门供应' },
    desc: { ar: 'خدمات توريد مخصصة لجميع الجهات الحكومية مع الالتزام بأعلى معايير الجودة.', en: 'Custom supply services for government agencies with top quality standards.', fr: 'Services personnalisés pour les agences gouvernementales.', zh: '为政府机构提供定制供应服务。' },
  },
  {
    id: 'sports', icon: Dumbbell, color: 'from-cyan-500 to-blue-500',
    image: 'https://www.globizsupplies.com/assets/sports-D4m-BP9E.webp',
    title: { ar: 'المرافق الرياضية', en: 'Sports Facilities', fr: 'Installations Sportives', zh: '体育设施' },
    desc: { ar: 'توريد معدات وملابس ومستلزمات رياضية متنوعة للمرافق الرياضية والأندية.', en: 'Sports equipment, apparel and supplies for facilities and clubs.', fr: 'Équipements, vêtements et fournitures pour clubs et installations.', zh: '为体育设施和俱乐部提供运动器材和用品。' },
  },
  {
    id: 'hotels', icon: Hotel, color: 'from-amber-500 to-orange-600',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
    title: { ar: 'الفنادق والسياحة', en: 'Hotels & Tourism', fr: 'Hôtellerie & Tourisme', zh: '酒店与旅游' },
    desc: { ar: 'توريد المفروشات والمعدات والمستلزمات الفندقية عالية الجودة لقطاع الضيافة.', en: 'High-quality hotel furnishings, equipment and supplies for hospitality.', fr: 'Mobilier, équipements et fournitures hôtelières de haute qualité.', zh: '为酒店业提供高品质的家具、设备和用品。' },
  },
  {
    id: 'itSolutions', icon: Monitor, color: 'from-blue-600 to-cyan-500',
    image: 'https://www.globizsupplies.com/assets/it-solutions-CxyuJQuz.webp',
    title: { ar: 'حلول تكنولوجيا المعلومات', en: 'IT Solutions', fr: 'Solutions IT', zh: 'IT 解决方案' },
    desc: { ar: 'توريد أنظمة وحلول تقنية متكاملة للشركات والمؤسسات.', en: 'Integrated technical systems and solutions for companies and institutions.', fr: 'Systèmes et solutions techniques intégrés pour entreprises.', zh: '为企业和机构提供集成的技术系统和解决方案。' },
  },
  {
    id: 'agriculturalExports', icon: Wheat, color: 'from-green-600 to-lime-500',
    image: 'https://www.globizsupplies.com/assets/agricultural-exports-CmNdjZ3R.webp',
    title: { ar: 'صادرات المنتجات الزراعية', en: 'Agricultural Product Exports', fr: 'Exports Agricoles', zh: '农产品出口' },
    desc: { ar: 'تصدير المنتجات الزراعية الأفريقية عالية الجودة إلى الأسواق العالمية.', en: 'Exporting high-quality African agricultural products to global markets.', fr: 'Exportation de produits agricoles africains de haute qualité.', zh: '将高品质的非洲农产品出口到全球市场。' },
  },
];

const SectorsShowcase: React.FC = () => {
  const { language, t } = useLanguage();
  const [selected, setSelected] = useState<any>(null);

  const heading = pick(language, {
    ar: 'توريدات متخصصة في أكثر من 13 قطاعاً حيوياً',
    en: 'Specialized Supplies Across 13+ Vital Sectors',
    fr: 'Fournitures spécialisées dans plus de 13 secteurs vitaux',
    zh: '专业供应覆盖 13+ 个关键行业',
  });
  const sub = pick(language, {
    ar: 'حلول احترافية ومتكاملة تلبي احتياجات مختلف القطاعات بمعايير جودة عالمية.',
    en: 'Professional, integrated solutions for diverse industries — built to global quality standards.',
    fr: 'Solutions professionnelles et intégrées pour des secteurs variés, aux standards mondiaux.',
    zh: '面向各行业的专业一体化解决方案,符合全球质量标准。',
  });
  const badge = pick(language, { ar: 'قطاعاتنا', en: 'Our Sectors', fr: 'Nos Secteurs', zh: '我们的行业' });

  return (
    <section className="py-14 bg-gradient-to-b from-muted/20 via-background to-muted/30 lg:py-[105px]">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full text-accent font-semibold text-xs py-1.5 px-3 mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            {badge}
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">{heading}</h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">{sub}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {SECTORS.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.article
                key={s.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 8) * 0.04 }}
                onClick={() => {
                  const data = (t as any)?.sectors?.[s.id] || {};
                  setSelected({
                    id: s.id,
                    icon: s.icon,
                    title: pick(language, s.title),
                    description: pick(language, s.desc),
                    fullDescription: data.fullDescription || pick(language, s.desc),
                    services: data.services || [],
                    image: s.image,
                    color: s.color,
                  });
                }}
                className="bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-border group cursor-pointer"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={s.image}
                    alt={pick(language, s.title)}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
                  <div className={`absolute top-3 end-3 p-2.5 rounded-xl bg-gradient-to-br ${s.color} shadow-lg`}>
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="absolute bottom-3 start-3 end-3">
                    <h3 className="font-bold text-base md:text-lg text-white drop-shadow-lg leading-snug">
                      {pick(language, s.title)}
                    </h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {pick(language, s.desc)}
                  </p>
                </div>
                <div className={`h-1 bg-gradient-to-r ${s.color}`} />
              </motion.article>
            );
          })}
        </div>
      </div>
      <SectorModal isOpen={!!selected} onClose={() => setSelected(null)} sector={selected} />
    </section>
  );
};

export default SectorsShowcase;
