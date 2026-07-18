import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import logo from '@/assets/logo-new.png';

const languageOptions = [
  { code: 'ar' as const, label: 'AR' },
  { code: 'en' as const, label: 'EN' },
  { code: 'zh' as const, label: '中文' },
  { code: 'fr' as const, label: 'FR' },
];

const Header: React.FC = () => {
  const { language, setLanguage, dir } = useLanguage();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tr = (ar: string, en: string, zh: string, fr: string) => {
    switch (language) {
      case 'ar': return ar;
      case 'zh': return zh;
      case 'fr': return fr;
      default: return en;
    }
  };

  const navItems = [
    { path: '/', label: tr('الرئيسية', 'Home', '首页', 'Accueil') },
    { path: '/general-trade', label: tr('التجارة العامة والاستيراد والتصدير', 'General Trade, Import & Export', '综合贸易、进口与出口', 'Commerce Général, Import & Export') },
    { path: '/supplies', label: tr('التوريدات', 'Supplies', '供应', 'Approvisionnements') },
    { path: '/services', label: tr('الخدمات', 'Services', '服务', 'Services') },
    { path: '/construction', label: tr('البناء والمقاولات', 'Construction', '建筑与承包', 'Construction') },
    { path: '/medical', label: tr('المعدات الطبية والأدوية', 'Medical Equipment & Pharma', '医疗设备与药品', 'Équipements Médicaux & Pharma') },
    { path: '/it', label: tr('تكنولوجيا المعلومات', 'IT', 'IT', 'IT') },
    { path: '/solar', label: tr('الطاقة الشمسية', 'Solar', '太阳能', 'Solaire') },
  ];

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
      <div className="bg-primary">
        <div className="section-container">
          <div className="flex h-14 sm:h-16 items-center justify-between">
            <Link to="/" className="flex items-center gap-2 sm:gap-3 group">
              <div className="relative">
                <img
                  src={logo}
                  alt="Global Business and Supplies"
                  className="relative h-9 sm:h-11 md:h-12 w-auto transition-transform duration-300 group-hover:scale-105"
                  style={{
                    filter:
                      'drop-shadow(1px 1px 0 rgba(255,255,255,0.35)) drop-shadow(-1px -1px 0 rgba(0,0,0,0.35)) drop-shadow(0 4px 10px rgba(0,0,0,0.35))',
                  }}
                />
              </div>
              <span className="text-primary-foreground font-bold text-[10px] sm:text-sm md:text-base leading-tight block max-w-[110px] sm:max-w-none">
                {language === 'ar' ? 'الشركة العالمية للأعمال والتوريدات' : 'Global Business & Supplies'}
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-0.5">
              {navItems.map((item) => (
                <Link key={item.path} to={item.path}
                  className={`relative px-2 xl:px-2.5 py-2 text-[13px] xl:text-sm font-medium transition-all rounded-lg whitespace-nowrap ${
                    isActive(item.path) ? 'text-white bg-accent' : 'text-primary-foreground bg-primary hover:bg-white/10'
                  }`}>
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2 sm:gap-3">
              <div className="hidden sm:flex items-center gap-0.5 bg-white/10 rounded-lg p-0.5">
                {languageOptions.map((option) => (
                  <button key={option.code} onClick={() => setLanguage(option.code)}
                    className={`px-2 py-1.5 rounded-md text-xs font-bold transition-all duration-200 ${
                      language === option.code ? 'bg-accent text-white shadow-sm' : 'hover:bg-white/10 text-primary-foreground/70'
                    }`}>
                    {option.label}
                  </button>
                ))}
              </div>

              <div className="sm:hidden">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="gap-1 border-white/30 font-bold text-xs px-2 text-white bg-white/10 hover:bg-white/20">
                      {languageOptions.find(opt => opt.code === language)?.label}
                      <ChevronDown className="h-3 w-3" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align={dir === 'rtl' ? 'start' : 'end'} className="min-w-[80px] bg-popover">
                    {languageOptions.map((option) => (
                      <DropdownMenuItem key={option.code} onClick={() => setLanguage(option.code)}
                        className={`cursor-pointer font-bold ${language === option.code ? 'bg-accent/10 text-accent' : ''}`}>
                        {option.label}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <Button variant="ghost" size="icon" className="lg:hidden hover:bg-white/10 h-9 w-9 text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
          className="lg:hidden border-t border-white/10 bg-primary shadow-lg">
          <nav className="section-container py-3 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-2.5 rounded-lg transition-colors font-medium text-sm ${
                  isActive(item.path) ? 'bg-accent text-white' : 'hover:bg-white/10 text-primary-foreground/80'
                }`}>
                {item.label}
              </Link>
            ))}
            <Link to="/partnerships" onClick={() => setIsMenuOpen(false)}
              className={`px-4 py-2.5 rounded-lg transition-colors font-medium text-sm ${
                isActive('/partnerships') ? 'bg-accent text-white' : 'hover:bg-white/10 text-primary-foreground/80'
              }`}>
              {tr('شراكاتنا', 'Partnerships', '我们的合作伙伴', 'Nos Partenariats')}
            </Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}
              className={`px-4 py-2.5 rounded-lg transition-colors font-medium text-sm ${
                isActive('/contact') ? 'bg-accent text-white' : 'hover:bg-white/10 text-primary-foreground/80'
              }`}>
              {tr('اتصل بنا', 'Contact Us', '联系我们', 'Nous Contacter')}
            </Link>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
