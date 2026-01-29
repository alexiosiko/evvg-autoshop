import React from 'react';
import { COMPANY_INFO, IMAGES } from '../constants';
import { motion } from 'framer-motion';
import { Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="flex items-center gap-3">
               <div className="bg-white p-1 rounded-sm">
                  <img src={IMAGES.LOGO} alt="Logo" className="h-8 w-auto" />
               </div>
               <span className="font-bold text-white tracking-wide">EVVG AUTO</span>
            </div>
            
            <a 
              href={COMPANY_INFO.facebook} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-400 hover:text-[#1877F2] transition-colors"
              aria-label="Visit our Facebook page"
            >
              <Facebook size={20} />
              <span className="text-sm font-medium">Follow us on Facebook</span>
            </a>
          </div>

          <div className="text-center md:text-right text-sm">
            <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</p>
            <p className="mt-1">Serving Langley, BC and surrounding areas.</p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;