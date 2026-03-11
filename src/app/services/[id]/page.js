// app/services/[id]/page.jsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { services } from '@/Component/data/services';
import { 
  FaArrowLeft, 
  FaCheck, 
  FaCalendarAlt, 
  FaMoneyBill, 
  FaRocket,
  FaChartLine,
  FaUsers,
  FaStar,
  FaLightbulb,
  FaCogs,
  FaHandshake
} from 'react-icons/fa';

export default function ServiceDetailPage() {
  const params = useParams();
  const serviceId = params.id;
  const service = services.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Link href="/services" className="text-green-400 hover:underline">
            ← Back to Services
          </Link>
        </div>
      </div>
    );
  }

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
          className="absolute top-1/4 left-10 w-[600px] h-[600px] bg-gradient-to-r from-green-900/10 to-emerald-900/5 rounded-full blur-3xl"
        ></motion.div>
        
        <motion.div 
          animate={{ 
            scale: [1.1, 1, 1.1],
            opacity: [0.05, 0.03, 0.05]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute bottom-1/4 right-10 w-[700px] h-[700px] bg-gradient-to-l from-emerald-900/15 to-green-900/10 rounded-full blur-3xl"
        ></motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link 
            href="/services"
            className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
          >
            <FaArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-900/30 to-emerald-900/20 backdrop-blur-md rounded-full border border-green-500/30 mb-6">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm">SERVICE DETAILS</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
                {service.title}
              </h1>
              
              <p className="text-gray-300 text-lg md:text-xl max-w-3xl mb-8">
                {service.description}
              </p>
              
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30">
                    <FaMoneyBill className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Starting Price</div>
                    <div className="text-xl font-bold text-white">{service.pricing}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30">
                    <FaCalendarAlt className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Delivery Time</div>
                    <div className="text-xl font-bold text-white">{service.deliveryTime}</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-auto">
              <div className="text-9xl opacity-20">
                {service.icon}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {Object.entries(service.stats).map(([key, value], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center p-6 bg-gradient-to-b from-gray-900/40 to-gray-800/20 backdrop-blur-sm rounded-2xl border border-green-500/20"
              >
                <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">{value}</div>
                <div className="text-gray-300 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Left Column - Features */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-md rounded-3xl border border-green-500/20 p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <FaLightbulb className="w-6 h-6 text-green-400" />
                What We Offer
              </h2>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {service.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <FaCheck className="w-3 h-3 text-green-400" />
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Process Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-md rounded-3xl border border-green-500/20 p-8">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <FaCogs className="w-6 h-6 text-green-400" />
                  Our Process
                </h2>
                
                <div className="space-y-8">
                  {service.process.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-6"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                          {step.step}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                        <p className="text-gray-400">{step.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Technologies & Portfolio */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Technologies */}
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-md rounded-3xl border border-green-500/20 p-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                Technologies We Use
              </h2>
              
              <div className="flex flex-wrap gap-3">
                {service.technologies.map((tech, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="px-4 py-2 bg-green-900/20 text-green-300 rounded-full border border-green-500/20 text-sm hover:bg-green-900/30 hover:border-green-500/40 transition-all cursor-pointer"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Portfolio Examples */}
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-md rounded-3xl border border-green-500/20 p-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                Portfolio Examples
              </h2>
              
              <div className="space-y-4">
                {service.portfolio.map((example, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-300">{example}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-green-900/30 to-emerald-900/20 backdrop-blur-md rounded-3xl border border-green-500/30 p-8"
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/10 border border-green-500/30 flex items-center justify-center">
                  <FaHandshake className="w-8 h-8 text-green-400" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">
                  Ready to Get Started?
                </h3>
                
                <p className="text-gray-300 text-sm mb-6">
                  Let's discuss your project requirements and create a customized solution for you.
                </p>
                
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 bg-gradient-to-r from-green-600 to-emerald-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-green-500/40 transition-all duration-300"
                  >
                    Book Free Consultation
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400">
              Common questions about {service.title}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: `How long does ${service.title} take?`,
                a: service.deliveryTime === 'Ongoing' 
                  ? 'This is an ongoing service with monthly deliverables and continuous optimization.' 
                  : `Typically takes ${service.deliveryTime} depending on project complexity.`
              },
              {
                q: `What's included in the ${service.pricing} package?`,
                a: 'The package includes all features mentioned above, with regular updates and support.'
              },
              {
                q: 'Do you provide custom solutions?',
                a: 'Yes, we tailor our services to meet your specific business requirements and goals.'
              },
              {
                q: 'What happens after the project is completed?',
                a: 'We provide ongoing support, maintenance, and optimization to ensure continued success.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-gradient-to-br from-gray-900/40 to-gray-800/20 backdrop-blur-sm rounded-2xl border border-green-500/20"
              >
                <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  {faq.q}
                </h4>
                <p className="text-gray-400 text-sm">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}