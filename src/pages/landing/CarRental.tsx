import React from 'react';
import LandingTemplate from '@/components/landing/LandingTemplate';
import { Car, ShieldCheck, Timer, UserCheck, Wrench, CalendarRange } from 'lucide-react';
import heroImg from '@/assets/landing/lp-car-hero.jpg';
import fleetImg from '@/assets/services/luxury-4wd.jpg';
import { useLandingLang, type LandingLang } from '@/components/landing/lang';

interface Props {
  contactHref?: string;
}

const icons = [ShieldCheck, Timer, Car, UserCheck, Wrench, CalendarRange];

type Content = {
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
};

const content: Record<LandingLang, Content> = {
  ar: {
    metaTitle: 'إيجار السيارات في تشاد | أسطول حديث مع سائق — Global Business & Supplies',
    metaDescription: 'تأجير سيارات سياحية ومركبات دفع رباعي وحافلات صغيرة في نجامينا وجميع أنحاء تشاد، مع أو بدون سائق، تأمين شامل وعقود يومية وشهرية وطويلة الأمد.',
    badge: 'نجامينا وجميع أنحاء تشاد',
    h1: 'تحرّك بثقة… أسطول سيارات حديث وجاهز خلال ساعات في تشاد',
    subtitle: 'سيارات سياحية ومركبات دفع رباعي وحافلات صغيرة، مع أو بدون سائق، صيانة دورية وتأمين شامل — لتصل إلى وجهتك بأمان مهما كانت الطريق.',
    ctaLabel: 'احجز سيارتك الآن',
    stats: [
      { value: '+80', label: 'مركبة في الأسطول' },
      { value: '3 ساعات', label: 'سرعة التجهيز' },
      { value: '100%', label: 'تأمين شامل' },
      { value: '24/7', label: 'دعم على الطريق' },
    ],
    benefitsTitle: 'لماذا يعتمد علينا الشركات والمنظمات؟',
    benefitsSubtitle: 'الأمان أولاً، السرعة ثانياً، والتنوع الذي يغطي كل مهمة من التنقل اليومي إلى البعثات الميدانية.',
    benefits: [
      { title: 'أمان وتأمين شامل', text: 'كل مركبة مؤمّنة بالكامل وتخضع لفحص فني قبل التسليم — راحة بال كاملة لك ولفريقك.' },
      { title: 'استجابة سريعة', text: 'تجهيز وتسليم المركبة خلال ساعات، مع خدمة توصيل إلى موقعك أو المطار.' },
      { title: 'تنوّع الأسطول', text: 'من السيارات السياحية الاقتصادية إلى مركبات الدفع الرباعي القوية والحافلات الصغيرة.' },
      { title: 'سائقون معتمدون', text: 'سائقون محترفون بمعرفة محلية دقيقة بطرق نجامينا والمناطق النائية.' },
      { title: 'صيانة دورية موثقة', text: 'برنامج صيانة منتظم ومركبة بديلة فورية عند الحاجة، دون توقف لأعمالك.' },
      { title: 'عقود مرنة', text: 'تأجير يومي أو أسبوعي أو شهري أو عقود طويلة الأمد بأسعار تنافسية وفواتير رسمية.' },
    ],
    detailsTitle: 'أسطول يغطي كل احتياج تشغيلي',
    detailsText: 'نوفر أسطولاً متنوعاً من السيارات ومركبات الدفع الرباعي والحافلات الصغيرة لخدمة الشركات والمنظمات الدولية والمشاريع الميدانية في تشاد، مع خيار السائق المحترف والتأمين الشامل.',
    detailsList: [
      'سيارات سياحية للاستخدام اليومي والتنقلات الرسمية',
      'مركبات دفع رباعي للطرق الوعرة والبعثات الميدانية',
      'حافلات صغيرة لنقل الفرق والوفود',
      'خدمة مع أو بدون سائق حسب حاجتك',
      'مركبات كبار الشخصيات للوفود الرسمية',
      'عقود مشاريع طويلة الأمد بإدارة أسطول كاملة',
    ],
    stepsTitle: 'احجز في 4 خطوات بسيطة',
    steps: [
      { title: 'حدّد احتياجك', text: 'نوع المركبة، المدة، ووجهة الاستخدام — نرد عليك فوراً بالتوفر والسعر.' },
      { title: 'اختر العرض', text: 'نرسل لك خيارات وأسعار واضحة شاملة التأمين، دون رسوم خفية.' },
      { title: 'تأكيد وتوقيع', text: 'عقد رسمي سريع وفاتورة معتمدة تناسب أنظمة شركتك أو منظمتك.' },
      { title: 'التسليم', text: 'نسلّمك المركبة نظيفة ومجهزة في موقعك أو بالمطار في الوقت المحدد.' },
    ],
    finalTitle: 'سيارتك جاهزة… فقط أخبرنا بالموعد',
    finalText: 'تواصل معنا الآن للحصول على عرض سعر خلال دقائق، مع خصومات خاصة للعقود الشهرية والطويلة.',
    seoTitle: 'تأجير السيارات مع سائق في تشاد – Global Business & Supplies (GBS)',
    seoText: 'تقدم Global Business & Supplies (GBS) خدمات تأجير السيارات مع سائق في تشاد للأفراد، والشركات، والمنظمات الدولية، والهيئات الحكومية، مع تغطية واسعة تشمل أنجمينا، أبشي، والمناطق الحدودية مع السودان، إضافة إلى جنوب تشاد ومختلف أنحاء البلاد. نوفر أسطولًا متنوعًا من سيارات الدفع الرباعي (4×4)، وسيارات السيدان، وسيارات البيك أب، والحافلات الصغيرة، وجميعها مع سائقين محترفين ذوي خبرة، لتلبية احتياجات الرحلات الرسمية، والمشاريع، والبعثات الإنسانية، وزيارات العمل، والتنقلات داخل المدن وبين مختلف مناطق تشاد. إذا كنت تبحث عن تأجير سيارات مع سائق في تشاد، أو استئجار سيارة مع سائق في أنجمينا، أو تأجير سيارة مع سائق في أبشي، أو خدمة نقل احترافية في جنوب تشاد أو بالقرب من الحدود التشادية السودانية، فإن Global Business & Supplies (GBS) توفر لك خدمة موثوقة، وسائقين مؤهلين، وأسعارًا تنافسية، لضمان رحلة آمنة ومريحة في جميع أنحاء تشاد.',
  },
  en: {
    metaTitle: 'Car Rental in Chad | Modern Fleet with Driver — Global Business & Supplies',
    metaDescription: 'Rent sedans, 4x4 vehicles and minibuses in N\'Djamena and across Chad, with or without a driver, full insurance and daily, monthly or long-term contracts.',
    badge: "N'Djamena and all of Chad",
    h1: 'Move with confidence… a modern fleet ready within hours in Chad',
    subtitle: 'Sedans, 4x4 vehicles and minibuses, with or without a driver, regular maintenance and full insurance — so you reach your destination safely, whatever the road.',
    ctaLabel: 'Book your car now',
    stats: [
      { value: '+80', label: 'vehicles in the fleet' },
      { value: '3 hours', label: 'preparation speed' },
      { value: '100%', label: 'full insurance' },
      { value: '24/7', label: 'roadside support' },
    ],
    benefitsTitle: 'Why companies and organizations trust us',
    benefitsSubtitle: 'Safety first, speed second, and enough variety to cover every mission from daily travel to field missions.',
    benefits: [
      { title: 'Safety & full insurance', text: 'Every vehicle is fully insured and technically inspected before delivery — complete peace of mind for you and your team.' },
      { title: 'Fast response', text: 'Vehicle preparation and delivery within hours, with drop-off service to your location or the airport.' },
      { title: 'Fleet diversity', text: 'From economical sedans to powerful 4x4 vehicles and minibuses.' },
      { title: 'Certified drivers', text: 'Professional drivers with precise local knowledge of N\'Djamena roads and remote areas.' },
      { title: 'Documented regular maintenance', text: 'A regular maintenance program and an immediate replacement vehicle when needed, with no downtime for your business.' },
      { title: 'Flexible contracts', text: 'Daily, weekly, monthly or long-term rentals at competitive rates with official invoices.' },
    ],
    detailsTitle: 'A fleet that covers every operational need',
    detailsText: 'We provide a diverse fleet of sedans, 4x4 vehicles and minibuses to serve companies, international organizations and field projects in Chad, with the option of a professional driver and full insurance.',
    detailsList: [
      'Sedans for daily use and official travel',
      '4x4 vehicles for rough roads and field missions',
      'Minibuses for transporting teams and delegations',
      'Service with or without a driver, as you need',
      'VIP vehicles for official delegations',
      'Long-term project contracts with full fleet management',
    ],
    stepsTitle: 'Book in 4 simple steps',
    steps: [
      { title: 'Define your need', text: 'Vehicle type, duration and destination — we respond immediately with availability and price.' },
      { title: 'Choose your offer', text: 'We send you clear options and prices including insurance, with no hidden fees.' },
      { title: 'Confirm & sign', text: 'A fast official contract and certified invoice suited to your company\'s or organization\'s systems.' },
      { title: 'Delivery', text: 'We deliver your vehicle clean and equipped, at your location or the airport, on time.' },
    ],
    finalTitle: 'Your car is ready… just tell us when',
    finalText: 'Contact us now for a quote within minutes, with special discounts for monthly and long-term contracts.',
    seoTitle: 'Car Rental with Driver in Chad – Global Business & Supplies (GBS)',
    seoText: "Global Business & Supplies (GBS) offers car rental with driver services in Chad for individuals, companies, international organizations and government bodies, with wide coverage including N'Djamena, Abéché, the border areas with Sudan, southern Chad and various regions across the country. We provide a diverse fleet of 4x4 vehicles, sedans, pickup trucks and minibuses, all with experienced professional drivers, to meet the needs of official trips, projects, humanitarian missions, business visits and travel within and between cities across Chad. Whether you are looking for car rental with driver in Chad, hiring a car with driver in N'Djamena, renting a car with driver in Abéché, or professional transport service in southern Chad or near the Chad-Sudan border, Global Business & Supplies (GBS) provides you with reliable service, qualified drivers and competitive rates, to ensure a safe and comfortable trip throughout Chad.",
  },
  fr: {
    metaTitle: 'Location de voitures au Tchad | Flotte moderne avec chauffeur — Global Business & Supplies',
    metaDescription: "Location de berlines, véhicules 4x4 et minibus à N'Djamena et dans tout le Tchad, avec ou sans chauffeur, assurance tous risques et contrats journaliers, mensuels ou de longue durée.",
    badge: "N'Djamena et tout le Tchad",
    h1: 'Déplacez-vous en toute confiance… une flotte moderne prête en quelques heures au Tchad',
    subtitle: 'Berlines, véhicules 4x4 et minibus, avec ou sans chauffeur, entretien régulier et assurance tous risques — pour atteindre votre destination en toute sécurité, quelle que soit la route.',
    ctaLabel: 'Réservez votre voiture maintenant',
    stats: [
      { value: '+80', label: 'véhicules dans la flotte' },
      { value: '3 heures', label: 'rapidité de préparation' },
      { value: '100%', label: 'assurance tous risques' },
      { value: '24/7', label: "assistance sur la route" },
    ],
    benefitsTitle: 'Pourquoi les entreprises et organisations nous font confiance',
    benefitsSubtitle: "La sécurité d'abord, la rapidité ensuite, et une diversité qui couvre toutes les missions, des déplacements quotidiens aux missions de terrain.",
    benefits: [
      { title: 'Sécurité et assurance tous risques', text: 'Chaque véhicule est entièrement assuré et fait l\'objet d\'une inspection technique avant livraison — une tranquillité d\'esprit totale pour vous et votre équipe.' },
      { title: 'Réponse rapide', text: 'Préparation et livraison du véhicule en quelques heures, avec service de livraison à votre adresse ou à l\'aéroport.' },
      { title: 'Diversité de la flotte', text: 'Des berlines économiques aux puissants véhicules 4x4 en passant par les minibus.' },
      { title: 'Chauffeurs agréés', text: "Chauffeurs professionnels ayant une connaissance précise des routes de N'Djamena et des zones reculées." },
      { title: 'Entretien régulier documenté', text: 'Un programme d\'entretien régulier et un véhicule de remplacement immédiat en cas de besoin, sans interruption pour votre activité.' },
      { title: 'Contrats flexibles', text: 'Location journalière, hebdomadaire, mensuelle ou contrats de longue durée à des tarifs compétitifs avec factures officielles.' },
    ],
    detailsTitle: 'Une flotte qui couvre tous les besoins opérationnels',
    detailsText: "Nous proposons une flotte diversifiée de berlines, véhicules 4x4 et minibus au service des entreprises, des organisations internationales et des projets de terrain au Tchad, avec possibilité de chauffeur professionnel et d'assurance tous risques.",
    detailsList: [
      'Berlines pour un usage quotidien et les déplacements officiels',
      'Véhicules 4x4 pour les routes difficiles et les missions de terrain',
      'Minibus pour le transport des équipes et délégations',
      'Service avec ou sans chauffeur selon vos besoins',
      'Véhicules VIP pour les délégations officielles',
      'Contrats de projets de longue durée avec gestion complète de flotte',
    ],
    stepsTitle: 'Réservez en 4 étapes simples',
    steps: [
      { title: 'Définissez votre besoin', text: 'Type de véhicule, durée et destination — nous vous répondons immédiatement avec la disponibilité et le prix.' },
      { title: 'Choisissez votre offre', text: "Nous vous envoyons des options et des prix clairs, assurance comprise, sans frais cachés." },
      { title: 'Confirmation et signature', text: "Un contrat officiel rapide et une facture certifiée adaptée aux systèmes de votre entreprise ou organisation." },
      { title: 'Livraison', text: "Nous vous livrons le véhicule propre et équipé, à votre adresse ou à l'aéroport, à l'heure convenue." },
    ],
    finalTitle: 'Votre voiture est prête… dites-nous simplement quand',
    finalText: 'Contactez-nous dès maintenant pour un devis en quelques minutes, avec des remises spéciales pour les contrats mensuels et de longue durée.',
    seoTitle: 'Location de voiture avec chauffeur au Tchad – Global Business & Supplies (GBS)',
    seoText: "Global Business & Supplies (GBS) propose des services de location de voiture avec chauffeur au Tchad pour les particuliers, les entreprises, les organisations internationales et les institutions gouvernementales, avec une large couverture incluant N'Djamena, Abéché, les zones frontalières avec le Soudan, le sud du Tchad et diverses régions du pays. Nous proposons une flotte diversifiée de véhicules 4x4, de berlines, de pick-up et de minibus, tous avec des chauffeurs professionnels expérimentés, pour répondre aux besoins des voyages officiels, des projets, des missions humanitaires, des visites d'affaires et des déplacements au sein des villes et entre les différentes régions du Tchad. Que vous recherchiez une location de voiture avec chauffeur au Tchad, la location d'une voiture avec chauffeur à N'Djamena, la location d'une voiture avec chauffeur à Abéché, ou un service de transport professionnel dans le sud du Tchad ou près de la frontière tchado-soudanaise, Global Business & Supplies (GBS) vous garantit un service fiable, des chauffeurs qualifiés et des tarifs compétitifs, pour un voyage sûr et confortable partout au Tchad.",
  },
  zh: {
    metaTitle: '乍得租车服务 | 配备司机的现代化车队 — 环球商业与供应有限公司（GBS）',
    metaDescription: '在恩贾梅纳及乍得全境提供轿车、四驱越野车和小型巴士租赁服务，可选配或不配司机，全面保险，支持日租、月租及长期合约。',
    badge: '恩贾梅纳及乍得全境',
    h1: '安心出行……乍得境内数小时即可就绪的现代化车队',
    subtitle: '轿车、四驱越野车和小型巴士，可选配或不配司机，定期保养，全面保险——无论路况如何，都能安全抵达目的地。',
    ctaLabel: '立即预订车辆',
    stats: [
      { value: '+80', label: '车队车辆数量' },
      { value: '3小时', label: '车辆备车速度' },
      { value: '100%', label: '全面保险覆盖' },
      { value: '24/7', label: '道路救援支持' },
    ],
    benefitsTitle: '为什么众多企业与机构信赖我们',
    benefitsSubtitle: '安全第一，速度第二，车型多样，涵盖从日常出行到实地任务的各类需求。',
    benefits: [
      { title: '安全与全面保险', text: '每辆车均投保齐全，交付前均经过技术检测——让您和团队完全安心。' },
      { title: '快速响应', text: '数小时内完成车辆准备与交付，并提供送车至您所在地或机场的服务。' },
      { title: '车型多样', text: '从经济型轿车到强劲的四驱越野车及小型巴士，一应俱全。' },
      { title: '认证司机', text: '专业司机熟悉恩贾梅纳及偏远地区的路况。' },
      { title: '定期保养记录', text: '实行定期保养计划，如有需要可立即提供备用车辆，确保您的业务不受影响。' },
      { title: '灵活合约', text: '支持日租、周租、月租或长期合约，价格具竞争力并提供正规发票。' },
    ],
    detailsTitle: '满足各类运营需求的车队',
    detailsText: '我们提供多样化的轿车、四驱越野车及小型巴士车队，服务于乍得的企业、国际机构及实地项目，并可选配专业司机及全面保险。',
    detailsList: [
      '轿车，适用于日常出行及公务往来',
      '四驱越野车，适用于崎岖路段及实地任务',
      '小型巴士，用于团队及代表团接送',
      '可根据需要选配或不配司机',
      '贵宾用车，服务于官方代表团',
      '长期项目合约，提供全面车队管理',
    ],
    stepsTitle: '仅需4个简单步骤即可预订',
    steps: [
      { title: '明确您的需求', text: '车辆类型、租期及用途——我们将立即回复可用车辆及报价。' },
      { title: '选择方案', text: '我们将提供清晰的方案及含保险的报价，无隐藏费用。' },
      { title: '确认并签署', text: '快速签订正式合同，并开具符合贵公司或机构制度的正规发票。' },
      { title: '交车', text: '我们将在约定时间将整洁、装备齐全的车辆送至您所在地或机场。' },
    ],
    finalTitle: '车辆已就绪……只需告知您的用车时间',
    finalText: '立即联系我们，几分钟内获取报价，月租及长期合约享有特别优惠。',
    seoTitle: '乍得配司机租车服务 – 环球商业与供应有限公司（GBS）',
    seoText: '环球商业与供应有限公司（GBS）为个人、企业、国际机构及政府部门提供乍得境内配司机租车服务，覆盖范围广泛，包括恩贾梅纳、阿贝歇、与苏丹接壤的边境地区，以及乍得南部和全国各地。我们提供多样化的车队，包括四驱越野车（4×4）、轿车、皮卡及小型巴士，均配备经验丰富的专业司机，满足公务出行、项目实施、人道主义任务、商务访问以及乍得境内城市间往来的各类需求。无论您是在寻找乍得配司机租车服务、恩贾梅纳配司机租车、阿贝歇配司机租车服务，还是乍得南部或乍得-苏丹边境附近的专业运输服务，环球商业与供应有限公司（GBS）都能为您提供可靠的服务、合格的司机及具竞争力的价格，确保您在乍得全境的出行安全舒适。',
  },
};

const CarRentalLanding: React.FC<Props> = ({ contactHref }) => {
  const { lang, setLang } = useLandingLang();
  const c = content[lang];
  return (
    <LandingTemplate
      {...c}
      benefits={c.benefits.map((b, i) => ({ ...b, icon: icons[i] }))}
      heroImage={heroImg}
      detailsImage={fleetImg}
      accentClass="from-accent to-accent-glow"
      contactHref={contactHref}
      lang={lang}
      onLangChange={setLang}
      pageKey="car"
    />
  );
};

export default CarRentalLanding;
