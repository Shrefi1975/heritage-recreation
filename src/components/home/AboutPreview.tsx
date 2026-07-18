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
      'شركة GBS هي شركة متعددة الأنشطة تعمل في مجالات: التجارة العامة، الاستيراد والتصدير، التوريدات، الخدمات، البناء والمقاولات، تكنولوجيا المعلومات، الطاقة الشمسية والمعدات الطبية والأدوية. مقرها في جمهورية تشاد مدينة نجامينا، وتدعم الشركات والمنظمات والمشاريع بحلول موثوقة عبر مجالاتها المختلفة وشراكاتها المحلية والدولية.',
    ],
    en: [
      'GBS is a multi-activity company specialized in supply, trade, and services, headquartered in Chad — supporting companies, NGOs, and development projects with reliable solutions across six core areas.',
    ],
    fr: [
      "GBS est une société multi-activités spécialisée dans l'approvisionnement, le commerce et les services, basée au Tchad — accompagnant entreprises, ONG et projets de développement avec des solutions fiables dans six domaines clés.",
    ],
    zh: [
      'GBS 是一家总部位于乍得的多元业务公司，专注于供应、贸易和服务，在六大核心领域为企业、非政府组织和发展项目提供可靠的解决方案。',
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
