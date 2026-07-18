import React from 'react';
import { Sun, Battery, Zap } from 'lucide-react';
import CategoryPage from '@/components/CategoryPage';
import { useLanguage } from '@/contexts/LanguageContext';
import heroImg from '@/assets/hero-solar.jpg';

const SolarIntro: React.FC = () => {
  const { language } = useLanguage();
  const c = {
    ar: {
      eyebrow: 'قطاع الطاقة المتجددة',
      title: 'الطاقة الشمسية',
      tagline: 'حلول طاقة نظيفة وموثوقة للمنازل والشركات والمشاريع في تشاد',
      paragraphs: [
        'تقدم Global Business & Supplies (GBS) حلولاً متكاملة في مجال الطاقة الشمسية النظيفة، بدءاً من دراسة الموقع والتصميم الفني، مروراً بتوريد المعدات عالية الجودة من موردين عالميين معتمدين، وصولاً إلى التركيب والتشغيل والصيانة طويلة الأمد.',
        'نخدم القطاع السكني والتجاري والصناعي، ونصمم أنظمة On-grid و Off-grid وحلول هجينة تناسب المناطق النائية، إضافةً إلى أنظمة ضخ المياه بالطاقة الشمسية وأنظمة تخزين الطاقة — بما يساعد شركاءنا على تقليل تكاليف الطاقة والاعتماد على مصادر مستدامة.',
      ],
      pills: [
        { icon: Sun, label: 'أنظمة شمسية' },
        { icon: Battery, label: 'تخزين طاقة' },
        { icon: Zap, label: 'On/Off-grid' },
      ],
    },
    en: {
      eyebrow: 'Renewable Energy Sector',
      title: 'Solar Energy',
      tagline: 'Clean, reliable energy solutions for homes, businesses and projects in Chad',
      paragraphs: [
        'Global Business & Supplies (GBS) delivers end-to-end solar energy solutions — from site assessment and system design, to procurement of premium-grade equipment from certified global suppliers, and full installation, commissioning and long-term maintenance.',
        'We serve residential, commercial and industrial clients, and design on-grid, off-grid and hybrid systems tailored for remote areas, along with solar water pumping and energy storage solutions — helping partners cut energy costs and shift to sustainable power sources.',
      ],
      pills: [
        { icon: Sun, label: 'Solar Systems' },
        { icon: Battery, label: 'Energy Storage' },
        { icon: Zap, label: 'On/Off-grid' },
      ],
    },
    fr: {
      eyebrow: 'Secteur des Énergies Renouvelables',
      title: 'Énergie Solaire',
      tagline: 'Solutions énergétiques propres et fiables pour maisons, entreprises et projets au Tchad',
      paragraphs: [
        "Global Business & Supplies (GBS) fournit des solutions solaires de bout en bout — étude de site, conception, approvisionnement en équipements haut de gamme auprès de fournisseurs mondiaux certifiés, installation, mise en service et maintenance long terme.",
        "Nous servons les clients résidentiels, commerciaux et industriels, et concevons des systèmes on-grid, off-grid et hybrides adaptés aux zones reculées, ainsi que des solutions de pompage solaire et de stockage — pour réduire les coûts énergétiques et adopter des sources durables.",
      ],
      pills: [
        { icon: Sun, label: 'Systèmes Solaires' },
        { icon: Battery, label: "Stockage d'Énergie" },
        { icon: Zap, label: 'On/Off-grid' },
      ],
    },
    zh: {
      eyebrow: '可再生能源领域',
      title: '太阳能',
      tagline: '为乍得的家庭、企业和项目提供清洁可靠的能源解决方案',
      paragraphs: [
        'Global Business & Supplies (GBS) 提供端到端的太阳能解决方案 — 从现场评估和系统设计，到从认证的全球供应商采购优质设备，再到完整安装、调试和长期维护。',
        '我们服务住宅、商业和工业客户，设计并网、离网和混合系统，为偏远地区量身定制，同时提供太阳能水泵和储能解决方案，帮助合作伙伴降低能源成本并转向可持续能源。',
      ],
      pills: [
        { icon: Sun, label: '太阳能系统' },
        { icon: Battery, label: '储能' },
        { icon: Zap, label: '并网/离网' },
      ],
    },
  } as const;
  const t = c[language as 'ar'|'en'|'fr'|'zh'] || c.en;
  return (
    <section className="py-12 lg:py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="section-container max-w-5xl">
        <div className="bg-card border border-border rounded-2xl p-6 md:p-10 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 start-0 h-1.5 w-24 bg-gradient-to-r from-accent to-orange-500 rounded-br-lg" />
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
              <span key={i} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/5 border border-accent/20 text-sm text-primary font-medium">
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

const SolarPage: React.FC = () => (
  <CategoryPage
    heroImage={heroImg}
    badge={{ ar: 'الطاقة المتجددة', en: 'Renewable Energy', zh: '可再生能源', fr: 'Énergie renouvelable' }}
    title={{
      ar: 'الطاقة الشمسية',
      en: 'Solar Energy',
      zh: '太阳能',
      fr: 'Énergie Solaire',
    }}
    tagline={{
      ar: 'حلول طاقة شمسية للمنازل والشركات والمشاريع',
      en: 'Solar energy solutions for homes, businesses and projects',
      zh: '家庭、企业和项目的太阳能解决方案',
      fr: 'Solutions solaires pour maisons, entreprises et projets',
    }}
    intro={{
      ar: 'نوفر حلولاً متكاملة وحديثة للطاقة الشمسية النظيفة مع معدات عالية الجودة من الموردين العالميين المعتمدين. نقدم تصميماً احترافياً لأنظمة الطاقة الشمسية مناسبة للاستخدام السكني والتجاري والصناعي. فريقنا المتخصص يساعد في تقليل تكاليف الطاقة وحماية البيئة من خلال حلول طاقة نظيفة فعالة وموثوقة.',
      en: 'We design and deploy end-to-end solar energy solutions for every application — residential, commercial and industrial systems, off-grid and hybrid solutions for remote areas, solar water pumping, energy storage — with long-term operations and maintenance.',
      zh: '我们为各种应用设计和部署端到端的太阳能解决方案 — 住宅、商业和工业系统、偏远地区的离网和混合解决方案、太阳能水泵、储能,以及长期运维服务。',
      fr: 'Nous concevons et déployons des solutions solaires complètes: résidentielles, commerciales et industrielles, off-grid et hybrides pour zones reculées, pompage solaire, stockage — avec exploitation et maintenance long terme.',
    }}
    belowHero={<SolarIntro />}
    serviceSlugs={['solar-residential', 'solar-commercial', 'solar-offgrid', 'solar-pumping', 'solar-storage', 'solar-om']}
  />
);

export default SolarPage;
