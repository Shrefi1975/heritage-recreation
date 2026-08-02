import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Eye, Target, Handshake } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import aboutTeamImg from '@/assets/about-partnership.png';

const AboutPreview: React.FC = () => {
  const { t, dir, language } = useLanguage();

  const aboutTitle = language === 'ar' ? 'من نحن'
    : language === 'zh' ? '关于我们'
    : language === 'fr' ? 'À propos de nous'
    : 'About Us';

  const paragraphs: Record<string, string[]> = {
    ar: [
      'Global Business & Supplies (GBS) هي شركة متخصصة في التجارة العامة، والاستيراد والتصدير، والتوريد، والخدمات اللوجستية، والبناء والمقاولات، والحلول التقنية في تشاد. يقع مقر الشركة في أنجمينا، وتقدم خدماتها للقطاعين الحكومي والخاص، والمنظمات الدولية، والمنظمات غير الحكومية، والشركات المحلية والعالمية، مع تغطية تمتد إلى تشاد ومنطقة وسط أفريقيا.',
      'تعتمد الشركة على شبكة واسعة من الشراكات مع الشركات المحلية والإقليمية والدولية، مما يمكنها من توفير منتجات وخدمات عالية الجودة وفق المعايير العالمية. كما تعمل الشركة كشريك محلي للشركات العالمية الراغبة في دخول السوق التشادية والتوسع في أسواق وسط أفريقيا، من خلال التمثيل التجاري، وتطوير الأعمال، والتسويق، والتوزيع، والخدمات اللوجستية، وإدارة سلسلة الإمداد، وتنفيذ المشاريع.',
    ],
    en: [
      'Global Business & Supplies (GBS) is a company specialized in general trade, import and export, supply, logistics, construction and contracting, and technology solutions in Chad. Headquartered in N\'Djamena, it serves the public and private sectors, international organizations, NGOs, and local and global companies across Chad and Central Africa.',
      'GBS relies on a broad network of local, regional, and international partnerships, and acts as the local partner for global companies entering the Chadian market — through commercial representation, business development, marketing, distribution, logistics, supply chain management, and project execution.',
    ],
    fr: [
      "Global Business & Supplies (GBS) est une société spécialisée dans le commerce général, l'import-export, l'approvisionnement, la logistique, la construction et les solutions technologiques au Tchad. Basée à N'Djamena, elle sert les secteurs public et privé, les organisations internationales, les ONG et les entreprises locales et mondiales.",
      "GBS s'appuie sur un large réseau de partenariats locaux, régionaux et internationaux et agit comme partenaire local des entreprises mondiales entrant sur le marché tchadien : représentation commerciale, développement des affaires, marketing, distribution, logistique et exécution de projets.",
    ],
    zh: [
      'Global Business & Supplies (GBS) 是一家专注于乍得综合贸易、进出口、供应、物流、建筑承包与技术解决方案的公司。公司总部位于恩贾梅纳，为公共和私营部门、国际组织、非政府组织以及本地和全球企业提供服务，业务覆盖乍得及中非地区。',
      'GBS 依托广泛的本地、地区与国际合作网络，并作为国际企业进入乍得市场的本地合作伙伴，提供商业代理、业务拓展、市场营销、分销、物流、供应链管理与项目执行等服务。',
    ],
  };

  const learnMore = language === 'ar' ? 'اعرف المزيد' : language === 'zh' ? '了解更多' : language === 'fr' ? 'En savoir plus' : 'Learn More';

  const lang = (paragraphs[language] ? language : 'en') as keyof typeof paragraphs;

  const visionLabel = getText(language, 'رؤيتنا', 'Our Vision', '我们的愿景', 'Notre Vision');
  const missionLabel = getText(language, 'رسالتنا', 'Our Mission', '我们的使命', 'Notre Mission');

  const visionText = getText(language,
    'أن نكون شريكاً تجارياً موثوقاً في تشاد وجسراً يربط الأسواق المحلية بالموردين الدوليّين.',
    'To be the leading supply and logistics partner in Chad and a trusted bridge connecting local markets with international suppliers.',
    '成为乍得领先的供应与物流合作伙伴，并作为连接本地市场与国际供应商的可信桥梁。',
    "Être le premier partenaire d'approvisionnement et de logistique au Tchad et un pont fiable entre les marchés locaux et les fournisseurs internationaux."
  );
  const missionText = getText(language,
    'تقديم حلول توريد وتوزيع وخدمات متكاملة بأعلى معايير الجودة والكفاءة لدعم نمو الشركات والمشاريع في تشاد.',
    'Deliver integrated supply, distribution, and service solutions with the highest standards of quality and efficiency to power growth for companies and projects in Chad.',
    '以最高的质量与效率标准提供综合供应、分销与服务解决方案，助力乍得企业和项目的发展。',
    "Offrir des solutions intégrées d'approvisionnement, de distribution et de services aux plus hauts standards pour soutenir la croissance des entreprises et projets au Tchad."
  );

  function getText(language: string, ar: string, en: string, zh: string, fr: string) {
    switch (language) {
      case 'ar': return ar;
      case 'zh': return zh;
      case 'fr': return fr;
      default: return en;
    }
  }

  return (
    <section className="py-16 lg:py-24">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: dir === 'rtl' ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-1"
          >
            <h2 className="text-3xl font-bold text-primary mb-6 md:text-3xl">
              {aboutTitle}
            </h2>
            <div className="mb-6 text-popover-foreground leading-relaxed text-base space-y-3">
              {paragraphs[lang].map((p, i) => <p key={i}>{p}</p>)}
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-card border border-border rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="inline-flex w-10 h-10 rounded-lg bg-primary/10 items-center justify-center mb-3">
                  <Eye className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-bold text-primary mb-2">{visionLabel}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{visionText}</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="inline-flex w-10 h-10 rounded-lg bg-accent/10 items-center justify-center mb-3">
                  <Target className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-bold text-primary mb-2">{missionLabel}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{missionText}</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link to="/about">{learnMore}</Link>
              </Button>
              <Link
                to="/partnerships"
                aria-label={getText(language, 'شراكاتنا', 'Our Partnerships', '我们的合作伙伴', 'Nos Partenariats')}
                title={getText(language, 'شراكاتنا', 'Our Partnerships', '我们的合作伙伴', 'Nos Partenariats')}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-accent/30 bg-accent/5 hover:bg-accent/10 text-accent font-semibold text-sm transition-colors"
              >
                <Handshake className="h-4 w-4" />
                <span>{getText(language, 'شراكاتنا', 'Partnerships', '合作伙伴', 'Partenariats')}</span>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: dir === 'rtl' ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src={aboutTeamImg} alt="Our Team" className="w-full h-[450px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
