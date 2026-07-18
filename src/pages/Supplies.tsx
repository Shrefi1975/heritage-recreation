import React from 'react';
import CategoryPage from '@/components/CategoryPage';
import SectorsShowcase from '@/components/services/SectorsShowcase';
import { useLanguage } from '@/contexts/LanguageContext';
import heroImg from '@/assets/services/trade-import-export-african.jpg';

const SuppliesIntro: React.FC = () => {
  const { language } = useLanguage();
  const c = {
    ar: {
      title: 'التوريدات في تشاد',
      paragraphs: [
        'تعتبر GBS من الشركات العاملة في مجال التوريدات والتجارة العامة في تشاد، حيث تقدم خدمات توريد المنتجات والمعدات والمواد اللازمة للمؤسسات الحكومية والشركات الخاصة والمنظمات الدولية والمشاريع التنموية. وتشمل أنشطتنا الاستيراد والتصدير وتوريد المعدات الصناعية ومواد البناء والمعدات الطبية والمستلزمات التعليمية والمعدات الزراعية وقطع الغيار والمنتجات الاستهلاكية وحلول الطاقة.',
        'ومن خلال شبكة واسعة من المصنعين والموردين الدوليين والإقليميين، تساعد GBS المؤسسات على الوصول إلى المنتجات والمعدات المطلوبة لتنفيذ مشاريعها في مختلف أنحاء تشاد. كما تعمل الشركة على دعم الشركات الأجنبية والمصنعين الراغبين في دخول السوق التشادي من خلال خدمات التوريد والتوزيع والتمثيل التجاري وتطوير الشراكات الاستراتيجية.',
      ],
    },
    en: {
      title: 'Supplies in Chad',
      paragraphs: [
        'GBS is an active supplies and general trade company in Chad, providing products, equipment and materials to government institutions, private companies, international organizations and development projects. Our activities cover import and export and the supply of industrial equipment, construction materials, medical equipment, educational supplies, agricultural equipment, spare parts, consumer products and energy solutions.',
        'Through a wide network of international and regional manufacturers and suppliers, GBS helps organizations access the products and equipment required to execute their projects across Chad. We also support foreign companies and manufacturers wishing to enter the Chadian market through supply, distribution, commercial representation and strategic partnership development.',
      ],
    },
    fr: {
      title: 'Approvisionnements au Tchad',
      paragraphs: [
        "GBS est une société active dans l'approvisionnement et le commerce général au Tchad, fournissant produits, équipements et matériaux aux institutions publiques, entreprises privées, organisations internationales et projets de développement. Nos activités couvrent l'import/export et la fourniture d'équipements industriels, matériaux de construction, équipements médicaux, fournitures scolaires, matériel agricole, pièces de rechange, produits de consommation et solutions énergétiques.",
        "Grâce à un large réseau de fabricants et fournisseurs internationaux et régionaux, GBS aide les organisations à accéder aux produits et équipements nécessaires à leurs projets. Nous accompagnons également les entreprises étrangères souhaitant entrer sur le marché tchadien via l'approvisionnement, la distribution, la représentation commerciale et les partenariats stratégiques.",
      ],
    },
    zh: {
      title: '乍得的供应服务',
      paragraphs: [
        'GBS 是乍得在供应和综合贸易领域的活跃公司，为政府机构、私营企业、国际组织和发展项目提供产品、设备和材料。我们的活动涵盖进出口以及工业设备、建材、医疗设备、教育用品、农业设备、备件、消费品和能源解决方案的供应。',
        '通过庞大的国际和区域制造商及供应商网络，GBS 帮助机构获取项目所需的产品和设备，并通过供应、分销、商业代表和战略伙伴关系支持希望进入乍得市场的外国公司。',
      ],
    },
  } as const;
  const t = c[language as keyof typeof c] || c.en;
  return (
    <section className="py-12 lg:py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="section-container max-w-5xl">
        <div className="bg-card border border-border rounded-2xl p-6 md:p-10 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 start-0 h-1.5 w-24 bg-gradient-to-r from-accent to-orange-500 rounded-br-lg" />
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-5 leading-tight">{t.title}</h2>
          <div className="space-y-4">
            {t.paragraphs.map((p, i) => (
              <p key={i} className="text-foreground leading-relaxed">{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Supplies: React.FC = () => (
  <CategoryPage
    heroImage={heroImg}
    badge={{ ar: 'التوريدات', en: 'Supplies', zh: '供应', fr: 'Approvisionnements' }}
    title={{
      ar: 'التوريدات',
      en: 'Supplies',
      zh: '供应',
      fr: 'Approvisionnements',
    }}
    tagline={{
      ar: 'شبكة توريد عالمية وتجارة دولية موثوقة',
      en: 'Global supply network and reliable international trade',
      zh: '全球供应网络与可靠的国际贸易',
      fr: "Réseau d'approvisionnement mondial et commerce international fiable",
    }}
    intro={{
      ar: 'نوفر المنتجات والمواد والمعدات والبضائع التجارية والاستهلاكية من خلال شبكة من المصنعين والموزعين والموردين المحليين والإقليميين والدوليين، إلى جانب خدمات التوريدات من تشاد إلى الأسواق الدولية وإدارة عمليات التجارة الدولية مع الشركاء حول العالم.',
      en: 'We supply products, materials, equipment, and commercial and consumer goods through a network of local, regional, and international manufacturers, distributors, and suppliers — along with export services from Chad to international markets and management of international trade operations.',
      zh: '我们通过本地、地区和国际制造商、分销商和供应商网络提供产品、材料、设备及商业和消费品,同时提供从乍得出口到国际市场的服务以及国际贸易运营管理。',
      fr: "Nous fournissons produits, matériaux, équipements et biens commerciaux et de consommation via un réseau de fabricants, distributeurs et fournisseurs locaux, régionaux et internationaux, ainsi que des services d'export depuis le Tchad et la gestion des opérations de commerce international.",
    }}
    belowHero={<SuppliesIntro />}
    serviceSlugs={['supply-trading', 'export-trade', 'international-trade']}
    extraContent={<SectorsShowcase />}
  />
);

export default Supplies;
