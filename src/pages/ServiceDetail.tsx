import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle2, FileText, MessageCircle, Phone, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { SERVICES, getServiceBySlug, pickText } from '@/data/services';
import TransportRichContent from '@/components/services/TransportRichContent';
import LeasingRichContent from '@/components/services/LeasingRichContent';
import HeavyEquipmentRichContent from '@/components/services/HeavyEquipmentRichContent';

const WHATSAPP_NUMBER = '23565555504';
const buildWhatsAppUrl = (msg: string) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language, dir } = useLanguage();
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;
  const service = getServiceBySlug(slug);

  React.useEffect(() => {
    if (!service) return;
    const title = pickText(language, service.title);
    document.title = `${title} | Global Business & Supplies`;
    const desc = pickText(language, service.description);
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', desc);
  }, [language, service]);

  if (!service) return <Navigate to="/" replace />;

  const Icon = service.icon;
  const title = pickText(language, service.title);
  const tagline = pickText(language, service.tagline);
  const longDescription = pickText(language, service.longDescription);

  const labels = {
    badge: language === 'ar' ? 'خدماتنا الاحترافية' : language === 'zh' ? '我们的专业服务' : language === 'fr' ? 'Nos Services Professionnels' : 'Our Professional Services',
    includes: language === 'ar' ? 'تشمل الخدمة' : language === 'zh' ? '服务内容' : language === 'fr' ? 'Inclus dans le service' : "What's Included",
    benefits: language === 'ar' ? 'الفوائد للعملاء' : language === 'zh' ? '客户利益' : language === 'fr' ? 'Avantages Clients' : 'Client Benefits',
    related: language === 'ar' ? 'خدمات ذات صلة' : language === 'zh' ? '相关服务' : language === 'fr' ? 'Services Connexes' : 'Related Services',
    quote: (service.slug === 'hr-services' || service.slug === 'manpower-hr')
      ? (language === 'ar' ? 'طلب عرض خدمة' : language === 'zh' ? '申请服务' : language === 'fr' ? 'Demander une offre de service' : 'Request a Service')
      : (language === 'ar' ? 'طلب عرض سعر' : language === 'zh' ? '获取报价' : language === 'fr' ? 'Obtenir un devis' : 'Get a Quote'),
    whatsapp: language === 'ar' ? 'واتساب' : 'WhatsApp',
    callUs: language === 'ar' ? 'اتصل بنا' : language === 'zh' ? '联系我们' : language === 'fr' ? 'Nous appeler' : 'Call Us',
    backHome: language === 'ar' ? 'العودة للرئيسية' : language === 'zh' ? '返回首页' : language === 'fr' ? 'Retour accueil' : 'Back to Home',
    overview: language === 'ar' ? 'نظرة عامة' : language === 'zh' ? '概述' : language === 'fr' ? 'Aperçu' : 'Overview',
  };

  const quoteMsg = language === 'ar'
    ? `مرحباً! أرغب في الحصول على عرض سعر لخدمة "${title}". يرجى تزويدي بالتفاصيل والأسعار. شكراً لكم.`
    : language === 'fr' ? `Bonjour ! Je souhaite obtenir un devis pour le service "${title}". Merci de me fournir les détails et les tarifs.`
    : language === 'zh' ? `您好！我想获取"${title}"服务的报价，请提供详细信息和价格。谢谢！`
    : `Hello! I would like to request a quote for the "${title}" service. Please share details and pricing. Thank you.`;
  const whatsappMsg = language === 'ar'
    ? `مرحباً! أنا مهتم بمعرفة المزيد عن خدمة "${title}". هل يمكنكم تزويدي بمزيد من المعلومات؟ شكراً!`
    : language === 'fr' ? `Bonjour ! Je suis intéressé par le service "${title}". Pourriez-vous me donner plus d'informations ? Merci !`
    : language === 'zh' ? `您好！我对"${title}"服务感兴趣，能否提供更多信息？谢谢！`
    : `Hello! I'm interested in learning more about the "${title}" service. Could you please provide more information? Thank you!`;
  const quoteUrl = buildWhatsAppUrl(quoteMsg);
  const whatsappUrl = buildWhatsAppUrl(whatsappMsg);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img src={service.image} alt={title} className="w-full h-full object-cover" loading="eager" fetchPriority="high" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/80 to-[hsl(218,55%,22%)]/90" />
          </div>
          <div className="section-container relative z-10 py-14 md:py-20">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
              <span className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm border border-accent/40 rounded-full text-accent font-bold text-xs py-1.5 px-3 mb-4">
                <Sparkles className="h-3.5 w-3.5" />
                {labels.badge}
              </span>
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">{title}</h1>
              </div>
              <p className="text-base md:text-lg text-accent font-semibold mb-3">{tagline}</p>
              <p className="text-sm md:text-base text-white/90 leading-relaxed mb-6">{pickText(language, service.description)}</p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
                  <a href={quoteUrl} target="_blank" rel="noopener noreferrer">
                    <FileText className="h-5 w-5 me-2" />{labels.quote}
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-white/40 bg-white/10 text-white hover:bg-white hover:text-primary backdrop-blur-sm">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5 me-2" />{labels.whatsapp}
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 lg:py-16 bg-gradient-to-b from-background to-muted/20">
          <div className="section-container max-w-5xl">
            <div className="bg-card border border-border rounded-2xl p-6 md:p-10 shadow-lg space-y-8">
              {/* Overview */}
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">{labels.overview}</h2>
                <p className="text-foreground leading-relaxed">{longDescription}</p>
              </div>

              {/* Includes + Benefits */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-muted/40 rounded-xl p-5">
                  <div className="text-xs font-bold text-primary uppercase tracking-wider mb-3">{labels.includes}</div>
                  <ul className="space-y-2.5">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm">
                        <span className={`shrink-0 w-6 h-6 rounded-full bg-gradient-to-br ${service.gradient} text-white flex items-center justify-center text-[11px] font-bold mt-0.5`}>
                          {i + 1}
                        </span>
                        <span className="text-foreground leading-relaxed">{pickText(language, item)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-muted/40 rounded-xl p-5">
                  <div className="text-xs font-bold text-primary uppercase tracking-wider mb-3">{labels.benefits}</div>
                  <ul className="space-y-2.5">
                    {service.benefits.map((b, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                        <span className="text-foreground leading-relaxed">{pickText(language, b)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 pt-2 border-t border-border">
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <a href={quoteUrl} target="_blank" rel="noopener noreferrer">
                    <FileText className="h-4 w-4 me-1.5" />{labels.quote}
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4 me-1.5" />{labels.whatsapp}
                  </a>
                </Button>
                <Button asChild variant="ghost">
                  <a href="tel:+23565555504" dir="ltr">
                    <Phone className="h-4 w-4 me-1.5" />{labels.callUs}
                  </a>
                </Button>
              </div>
            </div>

            {service.slug === 'transport-freight' && <TransportRichContent />}
            {service.slug === 'leasing' && <LeasingRichContent />}
            {service.slug === 'heavy-equipment' && <HeavyEquipmentRichContent />}

            {/* Related */}
            <div className="mt-10">
              <h3 className="text-lg font-bold text-primary mb-4">{labels.related}</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {service.related.map((rid) => {
                  const r = SERVICES.find((s) => s.slug === rid);
                  if (!r) return null;
                  const RIcon = r.icon;
                  return (
                    <Link
                      key={rid}
                      to={`/services/${rid}`}
                      className="group flex items-center gap-3 bg-card border border-border rounded-xl p-4 hover:border-accent hover:shadow-md transition-all"
                    >
                      <div className={`shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br ${r.gradient} flex items-center justify-center`}>
                        <RIcon className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-primary text-sm group-hover:text-accent transition-colors line-clamp-1">
                          {pickText(language, r.title)}
                        </div>
                        <div className="text-xs text-muted-foreground line-clamp-1">{pickText(language, r.tagline)}</div>
                      </div>
                      <ArrowIcon className="h-4 w-4 text-muted-foreground group-hover:text-accent shrink-0" />
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button asChild variant="ghost">
                <Link to="/">
                  <ArrowIcon className="h-4 w-4 me-1.5 rotate-180" />
                  {labels.backHome}
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ServiceDetail;
