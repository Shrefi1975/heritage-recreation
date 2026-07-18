import React from 'react';
import { HeartPulse, ShieldCheck, Stethoscope } from 'lucide-react';
import CategoryPage from '@/components/CategoryPage';
import { useLanguage } from '@/contexts/LanguageContext';
import heroImg from '@/assets/hero-medical.jpg';

const MedicalIntro: React.FC = () => {
  const { language } = useLanguage();
  const c = {
    ar: {
      eyebrow: 'قطاع الرعاية الصحية',
      title: 'المعدات الطبية والأدوية',
      tagline: 'شريك موثوق للمستشفيات والعيادات والمنظمات الصحية في تشاد',
      paragraphs: [
        'تقدم Global Business & Supplies (GBS) حلولاً متكاملة في مجال المعدات الطبية والأدوية والمستلزمات الصحية، من خلال توريد منتجات معتمدة دولياً من كبرى الشركات المصنعة، وبمعايير جودة تلبي احتياجات المستشفيات والعيادات ومراكز الرعاية الصحية والمنظمات الدولية العاملة في تشاد.',
        'نعمل على توفير حلول شاملة تغطي تجهيزات المستشفيات، وأجهزة التشخيص والأشعة، ومستلزمات المختبرات، والأدوية، والمستهلكات الطبية، ومعدات الوقاية الشخصية، إضافةً إلى تجهيز العيادات ومراكز الأسنان — بما يتوافق مع معايير CE و FDA واللوائح المحلية.',
      ],
      pills: [
        { icon: HeartPulse, label: 'أجهزة طبية' },
        { icon: Stethoscope, label: 'تجهيز عيادات' },
        { icon: ShieldCheck, label: 'جودة معتمدة' },
      ],
    },
    en: {
      eyebrow: 'Healthcare Sector',
      title: 'Medical Equipment & Pharmaceuticals',
      tagline: 'A trusted partner for hospitals, clinics and healthcare organizations in Chad',
      paragraphs: [
        'Global Business & Supplies (GBS) delivers integrated medical equipment, pharmaceutical and healthcare supply solutions — sourcing internationally certified products from leading manufacturers to meet the needs of hospitals, clinics, primary-care centers and international organizations operating in Chad.',
        'Our scope covers hospital fit-out, diagnostic and imaging devices, laboratory supplies, pharmaceuticals, medical consumables, PPE and clinic & dental setup — fully aligned with CE, FDA and local regulatory standards.',
      ],
      pills: [
        { icon: HeartPulse, label: 'Medical Devices' },
        { icon: Stethoscope, label: 'Clinic Fit-out' },
        { icon: ShieldCheck, label: 'Certified Quality' },
      ],
    },
    fr: {
      eyebrow: 'Secteur de la Santé',
      title: 'Équipements Médicaux et Pharmaceutiques',
      tagline: 'Un partenaire de confiance pour les hôpitaux, cliniques et organisations de santé au Tchad',
      paragraphs: [
        "Global Business & Supplies (GBS) fournit des solutions intégrées en équipements médicaux, produits pharmaceutiques et fournitures de santé — en sourçant auprès des principaux fabricants des produits certifiés internationalement, pour répondre aux besoins des hôpitaux, cliniques, centres de soins primaires et organisations internationales opérant au Tchad.",
        "Notre périmètre couvre l'aménagement hospitalier, les dispositifs de diagnostic et d'imagerie, les fournitures de laboratoire, les produits pharmaceutiques, les consommables médicaux, les EPI et l'aménagement de cliniques et cabinets dentaires — en pleine conformité avec les normes CE, FDA et les réglementations locales.",
      ],
      pills: [
        { icon: HeartPulse, label: 'Dispositifs Médicaux' },
        { icon: Stethoscope, label: 'Aménagement Clinique' },
        { icon: ShieldCheck, label: 'Qualité Certifiée' },
      ],
    },
    zh: {
      eyebrow: '医疗保健领域',
      title: '医疗设备与药品',
      tagline: '为乍得的医院、诊所和医疗机构提供值得信赖的合作',
      paragraphs: [
        'Global Business & Supplies (GBS) 提供集医疗设备、药品和医疗用品于一体的综合解决方案 — 从领先制造商采购国际认证产品，满足乍得的医院、诊所、初级保健中心和国际组织的需求。',
        '业务范围涵盖医院装修、诊断和成像设备、实验室用品、药品、医疗耗材、个人防护用品，以及诊所和牙科装修 — 完全符合 CE、FDA 标准及乍得当地法规。',
      ],
      pills: [
        { icon: HeartPulse, label: '医疗设备' },
        { icon: Stethoscope, label: '诊所装修' },
        { icon: ShieldCheck, label: '认证质量' },
      ],
    },
  } as const;
  const t = c[language as 'ar'|'en'|'fr'|'zh'] || c.en;
  return (
    <section className="py-12 lg:py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="section-container max-w-5xl">
        <div className="bg-card border border-border rounded-2xl p-6 md:p-10 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 start-0 h-1.5 w-24 bg-gradient-to-r from-primary to-accent rounded-br-lg" />
          <div className="mb-5">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-accent mb-2">{t.eyebrow}</span>
            <h2 className="text-2xl md:text-3xl font-bold text-primary leading-tight">{t.title}</h2>
            <p className="text-base md:text-lg text-foreground/70 font-semibold mt-2">{t.tagline}</p>
          </div>
          <div className="space-y-4 mb-6">
            {t.paragraphs.map((p, i) => (
              <p key={i} className="text-foreground leading-relaxed">{p}</p>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            {t.pills.map(({ icon: Icon, label }, i) => (
              <span key={i} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/15 text-sm text-primary font-medium">
                <Icon className="h-4 w-4 text-accent" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const MedicalPage: React.FC = () => (
  <CategoryPage
    heroImage={heroImg}
    badge={{ ar: 'الرعاية الصحية', en: 'Healthcare', zh: '医疗保健', fr: 'Santé' }}
    title={{
      ar: 'المعدات الطبية والأدوية',
      en: 'Medical Equipment & Pharmaceuticals',
      zh: '医疗设备与药品',
      fr: 'Équipements Médicaux et Pharmaceutiques',
    }}
    tagline={{
      ar: 'حلول طبية متكاملة للمستشفيات والعيادات في تشاد',
      en: 'Integrated medical solutions for hospitals and clinics in Chad',
      zh: '为乍得医院和诊所提供综合医疗解决方案',
      fr: 'Solutions médicales intégrées pour hôpitaux et cliniques au Tchad',
    }}
    intro={{
      ar: 'نوفر توريداً متخصصاً للأدوية والمعدات الطبية والمستلزمات الصحية المعتمدة دولياً من أكبر الشركات الدوائية والطبية العالمية. جميع منتجاتنا تمر بفحوصات صارمة وتحمل شهادات جودة دولية. نخدم المستشفيات والعيادات والمراكز الصحية بحلول متكاملة مع ضمان الجودة والسعر التنافسي.',
      en: 'We deliver comprehensive medical solutions covering hospital equipment, diagnostic and imaging devices, laboratory supplies, pharmaceuticals, medical consumables and PPE, and clinic & dental fit-out — meeting CE and FDA standards with full compliance to Chadian regulations.',
      zh: '我们提供全面的医疗解决方案,涵盖医院设备、诊断和成像设备、实验室用品、药品、医疗耗材和PPE以及诊所和牙科装修 — 符合CE和FDA标准并完全符合乍得法规。',
      fr: 'Nous fournissons des solutions médicales complètes: équipements hospitaliers, dispositifs de diagnostic et imagerie, fournitures de laboratoire, produits pharmaceutiques, consommables et EPI, aménagement de cliniques et cabinets dentaires — aux normes CE et FDA, en pleine conformité tchadienne.',
    }}
    belowHero={<MedicalIntro />}
    serviceSlugs={['med-hospital', 'med-diagnostic', 'med-lab', 'med-pharma', 'med-consumables', 'med-clinic']}
  />
);

export default MedicalPage;
