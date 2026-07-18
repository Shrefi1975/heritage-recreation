import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Tag, ArrowLeft, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

// Blog images
import supplyPartnerImg from '@/assets/blog/supply-partner.jpg';
import agricultureExportImg from '@/assets/blog/agriculture-export.jpg';
import constructionManagementImg from '@/assets/blog/construction-management.jpg';
import itSolutionsImg from '@/assets/blog/it-solutions.jpg';
import companyFormationImg from '@/assets/blog/company-formation.jpg';
import hrSuccessImg from '@/assets/blog/hr-success.jpg';
import blogHeroImg from '@/assets/blog/blog-hero.jpg';

const blogImages: { [key: number]: string } = {
  1: supplyPartnerImg,
  2: agricultureExportImg,
  3: constructionManagementImg,
  4: itSolutionsImg,
  5: companyFormationImg,
  6: hrSuccessImg,
};

const Blog: React.FC = () => {
  const { t, dir } = useLanguage();
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-primary py-20">
          <div className="section-container text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              {t.blog.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/80 max-w-2xl mx-auto"
            >
              {t.blog.subtitle}
            </motion.p>
          </div>
        </section>

        <section className="py-20 lg:py-24">
          <div className="section-container max-w-7xl">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {t.blog.articles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <Link to={`/blog/${article.id}`} className="block">
                    <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="relative h-52 overflow-hidden">
                        <img
                          src={blogImages[article.id]}
                          alt={article.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute top-4 start-4">
                          <span className="px-3 py-1 bg-accent text-white text-xs font-medium rounded-full">
                            {article.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-7 lg:p-8">
                        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4 uppercase tracking-wider">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="h-3.5 w-3.5" />
                            {article.date}
                          </span>
                        </div>
                        <h3 className="font-bold text-xl leading-snug text-primary mb-3 group-hover:text-accent transition-colors line-clamp-2">
                          {article.title}
                        </h3>
                        <p className="text-muted-foreground text-[15px] leading-[1.75] line-clamp-3 mb-5">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center gap-2 text-accent font-semibold text-sm">
                          {t.blog.readMore}
                          <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Blog;
