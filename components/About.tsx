import React from 'react';
import { IMAGES } from '../constants';
import { CheckCircle2, Award, Users, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 -skew-x-12 translate-x-32 -z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src={IMAGES.TEAM} 
                alt="George at EVG Auto" 
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6">
                 <p className="text-white font-bold text-xl">George & The Team</p>
                 <p className="text-brand-accent text-sm font-medium uppercase tracking-wider">Master Mechanics</p>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-6 -right-6 w-full h-full bg-brand-blue/10 rounded-2xl -z-10 translate-x-4 translate-y-4"
            ></motion.div>
            <div className="absolute -top-10 -left-10 text-brand-accent/20">
               <svg width="100" height="100" viewBox="0 0 100 100" fill="currentColor">
                 <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                   <circle cx="2" cy="2" r="2" />
                 </pattern>
                 <rect width="100" height="100" fill="url(#dots)" />
               </svg>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-brand-blue font-bold tracking-wider uppercase text-sm mb-3">Who Are We</h2>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
                About <span className="text-brand-blue">EVVG Auto</span>
              </h3>
              
              <p className="text-slate-600 text-lg leading-relaxed mb-4">
                Our commitment to you is to provide honest, friendly, and on-time service. Visit a locally owned and operated business that has been serving the community since 1992. We are always keen to prove to our customers that we are different!
              </p>
              
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 my-6">
                <h4 className="font-bold text-slate-900 mb-2">How It Started</h4>
                <p className="text-slate-600 text-base leading-relaxed">
                  EVVG Auto Services is a family owned business that has been operating for over 20 years. When George, the owner, was starting the business he thought of various names for the shop. He eventually decided on the name EVVG, which was inspired by the names of his four children: <span className="font-semibold text-brand-blue">Elleni, Vassili, Vangeli, and Georgia.</span>
                </p>
              </div>

              <h4 className="font-bold text-lg text-slate-900 mb-4">Why EVVG?</h4>
              <ul className="space-y-3">
                 {[
                   "Fair and Transparent Pricing: Clear, honest pricing with no hidden fees.",
                   "Affordable Options: Quality service accessible to all budgets.",
                   "Value for Money: Excellent service that maximizes the value of your investment.",
                   "Trustworthy Advice: Honest recommendations tailored to your needs."
                 ].map((item, idx) => (
                   <motion.li 
                     key={idx}
                     initial={{ opacity: 0, y: 10 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.2 + (idx * 0.1) }}
                     className="flex items-start gap-3"
                   >
                     <CheckCircle2 className="text-brand-accent h-5 w-5 flex-shrink-0 mt-1" />
                     <span className="text-slate-700">{item}</span>
                   </motion.li>
                 ))}
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;