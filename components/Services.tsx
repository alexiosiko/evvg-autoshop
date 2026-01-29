import React from 'react';
import { Car, Gauge, Disc, Wrench, Zap, Droplet, ArrowRight } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import { IMAGES } from '../constants';

const Services: React.FC = () => {
  const services = [
    {
      icon: Car,
      title: "Tire and Wheels",
      description: "Get the most out of your vehicle's performance with our complete tire and wheel services. We offer precise alignments and rotations to give you a smoother and more efficient ride."
    },
    {
      icon: Droplet,
      title: "Oils",
      description: "Keep your engine running smoothly and lasting longer with our specialized oil services. Whether it's a regular oil change or a thorough fluid check, we're here to keep your vehicle fuel-efficient and healthy."
    },
    {
      icon: Gauge,
      title: "Engine Diagnostics",
      description: "Quickly pinpoint and solve engine problems with our advanced diagnostics. You can trust our skilled technicians to find reliable solutions for keeping your engine in top shape."
    },
    {
      icon: Disc,
      title: "Brakes and Suspensions",
      description: "Safety comes first with our expert brake and suspension services. We ensure your vehicle has dependable stopping power and stability, providing you and your passengers with a secure driving experience."
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-brand-blue font-bold tracking-wider uppercase text-sm mb-2">Our Expertise</h2>
          <h3 className="text-4xl font-bold text-brand-dark mb-4">Comprehensive Auto Services</h3>
          <p className="text-gray-600">
            We provide a full range of automotive repair and maintenance services for all makes and models.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 group"
            >
              <div className="w-14 h-14 bg-brand-blue/10 rounded-lg flex items-center justify-center text-brand-blue mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                <service.icon size={28} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Service Spotlight */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 bg-brand-dark rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 sm:p-14 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-white mb-4">Specialized Engine Work</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Our technicians are specialists in major engine work. Whether it's a timing belt replacement, head gasket repair, or a complete engine rebuild, we have the experience and precision required for heavy-duty jobs.
              </p>
              <ul className="space-y-3 mb-8">
                {['Transmission Service', 'Engine Rebuilds', 'Timing Chains'].map((item) => (
                   <li key={item} className="flex items-center text-brand-silver">
                     <span className="w-2 h-2 bg-brand-accent rounded-full mr-3"></span>
                     {item}
                   </li>
                ))}
              </ul>
              <motion.a 
                href="#contact" 
                whileHover={{ x: 5 }}
                className="text-brand-accent font-bold hover:text-white transition-colors inline-flex items-center"
              >
                Schedule Engine Service <ArrowRight className="ml-2 w-5 h-5"/>
              </motion.a>
            </div>
            <div className="relative h-64 lg:h-auto">
              <img 
                src={IMAGES.MECHANIC_ENGINE} 
                alt="Mechanic working on engine" 
                className="absolute inset-0 w-full h-full object-cover"
              />
               <div className="absolute inset-0 bg-brand-blue/20 mix-blend-multiply"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;