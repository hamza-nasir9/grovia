// app/about/page.jsx
'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { FaHistory, FaBullseye, FaEye, FaChevronDown } from 'react-icons/fa';
import { useState } from 'react';

export default function AboutCompany() {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const brands = [
    { name: "HLB HAMT", description: "Financial Services Leader" },
    { name: "HUB", description: "Tech Innovation Company" },
    { name: "JOCKEY®", description: "Global Lifestyle Brand" },
  ];

  const teamMembers = [
    { role: "Marketing Director", name: "Sarah Chen", exp: "8+ Years" },
    { role: "Creative Lead", name: "Alex Rivera", exp: "6+ Years" },
    { role: "SEO Specialist", name: "Michael Park", exp: "5+ Years" },
    { role: "Social Media Manager", name: "Jessica Wong", exp: "4+ Years" },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Main Content */}
      <main className="relative">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Gradient Orbs */}
          <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-gradient-to-r from-green-900/10 to-emerald-900/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-gradient-to-l from-emerald-900/10 to-green-900/5 rounded-full blur-3xl"></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `linear-gradient(90deg, rgba(34,197,94,0.1) 1px, transparent 1px),
                              linear-gradient(0deg, rgba(34,197,94,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="mb-16 md:mb-24 lg:mb-32"
          >
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-900/30 to-emerald-900/20 backdrop-blur-md rounded-full border border-green-500/30 mb-8 md:mb-12"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-400 font-medium tracking-wider">
                DIGITAL EXCELLENCE SINCE 2018
              </span>
            </motion.div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-8 md:mb-12">
              <span className="block text-white mb-4">ABOUT OUR</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-emerald-400 to-green-300">
                COMPANY
              </span>
            </h1>

            {/* Introduction */}
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
              {/* Left Column - Main Text */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  Let's get acquainted! We're not your average digital marketing agency—we're a team of passionate experts who live and breathe <span className="text-green-400 font-semibold">creativity, innovation,</span> and all things digital.
                </p>
                
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  At <span className="text-green-400 font-bold">Grovia</span>, we're on a mission to turn your online goals into reality, one strategy at a time! We're a group of tech-driven marketers, design enthusiasts, and social media strategists who believe digital marketing should be <span className="text-green-400 font-semibold">exciting, impactful, and results-focused.</span>
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
                  {[
                    { value: "150+", label: "Projects" },
                    { value: "150+", label: "Clients" },
                    { value: "5+", label: "Years" },
                    { value: "99%", label: "Satisfaction" },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center p-4 bg-gradient-to-b from-gray-900/40 to-gray-800/20 backdrop-blur-sm rounded-xl border border-green-500/20"
                    >
                      <div className="text-2xl md:text-3xl font-bold text-green-400">{stat.value}</div>
                      <div className="text-sm text-gray-400 mt-2">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Right Column - Accordion */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                {[
                  { 
                    title: "OUR HISTORY", 
                    icon: <FaHistory className="w-6 h-6" />,
                    content: "Grovia was founded in 2018 with a vision to bridge the gap between traditional businesses and the digital world. Starting as a small team of three passionate marketers, we've grown into a full-service digital agency trusted by brands worldwide."
                  },
                  { 
                    title: "OUR MISSION", 
                    icon: <FaBullseye className="w-6 h-6" />,
                    content: "To empower businesses of all sizes with cutting-edge digital solutions that drive measurable results. We combine creativity with data-driven strategies to help our clients achieve their online objectives and maximize ROI."
                  },
                  { 
                    title: "OUR VISION", 
                    icon: <FaEye className="w-6 h-6" />,
                    content: "To be the leading digital transformation partner for businesses globally. We envision a future where every brand can effectively leverage digital technology to connect with their audience and achieve sustainable growth."
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.15 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-md rounded-2xl border border-green-500/20 overflow-hidden group hover:border-green-500/40 transition-all duration-300"
                  >
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full px-6 py-5 md:px-8 md:py-6 text-left flex items-center justify-between hover:bg-gray-800/20 transition-colors"
                    >
                      <div className="flex items-center gap-4 md:gap-6">
                        <div className="p-3 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 group-hover:border-green-500/50 transition-colors">
                          <div className="text-green-400">
                            {item.icon}
                          </div>
                        </div>
                        <div className="text-left">
                          <div className="text-sm md:text-base text-green-400 font-medium mb-1">
                            {item.title.split(' ')[0]}
                          </div>
                          <div className="text-lg md:text-xl font-bold">
                            {item.title.split(' ')[1]}
                          </div>
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: openAccordion === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-green-400 text-xl"
                      >
                        <FaChevronDown />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {openAccordion === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 md:px-8 md:pb-8 pt-2 text-gray-300 text-base md:text-lg leading-relaxed border-t border-green-500/20">
                            {item.content}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}