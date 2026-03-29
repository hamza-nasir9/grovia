'use client'
import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { 
  FaFacebook, FaGoogle, FaInstagram, FaSnapchat, FaLinkedin, 
  FaHtml5, FaCss3Alt, FaJs, FaWordpress, FaShopify, FaPhp, 
  FaPalette, FaDatabase, FaReact, FaNodeJs, FaAws,
  FaChartLine, FaLaptopCode, FaPaintBrush
} from 'react-icons/fa';
import { 
  SiMagento, SiAdobephotoshop, SiFigma, 
  SiNextdotjs, SiTailwindcss 
} from 'react-icons/si';
import { 
  MdOutlineDesignServices, MdWeb, MdAnalytics,
  MdOutlineAutoAwesome, MdOutlineTrendingUp
} from 'react-icons/md';
import { 
  TbBrandMeta, TbBrandTiktok, TbBrandSnapchat 
} from 'react-icons/tb';

const GroviaServices = () => {
  const [activeService, setActiveService] = useState('digital-marketing');

  // Service Card Component
  const ServiceCard = ({ service, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.2 });

    // Service data with proper icons
    const servicesData = {
      'digital-marketing': {
        title: 'Digital Marketing',
        icon: MdOutlineTrendingUp,
        features: [
          { name: 'Facebook Ads', icon: FaFacebook },
          { name: 'Google Ads', icon: FaGoogle },
          { name: 'Instagram Ads', icon: FaInstagram },
          { name: 'Snapchat Ads', icon: TbBrandSnapchat },
          { name: 'LinkedIn Ads', icon: FaLinkedin }
        ],
        color: 'from-blue-500/20 to-green-500/20',
        tech: ['AI Targeting', 'Analytics', 'Automation']
      },
      'web-development': {
        title: 'Website Design & Development',
        icon: FaLaptopCode,
        features: [
          { name: 'HTML/CSS/JS', icon: FaHtml5 },
          { name: 'WordPress', icon: FaWordpress },
          { name: 'Shopify', icon: FaShopify },
          { name: 'Magento', icon: SiMagento },
          { name: 'React/Next.js', icon: FaReact }
        ],
        color: 'from-purple-500/20 to-pink-500/20',
        tech: ['React/Next.js', 'Responsive', 'SEO Optimized']
      },
      'graphic-design': {
        title: 'Graphic Designing',
        icon: FaPaintBrush,
        features: [
          { name: 'Post Design', icon: SiAdobephotoshop },
          { name: 'Logo Design', icon: SiAdobephotoshop },
          { name: 'Carousel Design', icon: SiAdobephotoshop },
          { name: 'Brand Identity Design', icon: SiAdobephotoshop }
        ],
        color: 'from-orange-500/20 to-yellow-500/20',
        tech: ['Adobe Suite', 'Figma', '3D Design']
      }
    };

    const currentService = servicesData[service];
    const IconComponent = currentService.icon;

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        whileHover={{ y: -10, transition: { duration: 0.3 } }}
        className={`relative group cursor-pointer ${
          activeService === service ? 'ring-2 ring-green-400' : ''
        }`}
        onClick={() => setActiveService(service)}
      >
        <div className={`absolute -inset-1 rounded-2xl blur-lg transition-all duration-500 ${
          activeService === service ? 'bg-green-500/30 opacity-100' : 'opacity-0'
        }`}></div>

        <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 md:p-8 transition-all duration-300 group-hover:border-green-400/30">
          <div className="flex items-center gap-4 mb-6">
            <div className={`p-4 rounded-xl bg-gradient-to-br ${currentService.color}`}>
              <IconComponent className="text-3xl text-white" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white">{currentService.title}</h3>
          </div>

          {/* Feature List with Icons */}
          <ul className="space-y-3 mb-8">
            {currentService.features.map((feature, idx) => {
              const FeatureIcon = feature.icon;
              return (
                <motion.li
                  key={feature.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.1 * idx }}
                  className="flex items-center gap-3 text-gray-300"
                >
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  <span className="flex-1">{feature.name}</span>
                  <FeatureIcon className="text-lg text-green-400/60" />
                </motion.li>
              );
            })}
          </ul>

          <div className="flex flex-wrap gap-2 mb-6">
            {currentService.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-gray-800/50 rounded-full text-xs text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-3 px-6 rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300"
          >
            Let's Scale
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.a>
        </div>
      </motion.div>
    );
  };

  // Services Section
  const ServicesSection = () => {
    return (
      <section id="services" className="py-10">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Our <span className="text-green-400">Premium</span> Services
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              We combine cutting-edge technology with creative excellence to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <ServiceCard service="digital-marketing" index={0} />
            <ServiceCard service="web-development" index={1} />
            <ServiceCard service="graphic-design" index={2} />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 pt-16 border-t border-gray-800"
          >
          </motion.div>
        </div>
      </section>
    );
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <ServicesSection />
    </div>
  );
};

export default GroviaServices;