import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Handshake, Globe, TrendingUp, Truck, Factory, ArrowLeft, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const PartnershipsPreview: React.FC = () => {
  const { language, dir } = useLanguage();
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  const t = (ar: string, en: string, fr: string, zh: string) => {
    switch (language) {
      case 'ar': return ar;
      case 'fr': return fr;
      case 'zh': return zh;
      default: return en;
    }
  };

  const sectionTitle = t('شراكاتنا الاستراتيجية', 'Our Strategic Partnerships', 'Nos Partenariats Stratégiques', '我们的战略合作伙伴');
  const sectionBadge = t('شراكات موثوقة', 'Trusted Partnerships', 'Partenariats Fiables', '可信赖的合作');
  const sectionSubtitle = t(
    'نبني شراكات طويلة الأمد مع المصنعين العالميين والموزعين الإقليميين لتقديم قيمة استثنائية في تشاد ووسط أفريقيا.',
    'We build long-term partnerships with global manufacturers and regional distributors to deliver exceptional value in Chad and Central Africa.',
    "Nous bâtissons des partenariats durables avec des fabricants mondiaux et des distributeurs régionaux pour offrir une valeur exceptionnelle au Tchad et en Afrique centrale.",
    '我们与全球制造商和区域分销商建立长期合作伙伴关系，在乍得和中非地区提供卓越价值。'
  );

  const pillars = [
    {
      icon: Factory,
      title: t('شراكات التصنيع', 'Manufacturing', 'Fabrication', '制造合作'),
      desc: t('تعاون مع كبرى المصانع العالمية لمنتجات عالية الجودة.', 'Collaboration with leading global manufacturers for premium products.', "Collaboration avec les grands fabricants mondiaux pour des produits haut de gamme.", '与全球领先制造商合作，提供优质产品。'),
    },
    {
      icon: Truck,
      title: t('شراكات التوزيع', 'Distribution', 'Distribution', '分销合作'),
      desc: t('شبكة توزيع واسعة تغطي تشاد ووسط أفريقيا.', 'Extensive distribution network across Chad and Central Africa.', 'Vaste réseau de distribution au Tchad et en Afrique centrale.', '覆盖乍得和中非的广泛分销网络。'),
    },
    {
      icon: Globe,
      title: t('شراكات دولية', 'International', 'Internationales', '国际合作'),
      desc: t('علاقات تجارية قوية مع آسيا وأوروبا والشرق الأوسط.', 'Strong trade relationships with Asia, Europe, and the Middle East.', "Relations commerciales solides avec l'Asie, l'Europe et le Moyen-Orient.", '与亚洲、欧洲和中东建立牢固的贸易关系。'),
    },
  ];

  const benefits = [
    t('حضور ميداني قوي في تشاد', 'Strong field presence in Chad', 'Forte présence terrain au Tchad', '在乍得拥有强大实地存在'),
    t('خبرة في الاستيراد والتخليص الجمركي', 'Import & customs clearance expertise', 'Expertise en import et dédouanement', '进口和清关专业知识'),
    t('شبكة علاقات مع القطاعين العام والخاص', 'Network across public & private sectors', 'Réseau dans les secteurs public et privé', '公共和私营部门人脉网络'),
    t('قنوات لوجستية موثوقة', 'Reliable logistics channels', 'Canaux logistiques fiables', '可靠的物流渠道'),
  ];

  const stats = [
    { value: '50+', label: t('شريك دولي', 'Partners', 'Partenaires', '合作伙伴') },
    { value: '15+', label: t('دولة', 'Countries', 'Pays', '国家') },
    { value: '13+', label: t('قطاع', 'Sectors', 'Secteurs', '行业') },
    { value: '10+', label: t('سنوات خبرة', 'Years', 'Années', '年经验') },
  ];

  const ctaPrimary = t('اكتشف شراكاتنا', 'Discover Our Partnerships', 'Découvrir nos partenariats', '了解我们的合作');
  const ctaSecondary = t('كن شريكاً', 'Become a Partner', 'Devenir Partenaire', '成为合作伙伴');

  return (
    <section className="relative py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/10 bg-gradient-to-br from-primary via-primary to-[hsl(218,55%,22%)] px-6 py-14 md:px-12 md:py-20 max-w-6xl mx-auto">
          {/* Decorative blobs */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-accent/20 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 w-[28rem] h-[28rem] rounded-full bg-white/5 blur-3xl" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--accent)/0.12),transparent_60%)]" />
          </div>

          <div className="relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 max-w-3xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm border border-accent/40 rounded-full text-accent font-bold text-xs py-1.5 px-3 mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            {sectionBadge}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            {sectionTitle}
          </h2>
          <p className="text-base md:text-lg text-white/85 leading-relaxed">
            {sectionSubtitle}
          </p>
        </motion.div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/20 rounded-2xl p-6 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/20 border border-accent/40 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <p.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-bold text-white text-lg mb-2">{p.title}</h3>
              <p className="text-sm text-white/80 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Benefits + Stats */}
        <div className="grid lg:grid-cols-2 gap-6 mb-10">
          <motion.div
            initial={{ opacity: 0, x: dir === 'rtl' ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-accent/20 border border-accent/40 flex items-center justify-center">
                <Handshake className="h-5 w-5 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-white">
                {t('لماذا الشراكة معنا؟', 'Why Partner With Us?', 'Pourquoi nous choisir ?', '为什么选择我们？')}
              </h3>
            </div>
            <ul className="space-y-3">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-white/90 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: dir === 'rtl' ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 flex flex-col justify-center"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-accent/20 border border-accent/40 flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-white">
                {t('شراكاتنا بالأرقام', 'Our Partnerships in Numbers', 'En chiffres', '合作数据')}
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {stats.map((s, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-xl py-4 px-3 text-center">
                  <div className="text-2xl md:text-3xl font-extrabold text-accent">{s.value}</div>
                  <div className="text-xs text-white/85 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3"
        >
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
            <Link to="/partnerships" className="inline-flex items-center gap-2">
              {ctaPrimary}
              <ArrowIcon className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white/40 hover:bg-white/10 hover:text-white font-bold">
            <a href="#contact">{ctaSecondary}</a>
          </Button>
        </motion.div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default PartnershipsPreview;
