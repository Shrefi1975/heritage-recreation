import React from 'react';

export type LandingLang = 'ar' | 'en' | 'fr' | 'zh';

export const LANDING_LANGS: { code: LandingLang; label: string; short: string; dir: 'rtl' | 'ltr' }[] = [
  { code: 'ar', label: 'العربية', short: 'AR', dir: 'rtl' },
  { code: 'en', label: 'English', short: 'EN', dir: 'ltr' },
  { code: 'fr', label: 'Français', short: 'FR', dir: 'ltr' },
  { code: 'zh', label: '简体中文', short: '中文', dir: 'ltr' },
];

const STORAGE_KEY = 'gbs-landing-lang';

export function useLandingLang() {
  const [lang, setLangState] = React.useState<LandingLang>(() => {
    if (typeof window === 'undefined') return 'ar';
    const saved = window.localStorage.getItem(STORAGE_KEY) as LandingLang | null;
    if (saved && LANDING_LANGS.some((l) => l.code === saved)) return saved;
    return 'ar';
  });

  const setLang = React.useCallback((next: LandingLang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  return { lang, setLang };
}

export const dirOf = (lang: LandingLang): 'rtl' | 'ltr' => (lang === 'ar' ? 'rtl' : 'ltr');

/** Template-level UI strings (not page content). */
export const landingUI: Record<LandingLang, {
  contactForm: string;
  waFloat: (page: string) => string;
  waPage: (page: string) => string;
  langLabel: string;
  location: string;
  emailLabel: string;
  callLabel: string;
  companyName: string;
}> = {
  ar: {
    contactForm: 'نموذج التواصل',
    waFloat: (page) =>
      `مرحبًا، أنا مهتم بخدمة ${page}، وقد تواصلت معكم من صفحة ${page} على موقع Global Business & Supplies (GBS). أرغب في مزيد من التفاصيل وعرض سعر. شكرًا لكم!`,
    waPage: (page) =>
      `مرحبًا، أنا مهتم بخدمة ${page}، وقد تواصلت معكم من صفحة ${page} على موقع Global Business & Supplies (GBS). أرغب في مزيد من التفاصيل وعرض سعر. شكرًا لكم!`,
    langLabel: 'اللغة',
    location: 'نجامينا، تشاد',
    emailLabel: 'البريد الإلكتروني',
    callLabel: 'اتصل بنا',
    companyName: 'Global Business & Supplies',
  },
  en: {
    contactForm: 'Contact form',
    waFloat: (page) =>
      `Hello, I am interested in the ${page} service, and I am contacting you from the ${page} page on the Global Business & Supplies (GBS) website. I would like more details and a quote. Thank you!`,
    waPage: (page) =>
      `Hello, I am interested in the ${page} service, and I am contacting you from the ${page} page on the Global Business & Supplies (GBS) website. I would like more details and a quote. Thank you!`,
    langLabel: 'Language',
    location: "N'Djamena, Chad",
    emailLabel: 'Email',
    callLabel: 'Call us',
    companyName: 'Global Business & Supplies',
  },
  fr: {
    contactForm: 'Formulaire de contact',
    waFloat: (page) =>
      `Bonjour, je suis intéressé par le service ${page}, et je vous contacte depuis la page ${page} du site Global Business & Supplies (GBS). Je souhaite obtenir plus de détails et un devis. Merci !`,
    waPage: (page) =>
      `Bonjour, je suis intéressé par le service ${page}, et je vous contacte depuis la page ${page} du site Global Business & Supplies (GBS). Je souhaite obtenir plus de détails et un devis. Merci !`,
    langLabel: 'Langue',
    location: "N'Djamena, Tchad",
    emailLabel: 'E-mail',
    callLabel: 'Appelez-nous',
    companyName: 'Global Business & Supplies',
  },
  zh: {
    contactForm: '联系表单',
    waFloat: (page) =>
      `您好，我对「${page}」服务很感兴趣，我是通过 Global Business & Supplies (GBS) 网站的「${page}」页面联系您的。希望了解更多详情并获取报价。谢谢！`,
    waPage: (page) =>
      `您好，我对「${page}」服务很感兴趣，我是通过 Global Business & Supplies (GBS) 网站的「${page}」页面联系您的。希望了解更多详情并获取报价。谢谢！`,
    langLabel: '语言',
    location: '乍得，恩贾梅纳',
    emailLabel: '电子邮箱',
    callLabel: '致电我们',
    companyName: '环球商业与供应有限公司 (GBS)',
  },
};

export const LandingLangSwitcher: React.FC<{
  lang: LandingLang;
  setLang: (l: LandingLang) => void;
  className?: string;
}> = ({ lang, setLang, className = '' }) => (
  <div
    className={`inline-flex items-center gap-1 rounded-full bg-white/10 backdrop-blur-md border border-white/25 p-1 ${className}`}
    role="group"
    aria-label={landingUI[lang].langLabel}
  >
    {LANDING_LANGS.map((l) => (
      <button
        key={l.code}
        type="button"
        onClick={() => setLang(l.code)}
        aria-pressed={lang === l.code}
        className={`px-3 py-1.5 rounded-full text-xs font-bold transition-colors ${
          lang === l.code
            ? 'bg-white text-primary shadow-sm'
            : 'text-white/80 hover:text-white hover:bg-white/10'
        }`}
      >
        {l.short}
      </button>
    ))}
  </div>
);

export type LandingPageKey =
  | 'real-estate'
  | 'car'
  | 'heavy'
  | 'transport'
  | 'security'
  | 'construction';

/** Human-readable landing page names used inside WhatsApp messages. */
export const landingPageNames: Record<LandingPageKey, Record<LandingLang, string>> = {
  'real-estate': {
    ar: 'إيجار المنازل والعقارات',
    en: 'Property & Home Rental',
    fr: 'Location de maisons et biens immobiliers',
    zh: '房屋与房产租赁',
  },
  car: {
    ar: 'تأجير السيارات',
    en: 'Car Rental',
    fr: 'Location de voitures',
    zh: '汽车租赁',
  },
  heavy: {
    ar: 'تأجير المعدات الثقيلة',
    en: 'Heavy Equipment Rental',
    fr: "Location d'engins lourds",
    zh: '重型设备租赁',
  },
  transport: {
    ar: 'النقل والشحن من الكاميرون إلى تشاد',
    en: 'Transport & Freight from Cameroon to Chad',
    fr: 'Transport et fret du Cameroun vers le Tchad',
    zh: '喀麦隆至乍得运输与货运',
  },
  security: {
    ar: 'كاميرات المراقبة وأنظمة الحماية',
    en: 'CCTV & Security Systems',
    fr: 'Vidéosurveillance et systèmes de sécurité',
    zh: '监控摄像与安防系统',
  },
  construction: {
    ar: 'البناء والمقاولات',
    en: 'Construction & Contracting',
    fr: 'Construction et travaux',
    zh: '建筑与工程承包',
  },
};
