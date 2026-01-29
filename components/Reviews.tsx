import React from 'react';
import { REVIEWS } from '../constants';
import { Star, Quote } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const Reviews: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section id="reviews" className="py-16 bg-slate-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-brand-blue font-bold tracking-wider uppercase text-xs mb-1">Testimonials</h2>
          <h3 className="text-3xl font-bold text-slate-900 mb-3">Trusted by the Community</h3>
          <div className="flex justify-center items-center gap-2">
            <div className="flex text-brand-accent">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} fill="currentColor" size={18} />
              ))}
            </div>
            <span className="font-bold text-slate-700 text-base">5.0 Average Rating</span>
          </div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {REVIEWS.map((review, idx) => (
            <motion.div 
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex flex-col h-full hover:shadow-md transition-shadow duration-300 relative group"
            >
              <Quote className="absolute top-4 right-4 text-brand-silver/20 w-6 h-6 group-hover:text-brand-accent/20 transition-colors" />
              
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-slate-100 flex-shrink-0 shadow-sm">
                  <img 
                    src={review.image} 
                    alt={review.name} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${review.name}&background=f59e0b&color=fff`;
                    }}
                  />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm leading-tight">{review.name}</h4>
                  <div className="flex text-brand-accent mt-0.5">
                    {[...Array(review.stars)].map((_, i) => (
                      <Star key={i} fill="currentColor" size={12} />
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex-grow">
                <p className="text-slate-600 italic leading-relaxed text-xs">
                  "{review.text}"
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;