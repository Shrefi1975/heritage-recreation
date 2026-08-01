import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, ArrowLeft, CheckCircle2, Sparkles, type LucideIcon } from 'lucide-react';
import gbsLogo from '@/assets/logo-new.png';

export interface LandingBenefit {
  icon: LucideIcon;
  title: string;
  text: string;
}

export interface LandingStep {
  title: string;
  text: string;
}

export interface LandingTemplateProps {
  badge: string;
  h1: string;
  subtitle: string;
  ctaLabel: string;
  heroImage: string;
  accentClass: string; // tailwind gradient e.g. "from-emerald-500 to-teal-600"
  stats: { value: string; label: string }[];
  benefitsTitle: string;
  benefitsSubtitle: string;
  benefits: LandingBenefit[];
  detailsTitle: string;
  detailsText: string;
  detailsImage: string;
  detailsList: string[];
  stepsTitle: string;
  steps: LandingStep[];
  finalTitle: string;
  finalText: string;
  metaTitle: string;
  metaDescription: string;
  contactHref?: string;
  seoTitle: string;
  seoText: string;
}

const WA = 'https://wa.me/23565555504';
const TEL = 'tel:+23565555504';
const WA_FLOAT =
  'https://wa.me/23565555504?text=' +
  encodeURIComponent(
    'مرحباً! لقد ضغطت على أيقونة الواتساب من موقعكم الإلكتروني (Global Business & Supplies). أرغب في التواصل معكم ومعرفة المزيد عن خدماتكم. شكراً لكم!'
  );

const LandingTemplate: React.FC<LandingTemplateProps> = (p) => {
  React.useEffect(() => {
    document.title = p.metaTitle;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', p.metaDescription);
  }, [p.metaTitle, p.metaDescription]);

  return (
    <div dir="rtl" lang="ar" className="min-h-screen bg-background font-cairo">

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={p.heroImage}
            alt={p.h1}
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-primary/95 via-primary/80 to-primary/40" />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-5 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-3 bg-white/95 backdrop-blur-md rounded-2xl px-5 py-3 mb-7 shadow-[0_12px_35px_-12px_rgba(0,0,0,0.6)]">
              <img
                src={gbsLogo}
                alt="Global Business & Supplies"
                className="h-12 md:h-14 w-auto object-contain"
                loading="eager"
              />
            </div>

            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/25 rounded-full text-white font-semibold text-xs py-2 px-4 mb-6">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              {p.badge}
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.2] mb-5">
              {p.h1}
            </h1>
            <p className="text-base md:text-xl text-white/85 leading-relaxed mb-8">{p.subtitle}</p>

            <div className="flex flex-wrap gap-3">
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 rounded-full px-7 py-4 font-bold text-white text-sm md:text-base bg-gradient-to-l ${p.accentClass} shadow-[0_10px_30px_-8px_rgba(0,0,0,0.6)] hover:scale-105 transition-transform`}
              >
                <MessageCircle className="h-5 w-5" />
                {p.ctaLabel}
              </a>
              <a
                href={TEL}
                className="inline-flex items-center gap-2 rounded-full px-7 py-4 font-bold text-white text-sm md:text-base bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 transition-colors"
                dir="ltr"
              >
                <Phone className="h-5 w-5" />
                +235-65 55 55 04
              </a>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-14 max-w-3xl"
          >
            {p.stats.map((s) => (
              <div
                key={s.label}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-center"
              >
                <div className="text-2xl md:text-3xl font-extrabold text-accent">{s.value}</div>
                <div className="text-xs md:text-sm text-white/80 mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SEO INTRO */}
      <section className="py-14 md:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-5">
          <h2 className="text-xl md:text-3xl font-extrabold text-primary mb-5 leading-snug">
            {p.seoTitle}
          </h2>
          <p className="text-muted-foreground leading-loose text-sm md:text-base">{p.seoText}</p>
        </div>
      </section>



      {/* BENEFITS */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/40">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-4xl font-extrabold text-primary mb-4">{p.benefitsTitle}</h2>
            <p className="text-muted-foreground leading-relaxed">{p.benefitsSubtitle}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {p.benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="group bg-card rounded-3xl p-6 border border-border shadow-[0_10px_40px_-24px_hsl(var(--primary)/0.5)] hover:shadow-[0_20px_50px_-20px_hsl(var(--primary)/0.35)] hover:-translate-y-1 transition-all duration-300"
                >
                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${p.accentClass} flex items-center justify-center shadow-md mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-primary text-lg mb-2 leading-snug">{b.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{b.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DETAILS */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-4xl font-extrabold text-primary mb-5 leading-snug">
              {p.detailsTitle}
            </h2>
            <p className="text-muted-foreground leading-loose mb-7">{p.detailsText}</p>
            <ul className="space-y-3">
              {p.detailsList.map((d) => (
                <li key={d} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm md:text-base leading-relaxed">{d}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className={`absolute -inset-3 rounded-[2rem] bg-gradient-to-br ${p.accentClass} opacity-15 blur-2xl`} />
            <img
              src={p.detailsImage}
              alt={p.detailsTitle}
              loading="lazy"
              className="relative rounded-[2rem] w-full h-[320px] md:h-[440px] object-cover shadow-[0_30px_60px_-30px_hsl(var(--primary)/0.6)]"
            />
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 md:py-24 bg-muted/40">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-2xl md:text-4xl font-extrabold text-primary text-center mb-12">
            {p.stepsTitle}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {p.steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="relative bg-card rounded-3xl p-6 border border-border shadow-sm hover:shadow-lg transition-shadow"
              >
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${p.accentClass} text-white font-extrabold flex items-center justify-center mb-4`}
                >
                  {i + 1}
                </div>
                <h3 className="font-bold text-primary mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-[image:var(--gradient-primary)]" />
        <div className={`absolute -top-24 -start-24 w-80 h-80 rounded-full bg-gradient-to-br ${p.accentClass} opacity-30 blur-3xl`} />
        <div className="relative z-10 max-w-3xl mx-auto px-5 text-center">
          <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-5 leading-snug">{p.finalTitle}</h2>
          <p className="text-white/80 leading-relaxed mb-9">{p.finalText}</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 rounded-full px-8 py-4 font-bold text-white bg-gradient-to-l ${p.accentClass} shadow-xl hover:scale-105 transition-transform`}
            >
              <MessageCircle className="h-5 w-5" />
              {p.ctaLabel}
            </a>
            {p.contactHref ? (
              <a
                href={p.contactHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-bold text-white bg-white/10 border border-white/30 backdrop-blur-md hover:bg-white/20 transition-colors"
              >
                نموذج التواصل
                <ArrowLeft className="h-5 w-5" />
              </a>
            ) : (
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-bold text-white bg-white/10 border border-white/30 backdrop-blur-md hover:bg-white/20 transition-colors"
              >
                نموذج التواصل
                <ArrowLeft className="h-5 w-5" />
              </Link>
            )}
          </div>
          <p className="text-white/50 text-xs mt-10">
            Global Business &amp; Supplies — نجامينا، تشاد
          </p>
        </div>
      </section>

      {/* WHATSAPP FLOATING BUTTON */}
      <a
        href={WA_FLOAT}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float animate-whatsapp-pulse"
        aria-label="Contact via WhatsApp"
      >
        <svg viewBox="0 0 448 512" className="h-8 w-8" fill="white">
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
        </svg>
      </a>
    </div>

  );
};

export default LandingTemplate;
