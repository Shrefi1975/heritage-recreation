import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Mountain, CalendarRange, Truck, UserCheck, Sparkles, Car } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { pickText, type LocalizedString } from '@/data/services';

type L = LocalizedString;

const badge: L = {
  ar: 'نجامينا وعموم البلاد',
  en: "N'Djamena & nationwide",
  zh: '恩贾梅纳及全国',
  fr: "N'Djamena & tout le pays",
};

const heading: L = {
  ar: 'خدمات تأجير السيارات في تشاد',
  en: 'Car Rental Services in Chad',
  zh: '乍得汽车租赁服务',
  fr: 'Services de location de voitures au Tchad',
};

const intro1: L = {
  ar: 'هل تبحث عن تأجير سيارة في تشاد؟ نوفر حلول تأجير سيارات موثوقة واقتصادية في نجامينا وجميع أنحاء تشاد، مصممة خصيصًا للشركات والمنظمات غير الحكومية والمؤسسات الحكومية والأفراد.',
  en: "Looking for car rental in Chad? We offer reliable and cost-effective car rental solutions in N'Djamena and across Chad, tailored for companies, NGOs, government institutions and individuals.",
  zh: '在乍得寻找租车服务？我们在恩贾梅纳及乍得全境提供可靠且经济的汽车租赁解决方案，专为公司、非政府组织、政府机构和个人定制。',
  fr: "Vous cherchez une location de voiture au Tchad ? Nous proposons des solutions de location fiables et économiques à N'Djamena et dans tout le Tchad, adaptées aux entreprises, ONG, institutions gouvernementales et particuliers.",
};

const intro2: L = {
  ar: 'يشمل أسطولنا سيارات الدفع الرباعي وسيارات الدفع الرباعي الرياضية وسيارات البيك أب والسيارات الفاخرة، المتاحة للتأجير قصير الأجل وطويل الأجل بالإضافة إلى عقود المشاريع. سواء كنت بحاجة إلى سيارات للعمليات الميدانية أو الخدمات اللوجستية أو لنقل الشخصيات المهمة، نضمن لك التوافر والموثوقية والأداء الأمثل في جميع الظروف.',
  en: 'Our fleet includes 4WDs, SUVs, pickups and luxury vehicles available for short-term, long-term and project contracts. Whether you need cars for field operations, logistics or VIP transfers, we guarantee availability, reliability and optimal performance in every condition.',
  zh: '我们的车队包括四驱车、SUV、皮卡和豪华车，可提供短期、长期和项目合同租赁。无论您需要用于实地作业、物流还是VIP接送，我们保证在各种条件下的可用性、可靠性和最佳性能。',
  fr: "Notre flotte comprend des 4x4, SUV, pick-ups et véhicules de luxe disponibles en location courte, longue durée et contrats projet. Que ce soit pour les opérations de terrain, la logistique ou le transport VIP, nous garantissons disponibilité, fiabilité et performance optimale en toutes circonstances.",
};

const services: { icon: any; title: L; text: L }[] = [
  {
    icon: Crown,
    title: { ar: 'تأجير سيارات فاخرة وسيارات كبار الشخصيات في نجامينا', en: "Luxury & VIP car rental in N'Djamena", zh: '恩贾梅纳豪华与VIP车辆租赁', fr: "Location de voitures de luxe et VIP à N'Djamena" },
    text: { ar: 'سيارات تنفيذية للمسؤولين والدبلوماسيين والوفود الرسمية.', en: 'Executive cars for officials, diplomats and official delegations.', zh: '为官员、外交官和官方代表团提供高管车辆。', fr: 'Voitures exécutives pour officiels, diplomates et délégations officielles.' },
  },
  {
    icon: Mountain,
    title: { ar: 'تأجير سيارات الدفع الرباعي في تشاد (مجهزة للطرق الوعرة)', en: 'Off-road 4WD rental in Chad', zh: '乍得四驱越野车租赁', fr: 'Location de 4x4 tout-terrain au Tchad' },
    text: { ar: 'سيارات دفع رباعي قوية للمنظمات غير الحكومية والبعثات الإنسانية والمشاريع في المناطق النائية.', en: 'Powerful 4WDs for NGOs, humanitarian missions and projects in remote areas.', zh: '为非政府组织、人道主义任务及偏远地区项目提供强劲的四驱车。', fr: 'Des 4x4 robustes pour ONG, missions humanitaires et projets en zones isolées.' },
  },
  {
    icon: CalendarRange,
    title: { ar: 'تأجير سيارات طويل الأجل في تشاد (شركات ومنظمات)', en: 'Long-term car rental in Chad', zh: '乍得长期租车（企业与NGO）', fr: 'Location longue durée au Tchad' },
    text: { ar: 'عقود تأجير مرنة في تشاد مع خطط شهرية أو سنوية.', en: 'Flexible rental contracts in Chad with monthly or yearly plans.', zh: '乍得灵活的租赁合同，提供月度或年度计划。', fr: 'Contrats flexibles avec formules mensuelles ou annuelles.' },
  },
  {
    icon: Truck,
    title: { ar: 'تأجير سيارات بيك أب للخدمات اللوجستية والعمل الميداني', en: 'Pickup rental for logistics & field work', zh: '皮卡租赁用于物流和实地作业', fr: 'Location de pick-ups pour logistique et terrain' },
    text: { ar: 'مثالية لشركات الإنشاءات وعمليات النفط والغاز وأنشطة سلسلة التوريد.', en: 'Ideal for construction companies, oil & gas operations and supply chain activities.', zh: '非常适合建筑公司、油气作业和供应链活动。', fr: 'Idéal pour les entreprises de construction, opérations pétrole/gaz et chaîne d\'approvisionnement.' },
  },
  {
    icon: UserCheck,
    title: { ar: 'تأجير سيارات مع سائق في تشاد (خدمة سائق خاص)', en: 'Car rental with driver in Chad', zh: '乍得带司机租车服务', fr: 'Location avec chauffeur au Tchad' },
    text: { ar: 'سائقون محترفون على دراية تامة بطرق نجامينا والمناطق المحيطة بها.', en: "Professional drivers who know N'Djamena's roads and surrounding areas inside out.", zh: '熟悉恩贾梅纳及周边地区道路的专业司机。', fr: "Chauffeurs professionnels parfaitement familiers avec N'Djamena et ses environs." },
  },
];

const LeasingRichContent: React.FC = () => {
  const { language, dir } = useLanguage();
  return (
    <div dir={dir} lang={language} className="bg-gradient-to-b from-background via-muted/20 to-background mt-10">
      <section className="py-14 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-background to-amber-50/40 dark:from-yellow-950/20 dark:to-amber-950/10" />
        <div className="section-container max-w-5xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
            <span className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 rounded-full text-accent font-bold text-xs py-1.5 px-3 mb-4">
              <Sparkles className="h-3.5 w-3.5" />
              {pickText(language, badge)}
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-primary leading-tight mb-4">{pickText(language, heading)}</h2>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid md:grid-cols-2 gap-4">
            <div className="bg-card border-s-4 border-accent rounded-xl p-6 shadow-sm">
              <p className="text-foreground leading-loose">{pickText(language, intro1)}</p>
            </div>
            <div className="bg-card border-s-4 border-primary rounded-xl p-6 shadow-sm">
              <p className="text-foreground leading-loose">{pickText(language, intro2)}</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-card/40">
        <div className="section-container">
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="h-px w-12 bg-accent/40" />
            <h3 className="text-xl md:text-2xl font-bold text-primary text-center inline-flex items-center gap-2">
              <Car className="h-5 w-5" /> {pickText(language, heading)}
            </h3>
            <div className="h-px w-12 bg-accent/40" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                  className="group relative bg-card border border-border rounded-2xl p-6 hover:shadow-xl hover:border-accent/50 transition-all">
                  <div className="absolute top-4 end-4 text-5xl font-black text-primary/5 select-none">{String(i + 1).padStart(2, '0')}</div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-orange-600 flex items-center justify-center shadow-md mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-bold text-primary text-base md:text-lg leading-snug mb-2">{pickText(language, s.title)}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{pickText(language, s.text)}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LeasingRichContent;
