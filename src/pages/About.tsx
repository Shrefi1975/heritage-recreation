import React from 'react';
import { motion } from 'framer-motion';
import { Package, Truck, HardHat, Key, Users, Globe2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import PageHeader from '@/components/PageHeader';
import aboutHeaderAfricanImg from '@/assets/headers/about-header-african.jpg';

type Lang = 'ar' | 'en' | 'fr' | 'zh';
const pick = <T extends Record<Lang, string>>(lang: string, t: T) =>
  (t as any)[lang] ?? t.en;

const About: React.FC = () => {
  const { language } = useLanguage();
  const lang = (['ar', 'en', 'fr', 'zh'].includes(language) ? language : 'en') as Lang;

  const pageTitle = pick(lang, { ar: 'من نحن', en: 'About Us', fr: 'À propos', zh: '关于我们' });
  const pageSubtitle = pick(lang, {
    ar: 'شريك موثوق للتوريد، والتجارة، والخدمات في تشاد',
    en: 'A trusted partner for supply, trade, and services in Chad',
    fr: 'Un partenaire de confiance pour l\'approvisionnement, le commerce et les services au Tchad',
    zh: '乍得值得信赖的供应、贸易和服务合作伙伴',
  });

  const intro1 = pick(lang, {
    ar: 'شركة GBS هي شركة متعددة الأنشطة متخصصة في التوريد، والتجارة، والخدمات، وتتخذ من تشاد مقرًا لها، حيث تدعم الشركات، والمنظمات غير الحكومية، ومشاريع التنمية، والمؤسسات العامة والخاصة من خلال توفير منتجات موثوقة، وخدمات تشغيلية، وحلول دعم ميداني.',
    en: 'GBS is a multi-activity company specialized in supply, trade, and services, headquartered in Chad, supporting companies, NGOs, development projects, and public and private institutions through reliable products, operational services, and field support solutions.',
    fr: "GBS est une société multi-activités spécialisée dans l'approvisionnement, le commerce et les services, basée au Tchad. Elle accompagne entreprises, ONG, projets de développement et institutions publiques et privées avec des produits fiables, des services opérationnels et des solutions de soutien sur le terrain.",
    zh: 'GBS 是一家总部位于乍得的多元业务公司，专注于供应、贸易和服务，通过可靠的产品、运营服务和现场支持，支持企业、非政府组织、发展项目以及公共和私营机构。',
  });

  const intro2 = pick(lang, {
    ar: 'تعمل GBS في مختلف أنحاء تشاد، ومن خلال شبكة من الشركاء المحليين والإقليميين والدوليين، لدعم سلاسل الإمداد، والعمليات اللوجستية، ومشاريع البنية التحتية، والأنشطة التجارية في بيئات تشغيلية متنوعة.',
    en: 'GBS operates across Chad through a network of local, regional, and international partners — supporting supply chains, logistics operations, infrastructure projects, and commercial activities in diverse operational environments.',
    fr: "GBS opère à travers le Tchad via un réseau de partenaires locaux, régionaux et internationaux — soutenant les chaînes d'approvisionnement, la logistique, les projets d'infrastructure et les activités commerciales.",
    zh: 'GBS 在乍得各地通过本地、地区和国际合作伙伴网络运营，支持供应链、物流、基础设施项目以及多元化的商业活动。',
  });

  const sectorsTitle = pick(lang, {
    ar: 'تعمل GBS عبر ستة مجالات رئيسية',
    en: 'GBS operates across six core areas',
    fr: 'GBS intervient dans six domaines clés',
    zh: 'GBS 在六大核心领域开展业务',
  });

  const sectors = [
    {
      icon: Package,
      title: pick(lang, { ar: 'التجارة والتوريد', en: 'Trade & Supply', fr: 'Commerce & Approvisionnement', zh: '贸易与供应' }),
      desc: pick(lang, {
        ar: 'نوفر المنتجات، والمواد، والمعدات، والبضائع التجارية والمنتجات الاستهلاكية من خلال شبكة من المصنعين، والموزعين، والموردين المحليين والإقليميين والدوليين. وتدعم عملياتنا عدة قطاعات مع ضمان الجودة، وتوفر المنتجات، وكفاءة التسليم.',
        en: 'We supply products, materials, equipment, and commercial and consumer goods through a network of local, regional, and international manufacturers, distributors, and suppliers — ensuring quality, availability, and delivery efficiency across multiple sectors.',
        fr: "Nous fournissons produits, matériaux, équipements et biens commerciaux et de consommation via un réseau de fabricants, distributeurs et fournisseurs locaux, régionaux et internationaux — qualité, disponibilité et efficacité de livraison garanties.",
        zh: '我们通过本地、地区和国际制造商、分销商和供应商网络，提供产品、材料、设备及商业和消费品，确保质量、供应和交付效率。',
      }),
    },
    {
      icon: Truck,
      title: pick(lang, { ar: 'النقل والخدمات اللوجستية والتوزيع', en: 'Transport, Logistics & Distribution', fr: 'Transport, Logistique & Distribution', zh: '运输、物流与分销' }),
      desc: pick(lang, {
        ar: 'ندير عمليات تنسيق الشحن، والدعم الجمركي، والتخزين، والنقل، والتوزيع داخل مختلف أنحاء تشاد. وتهدف عملياتنا اللوجستية إلى ضمان تسليم آمن وفي الوقت المناسب، بما في ذلك في البيئات المعقدة والمناطق البعيدة. كما تدعم GBS عمليات النقل اللوجستي العابرة للحدود، بما في ذلك نقل البضائع من دوالا – الكاميرون إلى إنجمينا – تشاد، عبر تنسيق الشحن، والإجراءات الجمركية، والنقل البري، وإدارة عمليات التسليم على طول هذا الممر التجاري الحيوي.',
        en: 'We manage freight coordination, customs support, warehousing, transport, and distribution across Chad — including complex environments and remote regions. GBS also supports cross-border logistics, notably the Douala (Cameroon) – N\'Djamena (Chad) corridor: freight coordination, customs procedures, road transport, and delivery management along this vital trade route.',
        fr: "Nous gérons coordination du fret, dédouanement, entreposage, transport et distribution à travers le Tchad, y compris en zones complexes et reculées. GBS soutient aussi la logistique transfrontalière, notamment le corridor Douala (Cameroun) – N'Djamena (Tchad).",
        zh: '我们在乍得各地管理货运协调、海关支持、仓储、运输和分销，包括复杂环境和偏远地区。GBS 还支持跨境物流，特别是杜阿拉（喀麦隆）至恩贾梅纳（乍得）这条重要贸易走廊。',
      }),
    },
    {
      icon: HardHat,
      title: pick(lang, { ar: 'البناء ودعم المشاريع', en: 'Construction & Project Support', fr: 'Construction & Soutien aux Projets', zh: '建筑与项目支持' }),
      desc: pick(lang, {
        ar: 'تدعم GBS مشاريع البناء، والبنية التحتية، والتنمية من خلال توفير المواد، والمعدات، وخدمات دعم المواقع، والتنسيق التشغيلي بما يتناسب مع متطلبات المشاريع والواقع الميداني. كما تشارك الشركة في تنفيذ المشاريع عبر شراكات من الباطن مع شركات البناء والهندسة، لدعم أعمال البنية التحتية، والأشغال المدنية، والعمليات الميدانية، والخدمات اللوجستية المرتبطة بالمشاريع في مختلف أنحاء تشاد. ويتيح هذا النهج لـ GBS المساهمة كشريك في التوريد، وكشريك دعم وتشغيل للمشاريع في القطاعين العام والخاص.',
        en: 'GBS supports construction, infrastructure, and development projects with materials, equipment, on-site support, and operational coordination aligned with project needs and field realities. We also engage through subcontracting partnerships with construction and engineering firms, supporting infrastructure works, civil works, field operations, and project logistics across Chad — contributing as both a supply partner and an operational support partner for public and private projects.',
        fr: "GBS soutient les projets de construction, d'infrastructure et de développement en fournissant matériaux, équipements, soutien sur site et coordination opérationnelle. Nous intervenons aussi via des partenariats de sous-traitance avec des entreprises de construction et d'ingénierie sur l'ensemble du Tchad.",
        zh: 'GBS 通过提供材料、设备、现场支持和运营协调，支持建筑、基础设施和发展项目；并通过与建筑和工程公司的分包合作，参与基础设施工程、土建工程、现场作业和项目物流。',
      }),
    },
    {
      icon: Key,
      title: pick(lang, { ar: 'خدمات التأجير والإيجار', en: 'Leasing & Rental Services', fr: 'Services de Location', zh: '租赁服务' }),
      desc: pick(lang, {
        ar: 'نوفر حلولًا مرنة لتأجير المركبات، والآليات، والمعدات، والأصول التشغيلية، مما يساعد المؤسسات والمشاريع على العمل بكفاءة مع تقليل التكاليف الاستثمارية.',
        en: 'We provide flexible rental solutions for vehicles, machinery, equipment, and operational assets — helping organizations and projects operate efficiently while reducing capital costs.',
        fr: "Solutions de location flexibles pour véhicules, machines, équipements et actifs opérationnels — pour fonctionner efficacement tout en réduisant les coûts d'investissement.",
        zh: '我们为车辆、机械、设备和运营资产提供灵活的租赁解决方案，帮助机构和项目高效运营，同时降低资本支出。',
      }),
    },
    {
      icon: Users,
      title: pick(lang, { ar: 'خدمات الموارد البشرية وتوفير العمالة', en: 'HR & Manpower Services', fr: 'RH & Fourniture de Main-d\'œuvre', zh: '人力资源与劳动力服务' }),
      desc: pick(lang, {
        ar: 'ندعم المؤسسات والمشاريع من خلال خدمات التوظيف، وتوفير العمالة، وتنسيق الموارد البشرية بما يتوافق مع المتطلبات التشغيلية وقوانين العمل المحلية.',
        en: 'We support institutions and projects with recruitment, manpower supply, and HR coordination aligned with operational requirements and local labor laws.',
        fr: "Nous accompagnons institutions et projets via recrutement, fourniture de main-d'œuvre et coordination RH, en conformité avec le droit du travail local.",
        zh: '我们通过招聘、劳动力供应和人力资源协调，支持机构和项目，并遵守当地劳动法。',
      }),
    },
    {
      icon: Globe2,
      title: pick(lang, { ar: 'التصدير والتجارة الدولية', en: 'Export & International Trade', fr: 'Export & Commerce International', zh: '出口与国际贸易' }),
      desc: pick(lang, {
        ar: 'تسهل GBS عمليات التصدير من تشاد إلى الأسواق الإقليمية والدولية من خلال تنسيق الوثائق، والخدمات اللوجستية، والامتثال التجاري، وعمليات التجارة مع الشركاء الدوليين.',
        en: 'GBS facilitates exports from Chad to regional and international markets through document coordination, logistics, trade compliance, and trade operations with international partners.',
        fr: "GBS facilite les exportations depuis le Tchad vers les marchés régionaux et internationaux: documentation, logistique, conformité et opérations commerciales avec des partenaires internationaux.",
        zh: 'GBS 通过单据协调、物流、贸易合规及与国际伙伴的贸易运营，促进乍得向地区和国际市场的出口。',
      }),
    },
  ];

  const closing = [
    pick(lang, {
      ar: 'تجمع GBS بين هذه الأنشطة ضمن نموذج تشغيلي موحد يدمج التوريد، والخدمات اللوجستية، والتوزيع، ودعم المشاريع، بما يضمن كفاءة التنفيذ واستمرارية العمليات.',
      en: 'GBS combines these activities within a unified operating model integrating supply, logistics, distribution, and project support — ensuring execution efficiency and operational continuity.',
      fr: "GBS réunit ces activités dans un modèle opérationnel unifié intégrant approvisionnement, logistique, distribution et soutien aux projets.",
      zh: 'GBS 将这些业务整合到统一的运营模式中，融合供应、物流、分销和项目支持，确保执行效率和运营连续性。',
    }),
    pick(lang, {
      ar: 'وتعمل الشركة وفق معايير الأعمال والتوريد الدولية، مع التكيف مع ظروف السوق المحلية والواقع التشغيلي في تشاد.',
      en: 'The company operates to international business and supply standards, while adapting to local market conditions and the operational realities of Chad.',
      fr: "L'entreprise applique les standards internationaux d'affaires et d'approvisionnement, tout en s'adaptant aux conditions locales du marché tchadien.",
      zh: '公司遵循国际商业和供应标准，同时适应乍得本地市场条件和运营实际。',
    }),
    pick(lang, {
      ar: 'ومن خلال هيكلها متعدد القطاعات، تدعم GBS عمليات الإمداد الداخلي وأنشطة التجارة الخارجية، مما يتيح للعملاء الوصول إلى المنتجات، والخدمات، والقدرات اللوجستية، والموارد التشغيلية عبر شريك محلي واحد.',
      en: 'Through its multi-sector structure, GBS supports domestic supply operations and foreign trade activities — giving clients access to products, services, logistics capabilities, and operational resources through a single local partner.',
      fr: "Grâce à sa structure multi-sectorielle, GBS soutient à la fois l'approvisionnement local et les activités commerciales internationales — offrant aux clients un accès unifié via un seul partenaire local.",
      zh: '凭借多领域结构，GBS 同时支持本地供应业务和对外贸易活动，让客户通过单一本地合作伙伴获取产品、服务、物流能力和运营资源。',
    }),
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <PageHeader title={pageTitle} subtitle={pageSubtitle} image={aboutHeaderAfricanImg} />

        {/* Intro */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="section-container">
            <div className="max-w-4xl mx-auto space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-base sm:text-lg text-muted-foreground leading-relaxed"
              >
                {intro1}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-base sm:text-lg text-muted-foreground leading-relaxed"
              >
                {intro2}
              </motion.p>
            </div>
          </div>
        </section>

        {/* Six Sectors */}
        <section className="py-12 lg:py-16 bg-muted/30">
          <div className="section-container">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl font-bold text-primary text-center mb-10"
            >
              {sectorsTitle}
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-5 max-w-6xl mx-auto">
              {sectors.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.article
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 inline-flex w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary items-center justify-center">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-primary mb-2 leading-snug">{s.title}</h3>
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="section-container">
            <div className="max-w-4xl mx-auto space-y-6">
              {closing.slice(0, 2).map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-base sm:text-lg text-muted-foreground leading-relaxed"
                >
                  {p}
                </motion.p>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-primary rounded-2xl p-6 sm:p-8 text-primary-foreground"
              >
                <p className="text-sm sm:text-base leading-relaxed">{closing[2]}</p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;
