// app/services/page.jsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { services } from '@/Component/data/services';
import { 
  FaArrowRight, 
  FaCheck, 
  FaRocket, 
  FaChartLine, 
  FaUsers,
  FaCrown,
  FaShieldAlt,
  FaStar
} from 'react-icons/fa';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
        
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.03, 0.05, 0.03]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 left-10 w-[600px] h-[600px] bg-gradient-to-r from-green-900/10 to-emerald-900/5 rounded-full blur-3xl"
        ></motion.div>
        
        <motion.div 
          animate={{ 
            scale: [1.1, 1, 1.1],
            opacity: [0.05, 0.03, 0.05]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute bottom-20 right-10 w-[700px] h-[700px] bg-gradient-to-l from-emerald-900/15 to-green-900/10 rounded-full blur-3xl"
        ></motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-900/30 to-emerald-900/20 backdrop-blur-md rounded-full border border-green-500/30 mb-8"
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-400 font-medium tracking-wider">
              OUR SERVICES
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6"
          >
            Complete{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-400">
              Digital Solutions
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto"
          >
            We provide end-to-end digital marketing services to help your business grow online
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '500+', label: 'Projects Completed', icon: <FaRocket className="w-6 h-6" /> },
              { value: '98%', label: 'Client Satisfaction', icon: <FaStar className="w-6 h-6" /> },
              { value: '300+', label: 'Happy Clients', icon: <FaUsers className="w-6 h-6" /> },
              { value: '50+', label: 'Industry Awards', icon: <FaCrown className="w-6 h-6" /> },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center p-6 bg-gradient-to-b from-gray-900/40 to-gray-800/20 backdrop-blur-sm rounded-2xl border border-green-500/20"
              >
                <div className="text-green-400 mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Link href={`/services/${service.id}`}>
                <div className={`
                  relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-md 
                  rounded-3xl border border-green-500/20 p-8
                  transition-all duration-500 group-hover:border-green-500/40 
                  group-hover:shadow-2xl group-hover:shadow-green-900/30
                  h-full flex flex-col
                `}>
                  {/* Service Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                  </div>
                  
                  {/* Service Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-300 text-base leading-relaxed mb-6 flex-grow">
                    {service.shortDescription}
                  </p>
                  
                  {/* Features List */}
                  <div className="mb-8">
                    <div className="flex items-center gap-2 text-green-400 text-sm font-medium mb-3">
                      <FaCheck className="w-4 h-4" />
                      Key Features
                    </div>
                    <div className="space-y-2">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                          <span className="text-gray-400 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Bottom Section */}
                  <div className="mt-auto pt-6 border-t border-green-500/10">
                    <div className="flex items-center justify-between">
                      <div>
                        {/* <div className="text-xs text-gray-500">Starting from</div> */}
                        <div className="text-green-400 font-bold">{service.pricing}</div>
                      </div>
                      <div className="flex items-center gap-2 text-green-400">
                        <span className="text-sm">Learn More</span>
                        <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-green-500/20 transition-all duration-500 pointer-events-none"></div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our <span className="text-green-400">Working Process</span>
            </h2>
            <p className="text-gray-400">
              A proven 4-step process for guaranteed success
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '01', title: 'Discovery', desc: 'Understand your goals and requirements' },
              { number: '02', title: 'Strategy', desc: 'Develop customized solution plan' },
              { number: '03', title: 'Execution', desc: 'Implement with precision and quality' },
              { number: '04', title: 'Results', desc: 'Deliver measurable outcomes' },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-r from-green-500 to-emerald-400 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg shadow-green-500/30">
                    {step.number}
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-10 left-full w-8 h-0.5 bg-gradient-to-r from-green-500/40 to-emerald-500/20"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/10 backdrop-blur-md rounded-3xl border border-green-500/30 p-8 md:p-12">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Ready to Transform Your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-400">
                  Digital Presence?
                </span>
              </h3>
              
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Let's discuss how our services can help achieve your business goals. Get a free consultation today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-500 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-green-500/40 transition-all duration-300"
                  >
                    Get Free Consultation
                  </motion.button>
                </Link>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-green-500/50 text-green-400 font-bold rounded-full hover:bg-green-500/10 transition-all duration-300"
                >
                  View Case Studies
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}