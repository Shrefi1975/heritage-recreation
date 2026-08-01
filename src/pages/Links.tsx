import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Home, Car, Truck, Construction, ShieldCheck, Wrench, Globe, MapPin } from 'lucide-react';
import logo from '@/assets/logo-new.png';

const phones = ['+235 65 55 55 04', '+235 66 55 55 04'];

const links = [
  { to: '/real-estate-rental', icon: Home, title: 'إيجار المنازل والعقارات', desc: 'شقق وفلل ومكاتب في أنجمينا' },
  { to: '/car-rental', icon: Car, title: 'تأجير السيارات مع سائق', desc: 'أسطول حديث وخدمة يومية وشهرية' },
  { to: '/heavy-equipment-rental', icon: Wrench, title: 'تأجير المعدات الثقيلة', desc: 'حفارات، لوادر، رافعات وشاحنات' },
  { to: '/transport-cameroon-chad', icon: Truck, title: 'النقل والشحن من الكاميرون إلى تشاد', desc: 'شحن بري آمن وتخليص جمركي' },
  { to: '/security-systems', icon: ShieldCheck, title: 'كاميرات المراقبة وأنظمة الحماية', desc: 'تركيب وصيانة أنظمة الأمن' },
  { to: '/construction-contracting', icon: Construction, title: 'البناء والمقاولات', desc: 'تنفيذ المشاريع والبنية التحتية' },
];

const socials = [
  { label: 'WhatsApp', href: 'https://wa.me/23565555504', bg: 'bg-[#25D366]', path: 'M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z', box: '0 0 448 512' },
  { label: 'Facebook', href: '#', bg: 'bg-[#1877F2]', path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z', box: '0 0 24 24' },
  { label: 'Instagram', href: '#', bg: 'bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737]', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z', box: '0 0 24 24' },
  { label: 'LinkedIn', href: '#', bg: 'bg-[#0A66C2]', path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z', box: '0 0 24 24' },
  { label: 'TikTok', href: '#', bg: 'bg-foreground', path: 'M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z', box: '0 0 24 24' },
];

const Links: React.FC = () => {
  return (
    <div dir="rtl" className="min-h-screen bg-muted/40 font-cairo">
      {/* Header banner */}
      <header className="relative overflow-hidden" style={{ background: 'var(--gradient-primary)' }}>
        <div className="absolute inset-0 opacity-30" style={{ background: 'radial-gradient(600px circle at 20% 0%, hsl(var(--accent)/0.55), transparent 60%)' }} />
        <div className="relative section-container pt-12 pb-24 text-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            src={logo} alt="Global Business & Supplies"
            className="mx-auto h-20 sm:h-24 w-auto drop-shadow-xl"
          />
          <motion.h1
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="mt-4 text-2xl sm:text-3xl font-bold text-primary-foreground">
            الشركة العالمية للأعمال والتوريدات
          </motion.h1>
          <p className="mt-2 text-primary-foreground/80 text-sm sm:text-base">Global Business &amp; Supplies — GBS</p>
          <p className="mt-1 inline-flex items-center gap-1.5 text-primary-foreground/70 text-xs sm:text-sm">
            <MapPin className="h-4 w-4" /> أنجمينا — تشاد
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-10">
            <path d="M0 60L48 55C96 50 192 40 288 35C384 30 480 30 576 33.3C672 36.7 768 43.3 864 45C960 46.7 1056 43.3 1152 38.3C1248 33.3 1344 26.7 1392 23.3L1440 20V60Z" className="fill-muted/40" />
          </svg>
        </div>
      </header>

      <main className="section-container max-w-2xl -mt-6 pb-16">
        {/* Phones */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {phones.map((p) => (
            <a key={p} href={`tel:${p.replace(/\s/g, '')}`}
              className="flex items-center justify-center gap-2 rounded-2xl bg-card border border-border shadow-[var(--shadow-soft)] px-4 py-3.5 font-semibold text-foreground hover:shadow-[var(--shadow-card)] hover:-translate-y-0.5 transition-all">
              <span className="w-9 h-9 rounded-full bg-accent/10 text-accent flex items-center justify-center">
                <Phone className="h-4 w-4" />
              </span>
              <span dir="ltr">{p}</span>
            </a>
          ))}
        </div>

        {/* Links */}
        <h2 className="mt-10 mb-4 text-lg font-bold text-foreground">خدماتنا</h2>
        <div className="space-y-3">
          {links.map((item, i) => (
            <motion.div key={item.to}
              initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}>
              <Link to={item.to}
                className="group flex items-center gap-4 rounded-2xl bg-card border border-border px-4 py-4 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] hover:-translate-y-1 hover:border-accent/50 transition-all duration-300">
                <span className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-accent-foreground" style={{ background: 'var(--gradient-accent)' }}>
                  <item.icon className="h-6 w-6" />
                </span>
                <span className="flex-1 min-w-0">
                  <span className="block font-bold text-foreground group-hover:text-accent transition-colors">{item.title}</span>
                  <span className="block text-sm text-muted-foreground truncate">{item.desc}</span>
                </span>
                <span className="text-muted-foreground group-hover:text-accent transition-all group-hover:-translate-x-1">‹</span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Main site */}
        <Link to="/" className="mt-6 flex items-center justify-center gap-2 rounded-2xl border-2 border-primary/20 bg-primary/5 px-4 py-3.5 font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-all">
          <Globe className="h-5 w-5" /> زيارة الموقع الرسمي
        </Link>

        {/* Socials */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
              className={`w-12 h-12 rounded-full ${s.bg} flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300`}>
              <svg viewBox={s.box} fill="currentColor" className="h-5 w-5 text-background"><path d={s.path} /></svg>
            </a>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Global Business &amp; Supplies
        </p>
      </main>
    </div>
  );
};

export default Links;
