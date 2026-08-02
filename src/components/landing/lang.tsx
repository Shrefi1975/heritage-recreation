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
  waFloat: string;
  waPage: (page: string) => string;
  langLabel: string;
  location: string;
  emailLabel: string;
  callLabel: string;
  companyName: string;
}> = {
  ar: {
    contactForm: 'نموذج التواصل',
    waFloat:
      'مرحباً! لقد ضغطت على أيقونة الواتساب من موقعكم الإلكتروني (Global Business & Supplies). أرغب في التواصل معكم ومعرفة المزيد عن خدماتكم. شكراً لكم!',
    waPage: (page) =>
      `مرحباً! لقد زرت صفحة "${page}" على موقع Global Business & Supplies (GBS)، وأرغب في الاستفسار عن الخدمة والحصول على عرض سعر. شكراً لكم!`,
    langLabel: 'اللغة',
    location: 'نجامينا، تشاد',
    emailLabel: 'البريد الإلكتروني',
    callLabel: 'اتصل بنا',
    companyName: 'Global Business & Supplies',
  },
  en: {
    contactForm: 'Contact form',
    waFloat:
      'Hello! I clicked the WhatsApp icon on your website (Global Business & Supplies). I would like to get in touch and learn more about your services. Thank you!',
    waPage: (page) =>
      `Hello! I visited the "${page}" page on the Global Business & Supplies (GBS) website and would like to enquire about the service and request a quote. Thank you!`,
    langLabel: 'Language',
    location: "N'Djamena, Chad",
    emailLabel: 'Email',
    callLabel: 'Call us',
    companyName: 'Global Business & Supplies',
  },
  fr: {
    contactForm: 'Formulaire de contact',
    waFloat:
      "Bonjour ! J'ai cliqué sur l'icône WhatsApp de votre site (Global Business & Supplies). Je souhaite vous contacter et en savoir plus sur vos services. Merci !",
    waPage: (page) =>
      `Bonjour ! J'ai consulté la page « ${page} » du site Global Business & Supplies (GBS) et je souhaite me renseigner sur ce service et recevoir un devis. Merci !`,
    langLabel: 'Langue',
    location: "N'Djamena, Tchad",
    emailLabel: 'E-mail',
    callLabel: 'Appelez-nous',
    companyName: 'Global Business & Supplies',
  },
  zh: {
    contactForm: '联系表单',
    waFloat:
      '您好！我在贵公司网站（Global Business & Supplies）点击了 WhatsApp 图标，希望与您联系并了解更多服务信息。谢谢！',
    waPage: (page) =>
      `您好！我浏览了 Global Business & Supplies (GBS) 网站的「${page}」页面，希望咨询该服务并获取报价。谢谢！`,
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
