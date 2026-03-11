// components/ServicesSection.js
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';

// Green & Black theme icons (using emojis/unicode to avoid package issues)
const GreenIcons = {
  Performance: '📈',
  SocialMedia: '📱',
  Content: '🎬',
  WebDev: '💻',
  SEO: '🔍',
  Analytics: '📊'
};

const services = [
  {
    title: "Performance Marketing",
    description: "We don't just run ads — we scale businesses. From Meta to Google & from Snapchat to TikTok, our performance marketing strategies are built to convert, not just get clicks.",
    icon: GreenIcons.Performance,
    color: "from-green-500 to-emerald-600",
    delay: 0.1
  },
  {
    title: "Social Media Marketing",
    description: "Social media isn't just about posting pretty pictures — it's about building a brand people actually care about. We help you show up, stay consistent, and stay relevant.",
    icon: GreenIcons.SocialMedia,
    color: "from-black to-green-900",
    delay: 0.2
  },
  {
    title: "Content Marketing",
    description: "From reels to product shoots, we create content that looks good and sells. Strategic storytelling that converts viewers into customers.",
    icon: GreenIcons.Content,
    color: "from-green-600 to-green-800",
    delay: 0.3
  },
  {
    title: "Web Design & Development",
    description: "Transform your vision into a user-friendly and visually appealing website or app design that drives results and enhances user experience.",
    icon: GreenIcons.WebDev,
    color: "from-black to-gray-800",
    delay: 0.4
  },
  {
    title: "SEO Optimization",
    description: "Dominate search rankings with data-driven SEO strategies that drive organic traffic and increase visibility across all search engines.",
    icon: GreenIcons.SEO,
    color: "from-green-400 to-green-600",
    delay: 0.5
  },
  {
    title: "Analytics & Reporting",
    description: "Comprehensive performance tracking and actionable insights to measure ROI and optimize your marketing strategies continuously.",
    icon: GreenIcons.Analytics,
    color: "from-black to-green-950",
    delay: 0.6
  },
];

export default function ServicesSection() {
  const containerRef = useRef(null);

  // Parallax scroll effects - Server side error ko avoid karne ke liye check
  let scrollYProgress = { value: 0 };
  let opacity = 1;
  let y = 0;
  let scale = 1;

  // Client side par hi useScroll use karein
  if (typeof window !== 'undefined') {
    const { useScroll, useTransform } = require('framer-motion');
    const { scrollYProgress: sp } = useScroll({
      target: containerRef,
      offset: ["start end", "end start"]
    });

    scrollYProgress = sp;
    opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
    y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.95]);
  }

  return (
    <section
      ref={containerRef}
      className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(0,255,136,0.03),transparent_50%)]" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ✅ FIXED: Section Header - Center Aligned */}
        <motion.div
          style={{ opacity, y, scale }}
          className="flex flex-col items-center justify-center text-center mb-12 md:mb-20 w-full"
        >
          {/* Badge - Centered */}
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

          {/* ✅ FIXED: Main Title - Properly Centered */}
          <div className="w-full bg-pink flex flex-col items-center justify-center py-6 md:py-10">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center leading-snug md:leading-normal tracking-tight"
            >
              <span className="block bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                Marketing Services
              </span>
            </motion.h2>
          </div>

          {/* ✅ FIXED: Subtitle - Centered */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed text-center"
          >
            From strategic planning to execution and optimization, we provide comprehensive digital solutions that drive measurable growth for franchises and multi-location brands.
          </motion.p>
        </motion.div>

        {/* Services Grid with Stagger Animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
              }
            }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 60,
                  scale: 0.95
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.6,
                    ease: "easeOut",
                    delay: service.delay
                  }
                }
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-6 md:p-8 transition-all duration-500 hover:border-green-500/50 hover:shadow-2xl hover:shadow-green-500/10">

                {/* Hover Effect Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon Container */}
                <div className={`relative z-10 mb-6 w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                  <span className="text-2xl md:text-3xl">{service.icon}</span>
                </div>

                {/* Title */}
                <h3 className="relative z-10 text-xl md:text-2xl font-bold mb-4 text-white group-hover:text-green-400 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="relative z-10 text-gray-400 text-sm md:text-base leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Read More Link */}
                <div className="relative z-10 flex items-center">
                  <span className="text-green-500 text-sm font-medium group-hover:text-green-400 transition-colors duration-300">
                    Learn More
                  </span>
                  <div className="ml-2 w-0 group-hover:w-6 transition-all duration-300 overflow-hidden">
                    <span className="text-green-500">→</span>
                  </div>
                </div>

                {/* Decorative Line */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-emerald-400 group-hover:w-full transition-all duration-500" />
              </div>

              {/* Floating Element (Desktop only) */}
              <div className="hidden lg:block absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12 md:mt-20"
        >
          <button className="group relative px-8 sm:px-12 py-4 sm:py-5 rounded-full bg-gradient-to-r from-green-600 to-emerald-700 text-white font-bold text-sm sm:text-base transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/30 hover:scale-105 active:scale-95 overflow-hidden">

            {/* Button Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Button Content */}
            <Link href={'/services'} > <span className="relative z-10 flex items-center">
              View All Services
              <span className="ml-3 group-hover:translate-x-2 transition-transform duration-300">→</span>
            </span></Link>

            {/* Button Border Animation */}
            <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-green-400/50 transition-all duration-300" />
          </button>
        </motion.div>

      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-1/4 w-4 h-4 bg-green-500 rounded-full opacity-20 animate-pulse" />
      <div className="absolute top-20 right-1/4 w-3 h-3 bg-green-400 rounded-full opacity-30 animate-ping" />
      <div className="absolute top-1/2 left-10 w-2 h-2 bg-emerald-500 rounded-full opacity-40" />
    </section>
  );
}