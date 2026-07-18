import React from 'react';
import { motion } from 'framer-motion';
import {
  Building2, Layers, Wrench, Home, ClipboardCheck,
  MapPin, Globe2, Truck, Handshake, Gauge, HardHat, Sparkles,
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { pickText, type LocalizedString } from '@/data/services';

type L = LocalizedString;

const t = {
  badge: { ar: 'نجامينا وعموم البلاد', en: "N'Djamena & nationwide", zh: '恩贾梅纳及全国', fr: "N'Djamena & tout le pays" } as L,
  heading: { ar: 'خدمات البناء في تشاد', en: 'Construction Services in Chad', zh: '乍得建筑服务', fr: 'Services de construction au Tchad' } as L,
  intro: {
    ar: 'هل تبحث عن خدمات بناء موثوقة في تشاد، أو مقاولين بناء في نجامينا، أو شريك موثوق لمشاريع البنية التحتية والهندسة المدنية في جميع أنحاء تشاد وأفريقيا؟',
    en: "Looking for reliable construction services in Chad, building contractors in N'Djamena, or a trusted partner for infrastructure and civil engineering projects across Chad and Africa?",
    zh: '您是否在乍得寻找可靠的建筑服务、恩贾梅纳的建筑承包商，或在乍得和非洲各地基础设施与土木工程项目的可信赖合作伙伴？',
    fr: "Vous cherchez des services de construction fiables au Tchad, des entrepreneurs à N'Djamena ou un partenaire de confiance pour des projets d'infrastructure et de génie civil au Tchad et en Afrique ?",
  } as L,
  bigText: {
    ar: 'تقدم شركة جلوبال بيزنس آند سبلايز (GBS) حلول بناء احترافية مصممة خصيصًا للمشاريع الحكومية والمنظمات غير الحكومية وعمليات النفط والغاز والمطورين العقاريين والمستثمرين الدوليين. انطلاقًا من مقرنا في نجامينا، نجمع بين الخبرة المحلية والمعايير الدولية لتنفيذ المشاريع بكفاءة عالية حتى في البيئات النائية والمعقدة.',
    en: "Global Business & Supplies (GBS) delivers professional construction solutions tailored for government projects, NGOs, oil & gas operations, real estate developers and international investors. From our base in N'Djamena, we combine local expertise with international standards to execute projects efficiently — even in remote and complex environments.",
    zh: 'Global Business & Supplies (GBS) 为政府项目、非政府组织、油气作业、地产开发商和国际投资者提供量身定制的专业建筑解决方案。我们从恩贾梅纳出发，结合本地专业知识与国际标准，即使在偏远复杂环境中也能高效执行项目。',
    fr: "Global Business & Supplies (GBS) propose des solutions de construction professionnelles adaptées aux projets gouvernementaux, ONG, opérations pétrole/gaz, promoteurs immobiliers et investisseurs internationaux. Depuis N'Djamena, nous combinons expertise locale et normes internationales pour exécuter les projets efficacement, même en milieux isolés et complexes.",
  } as L,
  servicesHeading: { ar: 'خدماتنا الإنشائية في تشاد', en: 'Our Construction Services in Chad', zh: '我们在乍得的建筑服务', fr: 'Nos services de construction au Tchad' } as L,
  whyHeading: { ar: 'لماذا تختار GBS للبناء في تشاد؟', en: 'Why choose GBS for construction in Chad?', zh: '为什么选择 GBS 在乍得建设？', fr: 'Pourquoi choisir GBS pour la construction au Tchad ?' } as L,
  partnerHeading: { ar: 'شريكك المحلي في مجال الإنشاءات في تشاد', en: 'Your local construction partner in Chad', zh: '您在乍得本地的建筑合作伙伴', fr: 'Votre partenaire local de construction au Tchad' } as L,
  partnerText1: {
    ar: 'تعمل GBS كشريك محلي في مجال الإنشاءات وميسر للمشاريع في تشاد، حيث تساعد الشركات الدولية على دخول السوق وتنفيذ المشاريع وإدارة العمليات بثقة.',
    en: 'GBS acts as a local construction partner and project facilitator in Chad, helping international companies enter the market, deliver projects and manage operations with confidence.',
    zh: 'GBS 作为乍得的本地建筑合作伙伴和项目促进者，帮助国际公司进入市场、交付项目并自信地管理运营。',
    fr: "GBS agit comme partenaire local de construction et facilitateur de projets au Tchad, aidant les entreprises internationales à entrer sur le marché, livrer leurs projets et gérer leurs opérations en toute confiance.",
  } as L,
  partnerText2: {
    ar: 'نتعاون مع المقاولين والمهندسين وشركات الإنشاءات العالمية لتقديم مشاريع تتوافق مع المعايير الدولية مع ضمان تنفيذ محلي قوي.',
    en: 'We partner with global contractors, engineers and construction firms to deliver projects that meet international standards while ensuring strong local execution.',
    zh: '我们与全球承包商、工程师和建筑公司合作，交付符合国际标准的项目，同时确保强有力的本地执行。',
    fr: 'Nous collaborons avec entrepreneurs, ingénieurs et entreprises de construction mondiales pour livrer des projets conformes aux normes internationales avec une exécution locale solide.',
  } as L,
};

const services: { icon: any; title: L; text: L }[] = [
  {
    icon: Home,
    title: { ar: 'بناء المباني (سكني وتجاري)', en: 'Building construction (residential & commercial)', zh: '房屋建筑（住宅与商业）', fr: 'Construction de bâtiments (résidentiel et commercial)' },
    text: { ar: 'بناء فلل ومكاتب ومجمعات سكنية ومستودعات ومنشآت صناعية عالية الجودة في تشاد.', en: 'High-quality construction of villas, offices, residential complexes, warehouses and industrial facilities in Chad.', zh: '在乍得建造高质量的别墅、办公室、住宅小区、仓库和工业设施。', fr: 'Construction de qualité de villas, bureaux, complexes résidentiels, entrepôts et installations industrielles au Tchad.' },
  },
  {
    icon: MapPin,
    title: { ar: 'مشاريع الهندسة المدنية والبنية التحتية', en: 'Civil engineering & infrastructure projects', zh: '土木工程与基础设施项目', fr: "Projets de génie civil et d'infrastructure" },
    text: { ar: 'إنشاء الطرق وأعمال الحفر وأنظمة الصرف وتطوير البنية التحتية العامة.', en: 'Road construction, earthworks, drainage systems and public infrastructure development.', zh: '道路建设、土方工程、排水系统和公共基础设施开发。', fr: 'Construction de routes, terrassements, systèmes de drainage et développement des infrastructures publiques.' },
  },
  {
    icon: Layers,
    title: { ar: 'حلول البناء المتكاملة (EPC)', en: 'Integrated construction (EPC) solutions', zh: '一体化建设（EPC）解决方案', fr: 'Solutions de construction intégrées (EPC)' },
    text: { ar: 'تسليم المشاريع بالكامل من التصميم والتوريد والإنشاء إلى التسليم النهائي.', en: 'Full project delivery from design, procurement and construction to final handover.', zh: '从设计、采购、施工到最终交付的全程项目交付。', fr: "Livraison complète des projets, de la conception, l'approvisionnement et la construction à la remise finale." },
  },
  {
    icon: Wrench,
    title: { ar: 'أعمال التجديد والتأهيل', en: 'Renovation & rehabilitation works', zh: '改造与修复工程', fr: 'Travaux de rénovation et réhabilitation' },
    text: { ar: 'تحديث وتطوير المباني والمنشآت القائمة.', en: 'Modernising and upgrading existing buildings and facilities.', zh: '对现有建筑和设施进行现代化升级。', fr: 'Modernisation et amélioration des bâtiments et installations existants.' },
  },
  {
    icon: Building2,
    title: { ar: 'المباني الجاهزة والوحدات الجاهزة', en: 'Prefabricated and modular buildings', zh: '预制建筑和模块化单元', fr: 'Bâtiments préfabriqués et modulaires' },
    text: { ar: 'حلول سريعة وفعّالة من حيث التكلفة للمخيمات والمكاتب والمدارس والمرافق الصحية.', en: 'Fast and cost-effective solutions for camps, offices, schools and health facilities.', zh: '为营地、办公室、学校和卫生设施提供快速且经济的解决方案。', fr: 'Solutions rapides et économiques pour camps, bureaux, écoles et installations de santé.' },
  },
  {
    icon: ClipboardCheck,
    title: { ar: 'إدارة المشاريع والاستشارات الفنية', en: 'Project management & technical consulting', zh: '项目管理与技术咨询', fr: 'Gestion de projet et conseil technique' },
    text: { ar: 'التخطيط والإشراف ومراقبة التكاليف وضمان الجودة لمشاريع البناء.', en: 'Planning, supervision, cost control and quality assurance for construction projects.', zh: '建筑项目的规划、监理、成本控制和质量保证。', fr: 'Planification, supervision, contrôle des coûts et assurance qualité pour les projets de construction.' },
  },
];

const reasons: { icon: any; text: L }[] = [
  { icon: MapPin, text: { ar: 'حضور قوي على أرض الواقع في نجامينا وعموم تشاد', en: "Strong on-the-ground presence in N'Djamena and across Chad", zh: '在恩贾梅纳和乍得全境强大的实地存在', fr: "Forte présence sur le terrain à N'Djamena et dans tout le Tchad" } },
  { icon: HardHat, text: { ar: 'خبرة في العمل في بيئات صعبة ونائية', en: 'Experience working in tough and remote environments', zh: '在艰苦和偏远环境中的工作经验', fr: 'Expérience dans des environnements difficiles et isolés' } },
  { icon: Globe2, text: { ar: 'إمكانية الوصول إلى موردين دوليين ومواد بناء', en: 'Access to international suppliers and building materials', zh: '可获得国际供应商和建筑材料', fr: 'Accès aux fournisseurs internationaux et matériaux de construction' } },
  { icon: Truck, text: { ar: 'دعم كامل في الخدمات اللوجستية والاستيراد والتخليص الجمركي (دوالا ← نجامينا)', en: "Full support in logistics, import and customs clearance (Douala → N'Djamena)", zh: '在物流、进口和清关方面的全面支持（杜阿拉 → 恩贾梅纳）', fr: "Soutien complet en logistique, import et dédouanement (Douala → N'Djamena)" } },
  { icon: Handshake, text: { ar: 'شريك موثوق للمشاريع الحكومية وغير الحكومية والخاصة', en: 'Trusted partner for government, NGO and private projects', zh: '政府、非政府组织和私人项目的可信赖合作伙伴', fr: 'Partenaire de confiance pour projets gouvernementaux, ONG et privés' } },
  { icon: Gauge, text: { ar: 'التركيز على الجودة والامتثال وكفاءة التكلفة', en: 'Focus on quality, compliance and cost efficiency', zh: '注重质量、合规性和成本效益', fr: 'Accent sur la qualité, la conformité et l\'efficacité économique' } },
];

const ConstructionRichContent: React.FC = () => {
  const { language, dir } = useLanguage();
  return (
    <div dir={dir} lang={language} className="bg-gradient-to-b from-muted/20 via-background to-muted/30">
      {/* Intro */}
      <section className="py-14 md:py-20">
        <div className="section-container max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <span className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 rounded-full text-accent font-bold text-xs py-1.5 px-3 mb-4">
              <Sparkles className="h-3.5 w-3.5" />
              {pickText(language, t.badge)}
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-primary leading-tight mb-4">{pickText(language, t.heading)}</h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{pickText(language, t.intro)}</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="relative bg-card border border-border rounded-2xl p-6 md:p-10 shadow-lg overflow-hidden">
            <div className="absolute top-0 start-0 w-1 h-full bg-gradient-to-b from-accent to-primary" />
            <p className="text-foreground leading-loose text-base md:text-lg">{pickText(language, t.bigText)}</p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 md:py-16 bg-card/40">
        <div className="section-container">
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="h-px w-12 bg-accent/40" />
            <h3 className="text-xl md:text-2xl font-bold text-primary text-center">🔧 {pickText(language, t.servicesHeading)}</h3>
            <div className="h-px w-12 bg-accent/40" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                  className="group relative bg-card border border-border rounded-2xl p-6 hover:shadow-xl hover:border-accent/50 transition-all">
                  <div className="absolute top-4 end-4 text-5xl font-black text-primary/5 select-none">{String(i + 1).padStart(2, '0')}</div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-[hsl(218,55%,28%)] flex items-center justify-center shadow-md mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex items-start gap-2 mb-2">
                    <span className="text-accent font-bold mt-0.5">✔️</span>
                    <h4 className="font-bold text-primary text-base md:text-lg leading-snug">{pickText(language, s.title)}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{pickText(language, s.text)}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="py-14 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[hsl(218,55%,18%)]" />
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 20% 30%, white 1px, transparent 1px), radial-gradient(circle at 70% 60%, white 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />
        <div className="section-container max-w-5xl relative z-10">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">🌍 {pickText(language, t.whyHeading)}</h3>
            <div className="h-1 w-20 bg-accent mx-auto rounded-full" />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.map((r, i) => {
              const Icon = r.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-white/15 transition-colors">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-accent/90 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-white/95 leading-relaxed pt-1.5">{pickText(language, r.text)}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partner */}
      <section className="py-14 md:py-20">
        <div className="section-container max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="bg-gradient-to-br from-card to-muted/40 border border-border rounded-3xl p-8 md:p-12 shadow-lg text-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-orange-600 flex items-center justify-center shadow-md mx-auto mb-5">
              <Handshake className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">🏢 {pickText(language, t.partnerHeading)}</h3>
            <p className="text-foreground leading-loose text-base md:text-lg mb-4">{pickText(language, t.partnerText1)}</p>
            <p className="text-muted-foreground leading-loose">{pickText(language, t.partnerText2)}</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ConstructionRichContent;
