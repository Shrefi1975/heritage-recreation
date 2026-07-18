import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, ChevronDown, ChevronUp, ArrowRight, ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
interface SectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  sector: {
    id: string;
    icon: React.ElementType;
    title: string;
    description: string;
    fullDescription: string;
    services: string[];
    image?: string;
    color?: string;
  } | null;
}
const SectorModal: React.FC<SectorModalProps> = ({
  isOpen,
  onClose,
  sector
}) => {
  const {
    t,
    dir,
    language
  } = useLanguage();
  const [showAllServices, setShowAllServices] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const WHATSAPP_NUMBER = '+23565555504';
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;
  useEffect(() => {
    if (isOpen) {
      setShowAllServices(false);
      setImageLoaded(false);
    }
  }, [isOpen, sector?.id]);
  if (!sector) return null;
  const Icon = sector.icon;
  const displayedServices = showAllServices ? sector.services : sector.services.slice(0, 4);
  const sectorColor = sector.color || 'from-primary to-accent';
  const handleWhatsAppClick = () => {
    const sectorTitle = sector.title;
    const message = language === 'ar' ? `مرحباً! لقد زرت موقعكم وأنا مهتم بمعرفة المزيد عن قطاع ${sectorTitle}. هل يمكنكم تزويدي بمزيد من المعلومات؟ شكراً لكم!` : `Hello! I came across your website and I'm interested in learning more about ${sectorTitle} sector. Could you please provide me with more information about it, Thank you!`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };
  return <AnimatePresence>
      {isOpen && <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} onClick={onClose} className="absolute inset-0 bg-black/80 backdrop-blur-md" />
          
          {/* Modal */}
          <motion.div initial={{
        opacity: 0,
        scale: 0.9,
        y: 30
      }} animate={{
        opacity: 1,
        scale: 1,
        y: 0
      }} exit={{
        opacity: 0,
        scale: 0.9,
        y: 30
      }} transition={{
        type: 'spring',
        damping: 30,
        stiffness: 350
      }} className="relative w-full max-w-2xl bg-card rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col" dir={dir}>
            {/* Hero Image Section */}
            <div className="relative h-48 md:h-56 overflow-hidden">
              {/* Background Image */}
              <div className="absolute inset-0">
                {!imageLoaded && <div className={`absolute inset-0 bg-gradient-to-br ${sectorColor} animate-pulse`} />}
                {sector.image && <img src={sector.image} alt={sector.title} className={`w-full h-full object-cover transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`} onLoad={() => setImageLoaded(true)} loading="eager" />}
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className={`absolute inset-0 bg-gradient-to-br ${sectorColor} opacity-60`} />
              </div>
              
              {/* Close button */}
              <button onClick={onClose} className="absolute top-4 end-4 p-2.5 rounded-full bg-black/30 hover:bg-black/50 text-white transition-all duration-200 backdrop-blur-sm border border-white/20 hover:scale-110">
                <X className="h-5 w-5" />
              </button>
              
              {/* Icon Badge */}
              <motion.div initial={{
            scale: 0,
            rotate: -180
          }} animate={{
            scale: 1,
            rotate: 0
          }} transition={{
            delay: 0.2,
            type: 'spring',
            stiffness: 200
          }} className={`absolute bottom-4 start-6 w-16 h-16 rounded-2xl bg-gradient-to-br ${sectorColor} flex items-center justify-center shadow-2xl border-4 border-white/20`}>
                <Icon className="h-8 w-8 text-white" />
              </motion.div>
            </div>
            
            {/* Content Section */}
            <div className="flex-1 overflow-y-auto">
              {/* Title & Description */}
              <div className="p-6 pb-4">
                <motion.h2 initial={{
              opacity: 0,
              y: 10
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.1
            }} className="text-2xl md:text-3xl font-bold text-primary mb-3">
                  {sector.title}
                </motion.h2>
                
                <motion.p initial={{
              opacity: 0,
              y: 10
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.2
            }} className="text-muted-foreground leading-relaxed">
                  {sector.fullDescription}
                </motion.p>
              </div>
              
              {/* Services List */}
              {sector.services.length > 0 && <div className="px-6 pb-4">
                  <h4 className="font-semibold text-primary mb-4 text-sm uppercase tracking-wider flex items-center gap-2">
                    <span className={`w-8 h-0.5 bg-gradient-to-r ${sectorColor} rounded-full`}></span>
                    {language === 'ar' ? 'خدماتنا تشمل' : 'Our Services Include'}
                  </h4>
                  <div className="grid gap-2.5">
                    {displayedServices.map((item, index) => <motion.div key={index} initial={{
                opacity: 0,
                x: dir === 'rtl' ? 20 : -20
              }} animate={{
                opacity: 1,
                x: 0
              }} transition={{
                delay: 0.3 + index * 0.08
              }} className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 hover:bg-muted transition-all duration-200 group">
                        <div className={`p-1.5 rounded-full bg-gradient-to-br ${sectorColor} shadow-sm group-hover:scale-110 transition-transform`}>
                          <CheckCircle className="h-3.5 w-3.5 text-white" />
                        </div>
                        <span className="text-sm font-medium text-foreground">{item}</span>
                      </motion.div>)}
                  </div>
                  
                  {/* Show more/less button */}
                  {sector.services.length > 4 && <Button variant="ghost" size="sm" onClick={() => setShowAllServices(!showAllServices)} className="w-full mt-3 text-muted-foreground hover:text-primary">
                      {showAllServices ? <>
                          {language === 'ar' ? 'عرض أقل' : 'Show less'}
                          <ChevronUp className="h-4 w-4 ms-1" />
                        </> : <>
                          {language === 'ar' ? `عرض المزيد (${sector.services.length - 4})` : `Show more (${sector.services.length - 4})`}
                          <ChevronDown className="h-4 w-4 ms-1" />
                        </>}
                    </Button>}
                </div>}
              
              {/* Services Suggestion Card */}
              <div className="px-6 pb-4">
                
              </div>
            </div>
            
            {/* Footer Actions */}
            <div className="p-6 pt-2 border-t border-border/50 bg-muted/30">
              <div className="flex flex-col sm:flex-row gap-3">
                <Button onClick={handleWhatsAppClick} className="flex-1 bg-[#25D366] hover:bg-[#20BD5A] text-white gap-2 h-12 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  {language === 'ar' ? 'للمزيد تواصل عبر الواتساب' : 'Contact via WhatsApp'}
                </Button>
                <Button variant="outline" onClick={onClose} className="sm:w-32 h-12 border-2">
                  {language === 'ar' ? 'إغلاق' : 'Close'}
                </Button>
              </div>
            </div>
          </motion.div>
        </div>}
    </AnimatePresence>;
};
export default SectorModal;