import { Package, MapPin, Truck, HardHat, Key, Users, Ship, Globe2, UserCog, Building2, Wrench, Tractor, Utensils, Home, Car, Sofa, GraduationCap, ShieldCheck, Factory, Cpu, Server, Code2, Shield, Cloud, Monitor, Sun, Zap, Battery, Droplet, Stethoscope, Microscope, Pill, HeartPulse, Syringe, type LucideIcon } from 'lucide-react';
import imgSupply from '@/assets/services/trade-import-export-african.jpg';
import imgDistribution from '@/assets/services/transport.jpg';
import imgTransport from '@/assets/hero-port-african.jpg';
import imgConstruction from '@/assets/services/gen-construction-no-people.jpg';
import imgLeasing from '@/assets/services/real-estate-african.jpg';
import imgHR from '@/assets/services/workforce-chad.jpg';
import imgExport from '@/assets/services/trade.jpg';
import imgInternationalTrade from '@/assets/hero-global-trade.jpg';
import imgHRServices from '@/assets/services/hr-african.jpg';
import imgCompanyFormation from '@/assets/services/company-formation-chad.jpg';
import imgMaintenance from '@/assets/services/gen-maintenance-no-people.jpg';
import imgHeavyEquipment from '@/assets/services/heavy-equipment-african.jpg';
import imgHouseRental from '@/assets/services/villas-residential.jpg';
import imgCarRental from '@/assets/services/car-rental.jpg';
import imgConstructionEquipmentRental from '@/assets/services/heavy-equipment-rental.jpg';
// Unique, people-free service card images
import imgSupplyTrading from '@/assets/services/gen-supply-trading.jpg';
import imgExportTrade from '@/assets/services/gen-export-trade.jpg';
import imgIntlTrade from '@/assets/services/gen-international-trade.jpg';
import imgCompanyFormationNew from '@/assets/services/gen-company-formation.jpg';
import imgMedHospital from '@/assets/services/gen-med-hospital.jpg';
import imgMedDiagnostic from '@/assets/services/gen-med-diagnostic.jpg';
import imgMedLab from '@/assets/services/gen-med-lab.jpg';
import imgMedPharma from '@/assets/services/gen-med-pharma.jpg';
import imgMedConsumables from '@/assets/services/gen-med-consumables.jpg';
import imgMedClinic from '@/assets/services/gen-med-clinic.jpg';
import imgItNetworking from '@/assets/services/gen-it-networking.jpg';
import imgItServers from '@/assets/services/gen-it-servers.jpg';
import imgItSoftware from '@/assets/services/gen-it-software.jpg';
import imgItSecurity from '@/assets/services/gen-it-security.jpg';
import imgItCloud from '@/assets/services/gen-it-cloud.jpg';
import imgItDevices from '@/assets/services/gen-it-devices.jpg';
import imgSolarResidential from '@/assets/services/gen-solar-residential.jpg';
import imgSolarCommercial from '@/assets/services/gen-solar-commercial.jpg';
import imgSolarOffgrid from '@/assets/services/gen-solar-offgrid.jpg';
import imgSolarPumping from '@/assets/services/gen-solar-pumping.jpg';
import imgSolarStorage from '@/assets/services/gen-solar-storage.jpg';
import imgSolarOm from '@/assets/services/gen-solar-om.jpg';
import imgGtFmcg from '@/assets/services/gen-gt-fmcg.jpg';
import imgGtHomeAppliances from '@/assets/services/gen-gt-home-appliances.jpg';
import imgGtConstructionMaterials from '@/assets/services/gen-gt-construction-materials.jpg';
import imgGtVehicles from '@/assets/services/gen-gt-vehicles.jpg';
import imgGtHeavyMachinery from '@/assets/services/gen-gt-heavy-machinery.jpg';
import imgGtFurniture from '@/assets/services/gen-gt-furniture.jpg';
import imgGtSchoolSupplies from '@/assets/services/gen-gt-school-supplies.jpg';
import imgGtSafetySecurity from '@/assets/services/gen-gt-safety-security.jpg';
import imgGtTrucks from '@/assets/services/gen-gt-trucks.jpg';

export type Lang = 'ar' | 'en' | 'zh' | 'fr';

export interface LocalizedString {
  ar: string;
  en: string;
  zh: string;
  fr: string;
}

export interface ServiceDef {
  slug: string;
  icon: LucideIcon;
  image: string;
  gradient: string;
  title: LocalizedString;
  tagline: LocalizedString;
  description: LocalizedString;
  longDescription: LocalizedString;
  items: LocalizedString[];
  benefits: LocalizedString[];
  related: string[];
}

export const pickText = (lang: string, t: LocalizedString): string => {
  if (lang === 'ar' || lang === 'zh' || lang === 'fr') return t[lang];
  return t.en;
};

export const SERVICES: ServiceDef[] = [
  {
    slug: 'supply-trading',
    icon: Package,
    image: imgSupplyTrading,
    gradient: 'from-blue-500 to-indigo-600',
    title: {
      ar: 'التوريدات التجارية',
      en: 'Commercial Supply',
      zh: '商业供应',
      fr: 'Approvisionnements Commerciaux',
    },
    tagline: {
      ar: 'مصادر موثوقة لجميع احتياجات السوق التشادي',
      en: 'Trusted sources for every need in the Chadian market',
      zh: '为乍得市场提供可靠的供应来源',
      fr: 'Sources fiables pour tous les besoins du marché tchadien',
    },
    description: {
      ar: 'منتجات ومواد وخدمات للشركات والمشاريع في تشاد عبر شبكة موردين واسعة.',
      en: 'Products, materials and services for companies and projects in Chad via a wide supplier network.',
      zh: '通过广泛的供应商网络为乍得企业和项目提供产品、材料和服务。',
      fr: "Produits, matériaux et services pour entreprises et projets via un large réseau de fournisseurs.",
    },
    longDescription: {
      ar: 'نوفر منتجات ومواد وخدمات للشركات والمنظمات غير الحكومية والمشاريع والمؤسسات داخل تشاد، عبر شبكة واسعة من المصنعين والموردين الدوليين والإقليميين والمحليين، مع ضمان الجودة وتنافسية الأسعار. ندير دورة التوريد بالكامل من اختيار المصدر وحتى تسليم البضاعة، مع توثيق فني كامل وضمانات على المنتجات المتخصصة.',
      en: 'We supply products, materials, and services to companies, NGOs, projects, and institutions in Chad through a wide network of international, regional, and local manufacturers and suppliers — with guaranteed quality and competitive pricing. We manage the full supply cycle from sourcing to final delivery, with complete technical documentation and warranties on specialised products.',
      zh: '我们通过广泛的国际、地区和本地制造商及供应商网络，为乍得的公司、非政府组织、项目和机构提供产品、材料和服务，确保质量和价格竞争力。我们管理从采购到最终交付的整个供应周期，并提供完整的技术文档和专业产品保修。',
      fr: "Nous fournissons produits, matériaux et services aux entreprises, ONG, projets et institutions au Tchad, via un large réseau de fabricants et fournisseurs internationaux, régionaux et locaux, avec qualité garantie et prix compétitifs. Nous gérons tout le cycle d'approvisionnement, de la sélection des sources à la livraison finale.",
    },
    items: [
      { ar: 'توريد المعدات والمواد الصناعية', en: 'Industrial equipment & materials supply', zh: '工业设备和材料供应', fr: 'Équipements et matériaux industriels' },
      { ar: 'توريد المنتجات الغذائية والاستهلاكية', en: 'Food & consumer goods supply', zh: '食品和消费品供应', fr: 'Produits alimentaires et de consommation' },
      { ar: 'توريد المواد الطبية والمدرسية', en: 'Medical & educational supplies', zh: '医疗和教育用品', fr: 'Fournitures médicales et scolaires' },
      { ar: 'توريد قطع الغيار والمستلزمات الفنية', en: 'Spare parts & technical supplies', zh: '零部件和技术用品', fr: 'Pièces de rechange et fournitures techniques' },
      { ar: 'إدارة المشتريات وعقود التوريد طويلة الأمد', en: 'Procurement management & long-term supply contracts', zh: '采购管理和长期供应合同', fr: 'Gestion des achats et contrats long terme' },
      { ar: 'الصادرات العالمية', en: 'Global Exports', zh: '全球出口', fr: 'Exportations Mondiales' },
    ],
    benefits: [
      { ar: 'وصول إلى آلاف المنتجات بأسعار جملة', en: 'Access to thousands of products at wholesale pricing', zh: '以批发价获取数千种产品', fr: 'Accès à des milliers de produits à prix de gros' },
      { ar: 'ضمان جودة وامتثال للمواصفات الدولية', en: 'Quality guarantee and international compliance', zh: '质量保证及符合国际标准', fr: 'Qualité garantie et conformité internationale' },
      { ar: 'توفير الوقت والجهد في البحث عن الموردين', en: 'Saves time and effort in supplier sourcing', zh: '节省寻找供应商的时间和精力', fr: 'Gain de temps dans la recherche de fournisseurs' },
    ],
    related: ['distribution', 'transport-freight', 'export-trade'],
  },
  {
    slug: 'distribution',
    icon: MapPin,
    image: imgDistribution,
    gradient: 'from-emerald-500 to-teal-600',
    title: { ar: 'التوزيع والتوصيل المحلي', en: 'Distribution & Local Delivery', zh: '分销与本地配送', fr: 'Distribution & Livraison Locale' },
    tagline: {
      ar: 'شبكة توزيع متكاملة في إنجامينا والمدن الرئيسية',
      en: "Integrated distribution network in N'Djamena and major cities",
      zh: '在恩贾梅纳和主要城市的综合分销网络',
      fr: "Réseau de distribution intégré à N'Djamena et grandes villes",
    },
    description: {
      ar: 'توزيع، توصيل للعميل النهائي، تخزين ومناولة وإدارة أسطول.',
      en: 'Distribution, last-mile delivery, warehousing, handling and fleet management.',
      zh: '分销、终端配送、仓储、装卸和车队管理。',
      fr: 'Distribution, livraison finale, entreposage, manutention et gestion de flotte.',
    },
    longDescription: {
      ar: 'حلول توزيع وتوصيل احترافية تربط بين الموردين ونقاط البيع والعملاء النهائيين في تشاد، مع تخزين آمن ومناولة دقيقة وإدارة أسطول حديثة لضمان وصول المنتج بأفضل حالة وفي الوقت المحدد.',
      en: 'Professional distribution and delivery solutions connecting suppliers, retail outlets, and end customers across Chad — with secure warehousing, careful handling, and modern fleet management ensuring on-time delivery in best condition.',
      zh: '专业的分销与配送解决方案，连接乍得的供应商、零售点和终端客户，配备安全仓储、精细处理和现代车队管理，确保产品按时以最佳状态送达。',
      fr: "Solutions professionnelles de distribution et livraison reliant fournisseurs, points de vente et clients finaux au Tchad — avec entreposage sécurisé, manutention soignée et gestion de flotte moderne.",
    },
    items: [
      { ar: 'التوزيع المحلي إلى نقاط البيع والمؤسسات', en: 'Local distribution to retail outlets and institutions', zh: '向零售点和机构进行本地分销', fr: 'Distribution locale aux points de vente et institutions' },
      { ar: 'التوصيل للعميل النهائي', en: 'Last-mile delivery to end customers', zh: '终端客户配送', fr: 'Livraison au client final' },
      { ar: 'التخزين والمناولة في مستودعات مؤمّنة', en: 'Warehousing & handling in secured depots', zh: '安全仓库内的存储与装卸', fr: 'Entreposage et manutention en dépôts sécurisés' },
      { ar: 'إدارة الأسطول وجدولة الرحلات', en: 'Fleet management & route scheduling', zh: '车队管理和路线调度', fr: 'Gestion de flotte et planification des tournées' },
    ],
    benefits: [
      { ar: 'تقليل تكلفة المخزون لدى العميل', en: 'Reduces client inventory cost', zh: '降低客户库存成本', fr: 'Réduit les coûts de stock client' },
      { ar: 'استجابة سريعة للطلبات العاجلة', en: 'Fast response to urgent orders', zh: '快速响应紧急订单', fr: 'Réponse rapide aux commandes urgentes' },
      { ar: 'تقارير توزيع شفافة ومنتظمة', en: 'Transparent and regular distribution reports', zh: '透明定期的分销报告', fr: 'Rapports de distribution transparents' },
    ],
    related: ['supply-trading', 'transport-freight', 'manpower-hr'],
  },
  {
    slug: 'transport-freight',
    icon: Truck,
    image: imgTransport,
    gradient: 'from-amber-500 to-orange-600',
    title: { ar: 'النقل والشحن', en: 'Transport & Freight', zh: '运输与货运', fr: 'Transport & Fret' },
    tagline: {
      ar: 'حلول نقل بري وشحن داخل تشاد وعبر الحدود',
      en: 'Land transport and freight within Chad and across borders',
      zh: '乍得境内及跨境的陆运和货运解决方案',
      fr: 'Transport terrestre et fret au Tchad et transfrontalier',
    },
    description: {
      ar: 'نقل بري، خدمات شحن، تنسيق لوجستي ونقل للشحنات الثقيلة.',
      en: 'Land transport, freight services, logistics coordination and heavy cargo handling.',
      zh: '陆运、货运服务、物流协调及重型货物运输。',
      fr: 'Transport terrestre, services de fret, coordination logistique et charges lourdes.',
    },
    longDescription: {
      ar: 'أسطول متكامل من شاحنات النقل الثقيل والخفيف لنقل البضائع والمواد بأمان داخل تشاد وعبر الحدود إلى دول الجوار، مع تنسيق لوجستي شامل ونقل آمن للشحنات الثقيلة والمعدات الكبيرة.',
      en: 'A full fleet of heavy and light trucks moving goods and materials safely within Chad and across borders to neighboring countries — with end-to-end logistics coordination and safe handling of heavy shipments and oversized equipment.',
      zh: '完整的重型和轻型卡车车队，安全运输货物，覆盖乍得境内及邻国，并提供全程物流协调及重型货物和超大设备的安全运输。',
      fr: "Flotte complète de camions lourds et légers pour transporter marchandises et matériaux en toute sécurité au Tchad et vers les pays voisins, avec coordination logistique complète et transport sûr de charges lourdes.",
    },
    items: [
      { ar: 'النقل الدولي: من دوالا (الكاميرون) إلى إنجامينا (تشاد)', en: "International transport: Douala (Cameroon) to N'Djamena (Chad)", zh: '国际运输：从杜阿拉（喀麦隆）到恩贾梅纳（乍得）', fr: "Transport international : Douala (Cameroun) à N'Djamena (Tchad)" },
      { ar: 'النقل البري داخل تشاد وإلى دول الجوار', en: 'Land transport in Chad and to neighboring countries', zh: '乍得境内及邻国陆运', fr: 'Transport terrestre au Tchad et pays voisins' },
      { ar: 'خدمات الشحن (بحري / جوي / بري)', en: 'Freight services (sea / air / land)', zh: '货运服务（海/空/陆）', fr: 'Services de fret (mer / air / terre)' },
      { ar: 'تنسيق العمليات اللوجستية الشاملة', en: 'End-to-end logistics coordination', zh: '全程物流协调', fr: 'Coordination logistique complète' },
      { ar: 'نقل الشحنات الثقيلة والمعدات الكبيرة', en: 'Heavy & oversized cargo transport', zh: '重型和超大货物运输', fr: 'Transport de charges lourdes et hors-gabarit' },
    ],
    benefits: [
      { ar: 'تغطية جميع مناطق تشاد بما فيها النائية', en: 'Coverage of all Chad regions including remote areas', zh: '覆盖乍得所有地区，包括偏远地区', fr: 'Couverture de toutes les régions, y compris isolées' },
      { ar: 'تأمين شامل ضد جميع المخاطر', en: 'Comprehensive all-risk insurance', zh: '全方位风险保险', fr: 'Assurance tous risques complète' },
      { ar: 'تتبع GPS وتحديثات منتظمة للعميل', en: 'GPS tracking and regular client updates', zh: 'GPS跟踪及定期客户更新', fr: 'Suivi GPS et mises à jour régulières' },
    ],
    related: ['distribution', 'supply-trading', 'export-trade'],
  },
  {
    slug: 'construction',
    icon: HardHat,
    image: imgConstruction,
    gradient: 'from-slate-600 to-gray-700',
    title: { ar: 'البناء والمقاولات العامة', en: 'Construction & Maintenance', zh: '建筑与维护', fr: 'Construction & Maintenance' },
    tagline: {
      ar: 'بناء، صيانة وبنية تحتية وفق المعايير الدولية',
      en: 'Construction, maintenance and infrastructure to international standards',
      zh: '符合国际标准的建筑、维护和基础设施',
      fr: 'Construction, maintenance et infrastructure aux normes internationales',
    },
    description: {
      ar: 'خدمات إنشاء، صيانة مبانٍ، أعمال بنية تحتية وصيانة فنية دورية.',
      en: 'Construction, building maintenance, infrastructure works and recurring technical maintenance.',
      zh: '建筑、建筑物维护、基础设施工程及定期技术维护。',
      fr: "Construction, maintenance des bâtiments, travaux d'infrastructure et maintenance technique.",
    },
    longDescription: {
      ar: 'خدمات إنشاء وصيانة متكاملة في تشاد تشمل تنفيذ المشاريع السكنية والتجارية، أعمال البنية التحتية، وعقود الصيانة الفنية الدورية، مع إدارة كاملة من التصميم حتى التسليم.',
      en: 'Integrated construction and maintenance services in Chad covering residential and commercial projects, infrastructure works, and recurring technical maintenance contracts — with full management from design to handover.',
      zh: '乍得综合建筑与维护服务，涵盖住宅及商业项目、基础设施工程和定期技术维护合约，从设计到交付提供全程管理。',
      fr: "Services complets de construction et maintenance au Tchad: projets résidentiels et commerciaux, travaux d'infrastructure et contrats de maintenance technique récurrents.",
    },
    items: [
      { ar: 'خدمات الإنشاء (فلل، مكاتب، مجمعات سكنية)', en: 'Construction services (villas, offices, complexes)', zh: '建筑服务（别墅、办公室、综合体）', fr: 'Construction (villas, bureaux, complexes)' },
      { ar: 'صيانة المباني والمرافق', en: 'Building & facility maintenance', zh: '建筑物和设施维护', fr: 'Maintenance des bâtiments et installations' },
      { ar: 'أعمال البنية التحتية', en: 'Infrastructure works', zh: '基础设施工程', fr: "Travaux d'infrastructure" },
      { ar: 'الصيانة الفنية الدورية', en: 'Recurring technical maintenance', zh: '定期技术维护', fr: 'Maintenance technique récurrente' },
    ],
    benefits: [
      { ar: 'التزام كامل بالجداول الزمنية والميزانية', en: 'Full commitment to schedules and budget', zh: '严格遵守时间表和预算', fr: 'Respect total des délais et du budget' },
      { ar: 'مواد بناء عالية الجودة من موردين معتمدين', en: 'High-quality materials from approved suppliers', zh: '认可供应商的优质材料', fr: 'Matériaux de qualité de fournisseurs agréés' },
      { ar: 'ضمان على جميع الأعمال المنفذة', en: 'Warranty on all executed works', zh: '所有施工提供保修', fr: 'Garantie sur tous les travaux exécutés' },
    ],
    related: ['leasing', 'manpower-hr', 'supply-trading'],
  },
  {
    slug: 'leasing',
    icon: Key,
    image: imgLeasing,
    gradient: 'from-yellow-500 to-amber-600',
    title: { ar: 'خدمات التأجير', en: 'Leasing & Rental Services', zh: '租赁服务', fr: 'Services de Location' },
    tagline: {
      ar: 'حلول تأجير مرنة للمركبات والعقارات والمعدات',
      en: 'Flexible rental solutions for vehicles, properties and equipment',
      zh: '车辆、房产和设备的灵活租赁解决方案',
      fr: 'Solutions de location flexibles: véhicules, biens et équipements',
    },
    description: {
      ar: 'تأجير سيارات، منازل، معدات ثقيلة، مولدات وكشافات شمسية وغرف مبردة.',
      en: 'Cars, houses, heavy equipment, generators, solar lighting and refrigerated rooms.',
      zh: '汽车、房屋、重型设备、发电机、太阳能照明和冷藏室租赁。',
      fr: 'Véhicules, maisons, équipements lourds, générateurs, projecteurs solaires et chambres froides.',
    },
    longDescription: {
      ar: 'باقة شاملة من خدمات التأجير قصيرة وطويلة الأمد تغطي السيارات، المنازل، المعدات الثقيلة، مولدات الطاقة، الكشافات الشمسية، والغرف المبردة — لتلبية احتياجات الشركات والمشاريع في تشاد بكل مرونة.',
      en: 'A complete short and long-term rental portfolio covering vehicles, residences, heavy equipment, power generators, solar lighting, and refrigerated rooms — meeting business and project needs in Chad with maximum flexibility.',
      zh: '完整的短期和长期租赁组合，包括车辆、住宅、重型设备、发电机、太阳能照明和冷藏室，灵活满足乍得企业和项目的需求。',
      fr: "Une gamme complète de location court et long terme: véhicules, logements, équipements lourds, générateurs, projecteurs solaires et chambres froides — pour répondre avec flexibilité aux besoins des entreprises et projets au Tchad.",
    },
    items: [
      { ar: 'تأجير السيارات', en: 'Car rental', zh: '汽车租赁', fr: 'Location de véhicules' },
      { ar: 'تأجير المنازل', en: 'House rental', zh: '房屋租赁', fr: 'Location de maisons' },
      { ar: 'تأجير المعدات الثقيلة', en: 'Heavy equipment rental', zh: '重型设备租赁', fr: "Location d'équipements lourds" },
      { ar: 'تأجير مولدات كهربائية وكشافات تعمل بالطاقة الشمسية', en: 'Generators & solar-powered lighting rental', zh: '发电机和太阳能照明租赁', fr: 'Location de générateurs et projecteurs solaires' },
      { ar: 'تأجير غرف مبردة', en: 'Refrigerated room rental', zh: '冷藏室租赁', fr: 'Location de chambres froides' },
    ],
    benefits: [
      { ar: 'مرونة كاملة بدون أعباء الشراء أو الصيانة', en: 'Full flexibility without purchase or maintenance burden', zh: '完全灵活，无需购买或维护负担', fr: 'Flexibilité totale sans achat ni maintenance' },
      { ar: 'صيانة دورية ومساعدة 24/7', en: 'Regular maintenance and 24/7 assistance', zh: '定期维护和全天候支持', fr: 'Maintenance régulière et assistance 24/7' },
      { ar: 'عقود يومية / أسبوعية / شهرية / سنوية', en: 'Daily / weekly / monthly / yearly contracts', zh: '日/周/月/年合约', fr: 'Contrats journaliers / hebdomadaires / mensuels / annuels' },
    ],
    related: ['construction', 'transport-freight', 'manpower-hr'],
  },
  {
    slug: 'manpower-hr',
    icon: Users,
    image: imgHR,
    gradient: 'from-purple-500 to-violet-600',
    title: { ar: 'توريد القوى العاملة وخدمات الموارد البشرية', en: 'Manpower Supply & HR Services', zh: '劳动力供应与人力资源服务', fr: "Main-d'œuvre & Services RH" },
    tagline: {
      ar: 'كوادر مؤهلة وحلول موارد بشرية متكاملة',
      en: 'Qualified talent and integrated HR solutions',
      zh: '合格人才和综合人力资源解决方案',
      fr: 'Talents qualifiés et solutions RH intégrées',
    },
    description: {
      ar: 'توريد العمالة الماهرة، التوظيف، إدارة الموارد البشرية وحلول التعهيد.',
      en: 'Skilled labor supply, recruitment, HR management and outsourcing solutions.',
      zh: '熟练劳动力供应、招聘、人力资源管理和外包解决方案。',
      fr: "Main-d'œuvre qualifiée, recrutement, gestion RH et externalisation.",
    },
    longDescription: {
      ar: 'حلول قوى عاملة وموارد بشرية شاملة في تشاد تغطي توريد العمالة الماهرة وخدمات التوظيف وإدارة الموارد البشرية وحلول التعهيد، لتمكين عملائنا من التركيز على نشاطهم الأساسي.',
      en: 'Comprehensive manpower and HR solutions in Chad covering skilled labor supply, recruitment services, HR management, and outsourcing — letting our clients focus on their core business.',
      zh: '乍得全面的劳动力与人力资源解决方案，涵盖熟练劳动力供应、招聘服务、人力资源管理和外包解决方案，让客户专注于核心业务。',
      fr: "Solutions complètes de main-d'œuvre et RH au Tchad: fourniture de personnel qualifié, recrutement, gestion RH et externalisation — pour que nos clients se concentrent sur leur cœur de métier.",
    },
    items: [
      { ar: 'توريد العمالة الماهرة', en: 'Skilled labor supply', zh: '熟练劳动力供应', fr: "Fourniture de main-d'œuvre qualifiée" },
      { ar: 'خدمات التوظيف', en: 'Recruitment services', zh: '招聘服务', fr: 'Services de recrutement' },
      { ar: 'إدارة الموارد البشرية', en: 'HR management', zh: '人力资源管理', fr: 'Gestion des ressources humaines' },
      { ar: 'حلول التعهيد (Outsourcing)', en: 'Outsourcing solutions', zh: '外包解决方案', fr: "Solutions d'externalisation" },
    ],
    benefits: [
      { ar: 'تخفيض تكلفة التوظيف بنسبة تصل إلى 40٪', en: 'Reduces recruitment cost by up to 40%', zh: '招聘成本最多降低40%', fr: "Réduit les coûts de recrutement jusqu'à 40%" },
      { ar: 'امتثال قانوني كامل وحماية من المخاطر', en: 'Full legal compliance and risk protection', zh: '完全合法合规，规避风险', fr: 'Conformité légale totale et protection' },
      { ar: 'وصول إلى كوادر متعددة اللغات والخبرات', en: 'Access to multilingual and multi-skilled talent', zh: '多语种多技能人才库', fr: 'Accès à des talents multilingues et polyvalents' },
    ],
    related: ['construction', 'distribution', 'supply-trading'],
  },
  {
    slug: 'export-trade',
    icon: Ship,
    image: imgExportTrade,
    gradient: 'from-cyan-500 to-blue-600',
    title: { ar: 'الصادرات التجارية', en: 'Commercial Exports', zh: '商业出口', fr: 'Exportations Commerciales' },
    tagline: {
      ar: 'ربط منتجات تشاد بالأسواق العالمية',
      en: "Connecting Chad's products to global markets",
      zh: '将乍得产品对接全球市场',
      fr: 'Relier les produits du Tchad aux marchés mondiaux',
    },
    description: {
      ar: 'تصدير المنتجات الزراعية والمعادن، وتجارة المواد الغذائية والكهربائيات والإلكترونيات.',
      en: 'Agricultural and minerals export, plus food, electricals and electronics trading.',
      zh: '农产品和矿产出口，食品、电气和电子产品贸易。',
      fr: "Export de produits agricoles et minéraux, commerce de denrées alimentaires et d'électronique.",
    },
    longDescription: {
      ar: 'ندعم التصدير من تشاد إلى الأسواق الدولية ونتاجر في فئات منتجات إستراتيجية تشمل المنتجات الزراعية والمعادن والمواد الغذائية والكهربائيات والإلكترونيات، مع إدارة كاملة لإجراءات التصدير والشحن والتوثيق.',
      en: 'We support exports from Chad to international markets and trade in strategic product categories including agricultural products, minerals, food commodities, and electricals & electronics — with full management of export, shipping, and documentation procedures.',
      zh: '我们支持乍得向国际市场出口，并经营战略性产品类别，包括农产品、矿产、食品和电气电子产品，全面管理出口、运输和单据流程。',
      fr: "Nous soutenons les exportations du Tchad vers les marchés internationaux et commercialisons des catégories stratégiques: produits agricoles, minéraux, denrées alimentaires, et électricité & électronique — avec gestion complète de l'export, du fret et de la documentation.",
    },
    items: [
      { ar: '1- تصدير المنتجات الزراعية', en: '1- Agricultural products export', zh: '1- 农产品出口', fr: '1- Export de produits agricoles' },
      { ar: '2- تصدير المعادن', en: '2- Minerals export', zh: '2- 矿产出口', fr: '2- Export de minéraux' },
      { ar: '3- تجارة المواد الغذائية', en: '3- Food commodities trading', zh: '3- 食品贸易', fr: '3- Commerce de denrées alimentaires' },
      { ar: '4- تجارة الكهربائيات والإلكترونيات', en: '4- Electricals & electronics trading', zh: '4- 电气电子产品贸易', fr: "4- Commerce d'électricité et d'électronique" },
    ],
    benefits: [
      { ar: 'تقليل وقت التخليص الجمركي بنسبة تصل إلى 50٪', en: 'Reduces customs clearance time by up to 50%', zh: '清关时间最多缩短50%', fr: "Réduit le temps de dédouanement jusqu'à 50%" },
      { ar: 'امتثال كامل للوائح التجارة الدولية', en: 'Full compliance with international trade regulations', zh: '完全符合国际贸易法规', fr: 'Conformité totale aux réglementations commerciales' },
      { ar: 'تتبع مباشر لكل شحنة حتى التسليم', en: 'Live tracking of every shipment until delivery', zh: '每批货物实时跟踪直至送达', fr: 'Suivi en temps réel jusqu\'à la livraison' },
    ],
    related: ['supply-trading', 'transport-freight', 'distribution'],
  },
  {
    slug: 'international-trade',
    icon: Globe2,
    image: imgIntlTrade,
    gradient: 'from-sky-500 to-indigo-600',
    title: { ar: 'التجارة الدولية', en: 'International Trade', zh: '国际贸易', fr: 'Commerce International' },
    tagline: {
      ar: 'تجارة عابرة للحدود مع شركاء دوليين موثوقين',
      en: 'Cross-border trade with trusted international partners',
      zh: '与可信赖的国际伙伴进行跨境贸易',
      fr: 'Commerce transfrontalier avec des partenaires internationaux',
    },
    description: {
      ar: 'تنسيق عمليات التجارة الدولية، الامتثال التجاري، وإدارة العلاقات مع الشركاء الدوليين.',
      en: 'International trade coordination, trade compliance, and management of international partner relationships.',
      zh: '国际贸易协调、合规及国际合作伙伴关系管理。',
      fr: "Coordination du commerce international, conformité et gestion des partenaires internationaux.",
    },
    longDescription: {
      ar: 'تدير GBS عمليات التجارة الدولية من وإلى تشاد عبر شبكة من الشركاء الدوليين، مع تنسيق كامل للوثائق، والامتثال التجاري، والخدمات اللوجستية، والاستيراد والتصدير، لضمان كفاءة العمليات واستمراريتها بأعلى معايير الموثوقية.',
      en: 'GBS manages international trade flows to and from Chad through a network of international partners — with full document coordination, trade compliance, logistics, and import/export operations to ensure efficient and reliable performance.',
      zh: 'GBS 通过国际合作伙伴网络管理乍得进出口贸易，提供文件协调、贸易合规、物流以及进出口操作的全面服务。',
      fr: "GBS gère les flux de commerce international à destination et en provenance du Tchad via un réseau de partenaires internationaux, avec coordination documentaire, conformité, logistique et opérations import/export.",
    },
    items: [
      { ar: 'تنسيق عمليات الاستيراد والتصدير', en: 'Import & export coordination', zh: '进出口协调', fr: 'Coordination import / export' },
      { ar: 'الامتثال التجاري والوثائق الدولية', en: 'Trade compliance & international documentation', zh: '贸易合规及国际单据', fr: 'Conformité commerciale et documents internationaux' },
      { ar: 'إدارة العلاقات مع الشركاء الدوليين', en: 'International partner relationship management', zh: '国际合作伙伴关系管理', fr: 'Gestion des partenaires internationaux' },
      { ar: 'تنسيق الشحن والتأمين عبر الحدود', en: 'Cross-border shipping & insurance coordination', zh: '跨境运输和保险协调', fr: 'Fret et assurance transfrontaliers' },
    ],
    benefits: [
      { ar: 'وصول واسع للأسواق الإقليمية والدولية', en: 'Wide access to regional and international markets', zh: '广泛进入区域和国际市场', fr: 'Large accès aux marchés régionaux et internationaux' },
      { ar: 'إدارة شاملة للمخاطر التجارية', en: 'Comprehensive commercial risk management', zh: '全面商业风险管理', fr: 'Gestion complète des risques commerciaux' },
      { ar: 'شركاء دوليون موثوقون', en: 'Trusted international partners', zh: '可信赖的国际伙伴', fr: 'Partenaires internationaux fiables' },
    ],
    related: ['export-trade', 'supply-trading', 'transport-freight'],
  },
  {
    slug: 'hr-services',
    icon: UserCog,
    image: imgHRServices,
    gradient: 'from-fuchsia-500 to-purple-600',
    title: { ar: 'خدمات الموارد البشرية', en: 'HR Services', zh: '人力资源服务', fr: 'Services RH' },
    tagline: {
      ar: 'حلول موارد بشرية متكاملة بمعايير دولية',
      en: 'Integrated HR solutions with international standards',
      zh: '符合国际标准的综合人力资源解决方案',
      fr: 'Solutions RH intégrées aux normes internationales',
    },
    description: {
      ar: 'تنسيق الموارد البشرية، خدمات التوظيف، وحلول إدارية متوافقة مع قوانين العمل في تشاد.',
      en: 'HR coordination, recruitment services, and management solutions compliant with Chadian labor law.',
      zh: '符合乍得劳动法的人力资源协调、招聘和管理解决方案。',
      fr: "Coordination RH, recrutement et solutions de gestion conformes au droit du travail tchadien.",
    },
    longDescription: {
      ar: 'تدعم GBS المؤسسات والمشاريع من خلال خدمات الموارد البشرية الكاملة، بما في ذلك التوظيف، وإدارة الأداء، وعقود العمل، وتنسيق الموارد البشرية بما يتوافق مع المتطلبات التشغيلية وقوانين العمل المحلية.',
      en: 'GBS supports institutions and projects with full HR services — recruitment, performance management, employment contracts, and HR coordination — aligned with operational requirements and local labor laws.',
      zh: 'GBS 为机构和项目提供全面的人力资源服务：招聘、绩效管理、劳动合同和人力资源协调，符合运营需求及当地劳动法。',
      fr: "GBS soutient les institutions et projets avec des services RH complets: recrutement, gestion de la performance, contrats et coordination RH, conformes aux exigences opérationnelles et au droit local.",
    },
    items: [
      { ar: 'استقطاب وتوظيف الكفاءات', en: 'Talent acquisition & recruitment', zh: '人才招募与招聘', fr: 'Acquisition et recrutement de talents' },
      { ar: 'إدارة عقود العمل وكشوف الرواتب', en: 'Employment contracts & payroll management', zh: '劳动合同与薪酬管理', fr: 'Contrats de travail et gestion de la paie' },
      { ar: 'تدريب وتطوير الكوادر', en: 'Staff training & development', zh: '员工培训与发展', fr: 'Formation et développement du personnel' },
      { ar: 'الامتثال لقوانين العمل المحلية', en: 'Compliance with local labor laws', zh: '遵守当地劳动法', fr: 'Conformité au droit du travail local' },
    ],
    benefits: [
      { ar: 'حلول موارد بشرية موفِّرة للوقت والتكلفة', en: 'Time- and cost-effective HR solutions', zh: '节省时间和成本的人力资源方案', fr: 'Solutions RH économiques et rapides' },
      { ar: 'امتثال قانوني كامل', en: 'Full legal compliance', zh: '完全合法合规', fr: 'Conformité légale totale' },
      { ar: 'كوادر مؤهلة بكفاءات متعددة', en: 'Qualified multi-skilled talent', zh: '具备多项技能的合格人才', fr: 'Talents qualifiés et polyvalents' },
    ],
    related: ['manpower-hr', 'company-formation', 'leasing'],
  },
  {
    slug: 'company-formation',
    icon: Building2,
    image: imgCompanyFormationNew,
    gradient: 'from-teal-500 to-emerald-600',
    title: { ar: 'تأسيس الشركات في تشاد', en: 'Company Formation in Chad', zh: '在乍得成立公司', fr: 'Création de Sociétés au Tchad' },
    tagline: {
      ar: 'خدمات احترافية لتأسيس وتسجيل الشركات في تشاد',
      en: 'Professional services for incorporating and registering companies in Chad',
      zh: '在乍得注册和成立公司的专业服务',
      fr: "Services professionnels pour l'immatriculation des sociétés au Tchad",
    },
    description: {
      ar: 'دعم إجراءات التأسيس، التسجيل، والتراخيص للشركات الأجنبية والمحلية في تشاد.',
      en: 'Support for incorporation, registration, and licensing of foreign and local companies in Chad.',
      zh: '为外资和本地公司在乍得提供注册、成立和许可支持。',
      fr: "Accompagnement de l'immatriculation, l'enregistrement et la licence des entreprises étrangères et locales au Tchad.",
    },
    longDescription: {
      ar: 'تساعد GBS المستثمرين والشركات الأجنبية والمحلية في إنجاز جميع إجراءات تأسيس الشركات في تشاد، من اختيار الشكل القانوني إلى التسجيل والحصول على التراخيص والامتثال الضريبي، مع متابعة كاملة في كافة المراحل.',
      en: 'GBS supports investors and foreign/local companies in completing all incorporation steps in Chad — from selecting the legal form to registration, licensing, and tax compliance — with end-to-end follow-up.',
      zh: 'GBS 协助投资者及外资/本地公司完成在乍得设立公司的所有步骤：法律形式选择、注册、许可和税务合规，全程跟进。',
      fr: "GBS accompagne investisseurs et entreprises étrangères/locales dans toutes les étapes de la création au Tchad : forme juridique, immatriculation, licences, conformité fiscale.",
    },
    items: [
      { ar: 'اختيار الشكل القانوني المناسب', en: 'Selection of the appropriate legal form', zh: '选择适合的法律形式', fr: 'Choix de la forme juridique adaptée' },
      { ar: 'تسجيل الشركات في السجل التجاري', en: 'Company registration in the commercial registry', zh: '商业登记处注册公司', fr: 'Enregistrement au registre du commerce' },
      { ar: 'الحصول على التراخيص والاعتمادات', en: 'Obtaining licenses and approvals', zh: '取得许可证和批准', fr: "Obtention des licences et agréments" },
      { ar: 'الامتثال الضريبي والقانوني', en: 'Tax and legal compliance', zh: '税务和法律合规', fr: 'Conformité fiscale et juridique' },
      { ar: 'فتح الحسابات البنكية للشركات', en: 'Opening corporate bank accounts', zh: '开设公司银行账户', fr: 'Ouverture de comptes bancaires professionnels' },
    ],
    benefits: [
      { ar: 'تأسيس سريع وموثوق للشركات', en: 'Fast and reliable company incorporation', zh: '快速可靠的公司注册', fr: 'Création rapide et fiable' },
      { ar: 'إرشاد قانوني محلي متخصص', en: 'Specialized local legal guidance', zh: '专业本地法律指导', fr: 'Conseil juridique local spécialisé' },
      { ar: 'متابعة كاملة بعد التأسيس', en: 'Full post-incorporation follow-up', zh: '成立后全程跟进', fr: 'Suivi post-création complet' },
    ],
    related: ['hr-services', 'manpower-hr', 'supply-trading'],
  },
  {
    slug: 'maintenance',
    icon: Wrench,
    image: imgMaintenance,
    gradient: 'from-zinc-600 to-slate-700',
    title: { ar: 'الصيانة والترميم', en: 'Maintenance & Renovation', zh: '维护与修复', fr: 'Maintenance & Rénovation' },
    tagline: {
      ar: 'صيانة دورية وترميم احترافي للمباني والمرافق',
      en: 'Recurring maintenance and professional renovation for buildings and facilities',
      zh: '建筑和设施的定期维护和专业修复',
      fr: 'Maintenance régulière et rénovation professionnelle',
    },
    description: {
      ar: 'خدمات صيانة فنية دورية وترميم شامل للمباني والمرافق في تشاد.',
      en: 'Recurring technical maintenance and comprehensive renovation of buildings and facilities in Chad.',
      zh: '乍得建筑和设施的定期技术维护和全面修复。',
      fr: "Maintenance technique récurrente et rénovation complète des bâtiments et installations au Tchad.",
    },
    longDescription: {
      ar: 'نقدم خدمات صيانة شاملة تشمل الصيانة الكهربائية والميكانيكية والصحية، وأعمال الترميم وإعادة التأهيل للمباني والمرافق العامة والخاصة، مع فرق فنية مؤهلة وعقود صيانة دورية بأسعار تنافسية.',
      en: 'Comprehensive maintenance services covering electrical, mechanical, and plumbing maintenance, plus renovation and rehabilitation of public and private buildings — with qualified technical teams and competitive recurring maintenance contracts.',
      zh: '全面的维护服务，涵盖电气、机械和管道维护，以及公共和私人建筑的修复和翻新，配备合格的技术团队和具有竞争力的定期维护合同。',
      fr: "Services complets: maintenance électrique, mécanique et plomberie, rénovation et réhabilitation des bâtiments publics et privés, avec des équipes techniques qualifiées et contrats récurrents compétitifs.",
    },
    items: [
      { ar: 'الصيانة الكهربائية والميكانيكية', en: 'Electrical & mechanical maintenance', zh: '电气和机械维护', fr: 'Maintenance électrique et mécanique' },
      { ar: 'الصيانة الصحية والسباكة', en: 'Plumbing & sanitary maintenance', zh: '管道和卫生维护', fr: 'Plomberie et sanitaire' },
      { ar: 'ترميم وإعادة تأهيل المباني', en: 'Building renovation & rehabilitation', zh: '建筑修复和翻新', fr: 'Rénovation et réhabilitation des bâtiments' },
      { ar: 'عقود الصيانة الدورية', en: 'Recurring maintenance contracts', zh: '定期维护合同', fr: 'Contrats de maintenance récurrents' },
      { ar: 'الاستجابة الطارئة 24/7', en: '24/7 emergency response', zh: '7×24小时紧急响应', fr: 'Intervention d\'urgence 24/7' },
    ],
    benefits: [
      { ar: 'تمديد عمر الأصول وتقليل الأعطال', en: 'Extends asset life and reduces breakdowns', zh: '延长资产寿命，减少故障', fr: 'Prolonge la durée de vie et réduit les pannes' },
      { ar: 'فرق فنية مؤهلة ومعتمدة', en: 'Qualified and certified technical teams', zh: '合格认证的技术团队', fr: 'Équipes techniques qualifiées et certifiées' },
      { ar: 'تكاليف صيانة قابلة للتنبؤ', en: 'Predictable maintenance costs', zh: '可预测的维护成本', fr: 'Coûts de maintenance prévisibles' },
    ],
    related: ['construction', 'leasing', 'supply-trading'],
  },
  {
    slug: 'heavy-equipment',
    icon: Tractor,
    image: imgHeavyEquipment,
    gradient: 'from-orange-500 to-red-600',
    title: {
      ar: 'تأجير المعدات الثقيلة',
      en: 'Heavy Equipment Rental',
      zh: '重型设备租赁',
      fr: "Location d'Équipements Lourds",
    },
    tagline: {
      ar: 'حلول تأجير مرنة للحفارات والرافعات وآلات البناء في تشاد',
      en: 'Flexible rental of excavators, cranes and construction machinery across Chad',
      zh: '为乍得提供挖掘机、起重机和施工机械的灵活租赁',
      fr: 'Location flexible de pelles, grues et engins de chantier au Tchad',
    },
    description: {
      ar: 'تأجير معدات ثقيلة لقطاعات البناء والنفط والغاز والتعدين والمشاريع الحكومية في تشاد.',
      en: 'Heavy equipment rental for construction, oil & gas, mining and government projects in Chad.',
      zh: '为乍得的建筑、油气、采矿和政府项目提供重型设备租赁。',
      fr: "Location d'engins lourds pour la construction, le pétrole/gaz, les mines et les projets publics au Tchad.",
    },
    longDescription: {
      ar: 'نقدم خدمات تأجير المعدات الثقيلة في تشاد لقطاعات البناء والنفط والغاز والتعدين والمنظمات غير الحكومية والمشاريع الحكومية. انطلاقًا من مقرنا في نجامينا، نوفر حلول تأجير قصيرة وطويلة الأجل بالإضافة إلى حلول متكاملة لتجهيزات المشاريع في جميع أنحاء البلاد بما في ذلك المناطق النائية.',
      en: "We provide heavy equipment rental services in Chad for construction, oil & gas, mining, NGOs and government projects. From our base in N'Djamena we offer short and long-term rental as well as complete project equipping solutions across the country, including remote areas.",
      zh: '我们在乍得为建筑、油气、采矿、非政府组织及政府项目提供重型设备租赁。从恩贾梅纳总部出发，我们提供短期和长期租赁以及覆盖全国（包括偏远地区）的整体项目设备解决方案。',
      fr: "Nous proposons la location d'engins lourds au Tchad pour la construction, le pétrole/gaz, les mines, les ONG et les projets gouvernementaux. Depuis N'Djamena, nous offrons des solutions de location courte et longue durée, ainsi que des solutions d'équipement de projet sur tout le territoire, y compris les zones reculées.",
    },
    items: [
      { ar: 'حفارات وجرافات ولوادر وممهدات', en: 'Excavators, bulldozers, loaders & graders', zh: '挖掘机、推土机、装载机和平地机', fr: 'Pelles, bulldozers, chargeuses et niveleuses' },
      { ar: 'رافعات ومعدات رفع', en: 'Cranes & lifting equipment', zh: '起重机与起重设备', fr: 'Grues et équipements de levage' },
      { ar: 'مدحلات وضاغطات', en: 'Rollers & compactors', zh: '压路机与压实机', fr: 'Rouleaux et compacteurs' },
      { ar: 'شاحنات قلابة ومعدات نقل', en: 'Dump trucks & haulage equipment', zh: '自卸车与运输设备', fr: 'Camions-bennes et équipements de transport' },
      { ar: 'أجهزة حفر ومعدات خرسانة وأسفلت', en: 'Drilling rigs, concrete & asphalt equipment', zh: '钻机、混凝土与沥青设备', fr: 'Foreuses, équipements béton et asphalte' },
      { ar: 'مولدات كهربائية وأبراج إنارة', en: 'Power generators & lighting towers', zh: '发电机与照明塔', fr: "Générateurs et tours d'éclairage" },
    ],
    benefits: [
      { ar: 'تأجير يومي وأسبوعي وشهري وطويل الأجل', en: 'Daily, weekly, monthly and long-term rental', zh: '按日、周、月及长期租赁', fr: 'Location journalière, hebdomadaire, mensuelle et longue durée' },
      { ar: 'مشغلون معتمدون بخبرة محلية واسعة', en: 'Certified operators with extensive local experience', zh: '具有丰富本地经验的认证操作员', fr: 'Opérateurs certifiés avec une forte expérience locale' },
      { ar: 'صيانة ودعم فني وأسعار تنافسية', en: 'Maintenance, technical support & competitive pricing', zh: '维护、技术支持和有竞争力的价格', fr: 'Maintenance, support technique et tarifs compétitifs' },
    ],
    related: ['construction', 'leasing', 'transport-freight'],
  },
  {
    slug: 'house-rental',
    icon: Home,
    image: imgHouseRental,
    gradient: 'from-emerald-500 to-teal-600',
    title: { ar: 'إيجار المنازل', en: 'House Rental', zh: '房屋租赁', fr: 'Location de Maisons' },
    tagline: {
      ar: 'منازل وشقق وفلل مؤثثة وغير مؤثثة في تشاد',
      en: 'Furnished and unfurnished houses, apartments and villas across Chad',
      zh: '乍得的带家具及不带家具的房屋、公寓和别墅',
      fr: 'Maisons, appartements et villas meublés et non meublés au Tchad',
    },
    description: {
      ar: 'حلول إيجار سكني قصيرة وطويلة الأمد للأفراد والشركات والمنظمات في نجامينا والمدن الرئيسية.',
      en: 'Short and long-term residential rental for individuals, companies and organizations in N’Djamena and main cities.',
      zh: '为恩贾梅纳及主要城市的个人、公司和组织提供短期和长期住宅租赁。',
      fr: "Location résidentielle courte et longue durée pour particuliers, entreprises et organisations à N'Djamena et grandes villes.",
    },
    longDescription: {
      ar: 'نوفر خدمات إيجار المنازل والشقق والفلل في تشاد للأفراد والشركات والمنظمات الدولية العاملة في البلاد، مع خيارات مؤثثة وغير مؤثثة وعقود مرنة.',
      en: 'We provide house, apartment and villa rental services in Chad for individuals, companies and international organizations, with furnished and unfurnished options and flexible contracts.',
      zh: '为在乍得的个人、公司和国际组织提供带家具和不带家具的房屋、公寓及别墅租赁服务，合同灵活。',
      fr: "Nous offrons la location de maisons, d'appartements et de villas au Tchad pour particuliers, entreprises et organisations internationales — options meublées ou non, contrats flexibles.",
    },
    items: [
      { ar: 'شقق سكنية مؤثثة وغير مؤثثة', en: 'Furnished & unfurnished apartments', zh: '带家具与不带家具的公寓', fr: 'Appartements meublés et non meublés' },
      { ar: 'فلل ومنازل للعائلات', en: 'Villas and family houses', zh: '别墅和家庭住宅', fr: 'Villas et maisons familiales' },
      { ar: 'مساكن للشركات والمنظمات', en: 'Corporate and NGO housing', zh: '企业与非政府组织住房', fr: 'Logement pour entreprises et ONG' },
    ],
    benefits: [
      { ar: 'عقود قصيرة وطويلة الأمد', en: 'Short and long-term contracts', zh: '短期和长期合约', fr: 'Contrats courts et longs' },
      { ar: 'مواقع مختارة في نجامينا والمدن الرئيسية', en: 'Prime locations in N’Djamena and major cities', zh: '恩贾梅纳及主要城市的优质地段', fr: "Emplacements privilégiés à N'Djamena et grandes villes" },
      { ar: 'دعم كامل للأفراد والوافدين والشركات', en: 'Full support for individuals, expats and companies', zh: '为个人、外籍人士和公司提供全方位支持', fr: 'Assistance complète pour particuliers, expatriés et entreprises' },
    ],
    related: ['leasing', 'car-rental', 'company-formation'],
  },
  {
    slug: 'car-rental',
    icon: Car,
    image: imgCarRental,
    gradient: 'from-sky-500 to-blue-600',
    title: { ar: 'إيجار السيارات', en: 'Car Rental', zh: '汽车租赁', fr: 'Location de Voitures' },
    tagline: {
      ar: 'أسطول متنوع من السيارات ومركبات الدفع الرباعي مع أو بدون سائق',
      en: 'Diverse fleet of cars and 4x4 vehicles with or without driver',
      zh: '多样化车队,可选带司机或不带司机',
      fr: 'Flotte variée de voitures et 4x4 avec ou sans chauffeur',
    },
    description: {
      ar: 'تأجير سيارات سياحية ومركبات دفع رباعي وحافلات صغيرة للشركات والمنظمات والمشاريع في تشاد.',
      en: 'Rental of sedans, 4x4 vehicles and minibuses for companies, organizations and projects in Chad.',
      zh: '为乍得的公司、组织和项目租赁轿车、四驱车和小型巴士。',
      fr: "Location de berlines, 4x4 et minibus pour entreprises, organisations et projets au Tchad.",
    },
    longDescription: {
      ar: 'نوفر أسطولاً متنوعاً من السيارات ومركبات الدفع الرباعي والحافلات الصغيرة لخدمة الشركات والمنظمات الدولية والمشاريع الميدانية في تشاد، مع خيار السائق المحترف والتأمين الشامل.',
      en: 'We provide a diverse fleet of cars, 4x4 vehicles and minibuses for companies, international organizations and field projects in Chad, with professional drivers and comprehensive insurance.',
      zh: '为乍得的公司、国际组织和现场项目提供多样化的汽车、四驱车和小型巴士车队,配备专业司机和全面保险。',
      fr: "Nous mettons à disposition une flotte variée de voitures, 4x4 et minibus pour entreprises, organisations internationales et projets de terrain au Tchad, avec chauffeurs professionnels et assurance complète.",
    },
    items: [
      { ar: 'سيارات سياحية للاستخدام اليومي', en: 'Sedans for daily use', zh: '日常轿车', fr: 'Berlines pour usage quotidien' },
      { ar: 'مركبات دفع رباعي للطرق الوعرة', en: '4x4 vehicles for off-road missions', zh: '越野四驱车', fr: 'Véhicules 4x4 tout-terrain' },
      { ar: 'حافلات صغيرة لنقل الفرق', en: 'Minibuses for team transport', zh: '团队小型巴士', fr: "Minibus pour le transport d'équipes" },
      { ar: 'خدمة مع أو بدون سائق', en: 'With or without driver', zh: '带或不带司机', fr: 'Avec ou sans chauffeur' },
    ],
    benefits: [
      { ar: 'أسطول حديث وصيانة دورية', en: 'Modern fleet with regular maintenance', zh: '现代化车队,定期维护', fr: 'Flotte moderne et entretien régulier' },
      { ar: 'سائقون معتمدون بمعرفة محلية', en: 'Certified drivers with local knowledge', zh: '熟悉本地的认证司机', fr: 'Chauffeurs certifiés connaissant le terrain' },
      { ar: 'عقود يومية وأسبوعية وشهرية وطويلة الأمد', en: 'Daily, weekly, monthly and long-term contracts', zh: '按日、周、月及长期合约', fr: 'Contrats journaliers, hebdomadaires, mensuels et longue durée' },
    ],
    related: ['leasing', 'house-rental', 'transport-freight'],
  },
  {
    slug: 'construction-equipment-rental',
    icon: Wrench,
    image: imgConstructionEquipmentRental,
    gradient: 'from-amber-500 to-orange-600',
    title: { ar: 'إيجار معدات البناء', en: 'Construction Equipment Rental', zh: '建筑设备租赁', fr: 'Location de Matériel de Construction' },
    tagline: {
      ar: 'معدات وأدوات بناء متكاملة للمقاولين والمشاريع في تشاد',
      en: 'Complete construction equipment and tools for contractors and projects in Chad',
      zh: '为乍得承包商和项目提供全面的建筑设备与工具',
      fr: 'Équipements et outils de construction complets pour entrepreneurs et projets au Tchad',
    },
    description: {
      ar: 'تأجير خلاطات الخرسانة، السقالات، مولدات المواقع، معدات القياس وأدوات البناء المتخصصة.',
      en: 'Rental of concrete mixers, scaffolding, site generators, measuring equipment and specialised construction tools.',
      zh: '租赁混凝土搅拌机、脚手架、现场发电机、测量设备和专业建筑工具。',
      fr: 'Location de bétonnières, échafaudages, groupes électrogènes de chantier, matériel de mesure et outils spécialisés.',
    },
    longDescription: {
      ar: 'نوفر معدات وأدوات البناء اللازمة لتنفيذ مشاريع المقاولات في تشاد، من خلاطات الخرسانة والسقالات إلى مولدات المواقع ومعدات القياس والأدوات المتخصصة، مع خيارات تأجير مرنة ودعم فني.',
      en: 'We supply the construction equipment and tools required to execute contracting projects in Chad — from concrete mixers and scaffolding to site generators, measuring equipment and specialised tools — with flexible rental options and technical support.',
      zh: '我们为在乍得的承包项目提供必需的建筑设备和工具 — 从混凝土搅拌机、脚手架到现场发电机、测量设备和专业工具 — 提供灵活的租赁方案和技术支持。',
      fr: "Nous fournissons les équipements et outils de construction nécessaires à l'exécution des projets au Tchad — bétonnières, échafaudages, groupes électrogènes de chantier, équipements de mesure et outils spécialisés — avec des options de location flexibles et un support technique.",
    },
    items: [
      { ar: 'خلاطات ومضخات خرسانة', en: 'Concrete mixers & pumps', zh: '混凝土搅拌机和泵', fr: 'Bétonnières et pompes à béton' },
      { ar: 'سقالات وأنظمة دعم', en: 'Scaffolding & shoring systems', zh: '脚手架和支撑系统', fr: 'Échafaudages et systèmes de soutènement' },
      { ar: 'مولدات مواقع وأبراج إنارة', en: 'Site generators & lighting towers', zh: '现场发电机和照明塔', fr: "Groupes électrogènes de chantier et tours d'éclairage" },
      { ar: 'معدات قياس وأدوات كهربائية متخصصة', en: 'Measuring equipment & specialised power tools', zh: '测量设备和专业电动工具', fr: 'Équipements de mesure et outils électriques spécialisés' },
    ],
    benefits: [
      { ar: 'صيانة دورية ودعم فني على المواقع', en: 'Regular maintenance and on-site technical support', zh: '定期维护及现场技术支持', fr: 'Entretien régulier et support technique sur site' },
      { ar: 'تسليم واسترجاع في مواقع المشاريع', en: 'Delivery and pickup at project sites', zh: '项目现场送货和取货', fr: 'Livraison et enlèvement sur les sites de projets' },
      { ar: 'عقود مرنة تناسب مراحل المشروع', en: 'Flexible contracts matched to project phases', zh: '与项目阶段匹配的灵活合约', fr: 'Contrats flexibles adaptés aux phases du projet' },
    ],
    related: ['heavy-equipment', 'construction', 'leasing'],
  },

  // ==================== GENERAL TRADE (Import/Export product families) ====================
  {
    slug: 'gt-fmcg',
    icon: Utensils,
    image: imgGtFmcg,
    gradient: 'from-amber-500 to-orange-600',
    title: { ar: 'المواد الغذائية والاستهلاكية', en: 'Food & FMCG Products', zh: '食品和快消品', fr: 'Alimentaire et produits de consommation' },
    tagline: { ar: 'منتجات غذائية واستهلاكية سريعة التداول', en: 'Food and fast-moving consumer goods', zh: '食品与快消品', fr: 'Alimentation et biens de consommation à rotation rapide' },
    description: { ar: 'استيراد وتوزيع مواد غذائية ومنتجات استهلاكية سريعة التداول للسوق التشادي.', en: 'Import and distribution of food and FMCG products for the Chadian market.', zh: '为乍得市场进口和分销食品和快消品。', fr: 'Importation et distribution de produits alimentaires et FMCG pour le marché tchadien.' },
    longDescription: {
      ar: 'نوفر باقة واسعة من المواد الغذائية والمنتجات الاستهلاكية سريعة التداول تشمل الحبوب والزيوت والسكر والأرز والألبان ومياه الشرب والمشروبات ومنتجات النظافة المنزلية والعناية الشخصية. نعتمد على شبكة موردين دوليين موثوقين مع التزام كامل بمعايير السلامة الغذائية وتواريخ الصلاحية وسلسلة التبريد للمنتجات الحساسة.',
      en: 'We supply a wide portfolio of food and fast-moving consumer goods including grains, oils, sugar, rice, dairy, drinking water, beverages, household cleaning products and personal care. We work with reliable international suppliers with strict compliance to food safety standards, shelf-life management and cold-chain logistics for sensitive items.',
      zh: '我们提供广泛的食品和快消品组合,包括谷物、油、糖、大米、乳制品、饮用水、饮料、家用清洁产品和个人护理用品。我们与可靠的国际供应商合作,严格遵守食品安全标准。',
      fr: "Nous fournissons une large gamme de produits alimentaires et FMCG (céréales, huiles, sucre, riz, laitiers, eau, boissons, produits d'entretien et hygiène) via un réseau de fournisseurs internationaux fiables, avec respect strict des normes de sécurité alimentaire et de la chaîne du froid.",
    },
    items: [
      { ar: 'الحبوب والأرز والسكر والزيوت', en: 'Grains, rice, sugar & cooking oils', zh: '谷物、大米、糖和食用油', fr: 'Céréales, riz, sucre et huiles' },
      { ar: 'منتجات الألبان والأجبان', en: 'Dairy & cheese products', zh: '乳制品和奶酪', fr: 'Produits laitiers et fromages' },
      { ar: 'المياه والمشروبات والعصائر', en: 'Water, beverages & juices', zh: '水、饮料和果汁', fr: 'Eau, boissons et jus' },
      { ar: 'المنظفات المنزلية والعناية الشخصية', en: 'Household detergents & personal care', zh: '家用清洁剂和个人护理', fr: 'Détergents ménagers et hygiène personnelle' },
      { ar: 'المعلبات والأطعمة الجاهزة', en: 'Canned & ready-to-eat foods', zh: '罐头和即食食品', fr: 'Conserves et plats préparés' },
    ],
    benefits: [
      { ar: 'التزام بمعايير السلامة الغذائية الدولية', en: 'Compliance with international food safety standards', zh: '符合国际食品安全标准', fr: 'Conformité aux normes internationales de sécurité alimentaire' },
      { ar: 'إدارة تواريخ الصلاحية والمخزون', en: 'Shelf-life & inventory management', zh: '保质期和库存管理', fr: 'Gestion des dates de péremption et des stocks' },
      { ar: 'أسعار تنافسية بفضل الاستيراد المباشر', en: 'Competitive prices via direct import', zh: '通过直接进口获得有竞争力的价格', fr: 'Prix compétitifs grâce à l\'importation directe' },
      { ar: 'شبكة توزيع محلية واسعة', en: 'Wide local distribution network', zh: '广泛的本地分销网络', fr: 'Large réseau de distribution local' },
    ],
    related: ['gt-home-appliances', 'gt-furniture', 'distribution'],
  },
  {
    slug: 'gt-home-appliances',
    icon: Home,
    image: imgGtHomeAppliances,
    gradient: 'from-sky-500 to-blue-600',
    title: { ar: 'الأجهزة الكهربائية والإلكترونيات', en: 'Electrical Appliances & Electronics', zh: '电器和电子产品', fr: 'Appareils électriques et électronique' },
    tagline: { ar: 'أجهزة كهربائية وإلكترونيات استهلاكية', en: 'Household appliances and consumer electronics', zh: '家用电器和消费电子产品', fr: 'Appareils ménagers et électronique grand public' },
    description: { ar: 'أجهزة منزلية وكهربائية وإلكترونيات استهلاكية وأجهزة العناية الشخصية.', en: 'Home appliances, electrical devices, consumer electronics and personal care devices.', zh: '家用电器、电子产品和个人护理设备。', fr: 'Électroménager, appareils électriques et électronique grand public.' },
    longDescription: {
      ar: 'نستورد ونوزع الأجهزة المنزلية الكبيرة والصغيرة والإلكترونيات الاستهلاكية وأجهزة العناية الشخصية الكهربائية من علامات تجارية دولية، مع ضمانات معتمدة وخدمة ما بعد البيع وقطع غيار متوفرة داخل تشاد.',
      en: 'We import and distribute large and small home appliances, consumer electronics, and personal care devices from international brands — with certified warranties, after-sales support and spare parts available locally in Chad.',
      zh: '我们从国际品牌进口和分销大小家电、消费电子产品和个人护理设备,提供认证保修、售后支持和本地备件。',
      fr: "Nous importons et distribuons l'électroménager, l'électronique grand public et les appareils de soins personnels de marques internationales, avec garanties, SAV et pièces disponibles au Tchad.",
    },
    items: [
      { ar: 'ثلاجات وغسالات ومكيفات', en: 'Refrigerators, washing machines & air conditioners', zh: '冰箱、洗衣机和空调', fr: 'Réfrigérateurs, machines à laver et climatiseurs' },
      { ar: 'شاشات تلفزيون وأنظمة صوت', en: 'TVs & audio systems', zh: '电视和音响系统', fr: 'Téléviseurs et systèmes audio' },
      { ar: 'أجهزة صغيرة للمطبخ', en: 'Small kitchen appliances', zh: '小型厨房电器', fr: 'Petit électroménager de cuisine' },
      { ar: 'أجهزة العناية الشخصية الكهربائية', en: 'Electric personal care devices', zh: '电动个人护理设备', fr: 'Appareils électriques de soins personnels' },
      { ar: 'إلكترونيات المستهلك والهواتف', en: 'Consumer electronics & phones', zh: '消费电子产品和手机', fr: 'Électronique grand public et téléphones' },
    ],
    benefits: [
      { ar: 'ضمانات معتمدة من المصنّع', en: 'Manufacturer-backed warranties', zh: '制造商担保', fr: 'Garanties constructeur' },
      { ar: 'خدمة ما بعد البيع وقطع غيار', en: 'After-sales service & spare parts', zh: '售后服务和备件', fr: 'SAV et pièces détachées' },
      { ar: 'علامات تجارية دولية موثوقة', en: 'Trusted international brands', zh: '值得信赖的国际品牌', fr: 'Marques internationales de confiance' },
      { ar: 'حلول للتجزئة والجملة والمشاريع', en: 'Retail, wholesale and project solutions', zh: '零售、批发和项目解决方案', fr: 'Solutions détail, gros et projets' },
    ],
    related: ['gt-fmcg', 'gt-furniture', 'it-devices'],
  },
  {
    slug: 'gt-construction-materials',
    icon: Wrench,
    image: imgGtConstructionMaterials,
    gradient: 'from-stone-500 to-amber-700',
    title: { ar: 'مواد البناء والتشطيب', en: 'Construction & Finishing Materials', zh: '建筑与装饰材料', fr: 'Matériaux de construction et finition' },
    tagline: { ar: 'مواد بناء وتجهيزات صحية وكهربائية', en: 'Building materials, sanitary and electrical fittings', zh: '建材、卫浴和电气配件', fr: 'Matériaux, sanitaire et électrique' },
    description: { ar: 'مواد البناء ومواد التشطيب والتجهيزات الصحية والكهربائية للمشاريع.', en: 'Construction materials, finishing products, sanitary and electrical fittings for projects.', zh: '项目用建筑材料、装饰产品、卫浴和电气配件。', fr: 'Matériaux de construction, finitions, sanitaires et électricité pour projets.' },
    longDescription: {
      ar: 'نوفر باقة متكاملة من مواد البناء الأساسية ومواد التشطيب والتجهيزات الصحية والكهربائية والدهانات والعوازل — تدعم مشاريع المقاولات والإنشاءات والمشاريع الحكومية والخاصة، بمواصفات مطابقة للمعايير الدولية.',
      en: 'A complete range of core building materials, finishing materials, sanitary ware, electrical fittings, paints and insulation — supporting contractors, construction projects, and public and private developments to international specifications.',
      zh: '完整的核心建材、装饰材料、卫浴、电气配件、涂料和保温材料,支持承包商和公私建设项目,符合国际规范。',
      fr: "Gamme complète de matériaux de construction, finitions, sanitaires, électricité, peintures et isolants — pour entrepreneurs, chantiers et projets publics/privés aux normes internationales.",
    },
    items: [
      { ar: 'الأسمنت والحديد ومواد البناء الأساسية', en: 'Cement, steel & core building materials', zh: '水泥、钢材和核心建材', fr: 'Ciment, acier et matériaux de base' },
      { ar: 'البلاط والسيراميك والرخام', en: 'Tiles, ceramics & marble', zh: '瓷砖、陶瓷和大理石', fr: 'Carrelage, céramique et marbre' },
      { ar: 'التجهيزات الصحية والحمامات', en: 'Sanitary ware & bathroom fittings', zh: '卫浴洁具和浴室配件', fr: 'Sanitaires et équipements de salle de bain' },
      { ar: 'التجهيزات الكهربائية والإضاءة', en: 'Electrical fittings & lighting', zh: '电气配件和照明', fr: 'Installations électriques et éclairage' },
      { ar: 'الدهانات والعوازل ومواد التشطيب', en: 'Paints, insulation & finishing materials', zh: '涂料、保温和装饰材料', fr: 'Peintures, isolants et finitions' },
    ],
    benefits: [
      { ar: 'مطابقة للمواصفات الدولية', en: 'Compliance with international specifications', zh: '符合国际规格', fr: 'Conformité aux normes internationales' },
      { ar: 'أسعار جملة ومشاريع', en: 'Wholesale & project pricing', zh: '批发和项目定价', fr: 'Prix de gros et projets' },
      { ar: 'دعم فني للاختيار والتوريد', en: 'Technical support for selection & supply', zh: '选型和供应的技术支持', fr: 'Support technique pour sélection et fourniture' },
      { ar: 'خدمات لوجستية للتوصيل للموقع', en: 'Logistics for on-site delivery', zh: '现场交付物流', fr: 'Livraison logistique sur chantier' },
    ],
    related: ['construction', 'gt-heavy-machinery', 'gt-safety-security'],
  },
  {
    slug: 'gt-vehicles',
    icon: Car,
    image: imgGtVehicles,
    gradient: 'from-slate-600 to-slate-800',
    title: { ar: 'السيارات والمركبات التجارية', en: 'Vehicles & Commercial Fleet', zh: '汽车与商用车', fr: 'Véhicules et flotte commerciale' },
    tagline: { ar: 'سيارات وشاحنات وحافلات وقطع غيار', en: 'Cars, trucks, buses and spare parts', zh: '汽车、卡车、巴士和备件', fr: 'Voitures, camions, bus et pièces' },
    description: { ar: 'استيراد سيارات ومركبات تجارية وشاحنات وحافلات وقطع غيارها.', en: 'Import of cars, commercial vehicles, trucks, buses and their spare parts.', zh: '进口汽车、商用车、卡车、巴士及其备件。', fr: 'Importation de voitures, véhicules utilitaires, camions, bus et leurs pièces.' },
    longDescription: {
      ar: 'نستورد سيارات الركوب والمركبات التجارية والشاحنات والحافلات من كبار المصنعين، مع توفير قطع الغيار الأصلية والصيانة المتخصصة. نخدم قطاعات النقل والخدمات اللوجستية والمقاولات والقطاع الحكومي.',
      en: 'We import passenger cars, commercial vehicles, trucks and buses from leading manufacturers, with genuine spare parts and specialised maintenance support. We serve transport, logistics, contracting and government sectors.',
      zh: '我们从主要制造商进口乘用车、商用车、卡车和巴士,并提供原厂备件和专业维护支持。',
      fr: "Nous importons voitures, utilitaires, camions et bus des grands constructeurs, avec pièces d'origine et maintenance spécialisée pour transport, logistique, BTP et secteur public.",
    },
    items: [
      { ar: 'سيارات ركوب وسيارات دفع رباعي', en: 'Passenger cars & 4x4 vehicles', zh: '乘用车和四驱车', fr: 'Voitures et 4x4' },
      { ar: 'شاحنات نقل وقلابات', en: 'Transport trucks & dump trucks', zh: '运输卡车和自卸车', fr: 'Camions de transport et bennes' },
      { ar: 'حافلات ركاب ومركبات سياحية', en: 'Passenger buses & coaches', zh: '客车与旅游车', fr: 'Bus et autocars' },
      { ar: 'مركبات تجارية صغيرة (فان/بيك أب)', en: 'Light commercial vehicles (vans/pickups)', zh: '轻型商用车(货车/皮卡)', fr: 'Utilitaires légers (fourgons/pick-ups)' },
      { ar: 'قطع غيار أصلية وإطارات', en: 'Genuine spare parts & tyres', zh: '原厂备件和轮胎', fr: 'Pièces d\'origine et pneus' },
    ],
    benefits: [
      { ar: 'وكالات معتمدة وضمانات المصنّع', en: 'Authorised dealerships & manufacturer warranties', zh: '授权经销商和制造商担保', fr: 'Concessions agréées et garanties constructeur' },
      { ar: 'خدمة صيانة وقطع غيار محلية', en: 'Local maintenance & spare parts', zh: '本地维护和备件', fr: 'Maintenance et pièces sur place' },
      { ar: 'حلول للأساطيل والشركات', en: 'Fleet solutions for companies', zh: '公司车队解决方案', fr: 'Solutions flotte pour entreprises' },
      { ar: 'خيارات تمويل وتأجير', en: 'Financing and leasing options', zh: '融资和租赁选项', fr: 'Options de financement et location' },
    ],
    related: ['gt-heavy-machinery', 'transport-freight', 'leasing'],
  },
  {
    slug: 'gt-trucks',
    icon: Truck,
    image: imgGtTrucks,
    gradient: 'from-zinc-600 to-slate-800',
    title: { ar: 'الشاحنات', en: 'Trucks', zh: '卡车', fr: 'Camions' },
    tagline: {
      ar: 'شاحنات نقل احترافية لدعم الأعمال والمشاريع',
      en: 'Professional transport trucks powering business and projects',
      zh: '为企业和项目提供支持的专业运输卡车',
      fr: 'Camions de transport professionnels au service des entreprises et projets',
    },
    description: {
      ar: 'توفير شاحنات النقل الثقيل والمتوسط والخفيف لخدمة قطاعات النقل والمقاولات والتوزيع في تشاد.',
      en: 'Supply of heavy, medium and light transport trucks serving logistics, contracting and distribution sectors in Chad.',
      zh: '提供重型、中型和轻型运输卡车，服务乍得的物流、承包和分销行业。',
      fr: 'Fourniture de camions de transport lourds, moyens et légers pour la logistique, le BTP et la distribution au Tchad.',
    },
    longDescription: {
      ar: 'نستورد ونوفر شاحنات النقل من كبار المصنعين العالميين لدعم أعمال النقل واللوجستيات والمقاولات والتوزيع داخل تشاد وعبر الحدود. تشمل تشكيلتنا الرؤوس القاطرة (Tractor Heads) والشاحنات القلابة وشاحنات النقل العام وشاحنات صهاريج الوقود والمياه وشاحنات التبريد وشاحنات النقل الخفيف — مع توفير قطع الغيار الأصلية وخدمات الصيانة المتخصصة وحلول التمويل والتأجير للأساطيل التجارية.',
      en: 'We import and supply transport trucks from leading global manufacturers to support logistics, transport, contracting and distribution operations within Chad and across borders. Our range covers tractor heads, dump trucks, cargo trucks, fuel and water tankers, refrigerated trucks and light-duty trucks — with genuine spare parts, specialised maintenance and financing/leasing solutions for commercial fleets.',
      zh: '我们从全球主要制造商进口和供应运输卡车，支持乍得境内及跨境的物流、运输、承包和分销业务。产品涵盖牵引车、自卸车、货运卡车、燃油和水罐车、冷藏车和轻型卡车，并提供原厂备件、专业维护和车队融资租赁方案。',
      fr: "Nous importons et fournissons des camions de transport auprès des grands constructeurs mondiaux pour soutenir la logistique, le transport, le BTP et la distribution au Tchad et au-delà. Notre gamme couvre tracteurs routiers, bennes, camions de fret, citernes carburant/eau, camions frigorifiques et utilitaires légers — avec pièces d'origine, maintenance spécialisée et solutions de financement/location pour flottes commerciales.",
    },
    items: [
      { ar: 'الرؤوس القاطرة والشاحنات الثقيلة', en: 'Tractor heads & heavy-duty trucks', zh: '牵引车和重型卡车', fr: 'Tracteurs routiers et camions lourds' },
      { ar: 'الشاحنات القلابة وشاحنات المواد', en: 'Dump trucks & material trucks', zh: '自卸车和材料运输车', fr: 'Camions bennes et de matériaux' },
      { ar: 'صهاريج الوقود والمياه', en: 'Fuel & water tankers', zh: '油罐车和水罐车', fr: 'Citernes carburant et eau' },
      { ar: 'شاحنات التبريد والنقل المتخصص', en: 'Refrigerated & specialised transport trucks', zh: '冷藏车和专用运输车', fr: 'Camions frigorifiques et transport spécialisé' },
      { ar: 'شاحنات النقل الخفيف والمتوسط', en: 'Light & medium-duty trucks', zh: '轻型和中型卡车', fr: 'Camions légers et moyens' },
      { ar: 'قطع الغيار الأصلية والإطارات', en: 'Genuine spare parts & tyres', zh: '原厂备件和轮胎', fr: "Pièces d'origine et pneus" },
    ],
    benefits: [
      { ar: 'شاحنات من كبار المصنعين العالميين', en: 'Trucks from leading global manufacturers', zh: '来自主要全球制造商的卡车', fr: 'Camions des grands constructeurs mondiaux' },
      { ar: 'دعم فني وصيانة متخصصة داخل تشاد', en: 'Local technical support & specialised maintenance in Chad', zh: '乍得本地技术支持和专业维护', fr: 'Support technique et maintenance spécialisée au Tchad' },
      { ar: 'حلول أساطيل للشركات والمقاولين', en: 'Fleet solutions for companies and contractors', zh: '公司和承包商的车队解决方案', fr: 'Solutions de flotte pour entreprises et entrepreneurs' },
      { ar: 'خيارات تمويل وتأجير مرنة', en: 'Flexible financing and leasing options', zh: '灵活的融资和租赁方案', fr: 'Options de financement et location flexibles' },
    ],
    related: ['gt-vehicles', 'gt-heavy-machinery', 'transport-freight'],
  },
  {
    slug: 'gt-heavy-machinery',
    icon: Factory,
    image: imgGtHeavyMachinery,
    gradient: 'from-yellow-600 to-orange-700',
    title: { ar: 'المعدات الثقيلة والآليات', en: 'Heavy Machinery & Equipment', zh: '重型机械和设备', fr: 'Engins et machines lourdes' },
    tagline: { ar: 'معدات ثقيلة ومعدات ورش وقطع غيارها', en: 'Heavy machinery, workshop equipment and spare parts', zh: '重型机械、车间设备和备件', fr: 'Engins lourds, équipements d\'atelier et pièces' },
    description: { ar: 'المعدات الثقيلة والآليات ومعدات الورش وقطع غيار الشاحنات والمعدات الثقيلة.', en: 'Heavy machinery, workshop equipment, truck and heavy-equipment spare parts.', zh: '重型机械、车间设备、卡车和重型设备备件。', fr: 'Engins lourds, équipements d\'atelier et pièces pour camions et engins.' },
    longDescription: {
      ar: 'نوفر مجموعة واسعة من المعدات الثقيلة والآليات لمشاريع البناء والتعدين والبنية التحتية، إلى جانب معدات الورش وأدوات الصيانة وقطع غيار الشاحنات والمعدات الثقيلة من مصنعين عالميين.',
      en: 'A wide range of heavy machinery and equipment for construction, mining and infrastructure projects, along with workshop equipment, maintenance tools, and spare parts for trucks and heavy equipment from global manufacturers.',
      zh: '广泛的建筑、采矿和基础设施项目重型机械和设备,以及车间设备、维护工具和全球制造商的卡车重型设备备件。',
      fr: "Large gamme d'engins et machines pour BTP, mines et infrastructures, plus équipements d'atelier, outillage et pièces de camions et engins auprès de fabricants mondiaux.",
    },
    items: [
      { ar: 'حفارات ولوادر وممهدات', en: 'Excavators, loaders & graders', zh: '挖掘机、装载机和平地机', fr: 'Pelles, chargeuses et niveleuses' },
      { ar: 'رافعات ومعدات رفع', en: 'Cranes & lifting equipment', zh: '起重机和起重设备', fr: 'Grues et équipements de levage' },
      { ar: 'معدات الورش وأدوات الصيانة', en: 'Workshop equipment & maintenance tools', zh: '车间设备和维护工具', fr: 'Équipements d\'atelier et outils' },
      { ar: 'قطع غيار الشاحنات والمعدات الثقيلة', en: 'Truck & heavy-equipment spare parts', zh: '卡车和重型设备备件', fr: 'Pièces camions et engins lourds' },
      { ar: 'مولدات ومعدات كهربائية للمواقع', en: 'Generators & site electrical equipment', zh: '发电机和现场电气设备', fr: 'Générateurs et équipements électriques de chantier' },
    ],
    benefits: [
      { ar: 'موردون معتمدون من كبار المصنعين', en: 'Certified suppliers from leading manufacturers', zh: '主要制造商的认证供应商', fr: 'Fournisseurs certifiés des grands constructeurs' },
      { ar: 'دعم فني وصيانة موقعية', en: 'Technical support & on-site maintenance', zh: '技术支持和现场维护', fr: 'Support technique et maintenance sur site' },
      { ar: 'خيارات شراء وتأجير', en: 'Purchase and rental options', zh: '购买和租赁选项', fr: 'Options d\'achat et location' },
      { ar: 'قطع غيار متوفرة محلياً', en: 'Locally available spare parts', zh: '本地可用备件', fr: 'Pièces disponibles localement' },
    ],
    related: ['heavy-equipment', 'construction', 'gt-vehicles'],
  },
  {
    slug: 'gt-furniture',
    icon: Sofa,
    image: imgGtFurniture,
    gradient: 'from-rose-500 to-pink-700',
    title: { ar: 'الأثاث والتجهيزات', en: 'Furniture & Fit-out', zh: '家具和陈设', fr: 'Mobilier et aménagement' },
    tagline: { ar: 'أثاث للمنازل والمكاتب والمؤسسات', en: 'Furniture for homes, offices and institutions', zh: '家庭、办公和机构家具', fr: 'Mobilier maison, bureau et institutionnel' },
    description: { ar: 'أثاث وتجهيزات للمنازل والمكاتب والمدارس والفنادق والمستشفيات والمرافق العامة.', en: 'Furniture and fit-out for homes, offices, schools, hotels, hospitals and public facilities.', zh: '家庭、办公、学校、酒店、医院和公共设施的家具和陈设。', fr: 'Mobilier et aménagement pour maisons, bureaux, écoles, hôtels, hôpitaux et services publics.' },
    longDescription: {
      ar: 'نصمم ونورد الأثاث والتجهيزات الكاملة للمشاريع السكنية والتجارية والمؤسسية — تشمل مكاتب الأعمال والفنادق والمستشفيات والمدارس والقاعات والمرافق الحكومية، بمعايير تصميم عصرية ومواد عالية الجودة.',
      en: 'We design and supply complete furniture and fit-out for residential, commercial and institutional projects — including corporate offices, hotels, hospitals, schools, halls and government facilities — with modern design standards and premium materials.',
      zh: '我们为住宅、商业和机构项目设计和供应完整的家具和装修,包括企业办公室、酒店、医院、学校、大厅和政府设施。',
      fr: "Nous concevons et fournissons mobilier et aménagement complets pour projets résidentiels, commerciaux et institutionnels: bureaux, hôtels, hôpitaux, écoles, salles et administrations, avec design moderne et matériaux premium.",
    },
    items: [
      { ar: 'أثاث منزلي عصري وكلاسيكي', en: 'Modern & classic home furniture', zh: '现代和经典家用家具', fr: 'Mobilier maison moderne et classique' },
      { ar: 'أثاث ومقاعد المكاتب والشركات', en: 'Office & corporate furniture', zh: '办公和企业家具', fr: 'Mobilier de bureau et corporate' },
      { ar: 'أثاث الفنادق والقاعات', en: 'Hospitality & hall furniture', zh: '酒店和大厅家具', fr: 'Mobilier hôtellerie et salles' },
      { ar: 'أثاث المدارس والفصول الدراسية', en: 'School & classroom furniture', zh: '学校和教室家具', fr: 'Mobilier scolaire et classes' },
      { ar: 'أثاث المستشفيات والعيادات', en: 'Hospital & clinic furniture', zh: '医院和诊所家具', fr: 'Mobilier hôpitaux et cliniques' },
    ],
    benefits: [
      { ar: 'تصميم مخصص حسب الاحتياج', en: 'Custom design to specification', zh: '定制设计', fr: 'Conception sur mesure' },
      { ar: 'خدمات التركيب والتجهيز الكامل', en: 'Installation & complete fit-out services', zh: '安装和完整装修服务', fr: 'Installation et aménagement complet' },
      { ar: 'ضمانات وجودة عالية', en: 'Warranties & premium quality', zh: '保修和高品质', fr: 'Garanties et haute qualité' },
      { ar: 'حلول جاهزة لمشاريع كاملة', en: 'Turnkey solutions for full projects', zh: '完整项目的交钥匙解决方案', fr: 'Solutions clé en main pour projets complets' },
    ],
    related: ['gt-home-appliances', 'gt-school-supplies', 'construction'],
  },
  {
    slug: 'gt-school-supplies',
    icon: GraduationCap,
    image: imgGtSchoolSupplies,
    gradient: 'from-emerald-500 to-teal-700',
    title: { ar: 'المستلزمات المدرسية والملابس', en: 'School Supplies & Uniforms', zh: '学习用品和制服', fr: 'Fournitures scolaires et uniformes' },
    tagline: { ar: 'قرطاسية ووسائل تعليمية وملابس وزي موحد', en: 'Stationery, educational aids, clothing and uniforms', zh: '文具、教学用品、服装和制服', fr: 'Papeterie, matériel pédagogique, vêtements et uniformes' },
    description: { ar: 'المستلزمات المدرسية والقرطاسية والوسائل التعليمية والملابس والزي الموحد.', en: 'School supplies, stationery, educational aids, clothing and uniforms.', zh: '学习用品、文具、教学辅助工具、服装和制服。', fr: 'Fournitures scolaires, papeterie, matériel pédagogique, vêtements et uniformes.' },
    longDescription: {
      ar: 'نوفر باقة كاملة من المستلزمات المدرسية والقرطاسية والوسائل التعليمية وتجهيزات الفصول، إلى جانب الملابس والمنسوجات والزي المدرسي والمهني — لدعم المدارس والجامعات والمؤسسات والشركات في تشاد.',
      en: 'A complete portfolio of school supplies, stationery, educational aids, classroom equipment, along with clothing, textiles, school and professional uniforms — supporting schools, universities, institutions and companies across Chad.',
      zh: '完整的学习用品、文具、教学辅助工具、教室设备、服装、纺织品、学校和专业制服组合。',
      fr: "Portefeuille complet: fournitures scolaires, papeterie, matériel pédagogique, équipement des classes, vêtements, textiles, uniformes scolaires et professionnels — pour écoles, universités, institutions et entreprises.",
    },
    items: [
      { ar: 'قرطاسية وأدوات مكتبية', en: 'Stationery & office supplies', zh: '文具和办公用品', fr: 'Papeterie et fournitures de bureau' },
      { ar: 'وسائل تعليمية وتجهيزات فصول', en: 'Educational aids & classroom equipment', zh: '教学辅助工具和教室设备', fr: 'Matériel pédagogique et équipement de classe' },
      { ar: 'ألعاب أطفال وألعاب تعليمية', en: 'Children\'s toys & educational games', zh: '儿童玩具和教育游戏', fr: 'Jouets et jeux éducatifs' },
      { ar: 'الزي المدرسي والملابس', en: 'School uniforms & clothing', zh: '校服和服装', fr: 'Uniformes scolaires et vêtements' },
      { ar: 'الزي المهني ومستلزماته', en: 'Professional uniforms & accessories', zh: '专业制服和配件', fr: 'Uniformes professionnels et accessoires' },
    ],
    benefits: [
      { ar: 'حلول شاملة للمدارس والمؤسسات', en: 'Turnkey solutions for schools & institutions', zh: '学校和机构的交钥匙解决方案', fr: 'Solutions clé en main pour écoles et institutions' },
      { ar: 'أسعار جملة وخصومات مشاريع', en: 'Wholesale pricing & project discounts', zh: '批发定价和项目折扣', fr: 'Prix de gros et remises projet' },
      { ar: 'تخصيص الزي بالشعار والألوان', en: 'Uniform customisation with logo & colours', zh: '带徽标和颜色的制服定制', fr: 'Personnalisation avec logo et couleurs' },
      { ar: 'توصيل مباشر للمواقع', en: 'Direct on-site delivery', zh: '直接现场交付', fr: 'Livraison directe sur site' },
    ],
    related: ['gt-furniture', 'gt-fmcg', 'distribution'],
  },
  {
    slug: 'gt-safety-security',
    icon: ShieldCheck,
    image: imgGtSafetySecurity,
    gradient: 'from-red-500 to-red-700',
    title: { ar: 'الأمن والسلامة والصناعة', en: 'Security, Safety & Industrial', zh: '安全和工业', fr: 'Sécurité, sûreté et industriel' },
    tagline: { ar: 'معدات صناعية وزراعية وأنظمة أمن ومكافحة حريق', en: 'Industrial, agricultural, security and fire-safety systems', zh: '工业、农业、安全和消防系统', fr: 'Équipements industriels, agricoles, sûreté et incendie' },
    description: { ar: 'المعدات الصناعية والزراعية وأنظمة الأمن والسلامة ومكافحة الحريق.', en: 'Industrial and agricultural equipment, security, safety and fire-fighting systems.', zh: '工业和农业设备、安全、安保和消防系统。', fr: 'Équipements industriels, agricoles, sûreté, sécurité et systèmes incendie.' },
    longDescription: {
      ar: 'نوفر أنظمة الأمن والمراقبة والسلامة ومكافحة الحرائق، بالإضافة إلى المعدات الصناعية ومستلزمات النفط والغاز ومعدات التعدين ومنتجات السلامة المهنية، والمعدات الزراعية وأنظمة الري والبذور والأسمدة والأعلاف ومستلزمات الثروة الحيوانية.',
      en: 'We supply security & surveillance systems, occupational safety and fire-fighting solutions, industrial equipment, oil & gas and mining supplies, along with agricultural equipment, irrigation systems, seeds, fertilizers, feed and livestock supplies.',
      zh: '我们提供安防监控系统、职业安全和消防解决方案、工业设备、石油天然气和矿业用品,以及农业设备、灌溉系统、种子、肥料、饲料和畜牧用品。',
      fr: "Systèmes de sûreté et surveillance, sécurité au travail et lutte contre l'incendie, équipements industriels, fournitures pétrole/gaz et mines, plus équipements agricoles, irrigation, semences, engrais, aliments et élevage.",
    },
    items: [
      { ar: 'كاميرات مراقبة وأنظمة إنذار', en: 'CCTV & alarm systems', zh: '闭路电视和警报系统', fr: 'CCTV et systèmes d\'alarme' },
      { ar: 'أنظمة مكافحة الحرائق والإطفاء', en: 'Fire-fighting & extinguishing systems', zh: '消防和灭火系统', fr: 'Systèmes incendie et extincteurs' },
      { ar: 'مستلزمات السلامة المهنية (PPE)', en: 'Occupational safety supplies (PPE)', zh: '职业安全用品(PPE)', fr: 'Équipements de protection individuelle (EPI)' },
      { ar: 'معدات النفط والغاز والتعدين', en: 'Oil & gas and mining equipment', zh: '石油天然气和矿业设备', fr: 'Équipements pétrole/gaz et mines' },
      { ar: 'معدات زراعية وأنظمة ري وأسمدة', en: 'Agricultural equipment, irrigation & fertilizers', zh: '农业设备、灌溉和肥料', fr: 'Équipements agricoles, irrigation et engrais' },
    ],
    benefits: [
      { ar: 'مطابقة للمعايير الدولية للسلامة', en: 'Compliance with international safety standards', zh: '符合国际安全标准', fr: 'Conformité aux normes de sécurité internationales' },
      { ar: 'تركيب وتشغيل وتدريب', en: 'Installation, commissioning & training', zh: '安装、调试和培训', fr: 'Installation, mise en service et formation' },
      { ar: 'صيانة وقطع غيار محلية', en: 'Local maintenance & spare parts', zh: '本地维护和备件', fr: 'Maintenance et pièces locales' },
      { ar: 'حلول متكاملة للقطاعات الحيوية', en: 'Integrated solutions for critical sectors', zh: '关键部门的综合解决方案', fr: 'Solutions intégrées pour secteurs critiques' },
    ],
    related: ['gt-heavy-machinery', 'gt-construction-materials', 'supply-trading'],
  },

  // ==================== IT ====================
  {
    slug: 'it-networking',
    icon: Cpu,
    image: imgItNetworking,
    gradient: 'from-cyan-500 to-blue-700',
    title: { ar: 'شبكات وبنية تحتية', en: 'Networking & Infrastructure', zh: '网络与基础设施', fr: 'Réseaux et infrastructure' },
    tagline: { ar: 'تصميم وتنفيذ شبكات المؤسسات', en: 'Enterprise network design and implementation', zh: '企业网络设计与实施', fr: 'Conception et déploiement réseau' },
    description: { ar: 'تصميم وتوريد وتنفيذ شبكات الشركات السلكية واللاسلكية.', en: 'Design, supply and implementation of wired and wireless enterprise networks.', zh: '设计、供应和实施有线和无线企业网络。', fr: 'Conception, fourniture et déploiement de réseaux filaires et sans fil.' },
    longDescription: {
      ar: 'نصمم وننفذ حلول الشبكات السلكية واللاسلكية للمؤسسات، شاملة تمديدات الكابلات المهيكلة، محولات وموزعات، جدران الحماية، الشبكات الافتراضية الخاصة (VPN)، ونقاط الوصول اللاسلكية، مع اختبار وتوثيق كامل.',
      en: 'We design and deploy wired and wireless enterprise networks — structured cabling, switches, routers, firewalls, VPNs and wireless access points — with full testing and documentation.',
      zh: '我们设计和部署有线及无线企业网络,包括结构化布线、交换机、路由器、防火墙、VPN和无线接入点,并进行全面测试和文档记录。',
      fr: "Conception et déploiement de réseaux filaires et sans fil (câblage structuré, switches, routeurs, pare-feu, VPN, points d'accès), avec tests et documentation complète.",
    },
    items: [
      { ar: 'الكابلات المهيكلة وغرف الشبكات', en: 'Structured cabling & network rooms', zh: '结构化布线和网络机房', fr: 'Câblage structuré et salles réseau' },
      { ar: 'محولات وموجهات وجدران حماية', en: 'Switches, routers & firewalls', zh: '交换机、路由器和防火墙', fr: 'Switches, routeurs et pare-feu' },
      { ar: 'شبكات لاسلكية للمؤسسات', en: 'Enterprise wireless networks', zh: '企业无线网络', fr: 'Réseaux sans fil d\'entreprise' },
      { ar: 'VPN والاتصال بين الفروع', en: 'VPN & branch connectivity', zh: 'VPN和分支机构连接', fr: 'VPN et connectivité multi-sites' },
      { ar: 'مراقبة وإدارة الشبكة', en: 'Network monitoring & management', zh: '网络监控和管理', fr: 'Supervision et gestion réseau' },
    ],
    benefits: [
      { ar: 'تصميم قابل للتوسع ومعتمد', en: 'Scalable and certified design', zh: '可扩展和认证的设计', fr: 'Conception évolutive et certifiée' },
      { ar: 'أداء عالٍ وموثوقية', en: 'High performance & reliability', zh: '高性能和可靠性', fr: 'Haute performance et fiabilité' },
      { ar: 'دعم فني على مدار الساعة', en: '24/7 technical support', zh: '24/7技术支持', fr: 'Support technique 24/7' },
      { ar: 'حماية متكاملة للبيانات', en: 'Integrated data protection', zh: '综合数据保护', fr: 'Protection des données intégrée' },
    ],
    related: ['it-servers', 'it-security', 'it-cloud'],
  },
  {
    slug: 'it-servers',
    icon: Server,
    image: imgItServers,
    gradient: 'from-indigo-500 to-purple-700',
    title: { ar: 'الخوادم ومراكز البيانات', en: 'Servers & Data Centers', zh: '服务器与数据中心', fr: 'Serveurs et data centers' },
    tagline: { ar: 'حلول خوادم ومراكز بيانات متكاملة', en: 'Integrated server and data center solutions', zh: '综合服务器与数据中心解决方案', fr: 'Solutions serveurs et data centers' },
    description: { ar: 'توريد وتركيب الخوادم وحلول التخزين ومراكز البيانات.', en: 'Supply and installation of servers, storage and data-center solutions.', zh: '服务器、存储和数据中心解决方案的供应和安装。', fr: 'Fourniture et installation de serveurs, stockage et data centers.' },
    longDescription: {
      ar: 'نوفر خوادم مؤسسية وحلول تخزين متقدمة وأنظمة النسخ الاحتياطي والتعافي من الكوارث، وتصميم وتنفيذ غرف السيرفرات ومراكز البيانات وفق المعايير الدولية، مع خدمات المراقبة والصيانة.',
      en: 'Enterprise servers, advanced storage solutions, backup and disaster-recovery systems, plus design and implementation of server rooms and data centers to international standards — with monitoring and maintenance services.',
      zh: '企业服务器、先进存储解决方案、备份和灾难恢复系统,以及按国际标准设计和实施服务器机房和数据中心。',
      fr: "Serveurs d'entreprise, stockage avancé, sauvegarde et PRA, conception et déploiement de salles serveurs et data centers aux normes internationales.",
    },
    items: [
      { ar: 'خوادم فيزيائية وافتراضية', en: 'Physical & virtual servers', zh: '物理和虚拟服务器', fr: 'Serveurs physiques et virtuels' },
      { ar: 'حلول تخزين SAN و NAS', en: 'SAN & NAS storage solutions', zh: 'SAN和NAS存储解决方案', fr: 'Solutions stockage SAN et NAS' },
      { ar: 'النسخ الاحتياطي والتعافي', en: 'Backup & disaster recovery', zh: '备份和灾难恢复', fr: 'Sauvegarde et PRA' },
      { ar: 'تصميم وتنفيذ غرف الخوادم', en: 'Server-room design & fit-out', zh: '服务器机房设计和实施', fr: 'Conception salle serveurs' },
      { ar: 'مراقبة وصيانة مستمرة', en: 'Continuous monitoring & maintenance', zh: '持续监控和维护', fr: 'Supervision et maintenance continues' },
    ],
    benefits: [
      { ar: 'توافر عالٍ وجاهزية دائمة', en: 'High availability & uptime', zh: '高可用性和正常运行时间', fr: 'Haute disponibilité' },
      { ar: 'حماية للبيانات وامتثال تنظيمي', en: 'Data protection & compliance', zh: '数据保护和合规', fr: 'Protection des données et conformité' },
      { ar: 'قابلية توسع مرنة', en: 'Flexible scalability', zh: '灵活的可扩展性', fr: 'Évolutivité flexible' },
      { ar: 'انخفاض تكلفة التشغيل', en: 'Lower operating cost', zh: '较低的运营成本', fr: 'Coût d\'exploitation réduit' },
    ],
    related: ['it-networking', 'it-cloud', 'it-security'],
  },
  {
    slug: 'it-software',
    icon: Code2,
    image: imgItSoftware,
    gradient: 'from-violet-500 to-fuchsia-700',
    title: { ar: 'برمجيات الأعمال وERP', en: 'Business Software & ERP', zh: '业务软件与ERP', fr: 'Logiciels métier et ERP' },
    tagline: { ar: 'حلول ERP وCRM وأتمتة الأعمال', en: 'ERP, CRM and business automation solutions', zh: 'ERP、CRM和业务自动化', fr: 'ERP, CRM et automatisation métier' },
    description: { ar: 'حلول برمجية لإدارة الأعمال والمحاسبة والموارد وأتمتة العمليات.', en: 'Software solutions for business management, accounting, HR and process automation.', zh: '业务管理、会计、人力资源和流程自动化软件解决方案。', fr: 'Solutions logicielles gestion, comptabilité, RH et automatisation.' },
    longDescription: {
      ar: 'ننفذ حلول ERP وCRM ونظم إدارة الموارد البشرية وإدارة المستودعات ونقاط البيع، مع خدمات التحليل والتطوير والتخصيص والتكامل مع الأنظمة القائمة، والتدريب والدعم بعد التنفيذ.',
      en: 'We implement ERP, CRM, HRMS, WMS and POS solutions — including analysis, development, customisation, integration with existing systems, training and post-implementation support.',
      zh: '我们实施ERP、CRM、HRMS、WMS和POS解决方案,包括分析、开发、定制、与现有系统集成、培训和实施后支持。',
      fr: "Mise en œuvre ERP, CRM, SIRH, WMS, POS: analyse, développement, personnalisation, intégration, formation et support post-projet.",
    },
    items: [
      { ar: 'أنظمة ERP لتخطيط الموارد', en: 'ERP resource planning systems', zh: 'ERP资源规划系统', fr: 'Systèmes ERP' },
      { ar: 'إدارة علاقات العملاء CRM', en: 'CRM customer management', zh: 'CRM客户管理', fr: 'CRM gestion client' },
      { ar: 'أنظمة الموارد البشرية والرواتب', en: 'HR & payroll systems', zh: '人力资源和工资系统', fr: 'Systèmes RH et paie' },
      { ar: 'إدارة المستودعات ونقاط البيع', en: 'Warehouse & POS management', zh: '仓库和POS管理', fr: 'Gestion entrepôts et POS' },
      { ar: 'التكامل والتخصيص والدعم', en: 'Integration, customisation & support', zh: '集成、定制和支持', fr: 'Intégration, personnalisation et support' },
    ],
    benefits: [
      { ar: 'كفاءة تشغيلية أعلى', en: 'Higher operational efficiency', zh: '更高的运营效率', fr: 'Efficacité opérationnelle accrue' },
      { ar: 'قرارات مبنية على بيانات', en: 'Data-driven decision making', zh: '数据驱动决策', fr: 'Décisions basées sur les données' },
      { ar: 'تدريب فرق العمل', en: 'Team training programs', zh: '团队培训计划', fr: 'Formation des équipes' },
      { ar: 'دعم مستمر بعد التشغيل', en: 'Ongoing post-live support', zh: '持续的上线后支持', fr: 'Support continu après mise en service' },
    ],
    related: ['it-cloud', 'it-servers', 'hr-services'],
  },
  {
    slug: 'it-security',
    icon: Shield,
    image: imgItSecurity,
    gradient: 'from-red-500 to-rose-700',
    title: { ar: 'الأمن السيبراني والمراقبة', en: 'Cybersecurity & Surveillance', zh: '网络安全和监控', fr: 'Cybersécurité et surveillance' },
    tagline: { ar: 'حماية بيانات وأنظمة المراقبة', en: 'Data protection and surveillance systems', zh: '数据保护和监控系统', fr: 'Protection des données et surveillance' },
    description: { ar: 'حلول أمن سيبراني وأنظمة المراقبة والتحكم بالدخول.', en: 'Cybersecurity solutions, surveillance and access control systems.', zh: '网络安全解决方案、监控和访问控制系统。', fr: 'Cybersécurité, surveillance et contrôle d\'accès.' },
    longDescription: {
      ar: 'نوفر حلول متكاملة للأمن السيبراني تشمل جدران الحماية المتقدمة، أنظمة كشف التسلل، حماية نقاط النهاية، إدارة الهوية، وأنظمة المراقبة بالكاميرات والتحكم في الدخول، مع خطط الاستجابة للحوادث.',
      en: 'End-to-end cybersecurity solutions — next-gen firewalls, intrusion detection, endpoint protection, identity management, CCTV surveillance and access control — with full incident-response planning.',
      zh: '端到端网络安全解决方案:下一代防火墙、入侵检测、端点保护、身份管理、CCTV监控和访问控制,以及事件响应计划。',
      fr: "Cybersécurité de bout en bout: pare-feu nouvelle génération, détection d'intrusion, EDR, gestion des identités, vidéosurveillance, contrôle d'accès et plan de réponse aux incidents.",
    },
    items: [
      { ar: 'جدران الحماية وكشف التسلل', en: 'Firewalls & intrusion detection', zh: '防火墙和入侵检测', fr: 'Pare-feu et détection d\'intrusion' },
      { ar: 'حماية نقاط النهاية والبريد', en: 'Endpoint & email protection', zh: '端点和邮件保护', fr: 'Protection endpoint et email' },
      { ar: 'إدارة الهوية والصلاحيات', en: 'Identity & access management', zh: '身份和访问管理', fr: 'Gestion des identités et accès' },
      { ar: 'أنظمة كاميرات المراقبة CCTV', en: 'CCTV surveillance systems', zh: 'CCTV监控系统', fr: 'Vidéosurveillance CCTV' },
      { ar: 'التحكم في الدخول والحضور', en: 'Access control & attendance', zh: '门禁和考勤', fr: 'Contrôle d\'accès et présence' },
    ],
    benefits: [
      { ar: 'حماية من الهجمات والاختراقات', en: 'Protection from attacks & breaches', zh: '防止攻击和入侵', fr: 'Protection contre attaques et intrusions' },
      { ar: 'امتثال للمعايير الدولية', en: 'International compliance', zh: '国际合规', fr: 'Conformité internationale' },
      { ar: 'خطط استجابة للحوادث', en: 'Incident-response planning', zh: '事件响应计划', fr: 'Plan de réponse aux incidents' },
      { ar: 'مراقبة مستمرة على مدار الساعة', en: '24/7 continuous monitoring', zh: '24/7连续监控', fr: 'Supervision 24/7' },
    ],
    related: ['it-networking', 'it-servers', 'gt-safety-security'],
  },
  {
    slug: 'it-cloud',
    icon: Cloud,
    image: imgItCloud,
    gradient: 'from-sky-500 to-cyan-700',
    title: { ar: 'الحوسبة السحابية والخدمات المدارة', en: 'Cloud & Managed Services', zh: '云计算和托管服务', fr: 'Cloud et services managés' },
    tagline: { ar: 'انتقال إلى السحابة وإدارة تقنية شاملة', en: 'Cloud migration and full-stack managed IT', zh: '云迁移和全栈托管IT', fr: 'Migration cloud et infogérance' },
    description: { ar: 'حلول سحابية وخدمات إدارة تقنية للبنية التحتية والتطبيقات.', en: 'Cloud solutions and managed IT services for infrastructure and applications.', zh: '基础设施和应用程序的云解决方案和托管IT服务。', fr: 'Solutions cloud et infogérance infrastructure et applications.' },
    longDescription: {
      ar: 'نساعد المؤسسات على الانتقال إلى الحوسبة السحابية عبر تصميم البنية التحتية، ترحيل الأنظمة والبيانات، إدارة الخوادم الافتراضية، وحلول SaaS و Microsoft 365 و Google Workspace، مع خدمات إدارة تقنية شاملة على مدار الساعة.',
      en: 'We help organisations move to the cloud — infrastructure design, workload migration, virtual server management, SaaS solutions, Microsoft 365 and Google Workspace — with full 24/7 managed IT services.',
      zh: '我们帮助组织迁移到云:基础设施设计、工作负载迁移、虚拟服务器管理、SaaS解决方案、Microsoft 365和Google Workspace,并提供全天候托管IT服务。',
      fr: "Migration vers le cloud, conception d'infrastructure, migration de charges, gestion de serveurs virtuels, SaaS, Microsoft 365 et Google Workspace, avec infogérance 24/7.",
    },
    items: [
      { ar: 'ترحيل الأنظمة إلى السحابة', en: 'Cloud workload migration', zh: '云工作负载迁移', fr: 'Migration vers le cloud' },
      { ar: 'إدارة الخوادم الافتراضية', en: 'Virtual server management', zh: '虚拟服务器管理', fr: 'Gestion de serveurs virtuels' },
      { ar: 'Microsoft 365 و Google Workspace', en: 'Microsoft 365 & Google Workspace', zh: 'Microsoft 365和Google Workspace', fr: 'Microsoft 365 et Google Workspace' },
      { ar: 'حلول SaaS للأعمال', en: 'Business SaaS solutions', zh: '业务SaaS解决方案', fr: 'Solutions SaaS métier' },
      { ar: 'خدمات إدارة تقنية شاملة', en: 'Full managed IT services', zh: '全面托管IT服务', fr: 'Infogérance complète' },
    ],
    benefits: [
      { ar: 'مرونة وتوفير في التكاليف', en: 'Flexibility & cost savings', zh: '灵活性和成本节约', fr: 'Flexibilité et économies' },
      { ar: 'وصول آمن من أي مكان', en: 'Secure access from anywhere', zh: '安全的随地访问', fr: 'Accès sécurisé partout' },
      { ar: 'تحديثات وترقيات تلقائية', en: 'Automatic updates & upgrades', zh: '自动更新和升级', fr: 'Mises à jour automatiques' },
      { ar: 'دعم فني احترافي', en: 'Professional technical support', zh: '专业技术支持', fr: 'Support technique professionnel' },
    ],
    related: ['it-servers', 'it-software', 'it-security'],
  },
  {
    slug: 'it-devices',
    icon: Monitor,
    image: imgItDevices,
    gradient: 'from-blue-500 to-indigo-700',
    title: { ar: 'الأجهزة والمعدات الطرفية', en: 'End-User Devices & Peripherals', zh: '终端设备和外围设备', fr: 'Postes de travail et périphériques' },
    tagline: { ar: 'أجهزة كمبيوتر وطابعات وملحقاتها', en: 'Computers, printers and accessories', zh: '计算机、打印机和配件', fr: 'Ordinateurs, imprimantes et accessoires' },
    description: { ar: 'أجهزة كمبيوتر وشاشات وطابعات وأجهزة العرض وملحقاتها.', en: 'Computers, monitors, printers, projectors and peripherals.', zh: '计算机、显示器、打印机、投影仪和外围设备。', fr: 'Ordinateurs, écrans, imprimantes, vidéoprojecteurs et périphériques.' },
    longDescription: {
      ar: 'نوفر أجهزة الحاسب المكتبية والمحمولة، محطات العمل، الشاشات، الطابعات وأجهزة المسح الضوئي، أجهزة العرض والأنظمة السمعية والبصرية، وملحقاتها من علامات تجارية دولية موثوقة، مع ضمانات ودعم فني وتوصيل مباشر للمواقع.',
      en: 'Desktops and laptops, workstations, monitors, printers, scanners, projectors and AV systems, plus accessories — from trusted international brands with warranties, technical support and direct delivery.',
      zh: '台式机和笔记本电脑、工作站、显示器、打印机、扫描仪、投影仪和AV系统及配件,来自值得信赖的国际品牌。',
      fr: "Postes fixes et portables, stations de travail, écrans, imprimantes, scanners, projecteurs, audiovisuel et accessoires de marques internationales, avec garanties et livraison directe.",
    },
    items: [
      { ar: 'أجهزة مكتبية ومحمولة ومحطات عمل', en: 'Desktops, laptops & workstations', zh: '台式机、笔记本和工作站', fr: 'Postes fixes, portables et stations' },
      { ar: 'شاشات عالية الدقة', en: 'High-resolution monitors', zh: '高分辨率显示器', fr: 'Écrans haute résolution' },
      { ar: 'طابعات وأجهزة مسح', en: 'Printers & scanners', zh: '打印机和扫描仪', fr: 'Imprimantes et scanners' },
      { ar: 'أنظمة عرض واجتماعات', en: 'Projectors & meeting-room AV', zh: '投影仪和会议室AV', fr: 'Vidéoprojecteurs et salles de réunion' },
      { ar: 'الملحقات والإكسسوارات', en: 'Peripherals & accessories', zh: '外围设备和配件', fr: 'Périphériques et accessoires' },
    ],
    benefits: [
      { ar: 'علامات تجارية موثوقة', en: 'Trusted brands', zh: '值得信赖的品牌', fr: 'Marques de confiance' },
      { ar: 'ضمانات المصنّع', en: 'Manufacturer warranties', zh: '制造商担保', fr: 'Garanties constructeur' },
      { ar: 'دعم فني وتركيب', en: 'Technical support & installation', zh: '技术支持和安装', fr: 'Support technique et installation' },
      { ar: 'أسعار للشركات والمشاريع', en: 'Corporate & project pricing', zh: '企业和项目定价', fr: 'Tarifs entreprises et projets' },
    ],
    related: ['it-networking', 'it-servers', 'gt-home-appliances'],
  },

  // ==================== SOLAR ====================
  {
    slug: 'solar-residential',
    icon: Sun,
    image: imgSolarResidential,
    gradient: 'from-yellow-500 to-orange-600',
    title: { ar: 'أنظمة الطاقة الشمسية السكنية', en: 'Residential Solar Systems', zh: '住宅太阳能系统', fr: 'Systèmes solaires résidentiels' },
    tagline: { ar: 'حلول شمسية للمنازل والفلل', en: 'Solar solutions for homes and villas', zh: '家庭和别墅的太阳能解决方案', fr: 'Solutions solaires pour maisons et villas' },
    description: { ar: 'تصميم وتركيب أنظمة الطاقة الشمسية للمنازل والفلل.', en: 'Design and installation of solar systems for homes and villas.', zh: '为家庭和别墅设计和安装太阳能系统。', fr: 'Conception et installation solaire résidentielle.' },
    longDescription: {
      ar: 'نصمم وننفذ أنظمة الطاقة الشمسية السكنية بأحجام مختلفة (على الشبكة، مستقلة، هجينة)، بما يتناسب مع أحمال المنزل ومساحة السقف والميزانية، مع ضمانات طويلة المدى على الألواح والمحولات ودراسة جدوى اقتصادية شاملة.',
      en: 'We design and install residential solar systems in various sizes (on-grid, off-grid, hybrid) matched to household load, roof area and budget — with long-term warranties on panels and inverters, plus a full financial payback study.',
      zh: '我们设计和安装各种规模的住宅太阳能系统(并网、离网、混合),匹配家庭负荷、屋顶面积和预算,并提供长期担保和完整的投资回报分析。',
      fr: "Conception et installation de systèmes solaires résidentiels (on-grid, off-grid, hybride) adaptés à la charge, la toiture et au budget, avec garanties longues sur panneaux et onduleurs et étude de rentabilité.",
    },
    items: [
      { ar: 'ألواح شمسية عالية الكفاءة', en: 'High-efficiency solar panels', zh: '高效太阳能电池板', fr: 'Panneaux solaires haute efficacité' },
      { ar: 'محولات (Inverters) موثوقة', en: 'Reliable inverters', zh: '可靠的逆变器', fr: 'Onduleurs fiables' },
      { ar: 'بطاريات تخزين ليثيوم', en: 'Lithium storage batteries', zh: '锂储能电池', fr: 'Batteries lithium' },
      { ar: 'هياكل تركيب على الأسقف', en: 'Roof mounting structures', zh: '屋顶安装结构', fr: 'Structures de fixation toiture' },
      { ar: 'نظام مراقبة عن بعد', en: 'Remote monitoring system', zh: '远程监控系统', fr: 'Système de monitoring à distance' },
    ],
    benefits: [
      { ar: 'خفض فاتورة الكهرباء بشكل كبير', en: 'Major electricity bill savings', zh: '大幅节省电费', fr: 'Forte réduction de la facture' },
      { ar: 'استقلالية عن انقطاع التيار', en: 'Independence from grid outages', zh: '摆脱停电', fr: 'Autonomie face aux coupures' },
      { ar: 'صديق للبيئة وطاقة نظيفة', en: 'Eco-friendly clean energy', zh: '环保清洁能源', fr: 'Énergie propre et écologique' },
      { ar: 'ضمانات طويلة المدى', en: 'Long-term warranties', zh: '长期担保', fr: 'Garanties longue durée' },
    ],
    related: ['solar-commercial', 'solar-offgrid', 'solar-storage'],
  },
  {
    slug: 'solar-commercial',
    icon: Factory,
    image: imgSolarCommercial,
    gradient: 'from-orange-500 to-red-700',
    title: { ar: 'الطاقة الشمسية للتجاري والصناعي', en: 'Commercial & Industrial Solar', zh: '商业和工业太阳能', fr: 'Solaire commercial et industriel' },
    tagline: { ar: 'محطات شمسية للشركات والمصانع', en: 'Solar plants for companies and factories', zh: '公司和工厂的太阳能电站', fr: 'Centrales solaires pour entreprises' },
    description: { ar: 'محطات شمسية للشركات والمصانع والمرافق التجارية.', en: 'Solar plants for companies, factories and commercial facilities.', zh: '公司、工厂和商业设施的太阳能电站。', fr: 'Centrales solaires pour entreprises, usines et facilités commerciales.' },
    longDescription: {
      ar: 'ننفذ محطات الطاقة الشمسية للقطاع التجاري والصناعي بقدرات من 20 كيلوواط حتى عدة ميجاواط، مع دراسات الجدوى الفنية والاقتصادية والتصميم الهندسي المفصل، خيارات التمويل، والتشغيل والصيانة على المدى الطويل.',
      en: 'We deploy commercial and industrial solar plants from 20 kW to multi-MW — with technical & financial feasibility, detailed engineering, financing options and long-term operations & maintenance.',
      zh: '我们建设20 kW至数MW的商业和工业太阳能电站,提供技术财务可行性、详细工程设计、融资选项和长期运维。',
      fr: "Déploiement de centrales solaires commerciales et industrielles de 20 kW à plusieurs MW: études, ingénierie détaillée, financement et O&M long terme.",
    },
    items: [
      { ar: 'دراسات جدوى فنية واقتصادية', en: 'Technical & financial feasibility', zh: '技术和财务可行性', fr: 'Études de faisabilité technique et financière' },
      { ar: 'تصميم هندسي مفصل', en: 'Detailed engineering design', zh: '详细的工程设计', fr: 'Ingénierie détaillée' },
      { ar: 'أنظمة قدرات عالية على الأسطح والأرض', en: 'High-capacity roof & ground-mount systems', zh: '大容量屋顶和地面安装系统', fr: 'Systèmes toiture et sol grande capacité' },
      { ar: 'ربط بالشبكة أو أنظمة هجينة', en: 'Grid connection or hybrid systems', zh: '并网或混合系统', fr: 'Raccordement réseau ou hybride' },
      { ar: 'تشغيل وصيانة (O&M)', en: 'Operations & maintenance (O&M)', zh: '运营和维护(O&M)', fr: 'Exploitation et maintenance (O&M)' },
    ],
    benefits: [
      { ar: 'تقليل تكاليف الطاقة التشغيلية', en: 'Reduced operational energy costs', zh: '降低运营能源成本', fr: 'Baisse des coûts énergétiques' },
      { ar: 'استقرار الإمداد الكهربائي', en: 'Stable power supply', zh: '稳定的电力供应', fr: 'Approvisionnement stable' },
      { ar: 'تحسين البصمة الكربونية للمنشأة', en: 'Improved carbon footprint', zh: '改善碳足迹', fr: 'Empreinte carbone améliorée' },
      { ar: 'عائد استثماري جذاب', en: 'Attractive return on investment', zh: '有吸引力的投资回报', fr: 'ROI attractif' },
    ],
    related: ['solar-residential', 'solar-om', 'solar-storage'],
  },
  {
    slug: 'solar-offgrid',
    icon: Zap,
    image: imgSolarOffgrid,
    gradient: 'from-amber-500 to-yellow-700',
    title: { ar: 'الأنظمة المستقلة والهجينة', en: 'Off-Grid & Hybrid Systems', zh: '离网和混合系统', fr: 'Systèmes off-grid et hybrides' },
    tagline: { ar: 'حلول للمناطق النائية والمشاريع المعزولة', en: 'Solutions for remote areas and isolated projects', zh: '偏远地区和孤立项目的解决方案', fr: 'Solutions zones isolées et projets déportés' },
    description: { ar: 'أنظمة طاقة شمسية مستقلة وهجينة للمناطق البعيدة عن الشبكة.', en: 'Off-grid and hybrid solar systems for areas away from the grid.', zh: '远离电网地区的离网和混合太阳能系统。', fr: 'Systèmes solaires off-grid et hybrides pour zones hors réseau.' },
    longDescription: {
      ar: 'نصمم أنظمة الطاقة الشمسية المستقلة (Off-Grid) والهجينة للمناطق النائية والقرى والمخيمات ومشاريع التعدين والاتصالات، بحيث توفر إمداداً كهربائياً مستقلاً موثوقاً حتى في غياب الشبكة العامة.',
      en: 'We design off-grid and hybrid solar systems for remote areas, villages, camps, mining and telecom sites — delivering reliable independent power even without grid access.',
      zh: '我们为偏远地区、村庄、营地、采矿和电信站点设计离网和混合太阳能系统,即使没有电网接入,也能提供可靠的独立电力。',
      fr: "Systèmes solaires off-grid et hybrides pour zones reculées, villages, camps, sites miniers et télécoms — alimentation indépendante et fiable même sans réseau.",
    },
    items: [
      { ar: 'أنظمة مستقلة كاملة عن الشبكة', en: 'Fully independent off-grid systems', zh: '完全独立的离网系统', fr: 'Systèmes autonomes complets' },
      { ar: 'أنظمة هجينة بمولد احتياطي', en: 'Hybrid systems with backup generator', zh: '带备用发电机的混合系统', fr: 'Systèmes hybrides avec groupe de secours' },
      { ar: 'حلول للقرى والمخيمات', en: 'Solutions for villages & camps', zh: '村庄和营地解决方案', fr: 'Solutions villages et camps' },
      { ar: 'محطات الاتصالات النائية', en: 'Remote telecom stations', zh: '偏远电信站', fr: 'Stations télécom isolées' },
      { ar: 'مواقع التعدين والاستكشاف', en: 'Mining & exploration sites', zh: '采矿和勘探场地', fr: 'Sites miniers et exploration' },
    ],
    benefits: [
      { ar: 'إمداد كهربائي دون شبكة عامة', en: 'Power supply without public grid', zh: '无公共电网的电力供应', fr: 'Alimentation sans réseau public' },
      { ar: 'موثوقية عالية في المناطق النائية', en: 'High reliability in remote areas', zh: '偏远地区的高可靠性', fr: 'Haute fiabilité en zone reculée' },
      { ar: 'خفض استهلاك الوقود', en: 'Reduced fuel consumption', zh: '减少燃料消耗', fr: 'Consommation de carburant réduite' },
      { ar: 'قابلية توسع مستقبلية', en: 'Future scalability', zh: '未来可扩展性', fr: 'Évolutivité future' },
    ],
    related: ['solar-residential', 'solar-pumping', 'solar-storage'],
  },
  {
    slug: 'solar-pumping',
    icon: Droplet,
    image: imgSolarPumping,
    gradient: 'from-cyan-500 to-blue-700',
    title: { ar: 'ضخ المياه بالطاقة الشمسية', en: 'Solar Water Pumping', zh: '太阳能水泵', fr: 'Pompage solaire de l\'eau' },
    tagline: { ar: 'حلول ري وضخ للمياه بالشمس', en: 'Solar irrigation and water pumping solutions', zh: '太阳能灌溉和抽水解决方案', fr: 'Irrigation et pompage solaires' },
    description: { ar: 'أنظمة ضخ المياه بالطاقة الشمسية للزراعة والشرب.', en: 'Solar water pumping systems for agriculture and drinking water.', zh: '农业和饮用水的太阳能水泵系统。', fr: 'Systèmes de pompage solaire pour l\'agriculture et l\'eau potable.' },
    longDescription: {
      ar: 'حلول ضخ المياه بالطاقة الشمسية للمزارع والقرى ومشاريع الشرب النظيف والري، بأنظمة غاطسة وسطحية تناسب الآبار والخزانات والأنهار، تعمل تلقائياً بالطاقة الشمسية دون وقود أو تكاليف تشغيل عالية.',
      en: 'Solar-powered water pumping for farms, villages, clean-water and irrigation projects — submersible and surface systems suited to wells, tanks and rivers, running automatically on solar with no fuel and low operating costs.',
      zh: '农场、村庄、清洁水和灌溉项目的太阳能水泵,潜水式和地面式系统适合井、水箱和河流,依靠太阳能自动运行。',
      fr: "Pompage solaire pour fermes, villages, eau potable et irrigation: pompes immergées et de surface pour puits, réservoirs et rivières, fonctionnement automatique sans carburant.",
    },
    items: [
      { ar: 'مضخات غاطسة للآبار العميقة', en: 'Submersible pumps for deep wells', zh: '深井潜水泵', fr: 'Pompes immergées pour puits profonds' },
      { ar: 'مضخات سطحية للخزانات والأنهار', en: 'Surface pumps for tanks & rivers', zh: '水箱和河流地面泵', fr: 'Pompes de surface pour réservoirs et rivières' },
      { ar: 'أنظمة ري بالتنقيط والرش', en: 'Drip & sprinkler irrigation systems', zh: '滴灌和喷灌系统', fr: 'Systèmes d\'irrigation goutte à goutte et aspersion' },
      { ar: 'خزانات تخزين المياه', en: 'Water storage tanks', zh: '水储存罐', fr: 'Réservoirs de stockage' },
      { ar: 'أنظمة تحكم وحماية', en: 'Control & protection systems', zh: '控制和保护系统', fr: 'Systèmes de contrôle et protection' },
    ],
    benefits: [
      { ar: 'توفير كامل في تكاليف الوقود', en: 'Complete fuel cost savings', zh: '完全节省燃料成本', fr: 'Élimination du coût carburant' },
      { ar: 'تشغيل تلقائي بدون تدخل', en: 'Automatic hands-free operation', zh: '免干预自动运行', fr: 'Fonctionnement automatique' },
      { ar: 'زيادة إنتاجية الزراعة', en: 'Higher agricultural productivity', zh: '提高农业生产力', fr: 'Productivité agricole accrue' },
      { ar: 'مياه شرب نظيفة للقرى', en: 'Clean drinking water for villages', zh: '为村庄提供清洁饮用水', fr: 'Eau potable propre pour villages' },
    ],
    related: ['solar-offgrid', 'solar-commercial', 'gt-safety-security'],
  },
  {
    slug: 'solar-storage',
    icon: Battery,
    image: imgSolarStorage,
    gradient: 'from-green-500 to-emerald-700',
    title: { ar: 'البطاريات وأنظمة التخزين', en: 'Batteries & Energy Storage', zh: '电池和储能', fr: 'Batteries et stockage d\'énergie' },
    tagline: { ar: 'حلول تخزين متقدمة للطاقة الشمسية', en: 'Advanced storage for solar energy', zh: '先进的太阳能储能', fr: 'Stockage avancé pour l\'énergie solaire' },
    description: { ar: 'بطاريات ليثيوم وأنظمة تخزين طاقة متقدمة.', en: 'Lithium batteries and advanced energy storage systems.', zh: '锂电池和先进储能系统。', fr: 'Batteries lithium et systèmes de stockage avancés.' },
    longDescription: {
      ar: 'نوفر حلول تخزين الطاقة بأحدث تقنيات بطاريات الليثيوم LiFePO4 وأنظمة إدارة البطاريات BMS، بأحجام تناسب المنازل والشركات والمشاريع الكبرى، مع ضمانات طويلة وأداء مستقر لعدة آلاف من دورات الشحن.',
      en: 'Energy storage solutions using the latest LiFePO4 lithium battery technology and BMS management — sized for homes, businesses and utility-scale projects, with long warranties and stable performance over thousands of cycles.',
      zh: '使用最新的LiFePO4锂电池技术和BMS管理的储能解决方案,适合家庭、企业和公用事业规模项目。',
      fr: "Solutions de stockage à base de LiFePO4 et BMS: dimensionnées pour résidentiel, entreprise et grande échelle, avec garanties longues et performance stable sur des milliers de cycles.",
    },
    items: [
      { ar: 'بطاريات ليثيوم LiFePO4', en: 'LiFePO4 lithium batteries', zh: 'LiFePO4锂电池', fr: 'Batteries lithium LiFePO4' },
      { ar: 'أنظمة إدارة البطاريات BMS', en: 'BMS battery management systems', zh: 'BMS电池管理系统', fr: 'Systèmes BMS' },
      { ar: 'حلول تخزين منزلية', en: 'Home storage solutions', zh: '家庭储能解决方案', fr: 'Stockage résidentiel' },
      { ar: 'حلول تخزين تجارية وصناعية', en: 'Commercial & industrial storage', zh: '商业和工业储能', fr: 'Stockage commercial et industriel' },
      { ar: 'نظم UPS ومنع انقطاع التيار', en: 'UPS & power-continuity systems', zh: 'UPS和电力连续性系统', fr: 'UPS et continuité électrique' },
    ],
    benefits: [
      { ar: 'استمرارية الكهرباء 24/7', en: '24/7 power continuity', zh: '24/7电力连续性', fr: 'Continuité électrique 24/7' },
      { ar: 'عمر افتراضي طويل', en: 'Long service life', zh: '长使用寿命', fr: 'Longue durée de vie' },
      { ar: 'كفاءة شحن وتفريغ عالية', en: 'High charge/discharge efficiency', zh: '高充放电效率', fr: 'Efficacité charge/décharge élevée' },
      { ar: 'أمان تشغيلي عالي', en: 'High operating safety', zh: '高操作安全性', fr: 'Sécurité opérationnelle élevée' },
    ],
    related: ['solar-residential', 'solar-commercial', 'solar-offgrid'],
  },
  {
    slug: 'solar-om',
    icon: Wrench,
    image: imgSolarOm,
    gradient: 'from-lime-500 to-green-700',
    title: { ar: 'الصيانة والتشغيل للأنظمة الشمسية', en: 'Solar O&M and Maintenance', zh: '太阳能运维', fr: 'Maintenance et O&M solaire' },
    tagline: { ar: 'برامج صيانة دورية للحفاظ على الأداء', en: 'Preventive maintenance to preserve performance', zh: '预防性维护以保持性能', fr: 'Maintenance préventive pour préserver la performance' },
    description: { ar: 'خدمات تشغيل وصيانة (O&M) للمحطات الشمسية.', en: 'Operations and maintenance (O&M) services for solar plants.', zh: '太阳能电站运营和维护(O&M)服务。', fr: 'Services d\'exploitation et maintenance (O&M) solaires.' },
    longDescription: {
      ar: 'نقدم خدمات التشغيل والصيانة الوقائية والتصحيحية لمحطات الطاقة الشمسية بجميع أحجامها، شاملة تنظيف الألواح، اختبار الأداء، صيانة المحولات والبطاريات، ومراقبة الإنتاج عن بُعد لضمان أعلى كفاءة إنتاجية على مدى عمر النظام.',
      en: 'We provide preventive and corrective O&M services for solar plants of all sizes — panel cleaning, performance testing, inverter and battery maintenance, and remote production monitoring — ensuring peak efficiency over the system\'s lifetime.',
      zh: '我们为各种规模的太阳能电站提供预防性和纠正性运维服务,包括面板清洁、性能测试、逆变器和电池维护及远程发电监控。',
      fr: "Services O&M préventifs et correctifs pour toutes tailles de centrales: nettoyage des panneaux, tests de performance, maintenance onduleurs et batteries, supervision à distance.",
    },
    items: [
      { ar: 'تنظيف دوري للألواح', en: 'Regular panel cleaning', zh: '定期面板清洁', fr: 'Nettoyage régulier des panneaux' },
      { ar: 'اختبار الأداء والفحص الحراري', en: 'Performance testing & thermal inspection', zh: '性能测试和热检查', fr: 'Tests de performance et thermographie' },
      { ar: 'صيانة المحولات والبطاريات', en: 'Inverter & battery maintenance', zh: '逆变器和电池维护', fr: 'Maintenance onduleurs et batteries' },
      { ar: 'مراقبة الإنتاج عن بُعد', en: 'Remote production monitoring', zh: '远程发电监控', fr: 'Supervision à distance' },
      { ar: 'استجابة سريعة للأعطال', en: 'Fast fault response', zh: '快速故障响应', fr: 'Réponse rapide aux pannes' },
    ],
    benefits: [
      { ar: 'الحفاظ على أعلى كفاءة إنتاجية', en: 'Maintain peak production efficiency', zh: '保持峰值生产效率', fr: 'Maintien de la performance maximale' },
      { ar: 'إطالة عمر النظام', en: 'Extended system lifetime', zh: '延长系统寿命', fr: 'Durée de vie prolongée' },
      { ar: 'تجنب الأعطال المفاجئة', en: 'Prevent unexpected failures', zh: '防止意外故障', fr: 'Éviter les pannes imprévues' },
      { ar: 'تقارير أداء دورية', en: 'Regular performance reports', zh: '定期性能报告', fr: 'Rapports de performance réguliers' },
    ],
    related: ['solar-commercial', 'solar-residential', 'maintenance'],
  },

  // ==================== MEDICAL ====================
  {
    slug: 'med-hospital',
    icon: HeartPulse,
    image: imgMedHospital,
    gradient: 'from-rose-500 to-red-700',
    title: { ar: 'تجهيزات المستشفيات', en: 'Hospital Equipment', zh: '医院设备', fr: 'Équipements hospitaliers' },
    tagline: { ar: 'حلول متكاملة لتجهيز المستشفيات', en: 'Turnkey hospital equipment solutions', zh: '医院设备一站式解决方案', fr: 'Solutions clé en main pour hôpitaux' },
    description: { ar: 'تجهيزات المستشفيات وأسرّة العناية وغرف العمليات.', en: 'Hospital equipment, ICU beds and operating rooms.', zh: '医院设备、ICU病床和手术室。', fr: 'Équipements hospitaliers, lits USI et blocs opératoires.' },
    longDescription: {
      ar: 'نوفر تجهيزات المستشفيات الكاملة تشمل أسرّة المرضى والعناية المركزة، غرف العمليات، أجهزة التخدير والتنفس، أنظمة مراقبة المرضى، وحدات الطوارئ، مع خدمات التركيب والتدريب والصيانة، بتنفيذ حسب المواصفات الفنية والمعايير الدولية.',
      en: 'Complete hospital equipment — patient and ICU beds, operating theatres, anaesthesia and ventilators, patient monitors, emergency units — including installation, training and maintenance, delivered to international standards.',
      zh: '完整的医院设备:病床和ICU床位、手术室、麻醉和呼吸机、患者监护仪、急诊单元,包括安装、培训和维护。',
      fr: "Équipement hospitalier complet: lits patients et USI, blocs opératoires, anesthésie et ventilation, moniteurs, urgences, avec installation, formation et maintenance.",
    },
    items: [
      { ar: 'أسرّة المرضى وأسرّة العناية المركزة', en: 'Patient & ICU beds', zh: '病床和ICU床位', fr: 'Lits patients et USI' },
      { ar: 'غرف العمليات وأنظمة التعقيم', en: 'Operating theatres & sterilisation', zh: '手术室和消毒系统', fr: 'Blocs opératoires et stérilisation' },
      { ar: 'أجهزة التخدير والتنفس الاصطناعي', en: 'Anaesthesia machines & ventilators', zh: '麻醉机和呼吸机', fr: 'Anesthésie et ventilateurs' },
      { ar: 'مراقبات المرضى والعلامات الحيوية', en: 'Patient & vital signs monitors', zh: '患者和生命体征监护仪', fr: 'Moniteurs patients et signes vitaux' },
      { ar: 'تجهيزات وحدات الطوارئ', en: 'Emergency unit equipment', zh: '急诊单元设备', fr: 'Équipements des urgences' },
    ],
    benefits: [
      { ar: 'حلول شاملة من التصميم للتشغيل', en: 'End-to-end design-to-operation solutions', zh: '从设计到运营的完整解决方案', fr: 'De la conception à la mise en service' },
      { ar: 'تدريب طواقم الطبية والفنية', en: 'Medical & technical staff training', zh: '医疗和技术人员培训', fr: 'Formation équipes médicales et techniques' },
      { ar: 'صيانة وقطع غيار محلية', en: 'Local maintenance & spare parts', zh: '本地维护和备件', fr: 'Maintenance et pièces locales' },
      { ar: 'التزام بمعايير CE و FDA', en: 'Compliance with CE and FDA standards', zh: '符合CE和FDA标准', fr: 'Conformité CE et FDA' },
    ],
    related: ['med-diagnostic', 'med-consumables', 'med-clinic'],
  },
  {
    slug: 'med-diagnostic',
    icon: Stethoscope,
    image: imgMedDiagnostic,
    gradient: 'from-sky-500 to-blue-700',
    title: { ar: 'أجهزة التشخيص والأشعة', en: 'Diagnostic & Imaging Devices', zh: '诊断和影像设备', fr: 'Dispositifs de diagnostic et imagerie' },
    tagline: { ar: 'حلول تشخيص متقدمة وأنظمة أشعة', en: 'Advanced diagnostics and imaging systems', zh: '先进的诊断和成像系统', fr: 'Diagnostic avancé et imagerie' },
    description: { ar: 'أجهزة الأشعة والتشخيص والفحص المتقدم.', en: 'X-ray, imaging and advanced diagnostic devices.', zh: 'X光、影像和先进的诊断设备。', fr: 'Rayons X, imagerie et dispositifs diagnostiques avancés.' },
    longDescription: {
      ar: 'نوفر أجهزة التشخيص والأشعة المتقدمة تشمل أجهزة الأشعة السينية والرنين المغناطيسي والأشعة المقطعية والموجات فوق الصوتية، وأجهزة تخطيط القلب والفحوصات المتخصصة، من مصنعين عالميين معتمدين، مع خدمات التركيب والمعايرة والتدريب.',
      en: 'Advanced diagnostic and imaging devices — X-ray, MRI, CT scanners, ultrasound, ECG and specialised diagnostics — from certified global manufacturers, with installation, calibration and training services.',
      zh: '先进的诊断和成像设备:X光、MRI、CT扫描仪、超声、心电图和专用诊断,来自认证的全球制造商。',
      fr: "Dispositifs de diagnostic et imagerie avancés (rayons X, IRM, scanner, échographie, ECG et diagnostics spécialisés) de fabricants mondiaux certifiés, avec installation, étalonnage et formation.",
    },
    items: [
      { ar: 'أجهزة الأشعة السينية والرقمية', en: 'X-ray & digital radiography', zh: 'X光和数字放射', fr: 'Rayons X et radiographie numérique' },
      { ar: 'أجهزة الرنين المغناطيسي MRI', en: 'MRI systems', zh: 'MRI系统', fr: 'IRM' },
      { ar: 'أجهزة الأشعة المقطعية CT', en: 'CT scanners', zh: 'CT扫描仪', fr: 'Scanners CT' },
      { ar: 'أجهزة الموجات فوق الصوتية', en: 'Ultrasound systems', zh: '超声系统', fr: 'Échographes' },
      { ar: 'أجهزة تخطيط القلب والدماغ', en: 'ECG & EEG devices', zh: '心电图和脑电图设备', fr: 'ECG et EEG' },
    ],
    benefits: [
      { ar: 'دقة تشخيصية عالية', en: 'High diagnostic accuracy', zh: '高诊断准确性', fr: 'Précision diagnostique élevée' },
      { ar: 'موافقة CE و FDA', en: 'CE and FDA approved', zh: 'CE和FDA批准', fr: 'Homologué CE et FDA' },
      { ar: 'خدمات معايرة وصيانة دورية', en: 'Calibration & regular maintenance', zh: '校准和定期维护', fr: 'Étalonnage et maintenance régulière' },
      { ar: 'تدريب الفنيين والأطباء', en: 'Technician & physician training', zh: '技术员和医生培训', fr: 'Formation techniciens et médecins' },
    ],
    related: ['med-hospital', 'med-lab', 'med-consumables'],
  },
  {
    slug: 'med-lab',
    icon: Microscope,
    image: imgMedLab,
    gradient: 'from-teal-500 to-cyan-700',
    title: { ar: 'المستلزمات المخبرية', en: 'Laboratory Supplies', zh: '实验室用品', fr: 'Fournitures de laboratoire' },
    tagline: { ar: 'تجهيزات مخبرية وكواشف تشخيصية', en: 'Lab equipment and diagnostic reagents', zh: '实验室设备和诊断试剂', fr: 'Équipements et réactifs de diagnostic' },
    description: { ar: 'أجهزة وكواشف ومستلزمات المختبرات الطبية.', en: 'Equipment, reagents and supplies for medical laboratories.', zh: '医学实验室的设备、试剂和用品。', fr: 'Équipements, réactifs et fournitures de laboratoires médicaux.' },
    longDescription: {
      ar: 'نوفر تجهيزات المختبرات الطبية الكاملة تشمل أجهزة تحليل الدم والكيمياء الحيوية والمناعة والميكروبيولوجيا، الكواشف التشخيصية، المجاهر وأدوات المعايرة، والزجاجيات والمستلزمات الاستهلاكية، بما يخدم مختبرات المستشفيات والمراكز التشخيصية المرجعية.',
      en: 'Complete medical lab equipment — haematology, biochemistry, immunology and microbiology analysers, diagnostic reagents, microscopes, calibration tools, glassware and consumables — supporting hospital labs and reference diagnostic centres.',
      zh: '完整的医学实验室设备:血液学、生化、免疫学和微生物学分析仪、诊断试剂、显微镜、校准工具、玻璃器皿和耗材。',
      fr: "Équipement complet de laboratoire médical: analyseurs hématologie, biochimie, immunologie, microbiologie, réactifs, microscopes, étalonnage, verrerie et consommables.",
    },
    items: [
      { ar: 'أجهزة تحليل الدم والكيمياء', en: 'Haematology & biochemistry analysers', zh: '血液学和生化分析仪', fr: 'Analyseurs hématologie et biochimie' },
      { ar: 'أجهزة المناعة والهرمونات', en: 'Immunology & hormone analysers', zh: '免疫学和激素分析仪', fr: 'Analyseurs immunologie et hormones' },
      { ar: 'مجاهر وأجهزة الميكروبيولوجيا', en: 'Microscopes & microbiology equipment', zh: '显微镜和微生物学设备', fr: 'Microscopes et microbiologie' },
      { ar: 'كواشف تشخيصية معتمدة', en: 'Certified diagnostic reagents', zh: '认证诊断试剂', fr: 'Réactifs diagnostiques certifiés' },
      { ar: 'زجاجيات ومستلزمات استهلاكية', en: 'Glassware & consumables', zh: '玻璃器皿和耗材', fr: 'Verrerie et consommables' },
    ],
    benefits: [
      { ar: 'دقة عالية للفحوصات', en: 'High test accuracy', zh: '高检测准确性', fr: 'Haute précision analytique' },
      { ar: 'كواشف من مصادر معتمدة', en: 'Reagents from certified sources', zh: '来自认证来源的试剂', fr: 'Réactifs de sources certifiées' },
      { ar: 'صيانة ومعايرة دورية', en: 'Regular maintenance & calibration', zh: '定期维护和校准', fr: 'Maintenance et étalonnage régulier' },
      { ar: 'تدريب فني وتقني للطواقم', en: 'Technical training for lab staff', zh: '实验室员工技术培训', fr: 'Formation technique du personnel' },
    ],
    related: ['med-diagnostic', 'med-hospital', 'med-pharma'],
  },
  {
    slug: 'med-pharma',
    icon: Pill,
    image: imgMedPharma,
    gradient: 'from-emerald-500 to-green-700',
    title: { ar: 'الأدوية والمستحضرات', en: 'Pharmaceuticals', zh: '药品', fr: 'Produits pharmaceutiques' },
    tagline: { ar: 'أدوية بشرية ومستلزمات صيدلانية', en: 'Human medicines and pharmacy supplies', zh: '人用药和药房用品', fr: 'Médicaments humains et fournitures de pharmacie' },
    description: { ar: 'استيراد وتوزيع الأدوية والمستحضرات الطبية.', en: 'Import and distribution of medicines and pharmaceuticals.', zh: '进口和分销药品和药物。', fr: 'Importation et distribution de médicaments.' },
    longDescription: {
      ar: 'نستورد ونوزع الأدوية البشرية والمستحضرات الصيدلانية من مصنعين دوليين معتمدين وفق أعلى معايير الجودة GMP، مع سلسلة تبريد كاملة للمستحضرات الحساسة، والالتزام الكامل بأنظمة تسجيل الأدوية والتراخيص السارية في تشاد.',
      en: 'We import and distribute human medicines and pharmaceuticals from certified international manufacturers meeting the highest GMP standards — with full cold chain for temperature-sensitive products and complete compliance with Chad\'s pharmaceutical registration and licensing regulations.',
      zh: '我们从符合最高GMP标准的认证国际制造商进口和分销人用药和药品,冷藏敏感产品全程冷链,完全符合乍得的药品注册和许可要求。',
      fr: "Importation et distribution de médicaments humains auprès de fabricants internationaux certifiés GMP, avec chaîne du froid complète pour les produits sensibles, en pleine conformité avec la réglementation pharmaceutique tchadienne.",
    },
    items: [
      { ar: 'الأدوية العامة والوصفية', en: 'General & prescription medicines', zh: '一般和处方药', fr: 'Médicaments généraux et sur ordonnance' },
      { ar: 'المضادات الحيوية والمسكنات', en: 'Antibiotics & analgesics', zh: '抗生素和镇痛药', fr: 'Antibiotiques et analgésiques' },
      { ar: 'أدوية الأمراض المزمنة', en: 'Chronic disease medications', zh: '慢性病药物', fr: 'Médicaments maladies chroniques' },
      { ar: 'اللقاحات ومنتجات المناعة', en: 'Vaccines & immunology products', zh: '疫苗和免疫产品', fr: 'Vaccins et produits immunologiques' },
      { ar: 'مستحضرات صيدلانية متنوعة', en: 'Various pharmaceutical products', zh: '各种药物产品', fr: 'Divers produits pharmaceutiques' },
    ],
    benefits: [
      { ar: 'مصادر معتمدة عالمياً', en: 'Globally certified sources', zh: '全球认证来源', fr: 'Sources certifiées à l\'international' },
      { ar: 'التزام بمعايير GMP', en: 'GMP standards compliance', zh: '符合GMP标准', fr: 'Conformité GMP' },
      { ar: 'سلسلة تبريد كاملة', en: 'Complete cold chain', zh: '完整的冷链', fr: 'Chaîne du froid complète' },
      { ar: 'توثيق كامل وامتثال تنظيمي', en: 'Full documentation & regulatory compliance', zh: '完整的文档和监管合规', fr: 'Documentation et conformité réglementaire' },
    ],
    related: ['med-hospital', 'med-consumables', 'med-lab'],
  },
  {
    slug: 'med-consumables',
    icon: Syringe,
    image: imgMedConsumables,
    gradient: 'from-pink-500 to-rose-700',
    title: { ar: 'المستهلكات الطبية ومعدات الوقاية', en: 'Medical Consumables & PPE', zh: '医疗耗材和PPE', fr: 'Consommables médicaux et EPI' },
    tagline: { ar: 'حقن ومستلزمات وقاية شخصية', en: 'Syringes, PPE and disposable medical supplies', zh: '注射器、PPE和一次性医疗用品', fr: 'Seringues, EPI et consommables jetables' },
    description: { ar: 'مستهلكات طبية ومعدات وقاية شخصية للمستشفيات والعيادات.', en: 'Medical consumables and PPE for hospitals and clinics.', zh: '医院和诊所的医疗耗材和PPE。', fr: 'Consommables médicaux et EPI pour hôpitaux et cliniques.' },
    longDescription: {
      ar: 'نوفر المستهلكات الطبية اليومية بجميع أنواعها تشمل الحقن والقساطر والضمادات والقطن الطبي والقفازات والكمامات ومعدات الوقاية الشخصية للطواقم الطبية، من مصنعين معتمدين مع ضمان جودة كل شحنة.',
      en: 'Full range of daily medical consumables — syringes, catheters, dressings, medical cotton, gloves, masks and PPE for medical staff — from certified manufacturers with quality assurance on every shipment.',
      zh: '全系列的日常医疗耗材:注射器、导管、敷料、医用棉、手套、口罩和医务人员PPE,来自认证制造商。',
      fr: "Gamme complète de consommables quotidiens: seringues, cathéters, pansements, coton médical, gants, masques et EPI, auprès de fabricants certifiés avec assurance qualité.",
    },
    items: [
      { ar: 'الحقن والقساطر والأنابيب', en: 'Syringes, catheters & tubing', zh: '注射器、导管和管路', fr: 'Seringues, cathéters et tubulures' },
      { ar: 'الضمادات والقطن الطبي', en: 'Dressings & medical cotton', zh: '敷料和医用棉', fr: 'Pansements et coton médical' },
      { ar: 'القفازات والكمامات', en: 'Gloves & face masks', zh: '手套和口罩', fr: 'Gants et masques' },
      { ar: 'معدات الوقاية الشخصية PPE', en: 'Personal protective equipment (PPE)', zh: '个人防护设备(PPE)', fr: 'Équipements de protection individuelle (EPI)' },
      { ar: 'مطهرات ومحاليل تعقيم', en: 'Disinfectants & sterilisation solutions', zh: '消毒剂和消毒溶液', fr: 'Désinfectants et solutions de stérilisation' },
    ],
    benefits: [
      { ar: 'مصانع معتمدة CE و FDA', en: 'CE and FDA certified factories', zh: 'CE和FDA认证工厂', fr: 'Usines certifiées CE et FDA' },
      { ar: 'توفر مستمر وسريع', en: 'Reliable & rapid availability', zh: '可靠和快速的可用性', fr: 'Disponibilité rapide et fiable' },
      { ar: 'أسعار جملة للمستشفيات', en: 'Wholesale hospital pricing', zh: '医院批发价', fr: 'Prix de gros hôpitaux' },
      { ar: 'مراقبة جودة على كل شحنة', en: 'Quality control on every shipment', zh: '每批货物的质量控制', fr: 'Contrôle qualité sur chaque envoi' },
    ],
    related: ['med-hospital', 'med-pharma', 'gt-safety-security'],
  },
  {
    slug: 'med-clinic',
    icon: Building2,
    image: imgMedClinic,
    gradient: 'from-indigo-500 to-blue-700',
    title: { ar: 'تجهيز العيادات وطب الأسنان', en: 'Clinic & Dental Fit-out', zh: '诊所和牙科装修', fr: 'Aménagement clinique et dentaire' },
    tagline: { ar: 'حلول شاملة لتجهيز العيادات وعيادات الأسنان', en: 'Turnkey clinic and dental office fit-out', zh: '诊所和牙科诊所交钥匙装修', fr: 'Aménagement clé en main clinique et dentaire' },
    description: { ar: 'تجهيزات العيادات الخاصة وعيادات طب الأسنان.', en: 'Fit-out for private clinics and dental practices.', zh: '私人诊所和牙科诊所的装修。', fr: 'Aménagement de cliniques privées et cabinets dentaires.' },
    longDescription: {
      ar: 'ننفذ مشاريع تجهيز العيادات الخاصة وعيادات طب الأسنان بشكل متكامل — من التصميم الداخلي وتوريد كراسي الأسنان والوحدات الطبية والأجهزة التشخيصية، إلى الأثاث والإضاءة والأنظمة الكهربائية والصحية بما يتوافق مع اشتراطات وزارة الصحة.',
      en: 'Full turnkey fit-out for private clinics and dental offices — interior design, dental chairs and medical units, diagnostic devices, furniture, lighting, electrical and sanitary systems — all compliant with Ministry of Health requirements.',
      zh: '为私人诊所和牙科诊所提供完整的交钥匙装修:室内设计、牙科椅和医疗单元、诊断设备、家具、照明、电气和卫生系统,符合卫生部要求。',
      fr: "Aménagement clé en main de cliniques et cabinets dentaires: design intérieur, fauteuils dentaires et unités médicales, dispositifs diagnostiques, mobilier, éclairage, électricité et sanitaire, conformes aux exigences du ministère de la Santé.",
    },
    items: [
      { ar: 'كراسي أسنان ووحدات طبية', en: 'Dental chairs & medical units', zh: '牙科椅和医疗单元', fr: 'Fauteuils dentaires et unités médicales' },
      { ar: 'أجهزة أشعة أسنان صغيرة', en: 'Compact dental X-ray units', zh: '紧凑型牙科X光设备', fr: 'Radios dentaires compactes' },
      { ar: 'أثاث العيادات وغرف الفحص', en: 'Clinic & exam-room furniture', zh: '诊所和检查室家具', fr: 'Mobilier clinique et salles d\'examen' },
      { ar: 'الإضاءة الطبية المتخصصة', en: 'Specialised medical lighting', zh: '专业医疗照明', fr: 'Éclairage médical spécialisé' },
      { ar: 'أنظمة كهربائية وصحية طبية', en: 'Medical electrical & sanitary systems', zh: '医疗电气和卫生系统', fr: 'Systèmes électriques et sanitaires médicaux' },
    ],
    benefits: [
      { ar: 'حل متكامل تحت مقاول واحد', en: 'Single-contractor turnkey solution', zh: '单一承包商交钥匙解决方案', fr: 'Solution clé en main sous un seul contractant' },
      { ar: 'مطابقة اشتراطات وزارة الصحة', en: 'Ministry of Health compliance', zh: '符合卫生部要求', fr: 'Conformité au ministère de la Santé' },
      { ar: 'تسليم في وقت محدد', en: 'On-schedule delivery', zh: '按计划交付', fr: 'Livraison dans les délais' },
      { ar: 'ضمان لجميع التجهيزات', en: 'Warranty on all equipment', zh: '所有设备的保修', fr: 'Garantie sur tous les équipements' },
    ],
    related: ['med-hospital', 'gt-furniture', 'construction'],
  },
];


export const getServiceBySlug = (slug?: string): ServiceDef | undefined =>
  SERVICES.find((s) => s.slug === slug);
