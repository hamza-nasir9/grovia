// app/contact/page.jsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaPaperPlane, FaUser, FaEnvelope, FaComment, 
  FaPhone, FaMapMarkerAlt, FaClock, FaCheckCircle,
  FaTag
} from 'react-icons/fa';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState('');
  const [focused, setFocused] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFocus = (field) => {
    setFocused(prev => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field) => {
    setFocused(prev => ({ ...prev, [field]: false }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setMessage('Message successfully bhej diya gaya! Hum jaldi reply karenge.');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setMessage(data.message || 'Kuch galat ho gaya, dobara try karen.');
      }
    } catch (err) {
      setStatus('error');
      setMessage('Network error – internet check karen.');
    }
  };

  const contactInfo = [
    // { icon: FaPhone, text: '+1 (555) 123-4567', label: 'Phone' },
    { icon: FaEnvelope, text: 'hello@grovia.com', label: 'Email' },
    { icon: FaMapMarkerAlt, text: 'New York, USA', label: 'Location' },
    { icon: FaClock, text: 'Mon-Fri, 9AM-6PM', label: 'Working Hours' }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden py-12 sm:py-16 md:py-20 px-4">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
        
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.03, 0.05, 0.03] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-gradient-to-r from-green-900/10 to-emerald-900/5 rounded-full blur-3xl"
        />
        
        <motion.div 
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.05, 0.03, 0.05] }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute bottom-1/4 right-10 w-[600px] h-[600px] bg-gradient-to-l from-emerald-900/15 to-green-900/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-900/30 to-emerald-900/20 backdrop-blur-md rounded-full border border-green-500/30 mb-6 md:mb-8"
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-400 font-medium tracking-wider text-sm sm:text-base">
              GET IN TOUCH
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-black mb-4"
          >
            Let's <span className="text-green-400">Talk!</span>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-400 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto px-4">
              Get a personalized quote based on your specific business needs and goals
            </p>
          </motion.div>
        </motion.div>

      {/* Contact Info Cards - 3 Cards Center */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.3 }}
  viewport={{ once: true }}
  className="flex justify-center items-center gap-3 sm:gap-4 mb-10 sm:mb-12 flex-wrap"
>
  {contactInfo.slice(0, 3).map((info, idx) => {
    const Icon = info.icon;
    return (
      <motion.div
        key={idx}
        whileHover={{ y: -5, scale: 1.02 }}
        className="bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-xl p-3 sm:p-4 text-center hover:border-green-500/30 transition-all duration-300 w-[100px] sm:w-[120px] md:w-[140px]"
      >
        <div className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-2 rounded-full bg-green-500/10 flex items-center justify-center">
          <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
        </div>
        <p className="text-[10px] sm:text-xs text-gray-400">{info.label}</p>
        <p className="text-[11px] sm:text-sm font-medium text-white truncate">{info.text}</p>
      </motion.div>
    );
  })}
</motion.div>

        {/* Form */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="w-full max-w-2xl"
          >
            <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-green-500/20 p-6 sm:p-8 md:p-10 shadow-2xl">
              {/* Success Message */}
              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="mb-6 p-4 bg-gradient-to-r from-green-900/40 to-emerald-900/30 rounded-xl border border-green-500/40"
                  >
                    <div className="flex items-center gap-3">
                      <FaCheckCircle className="w-5 h-5 text-green-400" />
                      <div>
                        <h4 className="font-bold text-white text-sm sm:text-base">Message Sent Successfully!</h4>
                        <p className="text-gray-300 text-xs sm:text-sm">{message}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Error Message */}
              <AnimatePresence>
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="mb-6 p-4 bg-gradient-to-r from-red-900/40 to-red-900/30 rounded-xl border border-red-500/40"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 text-red-400">✗</div>
                      <div>
                        <h4 className="font-bold text-white text-sm sm:text-base">Error!</h4>
                        <p className="text-gray-300 text-xs sm:text-sm">{message}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                {/* Name Field */}
                <div>
                  <label className="flex items-center gap-2 text-gray-300 text-xs sm:text-sm font-medium mb-2">
                    <FaUser className="w-3.5 h-3.5 text-green-400" />
                    Full Name
                  </label>
                  <div className={`relative transition-all duration-300 ${focused.name ? 'scale-[1.01]' : ''}`}>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => handleFocus('name')}
                      onBlur={() => handleBlur('name')}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 pl-10 bg-gray-900/60 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all text-sm sm:text-base"
                    />
                    <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label className="flex items-center gap-2 text-gray-300 text-xs sm:text-sm font-medium mb-2">
                    <FaEnvelope className="w-3.5 h-3.5 text-green-400" />
                    Email Address
                  </label>
                  <div className={`relative transition-all duration-300 ${focused.email ? 'scale-[1.01]' : ''}`}>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => handleFocus('email')}
                      onBlur={() => handleBlur('email')}
                      required
                      placeholder="hello@example.com"
                      className="w-full px-4 py-3 pl-10 bg-gray-900/60 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all text-sm sm:text-base"
                    />
                    <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                  </div>
                </div>

                {/* Phone Field */}
                <div>
                  <label className="flex items-center gap-2 text-gray-300 text-xs sm:text-sm font-medium mb-2">
                    <FaPhone className="w-3.5 h-3.5 text-green-400" />
                    Phone Number
                  </label>
                  <div className={`relative transition-all duration-300 ${focused.phone ? 'scale-[1.01]' : ''}`}>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => handleFocus('phone')}
                      onBlur={() => handleBlur('phone')}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 pl-10 bg-gray-900/60 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all text-sm sm:text-base"
                    />
                    <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label className="flex items-center gap-2 text-gray-300 text-xs sm:text-sm font-medium mb-2">
                    <FaTag className="w-3.5 h-3.5 text-green-400" />
                    Subject
                  </label>
                  <div className={`relative transition-all duration-300 ${focused.subject ? 'scale-[1.01]' : ''}`}>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => handleFocus('subject')}
                      onBlur={() => handleBlur('subject')}
                      placeholder="How can we help you?"
                      className="w-full px-4 py-3 pl-10 bg-gray-900/60 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all text-sm sm:text-base"
                    />
                    <FaTag className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label className="flex items-center gap-2 text-gray-300 text-xs sm:text-sm font-medium mb-2">
                    <FaComment className="w-3.5 h-3.5 text-green-400" />
                    Your Message
                  </label>
                  <div className={`relative transition-all duration-300 ${focused.message ? 'scale-[1.01]' : ''}`}>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => handleFocus('message')}
                      onBlur={() => handleBlur('message')}
                      required
                      rows={5}
                      placeholder="Tell us about your project..."
                      className="w-full px-4 py-3 pl-10 bg-gray-900/60 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all resize-none text-sm sm:text-base"
                    />
                    <FaComment className="absolute left-3 top-4 w-4 h-4 text-gray-500" />
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  whileHover={status !== 'loading' ? { scale: 1.02 } : {}}
                  whileTap={status !== 'loading' ? { scale: 0.98 } : {}}
                  className={`w-full py-3.5 bg-gradient-to-r from-green-600 to-emerald-500 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-green-500/30 transition-all duration-300 flex items-center justify-center gap-2 ${
                    status === 'loading' ? 'opacity-80 cursor-not-allowed' : ''
                  }`}
                >
                  {status === 'loading' ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </motion.button>

                {/* Privacy Note */}
                <p className="text-gray-500 text-[10px] sm:text-xs text-center">
                  By submitting, you agree to our{' '}
                  <a href="#" className="text-green-400 hover:text-green-300 transition">Privacy Policy</a>
                  {' '}and{' '}
                  <a href="#" className="text-green-400 hover:text-green-300 transition">Terms of Service</a>.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}