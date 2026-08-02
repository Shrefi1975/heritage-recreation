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
    ar: 'Global Business & Supplies (GBS) هي شركة متخصصة في التجارة العامة، والاستيراد والتصدير، والتوريد، والخدمات اللوجستية، والبناء والمقاولات، والحلول التقنية في تشاد. يقع مقر الشركة في أنجمينا، وتقدم خدماتها للقطاعين الحكومي والخاص، والمنظمات الدولية، والمنظمات غير الحكومية، والشركات المحلية والعالمية، مع تغطية تمتد إلى تشاد ومنطقة وسط أفريقيا.',
    en: 'Global Business & Supplies (GBS) is a company specialized in general trade, import and export, supply, logistics, construction and contracting, and technology solutions in Chad. Headquartered in N\'Djamena, GBS serves the public and private sectors, international organizations, NGOs, and local and global companies, with coverage extending across Chad and the Central Africa region.',
    fr: "Global Business & Supplies (GBS) est une société spécialisée dans le commerce général, l'import-export, l'approvisionnement, la logistique, la construction et les solutions technologiques au Tchad. Basée à N'Djamena, elle sert les secteurs public et privé, les organisations internationales, les ONG et les entreprises locales et mondiales, avec une couverture au Tchad et en Afrique centrale.",
    zh: 'Global Business & Supplies (GBS) 是一家专注于乍得综合贸易、进出口、供应、物流、建筑承包与技术解决方案的公司。公司总部位于恩贾梅纳，为公共和私营部门、国际组织、非政府组织以及本地和全球企业提供服务，业务覆盖乍得及中非地区。',
  });

  const intro2 = pick(lang, {
    ar: 'تعتمد الشركة على شبكة واسعة من الشراكات مع الشركات المحلية والإقليمية والدولية، مما يمكنها من توفير منتجات وخدمات عالية الجودة وفق المعايير العالمية. كما تعمل Global Business & Supplies كشريك محلي للشركات العالمية الراغبة في دخول السوق التشادية والتوسع في أسواق وسط أفريقيا، من خلال خدمات التمثيل التجاري، وتطوير الأعمال، والتسويق، والتوزيع، والخدمات اللوجستية، وإدارة سلسلة الإمداد، وتنفيذ المشاريع. وترحب الشركة بالتعاون مع المصنعين والموردين والشركات الدولية التي تقدم منتجات وخدمات عالية الجودة، وتسعى إلى تمثيلها وتطوير أعمالها وفتح أسواق جديدة لها في تشاد ووسط أفريقيا.',
    en: 'The company relies on a broad network of partnerships with local, regional, and international firms, enabling it to deliver high-quality products and services to global standards. GBS also acts as the local partner for international companies entering the Chadian market and expanding into Central Africa — through commercial representation, business development, marketing, distribution, logistics, supply chain management, and project execution. We welcome cooperation with manufacturers, suppliers, and international companies, and seek to represent them and open new markets in Chad and Central Africa.',
    fr: "L'entreprise s'appuie sur un large réseau de partenariats locaux, régionaux et internationaux, lui permettant de fournir des produits et services de haute qualité aux standards internationaux. GBS agit aussi comme partenaire local des sociétés internationales souhaitant entrer sur le marché tchadien et s'étendre en Afrique centrale : représentation commerciale, développement des affaires, marketing, distribution, logistique, gestion de la chaîne d'approvisionnement et exécution de projets.",
    zh: '公司依托与本地、地区和国际企业的广泛合作网络，能够按照国际标准提供高质量的产品与服务。GBS 还作为国际企业进入乍得市场并拓展中非市场的本地合作伙伴，提供商业代理、业务拓展、市场营销、分销、物流、供应链管理及项目执行等服务，并欢迎与优质制造商和供应商合作，代理其业务并开拓新市场。',
  });

  const scopeTitle = pick(lang, { ar: 'مجالات عملنا', en: 'Our Areas of Work', fr: "Nos domaines d'activité", zh: '我们的业务领域' });
  const scopeLead = pick(lang, {
    ar: 'تشمل خدمات Global Business & Supplies مجموعة واسعة من القطاعات، منها:',
    en: 'GBS services cover a wide range of sectors, including:',
    fr: 'Les services de GBS couvrent un large éventail de secteurs, dont :',
    zh: 'GBS 的服务涵盖广泛的领域，包括：',
  });
  const scopeItems: string[] = pick(lang, {
    ar: [
      'التجارة العامة والاستيراد والتصدير لمختلف المنتجات والسلع.',
      'توريد السلع الاستهلاكية سريعة التداول (FMCG)، والمنتجات الغذائية، والمواد المنزلية، ومنتجات العناية الشخصية.',
      'توريد المعدات الطبية، والأدوية، والمستهلكات الطبية، والمستلزمات المخبرية.',
      'توريد منتجات الطاقة الشمسية وأنظمة الطاقة المتجددة.',
      'توريد المعدات الزراعية، والبيطرية، والصناعية، ومواد البناء، وقطع الغيار، والأثاث، والمعدات المكتبية والفندقية والتعليمية.',
      'البناء والمقاولات، بما يشمل تنفيذ مشاريع البنية التحتية، والإنشاءات، والترميم، والصيانة، وأعمال التشطيب، وتوريد مواد البناء والمعدات.',
    ],
    en: [
      'General trade, import and export of various products and goods.',
      'Supply of FMCG, food products, household materials, and personal care products.',
      'Supply of medical equipment, pharmaceuticals, medical consumables, and laboratory supplies.',
      'Supply of solar products and renewable energy systems.',
      'Supply of agricultural, veterinary, and industrial equipment, building materials, spare parts, furniture, and office, hotel, and educational equipment.',
      'Construction and contracting, including infrastructure projects, building, renovation, maintenance, finishing works, and supply of construction materials and equipment.',
    ],
    fr: [
      'Commerce général, import et export de divers produits et marchandises.',
      'Fourniture de produits de grande consommation (FMCG), alimentaires, ménagers et de soins personnels.',
      'Fourniture d\'équipements médicaux, de médicaments, de consommables médicaux et de matériel de laboratoire.',
      'Fourniture de produits solaires et de systèmes d\'énergie renouvelable.',
      'Fourniture d\'équipements agricoles, vétérinaires et industriels, matériaux de construction, pièces détachées, mobilier et équipements de bureau, hôteliers et éducatifs.',
      'Construction et travaux : infrastructures, bâtiment, rénovation, maintenance, finitions et fourniture de matériaux et d\'équipements.',
    ],
    zh: [
      '各类产品与商品的综合贸易及进出口。',
      '快速消费品（FMCG）、食品、家居用品和个人护理产品的供应。',
      '医疗设备、药品、医用耗材和实验室用品的供应。',
      '太阳能产品与可再生能源系统的供应。',
      '农业、兽医和工业设备、建筑材料、备件、家具以及办公、酒店和教育设备的供应。',
      '建筑与工程承包，包括基础设施项目、施工、翻新、维护、装修以及建材和设备供应。',
    ],
  } as any);

  const servicesLead = pick(lang, {
    ar: 'كما تقدم الشركة مجموعة متكاملة من الخدمات، تشمل:',
    en: 'The company also offers an integrated set of services, including:',
    fr: 'La société propose également un ensemble intégré de services :',
    zh: '公司还提供一整套综合服务，包括：',
  });
  const serviceItems: string[] = pick(lang, {
    ar: [
      'النقل والشحن من دوالا وميناء كريبي في الكاميرون إلى أنجمينا، ثم إلى جميع المدن والمناطق داخل تشاد، مع خدمات التخليص الجمركي والنقل الداخلي.',
      'تأجير السيارات مع سائق في مختلف أنحاء تشاد.',
      'إيجار المنازل، والفلل، والشقق المفروشة وغير المفروشة في أنجمينا وأبشي.',
      'تأجير المعدات الثقيلة، بما في ذلك الحفارات، واللودرات، والجريدرات، والمداحل، والدامب تراك، واللوبيد تراك، وغيرها من معدات البناء والطرق.',
    ],
    en: [
      'Transport and freight from Douala and Kribi port in Cameroon to N\'Djamena and all cities and regions inside Chad, with customs clearance and inland transport.',
      'Car rental with driver across Chad.',
      'Rental of houses, villas, and furnished or unfurnished apartments in N\'Djamena and Abéché.',
      'Heavy equipment rental, including excavators, loaders, graders, rollers, dump trucks, lowbed trucks, and other construction and road equipment.',
    ],
    fr: [
      "Transport et fret depuis Douala et le port de Kribi (Cameroun) vers N'Djamena et toutes les villes du Tchad, avec dédouanement et transport intérieur.",
      'Location de voitures avec chauffeur partout au Tchad.',
      "Location de maisons, villas et appartements meublés ou non à N'Djamena et Abéché.",
      "Location d'engins lourds : excavatrices, chargeuses, niveleuses, compacteurs, camions bennes, porte-chars et autres engins de chantier.",
    ],
    zh: [
      '从喀麦隆杜阿拉和克里比港到恩贾梅纳，以及乍得境内所有城市和地区的运输与货运，含清关和内陆运输。',
      '乍得各地提供带司机的汽车租赁服务。',
      '在恩贾梅纳和阿贝歇提供房屋、别墅及带家具或不带家具公寓的租赁。',
      '重型设备租赁，包括挖掘机、装载机、平地机、压路机、自卸车、低平板车及其他建筑与道路设备。',
    ],
  } as any);

  const itParagraph = pick(lang, {
    ar: 'وفي مجال تقنية المعلومات والتحول الرقمي (IT & Digital Solutions)، تقدم الشركة حلولاً متكاملة تشمل تصميم وتطوير أنظمة إدارة المؤسسات (ERP)، والمواقع الإلكترونية، والتطبيقات، وتوريد معدات تقنية المعلومات، وأنظمة كاميرات المراقبة (CCTV)، وأنظمة التحكم في الدخول والخروج، وأنظمة مواقف السيارات الذكية، وحلول الشبكات والبنية التحتية الرقمية.',
    en: 'In IT & Digital Solutions, GBS delivers integrated solutions including ERP design and development, websites and applications, IT equipment supply, CCTV systems, access control systems, smart parking systems, and network and digital infrastructure solutions.',
    fr: "Dans le domaine IT & solutions digitales, GBS propose la conception et le développement d'ERP, de sites web et d'applications, la fourniture d'équipements informatiques, la vidéosurveillance (CCTV), le contrôle d'accès, les systèmes de parking intelligents et les infrastructures réseau.",
    zh: '在信息技术与数字化解决方案领域，GBS 提供包括 ERP 系统设计开发、网站与应用程序、IT 设备供应、监控（CCTV）系统、门禁系统、智能停车系统以及网络与数字基础设施在内的一体化解决方案。',
  });

  const visionTitle = pick(lang, { ar: 'رؤيتنا', en: 'Our Vision', fr: 'Notre Vision', zh: '我们的愿景' });
  const visionText = pick(lang, {
    ar: 'أن نكون الشريك الرائد في التجارة، والاستيراد والتصدير، والخدمات اللوجستية، والبناء، والحلول التقنية في تشاد ووسط أفريقيا، وأن نساهم في ربط الشركات العالمية بالفرص الاستثمارية في المنطقة.',
    en: 'To be the leading partner in trade, import and export, logistics, construction, and technology solutions in Chad and Central Africa, and to connect global companies with investment opportunities in the region.',
    fr: "Être le partenaire de référence du commerce, de l'import-export, de la logistique, de la construction et des solutions technologiques au Tchad et en Afrique centrale, et relier les entreprises mondiales aux opportunités de la région.",
    zh: '成为乍得及中非地区贸易、进出口、物流、建筑与技术解决方案的领先合作伙伴，并助力全球企业对接本地区的投资机会。',
  });
  const missionTitle = pick(lang, { ar: 'رسالتنا', en: 'Our Mission', fr: 'Notre Mission', zh: '我们的使命' });
  const missionText = pick(lang, {
    ar: 'تقديم منتجات وخدمات متكاملة بأعلى معايير الجودة، وبناء شراكات استراتيجية مع المصنعين والموردين العالميين، ودعم المؤسسات والشركات في تنفيذ مشاريعها، وتمكين الشركات الدولية من الوصول إلى السوق التشادية وأسواق وسط أفريقيا من خلال حلول احترافية وموثوقة.',
    en: 'To deliver integrated products and services of the highest quality, build strategic partnerships with global manufacturers and suppliers, support institutions and companies in executing their projects, and enable international companies to access the Chadian and Central African markets through professional, reliable solutions.',
    fr: "Fournir des produits et services intégrés de la plus haute qualité, bâtir des partenariats stratégiques avec les fabricants et fournisseurs mondiaux, accompagner les institutions et entreprises dans leurs projets et permettre aux sociétés internationales d'accéder aux marchés tchadien et d'Afrique centrale.",
    zh: '以最高质量标准提供综合产品与服务，与全球制造商和供应商建立战略合作，支持机构与企业实施项目，并通过专业可靠的解决方案帮助国际企业进入乍得及中非市场。',
  });

  const finalParagraph = pick(lang, {
    ar: 'بفضل خبرتها، وشبكة شركائها، ومعرفتها العميقة بالسوق المحلي، أصبحت Global Business & Supplies (GBS) شريكًا موثوقًا في التجارة العامة، والاستيراد والتصدير، والبناء والمقاولات، والخدمات اللوجستية، وتأجير السيارات، وتأجير العقارات، وتأجير المعدات الثقيلة، وتقنية المعلومات والتحول الرقمي، مع القدرة على تنفيذ المشاريع وتوفير المنتجات والخدمات في مختلف أنحاء تشاد ومنطقة وسط أفريقيا.',
    en: 'Thanks to its experience, partner network, and deep knowledge of the local market, GBS has become a trusted partner in general trade, import and export, construction and contracting, logistics, car rental, property rental, heavy equipment rental, and IT and digital transformation — able to execute projects and deliver products and services across Chad and Central Africa.',
    fr: "Grâce à son expérience, son réseau de partenaires et sa connaissance du marché local, GBS est devenu un partenaire de confiance dans le commerce général, l'import-export, la construction, la logistique, la location de voitures, l'immobilier, la location d'engins lourds et les solutions numériques, au Tchad et en Afrique centrale.",
    zh: '凭借丰富经验、合作伙伴网络以及对本地市场的深刻理解，GBS 已成为综合贸易、进出口、建筑承包、物流、汽车租赁、房产租赁、重型设备租赁以及信息技术与数字化转型领域值得信赖的合作伙伴，能够在乍得及中非地区执行项目并提供产品与服务。',
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

        {/* Scope of work */}
        <section className="pb-12 lg:pb-16">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">{scopeTitle}</h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4">{scopeLead}</p>
              <ul className="space-y-3 mb-8">
                {scopeItems.map((item, i) => (
                  <li key={i} className="flex gap-3 text-base text-muted-foreground leading-relaxed">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4">{servicesLead}</p>
              <ul className="space-y-3 mb-8">
                {serviceItems.map((item, i) => (
                  <li key={i} className="flex gap-3 text-base text-muted-foreground leading-relaxed">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">{itParagraph}</p>

              <div className="grid sm:grid-cols-2 gap-5 mt-10">
                <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
                  <h3 className="font-bold text-lg text-primary mb-2">{visionTitle}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{visionText}</p>
                </div>
                <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
                  <h3 className="font-bold text-lg text-primary mb-2">{missionTitle}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{missionText}</p>
                </div>
              </div>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mt-8">{finalParagraph}</p>
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
