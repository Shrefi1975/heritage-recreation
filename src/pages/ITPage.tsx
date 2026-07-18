import React from 'react';
import CategoryPage from '@/components/CategoryPage';
import { useLanguage } from '@/contexts/LanguageContext';
import heroImg from '@/assets/hero-it.jpg';

const ITIntro: React.FC = () => {
  const { language } = useLanguage();
  const c = {
    ar: {
      title: 'حلول تقنية متقدمة لدعم المؤسسات والمشاريع في تشاد',
      paragraphs: [
        'أصبحت تكنولوجيا المعلومات والتحول الرقمي من العوامل الأساسية لتعزيز الكفاءة التشغيلية وتحسين جودة الخدمات ودعم النمو الاقتصادي في مختلف القطاعات. ومع التطور المتسارع للتقنيات الرقمية، تتزايد الحاجة إلى حلول متكاملة تساعد المؤسسات على تطوير بنيتها التحتية التقنية، أتمتة عملياتها، وتعزيز قدرتها على مواكبة متطلبات العصر الرقمي.',
        'تنشط GBS في مجال تكنولوجيا المعلومات والتحول الرقمي، وتدعم الجهات الحكومية والمؤسسات العامة والشركات الخاصة والبنوك وشركات الاتصالات والجامعات والمؤسسات الصحية والمنظمات الدولية من خلال المساهمة في تطوير وتنفيذ الحلول التقنية المناسبة لاحتياجاتها.',
        'وتعمل GBS بالتعاون مع شبكة من الشركاء الإقليميين والدوليين ومزودي التكنولوجيا العالميين الذين يمتلكون خبرات واسعة وسجلاً ناجحاً في تنفيذ المشاريع التقنية والتحول الرقمي، مما يتيح لعملائنا الاستفادة من أفضل الممارسات العالمية والحلول الحديثة مع وجود شريك محلي قادر على فهم احتياجات السوق التشادي ودعم تطوير وتنفيذ المشاريع.',
      ],
      title2: 'كيف تدعم GBS المشاريع التقنية؟',
      paragraphs2: [
        'تعمل GBS كشريك أعمال محلي يساهم في دراسة احتياجات العملاء، تحديد الحلول المناسبة، تطوير فرص المشاريع، التنسيق مع الشركات المتخصصة ومزودي التكنولوجيا، دعم عمليات التوريد والتنفيذ، ومتابعة المشاريع بالتعاون مع شركاء ذوي خبرات متخصصة على المستوى الإقليمي والدولي.',
        'ويتيح هذا النموذج للمؤسسات الاستفادة من التقنيات والخبرات العالمية مع ضمان وجود جهة محلية قادرة على دعم التواصل والتنسيق وإدارة متطلبات المشروع بكفاءة.',
      ],
    },
    en: {
      title: 'Advanced technology solutions supporting institutions and projects in Chad',
      paragraphs: [
        'Information technology and digital transformation have become essential factors for enhancing operational efficiency, improving service quality and supporting economic growth across sectors. As digital technologies evolve rapidly, organizations increasingly need integrated solutions to develop their technical infrastructure, automate operations and keep pace with the digital era.',
        'GBS is active in IT and digital transformation, supporting government entities, public institutions, private companies, banks, telecom operators, universities, healthcare institutions and international organizations by contributing to the design and implementation of technical solutions tailored to their needs.',
        'GBS works with a network of regional and international partners and global technology providers with proven experience in IT projects and digital transformation, giving our clients access to global best practices and modern solutions alongside a local partner able to understand the Chadian market.',
      ],
      title2: 'How does GBS support technology projects?',
      paragraphs2: [
        "GBS acts as a local business partner: studying client needs, identifying suitable solutions, developing project opportunities, coordinating with specialized companies and technology providers, supporting procurement and execution, and monitoring projects together with specialized regional and international partners.",
        'This model allows organizations to benefit from global technology and expertise while ensuring a local counterpart able to support communication, coordination and project management efficiently.',
      ],
    },
    fr: {
      title: "Solutions technologiques avancées pour les institutions et projets au Tchad",
      paragraphs: [
        "L'informatique et la transformation numérique sont devenues essentielles pour renforcer l'efficacité opérationnelle, améliorer la qualité des services et soutenir la croissance économique. Face à l'évolution rapide du numérique, les organisations ont besoin de solutions intégrées pour développer leur infrastructure technique et automatiser leurs processus.",
        "GBS est active dans les TI et la transformation numérique, accompagnant les entités publiques, entreprises privées, banques, opérateurs télécoms, universités, institutions de santé et organisations internationales dans la conception et la mise en œuvre de solutions adaptées.",
        "GBS collabore avec un réseau de partenaires régionaux et internationaux et de fournisseurs technologiques mondiaux disposant d'une expérience éprouvée, offrant aux clients les meilleures pratiques mondiales avec un partenaire local qui comprend le marché tchadien.",
      ],
      title2: 'Comment GBS soutient-elle les projets technologiques ?',
      paragraphs2: [
        "GBS agit comme partenaire local: étude des besoins, définition des solutions, développement des opportunités, coordination avec les entreprises spécialisées et fournisseurs, soutien à l'approvisionnement et à l'exécution, et suivi des projets avec des partenaires spécialisés régionaux et internationaux.",
        "Ce modèle permet aux organisations de bénéficier des technologies et expertises mondiales tout en disposant d'un interlocuteur local capable de gérer la communication, la coordination et les exigences du projet.",
      ],
    },
    zh: {
      title: '为乍得的机构和项目提供先进技术解决方案',
      paragraphs: [
        '信息技术和数字化转型已成为提升运营效率、改善服务质量和支持经济增长的关键因素。',
        'GBS 活跃于信息技术和数字化转型领域，为政府部门、公共机构、私营企业、银行、电信、大学、医疗机构和国际组织提供技术解决方案。',
        'GBS 与区域和国际合作伙伴及全球技术提供商合作，让客户获得全球最佳实践并同时拥有一个了解乍得市场的本地伙伴。',
      ],
      title2: 'GBS 如何支持技术项目？',
      paragraphs2: [
        'GBS 作为本地业务合作伙伴，研究客户需求、确定合适方案、开发项目机会、协调专业公司和技术供应商，并与区域和国际专家共同跟进项目。',
        '此模式使机构能够利用全球技术和专业知识，同时拥有本地伙伴以高效管理项目沟通和协调。',
      ],
    },
  } as const;
  const t = c[language as keyof typeof c] || c.en;
  return (
    <section className="py-12 lg:py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="section-container max-w-5xl space-y-6">
        <div className="bg-card border border-border rounded-2xl p-6 md:p-10 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 start-0 h-1.5 w-24 bg-gradient-to-r from-accent to-orange-500 rounded-br-lg" />
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-5 leading-tight">{t.title}</h2>
          <div className="space-y-4">
            {t.paragraphs.map((p, i) => (<p key={i} className="text-foreground leading-relaxed">{p}</p>))}
          </div>
        </div>
        <div className="bg-card border border-border rounded-2xl p-6 md:p-10 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 start-0 h-1.5 w-24 bg-gradient-to-r from-primary to-accent rounded-br-lg" />
          <h3 className="text-xl md:text-2xl font-bold text-primary mb-5 leading-tight">{t.title2}</h3>
          <div className="space-y-4">
            {t.paragraphs2.map((p, i) => (<p key={i} className="text-foreground leading-relaxed">{p}</p>))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ITPage: React.FC = () => (
  <CategoryPage
    heroImage={heroImg}
    badge={{ ar: 'تكنولوجيا المعلومات', en: 'Information Technology', zh: '信息技术', fr: 'Technologies de l\'information' }}
    title={{
      ar: 'تكنولوجيا المعلومات',
      en: 'Information Technology',
      zh: '信息技术',
      fr: "Technologies de l'Information",
    }}
    tagline={{
      ar: 'حلول تقنية متكاملة للمؤسسات في تشاد',
      en: 'Integrated IT solutions for enterprises in Chad',
      zh: '为乍得企业提供综合IT解决方案',
      fr: 'Solutions IT intégrées pour les entreprises au Tchad',
    }}
    intro={{
      ar: 'نوفر حلولاً تقنية متكاملة تساعد الشركات والمؤسسات على تطوير أعمالها، تحسين كفاءة التشغيل، وتعزيز التحول الرقمي من خلال أنظمة موثوقة وخدمات تقنية مرنة تناسب مختلف القطاعات.',
      en: 'We design and deploy comprehensive IT solutions covering infrastructure, networking, servers and data centers, cybersecurity, cloud services, business software and end-user devices — enabling Chadian enterprises to digitalise efficiently and securely.',
      zh: '我们设计和部署全面的IT解决方案,涵盖基础设施、网络、服务器和数据中心、网络安全、云服务、业务软件和终端设备,使乍得企业能够高效安全地实现数字化。',
      fr: 'Nous concevons et déployons des solutions IT complètes: infrastructure, réseaux, serveurs et data centers, cybersécurité, cloud, logiciels métier et postes de travail — pour digitaliser les entreprises tchadiennes en toute sécurité.',
    }}
    belowHero={<ITIntro />}
    serviceSlugs={['it-networking', 'it-servers', 'it-software', 'it-security', 'it-cloud', 'it-devices']}
  />
);

export default ITPage;
