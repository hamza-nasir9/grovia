'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaArrowRight, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { FiSend, FiMail, FiPhone, FiClock } from 'react-icons/fi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import Link from 'next/link';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      {/* Main Footer */}
      <footer className="relative bg-black text-white border-t border-green-900/30">
        {/* Top Gradient Border */}
        <div className="h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-green-500 w-full"></div>
        
        <div className="container mx-auto px-4 py-12">
          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">G</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                    Grovia
                  </h3>
                  <p className="text-green-400 text-sm font-medium">Digital Marketing Agency</p>
                </div>
              </div>
              
              <p className="text-gray-400">
                We help businesses grow through strategic digital marketing solutions. 
                Your success is our priority.
              </p>
              
              <div className="flex gap-4">
                {[
                  { icon: <FaFacebookF />, color: 'bg-blue-600', label: 'Facebook' , link :'https://www.facebook.com/profile.php?id=61585359040139'},
                  { icon: <FaInstagram />, color: 'bg-pink-600', label: 'Instagram' , link:'https://www.instagram.com/grovi_adigital/' },
                  { icon: <FaWhatsapp />, color: 'bg-green-600', label: 'WhatsApp', link:'https://wa.me/qr/5S7A3ZMGXKJDL1' },
                ].map((social, idx) => (
                  <motion.span
                    key={idx}
                    href="#"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`${social.color} w-10 h-10 rounded-lg flex items-center justify-center text-white hover:shadow-lg transition-all`}
                    aria-label={social.label}
                  >
                   <Link href={social.link}>  {social.icon}</Link>
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-xl font-bold text-white flex items-center gap-3">
                <div className="w-2 h-6 bg-green-500 rounded-full"></div>
                Quick Links
              </h3>
              
              <div className="space-y-3">
                {['Home', 'About Us', 'Services', 'Portfolio', 'Testimonials', 'Contact'].map((item, idx) => (
                  <motion.a
                    key={item}
                    href="#"
                    whileHover={{ x: 5 }}
                    className="flex items-center justify-between group py-2 border-b border-gray-800/50 last:border-0"
                  >
                    <span className="text-gray-400 group-hover:text-green-400 transition-colors">
                      {item}
                    </span>
                    <FaArrowRight className="text-green-500 text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Our Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-xl font-bold text-white flex items-center gap-3">
                <div className="w-2 h-6 bg-green-500 rounded-full"></div>
                Our Services
              </h3>
              
              <div className="space-y-3">
                {[
                  'SEO Optimization',
                  'Social Media Marketing',
                  'PPC Advertising',
                  'Web Development',
                  'Content Marketing',
                  'Brand Strategy'
                ].map((service, idx) => (
                  <motion.a
                    key={service}
                    href="#"
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 group py-2"
                  >
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-400 group-hover:text-green-400 transition-colors">
                      {service}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-xl font-bold text-white flex items-center gap-3">
                <div className="w-2 h-6 bg-green-500 rounded-full"></div>
                Contact Us
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-green-900/30 rounded-lg flex items-center justify-center">
                    <FiPhone className="text-green-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <a href="tel:+1234567890" className="text-white hover:text-green-400 transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-green-900/30 rounded-lg flex items-center justify-center">
                    <FiMail className="text-green-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a href="mailto:digitalgrovia@gmail.com" className="text-white hover:text-green-400 transition-colors">
                      digitalgrovia@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-green-900/30 rounded-lg flex items-center justify-center">
                    <HiOutlineLocationMarker className="text-green-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white">44433 Sterling Hwy Soldotna Alaska 99669</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-green-900/30 rounded-lg flex items-center justify-center">
                    <FiClock className="text-green-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Working Hours</p>
                    <p className="text-white">Mon - Fri: 9AM - 6PM</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="bg-gradient-to-r from-green-900/20 to-black border border-green-500/20 rounded-2xl p-8">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="text-center lg:text-left">
                  <h3 className="text-2xl font-bold text-white mb-2">Stay Updated</h3>
                  <p className="text-gray-400">Subscribe to our newsletter for the latest updates</p>
                </div>
                
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                  <div className="relative flex-1">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full bg-black/50 border border-gray-700 rounded-xl py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/30"
                      required
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2"
                  >
                    <FiSend />
                    Subscribe
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-center md:text-left">
                <p className="text-gray-500 text-sm">
                  © {new Date().getFullYear()} Grovia. All rights reserved.
                </p>
                <p className="text-gray-600 text-sm mt-1">
                  Digital Marketing Agency
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Disclaimer'].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-gray-500 hover:text-green-400 transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Floating Contact Button */}
        {/* <motion.a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.1, rotate: 360 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-6 right-6 w-14 h-14 bg-green-600 rounded-full flex items-center justify-center text-white shadow-2xl shadow-green-500/30 z-50"
        >
          <FaWhatsapp className="text-2xl" />
        </motion.a> */}
      </footer>

      {/* Chat Bot Bubble */}
      {/* <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5 }}
        className="fixed bottom-24 right-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg z-50 cursor-pointer"
      >
        <span className="text-sm font-medium">Need help? Chat with us</span>
      </motion.div> */}
    </>
  );
};

export default Footer;