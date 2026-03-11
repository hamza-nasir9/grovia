'use client';

import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

const AboutHero = () => {
  const [mounted, setMounted] = useState(false);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Text scroll animations - subtle effects
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, 50]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const smoothY = useSpring(textY, { stiffness: 100, damping: 30 });
  const smoothOpacity = useSpring(textOpacity, { stiffness: 100, damping: 30 });
  const smoothScale = useSpring(scale, { stiffness: 100, damping: 30 });

  // Background parallax elements
  const bgY1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const bgY2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const smoothBgY1 = useSpring(bgY1, { stiffness: 50, damping: 20 });
  const smoothBgY2 = useSpring(bgY2, { stiffness: 50, damping: 20 });
  const smoothBgScale = useSpring(bgScale, { stiffness: 50, damping: 20 });

  const services = [
    {
      title: "Website Design & Development",
      skills: ["HTML/CSS/JS", "React/Next.js", "WordPress", "Shopify", "PHP"],
      color: "from-green-500 to-emerald-400",
      bgColor: "from-green-900/20 to-emerald-900/10"
    },
    {
      title: "SEO (Search Engine Optimization)",
      skills: ["Keyword Research", "On-Page SEO", "Technical SEO", "Link Building"],
      color: "from-emerald-400 to-green-300",
      bgColor: "from-emerald-900/20 to-green-900/10"
    },
    {
      title: "Social Media Marketing",
      skills: ["Facebook Ads", "Instagram", "Content Strategy", "Analytics"],
      color: "from-green-400 to-emerald-300",
      bgColor: "from-green-900/20 to-emerald-900/10"
    },
  ];

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % services.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-[60vh] min-h-[600px] overflow-hidden bg-black">

      {/* ✅ ANIMATED BACKGROUND WITH PARALLAX */}
      <div className="absolute inset-0 overflow-hidden">
        
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-green-950/30" />
        
        {/* Animated floating elements - Parallax Layer 1 */}
        <motion.div 
          className="absolute inset-0"
          style={{ y: smoothBgY1, scale: smoothBgScale }}
        >
          {/* Large gradient orbs */}
          <div className="absolute -top-40 -left-40 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-green-900/10 to-transparent blur-3xl" />
          <div className="absolute -bottom-40 -right-40 w-[800px] h-[800px] rounded-full bg-gradient-to-l from-emerald-900/10 to-transparent blur-3xl" />
          
          {/* Grid pattern */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(34, 197, 94, 0.2) 1px, transparent 1px),
                               linear-gradient(to bottom, rgba(34, 197, 94, 0.2) 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }}
          />
        </motion.div>
        
        {/* Parallax Layer 2 - Floating particles */}
        <motion.div 
          className="absolute inset-0"
          style={{ y: smoothBgY2 }}
        >
          {/* Floating particles */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-green-500/5 to-emerald-500/5"
              style={{
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: 0.3,
                filter: 'blur(40px)',
                animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </motion.div>
        
        {/* Animated gradient overlay */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentServiceIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className={`absolute inset-0 bg-gradient-to-br ${services[currentServiceIndex].bgColor}`}
          />
        </AnimatePresence>
        
        {/* Subtle scanlines effect */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-green-500 to-transparent animate-scanline" />
          <style jsx>{`
            @keyframes scanline {
              0% { transform: translateY(-100vh); }
              100% { transform: translateY(100vh); }
            }
            .animate-scanline {
              animation: scanline 8s linear infinite;
            }
          `}</style>
        </div>
      </div>

      {/* CONTENT WITH SCROLL ANIMATIONS */}
      <motion.div
        className="relative z-30 w-full h-full flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
        style={{
          opacity: mounted ? smoothOpacity : 1,
          scale: mounted ? smoothScale : 1,
          y: mounted ? smoothY : 0,
        }}
      >
        <div className="text-center max-w-6xl mx-auto">

          {/* HEADING WITH SCROLL EFFECT */}
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            WE EXCEL IN
          </motion.h1>

          {/* ANIMATED TITLE */}
          <AnimatePresence mode="wait">
            <motion.h2
              key={currentServiceIndex}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.6 }}
              className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${services[currentServiceIndex].color} mb-8`}
            >
              {services[currentServiceIndex].title}
            </motion.h2>
          </AnimatePresence>

          {/* SKILLS WITH STAGGER ANIMATION */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {services[currentServiceIndex].skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(34, 197, 94, 0.3)' }}
                className="px-4 py-2 rounded-full border border-green-500/30 text-green-200 bg-green-900/20 text-sm cursor-pointer transition-all duration-300 backdrop-blur-sm"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>

          {/* TAGLINE */}
          <motion.p 
            className="max-w-3xl mx-auto text-gray-300 text-sm sm:text-base md:text-lg mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            We help brands grow through performance-driven digital solutions,
            modern design, and scalable technology.
          </motion.p>

          {/* CTA BUTTON WITH PULSE */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 30px rgba(34, 197, 94, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            className="relative mt-12 px-10 py-5 bg-gradient-to-r from-green-600 via-emerald-500 to-green-600 text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-green-500/40 transition-all duration-300 overflow-hidden group"
          >
            {/* Button shine effect */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            
            <span className="relative z-10">Learn More About Us</span>
            
            {/* Animated border */}
            <span className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-green-500 to-emerald-400 -z-10">
              <span className="absolute inset-0 rounded-full bg-black" />
            </span>
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutHero;