'use client'
import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const OurSpecialities = () => {
  const sectionRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [controls]);

  // Animation variants for staggering
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.7, 
        ease: [0.22, 1, 0.36, 1] 
      },
    },
  };

  // Counter component for animated numbers
  const Counter = ({ end, prefix = '', suffix = '', label, delay = 0 }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
      if (inView) {
        let start = 0;
        const duration = 2000;
        const increment = end / (duration / 16);
        
        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);

        return () => clearInterval(timer);
      }
    }, [inView, end]);

    return (
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay }}
          className="relative"
        >
          <div className="text-6xl md:text-7xl  font-bold text-white">
            {prefix}{count}{suffix}
          </div>
          <div className="text-gray-300 uppercase tracking-widest text-sm font-medium mt-4">
            {label}
          </div>
        </motion.div>
      </div>
    );
  };

  return (
    <section 
      ref={sectionRef}
      className="relative bg-black"
    >
      {/* Section Container */}
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.8 }
            }
          }}
          className="mb-12 md:mb-20"
        >
          <div className="inline-block px-4 py-2 bg-green-500/10 rounded-full border border-green-500/20 mb-6">
            <span className="text-green-400 text-sm font-medium tracking-wider">
              Why Us
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our Specialities
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Data-driven digital marketing strategies that deliver measurable results.
          </p>
        </motion.div>

        {/* Main Grid - ASYMMETRIC LAYOUT */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {/* CARD 1: Large Image Card (Top Left - Spanning 2 columns) */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="lg:col-span-3 group relative rounded-2xl overflow-hidden min-h-[400px] lg:min-h-[500px]"
          >
            {/* Background Image with Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent">
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-30"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
                }}
              />
            </div>
            
            {/* Card Content */}
            <div className="relative z-10 h-full p-8 md:p-12 flex flex-col justify-between">
              {/* Top Content */}
              <div>
                <Counter 
                  end={150} 
                  suffix="%" 
                  label="Average Traffic Increase"
                  delay={0.2}
                />
              </div>

              {/* Bottom Glassmorphism Text Overlay */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: 0.4, duration: 0.6 }
                  }
                }}
                className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-6 md:p-8"
              >
                <p className="text-gray-300 leading-relaxed">
                  The enduring partnerships we forge with our clients are a testament to the exceptional results 
                  we deliver and the strength of our commitment to their long-term success.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* CARD 2: Revenue Card (Top Right) */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="bg-gray-900/60 border lg:col-span-1  border-gray-800 rounded-2xl p-8 md:p-10 group relative"
          >
            <div className="h-full flex flex-col">
              {/* Revenue Counter */}
              <div className="mb-8">
                <Counter 
                  end={74} 
                  prefix="$" 
                  suffix="M" 
                  label="Revenue Generated"
                  delay={0.3}
                />
              </div>

              {/* Supporting Text */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={controls}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { 
                    opacity: 1,
                    transition: { delay: 0.5, duration: 0.6 }
                  }
                }}
                className="mt-auto pt-8 border-t border-gray-800/50"
              >
                <p className="text-gray-400 text-sm leading-relaxed">
                  $74M+ in revenue generated for our clients worldwide through targeted digital campaigns.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* CARD 3: Green Highlight Card (Bottom Left) */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="bg-green-600 rounded-2xl lg:col-span-2  p-8 md:p-10 relative min-h-[300px]"
          >
            <div className="h-full flex flex-col">
              {/* Main Content */}
              <div className="mb-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={controls}
                  variants={{
                    hidden: { opacity: 0, scale: 0.9 },
                    visible: { 
                      opacity: 1, 
                      scale: 1,
                      transition: { delay: 0.4, duration: 0.6 }
                    }
                  }}
                >
                  <div className="text-6xl md:text-7xl font-bold text-white mb-4">
                    80%
                  </div>
                  <div className="text-white/90 uppercase tracking-widest text-sm font-medium">
                    Enhanced Brand Visibility
                  </div>
                </motion.div>
              </div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={controls}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { 
                    opacity: 1,
                    transition: { delay: 0.6, duration: 0.6 }
                  }
                }}
                className="text-white/80 leading-relaxed mb-8 flex-grow"
              >
                By combining website development, SEO, Meta Ads, Google Ads, and content marketing, 
                we delivered an 80% increase in website traffic within six months.
              </motion.p>

              {/* Progress Bar */}
              <div className="mt-auto">
                <div className="flex justify-between text-white/80 text-sm mb-2">
                  <span>Traffic Growth</span>
                  <span>80%</span>
                </div>
                <div className="h-2 bg-white/30 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={controls}
                    variants={{
                      hidden: { width: 0 },
                      visible: { 
                        width: "80%",
                        transition: { delay: 0.8, duration: 1, ease: "easeOut" }
                      }
                    }}
                    className="h-full bg-white rounded-full"
                  ></motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CARD 4: Image Card (Bottom Right) */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="relative lg:col-span-2  rounded-2xl overflow-hidden min-h-[300px] group"
          >
            {/* Background Image with Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/30">
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-40"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
                }}
              />
            </div>

            {/* Card Content */}
            <div className="relative z-10 h-full p-8 flex items-end">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: 0.7, duration: 0.6 }
                  }
                }}
                className="text-center w-full"
              >
                <div className="inline-block px-6 py-3 bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl">
                  <h4 className="text-white font-medium mb-1">Performance Analytics</h4>
                  <p className="text-gray-300 text-sm">Real-time tracking and optimization</p>
                </div>
              </motion.div>
            </div>

            {/* Shadow */}
            <div className="absolute inset-0 rounded-2xl shadow-2xl shadow-black/50"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurSpecialities;