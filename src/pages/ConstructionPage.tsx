import React from 'react';
import CategoryPage from '@/components/CategoryPage';
import ConstructionRichContent from '@/components/services/ConstructionRichContent';
import { useLanguage } from '@/contexts/LanguageContext';
import heroImg from '@/assets/services/construction-african.jpg';

const ConstructionIntro: React.FC = () => {
  const { language } = useLanguage();
  const content = {
    ar: {
      heading: 'البناء والمقاولات وتطوير البنية التحتية في تشاد',
      paragraphs: [
        'تقدم GBS خدمات البناء والمقاولات في تشاد من خلال التعاون مع شركات ومقاولين متخصصين لتنفيذ المشاريع الحكومية والخاصة وفق أعلى المعايير الفنية والهندسية. وتشمل خدماتنا إنشاء المباني السكنية والتجارية والإدارية، وأعمال الطرق والبنية التحتية، والمرافق العامة، وأعمال التأهيل والصيانة، والمباني الجاهزة، وإدارة المشاريع.',
        'وتسعى GBS إلى المساهمة في دعم مشاريع التنمية والاستثمار في تشاد من خلال توفير حلول متكاملة في مجالات البناء والتشييد وإدارة المشاريع، مع التركيز على الجودة والالتزام بالجداول الزمنية ومتطلبات العملاء. كما نرحب بالتعاون مع شركات المقاولات والاستشارات الهندسية والمطورين العقاريين الراغبين في تنفيذ مشاريع جديدة في تشاد.',
      ],
    },
    en: {
      heading: 'Construction, Contracting and Infrastructure Development in Chad',
      paragraphs: [
        'GBS delivers construction and contracting services in Chad in cooperation with specialised firms and contractors to execute government and private projects to the highest technical and engineering standards. Our services include residential, commercial and administrative building construction, road and infrastructure works, public utilities, rehabilitation and maintenance, prefabricated buildings, and project management.',
        'GBS aims to support development and investment projects in Chad through integrated construction, contracting, and project-management solutions, with a strong focus on quality, on-time delivery, and client requirements. We welcome cooperation with contracting companies, engineering consultants, and real-estate developers wishing to execute new projects in Chad.',
      ],
    },
    fr: {
      heading: 'Construction, entreprise générale et développement des infrastructures au Tchad',
      paragraphs: [
        "GBS fournit des services de construction et d'entreprise générale au Tchad en coopération avec des sociétés et entrepreneurs spécialisés pour exécuter des projets publics et privés selon les plus hauts standards techniques et d'ingénierie. Nos services comprennent la construction de bâtiments résidentiels, commerciaux et administratifs, les travaux de routes et d'infrastructures, les équipements publics, la réhabilitation et la maintenance, les bâtiments préfabriqués et la gestion de projets.",
        "GBS s'engage à soutenir les projets de développement et d'investissement au Tchad en offrant des solutions intégrées en construction, entreprise générale et gestion de projet, avec un fort accent sur la qualité, le respect des délais et les exigences des clients. Nous accueillons la coopération avec les entreprises de BTP, les bureaux d'études et les promoteurs immobiliers souhaitant réaliser de nouveaux projets au Tchad.",
      ],
    },
    zh: {
      heading: '乍得的建筑、承包与基础设施开发',
      paragraphs: [
        'GBS 在乍得与专业公司和承包商合作提供建筑与承包服务，按照最高的技术和工程标准执行政府和私人项目。我们的服务包括住宅、商业和行政建筑施工，道路和基础设施工程，公共设施，修复和维护，预制建筑以及项目管理。',
        'GBS 致力于通过在建筑、承包和项目管理方面提供综合解决方案，支持乍得的发展和投资项目，注重质量、准时交付和客户需求。我们欢迎与希望在乍得实施新项目的承包公司、工程咨询公司和房地产开发商合作。',
      ],
    },
  } as const;
  const c = content[language as keyof typeof content] || content.en;
  return (
    <section className="py-12 lg:py-16 bg-background">
      <div className="section-container max-w-5xl">
        <div className="bg-card border border-border rounded-2xl p-6 md:p-10 shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-5">{c.heading}</h2>
          <div className="space-y-4">
            {c.paragraphs.map((p, i) => (
              <p key={i} className="text-foreground leading-relaxed">{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ConstructionPage: React.FC = () => (
  <CategoryPage
    heroImage={heroImg}
    badge={{ ar: 'البناء والمشاريع', en: 'Construction & Projects', zh: '建筑与项目', fr: 'Construction & Projets' }}
    title={{
      ar: 'البناء والمقاولات',
      en: 'Construction & Contracting',
      zh: '建筑与承包',
      fr: 'Construction & Contracting',
    }}
    tagline={{
      ar: 'إنشاء وصيانة وترميم وفق المعايير الدولية',
      en: 'Construction, maintenance, and renovation to international standards',
      zh: '符合国际标准的建筑、维护和修复',
      fr: 'Construction, maintenance et rénovation aux normes internationales',
    }}
    intro={{
      ar: 'تدعم GBS مشاريع البناء والبنية التحتية والتنمية في تشاد من خلال تنفيذ أعمال الإنشاء وعقود الصيانة والترميم، إلى جانب توفير المواد والمعدات وخدمات دعم المواقع والتنسيق التشغيلي بما يتناسب مع متطلبات المشاريع والواقع الميداني.',
      en: 'GBS supports construction, infrastructure, and development projects in Chad through building works, maintenance and renovation contracts, plus materials, equipment, on-site support, and operational coordination tailored to project requirements and field realities.',
      zh: 'GBS 通过建筑施工、维护和修复合同，以及材料、设备、现场支持和运营协调，支持乍得的建筑、基础设施和发展项目。',
      fr: "GBS soutient les projets de construction, d'infrastructure et de développement au Tchad: travaux de construction, contrats de maintenance et rénovation, fourniture de matériaux et équipements, soutien sur site et coordination opérationnelle.",
    }}
    belowHero={<ConstructionIntro />}
    serviceSlugs={['construction', 'maintenance']}
    extraContent={<ConstructionRichContent />}
  />
);

export default ConstructionPage;
