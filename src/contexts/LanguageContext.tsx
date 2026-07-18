import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, Language, Translations } from '@/i18n/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations['ar'];
  dir: 'rtl' | 'ltr';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

// Helper function to determine text direction based on language
const getDirection = (lang: Language): 'rtl' | 'ltr' => {
  return lang === 'ar' ? 'rtl' : 'ltr';
};

// Helper function to get font family based on language
const getFontFamily = (lang: Language): string => {
  switch (lang) {
    case 'ar':
      return "'Cairo', 'Inter', sans-serif";
    case 'zh':
      return "'Noto Sans SC', 'Inter', sans-serif";
    default:
      return "'Inter', 'Cairo', sans-serif";
  }
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('ar');

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = getDirection(lang);
    document.body.style.fontFamily = getFontFamily(lang);
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    const validLanguages: Language[] = ['ar', 'en', 'zh', 'fr'];
    const lang: Language = savedLanguage && validLanguages.includes(savedLanguage as Language) 
      ? (savedLanguage as Language) 
      : 'ar';
    setLanguageState(lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = getDirection(lang);
    document.body.style.fontFamily = getFontFamily(lang);
  }, []);

  const t = translations[language] as typeof translations['ar'];
  const dir = getDirection(language);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
