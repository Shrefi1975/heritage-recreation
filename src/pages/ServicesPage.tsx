import React from 'react';
import CategoryPage from '@/components/CategoryPage';
import { useLanguage } from '@/contexts/LanguageContext';
import heroImg from '@/assets/services/transport.jpg';

const ServicesIntro: React.FC = () => {
  const { language } = useLanguage();
  const content = {
    ar: {
      heading: 'خدمات الأعمال والخدمات اللوجستية والدعم التشغيلي في تشاد',
      paragraphs: [
        'توفر GBS مجموعة متكاملة من خدمات الأعمال والخدمات اللوجستية في تشاد لمساعدة المؤسسات على تنفيذ مشاريعها وإدارة عملياتها اليومية بكفاءة. وتشمل خدماتنا النقل والتوزيع والخدمات اللوجستية وتأجير المركبات والمعدات الثقيلة وتوفير القوى العاملة والدعم الإداري والتشغيلي للمشاريع.',
        'ونخدم المؤسسات الحكومية والشركات الخاصة والمنظمات الدولية العاملة في تشاد من خلال حلول مرنة تساعد على تحسين الأداء التشغيلي وتقليل التكاليف وتعزيز كفاءة تنفيذ المشاريع. كما تقدم GBS خدمات مخصصة للشركات الأجنبية التي تحتاج إلى شريك محلي موثوق لدعم عملياتها في السوق التشادي.',
        'كما تعمل GBS في مجال النقل من ميناء دوالا أو كيريبي في الكاميرون إلى مدينة إنجمينا في تشاد، أو داخل الأراضي التشادية.',
      ],
    },
    en: {
      heading: 'Business, Logistics & Operational Support Services in Chad',
      paragraphs: [
        'GBS delivers a complete portfolio of business and logistics services in Chad to help organizations execute projects and manage day-to-day operations efficiently. Our services cover transport, distribution, logistics, vehicle and heavy-equipment rental, manpower supply, and administrative and operational project support.',
        'We serve government institutions, private companies, and international organizations operating in Chad through flexible solutions that improve operational performance, reduce costs, and enhance project delivery. GBS also offers tailored services to foreign companies seeking a reliable local partner to support their operations in the Chadian market.',
        'GBS also operates in transportation from the port of Douala or Kribi in Cameroon to N’Djamena, as well as inland across Chadian territory.',
      ],
    },
    fr: {
      heading: 'Services aux entreprises, logistique et support opérationnel au Tchad',
      paragraphs: [
        "GBS propose un portefeuille complet de services aux entreprises et de logistique au Tchad pour aider les organisations à exécuter leurs projets et à gérer leurs opérations quotidiennes efficacement. Nos services couvrent le transport, la distribution, la logistique, la location de véhicules et d'engins lourds, la fourniture de main-d'œuvre et le support administratif et opérationnel des projets.",
        "Nous servons les institutions publiques, les entreprises privées et les organisations internationales opérant au Tchad grâce à des solutions flexibles qui améliorent la performance opérationnelle, réduisent les coûts et renforcent l'exécution des projets. GBS propose également des services sur mesure aux entreprises étrangères qui cherchent un partenaire local fiable pour soutenir leurs opérations sur le marché tchadien.",
        "GBS intervient également dans le transport depuis le port de Douala ou Kribi au Cameroun jusqu'à N'Djamena, ainsi qu'à l'intérieur du territoire tchadien.",
      ],
    },
    zh: {
      heading: '乍得的商业、物流与运营支持服务',
      paragraphs: [
        'GBS 在乍得提供完整的商业和物流服务组合，帮助各类组织高效执行项目和管理日常运营。我们的服务涵盖运输、分销、物流、车辆和重型设备租赁、劳动力供应以及项目行政和运营支持。',
        '我们通过灵活的解决方案为在乍得运营的政府机构、私营公司和国际组织提供服务，改善运营绩效、降低成本并提升项目执行效率。GBS 还为需要可靠本地合作伙伴以支持其在乍得市场运营的外国公司提供定制服务。',
        'GBS 还开展从喀麦隆杜阿拉港或克里比港到乍得恩贾梅纳的运输，以及在乍得境内的运输业务。',
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

const ServicesPage: React.FC = () => (
  <CategoryPage
    heroImage={heroImg}
    badge={{ ar: 'خدماتنا', en: 'Our Services', zh: '我们的服务', fr: 'Nos Services' }}
    title={{
      ar: 'الخدمات',
      en: 'Services',
      zh: '服务',
      fr: 'Services',
    }}
    tagline={{
      ar: 'حلول خدمية متكاملة تدعم العمليات والمشاريع في تشاد',
      en: 'Integrated service solutions powering operations and projects across Chad',
      zh: '助力乍得各类运营和项目的综合服务解决方案',
      fr: 'Solutions de services intégrées au service des opérations et projets au Tchad',
    }}
    intro={{
      ar: 'باقة شاملة من الخدمات تشمل إيجار المنازل والسيارات والمعدات الثقيلة ومعدات البناء، النقل والشحن، التوزيع والتوصيل المحلي — لتمكين المؤسسات والمشاريع من العمل بكفاءة وموثوقية في تشاد.',
      en: 'A comprehensive portfolio including house and car rental, heavy equipment and construction equipment rental, transport & freight, and local distribution & delivery — enabling institutions and projects to operate efficiently and reliably in Chad.',
      zh: '全面的服务组合，包括房屋和汽车租赁、重型设备和建筑设备租赁、运输和货运以及本地分销和配送，助力乍得的机构和项目高效可靠运营。',
      fr: "Une gamme complète: location de maisons et de voitures, location d'équipements lourds et de matériel de construction, transport & fret, distribution & livraison locale — pour opérer efficacement et avec fiabilité au Tchad.",
    }}
    belowHero={<ServicesIntro />}
    serviceSlugs={[
      'house-rental',
      'car-rental',
      'heavy-equipment',
      'construction-equipment-rental',
      'transport-freight',
      'distribution',
      'company-formation',
      'hr-services',
      'manpower-hr',
    ]}
  />
);

export default ServicesPage;
