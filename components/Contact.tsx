import React from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import { COMPANY_INFO } from '../constants';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-brand-accent font-bold tracking-wider uppercase text-sm mb-2">Get In Touch</h2>
            <h3 className="text-4xl font-bold mb-8">Visit Our Shop</h3>
            
            <div className="space-y-8">
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-start gap-4"
              >
                <div className="bg-white/10 p-3 rounded-lg">
                  <MapPin className="text-brand-accent h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Address</h4>
                  <p className="text-gray-300">{COMPANY_INFO.address}</p>
                  <a 
                    href={COMPANY_INFO.mapsLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-brand-blue hover:text-white text-sm mt-2 inline-block transition-colors"
                  >
                    Get Directions &rarr;
                  </a>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-start gap-4"
              >
                <div className="bg-white/10 p-3 rounded-lg">
                  <Phone className="text-brand-accent h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Phone</h4>
                  <p className="text-gray-300 mb-1">Call us to book an appointment.</p>
                  <a href={`tel:${COMPANY_INFO.phone}`} className="text-xl font-bold hover:text-brand-blue transition-colors">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-start gap-4"
              >
                <div className="bg-white/10 p-3 rounded-lg">
                  <Clock className="text-brand-accent h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Business Hours</h4>
                  <p className="text-gray-300">Monday — Friday: 9am — 7pm</p>
                  <p className="text-gray-300">Saturday: 10am — 5pm</p>
                  <p className="text-gray-400 text-sm">Sunday: Closed</p>
                </div>
              </motion.div>

               <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-start gap-4"
               >
                <div className="bg-white/10 p-3 rounded-lg">
                  <Mail className="text-brand-accent h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Email</h4>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-gray-300 hover:text-white transition-colors">{COMPANY_INFO.email}</a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Map/Form Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white rounded-2xl overflow-hidden p-1 h-full min-h-[400px]"
          >
             <iframe 
               width="100%" 
               height="100%" 
               className="w-full h-full rounded-xl"
               frameBorder="0" 
               scrolling="no" 
               marginHeight={0} 
               marginWidth={0} 
               src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=5658%20Production%20Way,%20Langley%20BC%20V3A%204N4+(EVG%20Auto%20Services)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
            </iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;