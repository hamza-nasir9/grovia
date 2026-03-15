// components/ServicesSection.js
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';

// Heroicons import
import {
  ChartBarIcon,
  ShareIcon,
  FilmIcon,
  ComputerDesktopIcon,
  MagnifyingGlassIcon,
  DocumentChartBarIcon
} from '@heroicons/react/24/outline';

const services = [
  {
    title: "Performance Marketing",
    description: "We don't just run ads — we scale businesses. From Meta to Google & from Snapchat to TikTok, our performance marketing strategies are built to convert, not just get clicks.",
    icon: ChartBarIcon,
    color: "from-green-500 to-emerald-600",
    delay: 0.1
  },
  {
    title: "Social Media Marketing",
    description: "Social media isn't just about posting pretty pictures — it's about building a brand people actually care about. We help you show up, stay consistent, and stay relevant.",
    icon: ShareIcon,
    color: "from-black to-green-900",
    delay: 0.2
  },
  {
    title: "Content Marketing",
    description: "From reels to product shoots, we create content that looks good and sells. Strategic storytelling that converts viewers into customers.",
    icon: FilmIcon,
    color: "from-green-600 to-green-800",
    delay: 0.3
  },
  {
    title: "Web Design & Development",
    description: "Transform your vision into a user-friendly and visually appealing website or app design that drives results and enhances user experience.",
    icon: ComputerDesktopIcon,
    color: "from-black to-gray-800",
    delay: 0.4
  },
  {
    title: "SEO Optimization",
    description: "Dominate search rankings with data-driven SEO strategies that drive organic traffic and increase visibility across all search engines.",
    icon: MagnifyingGlassIcon,
    color: "from-green-400 to-green-600",
    delay: 0.5
  },
  {
    title: "Analytics & Reporting",
    description: "Comprehensive performance tracking and actionable insights to measure ROI and optimize your marketing strategies continuously.",
    icon: DocumentChartBarIcon,
    color: "from-black to-green-950",
    delay: 0.6
  },
];

export default function ServicesSection() {
  const containerRef = useRef(null);
  
  // Hooks top level par call karo
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.95]);

  return (
    <section
      ref={containerRef}
      className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(0,255,136,0.03),transparent_50%)]" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          style={{ opacity, y, scale }}
          className="flex flex-col items-center justify-center text-center mb-12 md:mb-20 w-full"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-4 py-2 bg-green-900/30 border border-green-500/30 rounded-full mb-6"
          >
            <div className="w-6 h-px bg-green-500" />
            <span className="text-green-400 text-xs sm:text-sm font-medium uppercase tracking-wider">
              Our Services
            </span>
            <div className="w-6 h-px bg-green-500" />
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center"
          >
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              Marketing Services
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
          >
            From strategic planning to execution and optimization, we provide comprehensive digital solutions that drive measurable growth for franchises and multi-location brands.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: service.delay }
                  }
                }}
                whileHover={{ 
                  y: -8,
                  transition: { 
                    duration: 0.3,
                    ease: "easeOut"
                  }
                }}
                className="group relative"
              >
                {/* Card - Smooth hover effects */}
                <div className="relative h-full overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-6 md:p-8 transition-all duration-300 ease-out hover:border-green-500/50 hover:shadow-xl hover:shadow-green-500/10">
                  
                  {/* Smooth Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" />
                  
                  {/* Icon - Smooth scale */}
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className={`relative z-10 mb-6 w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center transition-shadow duration-300 group-hover:shadow-md group-hover:shadow-green-500/20`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Title - Smooth color transition */}
                  <h3 className="relative z-10 text-xl md:text-2xl font-bold mb-4 text-white transition-colors duration-300 ease-out group-hover:text-green-400">
                    {service.title}
                  </h3>

                  {/* Description - Smooth color */}
                  <p className="relative z-10 text-gray-400 text-sm md:text-base leading-relaxed mb-6 transition-colors duration-300 ease-out group-hover:text-gray-300">
                    {service.description}
                  </p>

                  {/* Learn More - Smooth slide */}
                  <div className="relative z-10 flex items-center">
                    <span className="text-green-500 text-sm font-medium transition-colors duration-300 group-hover:text-green-400">
                      Learn More
                    </span>
                    <motion.span 
                      className="ml-2 text-green-500"
                      animate={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                      →
                    </motion.span>
                  </div>

                  {/* Bottom Line - Smooth width expansion */}
                  <motion.div 
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-green-500 to-emerald-400"
                  />
                </div>

                {/* Floating dot - Smooth opacity */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{ opacity: 0.5, scale: 1 }}
                  transition={{ duration: 0.2 }}
                  className="hidden lg:block absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full"
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12 md:mt-20"
        >
          <Link href="/services">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="group relative px-8 sm:px-12 py-4 sm:py-5 rounded-full bg-gradient-to-r from-green-600 to-emerald-700 text-white font-bold text-sm sm:text-base transition-shadow duration-300 hover:shadow-xl hover:shadow-green-500/20"
            >
              <span className="relative z-10 flex items-center">
                View All Services
                <motion.span 
                  className="ml-3 inline-block"
                  animate={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  →
                </motion.span>
              </span>
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Floating Elements - Smooth animations */}
      <motion.div 
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-10 left-1/4 w-4 h-4 bg-green-500 rounded-full opacity-20"
      />
      
      <motion.div 
        animate={{
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 right-1/4 w-3 h-3 bg-green-400 rounded-full opacity-30"
      />
      
      <motion.div 
        animate={{
          x: [0, 15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 left-10 w-2 h-2 bg-emerald-500 rounded-full opacity-40"
      />
    </section>
  );
}