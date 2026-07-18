import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, ShoppingCart, Fuel, Wifi, Landmark, Sun, Building, Leaf, 
  Stethoscope, GraduationCap, Dumbbell, Hotel, HardHat,
  Globe, Truck, Hammer, Building2, UserCheck
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ServicesMarquee: React.FC = () => {
  const { language, dir } = useLanguage();

  const sectors = [
    { icon: Heart, title: language === 'ar' ? 'المنظمات الإنسانية' : 'Humanitarian Organizations', color: 'from-red-500 to-rose-600' },
    { icon: ShoppingCart, title: language === 'ar' ? 'السلع الاستهلاكية' : 'FMCG', color: 'from-blue-500 to-cyan-500' },
    { icon: Fuel, title: language === 'ar' ? 'النفط والغاز' : 'Oil & Gas', color: 'from-amber-600 to-yellow-500' },
    { icon: Wifi, title: language === 'ar' ? 'الاتصالات' : 'Telecommunications', color: 'from-purple-500 to-violet-600' },
    { icon: Landmark, title: language === 'ar' ? 'البنوك والمؤسسات المالية' : 'Banks & Finance', color: 'from-emerald-500 to-teal-600' },
    { icon: Sun, title: language === 'ar' ? 'الطاقة الشمسية' : 'Solar Energy', color: 'from-orange-500 to-yellow-500' },
    { icon: Building, title: language === 'ar' ? 'القطاع الحكومي' : 'Government Sector', color: 'from-slate-600 to-gray-700' },
    { icon: Leaf, title: language === 'ar' ? 'المواد الزراعية' : 'Agriculture', color: 'from-green-500 to-emerald-600' },
    { icon: Stethoscope, title: language === 'ar' ? 'الرعاية الصحية' : 'Healthcare', color: 'from-pink-500 to-rose-600' },
    { icon: GraduationCap, title: language === 'ar' ? 'قطاع التعليم' : 'Education', color: 'from-indigo-500 to-blue-600' },
    { icon: Dumbbell, title: language === 'ar' ? 'المنشآت الرياضية' : 'Sports Facilities', color: 'from-cyan-500 to-blue-500' },
    { icon: Hotel, title: language === 'ar' ? 'الفنادق والسياحة' : 'Hotels & Tourism', color: 'from-amber-500 to-orange-600' },
    { icon: HardHat, title: language === 'ar' ? 'شركات المقاولات' : 'Construction Companies', color: 'from-gray-600 to-slate-700' },
  ];

  const services = [
    { icon: Globe, title: language === 'ar' ? 'التجارة والتصدير' : 'Trade & Export', color: 'from-blue-500 to-cyan-500' },
    { icon: Truck, title: language === 'ar' ? 'النقل واللوجستيات' : 'Transport & Logistics', color: 'from-orange-500 to-red-500' },
    { icon: Hammer, title: language === 'ar' ? 'البناء والتجديد' : 'Construction', color: 'from-purple-500 to-pink-500' },
    { icon: Building2, title: language === 'ar' ? 'العقارات' : 'Real Estate', color: 'from-teal-500 to-cyan-500' },
    { icon: UserCheck, title: language === 'ar' ? 'توفير القوى العاملة' : 'Workforce Supply', color: 'from-cyan-500 to-blue-600' },
  ];

  const allItems = [...sectors, ...services];
  const duplicatedItems = [...allItems, ...allItems, ...allItems];

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 overflow-hidden">
      <div className="section-container mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {language === 'ar' ? 'قطاعاتنا وخدماتنا' : 'Our Sectors & Services'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'ar'
              ? 'نغطي مجموعة واسعة من القطاعات والخدمات لتلبية جميع احتياجاتكم'
              : 'We cover a wide range of sectors and services to meet all your needs'}
          </p>
        </motion.div>
      </div>

      {/* First Row */}
      <div className="relative mb-6">
        <div className="flex">
          <motion.div
            className="flex gap-4"
            animate={{
              x: dir === 'rtl' ? ['0%', '33.333%'] : ['0%', '-33.333%'],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 40,
                ease: 'linear',
              },
            }}
          >
            {duplicatedItems.map((item, index) => (
              <div
                key={`row1-${index}`}
                className="flex-shrink-0 flex items-center gap-3 bg-card/80 backdrop-blur-sm border border-border/50 rounded-full px-5 py-3 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className={`p-2 rounded-full bg-gradient-to-br ${item.color}`}>
                  <item.icon className="h-4 w-4 text-white" />
                </div>
                <span className="text-sm font-medium text-foreground whitespace-nowrap">
                  {item.title}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Second Row */}
      <div className="relative">
        <div className="flex">
          <motion.div
            className="flex gap-4"
            animate={{
              x: dir === 'rtl' ? ['-33.333%', '0%'] : ['-33.333%', '0%'],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 45,
                ease: 'linear',
              },
            }}
          >
            {[...duplicatedItems].reverse().map((item, index) => (
              <div
                key={`row2-${index}`}
                className="flex-shrink-0 flex items-center gap-3 bg-card/80 backdrop-blur-sm border border-border/50 rounded-full px-5 py-3 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className={`p-2 rounded-full bg-gradient-to-br ${item.color}`}>
                  <item.icon className="h-4 w-4 text-white" />
                </div>
                <span className="text-sm font-medium text-foreground whitespace-nowrap">
                  {item.title}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesMarquee;
