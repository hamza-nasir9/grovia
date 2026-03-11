// app/services/page.js
'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  FaRocket,
  FaChartLine,
  FaBullseye,
  FaUsers,
  FaSearch,
  FaShoppingCart,
  FaHashtag,
  FaArrowRight,
  FaCheckCircle,
  FaStar,
  FaLightbulb,
  FaGlobe,
  FaMobileAlt,
  FaVideo,
  FaPalette
} from 'react-icons/fa';
import { FiTrendingUp, FiTarget, FiUsers as FiUsersIcon, FiDollarSign } from 'react-icons/fi';

// Services Data for cards
const services = [
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description: "Data-driven strategies for maximum ROI and brand growth across all digital channels.",
    icon: <FaRocket className="text-3xl" />,
    color: "from-green-500 to-emerald-600",
    stats: "300-500% ROI Increase",
    features: ["Meta/Google Ads", "Social Media Marketing", "PPC Campaigns", "Analytics"]
  },
  {
    id: "social-media-marketing",
    title: "Social Media Marketing",
    description: "Build engaged communities and drive brand awareness through strategic social media management.",
    icon: <FaHashtag className="text-3xl" />,
    color: "from-blue-500 to-cyan-600",
    stats: "200-400% Engagement Growth",
    features: ["Content Strategy", "Community Management", "Influencer Marketing", "Social Ads"]
  },
  {
    id: "seo-optimization",
    title: "SEO & Content",
    description: "Organic growth through search engine dominance and strategic content marketing.",
    icon: <FaSearch className="text-3xl" />,
    color: "from-purple-500 to-pink-600",
    stats: "200-300% Organic Traffic",
    features: ["Technical SEO", "Keyword Strategy", "Content Creation", "Link Building"]
  },
  {
    id: "ecommerce-solutions",
    title: "E-commerce Solutions",
    description: "Optimize online stores for maximum conversions and seamless customer experiences.",
    icon: <FaShoppingCart className="text-3xl" />,
    color: "from-orange-500 to-red-600",
    stats: "200-400% Sales Growth",
    features: ["Shopify Development", "CRO", "Email Marketing", "Cart Recovery"]
  },
  {
    id: "brand-strategy",
    title: "Brand Strategy",
    description: "Build memorable brands that resonate with audiences and drive customer loyalty.",
    icon: <FaPalette className="text-3xl" />,
    color: "from-teal-500 to-emerald-600",
    stats: "300-500% Brand Awareness",
    features: ["Brand Identity", "Positioning", "Visual Design", "Launch Strategy"]
  },
  {
    id: "web-development",
    title: "Web Development",
    description: "High-performance websites that convert visitors to customers with seamless UX.",
    icon: <FaGlobe className="text-3xl" />,
    color: "from-red-500 to-orange-600",
    stats: "<2s Loading Speed",
    features: ["Custom Development", "React/Next.js", "Speed Optimization", "Security"]
  }
];

// Stats Data
const stats = [
  { value: "300+", label: "Projects Completed", icon: <FaCheckCircle /> },
  { value: "98%", label: "Client Satisfaction", icon: <FaStar /> },
  { value: "450%", label: "Average ROI", icon: <FiTrendingUp /> },
  { value: "50+", label: "Industries Served", icon: <FaUsers /> }
];

export default function ServicesPage() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      setScrollProgress(progress);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation variants
  const fadeInUp = {
    hidden: { y: 60, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-green-500/5 to-emerald-500/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -150, 0],
            y: [0, 150, 0],
            rotate: [360, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-emerald-500/5 to-green-500/5 rounded-full blur-3xl"
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Hero Section - 50vh */}
      <section className="relative min-h-[50vh] flex items-center px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-emerald-900/20" />
        
        <div className="relative z-10 max-w-7xl mx-auto w-full py-16">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm text-green-400 mb-8"
          >
            <Link href="/" className="hover:text-green-300">Home</Link>
            <span className="text-white/50">/</span>
            <span className="text-white">Services</span>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-green-900/30 backdrop-blur-sm rounded-full border border-green-500/30"
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-green-400 font-medium">OUR SERVICES</span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-300 bg-clip-text text-transparent">
                Marketing Services
              </span>
              <br />
              <span className="text-white/90">That Drive Results</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
              className="text-xl sm:text-2xl md:text-3xl text-white/80 max-w-3xl mb-8"
            >
              Data-driven strategies that deliver measurable growth and maximum ROI for your business.
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  className="bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-white/10"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-green-400">{stat.icon}</div>
                    <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
                  </div>
                  <div className="text-white/70 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-4 mt-12"
            >
              <Link
                href="/contact"
                className="group px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-green-500/30 transition-all flex items-center gap-3"
              >
                <span>Get Started Now</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section id="services" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Our <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Comprehensive marketing solutions tailored to your business goals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Link href={`/servicesdetails/${service.id}`}>
                  <div className="relative h-full">
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500`} />
                    <div className="relative bg-gradient-to-br from-gray-900/50 to-black rounded-2xl p-6 border border-white/10 group-hover:border-green-500/50 transition-all h-full">
                      <div className="flex items-start justify-between mb-6">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${service.color}`}>
                          <div className="text-white">
                            {service.icon}
                          </div>
                        </div>
                        <div className="text-green-400 opacity-0 group-hover:opacity-100 transition-opacity">
                          <FaArrowRight className="text-xl" />
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                      <p className="text-white/70 mb-6">{service.description}</p>
                      
                      <div className="mb-6">
                        <div className="text-green-400 font-bold mb-2">{service.stats}</div>
                        <div className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                              <span className="text-white/80 text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="pt-4 border-t border-white/10">
                        <div className="flex items-center gap-2 text-green-400 group-hover:gap-3 transition-all">
                          <span className="text-sm font-medium">Learn More</span>
                          <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900/50 to-black rounded-3xl p-8 md:p-12 border border-green-900/30 text-center"
          >
            <div className="inline-block p-4 rounded-2xl bg-green-900/30 mb-6">
              <FaLightbulb className="text-green-400 text-3xl" />
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Ready to <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">Transform</span> Your Business?
            </h2>
            
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how our marketing services can drive growth and deliver exceptional ROI for your brand.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-green-500/30 transition-all flex items-center justify-center gap-3"
              >
                <span>Start Your Project</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/projects"
                className="px-8 py-4 bg-transparent border border-green-500/30 text-green-400 font-bold rounded-full hover:bg-green-900/20 transition-all"
              >
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-emerald-500 z-50 origin-left"
        style={{ transform: `scaleX(${scrollProgress})` }}
      />
    </main>
  );
}