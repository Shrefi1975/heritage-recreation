import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Home, 
  Car, 
  Users, 
  Hammer, 
  Cog, 
  Globe,
  ArrowLeft,
  ArrowRight,
  Check,
  Phone,
  MessageCircle
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';

// Import images
import companyFormationImg from '@/assets/blog/company-formation.jpg';
import realEstateImg from '@/assets/services/real-estate.jpg';
import carRentalImg from '@/assets/services/car-rental.jpg';
import hrImg from '@/assets/services/hr.jpg';
import constructionImg from '@/assets/services/construction.jpg';
import equipmentImg from '@/assets/services/equipment.jpg';
import tradeImg from '@/assets/services/trade.jpg';

const Landing: React.FC = () => {
  const { language, dir } = useLanguage();
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;
  const WHATSAPP_NUMBER = '+23565555504';

  const services = [
    {
      id: 'companyFormation',
      icon: Building2,
      image: companyFormationImg,
      title: language === 'ar' ? 'تأسيس الشركات في تشاد' : 'Company Formation in Chad',
      subtitle: language === 'ar' ? 'أنشئ عملك بسهولة وسرعة في تشاد' : 'Start your business easily and quickly in Chad',
      description: language === 'ar' 
        ? 'نقدم خدمات متكاملة لتأسيس الشركات في تشاد، من التسجيل القانوني إلى الحصول على التراخيص اللازمة، مع دعم كامل في جميع المراحل.'
        : 'We provide comprehensive company formation services in Chad, from legal registration to obtaining necessary licenses, with full support at all stages.',
      features: language === 'ar' 
        ? ['إعداد الوثائق القانونية والتسجيل التجاري', 'الحصول على التراخيص والموافقات الحكومية', 'فتح الحسابات البنكية التجارية', 'الاستشارات القانونية والضريبية', 'الدعم اللوجستي والإداري المستمر']
        : ['Legal documentation and commercial registration', 'Obtaining licenses and government approvals', 'Opening commercial bank accounts', 'Legal and tax consultations', 'Continuous logistical and administrative support'],
      color: 'from-blue-600 to-indigo-700',
    },
    {
      id: 'realEstate',
      icon: Home,
      image: realEstateImg,
      title: language === 'ar' ? 'العقارات والإيجار' : 'Real Estate & Rental',
      subtitle: language === 'ar' ? 'حلول عقارية شاملة للشركات والأفراد' : 'Comprehensive real estate solutions for businesses and individuals',
      description: language === 'ar'
        ? 'للشركات: مكاتب إدارية وتجارية في مواقع مميزة. شقق وفلل سكنية مؤثثة وغير مؤثثة.'
        : 'For businesses: administrative and commercial offices in premium locations. Furnished and unfurnished apartments and villas.',
      features: language === 'ar'
        ? ['مواقع مميزة في إنجامينا', 'عقود مرنة تناسب احتياجاتك', 'دعم كامل في إجراءات الإيجار']
        : ['Premium locations in N\'Djamena', 'Flexible contracts to suit your needs', 'Full support in rental procedures'],
      color: 'from-emerald-600 to-teal-700',
    },
    {
      id: 'carRental',
      icon: Car,
      image: carRentalImg,
      title: language === 'ar' ? 'تأجير السيارات للشركات' : 'Corporate Car Rental',
      subtitle: language === 'ar' ? 'أسطول متنوع لتلبية احتياجات عملك' : 'Diverse fleet to meet your business needs',
      description: language === 'ar'
        ? 'نوفر خدمات تأجير السيارات للشركات والأفراد مع خيارات متعددة تشمل سيارات الركاب والدفع الرباعي، مع إمكانية توفير سائقين محترفين.'
        : 'We provide car rental services for companies and individuals with multiple options including passenger cars and 4WD vehicles, with professional drivers available.',
      features: language === 'ar'
        ? ['أسطول متنوع من السيارات', 'سائقون محترفون متاحون', 'عقود إيجار مرنة', 'تأمين شامل وصيانة']
        : ['Diverse fleet of vehicles', 'Professional drivers available', 'Flexible rental contracts', 'Comprehensive insurance and maintenance'],
      color: 'from-amber-600 to-orange-700',
    },
    {
      id: 'hr',
      icon: Users,
      image: hrImg,
      title: language === 'ar' ? 'خدمات الموارد البشرية' : 'Human Resources Services',
      subtitle: language === 'ar' ? 'حلول متكاملة لإدارة القوى العاملة' : 'Integrated workforce management solutions',
      description: language === 'ar'
        ? 'نقدم حلولاً متكاملة لإدارة الموارد البشرية تشمل التوظيف والتدريب وإدارة الرواتب.'
        : 'We provide integrated HR management solutions including recruitment, training, and payroll management.',
      features: language === 'ar'
        ? ['التوظيف واستقطاب الكفاءات المحلية والدولية', 'إعداد العقود والوثائق القانونية', 'إدارة الرواتب والمزايا', 'الدعم الإداري والموارد البشرية']
        : ['Recruitment of local and international talents', 'Contract and legal document preparation', 'Payroll and benefits management', 'Administrative and HR support'],
      color: 'from-rose-600 to-pink-700',
    },
    {
      id: 'construction',
      icon: Hammer,
      image: constructionImg,
      title: language === 'ar' ? 'البناء والترميم' : 'Construction & Renovation',
      subtitle: language === 'ar' ? 'خدمات بناء وترميم احترافية' : 'Professional construction and renovation services',
      description: language === 'ar'
        ? 'نقدم خدمات البناء والترميم الشاملة، من التصميم إلى التنفيذ، مع التزام بأعلى معايير الجودة والسلامة.'
        : 'We provide comprehensive construction and renovation services, from design to implementation, with commitment to highest quality and safety standards.',
      features: language === 'ar'
        ? ['بناء المباني التجارية والسكنية', 'ترميم وتجديد المنشآت', 'إدارة المشاريع بالكامل', 'أعمال التشطيبات والديكور']
        : ['Commercial and residential building construction', 'Renovation and renewal of facilities', 'Complete project management', 'Finishing and decoration works'],
      color: 'from-purple-600 to-violet-700',
    },
    {
      id: 'equipment',
      icon: Cog,
      image: equipmentImg,
      title: language === 'ar' ? 'تأجير المعدات الثقيلة' : 'Heavy Equipment Rental',
      subtitle: language === 'ar' ? 'معدات ثقيلة لجميع مشاريعك' : 'Heavy equipment for all your projects',
      description: language === 'ar'
        ? 'نوفر تأجير المعدات الثقيلة للمشاريع الإنشائية والصناعية، مع صيانة دورية ودعم فني متكامل.'
        : 'We provide heavy equipment rental for construction and industrial projects, with regular maintenance and comprehensive technical support.',
      features: language === 'ar'
        ? ['حفارات ولوادر بمختلف الأحجام', 'رافعات ومعدات رفع', 'شاحنات نقل ثقيل', 'معدات تمهيد وتسوية الأراضي']
        : ['Excavators and loaders of various sizes', 'Cranes and lifting equipment', 'Heavy transport trucks', 'Land grading and leveling equipment'],
      color: 'from-indigo-600 to-blue-700',
    },
    {
      id: 'salesAgent',
      icon: Globe,
      image: tradeImg,
      title: language === 'ar' ? 'وكيل مبيعات وموزع منتجات' : 'Sales Agent & Product Distributor',
      subtitle: language === 'ar' ? 'شريكك التجاري في غرب ووسط أفريقيا' : 'Your commercial partner in West and Central Africa',
      description: language === 'ar'
        ? 'نعمل كوكيل مبيعات وموزع معتمد للشركات الراغبة في التوسع في أسواق غرب ووسط أفريقيا.'
        : 'We work as authorized sales agents and distributors for companies looking to expand in West and Central African markets.',
      features: language === 'ar'
        ? ['التغطية الجغرافية: تشاد، النيجر، الكاميرون، نيجيريا، أفريقيا الوسطى']
        : ['Geographic coverage: Chad, Niger, Cameroon, Nigeria, Central Africa'],
      color: 'from-cyan-600 to-sky-700',
    },
  ];

  const handleWhatsAppClick = (serviceTitle: string) => {
    const message = language === 'ar'
      ? `مرحباً! أنا مهتم بخدمة ${serviceTitle}. هل يمكنكم تزويدي بمزيد من المعلومات؟`
      : `Hello! I'm interested in ${serviceTitle} service. Could you please provide me with more information?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/90">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] bg-repeat" />
          </div>
          
          <div className="section-container relative z-10 py-20">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block bg-accent/20 text-accent px-6 py-2 rounded-full text-lg font-semibold mb-6 backdrop-blur-sm border border-accent/30">
                  {language === 'ar' ? '🚀 خدمات متميزة في تشاد' : '🚀 Premium Services in Chad'}
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              >
                {language === 'ar' ? 'شريكك الموثوق لبناء أعمالك في أفريقيا' : 'Your Trusted Partner for Building Business in Africa'}
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-white/90 mb-8 max-w-3xl mx-auto"
              >
                {language === 'ar' 
                  ? 'نقدم حلولاً متكاملة تشمل تأسيس الشركات، العقارات، تأجير السيارات والمعدات، الموارد البشرية، والمزيد'
                  : 'We offer comprehensive solutions including company formation, real estate, car and equipment rental, human resources, and more'}
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-4 justify-center"
              >
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-white px-8 text-lg"
                  onClick={() => handleWhatsAppClick(language === 'ar' ? 'الاستفسار العام' : 'General Inquiry')}
                >
                  <MessageCircle className="h-5 w-5 me-2" />
                  {language === 'ar' ? 'تواصل معنا الآن' : 'Contact Us Now'}
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary px-8 text-lg"
                >
                  <a href="tel:+23565555504">
                    <Phone className="h-5 w-5 me-2" />
                    {language === 'ar' ? 'اتصل بنا' : 'Call Us'}
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Wave Bottom */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
              <path d="M0 100L60 90C120 80 240 60 360 50C480 40 600 40 720 45C840 50 960 60 1080 65C1200 70 1320 70 1380 70L1440 70V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0Z" className="fill-background"/>
            </svg>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-background">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                {language === 'ar' ? 'خدماتنا المتميزة' : 'Our Premium Services'}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {language === 'ar' 
                  ? 'حلول شاملة لجميع احتياجات أعمالك في تشاد وغرب أفريقيا'
                  : 'Comprehensive solutions for all your business needs in Chad and West Africa'}
              </p>
            </motion.div>

            <div className="space-y-16">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                >
                  {/* Image */}
                  <div className={`relative group ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-30`} />
                      <div className={`absolute top-4 ${dir === 'rtl' ? 'left-4' : 'right-4'} p-4 rounded-xl bg-gradient-to-br ${service.color} shadow-xl`}>
                        <service.icon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <span className={`inline-block px-4 py-1 rounded-full text-sm font-medium text-white bg-gradient-to-r ${service.color} mb-4`}>
                      {language === 'ar' ? `0${index + 1}` : `0${index + 1}`}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                      {service.title}
                    </h3>
                    <p className="text-lg text-accent font-semibold mb-4">
                      {service.subtitle}
                    </p>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center mt-0.5`}>
                            <Check className="h-3.5 w-3.5 text-white" />
                          </span>
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      size="lg"
                      className={`bg-gradient-to-r ${service.color} hover:opacity-90 text-white`}
                      onClick={() => handleWhatsAppClick(service.title)}
                    >
                      <MessageCircle className="h-5 w-5 me-2" />
                      {language === 'ar' ? 'استفسر الآن' : 'Inquire Now'}
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-accent to-accent/80">
          <div className="section-container text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {language === 'ar' ? 'هل أنت مستعد للبدء؟' : 'Ready to Get Started?'}
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                {language === 'ar'
                  ? 'تواصل معنا اليوم واحصل على استشارة مجانية لمشروعك'
                  : 'Contact us today and get a free consultation for your project'}
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-accent hover:bg-white/90 px-8 text-lg"
                  onClick={() => handleWhatsAppClick(language === 'ar' ? 'استشارة مجانية' : 'Free Consultation')}
                >
                  <MessageCircle className="h-5 w-5 me-2" />
                  {language === 'ar' ? 'احجز استشارتك المجانية' : 'Book Your Free Consultation'}
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-accent px-8 text-lg"
                >
                  <Link to="/#contact">
                    {language === 'ar' ? 'صفحة التواصل' : 'Contact Page'}
                    <ArrowIcon className="h-5 w-5 ms-2" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Landing;
