import React from 'react';
import LandingTemplate from '@/components/landing/LandingTemplate';
import { useLandingLang, type LandingLang } from '@/components/landing/lang';
import { Building2, HardHat, Ruler, Sun, Hammer, ClipboardCheck } from 'lucide-react';
import heroImg from '@/assets/landing/lp-construction-hero.jpg';
import detailsImg from '@/assets/services/gen-construction-no-people.jpg';

const icons = [Building2, Ruler, HardHat, Hammer, Sun, ClipboardCheck];

interface Content {
  metaTitle: string;
  metaDescription: string;
  badge: string;
  h1: string;
  subtitle: string;
  ctaLabel: string;
  stats: { value: string; label: string }[];
  benefitsTitle: string;
  benefitsSubtitle: string;
  benefits: { title: string; text: string }[];
  detailsTitle: string;
  detailsText: string;
  detailsList: string[];
  stepsTitle: string;
  steps: { title: string; text: string }[];
  finalTitle: string;
  finalText: string;
  seoTitle: string;
  seoText: string;
}

const content: Record<LandingLang, Content> = {
  ar: {
    metaTitle: 'شركة بناء ومقاولات في تشاد | مشاريع وبنية تحتية — Global Business & Supplies',
    metaDescription: 'خدمات البناء والمقاولات في تشاد: مبانٍ سكنية وتجارية وإدارية، بنية تحتية وطرق، تشطيبات وترميم، كهرباء وسباكة وطاقة شمسية في أنجمينا وأبشي.',
    badge: 'مقاولات عامة · بنية تحتية',
    h1: 'نبني مشروعك في تشاد بجودة عالية والتزام بالجدول الزمني',
    subtitle: 'تنفيذ المباني السكنية والتجارية والإدارية، أعمال البنية التحتية والطرق، التشطيبات والترميم، مع فريق هندسي ومعدات ثقيلة مملوكة لنا.',
    ctaLabel: 'اطلب عرض سعر لمشروعك',
    stats: [
      { value: '+15', label: 'سنة خبرة' },
      { value: '+120', label: 'مشروع منفّذ' },
      { value: '100%', label: 'التزام بالسلامة' },
      { value: 'A-Z', label: 'تنفيذ متكامل' },
    ],
    benefitsTitle: 'لماذا GBS شريكك في التنفيذ؟',
    benefitsSubtitle: 'خبرة محلية، موارد ذاتية من معدات ومواد، وإدارة مشاريع منضبطة تحمي ميزانيتك وجدولك الزمني.',
    benefits: [
      { title: 'مبانٍ متعددة الاستخدام', text: 'تنفيذ مبانٍ سكنية وتجارية وإدارية من الأساسات حتى التسليم النهائي.' },
      { title: 'بنية تحتية وطرق', text: 'أعمال الطرق، التسوية، الصرف، والخرسانة وفق المواصفات الفنية المعتمدة.' },
      { title: 'معايير سلامة صارمة', text: 'خطط سلامة في الموقع وفريق مؤهل يلتزم بأعلى معايير الجودة والأمان.' },
      { title: 'تشطيبات وترميم', text: 'تشطيبات داخلية وخارجية، صيانة وترميم للمباني القائمة بجودة عالية.' },
      { title: 'كهرباء وسباكة وطاقة شمسية', text: 'أعمال MEP كاملة مع تركيب أنظمة الطاقة الشمسية للمنشآت.' },
      { title: 'إدارة مشاريع', text: 'جداول زمنية واضحة، تقارير تقدم دورية، ورقابة جودة في كل مرحلة.' },
    ],
    detailsTitle: 'حلول مقاولات متكاملة تحت سقف واحد',
    detailsText: 'نخدم المؤسسات الحكومية والشركات الخاصة والمنظمات الدولية والمشاريع الاستثمارية، مع قدرة على توريد مواد البناء وتأجير المعدات الثقيلة اللازمة لتنفيذ المشروع بكفاءة ودون تأخير.',
    detailsList: [
      'بناء المباني السكنية والتجارية والإدارية',
      'أعمال البنية التحتية والطرق والخرسانة',
      'التشطيبات والترميم والصيانة',
      'أعمال الكهرباء والسباكة والتكييف',
      'تركيب أنظمة الطاقة الشمسية',
      'توريد مواد البناء وتأجير المعدات الثقيلة',
    ],
    stepsTitle: 'مراحل العمل معنا',
    steps: [
      { title: 'الدراسة', text: 'زيارة الموقع وفهم متطلبات المشروع والمواصفات.' },
      { title: 'العرض الفني والمالي', text: 'كميات وأسعار وجدول زمني واضح دون مفاجآت.' },
      { title: 'التنفيذ', text: 'فريق هندسي ومعدات في الموقع مع رقابة جودة مستمرة.' },
      { title: 'التسليم والضمان', text: 'تسليم نهائي موثق مع فترة ضمان وصيانة.' },
    ],
    finalTitle: 'ابدأ مشروعك مع شريك ينفّذ ما يعد به',
    finalText: 'تواصل معنا لمناقشة مشروعك والحصول على عرض فني ومالي مفصّل.',
    seoTitle: 'البناء والمقاولات في تشاد – Global Business & Supplies (GBS)',
    seoText: 'تقدم Global Business & Supplies (GBS) خدمات البناء والمقاولات في تشاد للمؤسسات الحكومية، والشركات الخاصة، والمنظمات الدولية، والمشاريع الاستثمارية، مع تنفيذ مشاريع الإنشاء والبنية التحتية وفق أعلى معايير الجودة والسلامة. نقدم حلولاً متكاملة تشمل بناء المباني السكنية والتجارية والإدارية، وأعمال البنية التحتية، والطرق، وأعمال الخرسانة، والتشطيبات، والترميم، والصيانة، وأعمال الكهرباء والسباكة، وتركيب أنظمة الطاقة الشمسية، بالإضافة إلى توريد مواد البناء وتأجير المعدات الثقيلة اللازمة لتنفيذ المشروع بكفاءة. إذا كنت تبحث عن شركة مقاولات في تشاد، أو شركة بناء في أنجمينا، أو تنفيذ مشاريع البنية التحتية، فإن Global Business & Supplies (GBS) توفر حلولاً احترافية تلبي احتياجات القطاعين العام والخاص، مع الالتزام بالجودة والجدول الزمني والأسعار التنافسية.',
  },
  en: {
    metaTitle: 'Construction & Contracting Company in Chad | Projects & Infrastructure — Global Business & Supplies',
    metaDescription: 'Construction and contracting services in Chad: residential, commercial and administrative buildings, infrastructure and roads, finishing and renovation, electrical, plumbing and solar power in N\'Djamena and Abéché.',
    badge: 'General Contracting · Infrastructure',
    h1: 'We build your project in Chad with high quality and on-time delivery',
    subtitle: 'Execution of residential, commercial and administrative buildings, infrastructure and road works, finishing and renovation, backed by an engineering team and our own heavy equipment.',
    ctaLabel: 'Request a quote for your project',
    stats: [
      { value: '+15', label: 'Years of experience' },
      { value: '+120', label: 'Projects completed' },
      { value: '100%', label: 'Safety commitment' },
      { value: 'A-Z', label: 'End-to-end execution' },
    ],
    benefitsTitle: 'Why GBS is your execution partner?',
    benefitsSubtitle: 'Local expertise, in-house equipment and materials, and disciplined project management that protects your budget and schedule.',
    benefits: [
      { title: 'Multi-purpose buildings', text: 'Delivering residential, commercial and administrative buildings from foundations to final handover.' },
      { title: 'Infrastructure and roads', text: 'Road works, grading, drainage and concrete works in line with approved technical specifications.' },
      { title: 'Strict safety standards', text: 'On-site safety plans and a qualified team committed to the highest quality and safety standards.' },
      { title: 'Finishing and renovation', text: 'Interior and exterior finishing, maintenance and renovation of existing buildings to a high standard.' },
      { title: 'Electrical, plumbing and solar', text: 'Complete MEP works with installation of solar power systems for facilities.' },
      { title: 'Project management', text: 'Clear timelines, regular progress reports, and quality control at every stage.' },
    ],
    detailsTitle: 'Integrated contracting solutions under one roof',
    detailsText: 'We serve government institutions, private companies, international organizations and investment projects, with the capacity to supply construction materials and rent heavy equipment needed to execute the project efficiently and on time.',
    detailsList: [
      'Construction of residential, commercial and administrative buildings',
      'Infrastructure, road and concrete works',
      'Finishing, renovation and maintenance',
      'Electrical, plumbing and air conditioning works',
      'Installation of solar power systems',
      'Supply of construction materials and heavy equipment rental',
    ],
    stepsTitle: 'Our working process',
    steps: [
      { title: 'Study', text: 'Site visit and understanding project requirements and specifications.' },
      { title: 'Technical & financial proposal', text: 'Quantities, pricing and a clear timeline with no surprises.' },
      { title: 'Execution', text: 'Engineering team and equipment on site with continuous quality control.' },
      { title: 'Handover & warranty', text: 'Documented final handover with a warranty and maintenance period.' },
    ],
    finalTitle: 'Start your project with a partner who delivers on its promises',
    finalText: 'Contact us to discuss your project and receive a detailed technical and financial proposal.',
    seoTitle: 'Construction and Contracting in Chad – Global Business & Supplies (GBS)',
    seoText: 'Global Business & Supplies (GBS) provides construction and contracting services in Chad for government institutions, private companies, international organizations and investment projects, executing construction and infrastructure projects to the highest quality and safety standards. We offer integrated solutions including construction of residential, commercial and administrative buildings, infrastructure works, roads, concrete works, finishing, renovation, maintenance, electrical and plumbing works, installation of solar power systems, as well as supply of construction materials and heavy equipment rental needed to execute the project efficiently. If you are looking for a contracting company in Chad, a construction company in N\'Djamena, or execution of infrastructure projects, Global Business & Supplies (GBS) provides professional solutions that meet the needs of both public and private sectors, with a commitment to quality, schedule and competitive pricing.',
  },
  fr: {
    metaTitle: 'Entreprise de construction et de BTP au Tchad | Projets et infrastructures — Global Business & Supplies',
    metaDescription: 'Services de construction et de BTP au Tchad : bâtiments résidentiels, commerciaux et administratifs, infrastructures et routes, finitions et rénovation, électricité, plomberie et énergie solaire à N\'Djamena et Abéché.',
    badge: 'Entreprise générale · Infrastructures',
    h1: 'Nous réalisons votre projet au Tchad avec une qualité élevée et le respect des délais',
    subtitle: 'Réalisation de bâtiments résidentiels, commerciaux et administratifs, travaux d\'infrastructure et de voirie, finitions et rénovation, avec une équipe d\'ingénieurs et des équipements lourds qui nous appartiennent.',
    ctaLabel: 'Demander un devis pour votre projet',
    stats: [
      { value: '+15', label: 'Ans d\'expérience' },
      { value: '+120', label: 'Projets réalisés' },
      { value: '100%', label: 'Engagement pour la sécurité' },
      { value: 'A-Z', label: 'Exécution intégrale' },
    ],
    benefitsTitle: 'Pourquoi GBS est votre partenaire d\'exécution ?',
    benefitsSubtitle: 'Expertise locale, ressources propres en équipements et matériaux, et gestion de projet rigoureuse qui protège votre budget et vos délais.',
    benefits: [
      { title: 'Bâtiments polyvalents', text: 'Réalisation de bâtiments résidentiels, commerciaux et administratifs, des fondations jusqu\'à la livraison finale.' },
      { title: 'Infrastructures et routes', text: 'Travaux de voirie, nivellement, drainage et béton conformes aux spécifications techniques approuvées.' },
      { title: 'Normes de sécurité strictes', text: 'Plans de sécurité sur site et équipe qualifiée respectant les plus hauts standards de qualité et de sécurité.' },
      { title: 'Finitions et rénovation', text: 'Finitions intérieures et extérieures, maintenance et rénovation de bâtiments existants avec une haute qualité.' },
      { title: 'Électricité, plomberie et solaire', text: 'Travaux MEP complets avec installation de systèmes d\'énergie solaire pour les installations.' },
      { title: 'Gestion de projet', text: 'Plannings clairs, rapports d\'avancement réguliers et contrôle qualité à chaque étape.' },
    ],
    detailsTitle: 'Des solutions de BTP intégrées sous un même toit',
    detailsText: 'Nous servons les institutions gouvernementales, les entreprises privées, les organisations internationales et les projets d\'investissement, avec la capacité de fournir des matériaux de construction et de louer les équipements lourds nécessaires à la réalisation efficace et sans retard du projet.',
    detailsList: [
      'Construction de bâtiments résidentiels, commerciaux et administratifs',
      'Travaux d\'infrastructure, de voirie et de béton',
      'Finitions, rénovation et maintenance',
      'Travaux d\'électricité, de plomberie et de climatisation',
      'Installation de systèmes d\'énergie solaire',
      'Fourniture de matériaux de construction et location d\'équipements lourds',
    ],
    stepsTitle: 'Nos étapes de collaboration',
    steps: [
      { title: 'Étude', text: 'Visite du site et compréhension des exigences et spécifications du projet.' },
      { title: 'Offre technique et financière', text: 'Métrés, prix et planning clair, sans surprises.' },
      { title: 'Exécution', text: 'Équipe d\'ingénieurs et équipements sur site avec un contrôle qualité continu.' },
      { title: 'Livraison et garantie', text: 'Livraison finale documentée avec une période de garantie et de maintenance.' },
    ],
    finalTitle: 'Démarrez votre projet avec un partenaire qui tient ses promesses',
    finalText: 'Contactez-nous pour discuter de votre projet et recevoir une offre technique et financière détaillée.',
    seoTitle: 'Construction et BTP au Tchad – Global Business & Supplies (GBS)',
    seoText: 'Global Business & Supplies (GBS) propose des services de construction et de BTP au Tchad pour les institutions gouvernementales, les entreprises privées, les organisations internationales et les projets d\'investissement, en réalisant des projets de construction et d\'infrastructure selon les plus hauts standards de qualité et de sécurité. Nous proposons des solutions intégrées comprenant la construction de bâtiments résidentiels, commerciaux et administratifs, des travaux d\'infrastructure, de voirie, de béton, des finitions, de la rénovation, de la maintenance, des travaux d\'électricité et de plomberie, l\'installation de systèmes d\'énergie solaire, ainsi que la fourniture de matériaux de construction et la location d\'équipements lourds nécessaires pour réaliser le projet efficacement. Si vous recherchez une entreprise de BTP au Tchad, une entreprise de construction à N\'Djamena, ou la réalisation de projets d\'infrastructure, Global Business & Supplies (GBS) offre des solutions professionnelles répondant aux besoins des secteurs public et privé, avec un engagement sur la qualité, les délais et des prix compétitifs.',
  },
  zh: {
    metaTitle: '乍得建筑与承包公司 | 项目与基础设施 — 环球商业与供应有限公司（GBS）',
    metaDescription: '乍得建筑与承包服务：住宅、商业和行政建筑，基础设施与道路，装修与翻新，电力、管道与太阳能，服务遍及恩贾梅纳和阿贝歇。',
    badge: '综合承包 · 基础设施',
    h1: '我们以高品质和守时的方式在乍得为您建造项目',
    subtitle: '承建住宅、商业和行政建筑，基础设施与道路工程，装修与翻新，配备专业工程团队及自有重型设备。',
    ctaLabel: '为您的项目索取报价',
    stats: [
      { value: '+15', label: '年经验' },
      { value: '+120', label: '已完成项目' },
      { value: '100%', label: '安全承诺' },
      { value: 'A-Z', label: '全流程执行' },
    ],
    benefitsTitle: '为何选择 GBS 作为您的执行伙伴？',
    benefitsSubtitle: '本地专业经验、自有设备与材料资源，以及严谨的项目管理，保障您的预算与工期。',
    benefits: [
      { title: '多功能建筑', text: '从基础施工到最终交付，承建住宅、商业和行政建筑。' },
      { title: '基础设施与道路', text: '按照批准的技术规范开展道路、平整、排水及混凝土工程。' },
      { title: '严格的安全标准', text: '现场安全计划及具备资质的团队，秉持最高质量与安全标准。' },
      { title: '装修与翻新', text: '高品质的室内外装修、维护及现有建筑翻新服务。' },
      { title: '电力、管道与太阳能', text: '完整的机电（MEP）工程，并为设施安装太阳能系统。' },
      { title: '项目管理', text: '清晰的进度计划、定期进度报告，及各阶段质量把控。' },
    ],
    detailsTitle: '一站式综合承包解决方案',
    detailsText: '我们服务于政府机构、私营企业、国际组织及投资项目，具备供应建筑材料及租赁重型设备的能力，可高效、及时地完成项目。',
    detailsList: [
      '住宅、商业和行政建筑施工',
      '基础设施、道路及混凝土工程',
      '装修、翻新及维护',
      '电力、管道及空调工程',
      '太阳能系统安装',
      '建筑材料供应及重型设备租赁',
    ],
    stepsTitle: '我们的合作流程',
    steps: [
      { title: '调研', text: '实地考察，了解项目需求与规格。' },
      { title: '技术与财务报价', text: '清晰的工程量、价格与时间表，绝无意外。' },
      { title: '施工执行', text: '工程团队与设备进驻现场，持续进行质量把控。' },
      { title: '交付与保修', text: '文件化的最终交付，附带保修与维护期。' },
    ],
    finalTitle: '与言出必行的合作伙伴一起启动您的项目',
    finalText: '联系我们，讨论您的项目并获取详细的技术与财务报价。',
    seoTitle: '乍得建筑与承包服务 – 环球商业与供应有限公司（GBS）',
    seoText: '环球商业与供应有限公司（GBS） 为政府机构、私营企业、国际组织及投资项目提供乍得的建筑与承包服务，按照最高质量与安全标准执行建筑及基础设施项目。我们提供一站式综合解决方案，包括住宅、商业和行政建筑施工，基础设施、道路及混凝土工程，装修、翻新及维护，电力与管道工程，太阳能系统安装，以及高效完成项目所需的建筑材料供应和重型设备租赁。如果您正在寻找乍得的承包公司、恩贾梅纳的建筑公司，或基础设施项目的执行方，环球商业与供应有限公司（GBS） 提供专业解决方案，满足公共和私营部门的需求，坚持质量、工期与具竞争力的价格。',
  },
};

const ConstructionContractingLanding: React.FC<{ contactHref?: string }> = ({ contactHref }) => {
  const { lang, setLang } = useLandingLang();
  const c = content[lang];
  return (
    <LandingTemplate
      {...c}
      benefits={c.benefits.map((b, i) => ({ ...b, icon: icons[i] }))}
      heroImage={heroImg}
      detailsImage={detailsImg}
      accentClass="from-accent to-accent-glow"
      contactHref={contactHref}
      lang={lang}
      onLangChange={setLang}
      pageKey="construction"
    />
  );
};

export default ConstructionContractingLanding;
