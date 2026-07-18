import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Package, MapPin, Truck, HardHat, Key, Users, Ship,
  ArrowLeft, ArrowRight, Sparkles,
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import imgSupply from '@/assets/services/trade-import-export-african.jpg';
import imgDistribution from '@/assets/services/transport.jpg';
import imgTransport from '@/assets/services/heavy-equipment-african.jpg';
import imgConstruction from '@/assets/services/construction-african.jpg';
import imgLeasing from '@/assets/services/real-estate-african.jpg';
import imgHR from '@/assets/services/hr-african.jpg';
import imgExport from '@/assets/services/trade.jpg';

const SERVICE_IMAGES: Record<string, string> = {
  'supply-trading': imgSupply,
  'distribution': imgDistribution,
  'transport-freight': imgTransport,
  'construction': imgConstruction,
  'leasing': imgLeasing,
  'manpower-hr': imgHR,
  'export-trade': imgExport,
};

const getText = (language: string, ar: string, en: string, zh: string, fr: string) => {
  switch (language) {
    case 'ar': return ar;
    case 'zh': return zh;
    case 'fr': return fr;
    default: return en;
  }
};

const GlobalBusinessPreview: React.FC = () => {
  const { language, dir } = useLanguage();
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  const sectionTitle = getText(
    language,
    'خدماتنا المتكاملة في تشاد',
    'Our Integrated Services in Chad',
    '我们在乍得的综合服务',
    'Nos Services Intégrés au Tchad'
  );

  const sectionSubtitle = getText(
    language,
    'سبع فئات خدمات احترافية تغطي سلسلة القيمة كاملة — من التوريد والتوزيع إلى النقل والإنشاءات والتأجير والموارد البشرية والتصدير الدولي.',
    'Seven professional service categories covering the full value chain — from supply and distribution to transport, construction, leasing, HR, and international export.',
    '七大专业服务涵盖整个价值链——从供应、分销到运输、建筑、租赁、人力资源和国际出口。',
    "Sept catégories de services professionnels couvrant toute la chaîne de valeur — de l'approvisionnement à l'export international."
  );

  const services = [
    {
      id: 'supply-trading',
      icon: Package,
      gradient: 'from-blue-500 to-indigo-600',
      title: getText(language, 'التوريد والتجارة', 'Supply & Trading', '供应与贸易', 'Approvisionnement & Commerce'),
      desc: getText(language, 'منتجات ومواد وخدمات للشركات والمشاريع في تشاد عبر شبكة موردين واسعة.', 'Products, materials and services for companies and projects in Chad via a wide supplier network.', '通过广泛的供应商网络为乍得企业和项目提供产品、材料和服务。', "Produits, matériaux et services pour entreprises et projets via un large réseau de fournisseurs."),
    },
    {
      id: 'distribution',
      icon: MapPin,
      gradient: 'from-emerald-500 to-teal-600',
      title: getText(language, 'التوزيع والتوصيل المحلي', 'Distribution & Local Delivery', '分销与本地配送', 'Distribution & Livraison Locale'),
      desc: getText(language, 'توزيع، توصيل للعميل النهائي، تخزين ومناولة وإدارة أسطول.', 'Distribution, last-mile delivery, warehousing, handling and fleet management.', '分销、终端配送、仓储、装卸和车队管理。', 'Distribution, livraison finale, entreposage, manutention et gestion de flotte.'),
    },
    {
      id: 'transport-freight',
      icon: Truck,
      gradient: 'from-amber-500 to-orange-600',
      title: getText(language, 'النقل والشحن', 'Transport & Freight', '运输与货运', 'Transport & Fret'),
      desc: getText(language, 'نقل بري، خدمات شحن، تنسيق لوجستي ونقل للشحنات الثقيلة.', 'Land transport, freight services, logistics coordination and heavy cargo handling.', '陆运、货运服务、物流协调及重型货物运输。', 'Transport terrestre, services de fret, coordination logistique et charges lourdes.'),
    },
    {
      id: 'construction',
      icon: HardHat,
      gradient: 'from-slate-600 to-gray-700',
      title: getText(language, 'الإنشاءات والصيانة', 'Construction & Maintenance', '建筑与维护', 'Construction & Maintenance'),
      desc: getText(language, 'خدمات إنشاء، صيانة مبانٍ، أعمال بنية تحتية وصيانة فنية دورية.', 'Construction, building maintenance, infrastructure works and recurring technical maintenance.', '建筑、建筑物维护、基础设施工程及定期技术维护。', "Construction, maintenance des bâtiments, travaux d'infrastructure et maintenance technique."),
    },
    {
      id: 'leasing',
      icon: Key,
      gradient: 'from-yellow-500 to-amber-600',
      title: getText(language, 'خدمات التأجير', 'Leasing & Rental Services', '租赁服务', 'Services de Location'),
      desc: getText(language, 'تأجير سيارات، منازل، معدات ثقيلة، مولدات وكشافات شمسية وغرف مبردة.', 'Cars, houses, heavy equipment, generators, solar lighting and refrigerated rooms.', '汽车、房屋、重型设备、发电机、太阳能照明和冷藏室租赁。', 'Véhicules, maisons, équipements lourds, générateurs, projecteurs solaires et chambres froides.'),
    },
    {
      id: 'manpower-hr',
      icon: Users,
      gradient: 'from-purple-500 to-violet-600',
      title: getText(language, 'القوى العاملة والموارد البشرية', 'Manpower & HR Services', '劳动力与人力资源服务', "Main-d'œuvre & RH"),
      desc: getText(language, 'توريد العمالة الماهرة، التوظيف، إدارة الموارد البشرية وحلول التعهيد.', 'Skilled labor supply, recruitment, HR management and outsourcing solutions.', '熟练劳动力供应、招聘、人力资源管理和外包解决方案。', "Main-d'œuvre qualifiée, recrutement, gestion RH et externalisation."),
    },
    {
      id: 'export-trade',
      icon: Ship,
      gradient: 'from-cyan-500 to-blue-600',
      title: getText(language, 'التصدير والتجارة الدولية', 'Export & International Trade', '出口与国际贸易', 'Export & Commerce International'),
      desc: getText(language, 'تصدير المنتجات الزراعية والمعادن، وتجارة المواد الغذائية والكهربائيات والإلكترونيات.', 'Agricultural and minerals export, plus food, electricals and electronics trading.', '农产品和矿产出口，食品、电气和电子产品贸易。', "Export de produits agricoles et minéraux, commerce de denrées alimentaires et d'électronique."),
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
            {getText(language, 'خدماتنا', 'Our Services', '我们的服务', 'Nos Services')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {sectionTitle}
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-popover-foreground">
            {sectionSubtitle}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.06 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                <Link
                  to={`/services/${service.id}`}
                  className="group flex flex-col bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full border border-border"
                >
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-muted">
                    <img
                      src={SERVICE_IMAGES[service.id]}
                      alt={service.title}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/10 to-transparent" />
                    <div className={`absolute bottom-3 start-3 inline-flex w-11 h-11 rounded-xl bg-gradient-to-br ${service.gradient} items-center justify-center shadow-md`}>
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-bold text-base md:text-lg text-primary group-hover:text-accent transition-colors mb-2 leading-snug min-h-[3rem]">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-grow line-clamp-3">
                      {service.desc}
                    </p>
                    <div className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-accent">
                      {getText(language, 'التفاصيل', 'View details', '查看详情', 'Voir les détails')}
                      <ArrowIcon className="h-3.5 w-3.5" />
                    </div>
                  </div>
                  <div className={`h-1 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-start`} />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-10"
        >
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <a href="#contact">
              {getText(language, 'تواصل معنا للمزيد', 'Contact us for more', '联系我们了解更多', 'Contactez-nous pour en savoir plus')}
              <ArrowIcon className="h-5 w-5 ms-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalBusinessPreview;
