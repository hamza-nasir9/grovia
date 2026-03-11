'use client'
import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const Grovia = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Animated Counter Component
const Counter = ({ end, label, duration = 2 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
  const [count, setCount] = useState(0);
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0 });
      
      let start = 0;
      const increment = end / (duration * 60);
      
      const timer = setInterval(() => {
        start += increment;
        if (start > end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [isInView, end, duration, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={controls}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative cursor-pointer"
    >
      {/* Animated Background Glow */}
      <motion.div
        animate={isHovered ? {
          opacity: 1,
          scale: 1.1,
        } : {
          opacity: 0,
          scale: 1,
        }}
        className="absolute -inset-3 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/5 blur-xl transition-all duration-500"
      />
      
      {/* Main Counter Container */}
      <div className="relative mx-auto mb-4 w-28 h-28 md:w-36 md:h-36">
        {/* Animated Outer Ring */}
        <motion.div
          animate={isHovered ? {
            rotate: 360,
            borderWidth: "3px",
          } : {
            rotate: 0,
            borderWidth: "1px",
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 rounded-full border border-green-500/30"
        />
        
        {/* Gradient Border */}
        <div className={`absolute inset-0 rounded-full p-1 ${
          isHovered 
            ? 'bg-gradient-to-br from-green-400 via-emerald-500 to-green-600' 
            : 'bg-gradient-to-br from-gray-700 to-gray-800'
        } transition-all duration-500`}>
          
          {/* Inner Circle */}
          <div className={`absolute inset-1 rounded-full flex items-center justify-center ${
            isHovered 
              ? 'bg-gradient-to-br from-gray-900 to-black' 
              : 'bg-gradient-to-br from-gray-900/90 to-black'
          } transition-all duration-500`}>
            
            {/* Counter Number with Glow Effect */}
            <motion.div
              animate={isHovered ? {
                scale: 1.1,
                textShadow: "0 0 15px rgba(74, 222, 128, 0.4)",
              } : {
                scale: 1,
                textShadow: "none",
              }}
              transition={{ duration: 0.3 }}
              className="text-4xl md:text-5xl font-bold text-green-400"
            >
              {count}+
            </motion.div>
            
            {/* Small Animated Dots */}
            <div className="absolute bottom-4 flex space-x-1">
              {[0, 1, 2].map((dot) => (
                <motion.div
                  key={dot}
                  animate={isHovered ? {
                    scale: [1, 1.5, 1],
                    opacity: [0.6, 1, 0.6],
                  } : {}}
                  transition={{
                    duration: 1.5,
                    repeat: isHovered ? Infinity : 0,
                    delay: dot * 0.2,
                  }}
                  className="w-1.5 h-1.5 rounded-full bg-green-400/70"
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Floating Particles on Hover */}
        {isHovered && (
          <>
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 0.8, 0],
                  x: Math.cos(i * 90) * 25,
                  y: Math.sin(i * 90) * 25,
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
                className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-green-400/50"
              />
            ))}
          </>
        )}
      </div>
      
      {/* Label with Enhanced Styling */}
      <div className="text-center">
        <motion.div
          animate={isHovered ? {
            color: "#4ade80",
            y: -2,
          } : {
            color: "#d1d5db",
            y: 0,
          }}
          className="uppercase tracking-wider text-xs md:text-sm font-medium mb-2 transition-colors duration-300"
        >
          {label}
        </motion.div>
        
        {/* Animated Underline */}
        <motion.div
          animate={isHovered ? {
            width: "60px",
            backgroundColor: "#4ade80",
          } : {
            width: "30px",
            backgroundColor: "#6b7280",
          }}
          className="h-0.5 mx-auto rounded-full transition-all duration-300"
        />
      </div>
    </motion.div>
  );
};
  // Feature Card Component
  const FeatureCard = ({ title, description, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.2 });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -5 }}
        className="group"
      >
        <div className="relative p-6 h-86 md:p-8 rounded-xl bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-800/50 group-hover:border-green-500/30 transition-all duration-300 backdrop-blur-sm">
          {/* Simple Icon */}
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gray-800 to-black border border-gray-700 flex items-center justify-center mb-6">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-green-600"></div>
          </div>
          
          {/* Title */}
          <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-green-400 transition-colors duration-300">
            {title}
          </h3>
          
          {/* Description */}
          <p className="text-gray-400 leading-relaxed">
            {description}
          </p>
          
          {/* Hover Line */}
          <div className="h-0.5 mt-6 w-0 group-hover:w-full bg-green-500 transition-all duration-500"></div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      {/* Professional Background */}
      <div className="absolute inset-0">
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-green-950/20"></div>
        
        {/* Subtle Animated Gradient */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              radial-gradient(circle at 20% 30%, rgba(34, 197, 94, 0.1) 0%, transparent 40%),
              radial-gradient(circle at 80% 70%, rgba(16, 185, 129, 0.05) 0%, transparent 40%),
              linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, transparent 100%)
            `,
          }}
        />
        
        {/* Very Subtle Moving Gradient */}
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(45deg, rgba(34, 197, 94, 0.05) 0%, transparent 50%, rgba(34, 197, 94, 0.05) 100%)`,
            backgroundSize: '400% 400%',
          }}
        />
        
        {/* Subtle Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 md:py-24">
       

        {/* Stats Section */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Digital Marketing <span className="text-green-400">Excellence</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              5+ years of expertise delivering measurable results for global brands
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Counter end={5} label="Years of Experience" />
            <Counter end={200} label="Successful Projects" />
            <Counter end={150} label="Happy Clients" />
            <Counter end={160} label="5 Star Reviews" />
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-4xl mx-auto my-20">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
        </div>

        {/* Features Section */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="text-green-400">Us</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We combine data-driven strategies with creative excellence to deliver exceptional ROI
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <FeatureCard 
              title="Proven Success – Global Reach"
              description="With 5+ years of collective expertise, we've executed 200+ high-impact campaigns, helping brands expand worldwide."
              index={0}
            />
            
            <FeatureCard 
              title="Custom Strategies – Real Results"
              description="No generic solutions—our data-driven approach is tailored to your goals, audience, and industry for measurable success."
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

      {/* Very Subtle Floating Elements (only 3) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.05 }}
            transition={{ duration: 2, delay: i * 0.5 }}
            className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-green-500/10 to-transparent"
            
          />
        ))}
      </div>
    </div>
  );
};

export default Grovia;