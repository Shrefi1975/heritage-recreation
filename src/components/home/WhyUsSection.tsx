import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Award, MapPin, Shield, HeadphonesIcon, ArrowLeft, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const WhyUsSection: React.FC = () => {
  const { t, dir, language } = useLanguage();
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  const sectionTitle = language === 'ar' ? 'لماذا GBS — شريكك الموثوق للتوريد والخدمات اللوجستية'
    : language === 'zh' ? '为什么选择GBS — 您可信赖的供应和物流合作伙伴'
    : language === 'fr' ? 'Pourquoi GBS — Votre partenaire fiable pour l\'approvisionnement et la logistique'
    : 'Why GBS — Your Trusted Partner for Supply and Logistics';

  const sectionSubtitle = language === 'ar' ? 'التميز في الاداء ، الثقة في الشراكة ، الالتزام الحقيقي بنجاحكم'
    : language === 'zh' ? '卓越表现、信任合作、致力于您的成功'
    : language === 'fr' ? 'Excellence en performance, confiance en partenariat, engagement réel pour votre succès'
    : 'Excellence in performance, trust in partnership, and real commitment to your success';

  const pick = (ar: string, en: string, fr: string, zh: string) =>
    language === 'ar' ? ar : language === 'fr' ? fr : language === 'zh' ? zh : en;

  const advantages = [
    {
      icon: Award,
      title: pick('خبرة متخصصة متراكمة', 'Accumulated Specialized Experience', 'Expérience spécialisée accumulée', '专业经验积累'),
      description: pick(
        'خبرة واسعة في أكثر من 12 قطاعاً حيوياً، مدعومة بسجل قوي من المشاريع الناجحة.',
        'Extensive experience in over 12 vital sectors, backed by a strong track record of successful projects.',
        'Une vaste expérience dans plus de 12 secteurs vitaux, appuyée par un solide historique de projets réussis.',
        '在超过12个关键行业积累了丰富经验,拥有众多成功项目的坚实业绩。'
      ),
    },
    {
      icon: MapPin,
      title: pick('تغطية جغرافية استراتيجية', 'Strategic Geographic Coverage', 'Couverture géographique stratégique', '战略性地理覆盖'),
      description: pick(
        'شبكة لوجستية وشركاء ميدانيون تضمن وصولاً سريعاً وموثوقاً إلى مواقع متعددة.',
        'Logistics network and field partners ensuring fast and reliable access to multiple locations.',
        'Réseau logistique et partenaires de terrain garantissant un accès rapide et fiable à plusieurs emplacements.',
        '物流网络和现场合作伙伴,确保快速可靠地抵达多个地点。'
      ),
    },
    {
      icon: Shield,
      title: pick('معايير جودة عالمية', 'Global Quality Standards', 'Normes de qualité mondiales', '全球质量标准'),
      description: pick(
        'نلتزم بالتعامل مع موردين معتمدين وفحوصات صارمة تضمن مستويات جودة وأمان عالية.',
        'We work with certified suppliers and strict inspections ensuring high quality and safety levels.',
        'Nous collaborons avec des fournisseurs certifiés et effectuons des inspections rigoureuses garantissant des niveaux élevés de qualité et de sécurité.',
        '我们与认证供应商合作,并进行严格检查,确保高水平的质量与安全。'
      ),
    },
    {
      icon: HeadphonesIcon,
      title: pick('دعم فني متواصل', 'Continuous Technical Support', 'Support technique continu', '持续技术支持'),
      description: pick(
        'فريق مؤهل متاح لتقديم دعم فني واستشارات تشغيلية بسرعة وفعالية.',
        'Qualified team available to provide technical support and operational consultations quickly and effectively.',
        'Équipe qualifiée disponible pour fournir un support technique et des consultations opérationnelles rapidement et efficacement.',
        '专业团队随时提供快速有效的技术支持和运营咨询。'
      ),
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-primary mb-4 md:text-3xl">
            {sectionTitle}
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-popover-foreground">
            {sectionSubtitle}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 card-hover border border-border text-center"
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-bold text-lg text-primary mb-2">
                  {advantage.title}
                </h3>
                <p className="text-sm text-popover-foreground">
                  {advantage.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-10"
        >
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link to="/why-us">
              {pick('اعرف المزيد', 'Learn More', 'En savoir plus', '了解更多')}
              <ArrowIcon className="h-5 w-5 ms-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUsSection;
