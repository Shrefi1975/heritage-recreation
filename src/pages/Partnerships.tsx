import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Handshake, Globe, Award, TrendingUp, Users, Shield, ArrowLeft, ArrowRight, MessageCircle, Building2, Factory, Truck, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import partnershipsHeaderImg from '@/assets/headers/partnerships-header-african.jpg';
const Partnerships: React.FC = () => {
  const {
    language,
    dir
  } = useLanguage();
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;
  const WHATSAPP_NUMBER = '+23565555504';
  const partnershipTypes = [{
    icon: Factory,
    title: language === 'ar' ? 'شراكات التصنيع' : 'Manufacturing Partnerships',
    description: language === 'ar' ? 'نتعاون مع أكبر المصانع العالمية لتوفير منتجات عالية الجودة بأسعار تنافسية' : 'We collaborate with major global manufacturers to provide high-quality products at competitive prices',
    color: 'from-blue-500 to-indigo-600'
  }, {
    icon: Truck,
    title: language === 'ar' ? 'شراكات التوزيع' : 'Distribution Partnerships',
    description: language === 'ar' ? 'شبكة توزيع واسعة تغطي غرب ووسط أفريقيا مع شركاء موثوقين' : 'Extensive distribution network covering West and Central Africa with reliable partners',
    color: 'from-emerald-500 to-teal-600'
  }, {
    icon: Building2,
    title: language === 'ar' ? 'شراكات الخدمات' : 'Service Partnerships',
    description: language === 'ar' ? 'تحالفات استراتيجية مع شركات الخدمات لتقديم حلول متكاملة لعملائنا' : 'Strategic alliances with service companies to provide integrated solutions to our clients',
    color: 'from-purple-500 to-violet-600'
  }, {
    icon: Globe,
    title: language === 'ar' ? 'الشراكات الدولية' : 'International Partnerships',
    description: language === 'ar' ? 'علاقات تجارية قوية مع شركات من آسيا وأوروبا والشرق الأوسط' : 'Strong business relationships with companies from Asia, Europe, and the Middle East',
    color: 'from-amber-500 to-orange-600'
  }];
  const partnershipBenefits = [{
    icon: TrendingUp,
    title: language === 'ar' ? 'نمو مستدام' : 'Sustainable Growth',
    description: language === 'ar' ? 'فرص توسع في أسواق جديدة' : 'Expansion opportunities in new markets'
  }, {
    icon: Shield,
    title: language === 'ar' ? 'موثوقية عالية' : 'High Reliability',
    description: language === 'ar' ? 'التزام بالجودة والمواعيد' : 'Commitment to quality and deadlines'
  }, {
    icon: Users,
    title: language === 'ar' ? 'دعم متكامل' : 'Comprehensive Support',
    description: language === 'ar' ? 'فريق متخصص لخدمة الشركاء' : 'Dedicated team for partner service'
  }, {
    icon: Award,
    title: language === 'ar' ? 'سمعة متميزة' : 'Distinguished Reputation',
    description: language === 'ar' ? 'سجل حافل بالنجاحات' : 'Track record of successes'
  }];
  const handleWhatsAppClick = () => {
    const message = language === 'ar' ? 'مرحباً! أنا مهتم بالشراكة معكم. هل يمكننا ترتيب اجتماع لمناقشة الفرص المتاحة؟' : 'Hello! I am interested in partnering with you. Can we arrange a meeting to discuss available opportunities?';
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}?text=${encodedMessage}`, '_blank');
  };
  const heroTitle = language === 'ar' ? 'شراكاتنا الاستراتيجية' : language === 'zh' ? '我们的战略合作伙伴' : language === 'fr' ? 'Nos Partenariats Stratégiques' : 'Our Strategic Partnerships';
  const heroSubtitle = language === 'ar'
    ? 'نؤمن بأن الشراكات القوية هي أساس النجاح المستدام. نعمل مع أفضل الشركاء حول العالم لتقديم قيمة استثنائية لعملائنا في تشاد ووسط أفريقيا.'
    : language === 'zh' ? '我们相信牢固的伙伴关系是可持续成功的基础。我们与全球最优秀的伙伴合作，为乍得及中非客户提供卓越价值。'
    : language === 'fr' ? "Nous croyons que des partenariats solides sont la base d'un succès durable. Nous collaborons avec les meilleurs partenaires mondiaux pour offrir une valeur exceptionnelle au Tchad et en Afrique centrale."
    : 'We believe strong partnerships are the foundation of sustainable success. We work with the best partners worldwide to deliver exceptional value to our clients in Chad and Central Africa.';

  const stats = [
    { value: '50+', label: language === 'ar' ? 'شريك دولي' : language === 'zh' ? '国际伙伴' : language === 'fr' ? 'Partenaires internationaux' : 'International Partners' },
    { value: '15+', label: language === 'ar' ? 'دولة' : language === 'zh' ? '国家' : language === 'fr' ? 'Pays' : 'Countries' },
    { value: '13+', label: language === 'ar' ? 'قطاع' : language === 'zh' ? '行业' : language === 'fr' ? 'Secteurs' : 'Sectors' },
    { value: '10+', label: language === 'ar' ? 'سنوات خبرة' : language === 'zh' ? '年经验' : language === 'fr' ? "Années d'expérience" : 'Years of Experience' },
  ];

  return <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section — richer visual */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img src={partnershipsHeaderImg} alt={heroTitle} className="w-full h-full object-cover" loading="eager" fetchPriority="high" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-[hsl(218,55%,22%)]/95" />
          </div>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-accent/20 blur-3xl animate-pulse" />
            <div className="absolute -bottom-32 -left-32 w-[28rem] h-[28rem] rounded-full bg-white/5 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <div className="section-container relative z-10 py-16 md:py-24">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm border border-accent/40 rounded-full text-accent font-bold text-xs py-1.5 px-3 mb-5">
                <Sparkles className="h-3.5 w-3.5" />
                {language === 'ar' ? 'شراكات موثوقة' : language === 'zh' ? '可信合作伙伴' : language === 'fr' ? 'Partenariats Fiables' : 'Trusted Partnerships'}
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">{heroTitle}</h1>
              <p className="text-base md:text-lg text-white/90 leading-relaxed mb-8 max-w-3xl mx-auto">{heroSubtitle}</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
                {stats.map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i }}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-3 py-4 text-center"
                  >
                    <div className="text-2xl md:text-3xl font-extrabold text-accent">{s.value}</div>
                    <div className="text-xs md:text-sm text-white/85 mt-1">{s.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-background via-muted/20 to-background">
          <div className="section-container max-w-5xl">
            {/* Headline card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative bg-card border border-border rounded-3xl p-6 md:p-10 shadow-xl overflow-hidden"
            >
              <div className="absolute top-0 start-0 h-1.5 w-32 bg-gradient-to-r from-primary via-accent to-orange-500 rounded-br-lg" />
              <div className="absolute -top-16 -end-16 w-48 h-48 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-accent">
                  {language === 'ar' ? 'مقدمة' : 'Introduction'}
                </span>
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-primary leading-tight mb-6">
                {language === 'ar'
                  ? 'بناء شراكات مستدامة لدعم نمو ونجاح المشاريع'
                  : 'Building sustainable partnerships to support the growth and success of projects'}
              </h2>
              <div className="space-y-4 text-foreground leading-relaxed text-base md:text-lg">
                {language === 'ar' ? (
                  <>
                    <p>
                      تؤمن <strong className="text-primary">GBS</strong> بأن الشراكات الناجحة تشكل أساس النمو المستدام وتطوير الأعمال وخلق فرص استثمارية جديدة. ولهذا نسعى إلى بناء علاقات تعاون طويلة الأمد مع الشركات والمؤسسات المحلية والإقليمية والدولية الراغبة في العمل في تشاد أو توسيع أنشطتها في أسواق أفريقيا الوسطى.
                    </p>
                    <p>
                      ومن خلال خبرتنا في مجالات التوريدات والتجارة العامة والخدمات اللوجستية والبناء والمقاولات وتكنولوجيا المعلومات والتحول الرقمي، نعمل على ربط الشركات العالمية بالفرص المتاحة في السوق التشادي، وتوفير الدعم اللازم لتسهيل دخول الأسواق وتطوير المشاريع وتحقيق الأهداف التجارية والاستثمارية.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      At <strong className="text-primary">GBS</strong>, we believe successful partnerships are the foundation of sustainable growth, business development, and the creation of new investment opportunities. We build long-term relationships with local, regional and international companies looking to operate in Chad or expand into Central Africa.
                    </p>
                    <p>
                      Leveraging our expertise across supplies, general trade, logistics, construction, IT and digital transformation, we connect global companies to opportunities in the Chadian market and provide the support needed to enter markets, develop projects and achieve commercial and investment objectives.
                    </p>
                  </>
                )}
              </div>
            </motion.div>

            {/* Why Chad */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 grid md:grid-cols-3 gap-6"
            >
              <div className="md:col-span-1 bg-gradient-to-br from-primary to-primary/80 text-white rounded-2xl p-6 md:p-8 shadow-lg flex flex-col justify-center">
                <MapPin className="h-8 w-8 text-accent mb-3" />
                <h3 className="text-xl md:text-2xl font-bold mb-2">
                  {language === 'ar' ? 'لماذا تشاد؟' : 'Why Chad?'}
                </h3>
                <p className="text-white/85 text-sm leading-relaxed">
                  {language === 'ar'
                    ? 'موقع استراتيجي يربط شمال ووسط وغرب أفريقيا، مع نمو مستمر في البنية التحتية والطاقة والزراعة والخدمات والتكنولوجيا.'
                    : 'A strategic location linking North, Central and West Africa — with continuous growth in infrastructure, energy, agriculture, services and technology.'}
                </p>
              </div>
              <div className="md:col-span-2 bg-card border border-border rounded-2xl p-6 md:p-8 shadow-md">
                <p className="text-sm font-semibold text-accent mb-4">
                  {language === 'ar' ? 'فرص متنوعة للشركات التي تسعى إلى:' : 'Diverse opportunities for companies seeking to:'}
                </p>
                <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-2.5">
                  {(language === 'ar' ? [
                    'توريد المنتجات والمعدات للجهات الحكومية والخاصة',
                    'تنفيذ مشاريع البنية التحتية والبناء والتشييد',
                    'تطوير الحلول الرقمية والخدمات التكنولوجية',
                    'الاستثمار في الزراعة والثروة الحيوانية والصناعات التحويلية',
                    'تقديم الخدمات اللوجستية والنقل والتوزيع',
                    'تطوير مشاريع الطاقة التقليدية والمتجددة',
                    'المشاركة في المشاريع الممولة دولياً',
                  ] : [
                    'Supply products and equipment to public and private entities',
                    'Deliver infrastructure, building and construction projects',
                    'Develop digital solutions and technology services',
                    'Invest in agriculture, livestock and manufacturing',
                    'Provide logistics, transport and distribution services',
                    'Develop conventional and renewable energy projects',
                    'Participate in internationally-funded projects',
                  ]).map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground leading-snug">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Welcomed partnerships */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 bg-card border border-border rounded-2xl p-6 md:p-8 shadow-md"
            >
              <div className="flex items-center gap-3 mb-5">
                <Handshake className="h-6 w-6 text-accent" />
                <h3 className="text-xl md:text-2xl font-bold text-primary">
                  {language === 'ar' ? 'الشراكات التي نرحب بها' : 'Partnerships We Welcome'}
                </h3>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
                {(language === 'ar' ? [
                  'الشراكات التجارية',
                  'الشراكات الصناعية',
                  'شراكات البناء والمقاولات',
                  'التكنولوجيا والتحول الرقمي',
                  'شراكات قطاع الطاقة',
                ] : [
                  'Commercial Partnerships',
                  'Industrial Partnerships',
                  'Construction Partnerships',
                  'Technology & Digital',
                  'Energy Sector',
                ]).map((label, i) => (
                  <div key={i} className="rounded-xl border border-accent/20 bg-accent/5 px-4 py-3 text-center text-sm font-semibold text-primary hover:bg-accent/10 hover:border-accent/40 transition-colors">
                    {label}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* How GBS supports partners */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 bg-gradient-to-br from-primary/5 via-card to-accent/5 border border-border rounded-2xl p-6 md:p-10 shadow-lg"
            >
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-2">
                {language === 'ar' ? 'كيف تدعم GBS شركاءها؟' : 'How GBS supports its partners'}
              </h3>
              <p className="text-muted-foreground mb-6 text-sm md:text-base">
                {language === 'ar'
                  ? 'مجموعة خدمات متكاملة تساعد الشركات الدولية والإقليمية على تأسيس وتطوير أعمالها في تشاد:'
                  : 'A full set of services that helps international and regional companies establish and grow their business in Chad:'}
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {(language === 'ar' ? [
                  'دراسة السوق وتحليل الفرص التجارية',
                  'البحث عن العملاء والشركاء المحتملين',
                  'تطوير العلاقات التجارية والمؤسسية',
                  'التمثيل التجاري وتطوير الأعمال',
                  'إدارة المشاريع والتنسيق المحلي',
                  'الخدمات اللوجستية والنقل والتوزيع',
                  'المساعدة في إجراءات الاستيراد والتوريد',
                  'المشاركة في المناقصات والعطاءات',
                  'دعم التسويق وتطوير الأعمال',
                  'إدارة العمليات الميدانية داخل تشاد',
                ] : [
                  'Market research and opportunity analysis',
                  'Finding potential customers and partners',
                  'Developing commercial and institutional relations',
                  'Commercial representation and business development',
                  'Project management and local coordination',
                  'Logistics, transport and distribution',
                  'Import and supply procedures support',
                  'Tenders and bids participation',
                  'Marketing and business development support',
                  'Field operations management in Chad',
                ]).map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 bg-card/70 backdrop-blur-sm border border-border rounded-lg px-3.5 py-3 hover:border-accent/40 hover:shadow-sm transition-all">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>


        {/* Partnership Types */}
        <section className="py-20 bg-background">
          <div className="section-container">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                {language === 'ar' ? 'أنواع الشراكات' : 'Types of Partnerships'}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {language === 'ar' ? 'نقدم نماذج شراكة مرنة تناسب مختلف الاحتياجات والقطاعات' : 'We offer flexible partnership models to suit different needs and sectors'}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {partnershipTypes.map((type, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: index * 0.1
            }} className="group relative bg-card rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-border overflow-hidden">
                  <div className={`absolute top-0 end-0 w-32 h-32 bg-gradient-to-br ${type.color} opacity-10 rounded-bl-full transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:rounded-none`} />
                  
                  <div className={`relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br ${type.color} flex items-center justify-center mb-6 shadow-lg`}>
                    <type.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="relative z-10 text-xl font-bold text-primary mb-3 group-hover:text-white transition-colors">
                    {type.title}
                  </h3>
                  
                  <p className="relative z-10 text-muted-foreground group-hover:text-white/80 transition-colors">
                    {type.description}
                  </p>
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="py-20 bg-muted">
          <div className="section-container">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                {language === 'ar' ? 'لماذا تشاركنا؟' : 'Why Partner With Us?'}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {language === 'ar' ? 'فوائد حصرية لشركائنا لتحقيق النجاح المشترك' : 'Exclusive benefits for our partners to achieve mutual success'}
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {partnershipBenefits.map((benefit, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: index * 0.1
            }} className="bg-card rounded-2xl p-6 text-center shadow-lg border border-border">
                  <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center mb-4 shadow-lg">
                    <benefit.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-bold text-lg text-primary mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* Partnerships Detail Section */}
        <section className="py-20 bg-background">
          <div className="section-container">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                {language === 'ar' ? 'الشراكات' : 'Partnerships'}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {language === 'ar' ? 'نؤمن أن الشراكات الاستراتيجية هي أساس النجاح المستدام.' : 'We believe that strategic partnerships are the foundation of sustainable success.'}
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-10 items-start">
              {/* Globiz Supplies Card */}
              <motion.div initial={{ opacity: 0, x: dir === 'rtl' ? 30 : -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-card rounded-2xl p-8 shadow-lg border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary">
                    {language === 'ar' ? 'Globiz Supplies — شريك التوزيع الموثوق في تشاد وأفريقيا' : 'Globiz Supplies — Trusted Distribution Partner in Chad & Africa'}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {language === 'ar' 
                    ? 'Globiz Supplies شركة توزيع مقرها تشاد، تربط المصنعين العالميين بأسواق نامية في أفريقيا. نبحث عن شركاء وموزعين في مجالات متعددة تتوافق مع خدماتنا: المعدات الصناعية والبناء والطاقة والمستلزمات الطبية والسلع الاستهلاكية والتقنية والمعدات الزراعية والآليات الثقيلة وقطع الغيار.'
                    : 'Globiz Supplies is a distribution company based in Chad, connecting global manufacturers with emerging markets in Africa. We seek partners and distributors in multiple fields aligned with our services.'}
                </p>
              </motion.div>

              {/* Why Partner Card */}
              <motion.div initial={{ opacity: 0, x: dir === 'rtl' ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-card rounded-2xl p-8 shadow-lg border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center">
                    <Handshake className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary">
                    {language === 'ar' ? 'لماذا الشراكة معنا؟' : 'Why Partner With Us?'}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {language === 'ar'
                    ? 'لدينا حضور ميداني قوي في تشاد، وصول إلى دول وسط وجنوب الصحراء، خبرة في الاستيراد والتخليص الجمركي، معرفة بالقواعد المحلية، وشبكة علاقات مع القطاعين العام والخاص إضافةً إلى قنوات لوجستية موثوقة.'
                    : 'We have a strong field presence in Chad, access to Central and Sub-Saharan countries, import and customs clearance expertise, knowledge of local regulations, and a network of relationships with public and private sectors plus reliable logistics channels.'}
                </p>
              </motion.div>
            </div>

            {/* Expand Your Brand */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-10 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/10 text-center">
              <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 shadow-lg">
                <TrendingUp className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                {language === 'ar' ? 'وسع وجود علامتك التجارية في أفريقيا' : 'Expand Your Brand Presence in Africa'}
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {language === 'ar'
                  ? 'عبر دعم دخول السوق، تمثيل مبيعات محلي، وفرص نمو إقليمية مدروسة.'
                  : 'Through market entry support, local sales representation, and well-studied regional growth opportunities.'}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Partner Logos Placeholder */}
        

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary to-primary/90">
          <div className="section-container text-center">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {language === 'ar' ? 'هل ترغب في الانضمام إلى شبكة شركائنا؟' : 'Want to Join Our Partner Network?'}
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                {language === 'ar' ? 'تواصل معنا اليوم لاستكشاف فرص الشراكة المتاحة' : 'Contact us today to explore available partnership opportunities'}
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 text-lg" onClick={handleWhatsAppClick}>
                  <MessageCircle className="h-5 w-5 me-2" />
                  {language === 'ar' ? 'تواصل معنا الآن' : 'Contact Us Now'}
                </Button>
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 px-8 text-lg">
                  <Link to="/#contact">
                    <ArrowIcon className="h-5 w-5 me-2" />
                    {language === 'ar' ? 'صفحة التواصل' : 'Contact Page'}
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>;
};
export default Partnerships;