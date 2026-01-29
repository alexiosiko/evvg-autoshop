import React from 'react';
import { ArrowRight, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';
import { IMAGES } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-end justify-center overflow-hidden bg-brand-dark">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${IMAGES.SHOP_WIDE})` }}
      >
        {/* Adjusted gradient: Darker at bottom fading to transparent at top to support bottom text */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/60 to-transparent"></div>
      </div>

      {/* Content - Positioned at bottom center with padding */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full pb-28 sm:pb-36">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/30 text-brand-accent text-sm font-bold tracking-wide mb-6 backdrop-blur-sm shadow-lg"
          >
            <Wrench size={14} />
            <span className="uppercase">Langley's Trusted Mechanics</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight mb-6 drop-shadow-2xl"
          >
            Your Trusted Auto <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-yellow-200">
              Repair Service Provider
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg sm:text-xl text-slate-200 mb-8 max-w-2xl leading-relaxed drop-shadow-lg mx-auto font-medium"
          >
            Welcome to EVVG Auto Services, a family-owned mechanic business with over 30 years of dedicated service.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto"
          >
            <motion.a 
              href="#contact" 
              whileHover={{ scale: 1.05, translateY: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-lg text-slate-900 bg-brand-accent hover:bg-amber-400 transition-colors shadow-lg hover:shadow-brand-accent/20"
            >
              Contact Us
              <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
            </motion.a>
            <motion.a 
              href="#services" 
              whileHover={{ scale: 1.05, translateY: -2, backgroundColor: 'rgba(255,255,255,0.1)' }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-slate-400 backdrop-blur-sm bg-slate-900/40 text-base font-bold rounded-lg text-white hover:border-white transition-colors"
            >
              View Services
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-slate-400 z-20"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-slate-300">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-brand-accent to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;