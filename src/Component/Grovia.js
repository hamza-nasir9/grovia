'use client'
import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const Grovia = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // ✅ PERFECT: Circle + Text Zoom on Hover
  const Counter = ({ end, label, duration = 2, suffix = "+" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.3 });
    const [count, setCount] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    
    useEffect(() => {
      if (isInView) {
        let startTime;
        let animationFrame;
        
        const animate = (timestamp) => {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
          
          const easeOutCubic = 1 - Math.pow(1 - progress, 3);
          setCount(Math.floor(easeOutCubic * end));
          
          if (progress < 1) {
            animationFrame = requestAnimationFrame(animate);
          }
        };
        
        animationFrame = requestAnimationFrame(animate);
        
        return () => {
          if (animationFrame) {
            cancelAnimationFrame(animationFrame);
          }
        };
      }
    }, [isInView, end, duration]);

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="relative cursor-pointer group w-full max-w-[200px] mx-auto"
      >
        {/* Main Counter Container */}
        <div className="relative mx-auto mb-3 sm:mb-4">
          
          {/* Circle Container - Zoom on hover */}
          <motion.div
            animate={{ 
              scale: isHovered ? 1.08 : 1,  // Circle 8% bara
            }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 mx-auto"
          >
            {/* Base Circle */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-800 to-gray-900" />
            
            {/* DEFAULT GLOW */}
            <div className="absolute inset-0 rounded-full shadow-[0_0_10px_rgba(74,222,128,0.2)]" />
            
            {/* HOVER GLOW */}
            <motion.div
              animate={{ 
                boxShadow: isHovered 
                  ? '0 0 20px #4ade80' 
                  : '0 0 10px rgba(74,222,128,0.2)'
              }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute inset-0 rounded-full"
            />
            
            {/* Border Ring */}
            <motion.div
              animate={{ 
                borderColor: isHovered ? '#4ade80' : '#374151',
              }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute inset-0 rounded-full border-2"
            />
            
            {/* Inner Circle with Number */}
            <div className="absolute inset-[3px] rounded-full bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
              <motion.span
                animate={{ 
                  scale: isHovered ? 1.15 : 1,  // Text 15% bara
                  color: isHovered ? '#4ade80' : '#4ade80',
                  textShadow: isHovered 
                    ? '0 0 12px #4ade80' 
                    : '0 0 5px rgba(74,222,128,0.3)'
                }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"
              >
                {count}{suffix}
              </motion.span>
            </div>
          </motion.div>
        </div>
        
        {/* Label */}
        <div className="text-center">
          <motion.p
            animate={{ 
              y: isHovered ? -2 : 0,
              color: isHovered ? '#4ade80' : '#9CA3AF',
            }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="text-xs sm:text-sm md:text-base font-medium tracking-wide px-2"
          >
            {label}
          </motion.p>
          
          {/* Underline */}
          <motion.div 
            animate={{ 
              width: isHovered ? '40px' : '20px',
              backgroundColor: isHovered ? '#4ade80' : '#4B5563',
            }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="h-0.5 mx-auto mt-1 sm:mt-2 rounded-full"
          />
        </div>
      </motion.div>
    );
  };

  // ✅ Feature Card with Responsive Design
  const FeatureCard = ({ title, description, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.2 });
    const [isHovered, setIsHovered] = useState(false);

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="relative group w-full"
      >
        <motion.div 
          animate={{ 
            y: isHovered ? -3 : 0,
            borderColor: isHovered ? '#4ade80' : '#1F2937',
            boxShadow: isHovered 
              ? '0 0 20px #4ade80' 
              : '0 0 10px rgba(74,222,128,0.1)'
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="relative p-4 sm:p-5 md:p-6 lg:p-8 rounded-lg sm:rounded-xl bg-gradient-to-br from-gray-900 to-black border overflow-hidden"
        >
          {/* Icon */}
          <motion.div 
            animate={{ 
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg bg-gray-800 flex items-center justify-center mb-3 sm:mb-4 md:mb-6"
          >
            <motion.div 
              animate={{ 
                scale: isHovered ? 1.15 : 1,
                boxShadow: isHovered ? '0 0 15px #4ade80' : 'none'
              }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full bg-gradient-to-br from-green-400 to-green-600"
            />
          </motion.div>
          
          {/* Title */}
          <motion.h3 
            animate={{ 
              color: isHovered ? '#4ade80' : '#FFFFFF',
            }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-2 sm:mb-3"
          >
            {title}
          </motion.h3>
          
          {/* Description */}
          <motion.p 
            animate={{ color: isHovered ? '#E5E7EB' : '#9CA3AF' }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="text-xs sm:text-sm md:text-base leading-relaxed"
          >
            {description}
          </motion.p>
          
          {/* Bottom Line */}
          <motion.div 
            animate={{ 
              width: isHovered ? '100%' : '0%',
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-green-400 to-green-600"
          />
        </motion.div>
      </motion.div>
    );
  };

  return (
    <div className="relative min-h-screen text-white overflow-hidden bg-black">
      {/* Background - Pure black */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 to-black" />
      </div>

      <div className="relative z-10 container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-24">
        {/* Header */}
        <section className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 md:mb-4 px-4">
              Digital Marketing <span className="text-green-400">Excellence</span>
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto px-4">
              5+ years of expertise delivering measurable results for global brands
            </p>
          </motion.div>

          {/* Counters Grid - Responsive */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
            <Counter end={5} label="Years of Experience" />
            <Counter end={200} label="Successful Projects" />
            <Counter end={150} label="Happy Clients" />
            <Counter end={160} label="5 Star Reviews" />
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-4xl mx-auto my-8 sm:my-12 md:my-16 lg:my-20">
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"
          />
        </div>

        {/* Features */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 px-4">
              Why Choose <span className="text-green-400">Us</span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto px-4">
              We combine data-driven strategies with creative excellence
            </p>
          </motion.div>

          {/* Feature Cards Grid - Responsive */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6 max-w-6xl mx-auto px-2 sm:px-4">
            <FeatureCard 
              title="Proven Success – Global Reach"
              description="With 5+ years of collective expertise, we've executed 200+ high-impact campaigns, helping brands expand worldwide."
              index={0}
            />
            <FeatureCard 
              title="Custom Strategies – Real Results"
              description="No generic solutions—our data-driven approach is tailored to your goals, audience, and industry."
              index={1}
            />
            <FeatureCard 
              title="Client-First – Excellence Always"
              description="Our clients trust us to deliver exceptional results, strategic insights, and continuous growth."
              index={2}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Grovia;