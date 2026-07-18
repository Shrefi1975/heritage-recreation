import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Tag, ArrowLeft, ArrowRight, User } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';

// Blog images
import supplyPartnerImg from '@/assets/blog/supply-partner.jpg';
import agricultureExportImg from '@/assets/blog/agriculture-export.jpg';
import constructionManagementImg from '@/assets/blog/construction-management.jpg';
import itSolutionsImg from '@/assets/blog/it-solutions.jpg';
import companyFormationImg from '@/assets/blog/company-formation.jpg';
import hrSuccessImg from '@/assets/blog/hr-success.jpg';

const blogImages: { [key: number]: string } = {
  1: supplyPartnerImg,
  2: agricultureExportImg,
  3: constructionManagementImg,
  4: itSolutionsImg,
  5: companyFormationImg,
  6: hrSuccessImg,
};

const blogContent = {
  ar: {
    1: {
      content: `
        <p>اختيار شريك التوريد المناسب يعد من أهم القرارات التي تؤثر على نجاح أعمالك. في هذا المقال، نقدم لك دليلاً شاملاً لاختيار الشريك الأمثل.</p>
        
        <h2>المعايير الأساسية للاختيار</h2>
        <p>عند البحث عن شريك توريد، يجب مراعاة عدة عوامل مهمة:</p>
        <ul>
          <li><strong>الموثوقية:</strong> تأكد من سجل الشركة في الالتزام بالمواعيد والجودة</li>
          <li><strong>الخبرة:</strong> ابحث عن شركات لديها خبرة واسعة في مجالك</li>
          <li><strong>المرونة:</strong> القدرة على التكيف مع متطلباتك المتغيرة</li>
          <li><strong>الأسعار:</strong> توازن بين الجودة والتكلفة</li>
        </ul>
        
        <h2>خطوات عملية للتقييم</h2>
        <p>قم بزيارة مرافق الشركة، واطلب مراجع من عملائهم السابقين، وقارن عروض متعددة قبل اتخاذ القرار النهائي.</p>
        
        <h2>أهمية العلاقة طويلة الأمد</h2>
        <p>بناء علاقة استراتيجية مع شريك التوريد يوفر استقراراً في سلسلة التوريد ويفتح أبواباً للتفاوض على شروط أفضل مع مرور الوقت.</p>
      `,
      author: 'فريق الشركة العالمية',
    },
    2: {
      content: `
        <p>يشهد قطاع الصادرات الزراعية في المنطقة نمواً ملحوظاً، مما يفتح آفاقاً واسعة للمستثمرين والمصدرين.</p>
        
        <h2>الاتجاهات الحالية في السوق</h2>
        <p>تزايد الطلب العالمي على المنتجات الزراعية العضوية والطازجة يخلق فرصاً ذهبية للمصدرين في المنطقة.</p>
        
        <h2>المنتجات الأكثر طلباً</h2>
        <ul>
          <li>التمور بأنواعها المختلفة</li>
          <li>الخضروات الطازجة</li>
          <li>الفواكه الموسمية</li>
          <li>الزيوت النباتية</li>
        </ul>
        
        <h2>التحديات والحلول</h2>
        <p>تظل لوجستيات التبريد والنقل من أبرز التحديات، لكن الاستثمار في البنية التحتية يحل هذه المشكلة تدريجياً.</p>
      `,
      author: 'فريق الشركة العالمية',
    },
    3: {
      content: `
        <p>إدارة مشاريع البناء تتطلب مهارات متعددة ومنهجية واضحة لضمان النجاح.</p>
        
        <h2>التخطيط المسبق</h2>
        <p>التخطيط الجيد يوفر الوقت والمال ويقلل من المفاجآت غير السارة أثناء التنفيذ.</p>
        
        <h2>إدارة الموارد</h2>
        <p>توزيع الموارد البشرية والمادية بشكل فعال يضمن سير العمل بسلاسة.</p>
        
        <h2>مراقبة الجودة</h2>
        <p>تطبيق معايير جودة صارمة في كل مرحلة يضمن تسليم مشروع يفوق التوقعات.</p>
      `,
      author: 'فريق الشركة العالمية',
    },
    4: {
      content: `
        <p>في عصر التحول الرقمي، أصبحت حلول تكنولوجيا المعلومات ضرورة وليست رفاهية للشركات الناشئة.</p>
        
        <h2>البنية التحتية التقنية</h2>
        <p>اختيار البنية التحتية المناسبة من البداية يوفر تكاليف التحول لاحقاً.</p>
        
        <h2>الأمن السيبراني</h2>
        <p>حماية بيانات الشركة والعملاء يجب أن تكون أولوية قصوى منذ اليوم الأول.</p>
        
        <h2>التوسع المستقبلي</h2>
        <p>اختر حلولاً قابلة للتوسع لتنمو مع نمو أعمالك دون الحاجة لتغييرات جذرية.</p>
      `,
      author: 'فريق الشركة العالمية',
    },
    5: {
      content: `
        <p>تأسيس شركة ناجحة يتطلب تخطيطاً دقيقاً وفهماً عميقاً للسوق والإجراءات القانونية.</p>
        
        <h2>دراسة السوق</h2>
        <p>فهم السوق المستهدف والمنافسين هو الخطوة الأولى نحو النجاح.</p>
        
        <h2>الإجراءات القانونية</h2>
        <p>تسجيل الشركة والحصول على التراخيص اللازمة يضمن عملاً قانونياً ومستداماً.</p>
        
        <h2>التمويل والموارد</h2>
        <p>تحديد مصادر التمويل وإدارة الموارد بحكمة يضمن استمرارية الأعمال.</p>
      `,
      author: 'فريق الشركة العالمية',
    },
    6: {
      content: `
        <p>الموارد البشرية هي العمود الفقري لأي مؤسسة ناجحة، وإدارتها بفعالية تحدد مستقبل الشركة.</p>
        
        <h2>التوظيف الصحيح</h2>
        <p>اختيار الموظفين المناسبين من البداية يوفر تكاليف التدريب والاستبدال لاحقاً.</p>
        
        <h2>التطوير المستمر</h2>
        <p>الاستثمار في تدريب الموظفين يعود بالنفع على الشركة من خلال زيادة الإنتاجية والولاء.</p>
        
        <h2>بيئة العمل</h2>
        <p>خلق بيئة عمل إيجابية يعزز الإبداع والتعاون بين أعضاء الفريق.</p>
      `,
      author: 'فريق الشركة العالمية',
    },
  },
  en: {
    1: {
      content: `
        <p>Choosing the right supply partner is one of the most important decisions that affects your business success. In this article, we provide a comprehensive guide to choosing the ideal partner.</p>
        
        <h2>Key Selection Criteria</h2>
        <p>When looking for a supply partner, several important factors should be considered:</p>
        <ul>
          <li><strong>Reliability:</strong> Ensure the company's track record of meeting deadlines and quality</li>
          <li><strong>Experience:</strong> Look for companies with extensive experience in your field</li>
          <li><strong>Flexibility:</strong> Ability to adapt to your changing requirements</li>
          <li><strong>Pricing:</strong> Balance between quality and cost</li>
        </ul>
        
        <h2>Practical Evaluation Steps</h2>
        <p>Visit the company's facilities, request references from their previous clients, and compare multiple offers before making the final decision.</p>
        
        <h2>Importance of Long-term Relationships</h2>
        <p>Building a strategic relationship with a supply partner provides stability in the supply chain and opens doors for negotiating better terms over time.</p>
      `,
      author: 'Global Business Team',
    },
    2: {
      content: `
        <p>The agricultural export sector in the region is experiencing notable growth, opening wide horizons for investors and exporters.</p>
        
        <h2>Current Market Trends</h2>
        <p>Growing global demand for organic and fresh agricultural products creates golden opportunities for exporters in the region.</p>
        
        <h2>Most Demanded Products</h2>
        <ul>
          <li>Various types of dates</li>
          <li>Fresh vegetables</li>
          <li>Seasonal fruits</li>
          <li>Vegetable oils</li>
        </ul>
        
        <h2>Challenges and Solutions</h2>
        <p>Cold chain logistics remain among the main challenges, but infrastructure investment is gradually solving this problem.</p>
      `,
      author: 'Global Business Team',
    },
    3: {
      content: `
        <p>Construction project management requires multiple skills and a clear methodology to ensure success.</p>
        
        <h2>Pre-Planning</h2>
        <p>Good planning saves time and money and reduces unpleasant surprises during implementation.</p>
        
        <h2>Resource Management</h2>
        <p>Effective distribution of human and material resources ensures smooth workflow.</p>
        
        <h2>Quality Control</h2>
        <p>Applying strict quality standards at every stage ensures delivering a project that exceeds expectations.</p>
      `,
      author: 'Global Business Team',
    },
    4: {
      content: `
        <p>In the age of digital transformation, IT solutions have become a necessity, not a luxury, for startups.</p>
        
        <h2>Technical Infrastructure</h2>
        <p>Choosing the right infrastructure from the start saves transformation costs later.</p>
        
        <h2>Cybersecurity</h2>
        <p>Protecting company and customer data should be a top priority from day one.</p>
        
        <h2>Future Expansion</h2>
        <p>Choose scalable solutions to grow with your business without the need for radical changes.</p>
      `,
      author: 'Global Business Team',
    },
    5: {
      content: `
        <p>Establishing a successful company requires careful planning and deep understanding of the market and legal procedures.</p>
        
        <h2>Market Study</h2>
        <p>Understanding the target market and competitors is the first step towards success.</p>
        
        <h2>Legal Procedures</h2>
        <p>Registering the company and obtaining necessary licenses ensures legal and sustainable operations.</p>
        
        <h2>Funding and Resources</h2>
        <p>Identifying funding sources and managing resources wisely ensures business continuity.</p>
      `,
      author: 'Global Business Team',
    },
    6: {
      content: `
        <p>Human resources are the backbone of any successful organization, and managing them effectively determines the company's future.</p>
        
        <h2>Right Hiring</h2>
        <p>Choosing the right employees from the start saves training and replacement costs later.</p>
        
        <h2>Continuous Development</h2>
        <p>Investing in employee training benefits the company through increased productivity and loyalty.</p>
        
        <h2>Work Environment</h2>
        <p>Creating a positive work environment enhances creativity and collaboration among team members.</p>
      `,
      author: 'Global Business Team',
    },
  },
};

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t, language, dir } = useLanguage();
  const ArrowIcon = dir === 'rtl' ? ArrowRight : ArrowLeft;
  
  const articleId = parseInt(id || '1');
  const article = t.blog.articles.find(a => a.id === articleId);
  const content = blogContent[language as 'ar' | 'en'][articleId as keyof typeof blogContent.ar];
  const image = blogImages[articleId];

  if (!article || !content) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero */}
        <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
          <img
            src={image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
          <div className="absolute inset-0 flex items-end">
            <div className="section-container pb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex items-center gap-4 text-sm text-white/80 mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Tag className="h-4 w-4" />
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {content.author}
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-4xl">
                  {article.title}
                </h1>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 lg:py-16">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <Button asChild variant="ghost" className="mb-8">
                <Link to="/blog">
                  <ArrowIcon className="h-4 w-4 me-2" />
                  {language === 'ar' ? 'العودة للمدونة' : 'Back to Blog'}
                </Link>
              </Button>
              
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="prose prose-lg max-w-none prose-headings:text-primary prose-a:text-accent"
                dangerouslySetInnerHTML={{ __html: content.content }}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default BlogPost;
