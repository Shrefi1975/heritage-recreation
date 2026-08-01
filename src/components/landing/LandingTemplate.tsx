import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, ArrowLeft, CheckCircle2, Sparkles, type LucideIcon } from 'lucide-react';

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
}

const WA = 'https://wa.me/23565555504';
const TEL = 'tel:+23522533242';

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
    <div dir="rtl" lang="ar" className="min-h-screen bg-background font-[Cairo,sans-serif]">
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
                +235 22 53 32 42
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
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-bold text-white bg-white/10 border border-white/30 backdrop-blur-md hover:bg-white/20 transition-colors"
            >
              نموذج التواصل
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </div>
          <p className="text-white/50 text-xs mt-10">
            Global Business &amp; Supplies — نجامينا، تشاد
          </p>
        </div>
      </section>
    </div>
  );
};

export default LandingTemplate;
