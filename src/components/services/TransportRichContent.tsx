import React from 'react';
import { motion } from 'framer-motion';
import {
  Truck, FileCheck, MapPin, PackageCheck, Radar, Network,
  ShieldCheck, Anchor, Building2, Phone, MessageCircle, Sparkles,
  Workflow, Gauge,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { pickText, type LocalizedString } from '@/data/services';

const WHATSAPP_URL = 'https://wa.me/23565555504';
type L = LocalizedString;

const t = {
  badge: { ar: 'ممر دوالا - نجامينا', en: "Douala – N'Djamena Corridor", zh: '杜阿拉-恩贾梅纳走廊', fr: "Corridor Douala – N'Djamena" } as L,
  heading: { ar: 'خدمات النقل واللوجستيات في تشاد', en: 'Transport & Logistics Services in Chad', zh: '乍得运输与物流服务', fr: 'Services de transport et logistique au Tchad' } as L,
  intro1: {
    ar: 'خدمات نقل ولوجستيات موثوقة في تشاد، متخصصة في الشحن من دوالا (الكاميرون) إلى نجامينا وعبر تشاد. نوفر حلولاً لوجستية سريعة وآمنة ومُدارة بالكامل للشركات والمنظمات غير الحكومية والمشاريع الحكومية العاملة في وسط أفريقيا.',
    en: "Reliable transport and logistics services in Chad, specialised in shipping from Douala (Cameroon) to N'Djamena and across Chad. We provide fast, safe and fully managed logistics solutions for companies, NGOs and government projects operating in Central Africa.",
    zh: '乍得可靠的运输与物流服务，专注于从杜阿拉（喀麦隆）到恩贾梅纳及乍得各地的运输。我们为在中非运营的公司、非政府组织和政府项目提供快速、安全且全面管理的物流解决方案。',
    fr: "Services de transport et de logistique fiables au Tchad, spécialisés dans l'expédition de Douala (Cameroun) à N'Djamena et à travers le Tchad. Solutions logistiques rapides, sûres et entièrement gérées pour entreprises, ONG et projets gouvernementaux en Afrique centrale.",
  } as L,
  intro2: {
    ar: 'بفضل خبرتنا التشغيلية الواسعة على ممر دوالا - نجامينا، نضمن انسيابية حركة البضائع من الميناء إلى وجهتها النهائية بما في ذلك التخليص الجمركي والنقل البري.',
    en: "Thanks to our extensive operational experience on the Douala–N'Djamena corridor, we ensure smooth cargo flow from port to final destination, including customs clearance and road transport.",
    zh: '凭借我们在杜阿拉-恩贾梅纳走廊上丰富的运营经验，我们确保货物从港口到最终目的地的顺畅流转，包括清关和陆运。',
    fr: "Grâce à notre expérience opérationnelle sur le corridor Douala-N'Djamena, nous assurons un flux de marchandises fluide du port à la destination finale, dédouanement et transport routier inclus.",
  } as L,
  servicesHeading: { ar: 'خدمات النقل واللوجستيات في تشاد', en: 'Transport & Logistics Services', zh: '运输与物流服务', fr: 'Services de transport et logistique' } as L,
  networkHeading: { ar: 'مدعومون بشبكة إقليمية قوية', en: 'Backed by a strong regional network', zh: '由强大的区域网络支持', fr: 'Soutenus par un solide réseau régional' } as L,
  networkText: {
    ar: 'تكمن قوتنا في شبكتنا الموثوقة من شركات النقل وشركاء الخدمات اللوجستية والمشغلين المحليين في جميع أنحاء الكاميرون وتشاد. تتيح لنا هذه الشبكة ما يلي:',
    en: 'Our strength lies in a trusted network of carriers, logistics partners and local operators across Cameroon and Chad. This network enables us to:',
    zh: '我们的优势在于覆盖喀麦隆和乍得的承运商、物流合作伙伴和本地运营商的可信网络。该网络使我们能够：',
    fr: "Notre force réside dans un réseau fiable de transporteurs, partenaires logistiques et opérateurs locaux à travers le Cameroun et le Tchad. Ce réseau nous permet de :",
  } as L,
  networkFooter: {
    ar: 'لا نعتمد على مزود واحد، بل ننسق منظومة لوجستية متعددة الشركاء لضمان الأداء والتوافر وكفاءة التكلفة.',
    en: 'We do not depend on a single provider — we orchestrate a multi-partner logistics ecosystem to guarantee performance, availability and cost efficiency.',
    zh: '我们不依赖单一供应商，而是协调多合作伙伴的物流生态系统，以确保性能、可用性和成本效益。',
    fr: "Nous ne dépendons pas d'un seul prestataire : nous orchestrons un écosystème logistique multi-partenaires pour garantir performance, disponibilité et efficacité économique.",
  } as L,
  whyEyebrow: { ar: 'الأداء والموثوقية', en: 'Performance & Reliability', zh: '性能与可靠性', fr: 'Performance et fiabilité' } as L,
  whyHeading: { ar: 'لماذا تختار خدماتنا اللوجستية في تشاد؟', en: 'Why choose our logistics services in Chad?', zh: '为什么选择我们在乍得的物流服务？', fr: 'Pourquoi choisir nos services logistiques au Tchad ?' } as L,
  whyText: {
    ar: 'نمنحك مزيج فريد من الخبرة الميدانية والشبكة الإقليمية والكفاءة التشغيلية على أحد أهم ممرات الإمداد في وسط أفريقيا.',
    en: 'A unique blend of field experience, regional network and operational efficiency on one of the most important supply corridors in Central Africa.',
    zh: '我们在中非最重要的供应走廊之一上提供独特的实地经验、区域网络和运营效率组合。',
    fr: "Un mélange unique d'expérience terrain, de réseau régional et d'efficacité opérationnelle sur l'un des corridors d'approvisionnement les plus importants d'Afrique centrale.",
  } as L,
  routeHeading: { ar: 'مسار لوجستي استراتيجي: دوالا ← نجامينا', en: "Strategic logistics route: Douala → N'Djamena", zh: '战略物流路线：杜阿拉 → 恩贾梅纳', fr: "Route logistique stratégique : Douala → N'Djamena" } as L,
  routeSub: { ar: 'ندير أحد أهم مسارات الإمداد في وسط أفريقيا', en: 'We operate one of the most important supply routes in Central Africa', zh: '我们运营中非最重要的供应路线之一', fr: "Nous opérons l'une des routes d'approvisionnement les plus importantes d'Afrique centrale" } as L,
  ctaHeading: { ar: 'تواصل معنا للنقل من دوالا إلى تشاد', en: 'Contact us for transport from Douala to Chad', zh: '联系我们了解从杜阿拉到乍得的运输', fr: 'Contactez-nous pour le transport de Douala au Tchad' } as L,
  ctaText: {
    ar: 'هل تبحث عن شريك لوجستي موثوق في تشاد أو تحتاج إلى نقل بضائع من دوالا إلى نجامينا؟ تواصل معنا اليوم عبر واتساب أو اطلب عرض سعر لشحنتك.',
    en: "Looking for a trusted logistics partner in Chad or need to move cargo from Douala to N'Djamena? Contact us today on WhatsApp or request a quote for your shipment.",
    zh: '在乍得寻找可信赖的物流合作伙伴，或需要将货物从杜阿拉运至恩贾梅纳？立即通过WhatsApp联系我们或为您的货物索取报价。',
    fr: "Vous cherchez un partenaire logistique fiable au Tchad ou devez transporter des marchandises de Douala à N'Djamena ? Contactez-nous via WhatsApp ou demandez un devis.",
  } as L,
  whatsapp: { ar: 'تواصل عبر واتساب', en: 'Contact via WhatsApp', zh: '通过WhatsApp联系', fr: 'Contact via WhatsApp' } as L,
  callQuote: { ar: 'اطلب عرض سعر', en: 'Request a quote', zh: '索取报价', fr: 'Demander un devis' } as L,
};

const services: { icon: any; title: L; text: L }[] = [
  {
    icon: Truck,
    title: { ar: 'نقل البضائع من دوالا إلى نجامينا', en: "Cargo transport from Douala to N'Djamena", zh: '从杜阿拉到恩贾梅纳的货物运输', fr: "Transport de marchandises de Douala à N'Djamena" },
    text: { ar: 'حلول نقل بري فعّالة للحاويات والبضائع السائبة من ميناء دوالا إلى نجامينا، مع تقليل وقت العبور وضمان سلامة الشحنات.', en: "Efficient road transport for containers and bulk cargo from Douala port to N'Djamena, reducing transit time and ensuring cargo safety.", zh: '高效的集装箱及散货公路运输，从杜阿拉港至恩贾梅纳，缩短运输时间并保证货物安全。', fr: "Transport routier efficace pour conteneurs et vrac depuis le port de Douala vers N'Djamena, temps de transit réduit et sécurité garantie." },
  },
  {
    icon: FileCheck,
    title: { ar: 'التخليص الجمركي (دوالا ونجامينا)', en: "Customs clearance (Douala & N'Djamena)", zh: '清关（杜阿拉与恩贾梅纳）', fr: "Dédouanement (Douala & N'Djamena)" },
    text: { ar: 'دعم كامل لإجراءات الاستيراد والوثائق والمعالجة الجمركية لتجنب التأخير وخفض التكاليف.', en: 'Full support for import procedures, documentation and customs processing to avoid delays and reduce costs.', zh: '为进口程序、文件和清关处理提供全面支持，避免延误并降低成本。', fr: "Soutien complet aux procédures d'import, documentation et traitement douanier pour éviter les retards et réduire les coûts." },
  },
  {
    icon: MapPin,
    title: { ar: 'النقل البري في جميع أنحاء تشاد', en: 'Road transport throughout Chad', zh: '乍得全境陆运', fr: 'Transport routier dans tout le Tchad' },
    text: { ar: 'توصيل موثوق من نجامينا إلى جميع مناطق تشاد بما في ذلك المناطق النائية والوعرة.', en: "Reliable delivery from N'Djamena to all regions of Chad, including remote and rugged areas.", zh: '从恩贾梅纳到乍得所有地区的可靠交付，包括偏远和崎岖地区。', fr: "Livraison fiable depuis N'Djamena vers toutes les régions du Tchad, y compris les zones isolées et accidentées." },
  },
  {
    icon: PackageCheck,
    title: { ar: 'التوزيع والتوصيل للميل الأخير', en: 'Distribution & last-mile delivery', zh: '分销与最后一英里配送', fr: 'Distribution et livraison du dernier kilomètre' },
    text: { ar: 'خدمات توزيع منظمة للمشاريع والمنظمات غير الحكومية والشركات التي تتطلب سلاسل إمداد مُهيكلة.', en: 'Structured distribution services for projects, NGOs and companies that require organised supply chains.', zh: '为需要有组织供应链的项目、非政府组织和企业提供结构化分销服务。', fr: "Services de distribution structurés pour projets, ONG et entreprises nécessitant des chaînes d'approvisionnement organisées." },
  },
  {
    icon: Radar,
    title: { ar: 'تتبع الشحنات لحظيًا', en: 'Real-time shipment tracking', zh: '实时货物跟踪', fr: 'Suivi des expéditions en temps réel' },
    text: { ar: 'ابقَ على اطلاع دائم من خلال تتبع دقيق وتحديثات مستمرة طوال عملية النقل.', en: 'Stay informed with precise tracking and continuous updates throughout the transport process.', zh: '通过整个运输过程的精确跟踪和持续更新保持知情。', fr: 'Restez informé grâce à un suivi précis et des mises à jour continues tout au long du transport.' },
  },
];

const networkPoints: L[] = [
  { ar: 'تأمين شاحنات موثوقة وسعة نقل كافية في جميع الأوقات', en: 'Secure reliable trucks and sufficient capacity at all times', zh: '随时确保可靠的卡车和充足的运力', fr: 'Sécuriser camions fiables et capacité suffisante en permanence' },
  { ar: 'تحسين المسارات وتقليل تأخيرات النقل', en: 'Optimise routes and minimise transport delays', zh: '优化路线并减少运输延误', fr: 'Optimiser les itinéraires et réduire les retards' },
  { ar: 'إدارة العمليات بكفاءة حتى في البيئات المعقدة', en: 'Manage operations efficiently even in complex environments', zh: '即使在复杂环境中也能高效管理运营', fr: 'Gérer les opérations efficacement même en environnements complexes' },
  { ar: 'توفير حلول لوجستية مرنة وقابلة للتطوير', en: 'Provide flexible and scalable logistics solutions', zh: '提供灵活和可扩展的物流解决方案', fr: 'Fournir des solutions logistiques flexibles et évolutives' },
  { ar: 'ضمان استمرارية وموثوقية الشحنات الكبيرة والعاجلة', en: 'Ensure continuity and reliability for large and urgent shipments', zh: '确保大型和紧急货物的连续性和可靠性', fr: 'Assurer la continuité et la fiabilité des expéditions importantes et urgentes' },
];

const whyChoose: L[] = [
  { ar: 'خبرة واسعة في عمليات النقل بين دوالا ونجامينا', en: "Extensive experience in Douala–N'Djamena transport operations", zh: '在杜阿拉-恩贾梅纳运输方面拥有丰富经验', fr: "Grande expérience des opérations de transport Douala–N'Djamena" },
  { ar: 'شبكة راسخة من شركات النقل وشركاء الخدمات اللوجستية الموثوق بهم', en: 'Established network of trusted carriers and logistics partners', zh: '与可信赖的承运商和物流合作伙伴建立的成熟网络', fr: 'Réseau établi de transporteurs et partenaires logistiques de confiance' },
  { ar: 'مناولة موثوقة للحاويات والشحنات الثقيلة والخدمات اللوجستية للمشاريع', en: 'Reliable handling of containers, heavy cargo and project logistics', zh: '可靠的集装箱、重型货物和项目物流处理', fr: 'Manutention fiable de conteneurs, charges lourdes et logistique de projet' },
  { ar: 'خبرة في العمل مع المنظمات غير الحكومية وقطاعات النفط والغاز والإنشاءات والمشاريع الحكومية', en: 'Experience working with NGOs, oil & gas, construction and government projects', zh: '与非政府组织、油气、建筑和政府项目合作的经验', fr: "Expérience avec ONG, pétrole/gaz, construction et projets gouvernementaux" },
  { ar: 'تخليص جمركي سريع وتقليل تأخيرات النقل', en: 'Fast customs clearance and reduced transport delays', zh: '快速清关并减少运输延误', fr: 'Dédouanement rapide et retards réduits' },
  { ar: 'حلول لوجستية آمنة وفعّالة من حيث التكلفة', en: 'Safe and cost-effective logistics solutions', zh: '安全且具有成本效益的物流解决方案', fr: 'Solutions logistiques sûres et économiques' },
  { ar: 'تواجد محلي في تشاد مع تنسيق ميداني قوي', en: 'Local presence in Chad with strong field coordination', zh: '在乍得本地存在，具有强大的现场协调能力', fr: 'Présence locale au Tchad avec une forte coordination terrain' },
];

const routeSteps: { icon: any; title: L; sub: L }[] = [
  { icon: Anchor, title: { ar: 'ميناء دوالا', en: 'Douala Port', zh: '杜阿拉港', fr: 'Port de Douala' }, sub: { ar: 'الكاميرون', en: 'Cameroon', zh: '喀麦隆', fr: 'Cameroun' } },
  { icon: FileCheck, title: { ar: 'التخليص الجمركي', en: 'Customs Clearance', zh: '清关', fr: 'Dédouanement' }, sub: { ar: 'إجراءات سريعة', en: 'Fast procedures', zh: '快速程序', fr: 'Procédures rapides' } },
  { icon: Truck, title: { ar: 'النقل البري', en: 'Road Transport', zh: '陆运', fr: 'Transport routier' }, sub: { ar: 'ممر آمن', en: 'Safe corridor', zh: '安全走廊', fr: 'Corridor sûr' } },
  { icon: Building2, title: { ar: 'نجامينا', en: "N'Djamena", zh: '恩贾梅纳', fr: "N'Djamena" }, sub: { ar: 'تشاد', en: 'Chad', zh: '乍得', fr: 'Tchad' } },
  { icon: MapPin, title: { ar: 'التوزيع', en: 'Distribution', zh: '分销', fr: 'Distribution' }, sub: { ar: 'على مستوى البلاد', en: 'Nationwide', zh: '全国范围', fr: 'À l\'échelle nationale' } },
];

const TransportRichContent: React.FC = () => {
  const { language, dir } = useLanguage();
  return (
    <div dir={dir} lang={language} className="bg-gradient-to-b from-background via-muted/20 to-background mt-10">
      {/* Intro */}
      <section className="py-14 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-background to-orange-50/40 dark:from-amber-950/20 dark:to-orange-950/10" />
        <div className="section-container max-w-5xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
            <span className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 rounded-full text-accent font-bold text-xs py-1.5 px-3 mb-4">
              <Sparkles className="h-3.5 w-3.5" />
              {pickText(language, t.badge)}
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-primary leading-tight mb-4">{pickText(language, t.heading)}</h2>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid md:grid-cols-2 gap-4">
            <div className="bg-card border-s-4 border-accent rounded-xl p-6 shadow-sm">
              <p className="text-foreground leading-loose">{pickText(language, t.intro1)}</p>
            </div>
            <div className="bg-card border-s-4 border-primary rounded-xl p-6 shadow-sm">
              <p className="text-foreground leading-loose">{pickText(language, t.intro2)}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services list */}
      <section className="py-12 md:py-16">
        <div className="section-container max-w-5xl">
          <div className="text-center mb-10">
            <h3 className="text-xl md:text-2xl font-bold text-primary">🚛 {pickText(language, t.servicesHeading)}</h3>
          </div>
          <div className="space-y-4">
            {services.map((s, i) => {
              const Icon = s.icon;
              const reverse = i % 2 === 1;
              return (
                <motion.div key={i} initial={{ opacity: 0, x: reverse ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-stretch bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow`}>
                  <div className={`md:w-48 bg-gradient-to-br ${reverse ? 'from-primary to-[hsl(218,55%,28%)]' : 'from-accent to-orange-600'} flex items-center justify-center p-6 md:p-8`}>
                    <Icon className="h-12 w-12 text-white" />
                  </div>
                  <div className="flex-1 p-6 md:p-7">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-accent font-bold">✔️</span>
                      <h4 className="font-bold text-primary text-lg leading-snug">{pickText(language, s.title)}</h4>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{pickText(language, s.text)}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Network */}
      <section className="py-14 md:py-20 bg-gradient-to-br from-primary to-[hsl(218,55%,18%)] relative overflow-hidden">
        <div className="absolute -top-20 -end-20 w-80 h-80 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -bottom-20 -start-20 w-80 h-80 rounded-full bg-accent/10 blur-3xl" />
        <div className="section-container max-w-5xl relative z-10">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent/20 backdrop-blur-sm mb-4">
              <Network className="h-7 w-7 text-accent" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">🌍 {pickText(language, t.networkHeading)}</h3>
            <p className="text-white/80 max-w-2xl mx-auto leading-relaxed">{pickText(language, t.networkText)}</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            {networkPoints.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl p-4">
                <div className="shrink-0 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white font-bold text-sm">{i + 1}</div>
                <p className="text-white/95">{pickText(language, p)}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center text-white/85 leading-loose max-w-3xl mx-auto">{pickText(language, t.networkFooter)}</div>
        </div>
      </section>

      {/* Why */}
      <section className="py-14 md:py-20">
        <div className="section-container max-w-5xl">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 items-start">
            <div className="lg:sticky lg:top-24">
              <span className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 rounded-full text-accent font-bold text-xs py-1.5 px-3 mb-4">
                <Gauge className="h-3.5 w-3.5" /> {pickText(language, t.whyEyebrow)}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-primary leading-tight mb-3">🌍 {pickText(language, t.whyHeading)}</h3>
              <p className="text-muted-foreground leading-relaxed">{pickText(language, t.whyText)}</p>
            </div>

            <ul className="space-y-3">
              {whyChoose.map((w, i) => (
                <motion.li key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}
                  className="flex items-start gap-3 bg-card border border-border rounded-xl p-4 hover:border-accent/50 transition-colors">
                  <ShieldCheck className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-foreground leading-relaxed">{pickText(language, w)}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Route */}
      <section className="py-14 md:py-20 bg-muted/30">
        <div className="section-container max-w-6xl">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent/15 mb-4">
              <Workflow className="h-7 w-7 text-accent" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-3">📦 {pickText(language, t.routeHeading)}</h3>
            <p className="text-muted-foreground">{pickText(language, t.routeSub)}</p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-10 start-[5%] end-[5%] h-0.5 bg-gradient-to-r from-accent via-primary to-accent" />
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-6 relative">
              {routeSteps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                    className="flex flex-col items-center text-center">
                    <div className="relative z-10 w-20 h-20 rounded-2xl bg-card border-2 border-accent shadow-md flex items-center justify-center mb-3">
                      <Icon className="h-9 w-9 text-primary" />
                      <span className="absolute -top-2 -end-2 w-7 h-7 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center shadow">{i + 1}</span>
                    </div>
                    <h4 className="font-bold text-primary text-sm md:text-base">{pickText(language, step.title)}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{pickText(language, step.sub)}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-20">
        <div className="section-container max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="relative bg-gradient-to-br from-accent to-orange-600 rounded-3xl p-8 md:p-12 shadow-xl overflow-hidden text-center">
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: 'radial-gradient(circle at 30% 30%, white 1.5px, transparent 1.5px)',
              backgroundSize: '30px 30px',
            }} />
            <div className="relative z-10">
              <Phone className="h-10 w-10 text-white mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">📞 {pickText(language, t.ctaHeading)}</h3>
              <p className="text-white/95 leading-relaxed mb-6 max-w-2xl mx-auto">{pickText(language, t.ctaText)}</p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5 me-2" /> {pickText(language, t.whatsapp)}
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary bg-transparent">
                  <a href="tel:+23565555504" dir="ltr">
                    <Phone className="h-5 w-5 me-2" /> {pickText(language, t.callQuote)}
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TransportRichContent;
