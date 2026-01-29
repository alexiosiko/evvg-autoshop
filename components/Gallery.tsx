import React from 'react';
import { IMAGES, COMPANY_INFO } from '../constants';
import { Facebook } from 'lucide-react';
import { motion } from 'framer-motion';

const Gallery: React.FC = () => {
  const images = [
    { src: IMAGES.JEEP_LIFT, alt: "Vehicle on lift", span: "md:col-span-2 md:row-span-2", title: "Heavy Duty Repairs" },
    { src: IMAGES.SHOP_TIRES, alt: "Tire service", span: "md:col-span-1 md:row-span-1", title: "Tire & Wheel" },
    { src: IMAGES.MECHANIC_SMILE, alt: "Service bay", span: "md:col-span-1 md:row-span-1", title: "Clean Facilities" },
    { src: IMAGES.SHOP_DARK, alt: "Shop equipment", span: "md:col-span-1 md:row-span-1", title: "Modern Equipment" },
    { src: IMAGES.EXTRA, alt: "Diagnostic", span: "md:col-span-1 md:row-span-1", title: "Diagnostics" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="gallery" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
          >
            <h2 className="text-brand-accent font-bold tracking-wider uppercase text-sm mb-2">Our Portfolio</h2>
            <h3 className="text-4xl font-bold text-white">Inside The Shop</h3>
          </motion.div>
          <motion.a 
            href={COMPANY_INFO.facebook} 
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors border-b border-slate-700 pb-1 hover:border-white"
          >
            <Facebook size={18} />
            <span>Follow us on Social Media</span>
          </motion.a>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[280px]"
        >
          {images.map((img, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className={`relative group overflow-hidden rounded-xl bg-slate-800 ${img.span} shadow-2xl`}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-brand-accent text-xs font-bold uppercase tracking-wider mb-1">EVVG Auto</span>
                <span className="text-white font-bold text-lg">{img.title}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;