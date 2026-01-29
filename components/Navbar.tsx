import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { IMAGES, NAVIGATION_LINKS, COMPANY_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-dark/95 backdrop-blur-sm shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="flex items-center gap-3 group">
               {/* Using a div for logo container to ensure visibility against dark/light backgrounds */}
               <motion.div 
                 whileHover={{ scale: 1.05 }}
                 className="bg-white p-1 rounded-md"
               >
                 <img src={IMAGES.LOGO} alt="EVG Auto Services" className="h-10 w-auto" />
               </motion.div>
               <span className={`font-bold text-xl tracking-wider transition-colors ${isScrolled ? 'text-white' : 'text-white drop-shadow-md'}`}>
                 EVVG AUTO
               </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {NAVIGATION_LINKS.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ scale: 1.05, color: '#f59e0b' }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-200 font-medium text-sm uppercase tracking-wide relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-brand-accent after:left-0 after:-bottom-1 after:transition-all hover:after:w-full"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a 
              href={`tel:${COMPANY_INFO.phone}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-brand-blue hover:bg-blue-600 text-white px-5 py-2.5 rounded-full font-bold transition-colors flex items-center gap-2 shadow-lg"
            >
              <Phone size={16} />
              <span>Call Now</span>
            </motion.a>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-brand-accent focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 w-full bg-brand-dark border-t border-gray-800 overflow-hidden shadow-xl"
          >
            <div className="px-4 pt-4 pb-8 space-y-2">
              {NAVIGATION_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-colors"
                >
                  {link.name}
                </a>
              ))}
               <a 
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="mt-4 w-full bg-brand-accent text-brand-dark px-5 py-3 rounded-md font-bold flex justify-center items-center gap-2 hover:bg-amber-400 transition-colors"
                >
                  <Phone size={18} />
                  <span>Call Us</span>
                </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;