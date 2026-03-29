'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react';
import {
  Sparkles,
  Target,
  TrendingUp,
  Zap,
  Globe,
  BarChart3,
  ChevronRight,
  PlayCircle,
  Award
} from 'lucide-react';
import Link from 'next/link';

const HeroSection = () => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.7]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      requestAnimationFrame(() => { });
    });
  }, []);

  const brands = [
    { name: 'HLB HAMT', score: 94, delay: 0 },
    { name: 'HUB', score: 88, delay: 0.2 },
    { name: 'JOCKEY®', score: 96, delay: 0.4 },
    { name: 'DAMAC', score: 91, delay: 0.6 },
  ];

  const features = [
    { icon: Target, text: "Multi-location Strategy", color: "#10B981" },
    { icon: Globe, text: "Global Brand Presence", color: "#059669" },
    { icon: BarChart3, text: "Data-Driven Results", color: "#047857" },
    { icon: Zap, text: "Rapid Implementation", color: "#10B981" },
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-black text-center"
    >
      {/* Background - Koi change nahi */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 30%, rgba(16, 185, 129, 0.2) 0%, transparent 50%)`
          }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        ref={contentRef}
        style={{ y }}
        className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center"
      >
        {/* Trusted Badge - Fixed: Added pt-24 for navbar se neeche */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-900/30 to-emerald-900/20 rounded-full border border-green-700/30 mb-8 self-start mt-24 mx-auto lg:mt-32"
        >
          <Sparkles className="w-4 h-4 text-green-400" />
          <span className="text-green-300 text-sm font-medium">TRUSTED BY 500+ Brands</span>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2 h-2 bg-green-500 rounded-full"
          />
        </motion.div>

        {/* ✅ EXACT CLIENT HEADING - No Changes */}
        <div className="mb-4 ">
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
              {/* Line 1: More Visibility. - Client ke hisaab se */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-2"
              >
                <span className="text-white inline-block mr-2">More</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-green-400 to-emerald-300 inline-block">
                  Visibility.
                </span>
                <span className="text-white inline-block mr-2">More</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-green-400 inline-block font-bold">
                  Leads.
                </span>
              </motion.div>

              {/* Line 2: More Leads. - EXACT Client Design */}
              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mb-2"
              >
                <span className="text-white inline-block mr-2">More</span>
                <motion.span
                  className="relative inline-block"
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-green-400 inline-block font-bold">
                    Leads.
                  </span>
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-green-500 to-emerald-400"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.8 }}
                  />
                </motion.span>
              </motion.div> */}

              {/* Line 3: More Growth. - EXACT Client Design */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <span className="text-white inline-block mr-2">More</span>
                <span className="text-green-400 inline-block font-bold">Growth.</span>
              </motion.div>
            </h1>
          </motion.div>
        </div>

        {/* Description - No Changes */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="max-w-3xl mb-8 mx-auto"
        >
          <p className="text-xl text-gray-300 leading-relaxed ">
            Digital marketing crafted for{' '}
            <motion.span
              className="text-green-400 font-semibold inline-block"
              whileHover={{ scale: 1.05 }}
            >
              franchises
            </motion.span>
            ,{' '}
            <motion.span
              className="text-green-400 font-semibold inline-block"
              whileHover={{ scale: 1.05 }}
            >
              multi-location brands
            </motion.span>
            , and{' '}
            <motion.span
              className="text-green-400 font-semibold inline-block"
              whileHover={{ scale: 1.05 }}
            >
              visionaries
            </motion.span>{' '}
            ready to own their space. Blending bold creativity, smart strategy, and next-gen tech to elevate your brand in the digital age.
          </p>
        </motion.div>

        {/* Features Grid - No Changes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.text}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3 + index * 0.1 }}
                whileHover={{
                  y: -5,
                  backgroundColor: 'rgba(16, 185, 129, 0.1)'
                }}
                className="flex items-center gap-3 p-4 rounded-xl border border-gray-800 bg-gray-900/20 backdrop-blur-sm"
              >
                <div className="p-2 rounded-lg" style={{ backgroundColor: `${feature.color}20` }}>
                  <Icon className="w-5 h-5" style={{ color: feature.color }} />
                </div>
                <span className="text-sm text-gray-300">{feature.text}</span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Buttons - No Changes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="flex flex-wrap gap-4 mb-20 justify-center"
        >

          <div className="flex justify-center">
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-transparent border-2 border-green-500 rounded-lg text-green-400 font-semibold text-lg flex items-center gap-2 hover:bg-green-500/10 transition-all w-auto"
              >
                <PlayCircle className="w-5 h-5" />
                <span>Contact Us</span>
              </motion.button>
            </Link>
          </div>
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 40px rgba(16, 185, 129, 0.3)'
            }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-500 rounded-lg text-white font-semibold text-lg flex items-center gap-2 overflow-hidden"
          >
            <Link href="/ShowProject">Case Studies</Link>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-600"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6 }}
            />
          </motion.button>


        </motion.div>

        {/* Spotlight Section - No Changes */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="mt-12"
        >
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;