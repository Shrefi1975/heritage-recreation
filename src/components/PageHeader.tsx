import React, { useState } from 'react';
import { motion } from 'framer-motion';
interface PageHeaderProps {
  title: string;
  subtitle?: string;
  image: string;
}
const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  image
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  return <section className="relative min-h-[45vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-primary/60 transition-opacity duration-700 ${imageLoaded ? 'opacity-0' : 'opacity-100'}`} />
        <img src={image} alt={title} className={`w-full h-full object-cover transition-opacity duration-700 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`} onLoad={() => setImageLoaded(true)} loading="eager" decoding="async" fetchPriority="high" />
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/85 via-primary/70 to-primary/90" />

      {/* Content */}
      <div className="section-container relative z-10 text-center py-[130px]">
        <motion.h1 initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} className="text-4xl md:text-5xl font-bold text-white mb-4 lg:text-3xl">
          {title}
        </motion.h1>
        {subtitle && <motion.p initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.1
      }} className="text-xl text-white/90 max-w-3xl mx-auto md:text-xl">
            {subtitle}
          </motion.p>}
      </div>

      {/* Wave Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
          <path d="M0 60L48 55C96 50 192 40 288 35C384 30 480 30 576 33.3C672 36.7 768 43.3 864 45C960 46.7 1056 43.3 1152 38.3C1248 33.3 1344 26.7 1392 23.3L1440 20V60H1392C1344 60 1248 60 1152 60C1056 60 960 60 864 60C768 60 672 60 576 60C480 60 384 60 288 60C192 60 96 60 48 60H0Z" className="fill-background" />
        </svg>
      </div>
    </section>;
};
export default PageHeader;