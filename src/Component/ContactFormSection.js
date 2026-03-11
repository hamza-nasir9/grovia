// components/ContactFormSection.jsx
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaPaperPlane, FaUser, FaEnvelope, FaComment, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const menuItems = [
    { label: 'HOME', href: '#' },
    { label: 'ABOUT', href: '#' },
    { label: 'PROJECTS', href: '#' },
    { label: 'REVIEWS', href: '#' },
    { label: 'SERVICES', href: '#' },
  ];

  const services = [
    'SEO',
    'Social Media Marketing',
    'Performance Marketing',
    'Website Development',
    'Content Strategy',
    'Branding'
  ];

  return (
    <section className="py-20 md:py-32 bg-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
        
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.03, 0.05, 0.03]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-gradient-to-r from-green-900/10 to-emerald-900/5 rounded-full blur-3xl"
        ></motion.div>
        
        <motion.div 
          animate={{ 
            scale: [1.1, 1, 1.1],
            opacity: [0.05, 0.03, 0.05]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute bottom-1/4 right-10 w-[600px] h-[600px] bg-gradient-to-l from-emerald-900/15 to-green-900/10 rounded-full blur-3xl"
        ></motion.div>
        
        {/* Circuit Pattern */}
        <div className="absolute inset-0 opacity-[0.01]" style={{
          backgroundImage: `linear-gradient(90deg, transparent 79px, rgba(34, 197, 94, 0.03) 79px, rgba(34, 197, 94, 0.03) 81px, transparent 81px),
                           linear-gradient(0deg, transparent 79px, rgba(34, 197, 94, 0.03) 79px, rgba(34, 197, 94, 0.03) 81px, transparent 81px)`,
          backgroundSize: '80px 80px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-900/30 to-emerald-900/20 backdrop-blur-md rounded-full border border-green-500/30 mb-8"
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-400 font-medium tracking-wider">
              GET IN TOUCH
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6"
          >
             Let's Talk!
            
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              
              </h3>
              <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-emerald-400 mx-auto mb-4 rounded-full"></div>
              <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
                Get a personalized quote based on your specific business needs and goals
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="flex justify-center">
          {/* Middle Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className=""
          >
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-md rounded-3xl border border-green-500/20 p-6 md:p-8 lg:p-12">
              {/* Success Message */}
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mb-6 p-4 bg-gradient-to-r from-green-900/30 to-emerald-900/20 rounded-xl border border-green-500/30"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                        <FaPaperPlane className="w-4 h-4 text-green-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white">Message Sent Successfully!</h4>
                        <p className="text-gray-300 text-sm">We'll get back to you within 24 hours.</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <label className="flex items-center gap-3 text-gray-300 text-sm font-medium mb-3">
                    <FaUser className="w-4 h-4 text-green-400" />
                    Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 pl-12 bg-gray-900/50 border border-green-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all"
                    />
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                      <FaUser className="w-4 h-4 text-green-400" />
                    </div>
                  </div>
                </motion.div>

                {/* Email Field */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label className="flex items-center gap-3 text-gray-300 text-sm font-medium mb-3">
                    <FaEnvelope className="w-4 h-4 text-green-400" />
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter your email address"
                      className="w-full px-4 py-3 pl-12 bg-gray-900/50 border border-green-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all"
                    />
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                      <FaEnvelope className="w-4 h-4 text-green-400" />
                    </div>
                  </div>
                </motion.div>

                {/* Message Field */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <label className="flex items-center gap-3 text-gray-300 text-sm font-medium mb-3">
                    <FaComment className="w-4 h-4 text-green-400" />
                    Message
                  </label>
                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Write your message here..."
                      className="w-full px-4 py-3 pl-12 bg-gray-900/50 border border-green-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all resize-none"
                    />
                    <div className="absolute left-4 top-4">
                      <FaComment className="w-4 h-4 text-green-400" />
                    </div>
                  </div>
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                    className={`w-full py-4 bg-gradient-to-r from-green-600 to-emerald-500 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-green-500/40 transition-all duration-300 flex items-center justify-center gap-3 ${
                      isSubmitting ? 'opacity-80 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </motion.div>

                {/* Privacy Note */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="text-gray-400 text-sm text-center"
                >
                  By submitting this form, you agree to our Privacy Policy and Terms of Service.
                </motion.p>
              </form>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { AnimatePresence } from 'framer-motion';