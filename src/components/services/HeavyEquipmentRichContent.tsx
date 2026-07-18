import React from 'react';
import { motion } from 'framer-motion';
import {
  Tractor, ArrowUpToLine, Drum, Truck, HardHat, Lightbulb,
  CalendarClock, UserCheck, MapPin, Globe2, Wrench, BadgeDollarSign,
  Zap, Phone, MessageCircle, Sparkles,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { pickText, type LocalizedString } from '@/data/services';

const WHATSAPP_URL = 'https://wa.me/23565555504';
type L = LocalizedString;

const t = {
  badge: { ar: 'نجامينا وعموم البلاد', en: "N'Djamena & nationwide", zh: '恩贾梅纳及全国', fr: "N'Djamena & tout le pays" } as L,
  heading: { ar: 'تأجير المعدات الثقيلة في تشاد', en: 'Heavy Equipment Rental in Chad', zh: '乍得重型设备租赁', fr: "Location d'équipements lourds au Tchad" } as L,
  intro1: {
    ar: 'هل تبحث عن تأجير معدات ثقيلة في تشاد، أو استئجار آلات بناء في نجامينا، أو تأجير معدات لمشاريعك في جميع أنحاء تشاد؟',
    en: "Looking for heavy equipment rental in Chad, construction machinery hire in N'Djamena, or equipment rental for projects across the country?",
    zh: '您是否在乍得寻找重型设备租赁、在恩贾梅纳租用建筑机械或为全国各地的项目租赁设备？',
    fr: "Vous cherchez à louer des engins lourds au Tchad, des machines de construction à N'Djamena ou des équipements pour vos projets dans tout le pays ?",
  } as L,
  intro2: {
    ar: 'نقدم خدمات تأجير المعدات الثقيلة في تشاد لقطاعات البناء والنفط والغاز والتعدين والمنظمات غير الحكومية والمشاريع الحكومية. انطلاقًا من مقرنا في نجامينا، نوفر حلول تأجير قصيرة وطويلة الأجل بالإضافة إلى حلول متكاملة لتجهيزات المشاريع في جميع أنحاء البلاد بما في ذلك المناطق النائية.',
    en: "We provide heavy equipment rental in Chad for construction, oil & gas, mining, NGOs and government projects. From our base in N'Djamena we offer short and long-term rental plus complete project equipping solutions across the country, including remote areas.",
    zh: '我们在乍得为建筑、油气、采矿、非政府组织及政府项目提供重型设备租赁。从恩贾梅纳总部出发，我们提供短期和长期租赁以及覆盖全国（包括偏远地区）的整体项目设备解决方案。',
    fr: "Nous proposons la location d'engins lourds au Tchad pour la construction, le pétrole/gaz, les mines, les ONG et les projets gouvernementaux. Depuis N'Djamena, nous offrons des solutions de location courte et longue durée et un équipement complet de projets sur tout le territoire, y compris les zones isolées.",
  } as L,
  fleet: {
    ar: 'يشمل أسطولنا حفارات وجرافات ولوادر وآلات تسوية ورافعات وضواغط وشاحنات قلابة وآلات متخصصة جاهزة للاستخدام الفوري.',
    en: 'Our fleet includes excavators, bulldozers, loaders, graders, cranes, compactors, dump trucks and specialised machinery ready for immediate deployment.',
    zh: '我们的车队包括挖掘机、推土机、装载机、平地机、起重机、压实机、自卸车和专用机械，可立即投入使用。',
    fr: "Notre flotte comprend pelles, bulldozers, chargeuses, niveleuses, grues, compacteurs, camions-bennes et machines spécialisées prêts à être déployés.",
  } as L,
  availableTitle: { ar: 'المعدات المتاحة', en: 'Available Equipment', zh: '可用设备', fr: 'Équipements disponibles' } as L,
  flexibleTitle: { ar: 'حلول تأجير مرنة', en: 'Flexible rental solutions', zh: '灵活的租赁解决方案', fr: 'Solutions de location flexibles' } as L,
  flexibleText: {
    ar: 'تأجير يومي وأسبوعي وشهري وطويل الأجل لشركات الإنشاءات ومقاولي النفط والغاز وعمليات التعدين والمنظمات غير الحكومية والمشاريع العامة.',
    en: 'Daily, weekly, monthly and long-term rental for construction companies, oil & gas contractors, mining operations, NGOs and public projects.',
    zh: '为建筑公司、油气承包商、采矿作业、非政府组织和公共项目提供按日、周、月及长期租赁。',
    fr: 'Location journalière, hebdomadaire, mensuelle et longue durée pour entreprises de construction, contractants pétrole/gaz, opérations minières, ONG et projets publics.',
  } as L,
  operatorsTitle: { ar: 'معدات مع مشغلين معتمدين', en: 'Equipment with certified operators', zh: '配备认证操作员的设备', fr: 'Équipements avec opérateurs certifiés' } as L,
  operatorsText: {
    ar: 'مشغلون معتمدون يتمتعون بخبرة محلية واسعة لضمان عمليات آمنة وفعّالة.',
    en: 'Certified operators with deep local experience ensuring safe and efficient operations.',
    zh: '具有丰富本地经验的认证操作员，确保安全高效的作业。',
    fr: 'Opérateurs certifiés avec une grande expérience locale pour des opérations sûres et efficaces.',
  } as L,
  whyTitle: { ar: 'لماذا تختارنا؟', en: 'Why choose us?', zh: '为什么选择我们？', fr: 'Pourquoi nous choisir ?' } as L,
  ctaTitle: { ar: 'اطلب عرض سعر', en: 'Request a Quote', zh: '索取报价', fr: 'Demander un devis' } as L,
  ctaText: {
    ar: 'تواصل معنا لتأجير المعدات الثقيلة في تشاد، أو حلول التأجير، أو نشر أسطول كامل لمشروعك.',
    en: 'Contact us for heavy equipment rental in Chad, rental solutions, or deployment of a full fleet for your project.',
    zh: '联系我们，了解乍得重型设备租赁、租赁解决方案或为您的项目部署整支车队。',
    fr: "Contactez-nous pour la location d'engins lourds au Tchad, des solutions de location ou le déploiement d'une flotte complète pour votre projet.",
  } as L,
  whatsapp: { ar: 'تواصل عبر واتساب', en: 'Contact via WhatsApp', zh: '通过WhatsApp联系', fr: 'Contact via WhatsApp' } as L,
  callQuote: { ar: 'اطلب عرض سعر', en: 'Request a quote', zh: '索取报价', fr: 'Demander un devis' } as L,
};

const equipment: { icon: any; text: L }[] = [
  { icon: Tractor, text: { ar: 'حفارات، جرافات، لوادر، ممهدات', en: 'Excavators, bulldozers, loaders, graders', zh: '挖掘机、推土机、装载机、平地机', fr: 'Pelles, bulldozers, chargeuses, niveleuses' } },
  { icon: ArrowUpToLine, text: { ar: 'رافعات ومعدات رفع', en: 'Cranes & lifting equipment', zh: '起重机和起重设备', fr: 'Grues et équipements de levage' } },
  { icon: Drum, text: { ar: 'مدحلات وضاغطات', en: 'Rollers & compactors', zh: '压路机和压实机', fr: 'Rouleaux et compacteurs' } },
  { icon: Truck, text: { ar: 'شاحنات قلابة ومعدات نقل', en: 'Dump trucks & haulage equipment', zh: '自卸车和运输设备', fr: 'Camions-bennes et équipements de transport' } },
  { icon: HardHat, text: { ar: 'أجهزة حفر، معدات خرسانة وأسفلت', en: 'Drilling rigs, concrete & asphalt equipment', zh: '钻机、混凝土和沥青设备', fr: 'Foreuses, équipements béton et asphalte' } },
  { icon: Lightbulb, text: { ar: 'مولدات كهربائية، أبراج إنارة ومعدات مواقع', en: 'Generators, lighting towers & site equipment', zh: '发电机、照明塔和现场设备', fr: "Générateurs, tours d'éclairage et équipements de chantier" } },
];

const reasons: { icon: any; text: L }[] = [
  { icon: MapPin, text: { ar: 'حضور قوي في نجامينا وعموم تشاد', en: "Strong presence in N'Djamena and across Chad", zh: '在恩贾梅纳和乍得全境强大的影响力', fr: "Forte présence à N'Djamena et dans tout le Tchad" } },
  { icon: Globe2, text: { ar: 'معدات مُكيّفة مع التضاريس المحلية', en: 'Equipment adapted to local terrain', zh: '适应当地地形的设备', fr: 'Équipements adaptés au terrain local' } },
  { icon: Zap, text: { ar: 'سرعة في الوصول إلى مواقع المشاريع', en: 'Fast deployment to project sites', zh: '快速抵达项目现场', fr: 'Déploiement rapide sur les sites de projet' } },
  { icon: Wrench, text: { ar: 'صيانة ودعم فني', en: 'Maintenance & technical support', zh: '维护和技术支持', fr: 'Maintenance et support technique' } },
  { icon: BadgeDollarSign, text: { ar: 'أسعار تنافسية للمشاريع الكبيرة', en: 'Competitive pricing for large projects', zh: '大型项目的有竞争力价格', fr: 'Tarifs compétitifs pour les grands projets' } },
];

const HeavyEquipmentRichContent: React.FC = () => {
  const { language, dir } = useLanguage();
  return (
    <div dir={dir} lang={language} className="bg-gradient-to-b from-background via-muted/20 to-background mt-10">
      {/* Intro */}
      <section className="py-14 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-background to-red-50/40 dark:from-orange-950/20 dark:to-red-950/10" />
        <div className="section-container max-w-5xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
            <span className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 rounded-full text-accent font-bold text-xs py-1.5 px-3 mb-4">
              <Sparkles className="h-3.5 w-3.5" />
              {pickText(language, t.badge)}
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-primary leading-tight mb-4">
              {pickText(language, t.heading)}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-card border-s-4 border-accent rounded-xl p-6 shadow-sm">
              <p className="text-foreground leading-loose">{pickText(language, t.intro1)}</p>
            </div>
            <div className="bg-card border-s-4 border-primary rounded-xl p-6 shadow-sm">
              <p className="text-foreground leading-loose">{pickText(language, t.intro2)}</p>
            </div>
          </div>

          <div className="mt-4 bg-muted/40 rounded-xl p-5 text-foreground leading-loose">
            {pickText(language, t.fleet)}
          </div>
        </div>
      </section>

      {/* Equipment cards */}
      <section className="py-12 md:py-16 bg-card/40">
        <div className="section-container">
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="h-px w-12 bg-accent/40" />
            <h3 className="text-xl md:text-2xl font-bold text-primary text-center">🔧 {pickText(language, t.availableTitle)}</h3>
            <div className="h-px w-12 bg-accent/40" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {equipment.map((e, i) => {
              const Icon = e.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                  className="group bg-card border border-border rounded-2xl p-6 hover:shadow-xl hover:border-accent/50 transition-all flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-[hsl(218,55%,28%)] flex items-center justify-center shadow-md">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-foreground font-medium leading-relaxed pt-1">{pickText(language, e.text)}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Flexible + operators */}
      <section className="py-14 md:py-16">
        <div className="section-container max-w-5xl grid md:grid-cols-2 gap-5">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="bg-gradient-to-br from-accent to-orange-600 rounded-2xl p-7 text-white shadow-lg">
            <CalendarClock className="h-10 w-10 mb-3" />
            <h4 className="text-xl font-bold mb-2">🚜 {pickText(language, t.flexibleTitle)}</h4>
            <p className="leading-relaxed text-white/95">{pickText(language, t.flexibleText)}</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="bg-gradient-to-br from-primary to-[hsl(218,55%,22%)] rounded-2xl p-7 text-white shadow-lg">
            <UserCheck className="h-10 w-10 mb-3" />
            <h4 className="text-xl font-bold mb-2">👷 {pickText(language, t.operatorsTitle)}</h4>
            <p className="leading-relaxed text-white/95">{pickText(language, t.operatorsText)}</p>
          </motion.div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-14 md:py-20 bg-muted/30">
        <div className="section-container max-w-5xl">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-3">🌍 {pickText(language, t.whyTitle)}</h3>
            <div className="h-1 w-20 bg-accent mx-auto rounded-full" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {reasons.map((r, i) => {
              const Icon = r.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-3 bg-card border border-border rounded-xl p-5 hover:border-accent/50 transition-colors">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <p className="text-foreground leading-relaxed pt-1.5">{pickText(language, r.text)}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-20">
        <div className="section-container max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="relative bg-gradient-to-br from-primary to-[hsl(218,55%,22%)] rounded-3xl p-8 md:p-12 shadow-xl overflow-hidden text-center">
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: 'radial-gradient(circle at 30% 30%, white 1.5px, transparent 1.5px)',
              backgroundSize: '30px 30px',
            }} />
            <div className="relative z-10">
              <Phone className="h-10 w-10 text-white mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">📞 {pickText(language, t.ctaTitle)}</h3>
              <p className="text-white/95 leading-relaxed mb-6 max-w-2xl mx-auto">{pickText(language, t.ctaText)}</p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
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

export default HeavyEquipmentRichContent;
