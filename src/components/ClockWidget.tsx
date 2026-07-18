import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ClockWidget: React.FC = () => {
  const { t, language } = useLanguage();
  const [saudiTime, setSaudiTime] = useState('');
  const [chadTime, setChadTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      
      // Saudi Arabia Time (UTC+3)
      const saudiFormatter = new Intl.DateTimeFormat(language === 'ar' ? 'ar-SA' : 'en-US', {
        timeZone: 'Asia/Riyadh',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      });
      setSaudiTime(saudiFormatter.format(now));
      
      // Chad Time (UTC+1)
      const chadFormatter = new Intl.DateTimeFormat(language === 'ar' ? 'ar-SA' : 'en-US', {
        timeZone: 'Africa/Ndjamena',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      });
      setChadTime(chadFormatter.format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [language]);

  return (
    <div className="flex gap-3">
      <div className="clock-widget flex items-center gap-2">
        <Clock className="h-4 w-4 text-accent" />
        <div className="text-center">
          <p className="text-xs text-white/70">{t.hero.saudiTime}</p>
          <p className="text-lg font-bold text-white font-mono">{saudiTime}</p>
        </div>
      </div>
      <div className="clock-widget flex items-center gap-2">
        <Clock className="h-4 w-4 text-accent" />
        <div className="text-center">
          <p className="text-xs text-white/70">{t.hero.chadTime}</p>
          <p className="text-lg font-bold text-white font-mono">{chadTime}</p>
        </div>
      </div>
    </div>
  );
};

export default ClockWidget;
