import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, ChevronDown, ChevronUp, MessageCircle, ArrowRight, ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

import tradeImg from '@/assets/services/trade.jpg';
import transportImg from '@/assets/services/transport.jpg';
import maintenanceImg from '@/assets/services/maintenance.jpg';
import constructionImg from '@/assets/services/construction.jpg';
import carRentalImg from '@/assets/services/car-rental.jpg';
import equipmentImg from '@/assets/services/equipment.jpg';
import realEstateImg from '@/assets/services/real-estate.jpg';
import hrImg from '@/assets/services/hr-african.jpg';

export interface ServiceItem {
  title: string;
  details?: string;
}

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    id: string;
    icon: React.ElementType;
    title: string;
    shortDescription: string;
    fullDescription: string;
    services: (string | ServiceItem)[];
    color: string;
  } | null;
}

const serviceImages: Record<string, string> = {
  trade: tradeImg,
  transport: transportImg,
  maintenance: maintenanceImg,
  construction: constructionImg,
  carRental: carRentalImg,
  equipment: equipmentImg,
  realEstate: realEstateImg,
  hr: hrImg
};

const ServiceModal: React.FC<ServiceModalProps> = ({ isOpen, onClose, service }) => {
  const { t, dir, language } = useLanguage();
  const [showAllServices, setShowAllServices] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [expandedItem, setExpandedItem] = useState<number | null>(null);
  const WHATSAPP_NUMBER = '+23565555504';
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  useEffect(() => {
    if (isOpen) {
      setShowAllServices(false);
      setImageLoaded(false);
      setExpandedItem(null);
    }
  }, [isOpen, service?.id]);

  if (!service) return null;

  const Icon = service.icon;
  const displayedServices = showAllServices ? service.services : service.services.slice(0, 6);
  const serviceImage = serviceImages[service.id] || tradeImg;

  const getItemTitle = (item: string | ServiceItem) => typeof item === 'string' ? item : item.title;
  const getItemDetails = (item: string | ServiceItem) => typeof item === 'string' ? null : item.details;

  const handleWhatsAppClick = () => {
    const message = language === 'ar'
      ? `مرحباً! أنا مهتم بمعرفة المزيد عن خدمة ${service.title}. هل يمكنكم تزويدي بمزيد من المعلومات؟ شكراً!`
      : `Hello! I'm interested in learning more about ${service.title} services. Could you please provide more information? Thank you!`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-black/80 backdrop-blur-md" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: 'spring', damping: 30, stiffness: 350 }}
            className="relative w-full max-w-2xl bg-card rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            dir={dir}
          >
            {/* Hero Image */}
            <div className="relative h-48 md:h-56 overflow-hidden">
              <div className="absolute inset-0">
                {!imageLoaded && <div className={`absolute inset-0 bg-gradient-to-br ${service.color} animate-pulse`} />}
                <img src={serviceImage} alt={service.title} className={`w-full h-full object-cover transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`} onLoad={() => setImageLoaded(true)} loading="eager" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-30`} />
              </div>
              <button onClick={onClose} className="absolute top-4 end-4 p-2.5 rounded-full bg-black/30 hover:bg-black/50 text-white transition-all duration-200 backdrop-blur-sm border border-white/20 hover:scale-110">
                <X className="h-5 w-5" />
              </button>
              <motion.div initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }} transition={{ delay: 0.2, type: 'spring', stiffness: 200 }} className={`absolute bottom-4 start-6 w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-2xl border-4 border-white/20`}>
                <Icon className="h-8 w-8 text-white" />
              </motion.div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-6 pb-4">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">{service.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{service.shortDescription}</p>
              </div>

              {service.services.length > 0 && (
                <div className="px-6 pb-4">
                  <h4 className="font-semibold text-primary mb-4 text-sm uppercase tracking-wider flex items-center gap-2">
                    <span className={`w-8 h-0.5 bg-gradient-to-r ${service.color} rounded-full`} />
                    {language === 'ar' ? 'خدماتنا تشمل' : 'Our Services Include'}
                  </h4>
                  <div className="grid gap-2">
                    {displayedServices.map((item, index) => {
                      const title = getItemTitle(item);
                      const details = getItemDetails(item);
                      const isExpanded = expandedItem === index;

                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: dir === 'rtl' ? 20 : -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + index * 0.06 }}
                        >
                          <button
                            onClick={() => details && setExpandedItem(isExpanded ? null : index)}
                            className={`w-full flex items-center gap-3 p-3 rounded-xl bg-muted/50 hover:bg-muted transition-all duration-200 group text-start ${details ? 'cursor-pointer' : 'cursor-default'}`}
                          >
                            <div className={`p-1.5 rounded-full bg-gradient-to-br ${service.color} shadow-sm group-hover:scale-110 transition-transform shrink-0`}>
                              <CheckCircle className="h-3.5 w-3.5 text-white" />
                            </div>
                            <span className="text-sm font-medium text-foreground flex-1">{title}</span>
                            {details && (
                              <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform duration-200 shrink-0 ${isExpanded ? 'rotate-180' : ''}`} />
                            )}
                          </button>
                          <AnimatePresence>
                            {isExpanded && details && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.25 }}
                                className="overflow-hidden"
                              >
                                <div className="px-10 py-3 text-sm text-muted-foreground leading-relaxed bg-muted/30 rounded-b-xl mx-1 border-t border-border/30">
                                  {details}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      );
                    })}
                  </div>

                  {service.services.length > 6 && (
                    <Button variant="ghost" size="sm" onClick={() => setShowAllServices(!showAllServices)} className="w-full mt-3 text-muted-foreground hover:text-primary">
                      {showAllServices ? (
                        <>{language === 'ar' ? 'عرض أقل' : 'Show less'}<ChevronUp className="h-4 w-4 ms-1" /></>
                      ) : (
                        <>{language === 'ar' ? `عرض المزيد (${service.services.length - 6})` : `Show more (${service.services.length - 6})`}<ChevronDown className="h-4 w-4 ms-1" /></>
                      )}
                    </Button>
                  )}
                </div>
              )}
            </div>

            {/* Footer */}
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
        </div>
      )}
    </AnimatePresence>
  );
};

export default ServiceModal;
