'use client';

import { motion } from 'framer-motion';
import { FaChartLine, FaRocket, FaUsers, FaTrophy } from 'react-icons/fa';

const ProjectHero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-green-900/10 to-black">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block mb-8"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-900/30 rounded-full border border-green-500/30">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-400 font-medium">CASE STUDIES</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
        >
          <span className="block text-gray-100">Check Our Works</span>
          <span className="block bg-gradient-to-r from-green-400 via-emerald-300 to-green-400 bg-clip-text text-transparent">
            With Real Results
          </span>
        </motion.h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "150px" }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-1 bg-gradient-to-r from-green-500 to-emerald-400 mx-auto mb-8"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
        >
          Discover how we've helped businesses achieve remarkable growth through strategic 
          digital marketing solutions. Each case study represents real challenges, 
          innovative solutions, and measurable results.
        </motion.p>

        {/* Stats */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { icon: <FaChartLine />, value: "300%+", label: "Avg. Growth", color: "from-green-500 to-emerald-500" },
            { icon: <FaRocket />, value: "50+", label: "Projects", color: "from-emerald-500 to-green-600" },
            { icon: <FaUsers />, value: "98%", label: "Satisfaction", color: "from-green-600 to-emerald-600" },
            { icon: <FaTrophy />, value: "4.9/5", label: "Rating", color: "from-emerald-600 to-green-700" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 }
              }}
              className="text-center group"
            >
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-4 shadow-xl shadow-green-500/20 group-hover:shadow-green-500/40 transition-shadow`}>
                <div className="text-white text-2xl">{stat.icon}</div>
              </div>
              <span className="text-3xl font-bold text-white block mb-1">{stat.value}</span>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

    
    </section>
  );
};

export default ProjectHero;