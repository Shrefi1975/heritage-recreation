import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Smartphone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/logo.png';
const Footer: React.FC = () => {
  const {
    t,
    language
  } = useLanguage();
  const tr = (ar: string, en: string, zh: string, fr: string) => {
    switch (language) {
      case 'ar': return ar;
      case 'zh': return zh;
      case 'fr': return fr;
      default: return en;
    }
  };

  // Match Header navigation exactly
  const quickLinks = [
    { path: '/', label: tr('الرئيسية', 'Home', '首页', 'Accueil') },
    { path: '/general-trade', label: tr('التجارة العامة والاستيراد والتصدير', 'General Trade, Import & Export', '综合贸易、进口与出口', 'Commerce Général, Import & Export') },
    { path: '/supplies', label: tr('التوريدات', 'Supplies', '供应', 'Approvisionnements') },
    { path: '/services', label: tr('الخدمات', 'Services', '服务', 'Services') },
    { path: '/construction', label: tr('البناء والمقاولات', 'Construction', '建筑与承包', 'Construction') },
    { path: '/medical', label: tr('المعدات الطبية والأدوية', 'Medical Equipment & Pharma', '医疗设备与药品', 'Équipements Médicaux & Pharma') },
    { path: '/it', label: tr('تكنولوجيا المعلومات', 'IT', 'IT', 'IT') },
    { path: '/solar', label: tr('الطاقة الشمسية', 'Solar', '太阳能', 'Solaire') },
    { path: '/partnerships', label: tr('شراكاتنا', 'Partnerships', '合作伙伴', 'Partenariats') },
    { path: '/blog', label: tr('المدونة', 'Blog', '博客', 'Blog') },
    { path: '/contact', label: tr('اتصل بنا', 'Contact Us', '联系我们', 'Contactez-nous') },
  ];
  return <footer className="bg-gradient-to-b from-primary via-[hsl(218,55%,22%)] to-[hsl(218,60%,15%)] text-primary-foreground">
      <div className="section-container py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img src={logo} alt="Logo" className="h-20 w-auto" style={{
              filter: 'brightness(0) saturate(100%) invert(55%) sepia(98%) saturate(456%) hue-rotate(346deg) brightness(99%) contrast(93%)'
            }} />
            </Link>
            <p className="text-base leading-relaxed text-primary-foreground">
              {t.footer.description}
            </p>
            {/* Social Links with Brand Colors */}
            <div className="flex gap-3 mt-6">
              {/* Facebook */}
              <a href="#" aria-label="Facebook" className="w-11 h-11 rounded-full bg-[#1877F2] hover:bg-[#166FE5] hover:scale-110 flex items-center justify-center transition-all duration-300 shadow-lg">
                <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" aria-label="Instagram" className="w-11 h-11 rounded-full bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:scale-110 flex items-center justify-center transition-all duration-300 shadow-lg">
                <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" aria-label="LinkedIn" className="w-11 h-11 rounded-full bg-[#0A66C2] hover:bg-[#004182] hover:scale-110 flex items-center justify-center transition-all duration-300 shadow-lg">
                <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              {/* WhatsApp */}
              <a href="https://wa.me/23565555504" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-11 h-11 rounded-full bg-[#25D366] hover:bg-[#22c55e] hover:scale-110 flex items-center justify-center transition-all duration-300 shadow-lg">
                <svg className="h-5 w-5 text-white" viewBox="0 0 448 512" fill="currentColor">
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
              </a>
              {/* TikTok */}
              <a href="#" aria-label="TikTok" className="w-11 h-11 rounded-full bg-black hover:bg-gray-900 hover:scale-110 flex items-center justify-center transition-all duration-300 shadow-lg">
                <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 relative inline-block text-accent text-lg font-semibold">
              {t.footer.quickLinks}
              <span className="absolute -bottom-2 start-0 w-12 h-1 bg-accent rounded-full" />
            </h3>
            <ul className="space-y-3">
              {quickLinks.map(link => <li key={link.path}>
                  <Link to={link.path} className="transition-colors duration-300 flex items-center gap-2 group text-primary-foreground">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-accent transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-6 relative inline-block text-accent text-lg font-semibold">
              {t.footer.contactUs}
              <span className="absolute -bottom-2 start-0 w-12 h-1 bg-accent rounded-full" />
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium text-white">{t.contact.info.address}</p>
                  <p className="text-white/70 text-sm px-0 mx-[12px]">
                    {language === 'ar' ? 'جمهورية تشاد، مدينة نجامينا، ص.ب. 7514'
                      : language === 'fr' ? 'République du Tchad, N\'Djamena, B.P. 7514'
                      : language === 'zh' ? '乍得共和国,恩贾梅纳,邮政信箱 7514'
                      : 'Republic of Chad, N\'Djamena, P.O. Box 7514'}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                  <Smartphone className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium text-white">{language === 'ar' ? 'محمول' : language === 'fr' ? 'Mobile' : language === 'zh' ? '手机' : 'Mobile'}</p>
                  <a href="https://wa.me/23565555504" className="text-white/70 text-sm hover:text-accent transition-colors block" dir="ltr">
                    +235-65 55 55 04
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium text-white">{language === 'ar' ? 'هاتف ثابت' : language === 'fr' ? 'Ligne fixe' : language === 'zh' ? '固定电话' : 'Landline'}</p>
                  <a href="tel:+23522533242" className="text-white/70 text-sm hover:text-accent transition-colors block" dir="ltr">
                    +235-22 53 32 42
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium text-white">{t.contact.info.email}</p>
                  <a href="mailto:info@globizsupplies.com" className="text-white/70 text-sm hover:text-accent transition-colors">
                    info@globizsupplies.com
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Map Preview */}
          <div>
            <h3 className="mb-6 relative inline-block text-accent text-lg font-semibold">
              {language === 'ar' ? 'موقعنا' : language === 'fr' ? 'Notre emplacement' : language === 'zh' ? '我们的位置' : 'Our Location'}
              <span className="absolute -bottom-2 start-0 w-12 h-1 bg-accent rounded-full" />
            </h3>
            <div className="rounded-xl overflow-hidden h-48 border-2 border-accent/30">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127368.73741!2d15.0277!3d12.1348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x111a858e5ff8e5b5%3A0x8d7c9c3e6f8a1b0!2sN'Djamena%2C%20Chad!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s" width="100%" height="100%" style={{
              border: 0
            }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>

            {/* Chad Flag */}
            <div className="mt-5 flex items-center gap-3">
              <div
                className="w-14 h-9 rounded-md overflow-hidden shadow-lg ring-1 ring-white/20 flex-shrink-0"
                role="img"
                aria-label="Flag of Chad"
              >
                <div className="flex h-full w-full">
                  <div className="flex-1" style={{ backgroundColor: '#002664' }} />
                  <div className="flex-1" style={{ backgroundColor: '#FECB00' }} />
                  <div className="flex-1" style={{ backgroundColor: '#C60C30' }} />
                </div>
              </div>
              <div className="leading-tight">
                <p className="text-white font-semibold text-sm">
                  {language === 'ar' ? 'جمهورية تشاد'
                    : language === 'fr' ? 'République du Tchad'
                    : language === 'zh' ? '乍得共和国'
                    : 'Republic of Chad'}
                </p>
                <p className="text-white/60 text-xs">
                  {language === 'ar' ? 'وحدة · عمل · تقدّم'
                    : language === 'fr' ? 'Unité · Travail · Progrès'
                    : language === 'zh' ? '团结 · 工作 · 进步'
                    : 'Unity · Work · Progress'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-14 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-start px-[74px]">
            <p className="text-accent font-medium font-serif text-sm">
              © {new Date().getFullYear()}{' '}
              {language === 'ar' ? 'الشركة العالمية للأعمال والتوريدات'
                : language === 'fr' ? 'Global Business and Supplies'
                : language === 'zh' ? '环球商业与供应公司'
                : 'Global Business and Supplies'}.{' '}
              {t.footer.rights}.
            </p>
            <div className="flex items-center gap-4">
              <Link to="/terms" className="text-white/70 hover:text-accent transition-colors text-center text-base">
                {t.nav.terms}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;